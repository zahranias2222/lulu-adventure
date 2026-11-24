import * as THREE from 'three';
import { mergeGeometries, mergeVertices } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { E } from './engine.js';

// ---------- helpers ----------
const mcache = new Map();
export function mat(color, o = {}) {
  const key = color + JSON.stringify(o);
  if (!o.unique && mcache.has(key)) return mcache.get(key);
  const m = new THREE.MeshPhysicalMaterial({ color, roughness: .6, metalness: 0, envMapIntensity: .55, ...o });
  delete m.unique;
  if (!o.unique) mcache.set(key, m);
  return m;
}
export const fur = (c, o = {}) => mat(c, { roughness: .72, sheen: .5, sheenRoughness: .6, sheenColor: new THREE.Color(c).lerp(new THREE.Color(0xffffff), .45), ...o });
export const gloss = (c, o = {}) => mat(c, { roughness: .25, clearcoat: .8, clearcoatRoughness: .2, ...o });

export function mesh(geo, material, { cast = true, receive = false } = {}) {
  const m = new THREE.Mesh(geo, material); m.castShadow = cast; m.receiveShadow = receive; return m;
}
export function sphere(r, m, ws = 40, hs = 28) { return mesh(new THREE.SphereGeometry(r, ws, hs), m); }
export function place(o, x = 0, y = 0, z = 0, sx = 1, sy = sx, sz = sx) { o.position.set(x, y, z); o.scale.set(sx, sy, sz); return o; }
export const rnd = (a, b) => a + Math.random() * (b - a);

// seeded value noise
function hash(x, y) { const s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453; return s - Math.floor(s); }
export function noise(x, y) {
  const xi = Math.floor(x), yi = Math.floor(y), xf = x - xi, yf = y - yi;
  const u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf);
  const a = hash(xi, yi), b = hash(xi + 1, yi), c = hash(xi, yi + 1), d = hash(xi + 1, yi + 1);
  return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
}
const fbm = (x, y) => noise(x, y) * .55 + noise(x * 2.1, y * 2.1) * .3 + noise(x * 4.3, y * 4.3) * .15;
const smooth = (a, b, x) => { const t = Math.min(Math.max((x - a) / (b - a), 0), 1); return t * t * (3 - 2 * t); };

// ---------- sky & lights ----------
export function makeSky(top = 0x5fb8ff, horizon = 0xfff0d6) {
  const g = new THREE.SphereGeometry(300, 32, 16);
  const m = new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false,
    uniforms: { top: { value: new THREE.Color(top) }, hor: { value: new THREE.Color(horizon) } },
    vertexShader: 'varying vec3 vp; void main(){ vp = position; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }',
    fragmentShader: 'uniform vec3 top; uniform vec3 hor; varying vec3 vp; void main(){ float h = normalize(vp).y; float k = smoothstep(-0.05, 0.55, h); gl_FragColor = vec4(mix(hor, top, k),1.);\n#include <colorspace_fragment>\n}',
  });
  return new THREE.Mesh(g, m);
}

export function makeLights(scene, { sun = 0xfff1dc, sunI = 2.9, hemiSky = 0xbfe3ff, hemiGround = 0x8fbf6a, size = 30 } = {}) {
  const hemi = new THREE.HemisphereLight(hemiSky, hemiGround, .6);
  scene.add(hemi);
  const d = new THREE.DirectionalLight(sun, sunI);
  d.position.set(14, 26, 12);
  d.castShadow = true;
  d.shadow.mapSize.set(2048, 2048);
  const c = d.shadow.camera; c.left = c.bottom = -size; c.right = c.top = size; c.near = 1; c.far = 90;
  d.shadow.bias = -0.0004; d.shadow.normalBias = 0.03; d.shadow.radius = 4;
  scene.add(d); scene.add(d.target);
  return { hemi, sun: d };
}

// ---------- water ----------
export function makeWater(size = 400, color = 0x14a3c7) {
  const g = new THREE.PlaneGeometry(size, size, 160, 160); g.rotateX(-Math.PI / 2);
  const m = mat(color, { roughness: .18, clearcoat: .6, clearcoatRoughness: .2, unique: true, envMapIntensity: .35 });
  const uni = { time: { value: 0 } };
  m.onBeforeCompile = sh => {
    sh.uniforms.time = uni.time;
    sh.vertexShader = 'uniform float time;\n' + sh.vertexShader.replace('#include <beginnormal_vertex>', `
      vec3 objectNormal = normalize(vec3(-cos(position.x*.35+time*1.3)*.042, 1., sin(position.z*.42+time*1.1)*.042));
    `).replace('#include <begin_vertex>', `
      vec3 transformed = position;
      transformed.y += sin(position.x*.35+time*1.3)*.12 + cos(position.z*.42+time*1.1)*.1 + sin((position.x+position.z)*.9+time*2.)*.035;
    `);
  };
  const w = new THREE.Mesh(g, m); w.receiveShadow = true;
  w.userData.update = (dt, t) => { uni.time.value = t; };
  return w;
}

// ---------- island terrain ----------
export function makeIsland({ R = 15, seed = 0, grass = 0x5cc23e, grass2 = 0x3c9e3a, sand = 0xf6dca4, height = 1.7, res = 140 } = {}) {
  const S = R * 2.6;
  const g = new THREE.PlaneGeometry(S, S, res, res); g.rotateX(-Math.PI / 2);
  const pos = g.attributes.position, col = [];
  const cg = new THREE.Color(grass), cg2 = new THREE.Color(grass2), cs = new THREE.Color(sand), cw = new THREE.Color(0xd9b77c), tmp = new THREE.Color();
  const H = (x, z) => {
    const d = Math.hypot(x, z) / R;
    const edge = d + (fbm(x * .15 + seed, z * .15) - .5) * .25;
    const base = 1 - smooth(.62, 1.0, edge);
    const shore = 1 - smooth(.95, 1.25, edge);
    return base * height + base * (fbm(x * .12 + 7 + seed, z * .12) - .5) * 1.4 + shore * .55 - .75;
  };
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), z = pos.getZ(i), h = H(x, z);
    pos.setY(i, h);
    if (h < .12) tmp.copy(cw).lerp(cs, smooth(-.3, .12, h));
    else if (h < .42) tmp.copy(cs);
    else tmp.copy(cg).lerp(cg2, fbm(x * .2, z * .2 + 3) * 1.1 - .2).lerp(cs, 1 - smooth(.42, .62, h));
    col.push(tmp.r, tmp.g, tmp.b);
  }
  g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  g.computeVertexNormals();
  const m = new THREE.Mesh(g, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: .95 }));
  m.receiveShadow = true;
  m.userData.H = H;
  return m;
}

// instanced grass tufts + flowers
export function decorate(island, { count = 900, R = 15, flowers = 160, avoid = [] } = {}) {
  const H = island.userData.H, grp = new THREE.Group();
  const tuft = new THREE.ConeGeometry(.06, .45, 4); tuft.translate(0, .2, 0);
  const blades = mergeGeometries([0, 1, 2].map(i => { const t = tuft.clone(); t.rotateZ((i - 1) * .35); t.rotateY(i * 2.1); return t; }));
  const im = new THREE.InstancedMesh(blades, new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: .9 }), count);
  const d = new THREE.Object3D(), c = new THREE.Color();
  let n = 0;
  const free = (x, z) => !avoid.some(a => Math.hypot(x - a[0], z - a[1]) < a[2]);
  for (let k = 0; k < count * 3 && n < count; k++) {
    const a = Math.random() * Math.PI * 2, r = Math.sqrt(Math.random()) * R * .9, x = Math.cos(a) * r, z = Math.sin(a) * r, y = H(x, z);
    if (y < .55 || !free(x, z)) continue;
    d.position.set(x, y - .05, z); d.rotation.y = Math.random() * 6; const s = rnd(.6, 1.3); d.scale.set(s, s * rnd(.8, 1.4), s); d.updateMatrix();
    im.setMatrixAt(n, d.matrix); im.setColorAt(n, c.setHSL(rnd(.24, .31), rnd(.55, .75), rnd(.26, .4))); n++;
  }
  im.count = n; im.receiveShadow = true; grp.add(im);
  // flowers
  const petal = new THREE.SphereGeometry(.07, 8, 6); petal.scale(1, .35, .6);
  const parts = [];
  for (let i = 0; i < 5; i++) { const p = petal.clone(); p.translate(.075, 0, 0); p.rotateY(i * Math.PI * 2 / 5); parts.push(p); }
  const fl = mergeGeometries(parts); fl.translate(0, .22, 0);
  const stem = new THREE.CylinderGeometry(.012, .015, .22, 4); stem.translate(0, .11, 0);
  const fim = new THREE.InstancedMesh(fl, new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: .6 }), flowers);
  const cim = new THREE.InstancedMesh(new THREE.SphereGeometry(.04, 8, 6).translate(0, .235, 0), mat(0xffd23f), flowers);
  const sim = new THREE.InstancedMesh(stem, mat(0x3f9b3a), flowers);
  const pal = [0xffffff, 0xff8fb8, 0xffd84d, 0xc79bff, 0xff7a6b, 0x8fd3ff];
  n = 0;
  for (let k = 0; k < flowers * 4 && n < flowers; k++) {
    const a = Math.random() * Math.PI * 2, r = Math.sqrt(Math.random()) * R * .85, x = Math.cos(a) * r, z = Math.sin(a) * r, y = H(x, z);
    if (y < .6 || !free(x, z)) continue;
    d.position.set(x, y - .02, z); d.rotation.set(rnd(-.15, .15), Math.random() * 6, rnd(-.15, .15)); const s = rnd(.8, 1.4); d.scale.set(s, s, s); d.updateMatrix();
    fim.setMatrixAt(n, d.matrix); cim.setMatrixAt(n, d.matrix); sim.setMatrixAt(n, d.matrix);
    fim.setColorAt(n, c.set(pal[n % pal.length])); n++;
  }
  [fim, cim, sim].forEach(m => { m.count = n; m.castShadow = true; grp.add(m); });
  return grp;
}

// ---------- vegetation ----------
function leafBlob(r, color, seed = 0) {
  let g = new THREE.IcosahedronGeometry(r, 4); g.deleteAttribute('normal'); g.deleteAttribute('uv'); g = mergeVertices(g);
  const p = g.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const v = new THREE.Vector3().fromBufferAttribute(p, i);
    const n = 1 + (noise(v.x * 2.2 + seed, v.y * 2.2 + v.z) - .5) * .22;
    v.multiplyScalar(n); p.setXYZ(i, v.x, v.y, v.z);
  }
  g.computeVertexNormals();
  return mesh(g, fur(color, { sheen: .4, roughness: .85 }));
}

export function makeTree({ fruit = null, leaf = 0x5cbf45, leaf2 = 0x46a63c, trunk = 0x8a5a36, scale = 1 } = {}) {
  const t = new THREE.Group();
  const tr = mesh(new THREE.CylinderGeometry(.22, .38, 2.4, 12), fur(trunk, { sheen: .2 }));
  tr.position.y = 1.2; t.add(tr);
  const br = mesh(new THREE.CylinderGeometry(.09, .16, 1.1, 8), fur(trunk)); br.position.set(.4, 2.1, 0); br.rotation.z = -.8; t.add(br);
  const blobs = [[0, 3.1, 0, 1.45], [.95, 2.75, .2, 1.05], [-.9, 2.8, -.1, 1.1], [.1, 2.75, .9, 1.0], [-.2, 2.9, -.85, 1.0], [.3, 3.85, -.1, .95]];
  const crown = new THREE.Group(); t.add(crown);
  blobs.forEach((b, i) => { const l = leafBlob(b[3], i % 2 ? leaf2 : leaf, i * 3.7); l.position.set(b[0], b[1], b[2]); crown.add(l); });
  t.userData.fruitSpots = [];
  if (fruit) {
    for (let i = 0; i < 9; i++) {
      const b = blobs[i % blobs.length], a = rnd(0, Math.PI * 2), el = rnd(-.3, .7);
      const v = new THREE.Vector3(Math.cos(a) * Math.cos(el), Math.sin(el), Math.sin(a) * Math.cos(el)).multiplyScalar(b[3] * .98);
      const f = makeFruit(fruit); f.scale.setScalar(.42); f.position.set(b[0] + v.x, b[1] + v.y - .1, b[2] + v.z); crown.add(f); t.userData.fruitSpots.push(f);
    }
  }
  t.scale.setScalar(scale);
  t.userData.update = (dt, time) => { crown.rotation.z = Math.sin(time * .8 + t.position.x) * .015; };
  return t;
}

export function makePalm({ h = 4.2, lean = .35, scale = 1, coconuts = true } = {}) {
  const t = new THREE.Group();
  const segs = 9, pts = [];
  for (let i = 0; i <= segs; i++) { const k = i / segs; pts.push(new THREE.Vector3(Math.sin(k * 1.3) * lean * h * .45, k * h, 0)); }
  const curve = new THREE.CatmullRomCurve3(pts);
  for (let i = 0; i < segs; i++) {
    const a = curve.getPoint(i / segs), b = curve.getPoint((i + 1) / segs), r = .26 - i * .012;
    const seg = mesh(new THREE.CylinderGeometry(r * .92, r * 1.08, a.distanceTo(b) * 1.05, 12), fur(i % 2 ? 0xa0703f : 0x8d6034, { sheen: .2 }));
    seg.position.copy(a).lerp(b, .5); seg.lookAt(b); seg.rotateX(Math.PI / 2); t.add(seg);
  }
  const top = curve.getPoint(1);
  const crown = new THREE.Group(); crown.position.copy(top); t.add(crown);
  // frond geometry: strip with leaflets bent downward
  const fr = new THREE.PlaneGeometry(2.6, .7, 16, 2);
  const p = fr.attributes.position;
  for (let i = 0; i < p.count; i++) {
    let x = p.getX(i) + 1.3, y = p.getY(i);
    const k = x / 2.6, w = Math.sin(k * Math.PI) * (1 - k * .3);
    y *= w; const droop = -k * k * 1.3;
    p.setXYZ(i, x, droop - Math.abs(y) * .25, y);
  }
  fr.computeVertexNormals();
  const fm = mat(0x3fae46, { side: THREE.DoubleSide, roughness: .7, sheen: .5, sheenColor: new THREE.Color(0xd7ffb0) });
  for (let i = 0; i < 8; i++) { const f = mesh(fr, i % 2 ? fm : mat(0x56c24c, { side: THREE.DoubleSide, roughness: .7 })); f.rotation.y = i * Math.PI / 4 + rnd(-.15, .15); f.rotation.z = rnd(.05, .35); crown.add(f); }
  if (coconuts) for (let i = 0; i < 3; i++) { const c = sphere(.17, gloss(0x6b4423, { roughness: .5 })); c.position.set(Math.cos(i * 2.1) * .2, -.2, Math.sin(i * 2.1) * .2); crown.add(c); }
  t.scale.setScalar(scale);
  t.userData.update = (dt, time) => { crown.rotation.y = Math.sin(time * .6 + t.position.x) * .06; crown.rotation.z = Math.sin(time * .9 + t.position.z) * .04; };
  return t;
}

export function makeBananaPlant({ scale = 1, fruit = true } = {}) {
  const t = new THREE.Group();
  const st = mesh(new THREE.CylinderGeometry(.16, .22, 1.6, 10), fur(0x7fae4a)); st.position.y = .8; t.add(st);
  const leafG = new THREE.PlaneGeometry(1.9, .6, 12, 2);
  const p = leafG.attributes.position;
  for (let i = 0; i < p.count; i++) { const x = p.getX(i) + .95, y = p.getY(i), k = x / 1.9; p.setXYZ(i, x, -k * k * .7 + Math.abs(y) * .15, y * Math.sin(Math.min(k * 3.2, Math.PI / 2 + k))); }
  leafG.computeVertexNormals();
  for (let i = 0; i < 6; i++) { const l = mesh(leafG, mat(i % 2 ? 0x4cb748 : 0x63c75a, { side: THREE.DoubleSide, roughness: .65 })); l.position.y = 1.55; l.rotation.set(0, i * 1.05, .7 + rnd(-.1, .2)); t.add(l); }
  t.userData.fruitSpots = [];
  if (fruit) {
    for (let i = 0; i < 4; i++) { const b = makeFruit('banana'); b.scale.setScalar(.45); b.position.set(.25 * Math.cos(i * 1.6), 1.25 - i * .08, .25 * Math.sin(i * 1.6)); b.rotation.set(0, i * 1.6, 1.4); t.add(b); t.userData.fruitSpots.push(b); }
  }
  t.scale.setScalar(scale);
  return t;
}

export function makeBush({ fruit = null, color = 0x4fb043, scale = 1 } = {}) {
  const t = new THREE.Group();
  [[0, .45, 0, .62], [.55, .35, .1, .48], [-.5, .35, .05, .5], [0, .35, .45, .45]].forEach((b, i) => { const l = leafBlob(b[3], i % 2 ? color : 0x5ec450, i * 5.1); l.position.set(b[0], b[1], b[2]); l.scale.y = .8; t.add(l); });
  t.userData.fruitSpots = [];
  if (fruit) for (let i = 0; i < 6; i++) { const a = i * 1.1, f = makeFruit(fruit); f.scale.setScalar(.3); f.position.set(Math.cos(a) * .6, .35 + (i % 3) * .15, Math.sin(a) * .55 + .05); f.rotation.y = a; t.add(f); t.userData.fruitSpots.push(f); }
  t.scale.setScalar(scale);
  return t;
}

export function makeArbor({ scale = 1 } = {}) {
  const t = new THREE.Group(), wood = fur(0x9b6a3f, { sheen: .2 });
  [[-1.2, -.5], [1.2, -.5], [-1.2, .5], [1.2, .5]].forEach(([x, z]) => { const p = mesh(new THREE.CylinderGeometry(.08, .1, 2.2, 8), wood); p.position.set(x, 1.1, z); t.add(p); });
  for (let i = 0; i < 5; i++) { const b = mesh(new THREE.BoxGeometry(2.7, .08, .1), wood); b.position.set(0, 2.2, -.5 + i * .25); t.add(b); }
  for (let i = 0; i < 7; i++) { const l = leafBlob(.35, 0x5cbf45, i); l.position.set(-1.1 + i * .37, 2.35, rnd(-.4, .4)); l.scale.y = .5; t.add(l); }
  t.userData.fruitSpots = [];
  for (let i = 0; i < 4; i++) { const g = makeFruit('grapes'); g.scale.setScalar(.5); g.position.set(-.9 + i * .6, 1.85, rnd(-.3, .3)); t.add(g); t.userData.fruitSpots.push(g); }
  t.scale.setScalar(scale);
  return t;
}

export function makeRock(s = 1, color = 0xb8b2a8) {
  const g = new THREE.IcosahedronGeometry(.5, 2);
  const p = g.attributes.position;
  for (let i = 0; i < p.count; i++) { const v = new THREE.Vector3().fromBufferAttribute(p, i); v.multiplyScalar(1 + (noise(v.x * 3, v.y * 3 + v.z * 2) - .5) * .5); v.y *= .65; p.setXYZ(i, v.x, v.y, v.z); }
  g.computeVertexNormals();
  const m = mesh(g, mat(color, { roughness: .9 })); m.scale.setScalar(s); m.receiveShadow = true; return m;
}

export function makeMushroom(s = 1, cap = 0xff5a5a) {
  const t = new THREE.Group();
  const st = mesh(new THREE.CylinderGeometry(.09, .12, .3, 10), mat(0xfff3dd)); st.position.y = .15; t.add(st);
  const c = mesh(new THREE.SphereGeometry(.22, 20, 12, 0, Math.PI * 2, 0, Math.PI / 2), gloss(cap)); c.position.y = .27; c.scale.y = .8; t.add(c);
  for (let i = 0; i < 5; i++) { const d = sphere(.03, mat(0xffffff), 8, 6); const a = i * 1.3; d.position.set(Math.cos(a) * .14, .38, Math.sin(a) * .14); t.add(d); }
  t.scale.setScalar(s); return t;
}

export function makeCloud(s = 1) {
  const t = new THREE.Group(), m = mat(0xffffff, { roughness: 1, sheen: 1, sheenColor: new THREE.Color(0xffe8f0), emissive: 0x8899aa, emissiveIntensity: .15 });
  [[0, 0, 0, 1.4], [1.3, -.2, .1, 1], [-1.3, -.25, 0, 1.05], [.6, .5, -.2, .95], [-.6, .4, .2, .9]].forEach(b => { const s2 = sphere(b[3], m, 20, 14); s2.castShadow = false; s2.position.set(b[0], b[1], b[2]); s2.scale.y = .75; t.add(s2); });
  t.scale.setScalar(s); return t;
}

export function makeStump(s = 1) {
  const t = new THREE.Group();
  const side = mesh(new THREE.CylinderGeometry(.62, .72, .55, 24), fur(0x9a6438, { sheen: .2 })); side.position.y = .27; t.add(side);
  const top = mesh(new THREE.CylinderGeometry(.6, .6, .04, 24), mat(0xe9c48c, { roughness: .8 })); top.position.y = .56; t.add(top);
  for (let i = 1; i <= 3; i++) { const r = mesh(new THREE.TorusGeometry(i * .15, .012, 6, 32), mat(0xc79b62)); r.rotation.x = Math.PI / 2; r.position.y = .585; t.add(r); }
  t.scale.setScalar(s); t.traverse(o => o.receiveShadow = true); return t;
}

export function makeBasket(s = 1) {
  const t = new THREE.Group();
  const pts = []; for (let i = 0; i <= 10; i++) { const k = i / 10; pts.push(new THREE.Vector2(.55 + Math.sin(k * 1.4) * .32, k * .7)); }
  const g = new THREE.LatheGeometry(pts, 40);
  // woven stripes via vertex colors
  const p = g.attributes.position, c = [], a = new THREE.Color(0xc98d4a), b = new THREE.Color(0xa86c32);
  for (let i = 0; i < p.count; i++) { const y = p.getY(i), ang = Math.atan2(p.getZ(i), p.getX(i)); const k = (Math.sin(y * 28) * Math.sin(ang * 20)) > 0 ? a : b; c.push(k.r, k.g, k.b); }
  g.setAttribute('color', new THREE.Float32BufferAttribute(c, 3));
  const body = mesh(g, new THREE.MeshStandardMaterial({ vertexColors: true, side: THREE.DoubleSide, roughness: .85 })); t.add(body);
  const rim = mesh(new THREE.TorusGeometry(.86, .06, 10, 48), fur(0xb57a3d)); rim.rotation.x = Math.PI / 2; rim.position.y = .7; t.add(rim);
  const handle = mesh(new THREE.TorusGeometry(.8, .05, 10, 40, Math.PI), fur(0xb57a3d)); handle.position.y = .7; t.add(handle);
  const bottom = mesh(new THREE.CircleGeometry(.56, 32), mat(0x8f5a2a)); bottom.rotation.x = -Math.PI / 2; bottom.position.y = .02; t.add(bottom);
  t.scale.setScalar(s); return t;
}

export function makeStand(s = 1) {
  const t = new THREE.Group(), wood = fur(0xb5793f, { sheen: .2 }), dark = fur(0x8a5a2b);
  const counter = mesh(new THREE.BoxGeometry(3, 1, 1.1), wood); counter.position.y = .5; t.add(counter);
  for (let i = 0; i < 6; i++) { const pl = mesh(new THREE.BoxGeometry(.04, .95, 1.12), dark); pl.position.set(-1.25 + i * .5, .5, 0); t.add(pl); }
  [[-1.4, -.45], [1.4, -.45], [-1.4, .45], [1.4, .45]].forEach(([x, z]) => { const p = mesh(new THREE.CylinderGeometry(.07, .07, 2.6, 8), dark); p.position.set(x, 1.3, z); t.add(p); });
  // striped awning
  for (let i = 0; i < 8; i++) {
    const strip = mesh(new THREE.BoxGeometry(.4, .05, 1.5), mat(i % 2 ? 0xffffff : 0xff6b6b, { roughness: .7 }));
    strip.position.set(-1.4 + i * .4, 2.65, .1); strip.rotation.x = .25; t.add(strip);
    const sc = mesh(new THREE.CylinderGeometry(.2, .2, .4, 16, 1, false, 0, Math.PI), mat(i % 2 ? 0xffffff : 0xff6b6b));
    sc.rotation.z = Math.PI / 2; sc.position.set(-1.4 + i * .4, 2.47, .84); t.add(sc);
  }
  t.scale.setScalar(s); return t;
}

// sparkles points
export function makeSparkles(n = 120, R = 14, color = 0xfff3a0) {
  const g = new THREE.BufferGeometry(), p = [];
  for (let i = 0; i < n; i++) p.push(rnd(-R, R), rnd(.5, 6), rnd(-R, R));
  g.setAttribute('position', new THREE.Float32BufferAttribute(p, 3));
  const tex = glowTexture();
  const m = new THREE.PointsMaterial({ size: .22, map: tex, color, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending });
  const pts = new THREE.Points(g, m);
  pts.userData.update = (dt, t) => { pts.rotation.y = t * .02; m.opacity = .6 + Math.sin(t * 2) * .3; };
  return pts;
}
let _glow;
export function glowTexture() {
  if (_glow) return _glow;
  const c = document.createElement('canvas'); c.width = c.height = 64; const x = c.getContext('2d');
  const gr = x.createRadialGradient(32, 32, 0, 32, 32, 32); gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(.3, 'rgba(255,255,255,.7)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
  x.fillStyle = gr; x.fillRect(0, 0, 64, 64); _glow = new THREE.CanvasTexture(c); return _glow;
}

export function makeButterfly(color = 0xff8fd0) {
  const t = new THREE.Group(), wingG = new THREE.CircleGeometry(.16, 16); wingG.scale(1, 1.3, 1);
  const m = mat(color, { side: THREE.DoubleSide, roughness: .5 });
  const l = new THREE.Group(), r = new THREE.Group();
  const wl = mesh(wingG, m); wl.position.x = -.15; l.add(wl); const wr = mesh(wingG, m); wr.position.x = .15; r.add(wr);
  [l, r].forEach(w => { w.rotation.x = -Math.PI / 2; t.add(w); });
  const body = mesh(new THREE.CapsuleGeometry(.025, .18, 4, 8), mat(0x333333)); body.rotation.x = Math.PI / 2; t.add(body);
  const seed = Math.random() * 10, c = new THREE.Vector3(rnd(-8, 8), rnd(1.5, 3), rnd(-6, 6));
  t.userData.update = (dt, time) => {
    const f = Math.sin(time * 18 + seed) * .9; l.rotation.z = f; r.rotation.z = -f;
    const a = time * .4 + seed; t.position.set(c.x + Math.cos(a) * 3, c.y + Math.sin(time * 1.3 + seed) * .5, c.z + Math.sin(a * 1.3) * 2.5);
    t.rotation.y = -a + Math.PI;
  };
  return t;
}

// ---------- fruits ----------
function vcolorY(g, c1, c2, y0, y1) {
  const p = g.attributes.position, c = [], a = new THREE.Color(c1), b = new THREE.Color(c2), t = new THREE.Color();
  for (let i = 0; i < p.count; i++) { const k = smooth(y0, y1, p.getY(i)); t.copy(a).lerp(b, k); c.push(t.r, t.g, t.b); }
  g.setAttribute('color', new THREE.Float32BufferAttribute(c, 3));
}
function leafMesh(len = .35, color = 0x4fb848) {
  const s = new THREE.Shape(); s.moveTo(0, 0); s.quadraticCurveTo(len * .45, len * .32, len, 0); s.quadraticCurveTo(len * .45, -len * .32, 0, 0);
  const g = new THREE.ShapeGeometry(s, 12);
  const p = g.attributes.position; for (let i = 0; i < p.count; i++) { const x = p.getX(i); p.setZ(i, -x * x * 1.2); }
  g.computeVertexNormals();
  return mesh(g, mat(color, { side: THREE.DoubleSide, roughness: .55, clearcoat: .3 }));
}
const FRUIT_BUILDERS = {
  apple() {
    const t = new THREE.Group(), pts = [];
    for (let i = 0; i <= 32; i++) {
      const a = -Math.PI / 2 + Math.PI * i / 32, r = Math.cos(a) * (1 + .12 * Math.sin(a)) * .5;
      let y = Math.sin(a) * .46;
      const dip = Math.exp(-Math.pow((i - 32) / 3.5, 2)) * .1 - Math.exp(-Math.pow(i / 3, 2)) * .05;
      pts.push(new THREE.Vector2(Math.max(r, .001), y - dip));
    }
    const g = new THREE.LatheGeometry(pts, 48); vcolorY(g, 0xd81b2c, 0xff4a3a, -.4, .45);
    // a blush of yellow on one side
    const p = g.attributes.position, c = g.attributes.color, y = new THREE.Color(0xffc23a), col = new THREE.Color();
    for (let i = 0; i < p.count; i++) { const k = Math.max(0, p.getX(i) / .5) * smooth(-.1, .4, p.getY(i)) * .35; col.fromBufferAttribute(c, i).lerp(y, k); c.setXYZ(i, col.r, col.g, col.b); }
    t.add(mesh(g, new THREE.MeshPhysicalMaterial({ vertexColors: true, roughness: .3, clearcoat: .9, clearcoatRoughness: .15, envMapIntensity: .8 })));
    const stem = mesh(new THREE.CylinderGeometry(.018, .028, .22, 8), mat(0x6b4226)); stem.position.set(.02, .5, 0); stem.rotation.z = -.25; t.add(stem);
    const lf = leafMesh(.3); lf.position.set(.04, .55, 0); lf.rotation.set(.2, .3, .5); t.add(lf);
    return t;
  },
  banana() {
    const t = new THREE.Group();
    const curve = new THREE.QuadraticBezierCurve3(new THREE.Vector3(-.62, .32, 0), new THREE.Vector3(0, -.42, 0), new THREE.Vector3(.62, .32, 0));
    const segs = 40, rad = 24, pos = [], col = [], idx = [];
    const Y = new THREE.Color(0xffd83a), Yd = new THREE.Color(0xf2b820), Br = new THREE.Color(0x5a3a1a), G = new THREE.Color(0x9ccf3a), tmp = new THREE.Color();
    for (let i = 0; i <= segs; i++) {
      const u = i / segs, p = curve.getPoint(u), tg = curve.getTangent(u), n = new THREE.Vector3(0, 0, 1), b = new THREE.Vector3().crossVectors(tg, n).normalize();
      const r = .15 * Math.pow(Math.sin(Math.PI * Math.min(Math.max(u * 1.06 - .03, 0), 1)), .55) + .012;
      for (let j = 0; j <= rad; j++) {
        const th = j / rad * Math.PI * 2, rr = r * (1 + .07 * Math.cos(th * 5));
        const v = p.clone().addScaledVector(b, Math.cos(th) * rr).addScaledVector(n, Math.sin(th) * rr);
        pos.push(v.x, v.y, v.z);
        tmp.copy(Y).lerp(Yd, .5 + .5 * Math.cos(th * 5) * .4);
        if (u < .08 || u > .95) tmp.copy(Br); else if (u > .86) tmp.lerp(G, (u - .86) / .09);
        col.push(tmp.r, tmp.g, tmp.b);
      }
    }
    for (let i = 0; i < segs; i++) for (let j = 0; j < rad; j++) { const a = i * (rad + 1) + j, b2 = a + rad + 1; idx.push(a, b2, a + 1, b2, b2 + 1, a + 1); }
    const g = new THREE.BufferGeometry(); g.setIndex(idx); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3)); g.computeVertexNormals();
    t.add(mesh(g, new THREE.MeshPhysicalMaterial({ vertexColors: true, roughness: .45, clearcoat: .4, side: THREE.DoubleSide })));
    const stem = mesh(new THREE.CylinderGeometry(.03, .04, .14, 8), mat(0x7a8a2a)); stem.position.set(.66, .38, 0); stem.rotation.z = -.7; t.add(stem);
    t.rotation.z = -.15;
    return t;
  },
  orange() {
    const t = new THREE.Group();
    const g = new THREE.SphereGeometry(.47, 64, 48);
    const p = g.attributes.position, c = [], a = new THREE.Color(0xff8a00), b = new THREE.Color(0xffa62b), tmp = new THREE.Color();
    for (let i = 0; i < p.count; i++) {
      const v = new THREE.Vector3().fromBufferAttribute(p, i), n = noise(v.x * 30 + 5, v.y * 30 + v.z * 30);
      v.multiplyScalar(1 + (n - .5) * .018); v.y *= .94; p.setXYZ(i, v.x, v.y, v.z);
      tmp.copy(a).lerp(b, n); c.push(tmp.r, tmp.g, tmp.b);
    }
    g.setAttribute('color', new THREE.Float32BufferAttribute(c, 3)); g.computeVertexNormals();
    t.add(mesh(g, new THREE.MeshPhysicalMaterial({ vertexColors: true, roughness: .42, clearcoat: .5, clearcoatRoughness: .35 })));
    const star = mesh(new THREE.CylinderGeometry(.07, .09, .03, 5), mat(0x5a8f2a)); star.position.y = .44; t.add(star);
    const lf = leafMesh(.32, 0x3ea53d); lf.position.set(0, .46, 0); lf.rotation.set(.3, -.6, .4); t.add(lf);
    return t;
  },
  strawberry() {
    const t = new THREE.Group(), pts = [];
    for (let i = 0; i <= 30; i++) { const k = i / 30; const r = Math.sin(Math.pow(k, .85) * Math.PI * .92) * .42 * (1 - Math.pow(k, 7) * .2); pts.push(new THREE.Vector2(Math.max(r, .001), -.5 + k * .9)); }
    pts[pts.length - 1].x = .001;
    const g = new THREE.LatheGeometry(pts, 40); vcolorY(g, 0xe0162b, 0xff3b47, -.5, .3);
    const body = mesh(g, new THREE.MeshPhysicalMaterial({ vertexColors: true, roughness: .3, clearcoat: 1, clearcoatRoughness: .2 })); t.add(body);
    // seeds
    const sg = new THREE.SphereGeometry(.018, 6, 4); sg.scale(1, 1.6, 1);
    const seeds = new THREE.InstancedMesh(sg, mat(0xffe27a, { roughness: .5 }), 70), d = new THREE.Object3D();
    let n = 0;
    for (let i = 0; i < 70; i++) {
      const k = .1 + (i / 70) * .78, ang = i * 2.39996, idx2 = Math.floor(k * 30), r = pts[idx2].x * .99, y = pts[idx2].y;
      d.position.set(Math.cos(ang) * r, y, Math.sin(ang) * r); d.lookAt(d.position.x * 2, y + .2, d.position.z * 2); d.rotateX(Math.PI / 2); d.updateMatrix(); seeds.setMatrixAt(n++, d.matrix);
    }
    t.add(seeds);
    for (let i = 0; i < 6; i++) { const l = leafMesh(.26, 0x3fae44); l.position.y = .38; l.rotation.set(0, i * Math.PI / 3, -.35); t.add(l); }
    const stem = mesh(new THREE.CylinderGeometry(.02, .025, .14, 8), mat(0x3f8f3a)); stem.position.y = .46; t.add(stem);
    t.rotation.x = Math.PI;
    const w = new THREE.Group(); w.add(t); t.position.y = 0; w.rotation.z = .25; return w;
  },
  grapes() {
    const t = new THREE.Group();
    const m = new THREE.MeshPhysicalMaterial({ color: 0x7b3fbf, roughness: .2, clearcoat: 1, clearcoatRoughness: .1, sheen: .6, sheenColor: new THREE.Color(0xc9b6ff) });
    const m2 = new THREE.MeshPhysicalMaterial({ color: 0x6a2fa8, roughness: .2, clearcoat: 1, clearcoatRoughness: .1 });
    const rows = [5, 5, 4, 3, 2, 1];
    rows.forEach((n, ri) => {
      const y = .32 - ri * .15, r = .05 + n * .055;
      for (let i = 0; i < n; i++) { const a = i * Math.PI * 2 / n + ri * .6; const s = sphere(.13, (i + ri) % 3 ? m : m2, 24, 16); s.position.set(Math.cos(a) * r * (n > 1 ? 1 : 0), y, Math.sin(a) * r * (n > 1 ? 1 : 0)); s.scale.y = 1.08; t.add(s); }
    });
    const stem = mesh(new THREE.CylinderGeometry(.02, .03, .3, 8), mat(0x6b4a2a)); stem.position.y = .5; stem.rotation.z = .3; t.add(stem);
    const lf = leafMesh(.4, 0x4cae3f); lf.position.set(.05, .55, 0); lf.rotation.set(.4, .2, .3); t.add(lf);
    return t;
  },
};
export function makeFruit(id) {
  const g = new THREE.Group(); const f = FRUIT_BUILDERS[id](); g.add(f); g.userData.fruit = id; return g;
}

// ---------- gift box ----------
export function makeGift(color = 0xff6fae, ribbon = 0xffd84d) {
  const t = new THREE.Group();
  const box = mesh(new THREE.BoxGeometry(1, .8, 1, 2, 2, 2), gloss(color, { roughness: .35 })); box.position.y = .4; t.add(box);
  const rb = gloss(ribbon, { roughness: .3, metalness: .2 });
  const r1 = mesh(new THREE.BoxGeometry(1.02, .81, .18), rb); r1.position.y = .4; t.add(r1);
  const r2 = mesh(new THREE.BoxGeometry(.18, .81, 1.02), rb); r2.position.y = .4; t.add(r2);
  const lid = new THREE.Group(); lid.position.y = .8; t.add(lid);
  const l = mesh(new THREE.BoxGeometry(1.1, .22, 1.1), gloss(color, { roughness: .35 })); l.position.y = .11; lid.add(l);
  const l1 = mesh(new THREE.BoxGeometry(1.12, .23, .18), rb); l1.position.y = .11; lid.add(l1);
  const l2 = mesh(new THREE.BoxGeometry(.18, .23, 1.12), rb); l2.position.y = .11; lid.add(l2);
  for (const s of [-1, 1]) { const bow = mesh(new THREE.TorusGeometry(.17, .06, 12, 24), rb); bow.position.set(s * .17, .32, 0); bow.rotation.set(0, 0, s * .5); bow.scale.set(1, .8, .6); lid.add(bow); }
  const knot = sphere(.08, rb); knot.position.y = .28; lid.add(knot);
  t.userData.lid = lid;
  return t;
}

// ---------- accessories (wardrobe) ----------
export const ACCESSORIES = {
  sunglasses: { slot: 'face', ar: 'نظارة شمسية', en: 'Sunglasses' },
  flowers: { slot: 'head', ar: 'تاج الورود', en: 'Flower crown' },
  partyhat: { slot: 'head', ar: 'قبعة الحفلة', en: 'Party hat' },
  bowtie: { slot: 'neck', ar: 'ربطة فراشة', en: 'Bow tie' },
  explorer: { slot: 'head', ar: 'قبعة المستكشف', en: 'Explorer hat' },
  crown: { slot: 'head', ar: 'التاج الذهبي', en: 'Golden crown' },
};
export function makeAccessory(id) {
  const t = new THREE.Group();
  if (id === 'sunglasses') {
    const fr = gloss(0xff4f8b), lens = mat(0x1a2233, { roughness: .05, clearcoat: 1, metalness: .3 });
    for (const s of [-1, 1]) { const ring = mesh(new THREE.TorusGeometry(.17, .035, 10, 28), fr); ring.position.x = s * .21; t.add(ring); const l = mesh(new THREE.CircleGeometry(.16, 24), lens); l.position.set(s * .21, 0, .005); t.add(l); }
    const br = mesh(new THREE.CylinderGeometry(.025, .025, .1, 8), fr); br.rotation.z = Math.PI / 2; t.add(br);
  } else if (id === 'flowers') {
    const ring = mesh(new THREE.TorusGeometry(.42, .04, 8, 36), mat(0x4caf50)); ring.rotation.x = Math.PI / 2; t.add(ring);
    const pal = [0xff6fa8, 0xffd23f, 0xffffff, 0xb18cff, 0xff8a65];
    for (let i = 0; i < 9; i++) { const a = i * Math.PI * 2 / 9, f = new THREE.Group(); f.position.set(Math.cos(a) * .42, .04, Math.sin(a) * .42);
      for (let k = 0; k < 5; k++) { const p = sphere(.06, mat(pal[i % 5]), 10, 8); p.scale.set(1, .5, 1); p.position.set(Math.cos(k * 1.256) * .06, 0, Math.sin(k * 1.256) * .06); f.add(p); }
      const c = sphere(.035, mat(0xffc107), 8, 6); c.position.y = .02; f.add(c); t.add(f); }
  } else if (id === 'partyhat') {
    const g = new THREE.ConeGeometry(.3, .7, 32, 8);
    const p = g.attributes.position, c = [], a = new THREE.Color(0x4fc3f7), b = new THREE.Color(0xffeb3b);
    for (let i = 0; i < p.count; i++) { const k = Math.sin((p.getY(i) * 3 + Math.atan2(p.getZ(i), p.getX(i))) * 3) > 0 ? a : b; c.push(k.r, k.g, k.b); }
    g.setAttribute('color', new THREE.Float32BufferAttribute(c, 3));
    const h = mesh(g, new THREE.MeshPhysicalMaterial({ vertexColors: true, roughness: .4, clearcoat: .6 })); h.position.y = .35; t.add(h);
    const pom = sphere(.09, fur(0xff5c8a)); pom.position.y = .72; t.add(pom);
  } else if (id === 'bowtie') {
    const m = gloss(0xe53950);
    for (const s of [-1, 1]) { const w = mesh(new THREE.ConeGeometry(.13, .22, 4), m); w.rotation.z = s * Math.PI / 2; w.position.x = s * .11; w.scale.z = .5; t.add(w); }
    const k = sphere(.055, m); t.add(k);
  } else if (id === 'explorer') {
    const m = fur(0xd9b56c, { sheen: .3 });
    const brim = mesh(new THREE.CylinderGeometry(.62, .62, .04, 40), m); t.add(brim);
    const top = mesh(new THREE.SphereGeometry(.4, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2), m); top.scale.y = .8; t.add(top);
    const band = mesh(new THREE.CylinderGeometry(.405, .405, .09, 40, 1, true), mat(0x6d4c2f)); band.position.y = .05; t.add(band);
  } else if (id === 'crown') {
    const gold = mat(0xffc93c, { metalness: 1, roughness: .22, envMapIntensity: 1.4 });
    const base = mesh(new THREE.CylinderGeometry(.34, .32, .16, 32, 1, true), gold); base.material.side = THREE.DoubleSide; t.add(base);
    for (let i = 0; i < 6; i++) { const a = i * Math.PI / 3; const sp = mesh(new THREE.ConeGeometry(.07, .22, 8), gold); sp.position.set(Math.cos(a) * .32, .17, Math.sin(a) * .32); t.add(sp);
      const gem = sphere(.04, gloss([0xff3b6b, 0x3bc4ff, 0x6bff8a][i % 3], { roughness: .1 }), 12, 8); gem.position.set(Math.cos(a) * .335, 0, Math.sin(a) * .335); t.add(gem); }
    t.position.y = .06;
  }
  return t;
}

// ---------- map island extras ----------
export function makeHouse(color = 0xff7aa2, roof = 0x5b6bff, s = 1) {
  const t = new THREE.Group();
  const b = mesh(new THREE.BoxGeometry(1, 1, 1), gloss(color, { roughness: .5 })); b.position.y = .5; t.add(b);
  const r = mesh(new THREE.ConeGeometry(.8, .6, 4), gloss(roof, { roughness: .45 })); r.position.y = 1.3; r.rotation.y = Math.PI / 4; t.add(r);
  const d = mesh(new THREE.BoxGeometry(.3, .45, .05), mat(0x7a4a2a)); d.position.set(0, .23, .51); t.add(d);
  const w = mesh(new THREE.BoxGeometry(.25, .25, .05), mat(0xbfefff, { emissive: 0xfff3b0, emissiveIntensity: .3 })); w.position.set(.28, .65, .51); t.add(w);
  t.scale.setScalar(s); return t;
}
export function makePine(s = 1, c = 0x2f9e5a) {
  const t = new THREE.Group();
  const tr = mesh(new THREE.CylinderGeometry(.1, .14, .6, 8), fur(0x7a5230)); tr.position.y = .3; t.add(tr);
  for (let i = 0; i < 3; i++) { const cn = mesh(new THREE.ConeGeometry(.7 - i * .17, .9, 16), fur(c, { sheen: .3 })); cn.position.y = .8 + i * .45; t.add(cn); }
  t.scale.setScalar(s); return t;
}
export function makeRocket(s = 1) {
  const t = new THREE.Group();
  const pts = []; for (let i = 0; i <= 20; i++) { const k = i / 20; pts.push(new THREE.Vector2(Math.max(.001, Math.sin(Math.pow(k, .6) * Math.PI) * .45 * (k < .5 ? 1 : 1 - (k - .5) * .4)), k * 2.2)); }
  const b = mesh(new THREE.LatheGeometry(pts, 32), gloss(0xf5f7ff, { roughness: .3 })); t.add(b);
  const win = mesh(new THREE.TorusGeometry(.17, .05, 10, 24), gloss(0xff5a5f)); win.position.set(0, 1.2, .42); t.add(win);
  const gl = sphere(.15, mat(0x7fd8ff, { roughness: .05, clearcoat: 1, emissive: 0x2a6f9a, emissiveIntensity: .4 })); gl.position.set(0, 1.2, .38); gl.scale.z = .4; t.add(gl);
  for (let i = 0; i < 3; i++) { const f = mesh(new THREE.BoxGeometry(.06, .6, .5), gloss(0xff5a5f)); const a = i * Math.PI * 2 / 3; f.position.set(Math.cos(a) * .42, .3, Math.sin(a) * .42); f.rotation.y = -a; t.add(f); }
  const tip = mesh(new THREE.ConeGeometry(.2, .4, 24), gloss(0xff5a5f)); tip.position.y = 2.15; t.add(tip);
  const flame = mesh(new THREE.ConeGeometry(.25, .7, 16), new THREE.MeshBasicMaterial({ color: 0xffb13b, transparent: true, opacity: .85 })); flame.rotation.x = Math.PI; flame.position.y = -.3; t.add(flame);
  t.userData.update = (dt, time) => { flame.scale.y = 1 + Math.sin(time * 30) * .2; };
  t.scale.setScalar(s); return t;
}
export function makeCastle(s = 1) {
  const t = new THREE.Group(), wall = gloss(0xffe1f0, { roughness: .55 }), roof = gloss(0x9b6bff, { roughness: .4 });
  const keep = mesh(new THREE.BoxGeometry(1.6, 1.4, 1.2), wall); keep.position.y = .7; t.add(keep);
  [[-.9, -.6], [.9, -.6], [-.9, .6], [.9, .6]].forEach(([x, z], i) => {
    const tw = mesh(new THREE.CylinderGeometry(.3, .32, 2, 20), wall); tw.position.set(x, 1, z); t.add(tw);
    const r = mesh(new THREE.ConeGeometry(.4, .8, 20), i % 2 ? roof : gloss(0xff6fae)); r.position.set(x, 2.4, z); t.add(r);
  });
  const door = mesh(new THREE.CylinderGeometry(.25, .25, .1, 20, 1, false, 0, Math.PI), mat(0x8a5a3a)); door.rotation.x = Math.PI / 2; door.rotation.z = Math.PI; door.position.set(0, .4, .62); t.add(door);
  const flag = mesh(new THREE.PlaneGeometry(.4, .25), mat(0xffd23f, { side: THREE.DoubleSide })); flag.position.set(.9 + .2, 3.05, .6); t.add(flag);
  t.scale.setScalar(s); return t;
}
export function makeCoral(s = 1, c = 0xff7a8a) {
  const t = new THREE.Group();
  for (let i = 0; i < 5; i++) { const b = mesh(new THREE.CapsuleGeometry(.08, .5 + Math.random() * .4, 4, 10), gloss(c, { roughness: .5 })); b.position.set(rnd(-.25, .25), .3, rnd(-.25, .25)); b.rotation.set(rnd(-.5, .5), 0, rnd(-.5, .5)); t.add(b); }
  t.scale.setScalar(s); return t;
}
export function makeChest(s = 1) {
  const t = new THREE.Group(), w = fur(0x9a5d2e), g = mat(0xffc93c, { metalness: 1, roughness: .25 });
  const b = mesh(new THREE.BoxGeometry(1, .55, .65), w); b.position.y = .28; t.add(b);
  const lid = mesh(new THREE.CylinderGeometry(.33, .33, 1, 20, 1, false, 0, Math.PI), w); lid.rotation.z = Math.PI / 2; lid.position.y = .55; t.add(lid);
  for (const x of [-.35, .35]) { const band = mesh(new THREE.BoxGeometry(.08, .57, .67), g); band.position.set(x, .28, 0); t.add(band); }
  const coins = sphere(.25, mat(0xffd54a, { metalness: 1, roughness: .3 })); coins.position.y = .62; coins.scale.y = .4; t.add(coins);
  t.scale.setScalar(s); return t;
}
export function makePlanet(s = 1, c = 0xffa94d) {
  const t = new THREE.Group();
  t.add(sphere(.6, gloss(c, { roughness: .5 })));
  const ring = mesh(new THREE.TorusGeometry(.95, .06, 8, 48), gloss(0xfff3a0)); ring.rotation.x = 1.2; t.add(ring);
  t.scale.setScalar(s); return t;
}

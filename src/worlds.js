import * as THREE from 'three';
import { E } from './engine.js';
import * as P from './props.js';

function addUpd(scene, o) { if (o.userData.update) scene.userData.upd.push(o.userData.update); o.children.forEach(c => addUpd(scene, c)); }
export function finalize(scene) {
  scene.userData.upd = [];
  scene.traverse(o => { if (o.userData.update) scene.userData.upd.push(o.userData.update); });
  scene.userData.tick = (dt, t) => scene.userData.upd.forEach(u => u(dt, t));
}

// ---------- fruit island ----------
export function buildFruitIsland() {
  const scene = new THREE.Scene();
  scene.environment = E.envTex; scene.environmentIntensity = .4;
  scene.add(P.makeSky(0x62bdfc, 0xfff1d8));
  scene.fog = new THREE.Fog(0xdff3ff, 45, 140);
  const L = P.makeLights(scene, { size: 22 });
  scene.add(P.makeWater());
  const island = P.makeIsland({ R: 15 });
  scene.add(island);
  const H = island.userData.H;
  scene.userData.H = H;
  const at = (o, x, z, ry = 0) => { o.position.set(x, H(x, z) - .05, z); o.rotation.y = ry; scene.add(o); return o; };

  // stage clearing near the front, centered at (0, 6)
  const stage = new THREE.Vector3(0, H(0, 6), 6);
  scene.userData.stage = stage;
  const avoid = [[0, 6.3, 2.6], [0, 0.6, 2.2]];
  scene.add(P.decorate(island, { R: 15, count: 1100, flowers: 220, avoid }));

  // fruit vegetation, grouped by fruit for restore progression
  const groves = { apple: [], banana: [], orange: [], strawberry: [], grapes: [] };
  const tree = (fruit, x, z, s) => { const t = at(P.makeTree({ fruit, scale: s, leaf: fruit === 'orange' ? 0x3fae4a : 0x5cbf45 }), x, z, Math.random() * 6); groves[fruit].push(t); };
  tree('apple', -6.5, -1.5, 1); tree('apple', -9, 2.5, .85); tree('apple', -3.8, -5.5, .9);
  tree('orange', 6.5, -2, 1); tree('orange', 9.5, 2, .85); tree('orange', 3.6, -6.2, .9);
  [[-8.3, 6.2], [-10.5, 0], [-6.8, 9]].forEach(([x, z]) => groves.banana.push(at(P.makeBananaPlant({ scale: 1.1 }), x, z, Math.random() * 6)));
  [[7.8, 6.5], [5.8, 9.4], [10, 5], [-4.2, 10.5], [4.2, 2.2]].forEach(([x, z]) => groves.strawberry.push(at(P.makeBush({ fruit: 'strawberry', scale: 1.1 }), x, z, Math.random() * 6)));
  groves.grapes.push(at(P.makeArbor({ scale: 1.1 }), 0, -6.5, 0));
  scene.userData.groves = groves;

  // palms on the beach
  [[-12.5, -5, .9], [12.3, -5.5, 1], [-13, 6, .8], [12.8, 8, .85], [0, -12.8, 1.1], [-8, -10.5, .9], [8.5, -10.3, .95]].forEach(([x, z, s]) => at(P.makePalm({ scale: s, lean: .3 }), x, z, Math.atan2(x, z) + Math.PI));
  // market stand (behind the stage)
  at(P.makeStand(1), 0, 0.6, 0);
  // rocks & mushrooms
  [[-3.5, 12.2, .9], [3.3, 12.6, .7], [-11, 9, .8], [11.5, -1.5, .9], [-2.5, -9.5, .6]].forEach(([x, z, s]) => at(P.makeRock(s), x, z, Math.random() * 6));
  [[-4.6, 3.8], [4.9, 4.1], [-2.2, 1.8], [6.6, 1.4]].forEach(([x, z], i) => at(P.makeMushroom(1.2, i % 2 ? 0xff7043 : 0xff5a8a), x, z));
  // beach props: starfish-like shells
  for (let i = 0; i < 10; i++) { const a = i / 10 * Math.PI * 2 + .3, r = 14.3; const sh = P.sphere(.15, P.gloss([0xffb3c1, 0xfff0c2, 0xffd0a6][i % 3])); sh.scale.set(1, .4, 1.2); sh.position.set(Math.cos(a) * r, H(Math.cos(a) * r, Math.sin(a) * r) + .03, Math.sin(a) * r); scene.add(sh); }
  // clouds
  for (let i = 0; i < 9; i++) { const c = P.makeCloud(P.rnd(1.2, 2.4)); const a = i / 9 * Math.PI * 2; c.position.set(Math.cos(a) * P.rnd(30, 55), P.rnd(13, 22), Math.sin(a) * P.rnd(30, 55) - 10); scene.add(c); c.userData.update = (dt, t) => { c.position.x += dt * .3; if (c.position.x > 60) c.position.x = -60; }; }
  // distant islets
  [[-38, -40, 5], [42, -35, 6], [-55, 10, 4], [55, 20, 4.5]].forEach(([x, z, r]) => { const isl = P.makeIsland({ R: r, res: 50, seed: x }); isl.position.set(x, 0, z); scene.add(isl); const p = P.makePalm({ scale: .9 }); p.position.set(x, .9, z); scene.add(p); });
  // butterflies & sparkles
  for (let i = 0; i < 5; i++) scene.add(P.makeButterfly([0xff8fd0, 0xffd84d, 0x8fd3ff, 0xc79bff, 0xff9f6b][i]));
  scene.add(P.makeSparkles(90, 12));
  finalize(scene);
  scene.userData.sun = L.sun;
  return scene;
}

// show fruit on trees according to progress (# of fruits restored)
export function setRestored(scene, list) {
  const g = scene.userData.groves;
  for (const k in g) g[k].forEach(t => (t.userData.fruitSpots || []).forEach(f => { f.visible = list.includes(k); }));
}

// ---------- world map ----------
export const MAP_LAYOUT = [
  { id: 'fruit', x: -9, z: 8 }, { id: 'forest', x: 1, z: 11 }, { id: 'colors', x: 10, z: 5 },
  { id: 'sea', x: 2, z: -1 }, { id: 'space', x: -9, z: -5 }, { id: 'castle', x: 4, z: -12 },
];
export function buildMap() {
  const scene = new THREE.Scene();
  scene.environment = E.envTex; scene.environmentIntensity = .4;
  scene.add(P.makeSky(0x6ec6ff, 0xfff0d6));
  scene.fog = new THREE.Fog(0xcfeeff, 60, 160);
  P.makeLights(scene, { size: 30 });
  scene.add(P.makeWater(500, 0x139fc4));
  const islands = {};
  const mk = (id, x, z, builder, opts = {}) => {
    const g = new THREE.Group(); g.position.set(x, 0, z); scene.add(g);
    const isl = P.makeIsland({ R: 3.6, res: 60, height: 1.3, seed: x * 3 + z, ...opts }); g.add(isl);
    const H = isl.userData.H; const at = (o, px, pz) => { o.position.set(px, H(px, pz) - .05, pz); g.add(o); return o; };
    builder(at, g, H);
    islands[id] = g; return g;
  };
  mk('fruit', -9, 8, (at) => { at(P.makeTree({ fruit: 'apple', scale: .6 }), -.8, -.6); at(P.makePalm({ scale: .55 }), 1.4, .4); at(P.makeBush({ fruit: 'strawberry', scale: .6 }), .3, 1.4); at(P.makeBananaPlant({ scale: .6 }), -1.6, 1.1); });
  mk('forest', 1, 11, (at) => { [[-1, -1, .8], [.6, -1.3, .95], [1.5, .4, .75], [-1.6, .6, .7], [0, .2, 1.05]].forEach(([x, z, s]) => at(P.makePine(s), x, z)); at(P.makeMushroom(1.4), .9, 1.5); }, { grass: 0x55b84a, grass2: 0x2f8f3f });
  mk('colors', 10, 5, (at) => { at(P.makeHouse(0xff7aa2, 0x5b6bff, .7), -1, -.6); at(P.makeHouse(0xffd84d, 0xff5a5f, .6), .8, -.9); at(P.makeHouse(0x6be3a0, 0xb46bff, .65), .5, .9); at(P.makeHouse(0x6bc5ff, 0xff9a3b, .55), -1.3, 1); }, { grass: 0xb6e86a, grass2: 0x8fd35f });
  mk('sea', 2, -1, (at, g) => { at(P.makeChest(.7), 0, 0); at(P.makeCoral(.9, 0xff7a8a), -1.4, .6); at(P.makeCoral(.8, 0xffb347), 1.3, .8); at(P.makeCoral(.7, 0xb388ff), .9, -1.1); }, { grass: 0xf6dca4, grass2: 0xeac98a });
  mk('space', -9, -5, (at, g) => {
    at(P.makeRocket(.75), 0, 0);
    const pl = P.makePlanet(.7, 0xffa94d); pl.position.set(2.2, 3.4, 0); g.add(pl);
    const pl2 = P.makePlanet(.45, 0x8f7bff); pl2.position.set(-2.2, 2.8, .5); g.add(pl2);
    g.userData.update = (dt, t) => { pl.position.y = 3.4 + Math.sin(t) * .2; pl.rotation.y = t * .5; pl2.position.y = 2.8 + Math.cos(t * 1.2) * .2; };
  }, { grass: 0xb9a6ff, grass2: 0x8f7bdc, sand: 0xe2d6ff });
  mk('castle', 4, -12, (at) => { at(P.makeCastle(.7), 0, -.2); at(P.makeTree({ scale: .45, leaf: 0xff9ccf, leaf2: 0xff7fb8 }), -2, .8); at(P.makeTree({ scale: .4, leaf: 0xff9ccf, leaf2: 0xff7fb8 }), 2, .9); }, { grass: 0x9be27a, grass2: 0x7ccf6a });
  // dotted path
  const pts = MAP_LAYOUT.map(p => new THREE.Vector3(p.x, .25, p.z));
  const curve = new THREE.CatmullRomCurve3(pts);
  const dotG = new THREE.CylinderGeometry(.22, .22, .08, 16), dotM = P.mat(0xffffff, { roughness: .4, emissive: 0xffffff, emissiveIntensity: .2 });
  for (let i = 0; i <= 90; i++) {
    const p = curve.getPoint(i / 90);
    if (MAP_LAYOUT.some(m => Math.hypot(m.x - p.x, m.z - p.z) < 3.4)) continue;
    const d = new THREE.Mesh(dotG, dotM); d.position.copy(p); scene.add(d);
  }
  for (let i = 0; i < 10; i++) { const c = P.makeCloud(P.rnd(1.3, 2.4)); c.position.set(P.rnd(-45, 45), P.rnd(4, 7), P.rnd(-45, -22)); scene.add(c); c.userData.update = (dt) => { c.position.x += dt * .4; if (c.position.x > 50) c.position.x = -50; }; }
  scene.add(P.makeSparkles(60, 18));
  finalize(scene);
  scene.userData.islands = islands;
  return scene;
}

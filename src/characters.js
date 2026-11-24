import * as THREE from 'three';
import { mesh, sphere, fur, gloss, mat, makeAccessory, ACCESSORIES } from './props.js';

export const CHAR_INFO = {
  lulu: { ar: 'لولو', en: 'Lulu', role: 'الثعلبة المغامرة، قائدة الرحلة', color: '#ff8a3d' },
  bibo: { ar: 'بيبو', en: 'Bibo', role: 'العصفور اللي يعلّمك تسمع وتنطق', color: '#3aa0ff' },
  bondoq: { ar: 'بندق', en: 'Bondoq', role: 'الدب الذكي صاحب الألغاز', color: '#a8693a' },
  toota: { ar: 'توتة', en: 'Toota', role: 'الأرنبة اللي تعلّمك الألوان والأرقام', color: '#ff7fb0' },
};

const SPECS = {
  lulu: { furC: 0xff7a1f, light: 0xfff4e6, dark: 0x4a2a1c, iris: 0x4a2c17, body: [1, 1.08, .92], head: [1.1, .97, 1], headR: .62, lashes: true },
  bibo: { furC: 0x3aa0ff, light: 0xd4f0ff, dark: 0x1d4f8f, iris: 0x1b1b3a, body: [1.02, 1, 1], head: [1, 1, 1], headR: .6 },
  bondoq: { furC: 0xa8693a, light: 0xf2d2a6, dark: 0x4a2c18, iris: 0x2b1a0f, body: [1.18, 1.05, 1.05], head: [1.08, .98, 1], headR: .64 },
  toota: { furC: 0xffa8cb, light: 0xfff3f8, dark: 0xb0477a, iris: 0x3a1830, body: [1, 1.06, .95], head: [1.04, .98, 1], headR: .6, lashes: true },
};

const tmpV = new THREE.Vector3();
function onSurface(R, scale, x, y) {
  // point on ellipsoid front + normal
  const sx = scale[0], sy = scale[1], sz = scale[2];
  const nx = x / (R * sx), ny = y / (R * sy);
  const nz = Math.sqrt(Math.max(0, 1 - nx * nx - ny * ny));
  const p = new THREE.Vector3(x, y, nz * R * sz);
  const n = new THREE.Vector3(nx / sx, ny / sy, nz / sz).normalize();
  return { p, n };
}
function orient(obj, n) { obj.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), n); }

function makeEye(sp, size = 1) {
  const g = new THREE.Group();
  const white = mat(0xffffff, { roughness: .2, clearcoat: 1 });
  const sc = sphere(.15, white, 32, 24); sc.scale.set(1, 1.18, .5); g.add(sc);
  const look = new THREE.Group(); g.add(look);
  const iris = sphere(.122, gloss(sp.iris, { roughness: .15 }), 32, 24); iris.scale.set(1, 1.15, .4); iris.position.z = .035; look.add(iris);
  const ring = mesh(new THREE.TorusGeometry(.095, .012, 8, 32), mat(new THREE.Color(sp.iris).offsetHSL(0, .1, .18).getHex(), { roughness: .4 })); ring.scale.set(1, 1.15, 1); ring.position.z = .078; look.add(ring);
  const pupil = sphere(.07, gloss(0x0b0b10, { roughness: .1 }), 24, 16); pupil.scale.set(1, 1.15, .35); pupil.position.z = .062; look.add(pupil);
  const hl = mat(0xffffff, { emissive: 0xffffff, emissiveIntensity: 1 });
  const h1 = sphere(.042, hl, 12, 8); h1.position.set(.045, .055, .095); h1.scale.z = .4; look.add(h1);
  const h2 = sphere(.02, hl, 10, 6); h2.position.set(-.045, -.05, .09); h2.scale.z = .4; look.add(h2);
  [sc, iris, ring, pupil, h1, h2].forEach(m => m.castShadow = false);
  g.scale.setScalar(size);
  // closed happy eye ^
  const arc = mesh(new THREE.TorusGeometry(.1, .024, 8, 20, Math.PI), mat(0x2a1a12)); arc.position.z = .05; arc.visible = false; arc.castShadow = false;
  g.add(arc);
  return { g, look, arc, open: [sc, look] };
}

export class Character {
  constructor(id) {
    this.id = id;
    const sp = this.sp = SPECS[id];
    this.root = new THREE.Group();
    this.root.userData.character = this;
    this.talk = 0; this._talkS = 0; this.expr = 'happy'; this.anim = null; this.animT = 0; this.blinkT = 2; this.lookTarget = null; this.equipped = {};
    this.seed = Math.random() * 10;
    const F = id === 'bibo' ? fur(sp.furC, { sheenColor: new THREE.Color(0xbfe8ff) }) : fur(sp.furC);
    const L = fur(sp.light), D = fur(sp.dark);
    this.mats = { F, L, D };

    // legs
    this.legs = [];
    for (const s of [-1, 1]) {
      const leg = new THREE.Group(); leg.position.set(s * .2, .3, 0); this.root.add(leg);
      if (id === 'bibo') {
        const st = mesh(new THREE.CylinderGeometry(.03, .03, .3, 8), mat(0xff9f2e)); st.position.y = -.15; leg.add(st);
        for (const a of [-.5, 0, .5]) { const toe = mesh(new THREE.CapsuleGeometry(.035, .12, 4, 8), mat(0xff9f2e)); toe.rotation.x = Math.PI / 2; toe.rotation.y = a; toe.position.set(Math.sin(a) * .07, -.28, Math.cos(a) * .07); leg.add(toe); }
      } else {
        const lg = mesh(new THREE.CapsuleGeometry(.13, .14, 6, 16), F); lg.position.y = -.12; leg.add(lg);
        const foot = sphere(.15, id === 'toota' ? L : (id === 'lulu' ? D : F), 24, 16); foot.scale.set(1, .6, id === 'toota' ? 1.7 : 1.3); foot.position.set(0, -.24, .08); leg.add(foot);
        if (id === 'bondoq') { const pad = sphere(.08, L, 16, 12); pad.scale.set(1, 1, .3); pad.position.set(0, -.24, .27); leg.add(pad); }
      }
      this.legs.push(leg);
    }

    // torso
    const torso = this.torso = new THREE.Group(); torso.position.y = .3; this.root.add(torso);
    const bodyR = .5;
    const body = sphere(bodyR, F, 48, 32); body.scale.set(...sp.body); body.position.y = .5; torso.add(body);
    const belly = sphere(bodyR * .78, L, 40, 28); belly.scale.set(sp.body[0] * .85, sp.body[1] * .95, .5); belly.position.set(0, .47, bodyR * sp.body[2] * .62); torso.add(belly);
    this.body = body;

    // arms / wings
    this.arms = [];
    for (const s of [-1, 1]) {
      const sh = new THREE.Group(); sh.position.set(s * bodyR * sp.body[0] * .86, .78, .02); torso.add(sh);
      if (id === 'bibo') {
        const w = sphere(.3, F, 32, 20); w.scale.set(.35, .9, .7); w.position.set(s * .05, -.22, -.02); sh.add(w);
        const tip = sphere(.17, D, 24, 16); tip.scale.set(.3, .8, .6); tip.position.set(s * .07, -.42, -.05); sh.add(tip);
        sh.rotation.z = s * .25;
      } else {
        const arm = mesh(new THREE.CapsuleGeometry(.11, .3, 6, 16), F); arm.position.y = -.2; sh.add(arm);
        const hand = sphere(.13, id === 'lulu' ? D : (id === 'toota' ? L : F), 20, 16); hand.position.y = -.4; sh.add(hand);
        sh.rotation.z = s * .35;
      }
      sh.userData.s = s; this.arms.push(sh);
    }

    // tail
    const tail = this.tail = new THREE.Group(); tail.position.set(0, .4, -bodyR * sp.body[2] * .85); torso.add(tail);
    if (id === 'lulu') {
      const pts = []; for (let i = 0; i <= 24; i++) { const k = i / 24; pts.push(new THREE.Vector2(Math.max(.001, Math.sin(Math.pow(k, .7) * Math.PI) * .3 * (1 - k * .15)), k * 1.25)); }
      const g = new THREE.LatheGeometry(pts, 32);
      const p = g.attributes.position, c = [], o = new THREE.Color(sp.furC), w = new THREE.Color(sp.light);
      for (let i = 0; i < p.count; i++) { const k = THREE.MathUtils.smoothstep(p.getY(i), .9, 1.0); const cc = o.clone().lerp(w, k); c.push(cc.r, cc.g, cc.b); }
      g.setAttribute('color', new THREE.Float32BufferAttribute(c, 3));
      const tm = mesh(g, new THREE.MeshPhysicalMaterial({ vertexColors: true, roughness: .8, sheen: .8, sheenRoughness: .5, sheenColor: new THREE.Color(0xffffff) }));
      tm.rotation.x = -.9; tm.position.set(0, -.15, -.05); tail.add(tm);
    } else if (id === 'bibo') {
      for (const a of [-.35, 0, .35]) { const f = sphere(.16, D, 20, 12); f.scale.set(.45, .2, 1.2); f.position.set(Math.sin(a) * .15, .02, -.15); f.rotation.y = a; f.rotation.x = -.5; tail.add(f); }
    } else {
      const t2 = sphere(id === 'toota' ? .17 : .12, id === 'toota' ? fur(0xffffff) : F, 24, 16); tail.add(t2);
    }

    // neck anchor
    this.neck = new THREE.Group(); this.neck.position.set(0, 1.0 * sp.body[1], .3); torso.add(this.neck);

    // head
    const R = sp.headR, HS = sp.head;
    const head = this.head = new THREE.Group(); head.position.y = 1.0 + R * .72 + (id === 'bibo' ? -.05 : 0); torso.add(head);
    const hm = sphere(R, F, 56, 40); hm.scale.set(...HS); head.add(hm);
    this.headMesh = hm;

    // muzzle / face patches
    if (id === 'lulu') {
      const mz = sphere(.22, L, 40, 28); mz.scale.set(1.15, .78, 1.35); mz.position.set(0, -.17, R * .8); head.add(mz);
      for (const s of [-1, 1]) {
        const ch = sphere(.22, L, 32, 20); ch.scale.set(1.1, .75, .7); ch.position.set(s * .3, -.22, R * .6); head.add(ch);
        const fluff = sphere(.13, L, 20, 14); fluff.scale.set(1.3, .7, .7); fluff.position.set(s * .6, -.2, .12); fluff.rotation.z = s * .5; head.add(fluff);
      }
      const nose = sphere(.07, gloss(0x1e1210, { roughness: .2 }), 24, 16); nose.scale.set(1.25, .85, .9); nose.position.set(0, -.1, R * .8 + .28); head.add(nose);
      this.mouthAt = { pos: new THREE.Vector3(0, -.27, R * .8 + .19), n: new THREE.Vector3(0, -.35, 1).normalize() };
    } else if (id === 'bibo') {
      const face = sphere(R * .82, L, 40, 28); face.scale.set(1.08, .9, .55); face.position.set(0, -.08, R * .62); head.add(face);
      const beakM = gloss(0xffa630, { roughness: .35 });
      const up = mesh(new THREE.ConeGeometry(.14, .3, 24), beakM); up.rotation.x = Math.PI / 2; up.scale.set(1.3, 1, .7);
      const upG = new THREE.Group(); upG.position.set(0, -.08, R * .95); up.position.z = .1; upG.add(up); head.add(upG);
      const lo = mesh(new THREE.ConeGeometry(.1, .2, 24), mat(0xf08a1c, { roughness: .4 })); lo.rotation.x = Math.PI / 2; lo.scale.set(1.3, 1, .6); lo.position.z = .07;
      const loG = new THREE.Group(); loG.position.set(0, -.13, R * .93); loG.add(lo); head.add(loG);
      this.beak = { up: upG, lo: loG };
      // tuft
      this.tuft = new THREE.Group(); head.add(this.tuft);
      [[-.08, .2], [0, 0], [.09, -.25]].forEach(([x, r]) => { const f = sphere(.08, F, 16, 12); f.scale.set(.5, 1.7, .5); f.position.set(x, R + .08, .05); f.rotation.z = r; this.tuft.add(f); });
      // headphones
      const hp = this.headphones = new THREE.Group(); head.add(hp);
      const band = mesh(new THREE.TorusGeometry(R * 1.04, .035, 10, 40, Math.PI), gloss(0xff5f7e)); band.position.y = .02; hp.add(band);
      for (const s of [-1, 1]) { const cup = mesh(new THREE.CylinderGeometry(.15, .15, .1, 24), gloss(0xff5f7e)); cup.rotation.z = Math.PI / 2; cup.position.set(s * R * 1.02, 0, 0); hp.add(cup);
        const pad = mesh(new THREE.CylinderGeometry(.11, .11, .05, 24), mat(0xffffff)); pad.rotation.z = Math.PI / 2; pad.position.set(s * (R * 1.02 + .06), 0, 0); hp.add(pad); }
    } else if (id === 'bondoq') {
      const mz = sphere(.25, L, 40, 28); mz.scale.set(1.25, .9, .85); mz.position.set(0, -.19, R * .8); head.add(mz);
      const nose = sphere(.085, gloss(0x2a1710, { roughness: .2 }), 24, 16); nose.scale.set(1.3, .85, .9); nose.position.set(0, -.1, R * .8 + .2); head.add(nose);
      this.mouthAt = { pos: new THREE.Vector3(0, -.27, R * .8 + .18), n: new THREE.Vector3(0, -.2, 1).normalize() };
      // round glasses
      const gl = this.glasses = new THREE.Group(); head.add(gl);
      const gm = gloss(0x3a2a6a, { roughness: .25 });
      for (const s of [-1, 1]) { const r = mesh(new THREE.TorusGeometry(.15, .025, 10, 32), gm); r.position.set(s * .22, .1, R * .93); r.rotation.y = s * .25; gl.add(r);
        const lens = mesh(new THREE.CircleGeometry(.14, 24), mat(0xcfeaff, { transparent: true, opacity: .25, roughness: .05 })); lens.position.set(s * .22, .1, R * .93 + .01); lens.rotation.y = s * .25; gl.add(lens); }
      const br = mesh(new THREE.CylinderGeometry(.018, .018, .14, 8), gm); br.rotation.z = Math.PI / 2; br.position.set(0, .12, R * .98); gl.add(br);
    } else if (id === 'toota') {
      for (const s of [-1, 1]) { const ch = sphere(.2, L, 32, 20); ch.scale.set(1.1, .85, .8); ch.position.set(s * .13, -.2, R * .78); head.add(ch); }
      const nose = sphere(.055, gloss(0xff4f8f, { roughness: .2 }), 20, 14); nose.scale.set(1.3, .9, .8); nose.position.set(0, -.1, R * .98 + .02); head.add(nose);
      this.mouthAt = { pos: new THREE.Vector3(0, -.24, R * .92 + .03), n: new THREE.Vector3(0, -.15, 1).normalize() };
      const tm = mat(0xffffff, { roughness: .2, clearcoat: 1 });
      this.teeth = new THREE.Group();
      for (const s of [-1, 1]) { const t = mesh(new THREE.BoxGeometry(.055, .07, .03), tm); t.position.set(s * .03, -.04, .015); this.teeth.add(t); }
    }

    // eyes
    const eyeY = id === 'bibo' ? .14 : .1, eyeX = id === 'bibo' ? .22 : .23;
    this.eyes = [];
    for (const s of [-1, 1]) {
      const { p, n } = onSurface(R, HS, s * eyeX, eyeY);
      const e = makeEye(sp, id === 'bibo' ? 1.12 : 1.05); e.g.position.copy(p).addScaledVector(n, -.03); orient(e.g, n); head.add(e.g);
      if (sp.lashes) {
        for (let i = 0; i < 3; i++) { const l = mesh(new THREE.CapsuleGeometry(.012, .07, 3, 6), mat(0x2a1a12)); l.position.set(s * (.1 + i * .025), .15 - i * .035, .02); l.rotation.z = s * (-.9 - i * .35); e.g.add(l); }
      }
      this.eyes.push(e);
    }
    // brows
    this.brows = [];
    for (const s of [-1, 1]) {
      const { p, n } = onSurface(R, HS, s * .24, .31);
      const b = mesh(new THREE.CapsuleGeometry(.025, .1, 4, 8), mat(id === 'bibo' ? 0x1d4f8f : sp.dark)); b.rotation.z = Math.PI / 2; b.position.copy(p).addScaledVector(n, .01);
      const bg = new THREE.Group(); bg.position.copy(b.position); b.position.set(0, 0, 0); orient(bg, n); bg.add(b); head.add(bg);
      bg.userData.base = bg.position.clone(); bg.userData.s = s; this.brows.push(bg);
    }
    // cheeks
    for (const s of [-1, 1]) {
      const { p, n } = onSurface(R, HS, s * .36, -.1);
      const c = sphere(.085, mat(0xff6f91, { transparent: true, opacity: .55, roughness: .8 }), 20, 12); c.scale.set(1.2, .8, .25); c.position.copy(p); orient(c, n); c.castShadow = false; head.add(c);
    }
    // mouth
    if (this.mouthAt) {
      const mg = this.mouth = new THREE.Group(); mg.position.copy(this.mouthAt.pos); orient(mg, this.mouthAt.n); head.add(mg);
      const smile = mesh(new THREE.TorusGeometry(.065, .014, 8, 20, Math.PI), mat(0x3a1414)); smile.rotation.z = Math.PI; smile.position.y = .02; smile.castShadow = false; mg.add(smile);
      const cav = sphere(.075, mat(0x6a1a22, { roughness: .6 }), 24, 16); cav.scale.set(1, .3, .35); cav.castShadow = false; mg.add(cav);
      const tongue = sphere(.045, mat(0xff7a8a), 16, 12); tongue.scale.set(1.2, .5, .4); tongue.position.set(0, -.025, .015); cav.add(tongue);
      this.smile = smile; this.cav = cav;
      if (this.teeth) mg.add(this.teeth);
    }

    // ears
    this.ears = [];
    for (const s of [-1, 1]) {
      const eg = new THREE.Group(); head.add(eg);
      if (id === 'lulu') {
        eg.position.set(s * .36, R * .78, -.02); eg.rotation.z = -s * .38;
        const outer = mesh(new THREE.ConeGeometry(.24, .55, 32), F); outer.scale.z = .5; outer.position.y = .22; eg.add(outer);
        const inner = mesh(new THREE.ConeGeometry(.15, .36, 24), fur(0xffe3cf)); inner.scale.z = .3; inner.position.set(0, .17, .07); eg.add(inner);
        const tip = mesh(new THREE.ConeGeometry(.098, .16, 24), D); tip.scale.z = .55; tip.position.y = .43; eg.add(tip);
      } else if (id === 'bondoq') {
        eg.position.set(s * .44, R * .7, -.05);
        const o = sphere(.19, F, 24, 16); o.scale.z = .55; eg.add(o);
        const i2 = sphere(.11, L, 20, 12); i2.scale.z = .3; i2.position.z = .07; eg.add(i2);
      } else if (id === 'toota') {
        eg.position.set(s * .2, R * .8, -.08); eg.rotation.z = -s * .18;
        const lo = mesh(new THREE.CapsuleGeometry(.11, .38, 8, 20), F); lo.scale.z = .55; lo.position.y = .25; eg.add(lo);
        const li = mesh(new THREE.CapsuleGeometry(.06, .32, 6, 16), fur(0xff7fb0)); li.scale.z = .3; li.position.set(0, .25, .05); eg.add(li);
        const up = new THREE.Group(); up.position.y = .5; eg.add(up);
        const uo = mesh(new THREE.CapsuleGeometry(.11, .22, 8, 20), F); uo.scale.z = .55; uo.position.y = .14; up.add(uo);
        const ui = mesh(new THREE.CapsuleGeometry(.06, .18, 6, 16), fur(0xff7fb0)); ui.scale.z = .3; ui.position.set(0, .14, .05); up.add(ui);
        if (s === 1) up.rotation.x = -.9, up.rotation.z = -.4;
        eg.userData.up = up;
        if (s === -1) { // bow
          const bm = gloss(0xffd84d);
          const bow = new THREE.Group(); bow.position.set(0, .05, .1); eg.add(bow);
          for (const b of [-1, 1]) { const w = mesh(new THREE.ConeGeometry(.1, .17, 16), bm); w.rotation.z = b * Math.PI / 2; w.position.x = b * .08; w.scale.z = .5; bow.add(w); }
          const k = sphere(.045, bm); bow.add(k);
        }
      }
      eg.userData.baseRot = eg.rotation.clone(); this.ears.push(eg);
    }

    // anchors
    this.headTop = new THREE.Group(); this.headTop.position.set(0, R * HS[1] * (id === 'toota' ? .92 : .9), 0); head.add(this.headTop);
    this.face = new THREE.Group(); { const { p, n } = onSurface(R, HS, 0, .1); this.face.position.copy(p).addScaledVector(n, .1); this.face.position.y = .1; } head.add(this.face);
    // scarf for lulu
    if (id === 'lulu') {
      const sc = new THREE.Group(); sc.position.set(0, 1.03, 0); torso.add(sc);
      const ring = mesh(new THREE.TorusGeometry(.36, .085, 14, 40), fur(0x22b8a8, { sheenColor: new THREE.Color(0xbffff6) })); ring.rotation.x = Math.PI / 2; ring.scale.set(1.08, 1, 1); sc.add(ring);
      const knot = mesh(new THREE.ConeGeometry(.14, .3, 3), fur(0x22b8a8)); knot.position.set(.14, -.14, .34); knot.rotation.set(.3, 0, Math.PI + .3); sc.add(knot);
      this.scarf = sc;
    }
    this.root.traverse(o => { if (o.isMesh && o.castShadow !== false) o.castShadow = true; });
  }

  setExpr(e) { this.expr = e; }
  play(name, dur) { this.anim = name; this.animT = 0; this.animDur = dur || { wave: 2.2, cheer: 1.8, jump: .9, nod: 1.2, think: 2.2, point: 1.8, clap: 1.6, spin: 1.2, sad: 1.6 }[name] || 1.5; }
  lookAt(v) { this.lookTarget = v; }

  equip(slot, id) {
    const anchor = slot === 'head' ? this.headTop : slot === 'face' ? this.face : this.neck;
    if (this.equipped[slot]) { anchor.remove(this.equipped[slot].obj); this.equipped[slot] = null; }
    if (this.tuft) this.tuft.visible = !(slot === 'head' ? id : this.equipped.head);
    if (this.glasses && slot === 'face') this.glasses.visible = !id;
    if (this.scarf && slot === 'neck') this.scarf.visible = !id;
    if (!id) return;
    const obj = makeAccessory(id);
    if (slot === 'head') { obj.scale.setScalar(this.id === 'toota' ? .9 : 1); if (this.id === 'bibo') obj.position.y = .05; }
    if (slot === 'face') { obj.scale.setScalar(this.id === 'bibo' ? 1.1 : 1); obj.position.z = this.id === 'lulu' || this.id === 'bondoq' ? .05 : 0; }
    obj.traverse(o => { if (o.isMesh) o.castShadow = true; });
    anchor.add(obj); this.equipped[slot] = { id, obj };
  }

  update(dt, t) {
    const s = this.seed;
    // talking amplitude smoothing
    this._talkS += (this.talk - this._talkS) * Math.min(1, dt * 18);
    const tk = this._talkS;
    // base idle
    let rootY = 0, headRX = Math.sin(t * 1.1 + s) * .03, headRZ = Math.sin(t * .7 + s) * .04, headRY = 0;
    const breathe = Math.sin(t * 2.2 + s) * .018;
    this.torso.scale.set(1 - breathe * .5, 1 + breathe, 1 - breathe * .5);
    let armA = [.35 + Math.sin(t * 1.6 + s) * .05, .35 + Math.sin(t * 1.6 + s + 1) * .05], armX = [0, 0];
    let happyEyes = this.expr === 'laugh', browUp = this.expr === 'surprised' ? .05 : this.expr === 'think' ? .03 : 0, browTilt = this.expr === 'think' ? .3 : 0;
    // talking adds head bob + gestures
    if (tk > .05) { headRX += Math.sin(t * 9) * .04 * tk; armA[1] += Math.sin(t * 5) * .25 * tk; }
    // anim
    if (this.anim) {
      this.animT += dt; const k = this.animT / this.animDur, a = this.animT;
      switch (this.anim) {
        case 'wave': armA[0] = 2.5 + Math.sin(a * 12) * .35; headRZ += .12; break;
        case 'cheer': { const j = Math.abs(Math.sin(a * Math.PI * 2.2)); rootY = j * .45; armA = [2.7 + Math.sin(a * 14) * .2, 2.7 + Math.sin(a * 14 + 1) * .2]; happyEyes = true; break; }
        case 'jump': rootY = Math.sin(Math.min(k, 1) * Math.PI) * .6; armA = [1.8, 1.8]; break;
        case 'nod': headRX += Math.sin(a * 12) * .18; break;
        case 'think': headRZ += .25; armA[0] = 2.2; armX[0] = -.9; browTilt = .35; browUp = .03; break;
        case 'point': armA[0] = 1.5; armX[0] = -.8; headRY = -.2; break;
        case 'clap': { const c = Math.abs(Math.sin(a * 10)); armA = [1.3, 1.3]; armX = [-1.1 + c * .5, -1.1 + c * .5]; happyEyes = true; break; }
        case 'spin': this.root.rotation.y = this._baseRotY + Math.sin(Math.min(k, 1) * Math.PI / 2) * Math.PI * 2; rootY = Math.sin(Math.min(k, 1) * Math.PI) * .3; break;
        case 'sad': headRX += .15; browTilt = -.3; break;
      }
      if (k >= 1) { if (this.anim === 'spin') this.root.rotation.y = this._baseRotY; this.anim = null; }
    } else this._baseRotY = this.root.rotation.y;
    this.root.position.y += (this.baseY ?? 0) + rootY - this.root.position.y;
    this.head.rotation.set(headRX, headRY + Math.sin(t * .5 + s) * .06, headRZ);
    this.arms.forEach((arm, i) => { const sgn = arm.userData.s; arm.rotation.z += (sgn * armA[i] - arm.rotation.z) * Math.min(1, dt * 10); arm.rotation.x += (armX[i] - arm.rotation.x) * Math.min(1, dt * 10); });
    if (this.id === 'bibo') { const f = (this.anim === 'cheer' || this.anim === 'jump') ? Math.sin(t * 30) * .5 : 0; this.arms.forEach(a => a.rotation.z += a.userData.s * f * .5); }
    // tail
    this.tail.rotation.y = Math.sin(t * (this.anim === 'cheer' ? 9 : 2.2) + s) * (this.id === 'lulu' ? .35 : .2);
    // ears twitch
    const tw = (Math.sin(t * .9 + s * 3) > .97) ? Math.sin(t * 40) * .15 : 0;
    this.ears.forEach((e, i) => { e.rotation.z = e.userData.baseRot.z + (i ? tw : -tw * .5); if (e.userData.up && i === 0) e.userData.up.rotation.x = Math.sin(t * 2 + s) * .08; });
    // blink
    this.blinkT -= dt; let blink = 1;
    if (this.blinkT < 0) { const b = -this.blinkT; blink = b < .07 ? 1 - b / .07 : b < .14 ? (b - .07) / .07 : 1; if (b > .14) this.blinkT = 2 + Math.random() * 3; }
    this.eyes.forEach(e => {
      e.open.forEach(o => o.visible = !happyEyes); e.arc.visible = happyEyes;
      e.g.scale.y = (happyEyes ? 1 : Math.max(.08, blink)) * (this.expr === 'surprised' ? 1.12 : 1) * e.g.scale.x;
    });
    // eye look-at
    if (this.lookTarget) {
      this.head.updateWorldMatrix(true, false);
      const lp = this.head.worldToLocal(tmpV.copy(this.lookTarget));
      const lx = THREE.MathUtils.clamp(lp.x * .02, -.035, .035), ly = THREE.MathUtils.clamp(lp.y * .02, -.03, .03);
      this.eyes.forEach(e => { e.look.position.x += (lx - e.look.position.x) * .1; e.look.position.y += (ly - e.look.position.y) * .1; });
    }
    // brows
    this.brows.forEach(b => { b.position.y = b.userData.base.y + browUp; b.rotation.z = b.userData.s * browTilt * (b.userData.s > 0 ? 1 : -1) * .6 + (this.expr === 'surprised' ? 0 : 0); });
    // mouth
    if (this.mouth) {
      const open = Math.max(tk, this.expr === 'surprised' ? .5 : 0, happyEyes ? .35 : 0);
      this.cav.scale.y = .12 + open * .9; this.cav.visible = open > .06; this.smile.visible = open < .3;
      if (this.teeth) this.teeth.visible = true;
    }
    if (this.beak) { this.beak.lo.rotation.x = .1 + tk * .55 + (happyEyes ? .25 : 0); this.beak.up.rotation.x = -tk * .12; }
  }
}

export function makeCharacter(id) { return new Character(id); }

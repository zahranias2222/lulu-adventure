import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

export const E = { updaters: new Set(), tweens: [], pickables: [], t: 0 };

export function initEngine(canvas) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = .95;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  const pmrem = new THREE.PMREMGenerator(renderer);
  E.envTex = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  E.renderer = renderer;
  E.camera = new THREE.PerspectiveCamera(40, 1, 0.1, 600);
  E.clock = new THREE.Clock();
  E.raycaster = new THREE.Raycaster();
  E.canvas = canvas;
  const resize = () => {
    const w = canvas.clientWidth || window.innerWidth, h = canvas.clientHeight || window.innerHeight;
    renderer.setSize(w, h, false);
    E.camera.aspect = w / h;
    E.camera.updateProjectionMatrix();
    E.aspect = w / h;
    if (E.onResize) E.onResize(w, h);
  };
  window.addEventListener('resize', resize);
  new ResizeObserver(resize).observe(canvas);
  resize();

  canvas.addEventListener('pointerdown', (ev) => {
    const r = canvas.getBoundingClientRect();
    const p = new THREE.Vector2(((ev.clientX - r.left) / r.width) * 2 - 1, -((ev.clientY - r.top) / r.height) * 2 + 1);
    E.raycaster.setFromCamera(p, E.camera);
    const targets = E.pickables.filter(o => o.visible && isShown(o));
    const hits = E.raycaster.intersectObjects(targets, true);
    for (const h of hits) {
      let o = h.object;
      while (o && !o.userData.onTap) o = o.parent;
      if (o && o.userData.onTap) { o.userData.onTap(o, h); return; }
    }
    if (E.onMiss) E.onMiss();
  });

  const loop = () => {
    const dt = Math.min(E.clock.getDelta(), 0.05);
    E.t += dt;
    for (const u of [...E.updaters]) u(dt, E.t);
    stepTweens(dt);
    if (E.scene) renderer.render(E.scene, E.camera);
    requestAnimationFrame(loop);
  };
  requestAnimationFrame(loop);
}

function isShown(o) { while (o) { if (!o.visible) return false; o = o.parent; } return true; }

export function pickable(obj, fn) { obj.userData.onTap = fn; if (!E.pickables.includes(obj)) E.pickables.push(obj); return obj; }
export function unpick(obj) { E.pickables = E.pickables.filter(o => o !== obj); delete obj.userData.onTap; }
export function clearPicks() { E.pickables.length = 0; }

export const ease = {
  linear: t => t,
  out: t => 1 - Math.pow(1 - t, 3),
  in: t => t * t * t,
  inOut: t => (t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2),
  back: t => { const c1 = 1.70158, c3 = c1 + 1; return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2); },
  elastic: t => (t === 0 || t === 1 ? t : Math.pow(2, -10 * t) * Math.sin((t * 10 - .75) * (2 * Math.PI) / 3) + 1),
  bounce: t => { const n = 7.5625, d = 2.75; if (t < 1 / d) return n * t * t; if (t < 2 / d) return n * (t -= 1.5 / d) * t + .75; if (t < 2.5 / d) return n * (t -= 2.25 / d) * t + .9375; return n * (t -= 2.625 / d) * t + .984375; },
};

// tween any numeric props of target
export function tween(target, to, dur = 0.5, e = ease.out, onUpdate) {
  return new Promise(res => {
    const from = {};
    for (const k in to) from[k] = target[k];
    E.tweens.push({ target, from, to, dur, e, t: 0, res, onUpdate });
  });
}
export function wait(s) { return new Promise(r => E.tweens.push({ target: {}, from: {}, to: {}, dur: s, e: ease.linear, t: 0, res: r })); }
export function killTweens(target) { E.tweens = E.tweens.filter(tw => tw.target !== target); }
function stepTweens(dt) {
  const done = [];
  for (const tw of E.tweens) {
    tw.t += dt;
    const k = Math.min(tw.t / tw.dur, 1), v = tw.e(k);
    for (const p in tw.to) tw.target[p] = tw.from[p] + (tw.to[p] - tw.from[p]) * v;
    if (tw.onUpdate) tw.onUpdate(v);
    if (k >= 1) done.push(tw);
  }
  if (done.length) { E.tweens = E.tweens.filter(t => !done.includes(t)); done.forEach(t => t.res()); }
}

// move camera smoothly
export function flyCamera(pos, look, dur = 1.2) {
  const c = E.camera;
  const start = c.position.clone(), lookStart = (E.look || look.clone()).clone();
  const o = { k: 0 };
  return tween(o, { k: 1 }, dur, ease.inOut, () => {
    c.position.lerpVectors(start, pos, o.k);
    const l = lookStart.clone().lerp(look, o.k);
    c.lookAt(l); E.look = l;
  });
}
export function setCamera(pos, look) { E.camera.position.copy(pos); E.camera.lookAt(look); E.look = look.clone(); }

// project a world position into CSS px
export function toScreen(v) {
  const p = v.clone().project(E.camera);
  const r = E.canvas.getBoundingClientRect();
  return { x: (p.x * .5 + .5) * r.width, y: (-p.y * .5 + .5) * r.height, behind: p.z > 1 };
}
// width of the view at a distance from camera
export function viewWidthAt(dist) {
  const h = 2 * Math.tan(THREE.MathUtils.degToRad(E.camera.fov / 2)) * dist;
  return h * E.camera.aspect;
}

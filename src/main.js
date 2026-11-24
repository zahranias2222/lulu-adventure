import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { E, initEngine, pickable, clearPicks, prunePicks, tween, wait, ease, flyCamera, setCamera, toScreen } from './engine.js';
import { buildFruitIsland, buildMap, setRestored, MAP_LAYOUT } from './worlds.js';
import { makeCharacter, CHAR_INFO } from './characters.js';
import * as P from './props.js';
import { A, initAudio, playClip, sfx, startMusic, voiceLevel, lineText, stopVoice, setMusicVol, setSfxVol } from './audio.js';
import { WORLDS, BADGES, AVATARS } from './data.js';
import { store, save, cur, newProfile, word, totalStars, wordStatus, addTime, today, resetProfile, deleteProfile } from './store.js';
import { ICON } from './icons.js';

// ================= boot =================
const $ = (s, r = document) => r.querySelector(s);
const UI = $('#screen'), TOP = $('#topbar'), BUB = $('#bubble');
initEngine($('#c'));
const CH = {};
for (const id of ['lulu', 'bibo', 'toota', 'bondoq']) CH[id] = makeCharacter(id);
let island = null, map = null, screen = '', RUN = 0;
const ABORT = new Error('abort');
const floaters = new Set();
E.updaters.add((dt, t) => {
  if (E.scene && E.scene.userData.tick) E.scene.userData.tick(dt, t);
  const lv = voiceLevel();
  for (const id in CH) { const c = CH[id]; c.talk = A.speakingChar === c ? lv : 0; if (c.root.parent) c.update(dt, t); }
  floaters.forEach(f => f(dt, t));
  if (E.onFrame) E.onFrame(dt, t);
});
function getIsland() { if (!island) island = buildFruitIsland(); return island; }
function getMap() { if (!map) map = buildMap(); return map; }
function useScene(s) {
  E.scene = s;
  for (const id in CH) { const c = CH[id]; c.root.visible = false; s.add(c.root); c.root.scale.setScalar(1); c.lookAt(null); c.anim = null; c.setExpr('happy'); }
}
function show(c, pos, ry = 0, scale = 1) { c.root.visible = true; c.root.position.copy(pos); c.baseY = pos.y; c.root.rotation.set(0, ry, 0); c._baseRotY = ry; c.root.scale.setScalar(scale); return c; }
const faceCam = (pos) => Math.atan2(E.camera.position.x - pos.x, E.camera.position.z - pos.z);
const portrait = () => E.aspect < .9;

let runObjs = [];
function addObj(o) { E.scene.add(o); runObjs.push(o); return o; }
function newRun(name) {
  runObjs.forEach(o => o.parent && o.parent.remove(o)); runObjs = [];
  RUN++; screen = name; stopVoice(); A.speakingChar = null; clearPicks(); floaters.clear(); E.onFrame = null; E.onMiss = null; E.onResize = null;
  hideBubble(); UI.innerHTML = ''; TOP.innerHTML = ''; document.body.dataset.screen = name;
  const id = RUN; return () => { if (id !== RUN) throw ABORT; };
}
const guard = (fn) => (...a) => fn(...a).catch(e => { if (e !== ABORT) console.error(e); });

// ================= helpers: DOM =================
function h(tag, attrs = {}, ...kids) {
  const el = document.createElement(tag);
  for (const k in attrs) {
    if (k === 'class') el.className = attrs[k];
    else if (k === 'html') el.innerHTML = attrs[k];
    else if (k.startsWith('on')) el.addEventListener(k.slice(2), attrs[k]);
    else if (attrs[k] !== false && attrs[k] != null) el.setAttribute(k, attrs[k]);
  }
  for (const c of kids.flat()) if (c != null) el.append(c.nodeType ? c : document.createTextNode(c));
  return el;
}
function btn(cls, content, onclick, label) {
  const b = h('button', { class: 'btn ' + cls, type: 'button', 'aria-label': label || null });
  if (typeof content === 'string') b.innerHTML = content; else b.append(content);
  b.addEventListener('click', e => { initAudio(); sfx('tap'); onclick && onclick(e); });
  return b;
}
const en = (t) => h('span', { class: 'en', dir: 'ltr' }, t);
function clickOnce(el) { return new Promise(r => el.addEventListener('click', () => r(), { once: true })); }

// ================= thumbnails (offscreen 3D renders) =================
const TH = { cache: {} };
function thumb(kind, id, size = 256) {
  const key = kind + ':' + id; if (TH.cache[key]) return TH.cache[key];
  if (!TH.r) {
    const cv = document.createElement('canvas'); cv.width = cv.height = size;
    TH.r = new THREE.WebGLRenderer({ canvas: cv, alpha: true, antialias: true, preserveDrawingBuffer: true });
    TH.r.setSize(size, size, false); TH.r.toneMapping = THREE.ACESFilmicToneMapping; TH.r.outputColorSpace = THREE.SRGBColorSpace;
    TH.scene = new THREE.Scene();
    TH.scene.environment = new THREE.PMREMGenerator(TH.r).fromScene(new RoomEnvironment(), .04).texture; TH.scene.environmentIntensity = .45;
    TH.scene.add(new THREE.HemisphereLight(0xffffff, 0xffe0c0, .9));
    const d = new THREE.DirectionalLight(0xffffff, 2.4); d.position.set(3, 5, 6); TH.scene.add(d);
    TH.cam = new THREE.PerspectiveCamera(30, 1, .1, 50);
  }
  let obj, camPos, look;
  if (kind === 'char') { const c = makeCharacter(id); c.update(0, 1.3); c.eyes.forEach(e => e.g.scale.y = e.g.scale.x); obj = c.root; camPos = new THREE.Vector3(0, 2.05, 4.1); look = new THREE.Vector3(0, 1.75, 0); }
  else if (kind === 'charfull') { const c = makeCharacter(id); c.update(0, 1.3); c.eyes.forEach(e => e.g.scale.y = e.g.scale.x); obj = c.root; camPos = new THREE.Vector3(0, 1.4, 7.2); look = new THREE.Vector3(0, 1.2, 0); }
  else if (kind === 'fruit') { obj = P.makeFruit(id); obj.rotation.y = -.4; camPos = new THREE.Vector3(0, .5, 3.2); look = new THREE.Vector3(0, 0, 0); }
  else if (kind === 'acc') { obj = P.makeAccessory(id); obj.rotation.set(.35, -.5, 0); camPos = new THREE.Vector3(0, .5, 2.6); look = new THREE.Vector3(0, .15, 0); }
  TH.scene.add(obj); TH.cam.position.copy(camPos); TH.cam.lookAt(look);
  TH.r.render(TH.scene, TH.cam);
  const url = TH.r.domElement.toDataURL('image/png');
  TH.scene.remove(obj);
  return (TH.cache[key] = url);
}
const img = (kind, id, cls = '') => h('img', { src: thumb(kind, id), class: 'thumb ' + cls, alt: '', draggable: 'false' });

// ================= speech =================
function showBubble(info) {
  const c = CHAR_INFO[info.who];
  BUB.innerHTML = '';
  BUB.append(h('img', { src: thumb('char', info.who), alt: '' }), h('div', { class: 'b-body' }, h('b', { style: `color:${c.color}` }, c.ar), h('p', { dir: info.lang === 'en' ? 'ltr' : 'rtl', class: info.lang }, info.text)));
  BUB.classList.add('on');
}
function hideBubble() { BUB.classList.remove('on'); }
const gk = (k) => { const p = cur(); const key = k + (p && p.gender === 'f' ? '_f' : '_m'); return lineText('ar_' + key) ? key : k; };
async function say(key, { bubble = true, rate = 1 } = {}) {
  const info = lineText(key); if (!info) return;
  if (bubble) showBubble(info);
  const c = CH[info.who]; A.speakingChar = c;
  const my = ++sayN;
  await playClip(key, rate);
  if (A.speakingChar === c) A.speakingChar = null;
  if (bubble) setTimeout(() => { if (my === sayN) hideBubble(); }, 1600);
}
let sayN = 0;
const sayAr = (k, o) => say('ar_' + gk(k), o);

// ================= confetti =================
const FX = $('#fx'), fx = FX.getContext('2d'); let parts = [];
function confetti(n = 140) {
  FX.width = innerWidth * devicePixelRatio; FX.height = innerHeight * devicePixelRatio;
  const cols = ['#ff7a1f', '#ffd84d', '#22b8a8', '#ff5f8f', '#3aa0ff', '#8f7bff'];
  for (let i = 0; i < n; i++) parts.push({ x: Math.random() * FX.width, y: -20 - Math.random() * FX.height * .4, vx: (Math.random() - .5) * 4, vy: 2 + Math.random() * 5, r: Math.random() * 6, vr: (Math.random() - .5) * .3, c: cols[i % cols.length], s: (6 + Math.random() * 8) * devicePixelRatio, life: 1 });
  if (parts.length === n) requestAnimationFrame(stepConf);
}
function stepConf() {
  fx.clearRect(0, 0, FX.width, FX.height);
  parts.forEach(p => { p.x += p.vx; p.y += p.vy; p.vy += .05; p.r += p.vr; fx.save(); fx.translate(p.x, p.y); fx.rotate(p.r); fx.fillStyle = p.c; fx.fillRect(-p.s / 2, -p.s / 4, p.s, p.s / 2); fx.restore(); });
  parts = parts.filter(p => p.y < FX.height + 30);
  if (parts.length) requestAnimationFrame(stepConf); else fx.clearRect(0, 0, FX.width, FX.height);
}

// ================= 3D fx =================
function burst(pos, color = 0xffd84d, n = 14) {
  const g = new THREE.SphereGeometry(.07, 8, 6);
  for (let i = 0; i < n; i++) {
    const m = new THREE.Mesh(g, new THREE.MeshBasicMaterial({ color: i % 3 ? color : 0xffffff, transparent: true }));
    m.position.copy(pos); addObj(m);
    const d = new THREE.Vector3(Math.random() - .5, Math.random() * .8, Math.random() - .5).normalize().multiplyScalar(.8 + Math.random() * .8);
    const o = { k: 0 };
    tween(o, { k: 1 }, .7, ease.out, () => { m.position.copy(pos).addScaledVector(d, o.k); m.material.opacity = 1 - o.k; m.scale.setScalar(1 - o.k * .6); }).then(() => E.scene.remove(m));
  }
}
function starPop(pos) {
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: starTex(), transparent: true, depthTest: false }));
  s.position.copy(pos); s.scale.setScalar(.1); addObj(s);
  const o = { k: 0 };
  tween(o, { k: 1 }, 1, ease.out, () => { s.scale.setScalar(.2 + Math.sin(o.k * Math.PI) * .9); s.position.y = pos.y + o.k * 1.2; s.material.opacity = 1 - Math.max(0, o.k - .6) / .4; s.material.rotation = o.k * 2; }).then(() => E.scene.remove(s));
}
let _st;
function starTex() {
  if (_st) return _st;
  const c = document.createElement('canvas'); c.width = c.height = 128; const x = c.getContext('2d');
  x.translate(64, 64); x.beginPath(); for (let i = 0; i < 10; i++) { const r = i % 2 ? 26 : 58, a = i * Math.PI / 5 - Math.PI / 2; x.lineTo(Math.cos(a) * r, Math.sin(a) * r); } x.closePath();
  x.fillStyle = '#ffcf2e'; x.strokeStyle = '#ff9f1c'; x.lineWidth = 8; x.lineJoin = 'round'; x.fill(); x.stroke();
  x.fillStyle = 'rgba(255,255,255,.6)'; x.beginPath(); x.ellipse(-12, -14, 10, 6, -.6, 0, 7); x.fill();
  return (_st = new THREE.CanvasTexture(c));
}

const bubbleMat = new THREE.MeshPhysicalMaterial({ color: 0xffffff, transparent: true, opacity: .2, roughness: 0, metalness: 0, iridescence: 1, iridescenceIOR: 1.35, clearcoat: 1, depthWrite: false, envMapIntensity: 1.5 });
function makeChoice(fruitId, size = 1) {
  const g = new THREE.Group(); g.userData.fruit = fruitId;
  const f = P.makeFruit(fruitId); f.scale.setScalar(.95); g.add(f);
  const b = new THREE.Mesh(new THREE.SphereGeometry(.78, 40, 28), bubbleMat.clone()); g.add(b);
  const ring = new THREE.Mesh(new THREE.TorusGeometry(.82, .05, 8, 48), new THREE.MeshBasicMaterial({ color: 0xfff27a, transparent: true, opacity: 0 })); g.add(ring);
  g.userData.ring = ring; g.userData.bub = b; g.userData.fr = f;
  g.scale.setScalar(size);
  const seed = Math.random() * 10;
  const fl = (dt, t) => { f.rotation.y = Math.sin(t * .9 + seed) * .6; g.position.y = g.userData.baseY + Math.sin(t * 1.6 + seed) * .08; ring.rotation.z = t; ring.lookAt(E.camera.position); };
  g.userData.fl = fl; floaters.add(fl);
  return g;
}
function removeChoice(g) { floaters.delete(g.userData.fl); if (g.parent) g.parent.remove(g); }
async function wobble(o) { const r = o.rotation.z; for (let i = 0; i < 3; i++) { await tween(o.rotation, { z: r + .25 }, .07); await tween(o.rotation, { z: r - .25 }, .07); } o.rotation.z = r; }
async function glow(o, on = true) { const r = o.userData.ring; if (r) await tween(r.material, { opacity: on ? .95 : 0 }, .3); }
async function popBubble(o) { sfx('pop'); const b = o.userData.bub; if (!b) return; burst(o.getWorldPosition(new THREE.Vector3()), 0xbfefff, 10); await tween(b.scale, { x: 1.35, y: 1.35, z: 1.35 }, .15); b.visible = false; }

const _ray = new THREE.Raycaster();
function ndcTo(nx, ny, plane) { E.camera.updateMatrixWorld(); _ray.setFromCamera(new THREE.Vector2(nx, ny), E.camera); const p = new THREE.Vector3(); _ray.ray.intersectPlane(plane, p); return p; }

// tap one of objects; resolves with object
function waitTap(objs) {
  prunePicks();
  return new Promise(res => {
    objs.forEach(o => pickable(o, (obj) => { res(obj); }));
  });
}

// ================= top bar =================
function topBar({ back, title, stars = true, replay } = {}) {
  TOP.innerHTML = '';
  const L = h('div', { class: 'tb-side' }), R = h('div', { class: 'tb-side' });
  if (back) L.append(btn('round', ICON.home, back, 'رجوع'));
  if (replay) L.append(btn('round teal', ICON.speaker, replay, 'اسمع مرة ثانية'));
  const p = cur();
  if (stars && p) R.append(h('div', { class: 'pill' }, h('span', { html: ICON.star }), h('b', {}, String(totalStars(p)))));
  TOP.append(R, h('div', { class: 'tb-title' }, title || ''), L);
}

// ================= persistent outfits =================
function applyOutfits() {
  const p = cur();
  for (const id in CH) for (const slot of ['head', 'face', 'neck']) CH[id].equip(slot, p?.equipped?.[id]?.[slot] || null);
}

// ================= screens =================
// 1. start
const start = guard(async function () {
  const chk = newRun('start');
  const s = getIsland(); useScene(s);
  setRestored(s, restoredList());
  applyOutfits();
  const st = s.userData.stage;
  show(CH.lulu, st.clone().add(new THREE.Vector3(0, 0, .6)), 0, 1.25);
  show(CH.bibo, st.clone().add(new THREE.Vector3(-2.6, 0, -1.2)), .4, .9);
  show(CH.toota, st.clone().add(new THREE.Vector3(2.5, 0, -1)), -.4, .9);
  show(CH.bondoq, st.clone().add(new THREE.Vector3(1.4, 0, -2.6)), -.2, .9);
  const look = st.clone().add(new THREE.Vector3(0, 1.6, 0));
  let ang = 0;
  E.onFrame = (dt) => { ang += dt * .05; const r = portrait() ? 11 : 8.5; E.camera.position.set(Math.sin(Math.sin(ang) * .5) * r, st.y + 2.6, st.z + Math.cos(Math.sin(ang) * .5) * r); E.camera.lookAt(look); E.camera.fov = portrait() ? 55 : 40; E.camera.updateProjectionMatrix(); };
  for (const id in CH) CH[id].lookAt(E.camera.position);
  CH.lulu.play('wave');
  UI.append(h('div', { class: 'start' },
    logo(),
    h('div', { class: 'start-actions' },
      btn('big orange pulse', `${ICON.play}<span>يلا نلعب!</span>`, guard(async () => {
        initAudio(); startMusic();
        if (!store.seenIntro) await intro(); else profiles();
      })),
    ),
  ), btn('parent-btn', `${ICON.lock}<span>للوالدين</span>`, () => parentGate()));
  const wave = setInterval(() => { if (screen !== 'start') return clearInterval(wave); CH.lulu.play(Math.random() > .5 ? 'wave' : 'jump'); }, 4200);
});

function logo(small) {
  return h('div', { class: 'logo' + (small ? ' small' : '') },
    h('div', { class: 'logo-ar' }, 'مغامرات لولو'),
    h('div', { class: 'logo-en', dir: 'ltr' }, "Lulu's English Adventure"),
    small ? null : h('div', { class: 'logo-tag' }, h('span', { dir: 'ltr' }, 'Play, Discover & Speak English!'), h('span', {}, 'العب، اكتشف، وتكلّم بالإنجليزية!')));
}
function restoredList() { const p = cur(); const w = WORLDS[0]; return w.stages.filter((s, i) => p && p.done['fruit-' + i]).map(s => s.restores); }

// story intro
const intro = guard(async function () {
  const chk = newRun('intro');
  const s = getIsland(); useScene(s); applyOutfits();
  setRestored(s, ['apple', 'banana', 'orange', 'strawberry', 'grapes']);
  const st = s.userData.stage;
  show(CH.lulu, st.clone(), 0, 1.2);
  setCamera(new THREE.Vector3(0, st.y + 2.4, st.z + (portrait() ? 10 : 7)), st.clone().add(new THREE.Vector3(0, 1.5, 0)));
  E.camera.fov = portrait() ? 55 : 40; E.camera.updateProjectionMatrix();
  CH.lulu.lookAt(E.camera.position);
  const skip = btn('skip', 'تخطّي', () => { store.seenIntro = true; save(); profiles(); });
  UI.append(skip);
  CH.lulu.play('wave'); await say('lulu_hello'); chk();
  await say('ar_intro1'); chk();
  // words fly away: fruits vanish from trees
  await flyCamera(new THREE.Vector3(0, 13, st.z + 16), new THREE.Vector3(0, 0, -1), 2); chk();
  const g = s.userData.groves; const all = [];
  for (const k in g) g[k].forEach(t => (t.userData.fruitSpots || []).forEach(f => all.push(f)));
  CH.lulu.setExpr('surprised');
  sfx('whoosh');
  const say2 = say('ar_intro2');
  for (let i = 0; i < all.length; i++) { const f = all[i]; if (i % 4 === 0) burst(f.getWorldPosition(new THREE.Vector3()), 0xfff27a, 6); f.visible = false; if (i % 6 === 0) await wait(.05); }
  await say2; chk();
  await flyCamera(new THREE.Vector3(0, st.y + 2.4, st.z + (portrait() ? 10 : 7)), st.clone().add(new THREE.Vector3(0, 1.5, 0)), 1.6); chk();
  CH.lulu.setExpr('happy'); CH.lulu.play('cheer');
  await say('ar_' + 'intro3_m'.replace('_m', cur()?.gender === 'f' ? '_f' : '_m')); chk();
  store.seenIntro = true; save();
  profiles();
});

// 2. profiles
const profiles = guard(async function () {
  const chk = newRun('profiles');
  const s = getIsland(); useScene(s); setRestored(s, restoredList());
  const st = s.userData.stage;
  const ids = ['bibo', 'lulu', 'toota', 'bondoq'];
  setCamera(new THREE.Vector3(0, st.y + 2.2, st.z + (portrait() ? 13 : 9)), st.clone().add(new THREE.Vector3(0, portrait() ? 2.6 : 1.3, 0)));
  E.camera.fov = portrait() ? 55 : 40; E.camera.updateProjectionMatrix();
  ids.forEach((id, i) => { const pos = st.clone().add(new THREE.Vector3((i - 1.5) * 1.7, 0, i % 2 ? .3 : 0)); show(CH[id], pos, faceCam(pos) * .5); CH[id].lookAt(E.camera.position); });
  const wrap = h('div', { class: 'panel profiles' }, h('h1', {}, 'مين بيلعب اليوم؟'));
  const grid = h('div', { class: 'kid-grid' });
  store.profiles.forEach(p => {
    grid.append(btn('kid', h('div', {}, img('char', p.avatar), h('b', {}, p.name), h('small', { html: `${ICON.star} ${totalStars(p)}` })), () => {
      store.current = p.id; save(); applyOutfits(); CH[p.avatar].play('cheer'); sfx('right'); setTimeout(() => worldMap(), 500);
    }));
  });
  if (store.profiles.length < 6) grid.append(btn('kid add', `<div>${ICON.plus}<b>طفل جديد</b></div>`, () => newKid()));
  wrap.append(grid);
  UI.append(wrap);
  topBar({ back: start, stars: false });
  if (!store.profiles.length) newKid(); else await sayAr('who', { bubble: false });
});

function newKid() {
  const st = { gender: 'm', avatar: 'lulu', age: 5 };
  const name = h('input', { id: 'kid-name', type: 'text', maxlength: '14', placeholder: 'اكتب اسم الطفل', autocomplete: 'off' });
  const g = h('div', { class: 'seg' }, ...[['m', 'ولد'], ['f', 'بنت']].map(([v, l]) => { const b = btn('seg-b' + (v === 'm' ? ' on' : ''), l, () => { st.gender = v; g.querySelectorAll('.seg-b').forEach(x => x.classList.toggle('on', x === b)); }); return b; }));
  const ag = h('div', { class: 'seg' }, ...[4, 5, 6, 7].map(v => { const b = btn('seg-b' + (v === 5 ? ' on' : ''), v === 7 ? '7+' : String(v), () => { st.age = v; ag.querySelectorAll('.seg-b').forEach(x => x.classList.toggle('on', x === b)); }); return b; }));
  const av = h('div', { class: 'avatars' }, ...AVATARS.map(id => { const b = btn('av' + (id === 'lulu' ? ' on' : ''), img('char', id), () => { st.avatar = id; av.querySelectorAll('.av').forEach(x => x.classList.toggle('on', x === b)); CH[id].play('jump'); }, CHAR_INFO[id].ar); return b; }));
  const m = modal(h('div', { class: 'form' },
    h('h2', {}, 'ملف طفل جديد'), h('p', { class: 'hint' }, 'يعبّيه ولي الأمر. البيانات تبقى على هذا الجهاز فقط.'),
    h('label', { for: 'kid-name' }, 'الاسم'), name,
    h('label', {}, 'ولد أو بنت؟ (عشان تخاطبه الشخصيات صح)'), g,
    h('label', {}, 'العمر'), ag,
    h('label', {}, 'اختر صديقك'), av,
    h('div', { class: 'row' }, btn('big orange', 'حفظ', () => {
      const n = name.value.trim(); if (!n) { name.focus(); name.classList.add('err'); return; }
      newProfile(n, st.gender, st.avatar, st.age); close(); applyOutfits(); worldMap();
    }), store.profiles.length ? btn('ghost', 'إلغاء', () => close()) : null)));
  const close = () => m.remove();
}
function modal(content, cls = '') { const m = h('div', { class: 'modal ' + cls }, h('div', { class: 'modal-card' }, content)); UI.append(m); return m; }

// 3. world map
const worldMap = guard(async function () {
  const chk = newRun('map');
  const p = cur(); if (!p) return profiles();
  const s = getMap(); useScene(s);
  const isl = s.userData.islands;
  // camera fit
  const fit = () => {
    const pts = MAP_LAYOUT.flatMap(m => [[3.6, 0], [-3.6, 0], [0, 3.6], [0, -3.6]].map(([dx, dz]) => new THREE.Vector3(m.x + dx, .5, m.z + dz)));
    const c = new THREE.Vector3(.5, 0, -.5);
    const land = !portrait();
    E.camera.fov = 45; E.camera.updateProjectionMatrix();
    for (let hgt = 14; hgt < 90; hgt += 1) {
      const pos = land ? new THREE.Vector3(c.x + hgt * .62, hgt, c.z) : new THREE.Vector3(c.x, hgt, c.z + hgt * .62);
      setCamera(pos, c); E.camera.updateMatrixWorld();
      if (land) E.camera.up.set(0, 1, 0);
      const ok = pts.every(v => { const q = v.clone().project(E.camera); return Math.abs(q.x) < .94 && q.y < .7 && q.y > -.72; });
      if (ok) break;
    }
  };
  fit(); E.onResize = fit;
  // mini lulu on fruit island
  const fi = isl.fruit;
  show(CH.lulu, new THREE.Vector3(fi.position.x + .3, 1.15, fi.position.z + 1.6), 0, .55); CH.lulu.root.rotation.y = faceCam(CH.lulu.root.position);
  CH.lulu.lookAt(E.camera.position);
  // labels
  const labels = h('div', { class: 'map-labels' });
  WORLDS.forEach((w, i) => {
    const lay = MAP_LAYOUT[i];
    const done = w.stages ? w.stages.filter((s2, k) => p.done[w.id + '-' + k]).length : 0;
    const stars = w.stages ? w.stages.reduce((a, s2, k) => a + (p.stars[w.id + '-' + k] || 0), 0) : 0;
    const el = btn('map-label' + (w.open ? '' : ' locked'), '', () => openWorld(w, el), w.ar);
    el.style.setProperty('--c', w.color);
    el.innerHTML = `<b>${w.ar}</b><span dir="ltr">${w.en}</span>` + (w.open ? `<i>${ICON.star} ${stars}/15</i>` : `<i class="lock">${ICON.lock} قريباً</i>`);
    el.dataset.i = i; labels.append(el);
    const g = isl[lay.id];
    pickable(g, () => { sfx('tap'); openWorld(w, el); });
  });
  UI.append(labels);
  E.onFrame = () => {
    labels.querySelectorAll('.map-label').forEach(el => { const lay = MAP_LAYOUT[+el.dataset.i]; const sp = toScreen(new THREE.Vector3(lay.x, 3.2, lay.z)); el.style.transform = `translate(${sp.x}px, ${sp.y}px) translate(-50%, -100%)`; });
  };
  UI.append(navBar('map'));
  topBar({ back: profiles, title: '', stars: true });
  TOP.querySelector('.tb-title').append(h('div', { class: 'kid-chip' }, img('char', p.avatar), h('span', {}, p.name)));
  if (!p.done['fruit-0']) await sayAr('map', { bubble: true });
});
async function openWorld(w, el) {
  if (w.open) return worldDetail(w);
  el.classList.remove('shake'); void el.offsetWidth; el.classList.add('shake');
  sfx('soft'); await say('ar_locked');
}
function navBar(active) {
  const items = [['map', ICON.map, 'الخريطة', worldMap], ['bag', ICON.bag, 'كلماتي', wordBag], ['wardrobe', ICON.shirt, 'الملابس', wardrobe], ['awards', ICON.trophy, 'إنجازاتي', achievements]];
  return h('nav', { class: 'nav' }, ...items.map(([id, ic, l, fn]) => btn('nav-b' + (id === active ? ' on' : ''), `${ic}<span>${l}</span>`, () => fn())));
}

// 4. world details
const worldDetail = guard(async function (w) {
  const chk = newRun('world');
  const p = cur(); const s = getIsland(); useScene(s); applyOutfits();
  setRestored(s, restoredList());
  const st = s.userData.stage;
  const land = !portrait();
  setCamera(land ? st.clone().add(new THREE.Vector3(3.2, 3.6, 10)) : st.clone().add(new THREE.Vector3(0, 4.6, 12.5)), land ? st.clone().add(new THREE.Vector3(3.4, 1.2, 0)) : st.clone().add(new THREE.Vector3(0, -2.4, 0)));
  E.camera.fov = land ? 42 : 55; E.camera.updateProjectionMatrix();
  show(CH.lulu, st.clone(), faceCam(st), 1.3); CH.lulu.lookAt(E.camera.position); CH.lulu.play('wave');
  const panel = h('div', { class: 'panel world' },
    h('div', { class: 'w-head' }, h('h1', {}, w.ar), en(w.en)),
    h('p', { class: 'mission' }, h('span', { html: ICON.flag }), 'المهمة: ' + w.mission));
  const list = h('div', { class: 'stages' });
  w.stages.forEach((sg, i) => {
    const unlocked = i === 0 || p.done[w.id + '-' + (i - 1)];
    const stars = p.stars[w.id + '-' + i] || 0;
    const b = btn('stage' + (unlocked ? '' : ' locked') + (p.done[w.id + '-' + i] ? ' done' : ''), '', () => {
      if (!unlocked) { sfx('soft'); b.classList.remove('shake'); void b.offsetWidth; b.classList.add('shake'); return; }
      runStage(w, i);
    }, sg.ar);
    b.append(h('div', { class: 'st-num' }, String(i + 1)), img('char', sg.host, 'st-host'),
      h('div', { class: 'st-txt' }, h('b', {}, sg.ar), en(sg.en)),
      h('div', { class: 'st-stars', html: unlocked ? [0, 1, 2].map(k => `<span class="${k < stars ? 'on' : ''}">${ICON.star}</span>`).join('') : ICON.lock }));
    list.append(b);
  });
  panel.append(list);
  const words = h('div', { class: 'word-chips' });
  w.words.forEach(wd => words.append(btn('wchip', h('div', {}, img('fruit', wd.id), en(wd.en)), () => { say('w_' + wd.id); }, wd.en)));
  panel.append(h('h3', {}, 'كلمات الجزيرة'), words);
  UI.append(panel);
  topBar({ back: worldMap, title: '' });
  if (!p.done[w.id + '-0']) { await wait(.4); chk(); await say('ar_w1'); }
});

// ================= stage framework =================
function stageCamera(st) {
  const land = !portrait();
  E.camera.fov = land ? 40 : 56; E.camera.updateProjectionMatrix();
  setCamera(new THREE.Vector3(0, st.y + 2.5, st.z + 8.5), new THREE.Vector3(0, st.y + 1.55, st.z));
  E.camera.updateMatrixWorld();
}
function hostSpot(st) {
  const land = !portrait();
  const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), -st.y);
  return ndcTo(land ? -.68 : -.62, land ? -.72 : -.82, plane);
}
// positions for n choices in a plane in front of the stage
function choiceSpots(st, n, { y0 = 0, rows } = {}) {
  const land = !portrait();
  const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), -(st.z + 1.2));
  const out = [];
  if (land) {
    const x0 = n <= 3 ? -.15 : -.3, x1 = .78;
    for (let i = 0; i < n; i++) out.push(ndcTo(n === 1 ? .3 : x0 + (x1 - x0) * i / (n - 1), .02 + y0 + (n > 3 ? (i % 2 ? -.12 : .1) : 0), plane));
  } else {
    const cols = n <= 2 ? n : 2, r = Math.ceil(n / cols);
    for (let i = 0; i < n; i++) { const c = i % cols, rr = Math.floor(i / cols); const lastRowCount = (rr === r - 1) ? n - cols * (r - 1) : cols; const off = lastRowCount === 1 ? .5 : 0; out.push(ndcTo(cols === 1 ? .1 : -.42 + (c + off) * .84, .26 - rr * (r > 2 ? .27 : .34) + y0, plane)); }
  }
  return out;
}
function choiceScale() { return portrait() ? .72 : .85; }

function stageTop(w, i, total, opts = {}) {
  topBar({ back: () => worldDetail(w), title: '', replay: opts.replay });
  const dots = h('div', { class: 'dots' }); for (let k = 0; k < total; k++) dots.append(h('i'));
  TOP.querySelector('.tb-title').append(dots);
  return (k) => dots.querySelectorAll('i').forEach((d, j) => d.classList.toggle('on', j < k));
}
function pickWords(w, n, avoid) {
  // weight weaker words higher (spaced review)
  const p = cur(); const pool = w.words.map(x => x.id);
  const weight = id => { const s = word(p, id); return 1 + s.w * 1.5 + (s.c < 2 ? 1 : 0) - Math.min(s.c, 4) * .15; };
  const out = [];
  while (out.length < n) {
    let tot = 0; const cand = pool.filter(x => x !== avoid && x !== out[out.length - 1]); cand.forEach(x => tot += weight(x));
    let r = Math.random() * tot; for (const x of cand) { r -= weight(x); if (r <= 0) { out.push(x); break; } }
    if (r > 0) out.push(cand[0]);
  }
  return out;
}
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const praise = { lulu: ['lulu_great', 'lulu_well', 'lulu_amazing', 'lulu_did'], bibo: ['bibo_great', 'bibo_super', 'bibo_yes'], toota: ['toota_yay'], bondoq: ['bondoq_match', 'bondoq_great'] };
const randOf = a => a[Math.floor(Math.random() * a.length)];
function wordBanner(wd, sub) {
  const old = $('.word-banner'); if (old) old.remove();
  const b = h('div', { class: 'word-banner' }, h('div', { class: 'wb-en', dir: 'ltr' }, h('span', { class: 'first' }, wd.en[0]), wd.en.slice(1)), store.settings.arabic && sub !== false ? h('div', { class: 'wb-ar' }, wd.ar) : null);
  UI.append(b); return b;
}
function clearBanner() { const b = $('.word-banner'); if (b) { b.classList.add('out'); setTimeout(() => b.remove(), 300); } }
function starsFor(err) { return err <= 1 ? 3 : err <= 4 ? 2 : 1; }

const runStage = guard(async function (w, i) {
  const chk = newRun('stage');
  const sg = w.stages[i]; const p = cur(); p.sessions++;
  const s = getIsland(); useScene(s); applyOutfits(); setRestored(s, restoredList());
  const st = s.userData.stage;
  stageCamera(st);
  const host = CH[sg.host];
  const hp = hostSpot(st);
  show(host, hp, faceCam(hp) * .7, portrait() ? .58 : 1); host.lookAt(E.camera.position);
  const ctx = { w, i, sg, st, host, chk, err: 0, p, prompt: null };
  ctx.replay = () => { if (ctx.prompt) say(ctx.prompt); };
  const runner = { meet: stageMeet, listen: stageListen, collect: stageCollect, match: stageMatch, speak: stageSpeak }[sg.type];
  await runner(ctx);
  chk();
  await finishStage(ctx);
});

// ---- stage 1: meet the fruits ----
async function stageMeet(ctx) {
  const { w, st, host, chk, p } = ctx;
  const setDots = stageTop(w, ctx.i, 10, { replay: ctx.replay });
  host.play('wave'); await say('lulu_hello'); chk();
  await sayAr('s1'); chk();
  const center = choiceSpots(st, 1)[0];
  let k = 0;
  for (const wd of w.words) {
    const c = makeChoice(wd.id, 1.25); c.position.copy(center); c.userData.baseY = center.y; c.scale.setScalar(.01); addObj(c);
    sfx('whoosh'); await tween(c.scale, { x: 1.25, y: 1.25, z: 1.25 }, .6, ease.back); chk();
    wordBanner(wd);
    ctx.prompt = 'w_' + wd.id;
    host.play('point');
    await say('lulu_this'); chk(); await say('w_' + wd.id); chk();
    if (store.settings.arabic) { await say('ar_m_' + wd.id); chk(); }
    word(p, wd.id).heard++;
    // child taps the fruit to hear it again
    await glow(c); const hand = tapHint(c);
    await waitTap([c]); chk(); hand.remove();
    await glow(c, false);
    sfx('right'); starPop(c.position.clone().add(new THREE.Vector3(0, .8, 0)));
    tween(c.rotation, { y: c.rotation.y + Math.PI * 2 }, .8, ease.out);
    await say('w_' + wd.id, { rate: .95 }); chk();
    host.play('cheer');
    k++; setDots(k);
    await tween(c.scale, { x: .01, y: .01, z: .01 }, .35, ease.in); removeChoice(c); clearBanner();
  }
  // quick quiz
  await say('ar_s1_quiz'); chk();
  const targets = pickWords(w, 5);
  for (const t of targets) {
    const other = shuffle(w.words.map(x => x.id).filter(x => x !== t))[0];
    await choiceRound(ctx, shuffle([t, other]), t, 'lulu_tap_' + t);
    k++; setDots(k);
  }
}

function tapHint(obj) {
  const hnd = h('div', { class: 'hand', html: ICON.hand }); UI.append(hnd);
  const upd = () => { if (!hnd.isConnected) return; const sp = toScreen(obj.getWorldPosition(new THREE.Vector3())); hnd.style.transform = `translate(${sp.x}px, ${sp.y}px)`; requestAnimationFrame(upd); };
  upd(); return hnd;
}

// generic: show options, ask for target, retry gently until correct
async function choiceRound(ctx, opts, target, promptKey, { showWord = false } = {}) {
  const { st, host, chk, p } = ctx;
  const spots = choiceSpots(st, opts.length);
  const objs = opts.map((id, j) => { const c = makeChoice(id, choiceScale()); c.position.copy(spots[j]); c.userData.baseY = spots[j].y; c.scale.setScalar(.01); addObj(c); tween(c.scale, { x: choiceScale(), y: choiceScale(), z: choiceScale() }, .5, ease.back); return c; });
  await wait(.35); chk();
  ctx.prompt = promptKey; await say(promptKey); chk();
  let tries = 0;
  while (true) {
    const tapped = await waitTap(objs); chk();
    if (tapped.userData.fruit === target) {
      word(p, target).c++; if (ctx.sg.type === 'listen' || ctx.sg.type === 'meet') p.listen.c++;
      sfx('right'); objs.forEach(o => { if (o !== tapped) tween(o.scale, { x: .01, y: .01, z: .01 }, .3, ease.in); });
      await popBubble(tapped); chk();
      starPop(tapped.position.clone().add(new THREE.Vector3(0, .6, 0)));
      host.play('cheer');
      const wd = ctx.w.words.find(x => x.id === target); const b = wordBanner(wd, true);
      await say('w_' + target); chk();
      await say(randOf(praise[host.id])); chk();
      // fruit flies to host
      const hp = host.root.position.clone().add(new THREE.Vector3(0, 1.4, 0));
      await tween(tapped.position, { x: hp.x, y: hp.y, z: hp.z }, .5, ease.inOut);
      clearBanner();
      objs.forEach(removeChoice); save(); return tries;
    }
    tries++; ctx.err++; word(p, target).w++; if (ctx.sg.type === 'listen' || ctx.sg.type === 'meet') p.listen.w++;
    sfx('soft'); wobble(tapped); host.play('think');
    // say what they tapped (teaches), then encourage and repeat prompt
    await say('w_' + tapped.userData.fruit); chk();
    if (tries === 1) { await say('ar_oops_' + host.id); chk(); }
    if (tries >= 2) { const right = objs.find(o => o.userData.fruit === target); glow(right); host.play('point'); await say('ar_help'); chk(); }
    await say(promptKey); chk();
  }
}

// ---- stage 2: listen & choose ----
async function stageListen(ctx) {
  const { w, host, chk } = ctx;
  const setDots = stageTop(w, ctx.i, 8, { replay: ctx.replay });
  host.play('wave'); await say('bibo_hi'); chk(); await sayAr('s2'); chk();
  const targets = pickWords(w, 8);
  for (let r = 0; r < 8; r++) {
    const t = targets[r], n = r < 4 ? 3 : 4;
    const opts = shuffle([t, ...shuffle(w.words.map(x => x.id).filter(x => x !== t)).slice(0, n - 1)]);
    await choiceRound(ctx, opts, t, 'bibo_find_' + t);
    setDots(r + 1);
  }
}

// ---- stage 3: collect & count ----
async function stageCollect(ctx) {
  const { w, st, host, chk, p } = ctx;
  const setDots = stageTop(w, ctx.i, 4, { replay: ctx.replay });
  host.play('jump'); await say('toota_hi'); chk(); await sayAr('s3'); chk();
  const land = !portrait();
  const ground = new THREE.Plane(new THREE.Vector3(0, 1, 0), -st.y);
  const bpos = ndcTo(land ? -.42 : -.05, land ? -.78 : -.82, ground);
  const basket = P.makeBasket(.8); basket.position.copy(bpos); addObj(basket);
  const counter = h('div', { class: 'counter' }); UI.append(counter);
  const tasks = [1, 2, 2, 3];
  const ids = pickWords(w, 4);
  const nums = ['toota_one', 'toota_two', 'toota_three'];
  for (let r = 0; r < tasks.length; r++) {
    const need = tasks[r], target = ids[r];
    // scatter fruits on the ground: `need`+1 of target + others
    const others = shuffle(w.words.map(x => x.id).filter(x => x !== target));
    const list = shuffle([...Array(need + 1).fill(target), ...others.slice(0, land ? 4 : 3), others[0]]);
    const cols = land ? 4 : 3, rows = Math.ceil(list.length / cols);
    const objs = list.map((id, j) => {
      const c = j % cols, rr = Math.floor(j / cols);
      const nx = land ? -.05 + c * .27 + (rr % 2) * .1 : -.62 + c * .6 + (rr % 2) * .14, ny = land ? -.08 - rr * .22 : -.1 - rr * .17;
      const pos = ndcTo(nx, ny, ground);
      const g = new THREE.Group(); g.userData.fruit = id;
      const f = P.makeFruit(id); f.scale.setScalar(land ? .75 : .7); f.position.y = .4; g.add(f);
      const hit = new THREE.Mesh(new THREE.SphereGeometry(.55, 8, 6), new THREE.MeshBasicMaterial({ visible: false })); hit.position.y = .4; g.add(hit);
      g.position.copy(pos); g.rotation.y = Math.random() * 6; g.scale.setScalar(.01); addObj(g);
      tween(g.scale, { x: 1, y: 1, z: 1 }, .4 + j * .04, ease.back);
      return g;
    });
    await wait(.4); chk();
    ctx.prompt = `toota_c${need}_${target}`;
    counter.innerHTML = `<img src="${thumb('fruit', target)}" alt=""><b>0 / ${need}</b>`;
    await say(ctx.prompt); chk();
    let got = 0, wrong = 0;
    const left = objs.slice();
    while (got < need) {
      const tapped = await waitTap(left); chk();
      if (tapped.userData.fruit === target) {
        left.splice(left.indexOf(tapped), 1); tapped.userData.onTap = null;
        got++; word(p, target).c += got === need ? 1 : 0;
        sfx('count');
        const to = basket.position.clone().add(new THREE.Vector3(0, .55, 0));
        const from = tapped.position.clone(), o = { k: 0 };
        tween(o, { k: 1 }, .55, ease.inOut, () => { tapped.position.lerpVectors(from, to, o.k); tapped.position.y += Math.sin(o.k * Math.PI) * 1.6; tapped.scale.setScalar(1 - o.k * .45); }).then(() => { burst(to, 0xffd84d, 6); });
        counter.innerHTML = `<img src="${thumb('fruit', target)}" alt=""><b>${got} / ${need}</b>`;
        counter.classList.remove('bump'); void counter.offsetWidth; counter.classList.add('bump');
        await say(nums[got - 1]); chk();
      } else {
        wrong++; ctx.err++; word(p, target).w++;
        sfx('soft'); wobble(tapped); host.play('think');
        await say('w_' + tapped.userData.fruit); chk();
        if (wrong === 2) { left.filter(o => o.userData.fruit === target).forEach(o => tween(o.position, { y: o.position.y + .5 }, .3, ease.out).then(() => tween(o.position, { y: st.y }, .3, ease.bounce))); await say('ar_help'); chk(); }
        await say(ctx.prompt); chk();
      }
    }
    host.play('cheer'); sfx('right'); starPop(basket.position.clone().add(new THREE.Vector3(0, 1.2, 0)));
    await say('toota_yay'); chk();
    objs.forEach(o => E.scene.remove(o));
    setDots(r + 1);
  }
  counter.remove(); E.scene.remove(basket);
}

// ---- stage 4: match word with picture ----
async function stageMatch(ctx) {
  const { w, st, host, chk, p } = ctx;
  const setDots = stageTop(w, ctx.i, 2, { replay: ctx.replay });
  host.play('wave'); await say('bondoq_hi'); chk(); await sayAr('s4'); chk();
  const rounds = [3, 5];
  for (let r = 0; r < rounds.length; r++) {
    const ids = shuffle(w.words.map(x => x.id)).slice(0, rounds[r]);
    const spots = choiceSpots(st, ids.length, { y0: portrait() ? .05 : .12 });
    const objs = ids.map((id, j) => { const c = makeChoice(id, choiceScale() * .92); c.position.copy(spots[j]); c.userData.baseY = spots[j].y; addObj(c); return c; });
    const cards = h('div', { class: 'cards' });
    let selected = null, selFruit = null, matched = 0;
    const done = new Promise(resolve => {
      const tryMatch = async () => {
        if (!selected || !selFruit) return;
        const id = selected.dataset.id, f = selFruit; const card = selected; selected = null; selFruit = null;
        cards.querySelectorAll('.card').forEach(c => c.classList.remove('sel')); objs.forEach(o => glow(o, false));
        if (f.userData.fruit === id) {
          matched++; word(p, id).c++;
          sfx('right'); card.classList.add('matched'); card.disabled = true;
          const sp = toScreen(f.position); const cr = card.getBoundingClientRect();
          card.style.transform = `translate(${sp.x - cr.left - cr.width / 2}px, ${sp.y - cr.top - cr.height / 2 - 60}px) scale(.8)`;
          f.userData.onTap = null; popBubble(f); starPop(f.position.clone().add(new THREE.Vector3(0, .7, 0)));
          host.play('clap');
          await say('w_' + id);
          if (matched === ids.length) resolve(); else say(randOf(praise.bondoq));
        } else {
          ctx.err++; word(p, id).w++; sfx('soft'); wobble(f); card.classList.add('nope'); setTimeout(() => card.classList.remove('nope'), 500);
          host.play('think'); await say('bondoq_hmm');
        }
      };
      shuffle(ids).forEach(id => {
        const wd = w.words.find(x => x.id === id);
        const c = btn('card', `<span dir="ltr"><u>${wd.en[0]}</u>${wd.en.slice(1)}</span>`, () => {
          cards.querySelectorAll('.card').forEach(x => x.classList.toggle('sel', x === c)); selected = c; say('w_' + id, { bubble: false }); tryMatch();
        }, wd.en);
        c.dataset.id = id; cards.append(c);
      });
      objs.forEach(o => pickable(o, () => { if (!o.userData.onTap) return; selFruit = o; objs.forEach(x => glow(x, x === o)); sfx('tap'); if (!selected) { say('w_' + o.userData.fruit, { bubble: false }); } tryMatch(); }));
    });
    UI.append(cards);
    ctx.prompt = 'ar_' + gk('s4');
    await done; chk();
    await say('bondoq_solved'); chk(); host.play('cheer');
    cards.remove(); objs.forEach(removeChoice); setDots(r + 1);
  }
}

// ---- stage 5: listen & speak ----
let dict = null;
(async () => { try { dict = await window.claude?.use?.('dictation'); } catch (e) { dict = null; } })();
const lev = (a, b) => { const d = Array.from({ length: a.length + 1 }, (_, i) => [i, ...Array(b.length).fill(0)]); for (let j = 1; j <= b.length; j++) d[0][j] = j; for (let i = 1; i <= a.length; i++) for (let j = 1; j <= b.length; j++) d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)); return d[a.length][b.length]; };
function heardOk(text, target) {
  const t = target.toLowerCase(), toks = text.toLowerCase().replace(/[^a-z ]/g, ' ').split(/\s+/).filter(Boolean);
  const alt = { grapes: ['grape', 'great', 'grapes'], orange: ['orange', 'oranges'], apple: ['apple', 'apples'], banana: ['banana', 'bananas'], strawberry: ['strawberry', 'strawberries'] }[t] || [t];
  return toks.some(x => alt.includes(x) || lev(x, t) <= Math.max(1, Math.floor(t.length / 4)));
}
function listenOnce() {
  return new Promise(res => {
    let text = '', done = false;
    const fin = () => { if (done) return; done = true; res(text.trim()); };
    try {
      dict.onFinal(({ text: tx }) => { text += ' ' + tx; });
      dict.onPartial(({ text: tx }) => { if (!text) partial = tx; });
      dict.onState(({ state }) => { if (state === 'idle') setTimeout(fin, 200); });
      let partial = '';
      dict.start().catch(() => fin());
      setTimeout(() => { try { dict.stop(); } catch (e) {} setTimeout(() => { if (!text && partial) text = partial; fin(); }, 700); }, 3800);
    } catch (e) { fin(); }
  });
}
async function stageSpeak(ctx) {
  const { w, st, host, chk, p } = ctx;
  const setDots = stageTop(w, ctx.i, 5, { replay: ctx.replay });
  const useMic = !!dict && store.settings.mic;
  const lulu = CH.lulu; const lp = ndcTo(portrait() ? .55 : .72, portrait() ? -.78 : -.72, new THREE.Plane(new THREE.Vector3(0, 1, 0), -st.y));
  show(lulu, lp, faceCam(lp) * .7, portrait() ? .68 : 1); lulu.lookAt(E.camera.position);
  host.play('wave'); await say('bibo_hi'); chk();
  await (useMic ? sayAr('s5') : say('ar_' + (cur()?.gender === 'f' ? 's5_nomic_f' : 's5_nomic'))); chk();
  const center = choiceSpots(st, 1, { y0: .12 })[0];
  let r = 0;
  for (const wd of shuffle(w.words)) {
    const c = makeChoice(wd.id, 1.15); c.position.copy(center); c.userData.baseY = center.y; c.scale.setScalar(.01); addObj(c);
    sfx('whoosh'); await tween(c.scale, { x: 1.15, y: 1.15, z: 1.15 }, .5, ease.back); chk();
    wordBanner(wd);
    ctx.prompt = 'w_' + wd.id;
    await say('w_' + wd.id); chk();
    await say('bibo_say'); chk();
    let ok = false;
    for (let attempt = 0; attempt < 3 && !ok; attempt++) {
      const mic = btn('mic pulse', useMic ? `${ICON.mic}<span>اضغط وتكلّم</span>` : `${ICON.check}<span>قلتها!</span>`, null, 'ميكروفون');
      UI.append(mic);
      let heard = '';
      await new Promise(resv => mic.addEventListener('click', async () => {
        p.speak.tries++; word(p, wd.id).said++;
        if (useMic) {
          mic.classList.add('listening'); mic.innerHTML = `${ICON.mic}<span>أسمعك…</span>`; host.setExpr('surprised');
          heard = await listenOnce(); host.setExpr('happy');
        }
        resv();
      }, { once: true }));
      chk(); mic.remove();
      if (!useMic) { ok = true; break; }
      p.speak.rec++;
      if (heard && heardOk(heard, wd.en)) { ok = true; p.speak.ok++; word(p, wd.id).saidOk++; word(p, wd.id).c++; }
      else if (attempt < 2) { host.play('nod'); await say('bibo_nice'); chk(); await say('w_' + wd.id); chk(); }
      else ok = true; // reward the effort after 3 tries
    }
    sfx('right'); popBubble(c); starPop(c.position.clone().add(new THREE.Vector3(0, .5, 0)));
    host.play('cheer'); lulu.play('clap');
    await say(randOf(['bibo_perfect', 'bibo_super', 'bibo_great'])); chk();
    removeChoice(c); clearBanner(); save();
    r++; setDots(r);
  }
}

// ================= finish & rewards =================
async function finishStage(ctx) {
  const { w, i, sg, p } = ctx;
  const key = w.id + '-' + i, first = !p.done[key];
  const stars = starsFor(ctx.err);
  p.stars[key] = Math.max(p.stars[key] || 0, stars); p.done[key] = true;
  // badges
  const award = (id) => { if (!p.badges.includes(id)) { p.badges.push(id); return true; } };
  const newBadges = [];
  if (award('first')) newBadges.push('first');
  if (sg.type === 'listen' && stars === 3 && award('listener')) newBadges.push('listener');
  if (sg.type === 'collect' && award('counter')) newBadges.push('counter');
  if (sg.type === 'match' && award('matcher')) newBadges.push('matcher');
  if (sg.type === 'speak' && award('speaker')) newBadges.push('speaker');
  if (totalStars(p) >= 10 && award('stars10')) newBadges.push('stars10');
  const worldDone = w.stages.every((s2, k) => p.done[w.id + '-' + k]);
  let newCert = false;
  if (worldDone && !p.certs.includes(w.id)) { p.certs.push(w.id); newCert = true; award('fruit'); newBadges.push('fruit'); if (!p.items.includes('crown')) p.items.push('crown'); }
  let gift = null; if (first && sg.reward && !p.items.includes(sg.reward)) { p.items.push(sg.reward); gift = sg.reward; }
  save();
  if (first) await restoreCutscene(sg.restores);
  rewardScreen({ w, i, stars, gift, newBadges, newCert });
}

const restoreCutscene = guard(async function (fruit) {
  const s = E.scene; const t = s.userData.groves[fruit]; if (!t || !t.length) return;
  hideBubble(); UI.innerHTML = '';
  const tg = t[0].position.clone();
  await flyCamera(tg.clone().add(new THREE.Vector3(0, 4, 7)), tg.clone().add(new THREE.Vector3(0, 1.8, 0)), 1.4);
  sfx('star');
  for (const tr of t) for (const f of (tr.userData.fruitSpots || [])) { f.visible = true; const sc = f.scale.x; f.scale.setScalar(.001); tween(f.scale, { x: sc, y: sc, z: sc }, .5, ease.back); }
  t.forEach(tr => burst(tr.position.clone().add(new THREE.Vector3(0, 2.8, 0)), 0xfff27a, 16));
  await wait(.4); await say('w_' + fruit); await wait(.6);
});

const rewardScreen = guard(async function ({ w, i, stars, gift, newBadges, newCert }) {
  const chk = newRun('reward');
  const p = cur(); const s = getIsland(); useScene(s); applyOutfits(); setRestored(s, restoredList());
  const st = s.userData.stage;
  stageCamera(st);
  const lp = hostSpot(st); show(CH.lulu, lp, faceCam(lp) * .7, portrait() ? .85 : 1); CH.lulu.lookAt(E.camera.position);
  CH.lulu.play('cheer'); confetti(); sfx('fanfare');
  topBar({ back: () => worldDetail(w) });
  const starRow = h('div', { class: 'big-stars' }, ...[0, 1, 2].map(k => h('span', { class: k < stars ? 'on' : '', style: `animation-delay:${.3 + k * .35}s`, html: ICON.star })));
  const panel = h('div', { class: 'reward' }, h('h1', {}, 'رائع! خلّصت المرحلة'), starRow);
  UI.append(panel);
  await say('ar_stage_done'); chk();
  if (gift) {
    const box = P.makeGift(); const bp = choiceSpots(st, 1, { y0: -.32 })[0]; box.position.copy(bp); box.position.y -= .5; box.scale.setScalar(.01); addObj(box);
    await tween(box.scale, { x: 1.1, y: 1.1, z: 1.1 }, .6, ease.back); chk();
    const bob = (dt, t) => { box.rotation.y = Math.sin(t * 2) * .2; box.rotation.z = Math.sin(t * 9) * .03; }; floaters.add(bob);
    panel.querySelector('h1').textContent = 'صندوق مفاجآت! اضغط عليه';
    await say('ar_box'); chk();
    const hand = tapHint(box);
    await waitTap([box]); chk(); hand.remove(); floaters.delete(bob);
    sfx('box'); const lid = box.userData.lid;
    tween(lid.position, { y: 2.2, x: .8 }, .6, ease.out); tween(lid.rotation, { z: -1.2 }, .6, ease.out);
    const item = P.makeAccessory(gift); item.position.copy(box.position).add(new THREE.Vector3(0, .6, 0)); item.scale.setScalar(.01); addObj(item);
    burst(item.position.clone(), 0xffd84d, 24);
    await tween(item.position, { y: box.position.y + 1.6 }, .7, ease.back);
    tween(item.scale, { x: 1.6, y: 1.6, z: 1.6 }, .6, ease.back);
    floaters.add((dt, t) => { item.rotation.y = t * 1.5; });
    panel.querySelector('h1').textContent = 'هدية جديدة: ' + P.ACCESSORIES[gift].ar;
    await say('ar_box_open'); chk();
  }
  if (newBadges.length) panel.append(h('div', { class: 'badges-new' }, ...newBadges.map(b => h('div', { class: 'badge on' }, h('span', { html: ICON.medal }), h('b', {}, BADGES.find(x => x.id === b).ar)))));
  const row = h('div', { class: 'row' });
  if (newCert) row.append(btn('big orange', `${ICON.trophy}<span>شهادتي!</span>`, () => certificate(w.id, true)));
  else if (i + 1 < w.stages.length) row.append(btn('big orange', `${ICON.play}<span>المرحلة التالية</span>`, () => runStage(w, i + 1)));
  if (gift) row.append(btn('big teal', `${ICON.shirt}<span>البس لولو</span>`, () => wardrobe(gift)));
  row.append(btn('big ghost', `${ICON.map}<span>الجزيرة</span>`, () => worldDetail(w)));
  row.classList.add('reward-row'); UI.append(row);
  if (newCert) { await wait(.5); chk(); await say('ar_world_done'); }
});

// ================= certificate =================
const certificate = guard(async function (wid, celebrate) {
  const chk = newRun('cert');
  const p = cur(); const w = WORLDS.find(x => x.id === wid);
  const s = getIsland(); useScene(s); applyOutfits(); setRestored(s, restoredList());
  const st = s.userData.stage;
  setCamera(new THREE.Vector3(0, st.y + 2.6, st.z + (portrait() ? 13 : 10)), st.clone().add(new THREE.Vector3(0, 1.4, 0)));
  E.camera.fov = portrait() ? 55 : 40; E.camera.updateProjectionMatrix();
  ['bibo', 'lulu', 'toota', 'bondoq'].forEach((id, k) => { const pos = st.clone().add(new THREE.Vector3((k - 1.5) * 1.8, 0, -1)); show(CH[id], pos, faceCam(pos) * .5); CH[id].lookAt(E.camera.position); if (celebrate) setTimeout(() => CH[id].play('cheer'), k * 200); });
  if (celebrate) { confetti(200); sfx('fanfare'); }
  const stars = w.stages.reduce((a, s2, k) => a + (p.stars[w.id + '-' + k] || 0), 0);
  const d = new Date();
  UI.append(h('div', { class: 'cert-wrap' }, h('div', { class: 'cert' },
    h('div', { class: 'cert-top' }, logo(true)),
    h('h2', {}, 'شهادة إنجاز'), en('Certificate of Achievement'),
    h('p', {}, 'تُمنح هذه الشهادة للبطل'), h('div', { class: 'cert-name' }, p.name),
    h('p', {}, `لأنه رجّع كل الفواكه إلى ${w.ar} وتعلّم ${w.words.length} كلمات إنجليزية جديدة`.replace('لأنه', p.gender === 'f' ? 'لأنها' : 'لأنه').replace('رجّع', p.gender === 'f' ? 'رجّعت' : 'رجّع').replace('وتعلّم', p.gender === 'f' ? 'وتعلّمت' : 'وتعلّم').replace('للبطل', p.gender === 'f' ? 'للبطلة' : 'للبطل')),
    h('div', { class: 'cert-words', dir: 'ltr' }, ...w.words.map(x => h('span', {}, img('fruit', x.id), x.en))),
    h('div', { class: 'cert-foot' }, h('div', {}, h('b', { html: `${ICON.star} ${stars} / 15` }), h('small', {}, 'نجوم')), img('char', 'lulu', 'cert-lulu'), h('div', {}, h('b', {}, d.toLocaleDateString('ar-SA-u-nu-latn', { year: 'numeric', month: 'long', day: 'numeric' })), h('small', {}, 'التاريخ'))),
  )));
  topBar({ back: achievements });
  UI.append(h('div', { class: 'row bottom' }, btn('big orange', `${ICON.map}<span>الخريطة</span>`, () => worldMap())));
  if (celebrate) { await wait(.3); chk(); }
});

// ================= wardrobe =================
const wardrobe = guard(async function (focusItem) {
  const chk = newRun('wardrobe');
  const p = cur(); if (!p) return profiles();
  const s = getIsland(); useScene(s); applyOutfits(); setRestored(s, restoredList());
  const st = s.userData.stage;
  let sel = 'lulu';
  const land = !portrait();
  const focus = (id, fly = true) => {
    sel = id; const c = CH[id]; const pos = c.root.position;
    const camPos = pos.clone().add(new THREE.Vector3(land ? 1.3 : 0, land ? 1.7 : 1.4, land ? 4.6 : 9.4)), look = pos.clone().add(new THREE.Vector3(land ? 1.2 : 0, land ? 1.25 : -1.7, 0));
    E.camera.fov = land ? 40 : 52; E.camera.updateProjectionMatrix();
    if (fly) flyCamera(camPos, look, .8); else setCamera(camPos, look);
    c.play('spin');
    tabs.querySelectorAll('.tab').forEach(t => t.classList.toggle('on', t.dataset.id === id));
    renderItems();
  };
  ['bibo', 'lulu', 'toota', 'bondoq'].forEach((id, k) => { const pos = st.clone().add(new THREE.Vector3((k - 1.5) * 2.4, 0, 0)); show(CH[id], pos, 0); CH[id].lookAt(E.camera.position); pickable(CH[id].root, () => focus(id)); });
  const tabs = h('div', { class: 'tabs' }, ...['lulu', 'bibo', 'toota', 'bondoq'].map(id => { const b = btn('tab', h('div', {}, img('char', id), h('span', {}, CHAR_INFO[id].ar)), () => focus(id)); b.dataset.id = id; return b; }));
  const items = h('div', { class: 'items' });
  const renderItems = () => {
    items.innerHTML = '';
    Object.keys(P.ACCESSORIES).forEach(id => {
      const a = P.ACCESSORIES[id], owned = p.items.includes(id), on = p.equipped[sel]?.[a.slot] === id;
      const b = btn('item' + (owned ? '' : ' locked') + (on ? ' on' : '') + (focusItem === id ? ' new' : ''), '', () => {
        if (!owned) { sfx('soft'); b.classList.remove('shake'); void b.offsetWidth; b.classList.add('shake'); return; }
        p.equipped[sel] ||= {}; p.equipped[sel][a.slot] = on ? null : id; save(); applyOutfits(); CH[sel].play(on ? 'nod' : 'cheer'); if (!on) sfx('star'); renderItems();
      }, a.ar);
      b.append(owned ? img('acc', id) : h('div', { class: 'q', html: ICON.gift }), h('span', {}, owned ? a.ar : 'اربحها'));
      items.append(b);
    });
  };
  UI.append(h('div', { class: 'panel wardrobe' }, h('h1', {}, 'الشخصيات والملابس'), tabs, h('p', { class: 'hint' }, 'اضغط على قطعة عشان تلبسها، واضغط مرة ثانية عشان تشيلها.'), items));
  topBar({ back: worldMap });
  UI.append(navBar('wardrobe'));
  focus('lulu', false);
  await sayAr('wardrobe');
});

// ================= word bag =================
const wordBag = guard(async function () {
  const chk = newRun('bag');
  const p = cur(); if (!p) return profiles();
  const s = getIsland(); useScene(s); applyOutfits(); setRestored(s, restoredList());
  const st = s.userData.stage;
  setCamera(new THREE.Vector3(3, st.y + 3, st.z + 6), new THREE.Vector3(0, st.y + 1.6, 0));
  const lp = st.clone().add(new THREE.Vector3(1.6, 0, -1.5)); show(CH.lulu, lp, faceCam(lp)); CH.lulu.lookAt(E.camera.position);
  const panel = h('div', { class: 'panel bag' }, h('h1', {}, 'حقيبة كلماتي'));
  WORLDS.forEach(w => {
    const sec = h('section', {}, h('h3', { style: `--c:${w.color}` }, w.ar, ' ', en(w.en)));
    const grid = h('div', { class: 'bag-grid' });
    if (w.open) w.words.forEach(wd => {
      const stt = wordStatus(p.words[wd.id]);
      const b = btn('bag-w ' + stt, h('div', {}, img('fruit', wd.id), h('b', { dir: 'ltr' }, wd.en), h('small', {}, wd.ar), h('i', { class: 'st', html: stt === 'learned' ? ICON.check : '' })), async () => { CH.lulu.play('nod'); await say('w_' + wd.id); if (store.settings.arabic) say('ar_m_' + wd.id); }, wd.en);
      grid.append(b);
    });
    else grid.append(...w.words.map(x => h('div', { class: 'bag-w soon' }, h('div', {}, h('span', { class: 'q', html: ICON.lock }), h('b', { dir: 'ltr' }, x), h('small', {}, 'قريباً')))));
    sec.append(grid); panel.append(sec);
  });
  UI.append(panel);
  topBar({ back: worldMap });
  UI.append(navBar('bag'));
  await sayAr('bag');
});

// ================= achievements =================
const achievements = guard(async function () {
  const chk = newRun('awards');
  const p = cur(); if (!p) return profiles();
  const s = getIsland(); useScene(s); applyOutfits(); setRestored(s, restoredList());
  const st = s.userData.stage;
  setCamera(new THREE.Vector3(-3, st.y + 3, st.z + 6), new THREE.Vector3(0, st.y + 1.6, 0));
  const lp = st.clone().add(new THREE.Vector3(-1.6, 0, -1.5)); show(CH.bondoq, lp, faceCam(lp)); CH.bondoq.lookAt(E.camera.position); CH.bondoq.play('wave');
  const panel = h('div', { class: 'panel awards' }, h('h1', {}, 'إنجازاتي'));
  panel.append(h('h3', {}, 'الشهادات'));
  const certs = h('div', { class: 'cert-list' });
  WORLDS.forEach(w => {
    const has = p.certs.includes(w.id);
    certs.append(btn('cert-mini' + (has ? ' on' : ''), `${ICON.trophy}<b>${w.ar}</b><small>${has ? 'افتح الشهادة' : 'لم تكتمل بعد'}</small>`, () => { if (has) certificate(w.id); else sfx('soft'); }));
  });
  panel.append(certs, h('h3', {}, 'الأوسمة'));
  panel.append(h('div', { class: 'badge-grid' }, ...BADGES.map(b => h('div', { class: 'badge' + (p.badges.includes(b.id) ? ' on' : '') }, h('span', { html: ICON.medal }), h('b', {}, b.ar), h('small', {}, b.desc)))));
  UI.append(panel);
  topBar({ back: worldMap });
  UI.append(navBar('awards'));
});

// ================= parent area =================
function parentGate() {
  const a = 2 + Math.floor(Math.random() * 7), b = 3 + Math.floor(Math.random() * 6), ans = a * b;
  const opts = shuffle([ans, ans + a, ans - b, ans + 2]);
  const m = modal(h('div', { class: 'gate' }, h('h2', {}, 'منطقة ولي الأمر'), h('p', {}, 'للكبار فقط: كم حاصل'), h('div', { class: 'q', dir: 'ltr' }, `${a} × ${b}`),
    h('div', { class: 'gate-opts' }, ...opts.map(o => btn('gate-o', String(o), () => { if (o === ans) { m.remove(); parentDash(); } else { m.querySelector('.q').classList.add('shake'); setTimeout(() => m.remove(), 500); } }))),
    btn('ghost', 'رجوع', () => m.remove())), 'gate-m');
}
const parentDash = guard(async function (kidId) {
  const chk = newRun('parent');
  const s = getIsland(); useScene(s);
  setCamera(new THREE.Vector3(0, 30, 40), new THREE.Vector3(0, 0, 0));
  const P0 = store.profiles; let p = P0.find(x => x.id === kidId) || cur() || P0[0];
  const root = h('div', { class: 'parent' });
  const head = h('header', {}, h('div', {}, h('h1', {}, 'لوحة ولي الأمر'), h('p', {}, 'كل البيانات محفوظة على هذا الجهاز فقط. لا إعلانات ولا مشتريات ولا محادثات.')), btn('ghost', 'رجوع للعبة', () => (cur() ? worldMap() : start())));
  root.append(head);
  if (!p) { root.append(h('section', { class: 'card' }, h('p', {}, 'ما فيه ملفات أطفال بعد. أضف طفل من شاشة «مين بيلعب اليوم؟».'))); }
  else {
    root.append(h('div', { class: 'kid-tabs' }, ...P0.map(k => btn('kt' + (k.id === p.id ? ' on' : ''), h('span', {}, img('char', k.avatar), k.name), () => parentDash(k.id)))));
    const W = WORLDS[0];
    const learned = W.words.filter(x => wordStatus(p.words[x.id]) === 'learned');
    const review = W.words.filter(x => wordStatus(p.words[x.id]) === 'review');
    const lis = p.listen.c + p.listen.w ? Math.round(100 * p.listen.c / (p.listen.c + p.listen.w)) : null;
    const spk = p.speak.rec ? Math.round(100 * p.speak.ok / p.speak.rec) : null;
    const stagesDone = W.stages.filter((s2, k) => p.done['fruit-' + k]).length;
    const todayMin = Math.round((p.time[today()] || 0) / 60);
    const days = [...Array(7)].map((_, k) => { const d = new Date(); d.setDate(d.getDate() - (6 - k)); const key = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); return { d, min: Math.round((p.time[key] || 0) / 60) }; });
    const weekMin = days.reduce((a, x) => a + x.min, 0), maxMin = Math.max(10, ...days.map(x => x.min));
    const level = (v) => v == null ? '<span class="muted">لا توجد بيانات بعد</span>' : `<div class="meter"><i style="width:${v}%"></i></div><b>${v}%</b>`;
    const kpis = h('div', { class: 'kpis' },
      kpi('الكلمات المتعلَّمة', `${learned.length} / ${W.words.length}`), kpi('المراحل المكتملة', `${stagesDone} / ${W.stages.length}`),
      kpi('وقت اللعب اليوم', `${todayMin} دقيقة`), kpi('النجوم', String(totalStars(p))));
    root.append(kpis);
    const g2 = h('div', { class: 'grid2' });
    g2.append(h('section', { class: 'card' }, h('h3', {}, 'الكلمات'),
      h('ul', { class: 'wlist' }, ...W.words.map(x => { const st2 = wordStatus(p.words[x.id]); const s3 = p.words[x.id] || {}; return h('li', {}, img('fruit', x.id), h('b', { dir: 'ltr' }, x.en), h('span', { class: 'tag ' + st2 }, { learned: 'تعلّمها', review: 'يحتاج مراجعة', learning: 'يتعلّمها', new: 'لم تبدأ' }[st2]), h('small', {}, `صح ${s3.c || 0} · محاولات ${s3.w || 0}`)); })),
      review.length ? h('p', { class: 'note' }, 'ننصح بمراجعة: ', h('b', { dir: 'ltr' }, review.map(x => x.en).join('، ')), '. اللعبة تكرر هذه الكلمات أكثر تلقائياً.') : null));
    g2.append(h('section', { class: 'card' }, h('h3', {}, 'مستوى الاستماع والنطق'),
      h('div', { class: 'lvl' }, h('span', {}, 'الاستماع (اختيار الصورة الصحيحة)'), h('div', { html: level(lis) })),
      h('div', { class: 'lvl' }, h('span', {}, 'النطق (تعرّف صوتي)'), h('div', { html: level(spk) })),
      h('p', { class: 'muted' }, `محاولات النطق: ${p.speak.tries}. ${dict ? '' : 'التعرّف على الصوت غير متاح على هذا الجهاز، فاللعبة تكافئ المحاولة فقط.'}`),
      h('h3', {}, 'تقرير الأسبوع'),
      h('div', { class: 'bars' }, ...days.map(x => h('div', { class: 'bar' }, h('i', { style: `height:${Math.round(100 * x.min / maxMin)}%` }), h('b', {}, String(x.min)), h('small', {}, x.d.toLocaleDateString('ar', { weekday: 'short' }))))),
      h('p', { class: 'muted' }, `مجموع الأسبوع: ${weekMin} دقيقة. ${weeklyText(p, learned.length, stagesDone)}`)));
    root.append(g2);
    root.append(h('section', { class: 'card danger' }, h('h3', {}, 'ملف الطفل'), h('div', { class: 'row' },
      btn('ghost', 'تصفير التقدّم', () => confirmBox(`تصفير كل تقدّم ${p.name}؟`, () => { resetProfile(p); parentDash(p.id); })),
      btn('ghost', 'حذف الملف', () => confirmBox(`حذف ملف ${p.name} نهائياً؟`, () => { deleteProfile(p.id); parentDash(); })))));
  }
  // settings
  const S = store.settings;
  const tog = (key, label, sub) => { const b = btn('toggle' + (S[key] ? ' on' : ''), `<i></i><span>${label}<small>${sub}</small></span>`, () => { S[key] = !S[key]; save(); b.classList.toggle('on', S[key]); }); return b; };
  const range = (key, label, fn) => { const r = h('input', { type: 'range', min: '0', max: '1', step: '.1', value: String(S[key]), id: 'set-' + key }); r.addEventListener('input', () => { S[key] = +r.value; fn(S[key]); save(); }); return h('label', { class: 'rng', for: 'set-' + key }, h('span', {}, label), r); };
  const lim = h('div', { class: 'seg' }, ...[[0, 'بدون'], [15, '15 د'], [30, '30 د'], [45, '45 د']].map(([v, l]) => { const b = btn('seg-b' + (S.limit === v ? ' on' : ''), l, () => { S.limit = v; save(); lim.querySelectorAll('.seg-b').forEach(x => x.classList.toggle('on', x === b)); }); return b; }));
  root.append(h('section', { class: 'card' }, h('h3', {}, 'الإعدادات'),
    tog('mic', 'استخدام الميكروفون', dict ? 'في مرحلة النطق، يطلب المتصفح إذنك أول مرة' : 'غير متاح على هذا الجهاز أو المتصفح'),
    tog('arabic', 'المعنى العربي', 'تقول لولو معنى الكلمة بالعربي'),
    range('music', 'صوت الموسيقى', setMusicVol), range('sfx', 'صوت المؤثرات', setSfxVol),
    h('label', {}, 'حد اللعب اليومي'), lim,
    h('p', { class: 'muted' }, 'الخصوصية: اللعبة لا تجمع أي بيانات ولا ترسلها. الصوت (إذا فعّلت الميكروفون) يُستخدم فقط للتعرّف على الكلمة لحظتها. بعد فتح اللعبة مرة، تبقى أصواتها محمّلة.')));
  UI.append(root);
});
function kpi(l, v) { return h('div', { class: 'kpi' }, h('small', {}, l), h('b', {}, v)); }
function weeklyText(p, learned, stages) {
  if (!stages) return 'لم يبدأ المراحل بعد.';
  if (stages === 5) return `أكمل جزيرة الفواكه وتعلّم ${learned} كلمات. ممتاز!`;
  return `أكمل ${stages} من 5 مراحل في جزيرة الفواكه. استمرّوا!`;
}
function confirmBox(text, yes) { const m = modal(h('div', { class: 'gate' }, h('h2', {}, text), h('div', { class: 'row' }, btn('big orange', 'نعم', () => { m.remove(); yes(); }), btn('ghost', 'لا', () => m.remove()))), 'gate-m'); }

// ================= play time =================
let restShown = false;
setInterval(() => {
  const p = cur(); if (!p || document.visibilityState !== 'visible' || screen === 'parent' || screen === 'start' || !A.ctx) return;
  addTime(p, 15); save();
  const lim = store.settings.limit;
  if (lim && !restShown && (p.time[today()] || 0) >= lim * 60) {
    restShown = true;
    const m = modal(h('div', { class: 'gate' }, img('char', 'lulu'), h('h2', {}, 'وقت الراحة!'), h('p', {}, 'لعبت كثير اليوم. نكمّل المغامرة بكرة!'), btn('big orange', 'تمام', () => { m.remove(); say('ar_bye'); start(); }), btn('ghost', 'ولي الأمر', () => { m.remove(); parentGate(); })), 'gate-m');
  }
}, 15000);

window.__lulu = { E, A, CH, runStage, WORLDS, store, worldMap, wardrobe, wordBag, achievements, parentDash, certificate, rewardScreen };
// first frame
document.addEventListener('pointerdown', () => initAudio(), { once: true });
start();

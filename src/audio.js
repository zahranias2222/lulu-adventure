// Audio: voice clips with lip-sync analyser, synthesized SFX and background music.
import LINES from './lines.json';

export const A = { ctx: null, buffers: {}, music: null, musicVol: .5, sfxVol: .8, speaking: null, analyser: null, current: null };

export function lineText(key) {
  const en = LINES.en[key]; if (en) return { lang: 'en', who: en[0], text: en[1].replace(/^\//, '').replace('ɡɹˈAps', 'Grapes').replace('tˈu', 'Two') };
  const ar = LINES.ar[key]; if (ar) return { lang: 'ar', who: ar[0], text: ar[1] };
  return null;
}
export function allClipNames() { return [...Object.keys(LINES.en), ...Object.keys(LINES.ar).map(k => 'ar_' + k)]; }

export function initAudio() {
  if (A.ctx) { if (A.ctx.state === 'suspended') A.ctx.resume(); return; }
  const C = window.AudioContext || window.webkitAudioContext;
  A.ctx = new C();
  A.master = A.ctx.createGain(); A.master.connect(A.ctx.destination);
  A.voiceBus = A.ctx.createGain(); A.voiceBus.gain.value = 1; A.voiceBus.connect(A.master);
  A.analyser = A.ctx.createAnalyser(); A.analyser.fftSize = 512; A.voiceBus.connect(A.analyser);
  A.sfxBus = A.ctx.createGain(); A.sfxBus.gain.value = A.sfxVol; A.sfxBus.connect(A.master);
  A.musicBus = A.ctx.createGain(); A.musicBus.gain.value = A.musicVol * .16; A.musicBus.connect(A.master);
  A.data = new Uint8Array(A.analyser.fftSize);
  loadAll();
}

let loading = null;
function loadAll() {
  if (loading) return loading;
  const names = allClipNames();
  loading = Promise.all(names.map(n => fetch('audio/' + n + '.mp3').then(r => r.arrayBuffer()).then(b => A.ctx.decodeAudioData(b)).then(buf => { A.buffers[n] = buf; }).catch(() => {})));
  return loading;
}
export function audioReady() { return loading || Promise.resolve(); }

// level 0..1 of current voice, for lip-sync
export function voiceLevel() {
  if (!A.analyser || !A.current) return 0;
  A.analyser.getByteTimeDomainData(A.data);
  let s = 0; for (let i = 0; i < A.data.length; i++) { const v = (A.data[i] - 128) / 128; s += v * v; }
  return Math.min(1, Math.sqrt(s / A.data.length) * 5.5);
}

export function stopVoice() { if (A.current) { try { A.current.onended = null; A.current.stop(); } catch (e) {} A.current = null; } }

// play a clip; resolves when finished
export function playClip(name, rate = 1) {
  return new Promise(res => {
    if (!A.ctx) return res();
    const go = () => {
      const buf = A.buffers[name]; if (!buf) return res();
      stopVoice();
      const src = A.ctx.createBufferSource(); src.buffer = buf; src.playbackRate.value = rate;
      src.connect(A.voiceBus); A.current = src;
      duck(true);
      src.onended = () => { if (A.current === src) A.current = null; duck(false); res(); };
      src.start();
    };
    if (A.buffers[name]) go(); else audioReady().then(go);
  });
}
function duck(on) { if (!A.musicBus) return; const t = A.ctx.currentTime; A.musicBus.gain.cancelScheduledValues(t); A.musicBus.gain.setTargetAtTime(A.musicVol * (on ? .06 : .16), t, .15); }
export function setMusicVol(v) { A.musicVol = v; if (A.musicBus) A.musicBus.gain.value = v * .16; }
export function setSfxVol(v) { A.sfxVol = v; if (A.sfxBus) A.sfxBus.gain.value = v; }

// ---------- SFX synth ----------
function tone(freq, start, dur, { type = 'sine', vol = .3, slide = 0, attack = .005 } = {}) {
  const c = A.ctx, o = c.createOscillator(), g = c.createGain();
  o.type = type; o.frequency.setValueAtTime(freq, start); if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(30, freq * slide), start + dur);
  g.gain.setValueAtTime(0, start); g.gain.linearRampToValueAtTime(vol, start + attack); g.gain.exponentialRampToValueAtTime(.0008, start + dur);
  o.connect(g); g.connect(A.sfxBus); o.start(start); o.stop(start + dur + .05);
}
function noise(start, dur, { vol = .2, f = 2000, q = 1, sweep = 1 } = {}) {
  const c = A.ctx, b = c.createBuffer(1, c.sampleRate * dur, c.sampleRate), d = b.getChannelData(0);
  for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  const s = c.createBufferSource(); s.buffer = b; const bp = c.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.setValueAtTime(f, start); bp.frequency.exponentialRampToValueAtTime(f * sweep, start + dur); bp.Q.value = q;
  const g = c.createGain(); g.gain.setValueAtTime(vol, start); g.gain.exponentialRampToValueAtTime(.001, start + dur);
  s.connect(bp); bp.connect(g); g.connect(A.sfxBus); s.start(start);
}
export function sfx(name) {
  if (!A.ctx) return; const t = A.ctx.currentTime;
  switch (name) {
    case 'tap': tone(880, t, .08, { vol: .15, type: 'triangle' }); break;
    case 'pop': tone(500, t, .12, { slide: 2.2, vol: .3 }); noise(t, .08, { vol: .12, f: 3000 }); break;
    case 'right': [784, 988, 1319].forEach((f, i) => tone(f, t + i * .07, .35, { type: 'triangle', vol: .22 })); break;
    case 'soft': tone(330, t, .25, { slide: .8, vol: .18, type: 'sine' }); tone(262, t + .12, .3, { vol: .14 }); break;
    case 'star': [1047, 1319, 1568, 2093].forEach((f, i) => tone(f, t + i * .06, .5, { type: 'sine', vol: .16 })); break;
    case 'whoosh': noise(t, .45, { vol: .25, f: 600, sweep: 6, q: .8 }); break;
    case 'fanfare': [523, 659, 784, 1047, 784, 1047].forEach((f, i) => tone(f, t + i * .12, .5, { type: 'square', vol: .06 })); [523, 659, 784].forEach(f => tone(f, t + .72, 1.2, { type: 'triangle', vol: .12 })); break;
    case 'box': tone(200, t, .5, { slide: 4, vol: .2, type: 'triangle' }); noise(t + .3, .4, { vol: .2, f: 4000 }); [1319, 1568, 2093, 2637].forEach((f, i) => tone(f, t + .45 + i * .05, .6, { vol: .12 })); break;
    case 'boing': tone(180, t, .35, { slide: 2.4, vol: .25, type: 'sine' }); break;
    case 'count': tone(660, t, .2, { type: 'triangle', vol: .2 }); tone(990, t + .05, .25, { vol: .12 }); break;
  }
}

// ---------- background music: gentle marimba loop ----------
let musicTimer = null;
export function startMusic() {
  if (!A.ctx || musicTimer) return;
  const bpm = 96, beat = 60 / bpm, scale = [0, 2, 4, 7, 9];
  const base = 392; // G4
  const chords = [[0, 4, 7], [-3, 0, 4], [-7, -3, 0], [-5, -1, 2]];
  const mel = [0, 2, 4, 2, 7, 4, 2, 0, 4, 7, 9, 7, 4, 2, 4, 0];
  let step = 0, next = A.ctx.currentTime + .1;
  const st = (semi) => base * Math.pow(2, semi / 12);
  const mar = (f, t, v) => {
    const c = A.ctx, o = c.createOscillator(), o2 = c.createOscillator(), g = c.createGain();
    o.type = 'sine'; o2.type = 'sine'; o.frequency.value = f; o2.frequency.value = f * 4.01;
    const g2 = c.createGain(); g2.gain.value = .12;
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(v, t + .008); g.gain.exponentialRampToValueAtTime(.0005, t + .9);
    o.connect(g); o2.connect(g2); g2.connect(g); g.connect(A.musicBus); o.start(t); o2.start(t); o.stop(t + 1); o2.stop(t + 1);
  };
  musicTimer = setInterval(() => {
    while (next < A.ctx.currentTime + .3) {
      const bar = Math.floor(step / 8) % 4, s = step % 16;
      if (step % 2 === 0) { const m = mel[(s + bar * 3) % 16]; if (!(s === 7 || s === 15)) mar(st(m), next, .5); }
      if (step % 8 === 0) chords[bar].forEach(c => mar(st(c - 12), next, .22));
      if (step % 4 === 2) mar(st(chords[bar][0] - 24), next, .3);
      next += beat / 2; step++;
    }
  }, 100);
}
export function stopMusic() { clearInterval(musicTimer); musicTimer = null; }

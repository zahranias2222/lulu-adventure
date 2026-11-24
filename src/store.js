// Progress kept on this device only (localStorage). Nothing is sent anywhere.
const KEY = 'lulu-adventure.v1';
const blank = () => ({ profiles: [], current: null, settings: { mic: true, music: .5, sfx: .8, arabic: true, limit: 0 }, seenIntro: false });
let S = blank();
try { const raw = localStorage.getItem(KEY); if (raw) S = { ...blank(), ...JSON.parse(raw) }; } catch (e) {}
export const store = S;
export function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }

export function newProfile(name, gender, avatar, age) {
  const p = {
    id: 'k' + Date.now().toString(36), name, gender, avatar, age,
    stars: {}, done: {}, items: [], equipped: { lulu: {}, bibo: {}, toota: {}, bondoq: {} }, badges: [], certs: [],
    words: {}, listen: { c: 0, w: 0 }, speak: { tries: 0, ok: 0, rec: 0 }, time: {}, sessions: 0, created: Date.now(),
  };
  S.profiles.push(p); S.current = p.id; save(); return p;
}
export function cur() { return S.profiles.find(p => p.id === S.current) || null; }
export function today() { const d = new Date(); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); }
export function word(p, id) { return (p.words[id] ||= { heard: 0, c: 0, w: 0, said: 0, saidOk: 0, last: 0 }); }
export function totalStars(p) { return Object.values(p.stars).reduce((a, b) => a + b, 0); }
export function wordStatus(w) {
  if (!w || (!w.heard && !w.c)) return 'new';
  if (w.c >= 2 && w.c >= w.w * 2) return 'learned';
  if (w.w >= 2 || (w.heard && w.c < 2)) return 'review';
  return 'learning';
}
export function addTime(p, secs) { const d = today(); p.time[d] = (p.time[d] || 0) + secs; }
export function resetProfile(p) { Object.assign(p, { stars: {}, done: {}, items: [], equipped: { lulu: {}, bibo: {}, toota: {}, bondoq: {} }, badges: [], certs: [], words: {}, listen: { c: 0, w: 0 }, speak: { tries: 0, ok: 0, rec: 0 }, time: {} }); save(); }
export function deleteProfile(id) { S.profiles = S.profiles.filter(p => p.id !== id); if (S.current === id) S.current = S.profiles[0]?.id || null; save(); }

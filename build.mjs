// Builds two outputs from src/:
//  docs/      installable PWA (manifest + service worker, works offline) for GitHub Pages
//  artifact/  page + files for publishing as a claude.ai artifact
import { build } from 'esbuild';
import fs from 'fs';
import path from 'path';

const ROOT = path.dirname(new URL(import.meta.url).pathname);
const r = (...p) => path.join(ROOT, ...p);
const VERSION = 'v' + Date.now().toString(36);

await build({ entryPoints: [r('src/main.js')], bundle: true, minify: true, format: 'iife', target: 'es2020', outfile: r('dist/game.js'), loader: { '.json': 'json' }, logLevel: 'warning' });

const b64 = f => fs.readFileSync(r(f)).toString('base64');
const fontCss = `@font-face{font-family:'Baloo Bhaijaan 2';font-weight:400 800;font-display:swap;src:url(data:font/woff2;base64,${b64('fonts/baloo-ar.woff2')}) format('woff2');unicode-range:U+0600-06FF,U+0750-077F,U+0870-088E,U+0890-0891,U+0898-08E1,U+08E3-08FF,U+200C-200E,U+2010-2011,U+204F,U+2E41,U+FB50-FDFF,U+FE70-FE74,U+FE76-FEFC;}
@font-face{font-family:'Baloo Bhaijaan 2';font-weight:400 800;font-display:swap;src:url(data:font/woff2;base64,${b64('fonts/baloo-lat.woff2')}) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;}`;
const css = fontCss + '\n' + fs.readFileSync(r('src/style.css'), 'utf8');
const body = `<canvas id="c" aria-label="عالم اللعبة"></canvas>
<div id="ui"><div id="screen"></div><div id="topbar"></div><div id="bubble" role="status" aria-live="polite"></div></div>
<canvas id="fx"></canvas>`;

// audio list
const audioDir = process.env.AUDIO_DIR || r('audio');
const clips = fs.readdirSync(audioDir).filter(f => f.endsWith('.mp3'));

// ---------- site (PWA) ----------
const S = r('docs');
fs.rmSync(S, { recursive: true, force: true });
fs.mkdirSync(path.join(S, 'audio'), { recursive: true });
fs.mkdirSync(path.join(S, 'icons'), { recursive: true });
clips.forEach(f => fs.copyFileSync(path.join(audioDir, f), path.join(S, 'audio', f)));
fs.copyFileSync(r('dist/game.js'), path.join(S, 'game.js'));
for (const f of fs.readdirSync(r('icons'))) fs.copyFileSync(r('icons', f), path.join(S, 'icons', f));
fs.writeFileSync(path.join(S, 'index.html'), `<!doctype html>
<html lang="ar" dir="rtl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover,user-scalable=no">
<title>مغامرات لولو</title>
<meta name="description" content="Lulu's English Adventure: لعبة ثلاثية الأبعاد لتعليم الأطفال الإنجليزية باللعب">
<meta name="theme-color" content="#ff7a1f">
<link rel="manifest" href="manifest.webmanifest">
<link rel="icon" href="icons/icon-192.png">
<link rel="apple-touch-icon" href="icons/apple-touch-icon.png">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="مغامرات لولو">
<style>${css}</style>
</head>
<body>
${body}
<script src="game.js"></script>
<script>if('serviceWorker' in navigator){addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}));}</script>
</body>
</html>`);
fs.writeFileSync(path.join(S, 'manifest.webmanifest'), JSON.stringify({
  name: "مغامرات لولو - Lulu's English Adventure", short_name: 'مغامرات لولو', description: 'العب، اكتشف، وتكلّم بالإنجليزية!',
  lang: 'ar', dir: 'rtl', start_url: './', scope: './', display: 'fullscreen', orientation: 'any', background_color: '#8fd3ff', theme_color: '#ff7a1f',
  categories: ['education', 'games', 'kids'],
  icons: [
    { src: 'icons/icon-192.png', sizes: '192x192', type: 'image/png' },
    { src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png' },
    { src: 'icons/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
  ],
}, null, 1));
const files = ['./', 'index.html', 'game.js', 'manifest.webmanifest', ...fs.readdirSync(path.join(S, 'icons')).map(f => 'icons/' + f), ...clips.map(f => 'audio/' + f)];
fs.writeFileSync(path.join(S, 'sw.js'), `// offline cache: everything the game needs is downloaded on first visit
const CACHE='lulu-${VERSION}';const FILES=${JSON.stringify(files)};
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(r=>r||fetch(e.request).then(res=>{const cp=res.clone();caches.open(CACHE).then(c=>c.put(e.request,cp));return res;})));});
`);
fs.writeFileSync(path.join(S, '.nojekyll'), '');

// ---------- artifact ----------
const AR = r('artifact');
fs.rmSync(AR, { recursive: true, force: true });
fs.mkdirSync(path.join(AR, 'audio'), { recursive: true });
clips.forEach(f => fs.copyFileSync(path.join(audioDir, f), path.join(AR, 'audio', f)));
fs.copyFileSync(r('dist/game.js'), path.join(AR, 'game.js'));
fs.writeFileSync(path.join(AR, 'index.html'), `<title>مغامرات لولو</title>
<meta name="claude:viewport-fit-sides" content="cover">
<style>${css}</style>
<div dir="rtl" lang="ar">
${body}
</div>
<script src="game.js"></script>
`);
console.log('built', VERSION, clips.length, 'clips', (fs.statSync(r('dist/game.js')).size / 1024).toFixed(0) + 'KB js');

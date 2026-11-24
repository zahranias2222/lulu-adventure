const s = (d, extra = '') => `<svg viewBox="0 0 24 24" aria-hidden="true" ${extra}>${d}</svg>`;
export const ICON = {
  star: s('<path fill="currentColor" stroke="rgba(0,0,0,.15)" stroke-width="1" stroke-linejoin="round" d="M12 2.6l2.8 5.9 6.4.8-4.7 4.4 1.2 6.4L12 17l-5.7 3.1 1.2-6.4L2.8 9.3l6.4-.8z"/>', 'class="i-star"'),
  home: s('<path fill="currentColor" d="M12 3l9 8h-2.6v9h-4.6v-6H10.2v6H5.6v-9H3z"/>'),
  speaker: s('<path fill="currentColor" d="M4 9h4l5-4v14l-5-4H4z"/><path fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" d="M16 8.5a5 5 0 010 7M18.6 6a8.5 8.5 0 010 12"/>'),
  play: s('<path fill="currentColor" d="M8 4.5v15l12-7.5z"/>'),
  lock: s('<path fill="currentColor" d="M7 10V7.5a5 5 0 0110 0V10h1.2c.7 0 1.3.6 1.3 1.3v8.4c0 .7-.6 1.3-1.3 1.3H5.8c-.7 0-1.3-.6-1.3-1.3v-8.4c0-.7.6-1.3 1.3-1.3zm2.4 0h5.2V7.5a2.6 2.6 0 00-5.2 0z"/>'),
  plus: s('<path fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" d="M12 5v14M5 12h14"/>'),
  map: s('<path fill="currentColor" d="M3 6l6-2.5 6 2.5 6-2.5v14.5L15 20.5 9 18l-6 2.5z" opacity=".35"/><path fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" d="M3 6l6-2.5 6 2.5 6-2.5v14.5L15 20.5 9 18l-6 2.5zM9 3.5V18M15 6v14.5"/>'),
  bag: s('<path fill="currentColor" d="M5 8h14l-1.2 11.2c-.1 1-.9 1.8-2 1.8H8.2c-1 0-1.9-.8-2-1.8z"/><path fill="none" stroke="currentColor" stroke-width="2" d="M8.5 8V6.5a3.5 3.5 0 017 0V8"/>'),
  shirt: s('<path fill="currentColor" d="M8.5 3L3 6.5l2.2 4 2-1V21h9.6V9.5l2 1 2.2-4L15.5 3c-.6 1.6-2 2.6-3.5 2.6S9.1 4.6 8.5 3z"/>'),
  trophy: s('<path fill="currentColor" d="M7 3h10v2h3.5v2.5A4.5 4.5 0 0116.7 12 5 5 0 0113 15v3h3.5v3h-9v-3H11v-3a5 5 0 01-3.7-3A4.5 4.5 0 013.5 7.5V5H7zm0 4H5.5v.5A2.5 2.5 0 007 9.8zm10 0v2.8a2.5 2.5 0 001.5-2.3V7z"/>'),
  mic: s('<rect x="8.5" y="2.5" width="7" height="12" rx="3.5" fill="currentColor"/><path fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" d="M5.5 11a6.5 6.5 0 0013 0M12 17.5V21M8.5 21h7"/>'),
  check: s('<path fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.5l5 5 10-11"/>'),
  hand: s('<path fill="#fff" stroke="#3b2a4a" stroke-width="1.4" stroke-linejoin="round" d="M9 11V4.5a1.5 1.5 0 013 0V10l.2-1.3a1.5 1.5 0 013 .3V11a1.5 1.5 0 013 .2v1a1.5 1.5 0 013 .3V15c0 3.6-2.6 6.5-6.4 6.5h-1.2c-2.2 0-3.6-.9-4.8-2.6L5.2 14.5a1.6 1.6 0 012.6-1.8z"/>'),
  flag: s('<path fill="currentColor" d="M5 2.5h2V21H5zM7 4h11l-2.5 4L18 12H7z"/>'),
  medal: s('<path fill="#ff5f8f" d="M6 2h4.5L13 7.5 10 9zM18 2h-4.5L11 7.5 14 9z"/><circle cx="12" cy="15" r="6.5" fill="#ffc93c" stroke="#e8a210" stroke-width="1.4"/><path fill="#fff6d0" d="M12 11.2l1.2 2.4 2.6.4-1.9 1.8.5 2.6-2.4-1.3-2.4 1.3.5-2.6-1.9-1.8 2.6-.4z"/>'),
  gift: s('<path fill="currentColor" d="M3.5 9h17v4h-17zM5 13h14v8H5z" opacity=".5"/><path fill="none" stroke="currentColor" stroke-width="2" d="M12 9v12M12 9c-1-3-5-4.5-5-2s5 2 5 2zm0 0c1-3 5-4.5 5-2s-5 2-5 2z"/>'),
};

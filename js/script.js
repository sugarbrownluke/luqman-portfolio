/* =========================================================
   LUQMAN HAKEEM — PORTFOLIO (AMPED)
   Vanilla JS, no dependencies. Edit the PROJECTS array to
   add/remove work — the grid, index list, highlight reel,
   filters and lightbox all render from it.
   ========================================================= */

const PROJECTS = [
  {
    title: "TechRat",
    category: "branding",
    categoryLabel: "Brand Identity",
    year: "2026",
    images: ["assets/img/brand-techrat-cover.jpg", "assets/img/brand-techrat-system.jpg", "assets/img/brand-techrat-exploration.jpg"],
    desc: "A full identity system for a PC & laptop repair brand — logomark exploration through to final lockups across light, dark and reversed backgrounds."
  },
  {
    title: "TechRat MY",
    category: "web",
    categoryLabel: "Web Design",
    year: "2026",
    images: ["assets/img/web-techratmy-site.jpg"],
    desc: "Website design for Techrat MY — a Kajang-based PC and laptop repair shop. Dark UI, straight-talk copy, and a services + pricing structure built to convert WhatsApp enquiries."
  },
  {
    title: "Stash Padu × ASNB",
    category: "branding",
    categoryLabel: "Campaign Concept",
    year: "2025",
    images: ["assets/img/campaign-stashpadu-idea.jpg", "assets/img/campaign-stashpadu-overview.jpg"],
    desc: "A detective-themed investment campaign concept for ASNB, built around the idea of a 'stash padu' — encouraging Gen Z to investigate their friends' saving habits."
  },
  {
    title: "Product Visualization",
    category: "3d",
    categoryLabel: "3D & Product",
    year: "2022",
    images: ["assets/img/product-watch.jpg", "assets/img/product-skincare.jpg"],
    desc: "Studio-style 3D renders — a wristwatch and a men's skincare set — built for clean, editable product photography without a camera."
  },
  {
    title: "Montigo",
    category: "3d",
    categoryLabel: "3D & Retail Concept",
    year: "2025",
    images: ["assets/img/product-montigo.jpg"],
    desc: "A branded retail/vending concept environment modelled and rendered in 3D, from shelf layout to signage."
  },
  {
    title: "Metallicorn",
    category: "art",
    categoryLabel: "Digital Art & Apparel",
    year: "2023",
    images: ["assets/img/art-metallicorn-graphic.png", "assets/img/art-metallicorn-tee.png"],
    desc: "A vintage-metal-poster style illustration — a guitar-shredding unicorn — designed as standalone art and mocked up as apparel print."
  },
  {
    title: "Photo Manipulation Poster",
    category: "art",
    categoryLabel: "Digital Art",
    year: "2025",
    images: ["assets/img/art-torii-portrait.jpg"],
    desc: "A composited portrait piece blending photography with illustrated elements and a red-and-blue duotone treatment."
  },
  {
    title: "Rockify",
    category: "ui",
    categoryLabel: "UI / UX",
    year: "2024",
    images: [
      "assets/img/app-rockify-poster.jpg",
      "assets/img/app-rockify-login.jpg",
      "assets/img/app-rockify-onboarding.jpg",
      "assets/img/app-rockify-home.jpg"
    ],
    desc: "UI design for Rockify, a rock-focused music streaming app concept — onboarding, login, and home/discovery screens plus launch key art."
  },
  {
    title: "MYVI",
    category: "branding",
    categoryLabel: "Ad Campaign",
    year: "2024",
    images: ["assets/img/campaign-myvi-ad.jpg"],
    desc: "A playful print ad concept for the Perodua MYVI — 'Is it a bird? Is it a plane? No, it's King of the Road.'"
  },
  {
    title: "Aga's Jello",
    category: "branding",
    categoryLabel: "Packaging Design",
    year: "2025",
    images: ["assets/img/brand-agasjello-packaging.jpg"],
    desc: "Packaging design for Malaysia's first chocolate jelly bar — bold color-blocking built to pop on a crowded shelf."
  },
  {
    title: "Creatine Surge",
    category: "ai",
    categoryLabel: "AI Motion — Prompted",
    year: "2026",
    ai: true,
    loop: "assets/loops/creatine-surge.html",
    images: ["assets/img/ai-creatine-surge-poster.jpg"],
    desc: "A looping product animation for the ONTHEGO 100% Creatine pouch, made entirely by prompting an AI. I directed the mood, layers, beat-synced motion and seamless 6-second loop; the AI wrote the code."
  },
  {
    title: "Rio Punch Carnival",
    category: "ai",
    categoryLabel: "AI Motion — Prompted",
    year: "2026",
    ai: true,
    loop: "assets/loops/rio-punch.html",
    images: ["assets/img/ai-rio-punch-poster.jpg"],
    desc: "A carnival-themed motion loop for Juice Monster Rio Punch (unofficial concept), made entirely by prompting an AI. Sunburst, palm fronds, orbiting fruit and a juice splash on every beat, all directed by me in plain language."
  }
];

/* AI Lab showcase — the "direction" lines describe what I asked the AI for.
   EDIT ME: replace them with your real prompt notes if you like. */
const AI_PIECES = [
  {
    title: "Creatine Surge",
    brand: "ONTHEGO — product loop",
    file: "creatine-surge.html",
    loop: "assets/loops/creatine-surge.html",
    poster: "assets/img/ai-creatine-surge-poster.jpg",
    c1: "#d9161c", c2: "#ff3b30",
    lines: [
      "product: ONTHEGO 100% Creatine pouch, hero on the right",
      "mood: black fading into blood red, gym energy",
      "type: giant italic CREATINE marquee behind everything",
      "motion: pouch floats, punches on the beat, shockwave ring",
      "layers: halftone wave, speed streaks, rising sparks",
      "loop: 6 seconds, seamless, no visible restart",
      "layout: works in portrait and landscape"
    ],
    specs: ["6s seamless loop", "Live canvas code", "Portrait + landscape", "AI-prompted"]
  },
  {
    title: "Rio Punch Carnival",
    brand: "Juice Monster — concept loop",
    file: "rio-punch.html",
    loop: "assets/loops/rio-punch.html",
    poster: "assets/img/ai-rio-punch-poster.jpg",
    c1: "#5fd12a", c2: "#ffe100",
    lines: [
      "product: Rio Punch can, floating centre stage",
      "mood: Rio carnival, Brazil-flag diamond, sticker type",
      "motion: 8 beats per loop, juice splash on every hit",
      "layers: sunburst, palm fronds, orbiting fruit, confetti",
      "waves: three teal layers rolling against each other",
      "loop: 8 seconds, seamless",
      "layout: works in portrait and landscape"
    ],
    specs: ["8s seamless loop", "Live canvas code", "Portrait + landscape", "AI-prompted"]
  }
];

/* Projects featured in the horizontal highlight reel (by title) */
const REEL = ["Creatine Surge", "Rio Punch Carnival", "Rockify", "Metallicorn", "Photo Manipulation Poster", "Aga's Jello", "MYVI", "Montigo", "Stash Padu × ASNB"];

/* Rotating words under the hero */
const ROLES = ["Brand Identity", "3D Product Viz", "Digital Art", "UI / UX", "Web Design", "AI Prompting", "Art Direction", "Over-delivering"];

/* =========================================================
   HELPERS + GLOBAL STATE
   ========================================================= */
const $  = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const lerp = (a, b, t) => a + (b - a) * t;
const pad = (n, l = 2) => String(n).padStart(l, '0');
const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const FINE = window.matchMedia('(hover:hover) and (pointer:fine)').matches;

const mouse = { x: innerWidth / 2, y: innerHeight / 2, sx: innerWidth / 2, sy: innerHeight / 2, vx: 0, vy: 0, inside: false };
const scroll = { y: scrollY, last: scrollY, vel: 0 };
let vw = innerWidth, vh = innerHeight;

window.addEventListener('mousemove', e => {
  mouse.vx = e.clientX - mouse.x; mouse.vy = e.clientY - mouse.y;
  mouse.x = e.clientX; mouse.y = e.clientY; mouse.inside = true;
}, { passive: true });
document.addEventListener('mouseleave', () => mouse.inside = false);

/* =========================================================
   SPLIT TEXT
   ========================================================= */
function splitChars(el, startIndex = 0){
  const text = el.textContent;
  el.textContent = '';
  let i = startIndex;
  [...text].forEach(ch => {
    const s = document.createElement('span');
    s.className = 'char';
    s.textContent = ch === ' ' ? ' ' : ch;
    s.style.setProperty('--i', i++);
    el.appendChild(s);
  });
  return i;
}
function splitWords(el){
  // keeps child elements (e.g. <span class="accent">) intact as their own word
  const nodes = [...el.childNodes];
  el.textContent = '';
  let n = 0;
  const addWord = (content) => {
    const wrap = document.createElement('span'); wrap.className = 'sw-wrap';
    const w = document.createElement('span'); w.className = 'sw';
    w.style.transitionDelay = (n++ * 70) + 'ms';
    if (typeof content === 'string') w.textContent = content; else w.appendChild(content);
    wrap.appendChild(w); el.appendChild(wrap);
  };
  let lastWord = null, spaceBefore = true;
  nodes.forEach(node => {
    if (node.nodeType === 3){
      const txt = node.textContent;
      if (!txt.trim()){ if (txt.length) spaceBefore = true; return; }
      txt.split(/\s+/).filter(Boolean).forEach((word, i) => {
        if (i === 0 && !/^\s/.test(txt) && !spaceBefore && lastWord){ lastWord.appendChild(document.createTextNode(word)); return; }
        if (n) el.appendChild(document.createTextNode(' '));
        addWord(word); lastWord = el.lastChild.firstChild;
      });
      spaceBefore = /\s$/.test(txt);
    } else {
      // an element glued to the previous word (e.g. the red full stop) joins that word
      if (!spaceBefore && lastWord) lastWord.appendChild(node);
      else { if (n) el.appendChild(document.createTextNode(' ')); addWord(node); lastWord = el.lastChild.firstChild; }
      spaceBefore = false;
    }
  });
}

let ci = 0;
$$('[data-split]').forEach(el => { ci = splitChars(el, ci); });
$$('[data-split-words]').forEach(splitWords);

/* about title → individual words that light up on scroll */
const fillTitle = $('[data-scroll-fill]');
if (fillTitle){
  const words = fillTitle.textContent.trim().split(/\s+/);
  const hot = new Set(['lane', 'all']);
  fillTitle.innerHTML = words.map(w => {
    const bare = w.replace(/[^a-z]/gi, '').toLowerCase();
    return `<span class="fw${hot.has(bare) ? ' hot' : ''}">${w}</span>`;
  }).join(' ');
}

/* =========================================================
   LOADER
   ========================================================= */
(function loader(){
  const el = $('#loader'), count = $('#loaderCount'), bar = $('#loaderBar'), status = $('#loaderStatus');
  const msgs = ['BOOTING', 'LOADING PIXELS', 'RENDERING 3D', 'SHARPENING KERNING', 'CALIBRATING CHAOS', 'READY'];
  document.body.classList.add('is-loading');
  let n = 0, started = false;
  const finish = () => {
    count.textContent = '100'; bar.style.width = '100%'; status.textContent = 'READY';
    setTimeout(() => {
      el.classList.add('done');
      document.body.classList.remove('is-loading');
      setTimeout(() => { document.body.classList.add('loaded'); startReveals(); }, 350);
      setTimeout(() => { el.classList.add('gone'); document.body.classList.add('settled'); measureHeroChars(); }, 2300);
    }, 250);
  };
  const tick = () => {
    n += Math.floor(Math.random() * 14) + 4;
    if (n >= 100) return finish();
    count.textContent = pad(n, 3);
    bar.style.width = n + '%';
    status.textContent = msgs[Math.min(msgs.length - 2, Math.floor(n / 20))];
    setTimeout(tick, REDUCED ? 10 : 60 + Math.random() * 90);
  };
  const begin = () => { if (started) return; started = true; tick(); };
  if (document.readyState === 'complete') setTimeout(begin, 150);
  else window.addEventListener('load', () => setTimeout(begin, 150));
  setTimeout(begin, 2000); // fallback if 'load' is slow (big images)
})();

/* =========================================================
   HERO — WebGL liquid noise background
   ========================================================= */
const heroGL = (function(){
  const canvas = $('#heroGL');
  if (!canvas || REDUCED) return null;
  const gl = canvas.getContext('webgl', { antialias: false, alpha: false, powerPreference: 'low-power' });
  if (!gl) return null;

  const vs = `attribute vec2 a; void main(){ gl_Position = vec4(a,0.,1.); }`;
  const fs = `
    precision mediump float;
    uniform vec2 r; uniform float t; uniform vec2 m; uniform float chaos;
    float h(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
    float n(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.-2.*f);
      return mix(mix(h(i),h(i+vec2(1,0)),f.x), mix(h(i+vec2(0,1)),h(i+1.),f.x), f.y); }
    float fbm(vec2 p){ float v=0., a=.5; for(int i=0;i<5;i++){ v+=a*n(p); p*=2.03; a*=.5; } return v; }
    void main(){
      vec2 p = (gl_FragCoord.xy - .5*r) / r.y;
      vec2 mm = (m - .5*r) / r.y;
      float d = length(p - mm);
      float pull = exp(-d*3.2);
      float T = t * (1. + chaos*3.);
      vec2 q = vec2(fbm(p*1.5 + T*.05), fbm(p*1.5 - T*.04 + 3.1));
      vec2 w = vec2(fbm(p*2. + q*3. + T*.07 + pull*1.6), fbm(p*2. + q*3. - T*.06 + 7.3 - pull));
      float f = fbm(p*1.3 + w*2.2);
      vec3 col = vec3(.035);
      col = mix(col, vec3(1., .23, .18), smoothstep(.48, .9, f) * .95);
      col = mix(col, vec3(.29, .82, 1.), smoothstep(.58, .98, w.y) * .55);
      col = mix(col, vec3(.84, 1., .25), smoothstep(.8, 1., f*w.x*1.6) * (.25 + chaos*.6));
      col += vec3(1., .3, .2) * pull * .22;
      float lines = smoothstep(.0, .02, abs(fract(f*9.) - .5) - .46);
      col += lines * .05;
      col *= .78;
      gl_FragColor = vec4(col, 1.);
    }`;
  const sh = (type, src) => { const s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s); return s; };
  const prog = gl.createProgram();
  gl.attachShader(prog, sh(gl.VERTEX_SHADER, vs));
  gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, fs));
  gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return null;
  gl.useProgram(prog);
  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);
  const loc = gl.getAttribLocation(prog, 'a');
  gl.enableVertexAttribArray(loc);
  gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
  const uR = gl.getUniformLocation(prog, 'r'), uT = gl.getUniformLocation(prog, 't'),
        uM = gl.getUniformLocation(prog, 'm'), uC = gl.getUniformLocation(prog, 'chaos');
  const SCALE = 0.5; // render at half res — it's blurry noise anyway
  let w = 0, h = 0, visible = true, gm = { x: .5, y: .5 }, chaosV = 0;
  const resize = () => {
    w = Math.max(1, Math.floor(canvas.clientWidth * SCALE));
    h = Math.max(1, Math.floor(canvas.clientHeight * SCALE));
    canvas.width = w; canvas.height = h; gl.viewport(0, 0, w, h);
  };
  resize(); window.addEventListener('resize', resize);
  new IntersectionObserver(([e]) => visible = e.isIntersecting).observe(canvas);
  canvas.style.background = 'none';
  const t0 = performance.now();
  return {
    render(){
      if (!visible) return;
      const rect = canvas.getBoundingClientRect();
      gm.x = lerp(gm.x, (mouse.x - rect.left) / rect.width, .05);
      gm.y = lerp(gm.y, (mouse.y - rect.top) / rect.height, .05);
      chaosV = lerp(chaosV, document.body.classList.contains('chaos') ? 1 : 0, .05);
      gl.uniform2f(uR, w, h);
      gl.uniform1f(uT, (performance.now() - t0) / 1000);
      gl.uniform2f(uM, gm.x * w, (1 - gm.y) * h);
      gl.uniform1f(uC, chaosV);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }
  };
})();

/* =========================================================
   HERO — letters that dodge the cursor, layered parallax
   ========================================================= */
const heroChars = $$('.hero__name--back .char');
let heroCharBase = [];
function measureHeroChars(){
  heroChars.forEach(c => { c.style.setProperty('--mx', '0px'); c.style.setProperty('--my', '0px'); c.style.setProperty('--mr', '0deg'); });
  heroCharBase = heroChars.map(c => {
    const r = c.getBoundingClientRect();
    return { x: r.left + r.width / 2, y: r.top + r.height / 2 + scrollY, s: scrollY };
  });
}
window.addEventListener('resize', () => { if (document.body.classList.contains('settled')) measureHeroChars(); });

function updateHero(){
  const y = scroll.y;
  if (y > vh * 1.2) return;
  const back = $('.hero__name--back'), front = $('.hero__name--front'), portrait = $('#portrait');
  if (!REDUCED){
    back.style.transform  = `translateY(calc(-58% + ${y * 0.45}px))`;
    front.style.transform = `translateY(calc(-58% + ${y * 0.2}px))`;
  }
  // dodge
  if (FINE && heroCharBase.length && !REDUCED){
    const R = 230;
    heroChars.forEach((c, i) => {
      const b = heroCharBase[i];
      // base was measured at scroll position b.s; the name drifts down at 0.45× scroll
      const vy = b.y - y + (y - b.s) * 0.45;
      const ddx = b.x - mouse.sx, ddy = vy - mouse.sy;
      const d = Math.hypot(ddx, ddy);
      if (d < R && mouse.inside){
        const f = Math.pow(1 - d / R, 2);
        c.style.setProperty('--mx', (ddx / (d || 1)) * f * 90 + 'px');
        c.style.setProperty('--my', (ddy / (d || 1)) * f * 90 + 'px');
        c.style.setProperty('--mr', (ddx > 0 ? 1 : -1) * f * 18 + 'deg');
      } else if (c.style.getPropertyValue('--mx') !== '0px'){
        c.style.setProperty('--mx', '0px'); c.style.setProperty('--my', '0px'); c.style.setProperty('--mr', '0deg');
      }
    });
  }
  // portrait: parallax + RGB split when the mouse moves fast
  if (portrait && document.body.classList.contains('settled') && !REDUCED){
    const px = (mouse.sx / vw - .5), py = (mouse.sy / vh - .5);
    portrait.style.transform = `translateX(calc(-50% + ${px * -24}px)) translateY(${y * 0.12}px) scale(${1 + y / vh * 0.08})`;
    portrait.style.transition = 'none';
    const speed = Math.min(40, Math.hypot(mouse.vx, mouse.vy));
    const off = speed * 0.35 + (document.body.classList.contains('chaos') ? 8 : 0);
    portrait.classList.toggle('split', off > 2);
    const r = portrait.children[1], c = portrait.children[2];
    r.style.transform = `translate(${-off}px, ${off * .3}px)`;
    c.style.transform = `translate(${off}px, ${-off * .3}px)`;
  }
}

/* role typer */
(function roles(){
  const el = $('#role');
  if (!el) return;
  let i = 0;
  const type = (word, k = 0) => {
    el.textContent = word.slice(0, k);
    if (k < word.length) setTimeout(() => type(word, k + 1), 55);
    else setTimeout(erase, 1700);
  };
  const erase = () => {
    const t = el.textContent;
    if (t.length){ el.textContent = t.slice(0, -1); setTimeout(erase, 28); }
    else { i = (i + 1) % ROLES.length; type(ROLES[i]); }
  };
  setTimeout(() => type(ROLES[0]), 1800);
})();

/* auto-glitch on headline */
(function autoGlitch(){
  const el = $('.contact__title .glitch');
  if (!el || REDUCED) return;
  setInterval(() => {
    el.classList.add('glitching');
    setTimeout(() => el.classList.remove('glitching'), 260);
  }, 3200);
})();

/* =========================================================
   CURSOR + TRAIL
   ========================================================= */
const cursor = $('#cursor'), dot = $('#cursorDot'), label = $('#cursorLabel');
const trail = (function(){
  const c = $('#trail');
  if (!FINE || REDUCED || !c) return null;
  const ctx = c.getContext('2d');
  const pts = [];
  const size = () => { c.width = vw * devicePixelRatio; c.height = vh * devicePixelRatio; ctx.scale(devicePixelRatio, devicePixelRatio); };
  size(); window.addEventListener('resize', () => { ctx.setTransform(1,0,0,1,0,0); size(); });
  return {
    draw(){
      pts.push({ x: mouse.x, y: mouse.y });
      if (pts.length > 22) pts.shift();
      ctx.clearRect(0, 0, vw, vh);
      if (!mouse.inside) return;
      const chaos = document.body.classList.contains('chaos');
      for (let i = 1; i < pts.length; i++){
        const a = pts[i - 1], b = pts[i], t = i / pts.length;
        ctx.strokeStyle = chaos ? `hsla(${(performance.now() / 4 + i * 16) % 360},100%,60%,${t})` : `rgba(255,59,47,${t * .7})`;
        ctx.lineWidth = t * (chaos ? 14 : 4);
        ctx.lineCap = 'round';
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
      }
    }
  };
})();

if (FINE){
  document.addEventListener('mouseover', e => {
    const t = e.target;
    if (t.closest('.card, .reel__item, .index-item')){ cursor.classList.add('view'); label.textContent = 'VIEW'; }
    else if (t.closest('[data-hover], a, button')) cursor.classList.add('active');
  });
  document.addEventListener('mouseout', e => {
    const t = e.target;
    if (t.closest('.card, .reel__item, .index-item')) cursor.classList.remove('view');
    if (t.closest('[data-hover], a, button')) cursor.classList.remove('active');
  });
  window.addEventListener('mousedown', () => cursor.classList.add('down'));
  window.addEventListener('mouseup', () => cursor.classList.remove('down'));
}

/* =========================================================
   MAGNETIC ELEMENTS
   ========================================================= */
if (FINE && !REDUCED){
  $$('[data-magnetic]').forEach(el => {
    const strength = el.classList.contains('contact__email') ? .25 : .4;
    el.addEventListener('mousemove', e => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2), y = e.clientY - (r.top + r.height / 2);
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
      el.style.transition = 'transform .15s linear';
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
      el.style.transition = 'transform .7s cubic-bezier(.16,.84,.24,1)';
    });
  });
}

/* =========================================================
   TEXT SCRAMBLE (nav links)
   ========================================================= */
const GLYPHS = '!<>-_\\/[]{}—=+*^?#ABCDEFXYZ01';
function scramble(el){
  if (el._scrambling) return;
  el._scrambling = true;
  const final = el.dataset.text || (el.dataset.text = el.textContent);
  let frame = 0;
  const total = final.length * 3;
  const run = () => {
    el.textContent = [...final].map((ch, i) => i < frame / 3 ? ch : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]).join('');
    if (frame++ < total) requestAnimationFrame(run);
    else { el.textContent = final; el._scrambling = false; }
  };
  run();
}
$$('[data-scramble]').forEach(el => el.addEventListener('mouseenter', () => scramble(el)));

/* =========================================================
   NAV: mobile menu, hide on scroll down, clock
   ========================================================= */
(function nav(){
  const burger = $('#burger'), menu = $('#mobileMenu');
  burger.addEventListener('click', () => {
    menu.classList.toggle('open'); burger.classList.toggle('open');
  });
  $$('a', menu).forEach(a => a.addEventListener('click', () => { menu.classList.remove('open'); burger.classList.remove('open'); }));

  const clock = $('#clock');
  const fmt = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Kuala_Lumpur', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
  const tickClock = () => { clock.textContent = fmt.format(new Date()); };
  tickClock(); setInterval(tickClock, 1000);
})();

/* =========================================================
   MARQUEES — JS driven so scroll speed pushes them faster
   ========================================================= */
const marquees = $$('[data-marquee]').map(track => {
  const base = track.innerHTML.trim();
  let guard = 0;
  while (track.scrollWidth < vw * 1.3 && guard++ < 16) track.innerHTML += base;
  track.innerHTML += track.innerHTML;
  return { track, x: 0, dir: parseFloat(track.dataset.speed || 1), half: track.scrollWidth / 2 };
});
window.addEventListener('resize', () => marquees.forEach(m => m.half = m.track.scrollWidth / 2));
function updateMarquees(){
  const boost = 1 + Math.min(Math.abs(scroll.vel) * 0.25, 12);
  const sign = scroll.vel < -0.5 ? -1 : 1;
  marquees.forEach(m => {
    m.x -= m.dir * 0.9 * boost * sign;
    if (m.x <= -m.half) m.x += m.half;
    if (m.x > 0) m.x -= m.half;
    m.track.style.transform = `translate3d(${m.x}px,0,0)`;
  });
}

/* =========================================================
   PROJECT GRID + INDEX LIST
   ========================================================= */
function buildWork(){
  const grid = $('#grid'), list = $('#indexList');
  grid.innerHTML = PROJECTS.map((p, i) => `
    <article class="card${p.ai ? ' card--ai' : ''}" data-cat="${p.category}" data-index="${i}" tabindex="0" role="button" aria-label="Open ${p.title}">
      <div class="card__inner">
        <div class="card__media">
          <img src="${p.images[0]}" alt="${p.title}" loading="lazy">
          <span class="card__tag">${p.categoryLabel}</span>
          <span class="card__num">${pad(i + 1)}/${pad(PROJECTS.length)}</span>
          ${p.images.length > 1 ? `<span class="card__count">+${p.images.length - 1} more</span>` : ''}
          ${p.loop ? `<span class="card__live"><i></i>Live loop · AI-prompted</span>` : ''}
          <span class="card__glare"></span>
        </div>
        <div class="card__body">
          <h3 class="card__title">${p.title}</h3>
          <span class="card__year">${p.year}</span>
        </div>
      </div>
    </article>`).join('');

  list.innerHTML = PROJECTS.map((p, i) => `
    <li class="index-item" data-cat="${p.category}" data-index="${i}" tabindex="0" role="button" aria-label="Open ${p.title}">
      <span class="index-item__n">${pad(i + 1)}</span>
      <span class="index-item__t">${p.title}${p.ai ? ' <sup class="index-item__ai">AI</sup>' : ''}</span>
      <span class="index-item__c">${p.categoryLabel}</span>
      <span class="index-item__y">${p.year}</span>
    </li>`).join('');

  $$('.card, .index-item').forEach(el => {
    const open = () => openLightbox(+el.dataset.index);
    el.addEventListener('click', open);
    el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' '){ e.preventDefault(); open(); } });
  });

  // 3D tilt + glare
  if (FINE && !REDUCED){
    $$('.card').forEach(card => {
      const inner = $('.card__inner', card);
      card.addEventListener('mousemove', e => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
        card.classList.add('tilting');
        inner.style.setProperty('--ry', (x - .5) * 14 + 'deg');
        inner.style.setProperty('--rx', (.5 - y) * 12 + 'deg');
        inner.style.setProperty('--gx', x * 100 + '%');
        inner.style.setProperty('--gy', y * 100 + '%');
      });
      card.addEventListener('mouseleave', () => {
        card.classList.remove('tilting');
        inner.style.setProperty('--ry', '0deg'); inner.style.setProperty('--rx', '0deg');
      });
    });
  }

  // floating preview for the index list
  const prev = $('#hoverPreview'), prevImg = $('img', prev);
  $$('.index-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
      prevImg.src = PROJECTS[+item.dataset.index].images[0];
      prev.style.setProperty('--pr', (Math.random() * 12 - 6) + 'deg');
      prev.classList.add('show');
    });
    item.addEventListener('mouseleave', () => prev.classList.remove('show'));
  });

  observeCards();
}
const preview = { x: 0, y: 0 };
function updatePreview(){
  const prev = $('#hoverPreview');
  preview.x = lerp(preview.x, mouse.x, .12); preview.y = lerp(preview.y, mouse.y, .12);
  prev.style.left = preview.x + 'px'; prev.style.top = preview.y + 'px';
}

function initFilters(){
  const buttons = $$('.filter');
  buttons.forEach(btn => {
    const f = btn.dataset.filter;
    $('sup', btn).textContent = f === 'all' ? PROJECTS.length : PROJECTS.filter(p => p.category === f).length;
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      $$('.card, .index-item').forEach(el => {
        const show = f === 'all' || el.dataset.cat === f;
        el.classList.toggle('hidden', !show);
        if (show && el.classList.contains('card')){
          el.classList.remove('in'); void el.offsetWidth;
          requestAnimationFrame(() => el.classList.add('in'));
        }
      });
    });
  });

  const viewBtns = $$('.view-btn');
  viewBtns.forEach(btn => btn.addEventListener('click', () => {
    viewBtns.forEach(b => b.classList.toggle('active', b === btn));
    const list = btn.dataset.view === 'list';
    $('#grid').hidden = list;
    $('#indexList').hidden = !list;
    requestAnimationFrame(layoutReel);
  }));
}

/* =========================================================
   HORIZONTAL REEL (pinned, scroll-driven)
   ========================================================= */
const reel = $('#reel'), reelTrack = $('#reelTrack'), reelBar = $('#reelBar');
let reelDist = 0;
function buildReel(){
  const items = REEL.map(t => PROJECTS.findIndex(p => p.title === t)).filter(i => i >= 0);
  reelTrack.innerHTML =
    `<div class="reel__title">BEST<br>OF THE<br><em>BUNCH</em>→</div>` +
    items.map(i => {
      const p = PROJECTS[i];
      return `<figure class="reel__item" data-index="${i}" style="margin:0">
        <img src="${p.images[0]}" alt="${p.title}" loading="lazy">
        <figcaption class="reel__label"><b>${p.title}</b><span>${p.year}</span></figcaption>
      </figure>`;
    }).join('');
  $$('.reel__item').forEach(el => el.addEventListener('click', () => openLightbox(+el.dataset.index)));
  $$('img', reelTrack).forEach(img => img.addEventListener('load', layoutReel));
  layoutReel();
}
function layoutReel(){
  reelDist = Math.max(0, reelTrack.scrollWidth - vw);
  reel.style.height = (reelDist + vh) + 'px';
}
function updateReel(){
  const top = reel.offsetTop;
  const p = clamp((scroll.y - top) / (reel.offsetHeight - vh || 1), 0, 1);
  reelTrack.style.transform = `translate3d(${-p * reelDist}px,0,0)`;
  reelBar.style.transform = `scaleX(${p})`;
  if (!REDUCED){
    const s = clamp(scroll.vel * 0.15, -6, 6);
    $$('.reel__item', reelTrack).forEach(it => it.style.transform = `skewX(${-s}deg)`);
  }
}

/* =========================================================
   AI LAB — live loops in frames, direction notes typed out
   ========================================================= */
function buildAILab(){
  const wrap = $('#aiPieces');
  if (!wrap) return;
  wrap.innerHTML = AI_PIECES.map((a, i) => `
    <article class="ai-piece${i % 2 ? ' ai-piece--flip' : ''}" style="--pc:${a.c1};--pc2:${a.c2}">
      <div class="ai-piece__screen reveal">
        <div class="ai-piece__chrome">
          <span></span><span></span><span></span>
          <b>${a.file}</b>
          <em class="ai-piece__live"><i></i>LIVE</em>
        </div>
        <div class="ai-piece__view">
          <img class="ai-piece__poster" src="${a.poster}" alt="${a.title} — still frame" loading="lazy">
          <iframe data-src="${a.loop}" title="${a.title} — live animated loop" tabindex="-1"></iframe>
        </div>
        <span class="ai-piece__stamp" aria-hidden="true">AI<br>PROMPTED</span>
      </div>
      <div class="ai-piece__info">
        <p class="ai-piece__brand reveal">${a.brand}</p>
        <h3 class="ai-piece__title reveal">${a.title}</h3>
        <div class="ai-term reveal">
          <div class="ai-term__bar"><span>direction.txt</span><span>human → AI</span></div>
          <pre class="ai-term__body" aria-label="Creative direction: ${a.lines.join('; ')}"></pre>
        </div>
        <ul class="ai-piece__specs reveal">${a.specs.map(x => `<li>${x}</li>`).join('')}</ul>
        <div class="ai-piece__actions reveal">
          <button class="ai-piece__toggle" type="button" data-hover>Pause</button>
          <a href="${a.loop}" target="_blank" rel="noopener" data-hover>Open full screen ↗</a>
        </div>
      </div>
    </article>`).join('');

  $$('.ai-piece', wrap).forEach((piece, i) => {
    const frame = $('iframe', piece), toggle = $('.ai-piece__toggle', piece), term = $('.ai-term__body', piece);
    let userPaused = REDUCED, visible = false, typed = false;
    if (REDUCED) toggle.textContent = 'Play';
    const send = msg => { try { if (frame.contentWindow) frame.contentWindow.postMessage(msg, '*'); } catch (e) {} };
    const sync = () => {
      const play = visible && !userPaused;
      send(play ? 'loop:play' : 'loop:pause');
      piece.classList.toggle('is-paused', !play);
    };
    frame.addEventListener('load', () => { if (frame.src) piece.classList.add('is-loaded'); sync(); });
    toggle.addEventListener('click', () => {
      userPaused = !userPaused;
      toggle.textContent = userPaused ? 'Play' : 'Pause';
      sync();
    });
    new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible && !frame.getAttribute('src')) frame.src = frame.dataset.src;
      if (visible && !typed){ typed = true; typeLines(term, AI_PIECES[i].lines); }
      sync();
    }, { rootMargin: '150px 0px' }).observe(piece);
  });
}
function typeLines(el, lines){
  const P = '<span class="ai-term__p">›</span> ';
  if (REDUCED){ el.innerHTML = lines.map(l => P + l).join('\n'); return; }
  let li = 0, ci = 0, out = '';
  const tick = () => {
    if (li >= lines.length){ el.innerHTML = out + '<span class="ai-term__caret"></span>'; return; }
    const line = lines[li];
    ci++;
    el.innerHTML = out + P + line.slice(0, ci) + '<span class="ai-term__caret"></span>';
    if (ci >= line.length){ out += P + line + '\n'; li++; ci = 0; setTimeout(tick, 260); }
    else setTimeout(tick, 16 + Math.random() * 30);
  };
  tick();
}

/* =========================================================
   LIGHTBOX
   ========================================================= */
let lbP = 0, lbI = 0, lastFocus = null;
const lb = $('#lightbox'), lbImg = $('#lightboxImg');

function openLightbox(index){
  lastFocus = document.activeElement;
  lbP = index; lbI = 0;
  renderLightbox(true);
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
  $('#lightboxClose').focus({ preventScroll: true });
}
function closeLightbox(){
  lb.classList.remove('open');
  const fr = $('#lightboxFrame'); fr.hidden = true; fr.src = 'about:blank';
  document.body.style.overflow = '';
  if (lastFocus) lastFocus.focus({ preventScroll: true });
}
function renderLightbox(instant){
  const p = PROJECTS[lbP];
  const frame = $('#lightboxFrame');
  frame.hidden = !p.loop; lbImg.hidden = !!p.loop;
  if (p.loop && frame.getAttribute('src') !== p.loop) frame.src = p.loop;
  const apply = () => {
    lbImg.src = p.images[lbI]; lbImg.alt = `${p.title} — image ${lbI + 1}`;
    lbImg.onload = () => lbImg.classList.remove('swap');
    if (lbImg.complete) lbImg.classList.remove('swap');
  };
  if (p.loop) { /* live frame shown instead */ } else if (instant) apply(); else { lbImg.classList.add('swap'); setTimeout(apply, 180); }
  $('#lightboxCat').textContent = `${pad(lbP + 1)} — ${p.categoryLabel} — ${p.year}`;
  $('#lightboxTitle').textContent = p.title;
  $('#lightboxDesc').textContent = p.desc;
  lb.classList.toggle('is-ai', !!p.ai);
  const multi = p.images.length > 1;
  $('#lightboxPrev').hidden = !multi; $('#lightboxNext').hidden = !multi;
  $('#lightboxDots').innerHTML = multi ? p.images.map((_, i) => `<button class="${i === lbI ? 'on' : ''}" data-i="${i}" aria-label="Image ${i + 1}"></button>`).join('') : '';
  $$('#lightboxDots button').forEach(b => b.addEventListener('click', () => { lbI = +b.dataset.i; renderLightbox(); }));
}
const step = d => { const n = PROJECTS[lbP].images.length; if (n < 2) return; lbI = (lbI + d + n) % n; renderLightbox(); };
function initLightbox(){
  $('#lightboxClose').addEventListener('click', closeLightbox);
  $('#lightboxNext').addEventListener('click', () => step(1));
  $('#lightboxPrev').addEventListener('click', () => step(-1));
  lb.addEventListener('click', e => { if (e.target === lb) closeLightbox(); });
  document.addEventListener('keydown', e => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') step(1);
    if (e.key === 'ArrowLeft') step(-1);
  });
  // swipe
  let sx = null;
  lb.addEventListener('touchstart', e => sx = e.touches[0].clientX, { passive: true });
  lb.addEventListener('touchend', e => {
    if (sx === null) return;
    const dx = e.changedTouches[0].clientX - sx;
    if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
    sx = null;
  });
}

/* =========================================================
   SCROLL REVEALS
   ========================================================= */
function observeCards(){
  const io = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting){
        setTimeout(() => entry.target.classList.add('in'), (i % 3) * 110);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  $$('.card').forEach(c => io.observe(c));
}
function startReveals(){
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('in');
      io.unobserve(entry.target);
      const n = $('[data-count]', entry.target) || (entry.target.dataset.count !== undefined && entry.target);
      if (n) countUp(n);
    });
  }, { threshold: 0.15 });
  $$('.reveal, .reveal-line, [data-split-words]').forEach(el => io.observe(el));
}
function countUp(el){
  const to = +el.dataset.count, from = +(el.dataset.from || 0), dur = REDUCED ? 1 : 1600;
  const t0 = performance.now();
  const run = now => {
    const t = clamp((now - t0) / dur, 0, 1), e = 1 - Math.pow(1 - t, 4);
    el.textContent = Math.round(from + (to - from) * e);
    if (t < 1) requestAnimationFrame(run);
  };
  requestAnimationFrame(run);
}

/* about title fills word by word as you scroll through it */
const fillWords = fillTitle ? $$('.fw', fillTitle) : [];
function updateFill(){
  if (!fillTitle) return;
  const r = fillTitle.getBoundingClientRect();
  const p = clamp((vh * 0.85 - r.top) / (r.height + vh * 0.35), 0, 1);
  const lit = Math.floor(p * (fillWords.length + 1));
  fillWords.forEach((w, i) => w.classList.toggle('lit', i < lit));
}

/* giant footer name — spotlight follows the cursor, rises on scroll */
const bigname = $('#bigname span');
function updateBigname(){
  if (!bigname) return;
  const r = bigname.getBoundingClientRect();
  if (r.top > vh || r.bottom < 0) return;
  bigname.style.setProperty('--bx', ((mouse.sx - r.left) / r.width * 100) + '%');
  bigname.style.setProperty('--by', ((mouse.sy - r.top) / r.height * 100) + '%');
  const p = clamp(1 - (r.top - vh * 0.4) / (vh * 0.6), 0, 1);
  bigname.style.setProperty('--bny', (30 - p * 30) + '%');
}

/* =========================================================
   COPY EMAIL + TOAST
   ========================================================= */
const toast = $('#toast');
let toastT;
function showToast(msg){
  toast.textContent = msg; toast.classList.add('show');
  clearTimeout(toastT); toastT = setTimeout(() => toast.classList.remove('show'), 2400);
}
$('#copyEmail').addEventListener('click', async () => {
  const email = $('#email').textContent.trim();
  try { await navigator.clipboard.writeText(email); showToast('Email copied ✓'); }
  catch { showToast(email); }
});

/* =========================================================
   CHAOS MODE — type "chaos" anywhere, or click the logo 5×
   ========================================================= */
(function chaos(){
  let buf = '', clicks = 0, clickT;
  const toggle = () => {
    const on = document.body.classList.toggle('chaos');
    showToast(on ? '⚡ Chaos mode: ON — type it again to escape' : 'Order restored');
  };
  document.addEventListener('keydown', e => {
    if (e.target.matches('input, textarea')) return;
    buf = (buf + e.key.toLowerCase()).slice(-5);
    if (buf === 'chaos') { toggle(); buf = ''; }
  });
  $('.nav__logo').addEventListener('click', () => {
    clicks++; clearTimeout(clickT); clickT = setTimeout(() => clicks = 0, 1200);
    if (clicks >= 5){ clicks = 0; toggle(); }
  });
  // skill pills get a random tilt
  $$('.skills-list li').forEach(li => li.style.setProperty('--rot', (Math.random() * 14 - 7).toFixed(1) + 'deg'));
})();

/* =========================================================
   MAIN LOOP
   ========================================================= */
const progressBar = $('#progress'), navEl = $('#nav');
let navLastY = 0;
function frame(){
  scroll.y = scrollY;
  scroll.vel = lerp(scroll.vel, scroll.y - scroll.last, .2);
  scroll.last = scroll.y;
  mouse.sx = lerp(mouse.sx, mouse.x, .14);
  mouse.sy = lerp(mouse.sy, mouse.y, .14);
  mouse.vx *= .85; mouse.vy *= .85;

  // cursor
  if (FINE){
    cursor.style.transform = `translate3d(${mouse.sx}px, ${mouse.sy}px, 0)`;
    dot.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0)`;
    if (trail) trail.draw();
    updatePreview();
  }

  // progress + nav hide
  const max = document.documentElement.scrollHeight - vh;
  progressBar.style.transform = `scaleX(${max > 0 ? scroll.y / max : 0})`;
  if (Math.abs(scroll.y - navLastY) > 8){
    navEl.classList.toggle('hide', scroll.y > navLastY && scroll.y > vh * 0.6 && !$('#mobileMenu').classList.contains('open'));
    navLastY = scroll.y;
  }

  // skew on velocity
  if (!REDUCED) document.documentElement.style.setProperty('--skew', clamp(-scroll.vel * 0.4, -14, 14).toFixed(2) + 'deg');

  if (heroGL) heroGL.render();
  updateHero();
  if (!REDUCED) updateMarquees();
  updateReel();
  updateFill();
  updateBigname();
  requestAnimationFrame(frame);
}

/* =========================================================
   INIT
   ========================================================= */
$('#year').textContent = new Date().getFullYear();
const statProjects = $('#statProjects');
if (statProjects) statProjects.dataset.count = PROJECTS.length;
buildWork();
buildAILab();
initFilters();
initLightbox();
buildReel();
window.addEventListener('resize', () => { vw = innerWidth; vh = innerHeight; layoutReel(); });
requestAnimationFrame(frame);

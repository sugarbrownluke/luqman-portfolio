/* =========================================================
   LUQMAN HAKEEM — PORTFOLIO
   Vanilla JS. Edit the PROJECTS array below to add/remove work —
   everything else (grid, filters, lightbox) renders from it.
   ========================================================= */

const PROJECTS = [
  {
    title: "TechRat",
    category: "branding",
    categoryLabel: "Brand Identity",
    year: "2026",
    size: "wide",
    images: ["assets/img/brand-techrat-cover.jpg", "assets/img/brand-techrat-system.jpg", "assets/img/brand-techrat-exploration.jpg"],
    desc: "A full identity system for a PC & laptop repair brand — logomark exploration through to final lockups across light, dark and reversed backgrounds."
  },
  {
    title: "TechRat MY",
    category: "web",
    categoryLabel: "Web Design",
    year: "2026",
    size: "tall",
    images: ["assets/img/web-techratmy-site.jpg"],
    desc: "Website design for Techrat MY — a Kajang-based PC and laptop repair shop. Dark UI, straight-talk copy, and a services + pricing structure built to convert WhatsApp enquiries."
  },
  {
    title: "Stash Padu × ASNB",
    category: "branding",
    categoryLabel: "Campaign Concept",
    year: "2025",
    size: "normal",
    images: ["assets/img/campaign-stashpadu-idea.jpg", "assets/img/campaign-stashpadu-overview.jpg"],
    desc: "A detective-themed investment campaign concept for ASNB, built around the idea of a 'stash padu' — encouraging Gen Z to investigate their friends' saving habits."
  },
  {
    title: "Product Visualization",
    category: "3d",
    categoryLabel: "3D & Product",
    year: "2022",
    size: "normal",
    images: ["assets/img/product-watch.jpg", "assets/img/product-skincare.jpg"],
    desc: "Studio-style 3D renders — a wristwatch and a men's skincare set — built for clean, editable product photography without a camera."
  },
  {
    title: "Montigo",
    category: "3d",
    categoryLabel: "3D & Retail Concept",
    year: "2025",
    size: "wide",
    images: ["assets/img/product-montigo.jpg"],
    desc: "A branded retail/vending concept environment modelled and rendered in 3D, from shelf layout to signage."
  },
  {
    title: "Metallicorn",
    category: "art",
    categoryLabel: "Digital Art & Apparel",
    year: "2023",
    size: "normal",
    images: ["assets/img/art-metallicorn-graphic.png", "assets/img/art-metallicorn-tee.png"],
    desc: "A vintage-metal-poster style illustration — a guitar-shredding unicorn — designed as standalone art and mocked up as apparel print."
  },
  {
    title: "Photo Manipulation Poster",
    category: "art",
    categoryLabel: "Digital Art",
    year: "2025",
    size: "normal",
    images: ["assets/img/art-torii-portrait.jpg"],
    desc: "A composited portrait piece blending photography with illustrated elements and a red-and-blue duotone treatment."
  },
  {
    title: "Rockify",
    category: "ui",
    categoryLabel: "UI / UX",
    year: "2024",
    size: "wide",
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
    size: "normal",
    images: ["assets/img/campaign-myvi-ad.jpg"],
    desc: "A playful print ad concept for the Perodua MYVI — 'Is it a bird? Is it a plane? No, it's King of the Road.'"
  },
  {
    title: "Aga's Jello",
    category: "branding",
    categoryLabel: "Packaging Design",
    year: "2025",
    size: "narrow",
    images: ["assets/img/brand-agasjello-packaging.jpg"],
    desc: "Packaging design for Malaysia's first chocolate jelly bar — bold color-blocking built to pop on a crowded shelf."
  }
];

/* =========================================================
   LOADER
   ========================================================= */
(function loader(){
  const loaderEl = document.getElementById('loader');
  const countEl = document.getElementById('loaderCount');
  const barEl = document.getElementById('loaderBar');
  let n = 0;
  const finish = () => {
    countEl.textContent = '100';
    barEl.style.width = '100%';
    setTimeout(() => {
      loaderEl.classList.add('done');
      document.body.classList.add('loaded');
      startReveals();
    }, 350);
  };
  const tick = () => {
    n += Math.floor(Math.random() * 18) + 6;
    if (n >= 100) { finish(); return; }
    countEl.textContent = n;
    barEl.style.width = n + '%';
    setTimeout(tick, 90 + Math.random() * 120);
  };
  let started = false;
  const begin = () => { if (started) return; started = true; tick(); };
  if (document.readyState === 'complete') {
    setTimeout(begin, 200);
  } else {
    window.addEventListener('load', () => setTimeout(begin, 200));
  }
  // Fallback in case 'load' is slow to fire
  setTimeout(begin, 1800);
})();

/* =========================================================
   CUSTOM CURSOR
   ========================================================= */
(function cursor(){
  const cur = document.getElementById('cursor');
  if (!cur || !window.matchMedia('(hover:hover) and (pointer:fine)').matches) return;
  let mx = 0, my = 0, rx = 0, ry = 0;
  window.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
  function raf(){
    rx += (mx - rx) * 0.18;
    ry += (my - ry) * 0.18;
    cur.style.transform = `translate(${rx}px, ${ry}px)`;
    requestAnimationFrame(raf);
  }
  raf();
  document.addEventListener('mouseover', e => {
    if (e.target.closest('[data-hover], a, button, .card')) cur.classList.add('active');
  });
  document.addEventListener('mouseout', e => {
    if (e.target.closest('[data-hover], a, button, .card')) cur.classList.remove('active');
  });
})();

/* =========================================================
   SCROLL PROGRESS BAR
   ========================================================= */
(function progress(){
  const bar = document.getElementById('progress');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const h = document.documentElement;
    const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
    bar.style.width = scrolled + '%';
  }, { passive: true });
})();

/* =========================================================
   NAV: mobile menu + hide-on-scroll
   ========================================================= */
(function nav(){
  const burger = document.getElementById('burger');
  const menu = document.getElementById('mobileMenu');
  if (burger) {
    burger.addEventListener('click', () => menu.classList.toggle('open'));
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));
  }
})();

/* =========================================================
   HERO PARALLAX (subtle, respects reduced motion)
   ========================================================= */
(function heroParallax(){
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const words = document.querySelectorAll('.hero__title .word');
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    words.forEach((w, i) => {
      const speed = 0.06 + i * 0.03;
      w.style.transform = `translateY(${y * speed}px)`;
    });
  }, { passive: true });
})();

/* =========================================================
   MARQUEE (seamless infinite loop)
   Duplicates each track's content until it's at least as wide
   as the viewport, then doubles it exactly once more so the
   CSS "translateX(-50%)" keyframe always lands on a perfect
   repeat — no matter the screen width or how the words change.
   ========================================================= */
function initMarquees(){
  document.querySelectorAll('[data-marquee]').forEach(track => {
    const base = track.innerHTML.trim();
    if (!base) return;
    track.innerHTML = base;
    let guard = 0;
    while (track.scrollWidth < window.innerWidth * 1.2 && guard < 16) {
      track.innerHTML += base;
      guard++;
    }
    track.innerHTML += track.innerHTML;
  });
}

/* =========================================================
   BUILD PROJECT GRID
   ========================================================= */
function buildGrid(){
  const grid = document.getElementById('grid');
  grid.innerHTML = PROJECTS.map((p, i) => {
    return `
    <article class="card" data-cat="${p.category}" data-index="${i}">
      <div class="card__media">
        <img src="${p.images[0]}" alt="${p.title}" loading="lazy">
        <span class="card__tag">${p.categoryLabel}</span>
        <span class="card__view">↗</span>
      </div>
      <div class="card__body">
        <h3 class="card__title">${p.title}</h3>
        <span class="card__year">${p.year}</span>
      </div>
    </article>`;
  }).join('');

  grid.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => openLightbox(parseInt(card.dataset.index, 10)));
  });

  observeCards();
}

/* =========================================================
   FILTERS
   ========================================================= */
function initFilters(){
  const buttons = document.querySelectorAll('.filter');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      document.querySelectorAll('.card').forEach(card => {
        const show = f === 'all' || card.dataset.cat === f;
        card.classList.toggle('hidden', !show);
      });
    });
  });
}

/* =========================================================
   LIGHTBOX
   ========================================================= */
let lbProjectIndex = 0;
let lbImageIndex = 0;

function openLightbox(index){
  lbProjectIndex = index;
  lbImageIndex = 0;
  renderLightbox();
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox(){
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}
function renderLightbox(){
  const p = PROJECTS[lbProjectIndex];
  document.getElementById('lightboxImg').src = p.images[lbImageIndex];
  document.getElementById('lightboxImg').alt = p.title;
  document.getElementById('lightboxCat').textContent = p.categoryLabel + ' — ' + p.year +
    (p.images.length > 1 ? `  (${lbImageIndex + 1}/${p.images.length})` : '');
  document.getElementById('lightboxTitle').textContent = p.title;
  document.getElementById('lightboxDesc').textContent = p.desc;
}
function nextImage(){
  const p = PROJECTS[lbProjectIndex];
  lbImageIndex = (lbImageIndex + 1) % p.images.length;
  renderLightbox();
}
function prevImage(){
  const p = PROJECTS[lbProjectIndex];
  lbImageIndex = (lbImageIndex - 1 + p.images.length) % p.images.length;
  renderLightbox();
}
function initLightbox(){
  document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
  document.getElementById('lightboxNext').addEventListener('click', nextImage);
  document.getElementById('lightboxPrev').addEventListener('click', prevImage);
  document.getElementById('lightbox').addEventListener('click', e => {
    if (e.target.id === 'lightbox') closeLightbox();
  });
  document.addEventListener('keydown', e => {
    if (!document.getElementById('lightbox').classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  });
}

/* =========================================================
   SCROLL REVEALS (IntersectionObserver)
   ========================================================= */
function observeCards(){
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('in'), (i % 3) * 90);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.card').forEach(c => io.observe(c));
}

function startReveals(){
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal, .reveal-line, .about__media').forEach(el => io.observe(el));
}

/* =========================================================
   GLITCH TRIGGER (occasional auto-flicker on hero name)
   ========================================================= */
(function autoGlitch(){
  const el = document.querySelector('.hero__title .glitch');
  if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  setInterval(() => {
    el.classList.add('glitching');
    setTimeout(() => el.classList.remove('glitching'), 220);
  }, 3800);
})();

/* =========================================================
   INIT
   ========================================================= */
document.getElementById('year').textContent = new Date().getFullYear();
buildGrid();
initFilters();
initLightbox();
initMarquees();

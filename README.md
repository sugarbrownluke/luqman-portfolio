# Luqman Hakeem — Portfolio

A custom-coded, animation-heavy portfolio site. No frameworks, no build step —
just `index.html`, `css/style.css`, and `js/script.js`. Ready to push straight to
GitHub Pages.

## What's inside

- Custom cursor, scroll-triggered reveals, glitch-text effect, marquee tickers,
  a filterable project grid, and a keyboard-friendly lightbox — all hand-coded.
- All 9 projects and their images already wired up in `js/script.js` (see the
  `PROJECTS` array at the top of the file).

## Before you publish — things to edit

1. **Bio** — `index.html`, the `<section class="about">` block. Search for
   `EDIT ME` comments.
2. **Tools list** — same section, the `<ul class="skills-list">`.
3. **Social links** — `index.html`, the `<div class="contact__links">` block.
   Currently point to `#` — swap in your real Instagram / Behance / LinkedIn URLs.
4. **Project descriptions** — `js/script.js`, the `desc` field on each project
   in the `PROJECTS` array. Written from what's visible in the images — replace
   with your own client/brief details where you have them.
5. **Colors** — `css/style.css`, the `:root { ... }` block at the top. Change
   `--accent` / `--accent-2` to re-skin the whole site in one edit.

## Deploying to GitHub Pages

1. Create a new repository on GitHub (e.g. `luqman-portfolio`).
2. From this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. On GitHub: go to **Settings → Pages**, set **Source** to `Deploy from a branch`,
   branch `main`, folder `/ (root)`, then **Save**.
4. Your site will be live in a minute or two at:
   `https://<your-username>.github.io/<repo-name>/`

   If you want it at the root of `<your-username>.github.io` instead, name the
   repository exactly `<your-username>.github.io`.

## Running it locally

No build tools needed — any static server works:
```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Notes

- Images are already resized/compressed for the web (~6MB total for all 18).
- The site respects `prefers-reduced-motion` and disables the custom cursor on
  touch devices automatically.
- Google Fonts (Anton + Space Grotesk) load from a CDN — no local font files
  to manage.

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Tech Stack

- **Framework**: Astro 5 (static output, `output: 'static'`, no adapter)
- **Styling**: Tailwind CSS v4 (CSS-first; tokens in a `@theme {}` block — no `tailwind.config.js`)
- **CMS**: Keystatic in **local storage mode** (admin at `/keystatic`, dev-only)
- **Rich text**: Markdoc (`@astrojs/markdoc`) for Keystatic `document` fields
- **Motion**: GSAP + ScrollTrigger (vanilla, no framework island)
- **React**: present only for the Keystatic admin UI (dev); the production site ships no React
- **Language**: TypeScript
- **Deployment**: Firebase Hosting (static `dist/`) via GitHub Actions CI/CD

## Design

The visual system is the "Stark Systems HUD" theme — see
[docs/stitch_stark_systems_hud_portfolio/code.html](docs/stitch_stark_systems_hud_portfolio/code.html)
and [DESIGN.md](docs/stitch_stark_systems_hud_portfolio/DESIGN.md). Deep-space background
(`#05070f`), holographic cyan (`slate-cyan #00f0ff`), stark amber/red accents, Space Grotesk /
JetBrains Mono / Space Mono fonts, tech-grid + scanline overlays, glassmorphic corner-bracket
cards, and a live HUD telemetry strip.

## Development Commands

```bash
npm install          # Install dependencies
npm run dev          # Dev server at http://localhost:3000 (includes /keystatic admin)
npm run build        # Static build to dist/ (Keystatic admin excluded)
npm run preview      # Preview the production build
```

## Content & CMS

All site content is managed through Keystatic in **local mode**:

1. Run `npm run dev` and open `http://localhost:3000/keystatic`.
2. Edit visually — changes write files directly into the repo:
   - **Site Settings** (singleton): [src/data/settings/index.yaml](src/data/settings/index.yaml) —
     hero copy, core stack, about body, contact links, skill groups.
   - **Projects** (collection): `src/content/projects/*.mdoc` — frontmatter + Markdoc body
     (the `description`). Images upload to `src/assets/images/projects/` (Astro-optimized).
   - **Achievements** (collection): `src/content/achievements/*.mdoc`. Preview images go to
     `src/assets/images/achievements/`; certificate PDFs go to `public/achievements/`.
3. Commit & push. GitHub Actions rebuilds and deploys to Firebase. No code edits required.

The Keystatic schema is [keystatic.config.ts](keystatic.config.ts); the matching Astro
read-side schemas are [src/content/config.ts](src/content/config.ts). The `siteSettings`
singleton is read via Keystatic's `createReader` in [src/lib/content.ts](src/lib/content.ts);
collections are read with Astro's `getCollection` / `render`.

## Architecture

- [src/layouts/BaseLayout.astro](src/layouts/BaseLayout.astro) — `<head>` SEO/meta, fonts,
  tech-grid + scanline overlays, and the HUD chrome (top bar, nav, footer).
- [src/pages/index.astro](src/pages/index.astro) — composes hero → featured project stages →
  Production Track → 42 Cursus → Achievements → Capability Matrix → About.
- **Components** (`src/components/*.astro`): `ProjectStage` (featured "App-Store" product card),
  `ProjectCard` (compact grid card), `TerminalLog`, `AchievementCard`, `StatusChip`,
  `CornerBracketCard`, `HudNavBar`, `HudTopBar`, `Footer`, `JsonLd`.
- **Client scripts** (`src/scripts/*.ts`, bundled by Astro): `revealScroll.ts`
  (IntersectionObserver `.is-visible` toggle), `telemetry.ts` (live HUD clock/latency),
  `projectMotion.ts` (GSAP ScrollTrigger choreography for featured stages).
- Motion respects `prefers-reduced-motion`.

### Project accent / status

Each project has `accent` (cyan/amber/red → HUD color), `status` (online/standby/critical →
`StatusChip`), `featured` (renders as a full-screen `ProjectStage` vs a compact `ProjectCard`),
and `category` (professional / 42-school / personal → which section it appears in).

## Deployment

Firebase Hosting serves `dist/` ([firebase.json](firebase.json) — `cleanUrls`, no SPA rewrite).
CI/CD in `.github/workflows/`:
- `firebase-hosting-merge.yml` — deploys to production (channel `live`) on push to `main`.
- `firebase-hosting-pull-request.yml` — preview deploys for PRs.

Both pin Node 20 via `actions/setup-node` and run `npm ci && npm run build`. The
`@astrojs/sitemap` integration emits `dist/sitemap-index.xml` during the build.

## Adding a New Section

Sections are composed in [src/pages/index.astro](src/pages/index.astro). To make a section's
content CMS-editable, add fields to the `siteSettings` singleton (or a new collection) in
[keystatic.config.ts](keystatic.config.ts), mirror any collection schema in
[src/content/config.ts](src/content/config.ts), then render it in `index.astro`.

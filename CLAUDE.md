# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Static marketing microsite for COPE Málaga's **Feria de Málaga 2024**. Built with Astro 4 + Tailwind, deployed to Vercel as a fully static site. Content is in Spanish (`lang="es-ES"`). The only dynamic piece is a Firebase Firestore voting form.

## Commands

The project has both `bun.lockb` and `package-lock.json`; `bun` is the primary package manager.

- `bun install` — install dependencies
- `bun dev` (`astro dev`) — local dev server
- `bun run build` (`astro build`) — production build to `dist/`
- `bun run preview` — serve the built site
- `bun run check` (`astro check`) — TypeScript / Astro diagnostics; the closest thing to a test/lint step
- `bun run format` (`prettier --write .`) — format all files

There is no test suite. Prettier config lives in `package.json` (tabs, no semicolons, single quotes, `printWidth: 160`, avoid arrow parens) and runs on save in VS Code.

## Architecture

Every route is a standalone `.astro` page in `src/pages/` — there is no content collection or CMS. Adding a section = adding a page and wiring it into the menu.

**Page shell (`src/layouts/Layout.astro`).** All pages wrap their content in `Layout`, which renders `<Header>`, `<main>` with a `<slot />`, `<Navigation>`, `<Footer>`, and `<Menu>`. It also injects all third-party marketing/consent scripts inline in `<head>`: Didomi (privacy/consent), Google Tag Manager + gtag, and comScore. Layout props drive shared chrome:
- `variation` (1–4): a theme/color scheme number threaded through Header, Navigation, Footer, Split, and Menu via `class:list` conditionals. It controls the blue accent panels and text colors per page. When editing a page's look, trace `variation` through those components rather than restyling locally.
- `linkPrev` / `linkNext` (+ `...Mobile` variants): prev/next navigation between the site's linear section flow.
- `adsMobile`: sponsor ads rendered as a fixed bottom bar on mobile.

**Client behavior (`src/main.ts`).** A single `allScripts()` function wires up ALL interactivity via event listeners: menu toggle (`.toggle-menu` toggles `group-open-menu` on `<html>`), the lightbox modal (`.open-in-modal` — builds a `<dialog>` for video/image and optional `data-txt*` captions), the scroll `reveal`→`revealed` IntersectionObserver animation, the timeline image switcher, and the ad dismiss button. Because the site uses Astro `<ViewTransitions />`, `allScripts()` is re-run on `astro:after-swap` — any new interactive markup must use these same class hooks (`.toggle-menu`, `.open-in-modal`, `.reveal`, `.set-timeline`, `.close-ads`) to keep working across client-side navigations. `astro:before-preparation` forces a "back" slide transition when navigating home or via `data-direction="back"`.

**Data (`src/utils/data-*.ts`).** Page content lists (feria participants, timeline, greetings, journals, posters, recommendations) are plain exported arrays of objects that `import` their images from `$assets/...`, so images are optimized by Astro's `<Image>` pipeline. Edit content here, not inline in pages.

**Voting (`votaciones.astro` + `firestore.rules`).** The `/votaciones` page writes to the `votos-2026` Firestore collection (project `votacion-cope`) — a collection per edition, so this year's votes don't mix with `votos`, which holds 2024's. Note it does NOT import `firebase.js`; it inlines its own Firebase init inside a page `<script type="module">` (loaded from the gstatic CDN). `firebase.js` at the repo root is a parallel/unused copy of the same config and still points at the old `votos`. Duplicate-vote prevention is client-side only (`localStorage.hasVoted2026`). The Firebase config (API key included) is public client config, committed intentionally.

**If you rename that collection, change `firestore.rules` too.** Firestore denies anything without a matching rule, so a new collection name fails with "Missing or insufficient permissions" until the rules follow — which is exactly what broke the 2026 vote until 14/08. The rules used to live only in the Firebase console; they are now in the repo and ship with `npx --yes firebase-tools deploy --only firestore:rules` (needs `firebase login` once). Deploying is a separate step from the Vercel deploy: pushing to `main` does NOT publish rules.

## Conventions

- **Path aliases** (`tsconfig.json`): `$assets/*`, `$components/*`, `$content/*`, `$layouts/*`, `$utils/*` → `src/*`. Always use these instead of relative paths.
- **Styling** is Tailwind-only. Global CSS lives in `src/main.css` under `@layer` blocks — custom `.container`, `.button`, `.prose`, font-face declarations, and the `<dialog>` modal transition styling. Custom theme in `tailwind.config.ts`: brand colors (`blue`/`orange`/`lime`), custom fonts (`sans`/`condensed`/`serif`), a generated large `spacing` scale (17rem–96rem), an `xs: 430px` breakpoint, and `reveal:`/`revealed:` variants for the scroll animation.
- **Fonts** are self-hosted woff2 in `src/assets/fonts/`, declared in `main.css`.
- New pages: base URLs are clean (Vercel `cleanUrls`, no trailing slash) — link with paths like `/saludos`, not `/saludos.html`.

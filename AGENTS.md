# Ksp Solutions website

Marketing site for Ksp Solutions (pipe-inspection robot + analysis software). Next.js 15 (App Router), React 19, TypeScript strict. Only extra runtime dependency: `motion`.

## Commands
- `npm run dev`: dev server
- `npm run build`: production build (also type-checks)
- `npx tsc --noEmit`: type-check only

## Layout
- `app/layout.tsx`: fonts (`next/font/google`) and metadata
- `app/page.tsx`: all page content; section data lives in the `software` and `steps` arrays at the top
- `app/globals.css`: all styling; colour tokens are CSS variables in `:root`
- `components/HeroScroll.tsx`: sticky scroll hero where the hovering crawler comes apart (`motion`); `components/Crawler.tsx`: the crawler drawing, parts and diagram labels

## Conventions
- Plain CSS in `globals.css`; no Tailwind or CSS-in-JS. Use the `:root` variables instead of hard-coded colours.
- Server components by default. Add `"use client"` only when state or browser APIs are needed.
- Import with the `@/` alias.
- Keep copy plain and specific: sentence case, active voice, buttons that say what happens.
- Accessibility floor: visible `:focus-visible`, `prefers-reduced-motion` respected, mobile layout works (breakpoint at 52rem).
- Motion is limited to the hero crawler (hover, scroll-driven disassembly). Don't add scroll-reveal or hover animations everywhere.
- Don't add dependencies for things CSS or the platform already does.

## Placeholders
Company copy, the email `hello@kspsolutions.example`, and the footer note are placeholders. Replace them with real details when provided.

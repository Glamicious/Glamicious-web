# Glamicious — Website

Responsive Next.js implementation of the Glamicious beauty & wellness booking
landing page, built from the "Lilac · Website home" and "မြန်မာ · Website home"
design boards.

## Locales

- `/` — English
- `/my` — Burmese (မြန်မာ), with its own typography (Noto Sans Myanmar,
  taller line-heights, weight 700 headings) and Myanmar numerals, per the
  design board. The pill button in the header switches locale.

All copy lives in `lib/dictionaries.ts`; both routes render the same
`components/HomePage.tsx` with their dictionary.

## Tech

- [Next.js 15](https://nextjs.org) (App Router) + React 19 + TypeScript
- Plain CSS with design tokens (`app/globals.css`) — no CSS framework
- Self-hosted fonts (Plus Jakarta Sans, Pacifico, Noto Sans Myanmar)
- The doll brand mark is an inline SVG React component (`components/Doll.tsx`)

## Responsive breakpoints

The layout is mobile-first and verified down to 280px wide:

| Range        | Devices                              | Layout |
| ------------ | ------------------------------------ | ------ |
| ≤ 639px      | Phones, foldables (cover screen)     | Stacked sections, card-style search form, 2-col treatment grid, hamburger menu |
| 640–1023px   | Foldables (unfolded), iPad portrait  | Pill search bar, 3-col treatments, 2-col salon cards, hamburger menu |
| ≥ 1024px     | iPad landscape, laptop, desktop      | Full navigation bar, 6-col treatments, 4-col salon cards |

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

## Structure

```
app/
  layout.tsx      — root layout, metadata, global styles
  page.tsx        — English home page (/)
  my/page.tsx     — Burmese home page (/my)
  globals.css     — fonts, design tokens, all component styles
lib/
  dictionaries.ts — all strings for both locales
components/
  HomePage.tsx    — shared page shell, renders a locale's dictionary
  Header.tsx      — sticky header with mobile menu (client component)
  Hero.tsx        — hero with search form and floating card
  Treatments.tsx  — browse-by-treatment grid
  Deals.tsx       — Black Friday banner
  Salons.tsx      — trending salons & spas cards
  HowItWorks.tsx  — 3-step explainer
  Partners.tsx    — salon-owner CTA with schedule panel
  AppCta.tsx      — app download banner
  Footer.tsx      — footer navigation
  Doll.tsx        — Glamicious doll logo (SVG, lilac theme)
  icons.tsx       — shared stroke icons
public/
  images/         — photos from the design
  fonts/          — self-hosted woff2 subsets
```

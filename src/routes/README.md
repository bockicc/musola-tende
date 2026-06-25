# Routes

This directory contains all route definitions for TanStack Router.

## Structure

- `__root.tsx` — Root layout wrapping all routes with Navbar, Footer, PageTransition
- `index.tsx` — Home page (/) with all sections
- `proizvodi.tsx` — Product listing page (/proizvodi) with filters
- `proizvodi.$slug.tsx` — Individual product detail page (/proizvodi/:slug)
- `galerija.tsx` — Gallery/references page (/galerija)
- `kontakt.tsx` — Contact page (/kontakt) with form and info
- `o-nama.tsx` — About page (/o-nama)

## Conventions

- All visible text is imported from `src/data/content.sr.ts` (Serbian Latin)
- Each route is created with `createFileRoute` from `@tanstack/react-router`
- Routes use section components from `src/components/sections/`

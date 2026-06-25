# AGENTS.md — SZR Musola Tende

This file helps AI agents understand the project conventions.

## Tech Stack
- React 19 + TypeScript + Vite
- TanStack Router (file-based routing in src/routes/)
- Tailwind CSS v3 + shadcn/ui
- Framer Motion for animations
- Lucide React for icons
- react-hook-form + zod for forms

## Key Conventions
- **All UI text** goes in `src/data/content.sr.ts` in Serbian (Latin script)
- Import content via `import content from '@/data/content.sr'`
- Use `@/` path alias for src/ imports
- Use `cn()` from `@/lib/cn` for conditional classes
- All UI components use dark theme (neutral-800/900/950, white text, teal-500 accent)
- Components use `forwardRef` + `displayName` where appropriate

## Routes
- `__root.tsx` wraps with Navbar, Footer, PageTransition
- `index.tsx` = home page
- `proizvodi.tsx` = product listing
- `proizvodi.$slug.tsx` = product detail
- `galerija.tsx` = gallery
- `kontakt.tsx` = contact
- `o-nama.tsx` = about

## Commands
- `bun dev` — Start dev server
- `bun run build` — Production build
- `bun run lint` — ESLint check
- `bun run typecheck` — TypeScript check

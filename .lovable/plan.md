# SZR Musola Tende - Website Plan

## Project Overview
Premium dark-themed website for SZR Musola Tende, a custom shading-solutions company based in Novi Sad, Serbia with 15+ years of experience.

## Design System
- **Base**: Dark charcoal (#0A0D10 / hsl(0 0% 3.9%))
- **Accent**: Premium Teal (#2DD4BF / hsl(172 66% 50%))
- **Warm accent**: Craftsmanship Gold (#C9A24B)
- **Typography**: Inter (body), Cabinet Grotesk (headings)
- **Style**: Dark, premium, minimalist with subtle animations

## Pages
1. **Home** (/) — Hero, TrustStrip, BentoGrid, Featured products, KPI counters, About section, Reference marquee, Contact cards
2. **Products** (/proizvodi) — Filter bar + product grid
3. **Product Detail** (/proizvodi/$slug) — Full product page with lightbox
4. **Gallery** (/galerija) — Masonry gallery of references
5. **About** (/o-nama) — Company info, stats, trust
6. **Contact** (/kontakt) — Form + contact info cards

## Architecture
- **Framework**: React 19 + TypeScript + Vite
- **Routing**: TanStack Router (file-based)
- **Styling**: Tailwind CSS v3 with shadcn/ui components
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: react-hook-form + zod validation
- **Language**: Serbian (Latin) — all strings in src/data/content.sr.ts

## Component Tree
- Root Layout (__root.tsx)
  - Navbar (sticky, glass effect)
  - PageTransition (framer-motion wrapper)
  - Outlet (route content)
  - Footer (4-column dark footer)

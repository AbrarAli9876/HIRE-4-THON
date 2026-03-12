# HACK4THON Landing Page

Premium, responsive landing page for the HACK4THON 24-hour national hackathon. Built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, and Lucide icons.

## Tech Stack
- Next.js (App Router, TypeScript)
- Tailwind CSS
- Framer Motion (animations)
- Lucide React (icons)

## Getting Started
1) Install dependencies
```bash
npm install
```
2) Run the dev server
```bash
npm run dev
```
3) Open http://localhost:3000

## Editing Content
Key content lives in `src/app/page.tsx` in the config arrays (highlights, prizes, timeline, tracks, rules, FAQ). Update copy/links there. Global styling is in `src/app/globals.css` and metadata in `src/app/layout.tsx`.

## Deployment
```bash
npm run build
npm run start
```
Deploy easily to Vercel or any Node hosting that supports Next.js.

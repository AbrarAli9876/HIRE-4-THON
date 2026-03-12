# HIRE-4-THON Workspace

Monorepo layout for the HIRE-4-THON site and future services.

## Structure
- `frontend/`: Next.js (App Router, TS, Tailwind, Framer Motion, Lucide) landing page. See [frontend/README.md](frontend/README.md) for details.
- `backend/`: Placeholder for an API/server; not yet scaffolded.

## Frontend quickstart
```bash
cd frontend
npm install
npm run dev
```
Open http://localhost:3000 after the dev server starts.

## Deploy (frontend)
```bash
cd frontend
npm run build
npm run start
```
Deploy to Vercel or any Node host that supports Next.js.

## Backend
No code yet. When you scaffold it, add your stack (e.g., Express/FastAPI) and keep env secrets in `.env.local` (already gitignored via `.env*`).

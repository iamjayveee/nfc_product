# Bizkonek web app

Short-URL redirect, cafe hub (review, menu, WiFi), and private feedback.
Stack and hosting decisions: `../IDEA-SCOPE.md` §15.

## Local setup

```bash
npm install
cp .env.example .env.local
npm run db:up
npm run db:migrate
npm run db:seed-demo
npm run dev
```

Open http://localhost:3000/a/TEST2 to walk the demo path.

The local database (`compose.yaml`) is namespaced `bizkonek` and listens on
`127.0.0.1:55432`, so it does not clash with other projects' Postgres or Supabase.
`npm run db:down` stops it and keeps the data; add `-v` to `docker compose down` to wipe it.

## Checks

`npm test` (unit), `npm run lint`, `npm run build`.

## Deploying (Vercel + Supabase)

1. Supabase project in the Singapore region. Run `npm run db:migrate` (and the seed if wanted)
   with `DATABASE_URL` set to the transaction-pooler URI.
2. Vercel project with **Root Directory** `web` and the same `DATABASE_URL`.
3. Uptime monitor on `/health` (it reads the database, which keeps Supabase awake).

The `Dockerfile` builds the same app for the VPS.

## Configuration

Cafes and artifacts are rows edited directly in the database (no admin UI).
Artifact codes are 4–6 characters from `23456789ABCDEFGHJKMNPQRSTUVWXYZ`.
Only `bizkonek.com/a/<code>` goes on printed chips and QR codes; lock a chip when it leaves your hands.

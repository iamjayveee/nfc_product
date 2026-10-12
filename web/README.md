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
npm run db:seed-demo-activity   # optional: 30 days of sample taps and feedback
npm run dev
```

Open http://localhost:3000/a/TEST2 to walk the demo path, and
http://localhost:3000/dashboard/demo-cafe for the demo dashboard. The dashboard
opens only for cafes with `is_demo = true`; real cafes need owner login (not built yet).

The local database (`compose.yaml`) is namespaced `bizkonek` and listens on
`127.0.0.1:55432`, so it does not clash with other projects' Postgres or Supabase.
`npm run db:down` stops it and keeps the data; add `-v` to `docker compose down` to wipe it.

## Checks

`npm test` (unit), `npm run lint`, `npm run build`.

## Deploying (Vercel + Supabase)

1. Supabase project in the Singapore region. Put its **pooler** URI in `.env.supabase`
   (git-ignored; the direct `db.<ref>.supabase.co` host is IPv6-only), then:
   `node --env-file=.env.supabase scripts/migrate.mjs`, the seeds via `scripts/run-sql.mjs`,
   and `node --env-file=.env.supabase scripts/db-status.mjs` to check. Migration 0003 turns on
   row-level security so Supabase's public Data API cannot read any table.
2. Vercel project with **Root Directory** `web` and the same `DATABASE_URL`.
3. Uptime monitor on `/health` (it reads the database, which keeps Supabase awake).

The `Dockerfile` builds the same app for the VPS.

## Configuration

Cafes and artifacts are rows edited directly in the database (no admin UI).
Visits from link previews (Messenger, WhatsApp, etc.), crawlers, and HEAD requests
redirect normally but are not counted as taps.
Artifact codes are 4–6 characters from `23456789ABCDEFGHJKMNPQRSTUVWXYZ`.
Only `bizkonek.com/a/<code>` goes on printed chips and QR codes; lock a chip when it leaves your hands.

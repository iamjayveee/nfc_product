# Current state

Updated: 2026-10-13

- Stage: Build (2026-10-11 → 2026-10-31); build check 2026-10-24
- Code: `web/` — Next.js app: short-URL redirect + tap logging (link
  previews not counted), hub, review (private feedback + Google step),
  menu, WiFi, `/health`, demo dashboard (`/dashboard/<slug>`, demo cafes
  only). Demo path walked locally 2026-10-12. Current deployment:
  https://bizkonek.vercel.app/ (reported by Madrid, checked 2026-10-13).
  Homepage loads; `/health` returns HTTP 503 (`database unavailable`);
  `/h/demo-cafe` and `/dashboard/demo-cafe` render server errors. Deployed
  commit and end-to-end behavior are not yet verified.
- Scope: IDEA-SCOPE.md decision-ready, pending business-partner review
- Supabase: project ifrmbdqcceehijqmqypo (Singapore) migrated (0001–0003,
  RLS on) and seeded with demo data 2026-10-12; reached via session pooler
- Next action: inspect Vercel runtime logs and deployment `DATABASE_URL`
  configuration, restore database access, and verify the deployed demo path;
  register
  `bizkonek.com` (registrar their choice) by 2026-10-15; uptime monitor;
  verify free-tier terms (§16)
- Blockers: deployed app cannot complete database-backed requests; cause
  not yet established.

## Saving and resuming

- At the end of a session, rewrite the lines above to match reality.
- Record a settled choice at its owner (product or scope → IDEA-SCOPE.md §15),
  never here.
- To resume: read this file, then the CONTEXT.md route for the task.

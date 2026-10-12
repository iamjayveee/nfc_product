# Current state

Updated: 2026-10-12

- Stage: Build (2026-10-11 → 2026-10-31); build check 2026-10-24
- Code: `web/` — Next.js app: short-URL redirect + tap logging (link
  previews not counted), hub, review (private feedback + Google step),
  menu, WiFi, `/health`, demo dashboard (`/dashboard/<slug>`, demo cafes
  only). Demo path walked locally 2026-10-12. Not yet deployed.
- Scope: IDEA-SCOPE.md decision-ready, pending business-partner review
- Supabase: project ifrmbdqcceehijqmqypo (Singapore) migrated (0001–0003,
  RLS on) and seeded with demo data 2026-10-12; reached via session pooler
- Next action: commit + push, then Madrid imports the repo on Vercel (root
  `web`, `DATABASE_URL` = pooler URI); verify the deploy; register
  `bizkonek.com` (registrar their choice) by 2026-10-15; uptime monitor;
  verify free-tier terms (§16)
- Blockers: none

## Saving and resuming

- At the end of a session, rewrite the lines above to match reality.
- Record a settled choice at its owner (product or scope → IDEA-SCOPE.md §15),
  never here.
- To resume: read this file, then the CONTEXT.md route for the task.

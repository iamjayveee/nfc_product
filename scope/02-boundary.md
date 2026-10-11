# Checkpoint 02: Boundary — NFC review venture

Compressed working state after ASMP Comprehensive Step 02 (Phases E–I), not a transcript.

**Source tags:** `(F1)` foundation session 2026-10-10; `(I-n)` intake answers in `01-foundation.md`; `(B-n)` boundary answers 2026-10-11 (below); `(evidence: …)` inspected source.

| # | Question | Answer |
| --- | --- | --- |
| B-1 | Phase E boundary partition | Approved as proposed |
| B-2 | Phase F staging | Build → Pitch → Pilot approved; strictly sequential by default |
| B-3 | Market jurisdiction | Philippines |
| B-4 | Stage 1 cash budget | 10,000 (recorded as PHP, Madrid-funded; correct if partner-funded) |
| B-5 | NFC chip status | Available: 10 samples |
| B-6 | Phase I approach boundaries | All eight hold |

## 1. Document Control & Upstream Checkpoint

- Initiative: NFC review venture — Stage 1 through the 2026-11-30 pilot decision
- Based on Checkpoint: `01-foundation.md` (verified 2026-10-11)
- Date: 2026-10-11

## 2. Scope Boundaries (Phase E)

### In Scope
- Hub: leave a Google review / view menu / join WiFi (F1, I-5, B-1)
- Review page: stars + text saved as private feedback; identical Google write-a-review deep link + "Copy your review" button (F1, B-1)
- Minimal dashboard: tap counts and private feedback (I-5, B-1); demo dashboard on demo data without login for Build
- Cafe-owner dashboard access: one login per cafe, created by Madrid; built during Pitch; Pilot entry condition (R-6)
- Dynamic URL redirect service (F1, B-1)
- QR fallback printed on every artifact, same short URL as the chip (F1, B-1)
- Demo set: generic, reusable artifacts (card, badge, one 3D model) pointing to a demo hub, fabricated in-house (I-2, I-5, B-1, R-4)
- One pilot artifact per signed cafe, mapped to that cafe's hub, placed at the counter, paid on delivery (R-2, R-4, R-5)
- Pilot agreement including usage guidelines and Data Privacy Act clause (I-7, B-1, B-3)
- One pilot deployment (I-7, B-1)

### Conditional Scope
- Google review pull + AI-drafted replies — Condition: Business Profile API access approved **and** a pilot is signed; otherwise post-pilot (I-5, B-1)
- Partner pitching overlaps Build (from ~2026-10-24) — Condition: demo path walks **and** prices + Data Privacy Act items settled; Madrid pitches from 2026-11-01 (B-2, R-7)
- Additional artifacts printed on demand — Condition: cafe orders more; chip reorder if the 10 samples are exhausted (R-3)

### Out of Scope & Parked Initiatives (C8 Splitting Rule)
- Stage 2 subdomain business website — Reason: parked for future initiative per C8; pitched as direction only, no features or dates promised (I-4)
- Stage 3 agency — Reason: parked for future initiative per C8 (F1)
- Self-serve repoint feature — Reason: guarantee honored manually by changing the server-side destination (B-1)
- Cafe self-serve onboarding / sign-up — Reason: cafes are configured by hand; Deferred, planned after 2026-11-30 decision point (B-1, B-6, R-6)
- Admin UI for artifact reassignment — Reason: artifact → cafe mapping edited directly as configuration (R-4)
- Billing / subscription system — Reason: payment on delivery, handled manually (I-7, B-1)
- Tipping — Reason: anti-goal; established providers only (F1)
- Customer accounts / customer Google sign-in — Reason: adds friction, buys nothing (F1, B-6)

### External Dependencies & Handoff Interfaces
- Google Maps write-a-review deep link — Owner: Google
- NFC chips (pilot reorder) — Owner: supplier
- Cafe menu content, WiFi credentials, Google place link — Owner: pilot cafe

## 3. Sequence and Staging (Phase F)

- Model: Build / Pitch / Pilot (Prototype / Pilot variant), strictly sequential by default (B-2)
- Stage Breakdown:
  - **Stage 1: Build** (2026-10-11 → 10-31) | Entry: foundation + boundary checkpoints agreed | Exit Evidence: demo path walks end-to-end on a real printed artifact via NFC and QR; partner accepts it as meeting the agreement | Non-Goals: review pull, AI replies, billing, polish beyond demo
  - **Stage 2: Pitch** (2026-11-01 → 11-30) | Entry: MVP accepted; artifact price numbers set; Stage 2 "free"/"cheaper" wording fixed; pilot agreement drafted with usage guidelines; Data Privacy Act items verified | Exit Evidence: ≥1 signed pilot (Signal 1); pitch count logged | Non-Goals: building features requested during pitches (log them instead)
  - **Stage 3: Pilot** (signing + 4 weeks) | Entry: signed pilot; cafe-owner login working; pilot artifact fabricated within 6 hands-on hours; baseline Google review count captured by hand | Exit Evidence: paid on delivery; 4-week review velocity vs prior 4 weeks (Signal 2) | Non-Goals: customizing for a second cafe before Signal 2 reads
- Decision point 2026-11-30: Signal 1 → continue pilot or pivot.

## 4. Constraints and Operating Context (Phase G)

| Constraint | Class (Hard/Negotiable) | Basis & Origin Tag | Consequence if Breached | Owner |
| --- | --- | --- | --- | --- |
| MVP demo by 2026-10-31 | Hard | Partner agreement (I-4) | Agreement unmet | Madrid + partner |
| Google review policy: no gating, no incentives, equal path | Hard | (evidence: web verification 2026-10-10) | Cafe reviews removed; product invalid | Madrid (design) / cafe (conduct) |
| Data Privacy Act of 2012 (RA 10173), NPC-enforced | Hard | Philippine market (B-3); private feedback may contain personal information | Regulatory complaint; pilot cafe exposure | Madrid |
| ₱10,000 Stage 1 budget incl. recurring hosting/domain until a pilot pays | Hard | (B-4) | Build or pilot stalls | Madrid |
| Single builder for software and fabrication | Hard | (I-9) | Any overrun delays the MVP | Madrid |
| 6 hands-on hours per cafe | Negotiable | (I-8) | Customization constrained to catalog | Madrid |
| Consumer Act (RA 7394), deceptive practices | Negotiable / reference | (B-3) | Covered by existing guardrails | Madrid |
| FTC 16 CFR 465 | Preference (benchmark only) | US rule, not binding in the Philippines (B-3) | — | — |

## 5. Assumptions, Dependencies, and Risks (Phase H)

### Assumptions Register
| Assumption | Confidence | Impact if Wrong | Test / Validation Method | Owner / Due |
| --- | --- | --- | --- | --- |
| Cafes want this enough to pay | Low | No venture | ≥1 signed pilot paid on delivery (Signal 1) | Madrid + partner / 2026-11-30 |
| Tap-to-review conversion justifies artifact price | Low | Wedge doesn't sell | Signal 2 | Madrid / pilot + 4 weeks |
| Hub attention split still yields acceptable review volume | Low | Value prop weakens | Per-action dashboard analytics | Madrid / pilot |
| Dynamic-URL infra buildable at reasonable cost | Medium | Migration and fallback promises break | Built during Stage 1 | Madrid / 2026-10-31 |
| ₱10,000 covers Stage 1 | Medium | Build or pilot stalls | Spend tracking; >50% spent before 10-31 = warning | Madrid / ongoing |
| Stage 2 pitch increases Stage 1 conversion | Low | Pitch complexity without lift | Record which pitch element signing cafes cite | Madrid + partner / pilot |

### Dependencies Register
| Dependency | Provider | Needed By | Status | Fallback Plan | Owner |
| --- | --- | --- | --- | --- | --- |
| NFC chips (demo) | Supplier | 2026-10-20 | Available: 10 samples (B-5) | QR-only demo | Madrid |
| NFC chips (expansion orders) | Supplier | On cafe order | Conditional; 10 samples cover demo set + pilot artifacts | Delay delivery by lead time | Madrid |
| Domain + hosting | Registrar / host | 2026-10-15 | Unknown | — | Madrid |
| Google write-a-review link | Google | Build | Public URL format | Copy button + plain Maps listing link | — |
| Data Privacy Act: controller vs processor role; NPC registration threshold | Madrid (verification) | 2026-11-01 (blocks Pitch, not Build) | Open — Verification | Pilot agreement waits | Madrid |
| Cafe menu, WiFi, Google place link | Pilot cafe | Pilot deployment | — | — | Cafe |

### Risks Register
| Risk (Cause → Event → Consequence) | Likelihood | Impact | Early Warning Signal | Response Plan | Owner |
| --- | --- | --- | --- | --- | --- |
| Solo builder → build overrun → MVP misses 10-31 | High | High | Demo path not walking by 2026-10-24 | Cut order: dashboard → raw list; drop WiFi action; menu as link not upload. Tell partner on 10-24 | Madrid |
| Redirect service downtime or lapse → every chip and QR dies → cafe trust and repoint promise broken | Low | Severe | Uptime alert; domain renewal date | Multi-year domain prepay; simple cheap host with uptime monitor | Madrid |
| Print iterations / failed prints → budget overrun | Medium | Medium | >50% of ₱10,000 spent before 10-31 | Fixed demo set (card, badge, one 3D model); spend tracking | Madrid |
| Cafe on-premise pressure → reviews removed → lost reference | Low | High | Review-velocity spike | Signal 3b | Madrid |
| No pilot signs → demand assumption fails | Medium–High | Severe | Two weeks of pitching with no follow-up meetings | Signal 1 pivot on 2026-11-30 | Madrid + partner |
| Older phones lack background NFC read → taps fail | Low | Low | Pilot reports | QR on every artifact | Madrid |
| Unlocked chip rewritten by a third party → customers sent to a malicious page | Low (with boundary) | High | — | Approach boundary 1: write-lock after encoding | Madrid |

## 6. Approach Boundaries (Phase I)

1. Chips are write-locked after encoding (B-6).
2. Chip and QR hold only a short URL on a domain Madrid controls; no cafe data or destinations on the artifact. The short URL identifies the artifact, not the cafe; admin maps artifact → cafe, and taps are recorded against both so history survives reassignment (F1, B-6, R-4).
3. No app install and no customer sign-in; the hub runs in the phone browser (F1, B-6).
4. Hub is lightweight enough to load quickly on Philippine mobile data (B-3, B-6).
5. Review path is identical regardless of rating, enforced structurally: no code path branches on star value before the Google link is shown (F1, B-6).
6. Privacy notice on the review page; contact fields optional (B-3, B-6).
7. Cafes are configuration, not self-serve: menu, WiFi, Google place link set by hand (B-1, B-6).
8. Redirect service is the one permanent component and runs at a recurring cost that fits the ₱10,000 budget until a pilot pays (B-4, B-6).

Not a scope boundary (left to build): how "join WiFi" works on the page; showing network name + password with a copy button is acceptable for the MVP.

## 7. Foundation Amendments

- Market is the Philippines: the Data Privacy Act becomes a Hard constraint; FTC 16 CFR 465 is downgraded to a non-binding benchmark (B-3). The foundation's compliance guardrails are unchanged.
- "NFC chip supplier (assumed)" stakeholder: resolved; 10 samples in hand; pilot reorder is conditional (B-5).
- Budget added as a Hard constraint: ₱10,000 (B-4).
- Partner's working role (who pitches) now also gates the Pitch/Build overlap (B-2); resolved in `03-readiness.md` (R-7).
- Gate B amendments (2026-10-11, from `03-readiness.md`): cafe-owner login, demo set vs pilot artifact, one paid pilot artifact per cafe, artifact-ID short URLs, on-demand printing, deferred self-serve.

## 8. C12 Decision Records: Milestone Close-Out

| Decision | Rationale | Alternatives Considered & Rejected | Owner | Date |
| --- | --- | --- | --- | --- |
| Scope runs through the 2026-11-30 pilot decision, not just the demo | The demand signal is the scope's exit test | Scope the October demo only | Madrid | 2026-10-11 |
| QR fallback on every artifact is in scope | Already promised in foundation; near-zero cost | NFC-only artifacts | Madrid | 2026-10-11 |
| Repoint guarantee honored manually | Saves build days; promise still keepable | Self-serve repoint UI in Stage 1 | Madrid | 2026-10-11 |
| Stage 2 and Stage 3 parked under C8 | Separate projects; Stage 2 pitched only | Absorb Stage 2 into Stage 1 scope | Madrid | 2026-10-11 |
| Build → Pitch → Pilot, strictly sequential by default | Solo builder; pitch prep would steal build hours | Overlapping pitch from start | Madrid | 2026-10-11 |
| Data Privacy Act treated as Hard; FTC rule as benchmark | Philippine market | Treat FTC as binding | Madrid | 2026-10-11 |
| ₱10,000 Stage 1 budget ceiling | Madrid's stated limit | — | Madrid | 2026-10-11 |
| Eight approach boundaries (Section 6) | Security (write-lock), compliance by structure, mobile reach, privacy | Leave to build-time judgment | Madrid | 2026-10-11 |

## 9. Milestone Transition

- Status: Boundary complete
- Next phase: steps/03-readiness.md
- Blocking item: none

## Revision log

| Date | Change | Session |
| --- | --- | --- |
| 2026-10-11 | Created: boundary checkpoint after Phases E–I | Claude Code |
| 2026-10-11 | Amended from Step 03 Gate B/C (R-2 to R-7): owner login, pilot artifact, artifact-ID URLs, on-demand printing, partner pitch overlap | Claude Code |

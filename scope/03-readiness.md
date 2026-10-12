# Checkpoint 03: Readiness & Gates — NFC review venture

Compressed working state after ASMP Comprehensive Step 03 (Phases J–L + completion gates), not a transcript.

**Source tags:** `(F1)`, `(I-n)`, `(B-n)` as in earlier checkpoints; `(R-n)` readiness answers 2026-10-11:

| # | Question | Answer |
| --- | --- | --- |
| R-1 | Definition of done; failure scenarios | DoD accepted. Redirect-down fallback scenario rejected (no second path, link, host, or server); NFC-off → QR scenario stands |
| R-2 | Real cases; Cafe A profile | Cafe A and Cafe B (Madrid's targets, deliberately unnamed); partner has own targets. Cafe A: 15–20 tables, printed menu. One artifact per pilot cafe |
| R-3 | Role of the single artifact | The one artifact is the pitch; more printed on demand |
| R-4 | Reassigning artifacts | Yes, via admin mapping (dynamic URL); demo set vs pilot artifact distinguished |
| R-5 | Pilot artifact payment | Paid on delivery; signing makes it a contract |
| R-6 | Cafe A Google Business Profile; owner access | Cafe A has a profile. One login per cafe created by Madrid, built during Pitch, Pilot entry condition. Self-serve after 2026-11-30 |
| R-7 | Partner's role | Partner pitches own cafes; overlap from ~10-24 under conditions; Signal 1 jointly owned |
| R-8 | Next action | Domain + hosting + uptime monitor by 2026-10-15, owner Madrid |

## 1. Document Control & Checkpoint Chain

- Initiative: NFC review venture — Stage 1 through the 2026-11-30 pilot decision
- Based on Checkpoints: `01-foundation.md`, `02-boundary.md` (verified; amended from this step's gates)
- Date: 2026-10-11

## 2. Definition of Done & Scenarios (Phase J)

- **Output Complete (2026-10-31):** hub, review page, minimal dashboard, and redirect service live on Madrid's domain; demo set (card, badge, one 3D model) printed with write-locked chips and QR codes (I-5, B-6, R-1).
- **Capability Ready (2026-10-31 for demo; before first pilot delivery for owner access):** Madrid configures a new cafe (menu photo, WiFi, Google place link) and maps, encodes, and locks an artifact without code changes; the partner can run the demo alone; cafe-owner login works before first delivery (R-1, R-6, R-7).
- **Outcome Evidenced (pilot + 4 weeks):** dashboard records taps per action and private feedback at the pilot cafe; the cafe's Google review count for the prior 4 weeks captured by hand from Maps at delivery as baseline (R-1, R-2).
- **Transition Complete (pilot + 4 weeks):** pilot artifact paid on delivery; staff briefed with the usage guidelines; Signals 1 and 2 read and recorded, with Signal 2 read alongside taps per day (visibility vs value) (I-7, R-2, R-5).
- **End-to-End Acceptance Scenario:** Given Cafe A (15–20 tables, printed menu, existing Google Business Profile) has signed a pilot contract, Madrid configures Cafe A's hub and maps one pilot artifact to it; it is placed at the counter and paid for on delivery. A customer taps it, opens the hub, chooses "leave a Google review", gives 3 stars and text, sees the privacy notice, and is shown the same Google write-a-review link and "Copy your review" button that a 5-star customer would see; they post on Google. Cafe A's owner logs in to their own dashboard and sees the tap and the 3-star private feedback; no other cafe's data is visible. Evidence: tap and feedback rows in the dashboard; the review on Cafe A's Google profile; owner login restricted to Cafe A (R-2, R-5, R-6).
- **Edge & Failure Scenario:** A customer's phone has NFC off or cannot read NFC in the background. They scan the QR code on the same artifact, which carries the same short URL, reach the same hub, and the visit is recorded the same way (F1, R-1).
- **Not a scenario (rejected R-1):** redirect-service outage fallback; the outage risk is handled in the risk register (uptime monitor, multi-year domain prepay) without a second path.

## 3. Governance and Change (Phase K)

- **Accountable Decision-Maker:** Madrid. Joint with partner: MVP definition, 2026-10-31 deadline, pricing, pilot terms (I-9).
- **Partner's role:** pitches own target cafes; may start ~2026-10-24 only once the demo path walks and prices + Data Privacy Act items are settled; Madrid pitches Cafe A and Cafe B from 2026-11-01; Signal 1 owned jointly (R-7).
- **Escalation Route:** Madrid and partner jointly; no third party; deadlock on deadline falls to the agreement's own terms.
- **Scope Change Criteria:** stop/pivot Signals 1–4 (`01-foundation.md` §4); changes to MVP, deadline, prices, or pilot terms need both; other scope changes are Madrid's, logged.
- **Change Record Destination:** revision logs in `scope/` checkpoints; `IDEA-SCOPE.md` §14–15 after synthesis.

## 4. Handoff Readiness (Phase L)

- **Receiving Discipline / Protocol:** engineering + fabrication (Madrid, sole builder).
- **Ready Inputs:** `scope/01-foundation.md`, `scope/02-boundary.md`, `scope/03-readiness.md`; `IDEA-SCOPE.md` after synthesis.
- **Remaining Prerequisites:** domain + hosting (due 2026-10-15); artifact and pilot prices and Stage 2 wording (before any pitch); Data Privacy Act controller/processor role and NPC registration threshold verified (before any pitch); cafe-owner login (before first delivery).
- **Next Responsible Action:** Register the short-URL domain (prepaid multi-year) and set up hosting with an uptime monitor by 2026-10-15.
- **Accountable Action Owner:** Madrid.

## 5. Gate Log & Evaluations (C9)

| Gate | Type (Baseline/Conditional) | Status (Pass/Fail) | Evidence / Basis | Action Taken |
| --- | --- | --- | --- | --- |
| Gate A: Evidence Coverage | Baseline | Pass (with limitation) | Repo inspected (`AGENTS.md`, `CONTEXT.md`, `scope/`); protocol steps 00–04 read; intake answers tagged | Limitation: 2026-10-10 web verification and competitor sweep were not re-run this session; Philippine law points are labeled Open — Verification, not fact |
| Gate B: Real Example Walkthrough | Baseline | Fail → Pass | Cafe A walked through 7 steps | Failed at owner dashboard access; repaired surgically (R-6): per-cafe login as Pilot entry condition |
| Gate C: Internal Consistency | Baseline | Fail → Pass | Cross-checkpoint review | Fixed: "artifacts on tables" → counter pilot artifact; chip reorder dependency; Stage 3 entry; dashboard access; menu/WiFi and partner-role open items closed; approach boundary 2 refined (artifact-ID URLs) |
| Gate D: Open-Item Integrity | Baseline | Pass | Open items in 01 §6 and 02 §5 | Every open item has owner and due date or trigger |
| Gate E: Proportionality | Baseline | Pass | Detail vs 20-day build and ₱10,000 budget | Stages 2–3 parked; admin UI, billing, self-serve excluded; no extra ceremony |
| Gate F: Operability & Lifecycle | Conditional (triggered: redirect service is permanent) | Pass | Risk register; approach boundary 8 | Uptime monitor, multi-year domain prepay, recurring cost in budget |
| Gate G: Harm, Abuse & Exclusion | Conditional (triggered: public customers, personal data) | Pass | Approach boundaries 1, 3, 5, 6; Signals 3a/3b; QR fallback | Chip write-lock; privacy notice; per-cafe data isolation; no gating; no-NFC phones covered |
| Gate H: Feasibility Spike | Conditional | Not triggered | NFC NDEF URL + web redirect are established technology | Dynamic-URL cost assumption (Medium) validated during Build |
| Gate I: Transition & Failure Readiness | Conditional | Not triggered | New initiative; no migration or cutover | — |
| Gate J: Independent Review | Conditional | Not triggered | No mandated external approval; NPC registration is a verification item | Tracked as Open — Verification |

## 6. Boundary / Foundation Amendments

Applied to `01-foundation.md` and `02-boundary.md` (see their revision logs):
- Demo set (generic, reusable, demo hub) vs pilot artifact (one per signed cafe, counter, paid on delivery, contract) (R-3, R-4, R-5).
- Cafe-owner dashboard login per cafe, built during Pitch, Pilot entry condition (R-6).
- Short URL identifies the artifact; admin maps artifact → cafe; reassignment is configuration, no admin UI (R-4).
- Additional artifacts printed on demand; chip reorder conditional on orders (R-3).
- Self-serve onboarding deferred to after 2026-11-30 (R-6).
- Partner pitch overlap from ~10-24 under conditions (R-7).
- Menu = photo/scan of printed menu; WiFi = name + password + copy (R-2).
- Outcome chain placement: counter, not tables (R-2).

## 7. C12 Decision Records: Milestone Close-Out

| Decision | Rationale | Alternatives Considered & Rejected | Owner | Date |
| --- | --- | --- | --- | --- |
| Four-level DoD with NFC-off → QR as failure scenario | Covers demo, owner access, measurement, payment | Redirect-outage fallback path (rejected: no second host/link/server) | Madrid | 2026-10-11 |
| One paid pilot artifact per cafe; signing = contract | Payment on delivery is the demand test | Free pilot artifact (fails demand reality test) | Madrid | 2026-10-11 |
| Demo set generic and reusable; custom logo models for paid orders | Reassignable via admin; custom logos don't transfer | Custom demo per prospect | Madrid | 2026-10-11 |
| Artifact-ID short URLs, mapping edited as config | Clean reassignment and tap history | Per-cafe URLs; admin UI in MVP | Madrid | 2026-10-11 |
| Per-cafe owner login, built during Pitch | Data Privacy Act; Gate B repair; keeps October hours | Unlisted private link; build in October | Madrid | 2026-10-11 |
| Partner pitches own cafes from ~10-24 under conditions | More demand-test time without stealing build hours | Strict sequence for both | Madrid + partner | 2026-10-11 |
| Next action: domain + hosting + uptime monitor by 10-15 | Only irreversible build decision; everything depends on it | Start hub build first | Madrid | 2026-10-11 |

## 8. Milestone Transition

- Status: Readiness & Gates complete
- Next phase: steps/04-synthesis.md
- Blocking item: none

## Revision log

| Date | Change | Session |
| --- | --- | --- |
| 2026-10-11 | Created: readiness checkpoint after Phases J–L and gates | Claude Code |
| 2026-10-11 | Synthesis review S-1: Stage 2 website free during initial contract, upsold at a low price from a jointly set date; Open item "free vs cheaper" closed, "initial contract length" opened (recorded in `IDEA-SCOPE.md` §5, §15, §16) | Claude Code |
| 2026-10-12 | Stack and hosting chosen: Next.js + TypeScript on Vercel + Supabase free until first pilot, then partner's VPS; `bizkonek.com` (registrar left to Madrid + partner); Better Stack monitor; `vercel.app` only on unprinted, unlocked test chips; free-tier terms verification opened (recorded in `IDEA-SCOPE.md` §12, §15, §16) | Claude Code |

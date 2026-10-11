# Checkpoint 01: Foundation — NFC review venture

Compressed working state after ASMP Comprehensive Steps 00–01 (Phases A–D), not a transcript.

**Source tags:** `(F1)` = foundation session 2026-10-10; `(I-n)` = intake/backfill answer n, 2026-10-11 (see Intake record); `(evidence: …)` = inspected source, see Evidence inspected.

## 1. Document Control & Context

- Initiative: NFC review venture (Stage 1 MVP; Stages 2–3 as staged direction)
- Protocol: ASMP Comprehensive v0.2.0-draft (stepped), Mac canonical `/Users/madridj1689/Code/projects/adaptive-scope-mapping-protocol/`
- Operating Surface: Durable (local repo, write + re-read verified) (I-6)
- Starting Condition & Work Shape: New / Mixed — Product/Platform lead (hub, dashboard, dynamic URLs) with in-house custom-fabrication layer (artifacts) and service layer (cafe contract). One product, not two: software is the stable core; the artifact varies per customer demand. (I-2)
- Scoping workspace: `scope/` (deviation from `<initiative-slug>-scope/`; single-initiative repo; pointer recorded in `CONTEXT.md`) (I-10)
- Prepared: 2026-10-10; restructured to stepped contract 2026-10-11

### Intake record (Step 00, backfilled 2026-10-11)

| # | Question | Answer |
| --- | --- | --- |
| I-1 | Demand reality (C3) | No real demand evidence. Plan: create demand through marketing. Classified Working Assumption, Low. |
| I-2 | Starting condition & shape | New / Mixed (see above). 3D printing done in-house; no 3D-print supplier. |
| I-3 | Pricing; rubric | Artifact price varies by size, quantity (volume discount), type (cards, badges, 3D models: mugs, logos, cubes, etc.). Initial rubric (62/100) accepted. |
| I-4 | Consequence of inaction | Cafes: chronic, moderate. Stage 1 is pitched as the entry point to the Stage 2 business website (cheaper for cafes, strategically more important). MVP must be built this month under an agreement with the business partner. |
| I-5 | MVP definition | Confirmed as proposed (see Section 4, Minimum acceptable result). |
| I-6 | Gate outcome | Comprehensive at 72/100 approved. |
| I-7 | Stop / pivot signals | See Section 4. |
| I-8 | Fabrication ceiling | N = 6 hands-on hours per cafe. |
| I-9 | Partner decision rights | Split confirmed (see Section 3). Madrid does software and fabrication. |
| I-10 | Workspace location | Keep `scope/`. |

### Scored Fit Gate (C4/C5)

| Dimension | Initial | Re-score | Basis |
| --- | :---: | :---: | --- |
| 1. Business objectives clarity | 6 | 7 | Stage 1 purpose clear as pitchable entry point to Stage 2 (I-4) |
| 2. Acceptance criteria | 4 | 7 | MVP defined as a walkable demo (I-5) |
| 3. Constraints & operating context | 7 | 8 | Google/FTC verified (F1); hard deadline and pricing structure known (I-3, I-4) |
| 4. Problem ambiguity | 6 | 6 | Demand unverified (I-1) |
| 5. Scope boundedness | 6 | 8 | MVP edges explicit; Stage 2 positioned (I-4, I-5) |
| 6. Interdependence & stakeholders | 8 | 7 | Business partner added (I-4, I-9) |
| **Total** | **37/60 → 62** | **43/60 → 72** | |

Gate Decision: **Comprehensive (72/100).** Rationale: money, compliance, physical production, a hard 20-day deadline, and two parties exceed Compact; scoping kept lean so it does not delay the build. Approved by Madrid 2026-10-11 (I-6).

## 2. Intent and Current Reality (Phase A)

- **Trigger:** The original mechanism (4/5 stars routed to Google Maps, lower ratings diverted to a private bin) was verified non-viable on 2026-10-10: Google prohibits review gating, the FTC's consumer review rule bans review suppression, and no public API posts reviews to Google Maps on a visitor's behalf (evidence: web verification 2026-10-10). The redesign (Option A, compliant unified funnel), wedge economics, and staged venture arc are now defined (F1). Build pressure: MVP due 2026-10-31 under the business-partner agreement (I-4).
- **Current Reality & Friction:** Cafes and restaurants struggle to get Google reviews; unhappy customers vent publicly instead of privately (F1). The existing NFC review-tag market is commodity one-time hardware ($15–30 NFC+QR hybrids) with no software layer and no service relationship (evidence: competitor sweep 2026-10-10).
- **Consequence of Inaction:** For cafes, chronic and moderate: slow, complaint-skewed review profiles persist; nothing breaks. This is a vitamin, not a painkiller, so the offer must sell on low friction and visible results, not urgency. For the venture: the partner agreement is not met and the Stage 2 pitch has no entry point (I-4).
- **Desired Future Condition:** Cafes buy custom NFC artifacts they own forever, fabricated in-house to their demand (I-2, I-3). A tap opens a branded hub, identical for every customer: leave a Google review, view the menu, join WiFi. The review action captures stars + text as private feedback for the cafe, then offers the identical Google write-a-review deep link plus a "Copy your review" button. The dashboard unifies tap analytics, private feedback, and Google reviews (pulled via Business Profile API), with AI-drafted replies the owner approves. Dynamic URLs (chip holds a permanent short URL; destination managed server-side) let review pages migrate into subdomain business pages (Stage 2) and let cafes repoint tags to another provider (fallback guarantee) (F1).

## 3. People, Roles, and Impact (Phase B)

- **Primary Beneficiary:** cafe / restaurant owners (more reviews, private feedback channel, one dashboard) (F1).
- **Accountable Sponsor:** Madrid — owner, scope owner, sole builder (software and fabrication) (F1, I-9).
- **Business partner:** party to the MVP agreement. Decision rights (I-9):

| Decision area | Decides | Consulted |
| --- | --- | --- |
| Scope, product design, MVP contents | Madrid | Partner |
| Changing MVP definition or the 2026-10-31 deadline | Madrid + partner jointly | — |
| Pricing and pilot terms with cafes | Madrid + partner jointly | — |
| Fabrication and day-to-day build | Madrid | — |
| Final `IDEA-SCOPE.md` sign-off | Madrid | Partner reviews first |

- **Material Stakeholders & Impact:** customers (tappers/reviewers; tap is voluntary and passive); Google (platform policy owner; hard constraint); NFC chip supplier (assumed; confirm in Phase H); future agency clients (Stage 3 pipeline) (F1, I-2).
- **Excluded from this foundation:** end-customer demographics beyond "cafe visitors with NFC or QR-capable phones"; QR fallback covers phones without NFC (F1).

## 4. Outcomes and Guardrails (Phase C)

- **Outcome Chain:** artifacts at the cafe (pilot: one at the counter; more on order) → customer taps → hub actions → more private feedback captured + steady compliant Google review velocity → better public rating profile + faster issue resolution → cafe retention, expansion, and a customer base for Stages 2–3 (F1).
- **Success Measures:** artifacts sold and deployed; tap-through rate per hub action (dashboard); Google review velocity per cafe (steady, no spikes); dashboard contract renewals; private feedback volume per cafe (F1). Pitch-count tracked alongside signed pilots (I-7).
- **Guardrail Measures:** Google review policy compliance: no gating (every customer gets the same review path), no incentives tied to reviewing, no on-premise pressure (staff invite, never hover/quota/script). WiFi access and menu viewing are never conditioned on leaving a review (F1). Pitch may describe Stage 2 but must not promise its features or dates until Stage 2 is scoped (I-4).
- **Anti-Goals:** optimizing review count at the cost of policy violation; building money-movement infrastructure (tipping uses established providers); deep-scoping Stages 2–3 now (proportional rigor) (F1).
- **Minimum Acceptable Result (MVP, due 2026-10-31):** pitchable working demo on a real printed artifact: tap → hub (review / menu / WiFi) → review page saves stars + text as private feedback → Google deep link + copy button; minimal dashboard with tap counts and private feedback. Out of MVP: Google review pull, AI-drafted replies, repoint, live paying cafe. "Built" = demonstrable in a pitch (I-5).
- **Pivot / Stop Signals (I-7, I-8):**

| # | Signal | Threshold | Response |
| --- | --- | --- | --- |
| 1 | Demand | Fewer than 1 signed pilot by 2026-11-30, or a pilot cafe refuses payment on delivery | Pivot: reprice, change segment, or lead with the Stage 2 website. Specialist note: no pitch denominator makes this threshold weak; pitch count is logged for visibility. |
| 2 | Review value | No Google review-velocity lift at pilot cafes after 4 weeks vs their prior 4 weeks | Reconsider review as the hub's lead action |
| 3a | Compliance — tool design | Any Google flag traced to hub design (gating, incentive, unequal path) | Stop all deployments until fixed |
| 3b | Compliance — cafe conduct | On-premise pressure by a cafe (hovering, quotas, discounts for reviews) | Usage guidelines are part of the pilot agreement; first incident → warning; repeat → disable that cafe's review action |
| 4 | Fabrication load | Design + fabrication exceeds 6 hands-on hours per cafe (unattended print time excluded) | Constrain customization to a fixed artifact catalog |

## 5. Domain Model & Vocabulary (Phase D)

| Term | Operational Meaning | Boundary Rule | State | Source Tag |
| --- | --- | --- | --- | --- |
| Hub | Tap landing page; three actions: leave a Google review, view the menu, join WiFi | Identical for every customer; no action conditioned on another | Confirmed — Decision | F1 |
| Review page | Hub sub-page: stars + text saved as private feedback; then the identical Google deep link + "Copy your review" button | Same path regardless of star rating | Confirmed — Decision | F1 |
| Private feedback | Site-collected ratings/text, cafe-only | Included in the purchase; no extra charge | Confirmed — Decision | F1 |
| Dashboard | Online review dashboard | Access tied to contract; one login per cafe created by Madrid; MVP version = taps + private feedback only | Confirmed — Decision | F1, I-5, R-6 |
| Artifact | Custom NFC object fabricated in-house (cards, badges, 3D models such as mugs, logos, cubes); cafe owns forever, sold per piece | Price varies by size, quantity (volume discount), type; numbers Open | Confirmed — Decision | F1, I-2, I-3 |
| Dynamic URL | Chip holds a permanent short URL Madrid controls; destination changes server-side | Chip content never changes after deployment | Confirmed — Decision | F1 |
| Repoint guarantee | Fallback: cafe can redirect their artifacts to a different service provider | Not in MVP | Confirmed — Decision | F1, I-5 |
| Wedge | Stage 1 product as the acquisition channel for the platform (Stage 2) and agency (Stage 3) | Stage 2 is pitched as direction, not promised | Confirmed — Decision | F1, I-4 |
| MVP | Pitchable demo defined in Section 4 | Not a live paying install | Confirmed — Decision | I-5 |
| Demo set | Generic, reusable artifacts used in pitch meetings, pointing to a demo hub | Stays with Madrid / partner | Confirmed — Decision | R-4 |
| Pilot artifact | The one artifact a cafe receives on signing, mapped to its own hub, at the counter | Paid on delivery; signing makes it a contract; more printed on order | Confirmed — Decision | R-2, R-5 |
| Signed pilot | A cafe's written agreement to receive artifacts, paying on delivery | Refusal to pay on delivery = failed signal | Confirmed — Decision | I-7 |
| Own (subdomain) | Branded presence + data portability (reviews, content exportable); not domain ownership | — | Working Assumption | F1 |
| Stage 2 website | Free / cheaper business page for cafes on a subdomain | "Free" vs "cheaper" wording unresolved | Open | I-4 |
| Compliant | No gating, no incentives, no on-premise pressure, equal path (Section 4 guardrails) | Tool design = provider responsibility; on-premise conduct = cafe responsibility | Confirmed — Decision | F1, I-7 |

## 6. Active Assumptions & Open Foundational Items

| Item | Class | Confidence / Impact if Wrong | Validation Plan | Owner |
| --- | --- | --- | --- | --- |
| Cafes want this enough to pay (artifact + dashboard contract) | Working Assumption | Low / no venture | Marketing converts to ≥1 signed pilot paid on delivery by 2026-11-30 (Signal 1) | Madrid + partner |
| Tap-to-review conversion justifies artifact price vs $15–30 commodity tags | Working Assumption | Low / wedge doesn't sell | Pilot: tap-through and review lift (Signal 2) | Madrid |
| Dynamic-URL infra buildable at reasonable cost | Working Assumption | Medium / migration and fallback promises break | Technical spike during MVP build | Madrid |
| Hub attention split still yields acceptable review volume | Working Assumption | Low / core value prop weakens | Per-action dashboard analytics; pilot | Madrid |
| Stage 2 pitch increases Stage 1 conversion | Working Assumption | Low / pitch complexity without lift | Note which pitch element cafes cite when signing | Madrid + partner |
| Artifact price numbers | Open — Decision | — | Before first pilot pitch | Madrid + partner |
| Dashboard contract pricing structure | Open — Decision | Wedge recurring revenue undefined | Phase G | Madrid + partner |
| Menu and WiFi content formats | Resolved 2026-10-11 | Menu = photo/scan of printed menu uploaded by Madrid; WiFi = name + password + copy button | — | Madrid |
| Google Business Profile API access process and lead time | Open — Verification | Review pull / AI replies delayed post-MVP | Verify before post-MVP planning | Madrid |
| NFC chip supply | Open — Verification | Fabrication blocked | Phase H dependency register | Madrid |
| Partner's working role (who pitches cafes) | Resolved 2026-10-11 | Both pitch; partner from ~10-24 under conditions; Signal 1 jointly owned | — | Madrid + partner |
| Stage 2 "free" vs "cheaper" | Open — Decision | Inconsistent pitch | Before first pitch (~2026-10-24) | Madrid + partner |

## 7. C12 Decision Records: Milestone Close-Out

| Decision | Rationale | Alternatives Considered & Rejected | Owner | Date |
| --- | --- | --- | --- | --- |
| Option A unified funnel + "Copy your review" button | Google prohibits gating; FTC bans suppression; no posting API | Selective 4/5-star routing (retired, prohibited) | Madrid | 2026-10-10 |
| No customer-side Google OAuth; OAuth cafe-side only | Adds friction, buys nothing; customer posts on Google directly | Customer OAuth to post on their behalf (no API) | Madrid | 2026-10-10 |
| Private feedback included in the purchase | Absorbs useful part of private-first design without gating | Option B private-feedback-first; Option C own-platform reviews (both absorbed) | Madrid | 2026-10-10 |
| One product; in-house fabrication; artifact varies per customer | Software is the stable core; Madrid is the printer | Separate hardware and software products; outsourced 3D printing | Madrid | 2026-10-11 |
| Artifact pricing structure: size × quantity (discount) × type | Matches per-customer custom fabrication | Flat per-tag price | Madrid | 2026-10-11 |
| MVP = pitchable demo (Section 4), due 2026-10-31 | Partner agreement; 20-day window | Live paying install; full Stage 1 incl. review pull + AI replies | Madrid + partner | 2026-10-11 |
| Venture framing: one scope, Stage 1 deep, Stage 2 pitched direction, Stage 3 parked | Stage 2 is part of the pitch but not yet scoped | Separate scopes now; deep-scoping Stages 2–3 | Madrid | 2026-10-11 |
| Gate: Comprehensive at 72/100 | Consequence, compliance, deadline, two parties | Compact (too consequential); discovery sprint first (demand can't be scoped into existence) | Madrid | 2026-10-11 |
| Demand stop signal: 1 signed pilot by 2026-11-30, paid on delivery | Payment on delivery is the real commitment | 2 of 10 pitched (specialist proposal; rejected as unnecessary) | Madrid | 2026-10-11 |
| Compliance responsibility split: design = provider, conduct = cafe | Tool design is ours; on-premise behavior is the cafe's; per-cafe response protects reputation | Halt all deployments on any incident; disclaim all responsibility | Madrid | 2026-10-11 |
| Fabrication ceiling 6 hands-on hours per cafe | Sustainable for a solo builder during pilot | No ceiling | Madrid | 2026-10-11 |
| Partner decision-rights split (Section 3) | Single accountable owner; joint say on deadline and money | Partner scope veto | Madrid + partner | 2026-10-11 |
| Keep workspace at `scope/` | Single-initiative repo; `CONTEXT.md` carries the pointer | Rename to `<initiative-slug>-scope/` | Madrid | 2026-10-11 |

## 8. Evidence inspected

- ASMP Comprehensive protocol v0.2.0-draft, read in full 2026-10-10; stepped router + steps 00–02 re-read 2026-10-11.
- Web verification 2026-10-10: Google review-gating prohibition (policy wording: "discourage or prohibit negative reviews, or selectively solicit positive reviews"); FTC 16 CFR Part 465 review suppression ban; no public API for posting Google reviews (Business Profile API: list + reply only); 2026 on-premise/kiosk policy notes.
- Competitor and fork research sweep 2026-10-10 (subagent): commodity NFC tag pricing ($15–30), Tagglu dynamic-URL model, review-SaaS feature/price anchors, white-label resale margins.
- Intake answers I-1 to I-10, 2026-10-11 (Madrid, this session).

## 9. Milestone Transition

- Status: Foundation complete
- Next phase: steps/02-boundary.md
- Blocking item: none (venture framing resolved 2026-10-11)

## Revision log

| Date | Change | Session |
| --- | --- | --- |
| 2026-10-10 | Created: foundation checkpoint after Phases A–D | side chat |
| 2026-10-11 | Relocated: Mac `nfc_product/scope/` is now the scoping workspace per Madrid's call | side chat |
| 2026-10-11 | Restructured to v0.2.0-draft stepped contract: Step 00 intake + fit gate backfilled, inaction consequence, stop/pivot signals, source tags, C12 records, partner governance, MVP definition, in-house fabrication; venture-framing blocker resolved | Claude Code |
| 2026-10-11 | Amended from Step 03 (R-2 to R-7): pilot artifact vs demo set, owner login, counter placement, resolved menu/WiFi and partner-role items | Claude Code |

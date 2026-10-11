# Scope Map — NFC Review Venture (Stage 1)

## 0. Document Control
- Status: Decision-ready — approved by Madrid 2026-10-11; pending business-partner review before final Approved
- Version: 1.0 — ASMP v0.2.0-draft
- Scoping mechanism: ASMP Comprehensive (Stepped); fit gate 72/100
- Operating surface: Durable (checkpoints in `scope/`)
- Primary direction: New
- Work shape: Mixed — Product/Platform lead (hub, dashboard, dynamic URLs) with in-house custom fabrication (NFC artifacts) and a service relationship (cafe contract)
- Scope owner: Madrid
- Accountable decision-maker: Madrid (joint with business partner on MVP definition, deadline, pricing, pilot terms)
- Prepared on: 2026-10-11
- Evidence current through: 2026-10-11 (external policy research dated 2026-10-10)
- Next review or change trigger: 2026-10-24 build check (demo path walks or scope is cut); 2026-10-31 MVP acceptance; 2026-11-30 Signal 1 decision point; or any stop/pivot signal in §4

Source tags: `(F1)` foundation session 2026-10-10; `(I-n)` intake, `(B-n)` boundary, `(R-n)` readiness, `(S-n)` synthesis-review answers 2026-10-11 — recorded in `scope/01-foundation.md`, `scope/02-boundary.md`, `scope/03-readiness.md`.

## 1. Executive Frame
Philippine cafes get few Google reviews, and unhappy customers complain publicly instead of privately. This venture gives a cafe a custom NFC artifact, fabricated in-house, that opens a branded hub with three equal actions: leave a Google review, view the menu, join WiFi. The review action saves the customer's rating and text as private feedback for the cafe, then shows every customer the same Google write-a-review link and a "Copy your review" button. A dashboard shows the owner taps and private feedback. Stage 1 is the entry point pitched toward a Stage 2 cafe website. Now, because a business-partner agreement requires a pitchable MVP by 2026-10-31. Success is one signed pilot cafe, paid on delivery, by 2026-11-30.
- Primary beneficiary: cafe / restaurant owners (F1)
- Accountable sponsor: Madrid — owner and sole builder (software and fabrication) (I-9)
- Minimum acceptable result: by 2026-10-31, a working demo on a real printed artifact: tap or QR scan → hub (review / menu / WiFi) → review page saves stars + text as private feedback → Google link + copy button; minimal dashboard with taps and private feedback (I-5)
- Principal boundary: Stage 1 only, through the 2026-11-30 pilot decision; Stage 2 website and Stage 3 agency are parked and may be described in pitches but not promised (I-4, B-1)

## 2. Current Reality and Intent
### Current state
Cafes struggle to get Google reviews; unhappy customers vent publicly (F1). The NFC review-tag market is commodity one-time hardware ($15–30 NFC+QR hybrids) with no software layer and no service relationship (evidence: competitor sweep 2026-10-10). Prior design — routing 4–5 stars to Google and diverting lower ratings to a private bin — was retired as prohibited review gating (evidence: web verification 2026-10-10). No code exists yet.
### Trigger and urgency
Redesign to a compliant unified funnel settled 2026-10-10 (F1). Hard deadline: MVP by 2026-10-31 under the business-partner agreement (I-4).
### Desired future condition
Cafes own custom NFC artifacts. A tap opens a hub identical for every customer. Owners receive private feedback and see taps per action in one dashboard; later, Google reviews are pulled in and AI-drafted replies are offered for approval. The artifact's permanent short URL lets its destination move server-side — into the Stage 2 business page, or to another provider if the cafe leaves (F1).
### Consequence of no action
For cafes: chronic, moderate — slow, complaint-skewed review profiles persist; nothing breaks. This is a vitamin, not a painkiller: the offer must sell on low friction and visible results. For the venture: the partner agreement is unmet and the Stage 2 pitch has no entry point (I-4).

## 3. People, Roles, and Impact
| Role | Need / stake | Influence | Burden |
| --- | --- | --- | --- |
| Cafe owner (primary beneficiary) | More Google reviews; private feedback; one dashboard | Buys or declines; controls staff conduct | Pays on delivery; follows usage guidelines; supplies menu, WiFi, Google place link |
| Madrid (sponsor, builder) | Shippable MVP; validated demand | Decides scope; builds software; fabricates artifacts | Sole builder within 20 days and ₱10,000 |
| Business partner | Agreement fulfilled; pilots signed | Joint on MVP definition, deadline, pricing, pilot terms; pitches own target cafes | Pitches only after prices and privacy items are settled |
| Cafe customers | Fast, optional review / menu / WiFi | Voluntary taps | Their feedback is personal data — privacy notice; contact details optional |
| Google | Policy owner | Can remove reviews / flag profiles | — |
| NFC chip supplier | — | Supplies chips for expansion orders | — |

Excluded: customer demographics beyond "cafe visitors with NFC- or QR-capable phones" (F1).

## 4. Outcomes and Guardrails
### Outcome chain
Cafe with thin, complaint-skewed reviews → pilot artifact at the counter (more on order) → customer taps → hub actions → private feedback captured + steady, compliant Google review velocity → better rating profile and faster issue resolution → cafe retention, expansion orders, and a customer base for Stage 2 (F1, R-2).
### Success measures and baseline
- Signed pilots paid on delivery; number of cafes pitched logged alongside (I-7)
- Taps per hub action per day (dashboard)
- Google review velocity at the pilot cafe vs its prior 4 weeks (baseline captured by hand from Maps at delivery) (R-1)
- Private feedback volume per cafe; expansion orders; dashboard contract renewals (F1)
### Guardrail measures
- No gating: every customer gets the same review path regardless of rating; no incentives tied to reviewing; WiFi and menu never conditioned on reviewing (F1)
- No on-premise pressure: staff may invite, never hover, set quotas, or script (F1)
- Pitches describe Stage 2 but never promise its features or dates; it is presented as "free during your initial contract", not as permanently free (I-4, S-1)
- Each cafe sees only its own data (R-6)
### Anti-goals
- Optimizing review count at the cost of policy compliance
- Building money-movement infrastructure (tipping uses established providers)
- Deep-scoping Stages 2–3 now (F1)
### Stop, pivot, or reconsider signals
| # | Signal | Threshold | Response |
| --- | --- | --- | --- |
| 1 | Demand | No signed pilot by 2026-11-30, or a pilot cafe refuses payment on delivery | Pivot: reprice, change segment, or lead with Stage 2 website |
| 2 | Review value | No review-velocity lift after 4 weeks vs prior 4 weeks | Read with taps/day: low taps = visibility problem (placement); high taps, no lift = value problem (reconsider review as lead action) |
| 3a | Compliance — design | Google flag traced to hub design | Stop all deployments until fixed |
| 3b | Compliance — cafe conduct | Cafe pressures customers | Warning; repeat → disable that cafe's review action |
| 4 | Fabrication load | >6 hands-on hours per cafe (unattended print time excluded) | Constrain to a fixed artifact catalog |

Note: Signal 1 has no pitch denominator by sponsor decision; the specialist recorded this as a weak threshold.

## 5. Domain Model and Vocabulary
| Term | Operational Meaning | Boundary Rule | Source Tag |
| --- | --- | --- | --- |
| Hub | Tap landing page with three actions: Google review, menu, WiFi | Identical for every customer; no action conditioned on another | F1 |
| Review page | Stars + text saved as private feedback, then Google write-a-review link + "Copy your review" | Same path for every rating; no branch on star value before the link | F1, B-6 |
| Private feedback | Customer rating/text stored for the cafe only | Included in purchase; privacy notice shown; contact fields optional | F1, B-3 |
| Dashboard | Owner view of taps per action and private feedback | One login per cafe, created by Madrid; access tied to contract | F1, R-6 |
| Artifact | NFC object fabricated in-house (card, badge, 3D model such as mug, logo, cube) with chip + QR | Price varies by size, quantity (discount), type; cafe owns it | I-2, I-3 |
| Demo set | Generic reusable artifacts used in pitch meetings, pointed at a demo hub | Stays with Madrid / partner | R-4 |
| Pilot artifact | The one artifact a cafe receives on signing, mapped to its hub, placed at the counter | Paid on delivery; more printed on order | R-2, R-3, R-5 |
| Signed pilot | Cafe's written contract to receive the pilot artifact, paying on delivery | Refusal to pay on delivery = failed Signal 1 | I-7, R-5 |
| Dynamic URL | Permanent short URL on the chip and QR; destination set server-side | URL identifies the artifact; admin maps artifact → cafe; taps recorded against both | F1, R-4 |
| Repoint guarantee | Cafe may have its artifacts redirected to another provider | Honored manually by changing server-side destination | F1, B-1 |
| Compliant | No gating, no incentives, no on-premise pressure, equal path | Design = provider responsibility; conduct = cafe responsibility | F1, I-7 |
| MVP | Demo defined in §1 Minimum acceptable result | "Built" = demonstrable in a pitch, not a live paying install | I-5 |
| Wedge | Stage 1 as acquisition channel for Stage 2 and Stage 3 | Stage 2 pitched, not promised | F1, I-4 |
| Stage 2 website | Subdomain business page for cafes | Free during the cafe's initial contract; later offered at a low price from a date Madrid + partner set. Pitch says "free during your initial contract", never just "free" | I-4, S-1 |

## 6. Scope and Boundaries
### In scope
- Hub (review / menu / WiFi); menu = photo or scan of printed menu uploaded by Madrid; WiFi = network name + password + copy button (B-1, R-2)
- Review page with private feedback storage, privacy notice, Google link, copy button (B-1, B-3)
- Minimal dashboard (taps, private feedback); demo version on demo data without login for October (I-5)
- Cafe-owner login, one per cafe, created by Madrid — built during Pitch, required before first delivery (R-6)
- Dynamic URL redirect service with artifact → cafe mapping edited as configuration (B-1, R-4)
- QR code on every artifact carrying the same short URL (B-1)
- Demo set: one card, one badge, one 3D model, write-locked chips (B-6, R-4)
- One pilot artifact per signed cafe (R-2, R-5)
- Pilot contract with usage guidelines and a Data Privacy Act clause (I-7, B-3)
- One pilot deployment through its 4-week read (B-1)
### Conditional
- Google review pull + AI-drafted replies — only if Business Profile API access is approved **and** a pilot is signed; otherwise after the pilot (B-1)
- Partner pitching from ~2026-10-24 — only once the demo path walks **and** prices and Data Privacy Act items are settled (R-7)
- Additional artifacts printed on demand; chip reorder if the 10 samples run out — on cafe order (R-3)
### Out of scope (Mandatory Invariant — C10)
- Stage 2 subdomain business website — parked sibling project (C8); pitched only, no promised features or dates (I-4)
- Stage 3 agency — parked sibling project (C8) (F1)
- Cafe self-serve onboarding / sign-up — deferred; planned after 2026-11-30 (R-6)
- Admin UI for reassignment and self-serve repoint — configuration edits suffice (B-1, R-4)
- Billing / subscription system — manual payment on delivery (B-1)
- Customer accounts and customer Google sign-in (F1, B-6)
- Tipping (anti-goal) (F1)
- Redirect-outage fallback path (second host, link, or server) — rejected (R-1)
### External dependencies and interfaces
- Google Maps write-a-review link — Google
- Cafe's Google Business Profile, menu, WiFi details — cafe (Cafe A confirmed to have a profile) (R-6)
- NFC chips for expansion orders — supplier

## 7. Sequence
### Stage 1 — Build (2026-10-11 → 2026-10-31)
- Purpose: produce the pitchable MVP
- Included: hub, review page, demo dashboard, redirect service, demo set
- Entry conditions: this scope agreed
- Exit evidence: demo path walks end-to-end on a real printed artifact via NFC and QR; partner accepts it as meeting the agreement
- Dependencies: domain + hosting by 2026-10-15; 10 NFC samples (in hand)
- Non-goals: review pull, AI replies, billing, owner login, polish beyond demo
- Internal checkpoint: 2026-10-24 — demo path walking, or cut scope (§11) and tell partner
### Stage 2 — Pitch (Madrid 2026-11-01 → 2026-11-30; partner from ~2026-10-24 under §6 conditions)
- Purpose: obtain ≥1 signed pilot
- Included: pitching Cafe A, Cafe B, and partner's targets with the demo set; building cafe-owner login
- Entry conditions: MVP accepted; artifact and pilot prices set; dashboard contract pricing and initial contract length set; pilot contract drafted; Data Privacy Act items verified
- Exit evidence: ≥1 signed pilot; pitch count logged
- Dependencies: privacy verification; prices
- Non-goals: building features requested in pitches (log them)
### Stage 3 — Pilot (signing → +4 weeks)
- Purpose: evidence demand and review value
- Included: configure cafe, fabricate and place pilot artifact at counter, collect payment, brief staff, capture baseline, read signals
- Entry conditions: signed pilot; owner login working; artifact within 6 hands-on hours; baseline review count captured
- Exit evidence: paid on delivery; Signal 2 read with taps/day
- Dependencies: cafe's Google profile, menu, WiFi
- Non-goals: customizing for a second cafe before Signal 2 reads
- Decision point 2026-11-30: Signal 1 → continue or pivot

## 8. Constraints and Operating Context
| Constraint | Class | Basis & Origin Tag | Consequence if Breached | Owner |
| --- | --- | --- | --- | --- |
| MVP demo by 2026-10-31 | Hard | Partner agreement (I-4) | Agreement unmet | Madrid + partner |
| Google review policy: no gating, no incentives, equal path | Hard | Web verification 2026-10-10 | Reviews removed; product invalid | Madrid (design) / cafe (conduct) |
| Data Privacy Act of 2012 (RA 10173), NPC | Hard | Philippine market; feedback may hold personal info (B-3) | Regulatory complaint; cafe exposure | Madrid |
| ₱10,000 budget incl. recurring hosting/domain until a pilot pays | Hard | (B-4) | Build or pilot stalls | Madrid |
| One builder for software and fabrication | Hard | (I-9) | Overrun on either track delays MVP | Madrid |
| 6 hands-on hours per cafe | Negotiable | (I-8) | Catalog-only customization | Madrid |
| Consumer Act (RA 7394) | Negotiable / reference | (B-3) | Covered by guardrails | Madrid |
| FTC 16 CFR 465 | Preference (benchmark) | US rule, not binding (B-3) | — | — |

## 9. Assumptions (Mandatory Invariant — C10)
| Assumption | Confidence | Impact if Wrong | Validation Plan | Owner / Due |
| --- | --- | --- | --- | --- |
| Cafes want this enough to pay; marketing will create demand | Low | No venture | ≥1 signed pilot paid on delivery (Signal 1) | Madrid + partner / 2026-11-30 |
| Tap-to-review conversion justifies artifact price over $15–30 commodity tags | Low | Wedge doesn't sell | Signal 2 | Madrid / pilot + 4 weeks |
| Hub's three-way attention split still yields acceptable review volume | Low | Value proposition weakens | Taps per action on dashboard | Madrid / pilot |
| Counter placement exposes the single pilot artifact to most customers | Medium | Signal 2 misreads as no value | Taps/day vs approximate daily customers | Madrid / pilot |
| Stage 2 pitch increases Stage 1 conversion | Low | Pitch complexity without lift | Note which element signing cafes cite | Madrid + partner / pilot |
| Dynamic-URL service buildable and runnable cheaply | Medium | Repoint and Stage 2 migration promises break | Built during Stage 1 | Madrid / 2026-10-31 |
| ₱10,000 covers Stage 1 | Medium | Build or pilot stalls | Spend tracking; >50% before 10-31 = warning | Madrid / ongoing |
| "Own (subdomain)" = branded presence + data portability, not domain ownership | Medium | Stage 2 pitch misunderstood | Confirm wording when Stage 2 is scoped | Madrid / Stage 2 |

## 10. Dependencies
| Dependency | Provider | Needed by | Status | Fallback / Consequence | Owner |
| --- | --- | --- | --- | --- | --- |
| Short-URL domain + hosting + uptime monitor | Registrar / host | 2026-10-15 | Not started | None — blocks Build | Madrid |
| NFC chips (demo set + pilots) | Supplier | 2026-10-20 | Available: 10 samples | QR-only demo | Madrid |
| NFC chips (expansion orders) | Supplier | On order | Conditional | Delivery delayed by lead time | Madrid |
| Google write-a-review link | Google | Build | Public URL format | Copy button + plain Maps link | — |
| Data Privacy Act: controller vs processor role; NPC registration threshold | Madrid (verification) | Before any pitch | Open | Pilot contract waits | Madrid |
| Cafe's Google Business Profile, menu, WiFi | Pilot cafe | Pilot setup | Cafe A has a profile | Profile setup becomes cafe's prerequisite | Cafe |

## 11. Risks and Responses
| Cause → Event → Consequence | Likelihood | Impact | Early Signal | Response Plan | Owner |
| --- | --- | --- | --- | --- | --- |
| Solo builder → overrun → MVP misses 10-31 | High | High | Demo path not walking by 10-24 | Cut in order: dashboard → raw list; drop WiFi action; menu as link; tell partner 10-24 | Madrid |
| Redirect service down or lapsed → every chip and QR dies → trust and repoint promise broken | Low | Severe | Uptime alert; renewal date | Multi-year domain prepay; simple host; uptime monitor | Madrid |
| Print iterations → budget overrun | Medium | Medium | >50% spent before 10-31 | Fixed demo set; spend tracking | Madrid |
| Cafe pressure → reviews removed → lost reference | Low | High | Review spike | Signal 3b | Madrid |
| No pilot signs → demand fails | Medium–High | Severe | Two weeks of pitching with no follow-ups | Signal 1 pivot 11-30 | Madrid + partner |
| Older phones can't read NFC → taps fail | Low | Low | Pilot reports | QR on every artifact | Madrid |
| Unlocked chip rewritten → customers sent to malicious page | Low (with boundary) | High | — | Write-lock every chip | Madrid |

## 12. Approach Boundaries
1. Chips are write-locked after encoding.
2. Chip and QR hold only a short URL on Madrid's domain; the URL identifies the artifact; admin maps artifact → cafe; taps recorded against both.
3. No app install and no customer sign-in; the hub runs in the phone browser.
4. The hub loads quickly on Philippine mobile data.
5. The review path is identical regardless of rating, enforced structurally — no code path branches on star value before the Google link.
6. Privacy notice on the review page; contact fields optional.
7. Cafes are configuration, set up by Madrid; no self-serve.
8. The redirect service is the one permanent component and runs within the ₱10,000 budget until a pilot pays.
Left to build: technology stack; how "join WiFi" renders (name + password + copy is acceptable).

## 13. Definition of Done and Acceptance
### Output complete
By 2026-10-31: hub, review page, demo dashboard, redirect service live on Madrid's domain; demo set printed with write-locked chips and QR codes.
### Capability ready
Madrid configures a new cafe and maps, encodes, and locks an artifact without code changes; the partner runs the demo alone (10-31). Cafe-owner login works before first delivery.
### Outcome evidenced
At pilot + 4 weeks: dashboard shows taps per action and private feedback; baseline review count captured at delivery.
### Transition complete
Pilot artifact paid on delivery; staff briefed with usage guidelines; Signals 1 and 2 recorded.
### End-to-end acceptance scenario
Given Cafe A (15–20 tables, printed menu, existing Google Business Profile) has signed a pilot contract, Madrid configures Cafe A's hub and maps one pilot artifact to it; it is placed at the counter and paid for on delivery. A customer taps it, chooses "leave a Google review", gives 3 stars and text, sees the privacy notice, and gets the same Google link and copy button a 5-star customer would; they post on Google. Cafe A's owner logs in and sees that tap and the 3-star feedback, and no other cafe's data. Evidence: dashboard rows, the review on Cafe A's profile, login scoped to Cafe A.
### Edge and failure scenarios
A customer's phone has NFC off or no background NFC reading. They scan the QR code on the same artifact (same short URL), reach the same hub, and the visit is recorded identically.

## 14. Governance and Change
- Decision rights: Madrid decides scope, design, fabrication, and build. Madrid + partner jointly decide MVP definition, the 2026-10-31 deadline, pricing, and pilot terms. Madrid gives final sign-off on this document after partner review.
- Consultation and escalation path: Madrid and partner jointly; deadlock on the deadline falls to the agreement's terms.
- Review cadence or decision gates: 2026-10-24 build check; 2026-10-31 MVP acceptance; 2026-11-30 Signal 1; pilot + 4 weeks Signal 2.
- Change criteria and record location: stop/pivot signals in §4 trigger scope review; MVP, deadline, price, or pilot-term changes need both parties; other changes are Madrid's. Record changes in this document's §15 and a revision note in `scope/`.

## 15. Decision Register (C12 Surviving Decisions)
| Decision | State | Rationale or Evidence | Owner | Date | Revisit Trigger |
| --- | --- | --- | --- | --- | --- |
| Unified funnel + copy button; selective routing retired | Confirmed | Google gating ban; FTC; no posting API | Madrid | 2026-10-10 | Google policy change |
| No customer Google OAuth; OAuth cafe-side only | Confirmed | Friction without benefit | Madrid | 2026-10-10 | — |
| Private feedback included in purchase | Confirmed | Absorbs private-first value without gating | Madrid | 2026-10-10 | — |
| One product; in-house fabrication; artifact varies per customer | Confirmed | Software is the stable core; Madrid prints | Madrid | 2026-10-11 | Signal 4 |
| Artifact price = size × quantity (discount) × type | Confirmed (numbers Open) | Fits custom fabrication | Madrid + partner | 2026-10-11 | Before pitch |
| MVP = pitchable demo, due 2026-10-31 | Confirmed | Partner agreement | Madrid + partner | 2026-10-11 | 10-24 build check |
| One scope: Stage 1 deep; Stage 2 pitched; Stage 3 parked | Confirmed | C8 splitting rule | Madrid | 2026-10-11 | 2026-11-30 |
| Demand signal: 1 signed pilot by 11-30, paid on delivery | Confirmed | Payment is the real commitment | Madrid | 2026-10-11 | 2026-11-30 |
| Compliance split: design = provider, conduct = cafe | Confirmed | Responsibility follows control | Madrid | 2026-10-11 | Any Google flag |
| Philippine Data Privacy Act Hard; FTC benchmark only | Confirmed | Market is the Philippines | Madrid | 2026-10-11 | New market |
| ₱10,000 Stage 1 budget | Confirmed | Sponsor limit | Madrid | 2026-10-11 | >50% spent before 10-31 |
| Build → Pitch → Pilot; partner pitch overlap under conditions | Confirmed | Protects solo build hours | Madrid + partner | 2026-10-11 | 10-24 |
| QR on every artifact; repoint manual | Confirmed | Low cost; saves build days | Madrid | 2026-10-11 | — |
| Eight approach boundaries (§12) | Confirmed | Security, compliance by structure, reach, privacy | Madrid | 2026-10-11 | — |
| Demo set generic; one paid pilot artifact per cafe = contract; more printed on order | Confirmed | Demand test; reusable demo | Madrid | 2026-10-11 | Signal 1 |
| Artifact-ID short URLs; reassignment via config | Confirmed | Clean reassignment and history | Madrid | 2026-10-11 | Self-serve build |
| Per-cafe owner login before first delivery | Confirmed | Data isolation; Gate B repair | Madrid | 2026-10-11 | — |
| Self-serve onboarding after 2026-11-30 | Deferred | Out of 20-day window | Madrid | 2026-10-11 | 2026-11-30 |
| Workspace in `scope/` | Confirmed | Single-initiative repo | Madrid | 2026-10-11 | Second initiative |
| Stage 2 website free for the initial contract, then upsold at a low price from a jointly set date | Confirmed (date, price Open) | Lowers the barrier to sign; keeps a revenue path | Madrid + partner | 2026-10-11 | Stage 2 scoping |

## 16. Open and Deferred Items
| Item | State | What is Needed | Owner | Due Date or Trigger | Blocks |
| --- | --- | --- | --- | --- | --- |
| Artifact and pilot price numbers | Open — Decision | Price table by size, quantity, type | Madrid + partner | Before any pitch (~2026-10-24) | Pitch |
| Dashboard contract pricing structure | Open — Decision | Recurring terms | Madrid + partner | Before any pitch | Pitch |
| Initial contract length | Open — Decision | Duration that defines the free Stage 2 period | Madrid + partner | Before any pitch (with dashboard contract pricing) | Pitch |
| Stage 2 upsell date and price | Deferred | Date and low price for paid Stage 2 | Madrid + partner | When Stage 2 is scoped | — |
| Data Privacy Act controller vs processor role | Open — Verification | Determine role; draft contract clause | Madrid | Before any pitch | Pilot contract |
| NPC registration threshold | Open — Verification | Confirm whether pilot scale requires registration | Madrid | Before any pitch | Pilot contract |
| Google Business Profile API access process and lead time | Open — Verification | Application path and timeline | Madrid | When a pilot is signed | Conditional review pull |
| Self-serve onboarding | Deferred | Separate scoping | Madrid | After 2026-11-30 | — |
| Stage 2 website | Deferred (parked) | Separate ASMP scope | Madrid | Signal 1 passes | — |
| Stage 3 agency | Deferred (parked) | Separate scope | Madrid | Stage 2 underway | — |

## 17. Gate Log
| Gate | Type | Result | Evidence Used | Action Taken |
| --- | --- | --- | --- | --- |
| Fit Gate | Intake | 62 → 72/100, Comprehensive | Rubric `scope/01-foundation.md` | One clarifying round, re-scored |
| Gate A: Evidence Coverage | Baseline | Pass (with limitation) | Repo, protocol, checkpoints, intake answers | 2026-10-10 web research not re-run; Philippine law points labeled Open — Verification |
| Gate B: Real Example Walkthrough | Baseline | Fail → Pass | Cafe A, 7 steps | Owner-login gap repaired |
| Gate C: Internal Consistency | Baseline | Fail → Pass | Cross-checkpoint check | Placement, chip, Stage 3 entry, access, open items reconciled |
| Gate D: Open-Item Integrity | Baseline | Pass | §16 | All items owned with due date or trigger |
| Gate E: Proportionality | Baseline | Pass | Synthesis review | Stages 2–3 parked; no ceremony |
| Gate F: Operability & Lifecycle | Conditional | Pass | Permanent redirect service | Uptime monitor; domain prepay |
| Gate G: Harm, Abuse & Exclusion | Conditional | Pass | Public customers, personal data | Write-lock, privacy notice, data isolation, QR fallback |
| Gates H, I, J | Conditional | Not triggered | Established tech; new initiative; no mandated approval | — |

## 18. Handoff
- Receiving discipline or protocol: engineering + fabrication (Madrid, sole builder)
- Ready inputs: this `IDEA-SCOPE.md`; `scope/01-foundation.md`, `scope/02-boundary.md`, `scope/03-readiness.md`; 10 NFC sample chips
- Remaining prerequisites: domain + hosting (10-15); prices, contract pricing and initial contract length, privacy verification (before any pitch); owner login (before first delivery)
- Next responsible action (Mandatory Invariant — C10): Register the short-URL domain (prepaid for several years) and set up hosting with an uptime monitor by 2026-10-15
- Accountable action owner: Madrid
- Expected output of next stage: by 2026-10-31, the MVP in §1 working on a printed demo set and accepted by the partner

## Appendix A — Evidence Register
| Artifact or Source | Date / Version | Relevance | Reliability / Limitation | Claims Supported |
| --- | --- | --- | --- | --- |
| ASMP Comprehensive protocol | v0.2.0-draft, 2026-10-11 | Method | Canonical | Structure, gates, invariants |
| Web verification: Google review-gating prohibition; FTC 16 CFR 465; Business Profile API capabilities (list + reply, no posting) | 2026-10-10 | Mechanism redesign | Prior session; not re-run 2026-10-11 | §2, §8, §15 |
| Competitor and fork sweep (commodity tag pricing $15–30, dynamic-URL model, review-SaaS anchors) | 2026-10-10 | Market position | Prior-session subagent research | §2, §9 |
| Sponsor answers I-1–I-10, B-1–B-6, R-1–R-8 | 2026-10-11 | Decisions, constraints, cases | First-hand sponsor statements | Throughout |
| Philippine Data Privacy Act (RA 10173), Consumer Act (RA 7394) | Specialist knowledge, 2026-10-11 | Constraints | Not primary-source verified; role and registration specifics Open | §8, §16 |

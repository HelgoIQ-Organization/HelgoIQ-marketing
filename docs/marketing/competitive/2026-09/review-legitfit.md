# LegitFit — review (desktop 1440 + phone 390)

Captured 6 September 2026. Screenshots: [assets/legitfit/](./assets/legitfit/). Inspiration only.

Primary crawl: home, client communications (Marketing Suite), scheduling, memberships, analytics, integrations, `/business` + gyms + pilates, pricing, savings calculator, `/request-demo-full` (form not submitted).

## 1. Feature-explanation patterns

| Device | What it explains | Why it works | HelgoIQ fit |
|---|---|---|---|
| **Flow diagram + hanging message cards + outcome tiles** (Marketing Suite on `/features-legitfit/client-communications/`, and the home-adjacent comms story Declan flagged: client added → immediately → after 7 days → birthday) | Automated lifecycle comms without a paragraph | You can *see* the branch, the artefact (SMS/email card), and the point of it | **CRM journeys / retention sequences.** Highest-priority borrow. Rebuild in forest, our copy, our channels. |
| Layered product graphic in the hero | Dashboard + member face + revenue sparkline + class chip, joined by a pink curve | The hero is a picture of a business working, not a coastline | Hero product frame (timetable + book + pay), not a stock Helgoland-only story |
| Real UI cards: membership with Apple Pay / Google Pay / cash | How you sell a PT pack | Payment methods are visible, so “payments” is not a bullet | Memberships page and booking-to-pay mock |
| Phone lock-screen notification | Waitlist / spot opened | Instantly readable on a phone | Waitlist + class filler — we have the feature; we do not picture it |
| Message Hub desktop chrome | 1:1 inbox | Looks like a tool staff will sit in | We have AI inbox screenshots on Home; they are not annotated |
| Community feed mock | In-app social | Less relevant to independent UK studios; skip | — |
| Calculator (`/savings-calculator-legitfit`) | “How much more could you make” | Interactive, but fuelled by their average-customer stats | **Do not copy** unless we have defensible HelgoIQ numbers |

On feature pages they still write a headline and a paragraph — but the *picture* does the teaching. Our `/features/:slug` pages stop at the paragraph.

## 2. Visual language

- **Colour:** Magenta/hot pink on white. Navy for dark bands. Pastel pink/peach cards. High energy, not calm.
- **Type:** Confident sans headlines, short. (Some pages mix a serif; home hero is sans.)
- **Spacing:** Generous, but busier than Walla. Cards with soft shadows. Product frames float.
- **Illustration:** Product chrome and mock notifications, not abstract illustration.
- **Iconography:** Simple magenta marks, pink checklists in the hero.
- **Motion:** Chat widget, badge carousel, “3 demos booked 13 minutes ago” ticker.
- **White space:** Enough to feel premium; pink CTAs punch through it.

HelgoIQ should not import magenta. Forest already punches if we use it on artefacts (message cards, confirm buttons) the way they use pink on CTAs only.

## 3. Page architecture

Home order (desktop): promo bar → nav → **hero with CTA in the first screen** → awards carousel → “Solutions for every {gym / yoga / pilates…}” rotating vertical with three pictured features each → more pictured capabilities (reports, health scores, push, integrations, payroll, programmes) → brand/app/email/coupons/message hub → testimonials with big numbers → industry badges → four onboarding steps → FAQ → footer.

First CTA: **immediate** (“Get demo & pricing”).

Features split: dedicated pages under `/features-legitfit/` (scheduling, communications, memberships, members, analytics, integrations). Business type lives under `/business/*`.

They segment by **business type in the nav** (gym, yoga, pilates, crossfit, PT, SGPT, leisure, hotel) and reuse the same three pictured features with swapped copy.

## 4. Proof and trust

- Hero stats: 110% client growth, 20% fewer cancellations, 25% more bookings, €1,500 savings.
- “Trusted by 3,500+ fitness professionals.”
- Named quotes (Tanya Loxham, Charlie Oakley, etc.) with 35% / 3× / 3rd location.
- G2, Capterra, GetApp, Software Advice badges with season dates.
- Google 5-star mark.
- Pricing page headline: “Our clients grow an average of 67% in their first year.”
- Demo form: “1 in 2 customers came from another platform.”

Treat their numbers as **their** marketing, not a target to invent against. We do not publish equivalent claims.

## 5. Calls to action

- Wording: **Get demo & pricing** everywhere. Also “BOOK A DEMO”, “Download now” on the free-report bar, “Switch to LegitFit”.
- Placement: nav, hero, after almost every feature band, footer.
- **No public prices. No self-serve trial.** FAQ is explicit: they do not offer a traditional free trial.
- Demo flow (`/request-demo-full`): three steps — client count (0–50 / 51–150 / 151–500 / 501+) → contact → calendar. Sales-led, sized by member count.

## 6. Copy voice

Short, benefit-first, slightly shouty. “Getting fit is tough. Managing a fitness business shouldn’t be.” Feature names are plain: timetable, memberships, check-in, Marketing Suite. They will use a 20% retention claim in a heading. Sentence length is lower than ours.

## 7. Mobile

- Hamburger; pink CTA survives.
- Hero stacks: copy then layered graphic.
- Marketing Suite / feature bands: picture stacks above or below copy; hanging cards become a vertical list (the glance still works, just taller).
- Calculator and demo form remain usable; client-count chips wrap.
- Pages are very long (10k–18k px). Phone users scroll a lot; the repeating CTA is the safety net.

## 8. Gaps they cover that we do not

- **Tools / savings calculator** (nav).
- **Switch to LegitFit** as a named journey (we have `/migrate`, weaker visually).
- Free report lead-magnet bar.
- Branded member **app** as a pictured hero artefact.
- Live demo-count ticker.
- Comparison-style “0% fees” testimonial tags.
- G2/Capterra badges (we have a hidden slot — correct, until listings exist).

We already cover: public pricing, trial, website SEO migration, 24/7 door access, Command Centre with approval — they do not show those.

# HelgoIQ.com — three marketing additions (report-only mockup)

**Status:** Report-only. No UI build until Declan ticks.  
**Repo:** `HelgoIQ-Organization/HelgoIQ-marketing` (Vite + React Router, Cloudflare Pages)  
**Live:** https://helgoiq.com/  
**Base tip reviewed:** `origin/main` @ `cb57d26` (`Merge pull request #11 … marketing-deploy-skill`)

---

## Design language to match (existing site)

| Token | Value / usage |
|---|---|
| Primary | Forest scale (`forest-500` `#2d6a4f` → `forest-900` `#0a1610`) |
| Surfaces | White + `mist` `#eef3f0` alternating bands |
| Display type | Cormorant Garamond italic for brand wordmark / quotes |
| Body type | Manrope |
| Labels | `.section-label` — xs, uppercase, tracked, forest tint |
| Cards | Rounded-2xl / rounded-xl, light border, soft shadow on product frames |
| CTAs today | `Start free trial` + `Book a demo` via `CtaButtons` |
| Hero pattern | Full-bleed photographic band + dark forest gradient + white copy |

Do **not** import Reformer Network teal/gold. Stay on HelgoIQ forest / mist / cream-as-mist.

---

## Current homepage map (what we change)

Order today:

1. Full-bleed Helgoland hero — “Everything your studio needs…”
2. Connected studio systems (4 numbered items)
3. In the product (screenshot showcase)
4. Studios on HelgoIQ (placeholder quotes for REFRM + Active247)
5. Built for operators (single Pilates ICP card → `/for/pilates`)
6. Platform pillars (6 feature links)
7. Pricing tease
8. Closing CTA (“Ready when your studio is”)

**Proposed homepage order after this work:**

1. **Hero band (updated)** — outcome promise + Bring my site / See it working + split-screen visual  
2. Connected studio systems *(keep)*  
3. **NEW: Built for how your studio runs** — six vertical cards → landing pages  
4. In the product *(keep; may move below verticals if Declan prefers)*  
5. Platform pillars *(keep)*  
6. **NEW: Founding studios** — replaces “Studios on HelgoIQ” placeholder quotes  
7. Pricing tease *(keep)*  
8. Closing CTA *(keep; CTA labels can stay trial/demo unless Declan wants Bring my site here too)*  
9. Footer — review-badge **slot** (hidden until Capterra/GetApp exist)

Existing `/for/pilates` becomes one of the six vertical landings (rewritten to the shared template). New landings added for the other five.

---

## 1. Hero band update (homepage top)

### Copy (proposed)

**Eyebrow / brand:** keep italic Cormorant `HelgoIQ`  
**H1 (outcome promise):**  
`Your studio online in days, not months.`

**Subheading:**  
`Paste your current website. We import it, protect your Google rankings for 30 days, and connect your timetable, booking and payments — live in one platform. Our team walks you through every step.`

**Buttons:**

| Label | Behaviour | Notes |
|---|---|---|
| **Bring my site** (primary) | → `/migrate` *or* a new `/bring-my-site` funnel | Prefer reusing `/migrate` unless Declan wants a dedicated path. Matches “paste your current website” story already started on Migrate. |
| **See it working** (secondary) | Opens 60-second demo video | Video **not yet recorded**. Ship button wired to a modal / lightbox with a labelled placeholder (`Demo video — pending recording`) until the file lands. Do not invent a stock video. |

**Visual:** Split-screen — owner’s old Squarespace (left) dissolving into the same site running in HelgoIQ (right) with timetable live. **Real Refrm screens, not stock.** Asset required from Declan / Refrm before build ships live imagery.

### Honesty constraints

Allowed true claims in/near hero (feature proof, not outcome invention):

- Import your site in minutes (proven on refrm.co.uk)  
- Rankings protected for 30 days (built and tested)  
- Native door access, no third-party bolt-on (true for Active 247 path — place in 24/7 vertical, not hero unless Declan wants it there)

### Open decisions for Declan

| ID | Decision | Default until tick |
|---|---|---|
| **H1** | Keep Helgoland full-bleed photo under the new copy, or replace hero image with the split-screen only? | Keep Helgoland as atmosphere; split-screen as the right-hand / below-fold product visual on desktop, stacked on mobile. |
| **H2** | Primary CTA path: `/migrate` vs `/bring-my-site` | `/migrate` (already live). |
| **H3** | Demo video URL / file when ready | Placeholder modal until supplied. |

---

## 2. Section — “Built for how your studio runs”

**Placement:** Homepage mid-page (after Connected systems; before or after “In the product” — default **after Connected systems**).

**Eyebrow:** `Who it’s for`  
**H2:** `Built for how your studio runs`  
**Intro:** `Six operator types. Same platform. Pick the path that matches the floor you run.`

### Six cards → six landing pages

| Card | Route | Feature bullets (card teaser) | Image brief |
|---|---|---|---|
| Reformer & Pilates studios | `/for/pilates` *(rewrite existing)* | Bed-level booking, waitlists, instructor profiles, trial packs | Refrm studio floor — one location |
| Unstaffed & 24/7 gyms | `/for/unstaffed-gyms` | Native door access (no third-party bolt-on), check-in, signage, automated follow-up while nobody’s there | Active 247 gym at night — door system visible |
| Multi-site operators | `/for/multi-site` | One login, switch between studios, consolidated reporting | Refrm or Active multi-site ops photo — one location |
| Boutique fitness & small group | `/for/boutique-fitness` | Capacity-based classes, packs, memberships, challenges | Boutique / small-group floor — Refrm or approved photo |
| Personal trainers | `/for/personal-trainers` | Appointments, packages, client progress | PT / appointment setting — real photo when supplied |
| Wellness & recovery | `/for/wellness-recovery` | Appointments, room booking, retreats | Recovery / room — real photo when supplied |

Card UI: mist or white band, 2×3 grid desktop, stacked mobile; each card = photo top (or left on large), title, 3–4 teaser chips, `Explore →`.

### Landing page template (all six)

Same structure every time (SEO Phase 5 targets):

1. **Hero** — vertical name + specific pain (one paragraph)  
2. **Three features that solve it** — forest icons / short bodies  
3. **One proof point** — *feature proof only* until live metrics exist (e.g. “Native door access, no third-party bolt-on” / “Bed-level booking with waitlists”)  
4. **Bring my site** primary CTA (+ secondary Book a demo)  
5. **Image** — real photography from Refrm / Active 247, one location per card  

No invented customer testimonials on these pages.

### Example pain lines (draft — Declan rewrites)

| Vertical | Pain (draft) |
|---|---|
| Reformer & Pilates | Reformer capacity, trial packs, and waitlists don’t fit generic gym software — beds and intro offers get bolted on as afterthoughts. |
| Unstaffed & 24/7 | Door access, billing, and follow-up usually mean a third-party bolt-on while the floor is empty. |
| Multi-site | Owners bounce between logins and export CSVs to see the group. |
| Boutique / small group | Capacity-based classes, packs, and challenges need one member record — not three tools. |
| Personal trainers | Appointments, packages, and progress live in different inboxes. |
| Wellness & recovery | Rooms, retreats, and appointments need the same booking brain as classes. |

---

## 3. Section — “Founding studios” (homepage, before footer / pricing)

**Amendment applied:** This is **not** “Real studios, real numbers” with invented stats or Ali/Emma quotes on day one.

**Eyebrow:** `Founding studios`  
**H2:** `First businesses going live on HelgoIQ`  
**Intro:**  
`Real numbers published as they land — no invented testimonials.`

### Two proof cards (side by side)

#### Card A — Refrm Pilates

- **Title:** Refrm Pilates — four studios, Stevenage to Weymouth  
- **Photo:** Genuine studio-floor photo (one location)  
- **Metric slots (hidden until filled):**  
  - `[members]` members  
  - `[classes_per_week]` classes a week  
  - `[admin_hours_saved]` hours saved weekly on admin  
- **Quote:** Declan founder-story only (see below). Not Emma until she supplies wording.  
- **Link:** `→ Read the story` → `/about` or a future `/stories/refrm` (default `/about` until a story page exists)

#### Card B — Active 247

- **Title:** Active 247 — three 24/7 gyms  
- **Photo:** Genuine gym-at-night photo with door system visible  
- **Metric slots (hidden until filled):**  
  - `[members]` members  
  - `[unstaffed_hours_week]` unstaffed hours a week  
  - Door access, billing and follow-up fully automated *(feature claim — may show now)*  
- **Quote:** Declan founder-story only on day one. Ali quote **hidden slot** until approved.  
- **Link:** `→ Read the story` → `/about` or future `/stories/active-247`

### Founder-story quote (Declan only — proposed)

> I run four Pilates studios and three 24/7 gyms. I built HelgoIQ because nothing on the market ran them the way I needed.

Attribution: `Declan Ryan · Founder, HelgoIQ · Refrm Pilates & Active 247`

### Support strip (beneath the two cards)

`Support that answers within [X] hours.`  
**Hidden until Declan confirms X.** Do not invent a number.

### Placeholder architecture (build contract)

```ts
// Conceptual — not shipping until tick
type ProofSlot<T> = { value: T | null; visible: boolean }

refrm: {
  members: null,            // hide row until set
  classesPerWeek: null,
  adminHoursSaved: null,
  quoteEmma: null,          // hide until approved
},
active247: {
  members: null,
  unstaffedHoursWeek: null,
  quoteAli: null,
},
supportResponseHours: null, // hide entire strip until set
```

Render rules:

- If a metric is `null`, do **not** show `0`, `—`, or lorem. Hide the chip.  
- If all metrics on a card are null, show the card with photo + title + founder quote / feature claim only.  
- Day one of Refrm live → fill genuine figures; a month in → genuine quotes from Emma / Ali / Becky when supplied.

---

## Footer addition

- **Review badges slot** beneath company blurb or above legal columns.  
- Hidden until Capterra / GetApp listings exist.  
- Empty `aria-hidden` container or comment-marked region in `Footer.tsx` so badges drop in without layout churn.

---

## Asset checklist (Declan / ops)

| Asset | Needed for | Status |
|---|---|---|
| Split-screen: Squarespace → HelgoIQ (Refrm real screens) | Hero | Required before live imagery |
| 60s demo video | See it working | Pending recording |
| Refrm floor photo (1 location) | Pilates card + Founding studios | Required |
| Active 247 night + door system | 24/7 card + Founding studios | Required |
| Photos for multi-site / boutique / PT / wellness | Remaining cards | Required or temporary forest atmosphere until supplied |
| Declan founder quote — confirm wording | Founding studios | Draft above |
| Support response hours (X) | Strip | Confirm before show |
| Emma / Ali / Becky quotes | Founding studios | Hidden slots |
| Live metrics after go-live | Founding studios | Hidden slots |
| Capterra / GetApp badges | Footer | Hidden slot |

---

## SEO / sitemap (Phase 5)

New paths to add to `sitemap.xml` on build:

- `/for/pilates` (existing — refresh copy)  
- `/for/unstaffed-gyms`  
- `/for/multi-site`  
- `/for/boutique-fitness`  
- `/for/personal-trainers`  
- `/for/wellness-recovery`  

Optional later: `/stories/refrm`, `/stories/active-247`.

Deploy reminder (from `AGENTS.md`): merge alone does not publish; `pnpm deploy:production` + `pnpm deploy:verify` required for helgoiq.com.

---

## Out of scope for this mockup / first build

- Invented testimonials or rounded-up stats  
- Ali / Emma quotes without approval  
- Support-hours number without Declan’s X  
- Fake Capterra badges  
- HelgoIQ Platform / app cockpit rebuild  
- Reformer Network (`reformerpilatesnetwork`) changes  
- Recording the 60s demo (Declan / team)

---

## Decision card — tick to build

| ID | Decision | Proposed default |
|---|---|---|
| **A** | Approve hero copy + Bring my site / See it working | As written |
| **B** | Bring my site → `/migrate` | Yes |
| **C** | Hero visual: Helgoland atmosphere + split-screen product frame | Yes |
| **D** | Six verticals + shared landing template | As written |
| **E** | Section 3 = **Founding studios** (not invented numbers) | As amended |
| **F** | Declan founder quote wording | Draft above — confirm or paste rewrite |
| **G** | Support strip hidden until X confirmed | Yes |
| **H** | Footer review-badge slot hidden until listings exist | Yes |
| **I** | Replace existing homepage “Studios on HelgoIQ” placeholder quotes | Yes |
| **J** | Keep or relocate “In the product” showcase relative to verticals | Keep after verticals |

**Reply with ticks / rewrites.** On approval, Cursor builds on a `cursor/` branch, matches forest/mist design language, wires hidden proof slots, and does not invent testimonials.

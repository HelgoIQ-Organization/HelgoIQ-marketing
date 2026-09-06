/** Fixture copy for the gated competitive lab. Not public marketing. */

export const TABS = [
  { id: 'summary', label: 'Summary' },
  { id: 'compare', label: 'Side-by-side' },
  { id: 'show', label: 'Show-not-tell' },
  { id: 'mockups', label: 'Mockups' },
  { id: 'phases', label: 'Phased plan' },
  { id: 'shots', label: 'Shot list' },
  { id: 'tick', label: 'Tick' },
] as const

export type LabTab = (typeof TABS)[number]['id']

export const SIGNAL_LINE =
  'Borrow the pattern, not the paint: both competitors show a feature working in one glance; helgoiq.com still explains in paragraphs. Keep our honest pricing and trial. Rebuild Home around three show-blocks after you tick.'

export const COMPARISON_ROWS: {
  heading: string
  legitfit: string
  walla: string
  helgoiq: string
  weakest: 'helgoiq' | 'legitfit' | 'walla' | 'none'
}[] = [
  {
    heading: 'Show the thing working',
    legitfit:
      'Strongest. Marketing Suite flow + hanging message cards + outcome tiles. Product chrome, lock-screen notifications, membership cards with Apple Pay.',
    walla:
      'Lifestyle-first. App mock in the hero, four-pillar cards, numbered Meet → Migrate → Train → Grow. Fewer annotated product shots than LegitFit.',
    helgoiq:
      'Weakest. Feature detail pages are headline + paragraph + bullets with no picture. Home screenshots are unannotated admin frames beside long copy.',
    weakest: 'helgoiq',
  },
  {
    heading: 'Visual language',
    legitfit: 'Hot pink on white. High energy. Layered product graphics. Soft pastel feature cards.',
    walla: 'Bright blue + serif headlines + generous white space. Photography of real studios.',
    helgoiq:
      'Forest / mist / Cormorant — already distinctive. Currently too flat: same text rhythm, little motion, little illustration of journeys.',
    weakest: 'helgoiq',
  },
  {
    heading: 'Page architecture',
    legitfit: 'Hero CTA immediately. Rotating business types. Feature pages per capability. Tools in nav.',
    walla:
      'Hero CTA immediately. Pillars, then onboarding, then eight Made For cards, then proof, then public pricing on the homepage.',
    helgoiq:
      'Hero CTA immediately (Bring my site). Then four text columns, then verticals, then eight screenshot essays. Feature depth is a second hop of more text.',
    weakest: 'helgoiq',
  },
  {
    heading: 'Proof and trust',
    legitfit:
      'Loud: 110% growth, 3,500+ professionals, G2/Capterra badges, named studio quotes with percentages. Demo-booked-minutes-ago ticker.',
    walla:
      'Named studios, headshots, 4.9 Capterra, G2 badges, “800+ studios” and 40% admin-time claims on solutions.',
    helgoiq:
      'Honest and empty. Founding studios with null metrics. Sample reviews labelled pending. This is already better ethics — it is not yet better persuasion.',
    weakest: 'helgoiq',
  },
  {
    heading: 'Calls to action',
    legitfit: 'One door: Get demo & pricing. No public prices. No self-serve trial.',
    walla: 'Demo + Make the Switch. Public $320 / $599. No self-serve trial on the homepage.',
    helgoiq:
      'Strongest door. Public £0 / £149 / £249, Start free trial, Book a demo, Bring my site. Do not copy their demo-only funnel.',
    weakest: 'none',
  },
  {
    heading: 'Copy voice',
    legitfit: 'Punchy, benefit-first, short. “Build your timetable easily.” Inflated stats in the hero.',
    walla: 'Empathetic insider. “The studio you built deserves software that keeps up.” Boutique-only.',
    helgoiq:
      'Operator-precise, longer sentences, feature names that sound internal (Command Centre, journey orchestrator). Benefit-first is uneven.',
    weakest: 'helgoiq',
  },
  {
    heading: 'Mobile',
    legitfit: 'Hanging cards stack; CTAs stay pink and sticky. Long pages.',
    walla: 'Hero image stacks under copy. Pillars become a list. Pricing cards stack cleanly.',
    helgoiq: 'Readable, but a phone just gets a taller wall of text. No journey diagram to stack.',
    weakest: 'helgoiq',
  },
]

export const SHARED_PATTERNS = [
  {
    pattern: 'CTA in the first screen',
    why: 'Neither competitor makes you scroll to act. We already do this — keep it.',
  },
  {
    pattern: 'A picture of the product or the outcome beside the promise',
    why: 'LegitFit uses product chrome; Walla uses lifestyle + app. We use Helgoland + a labelled placeholder.',
  },
  {
    pattern: 'Segment by studio type, not by generic “fitness”',
    why: 'Both split yoga / pilates / gym. We already have six /for pages — they need a scene, not chips.',
  },
  {
    pattern: 'Named customers on the homepage',
    why: 'Both put real studios above the fold or just below. We have Refrm and Active 247 — photos and numbers still pending.',
  },
  {
    pattern: 'A four-step “how you start” strip',
    why: 'LegitFit: walkthrough → setup → training → live. Walla: Meet → Migrate → Train → Grow. We have this on /migrate as numbered text only.',
  },
  {
    pattern: 'Repeat the same CTA after every major block',
    why: 'LegitFit repeats “Get demo & pricing” to exhaustion. We go quiet in the middle of Home.',
  },
]

export const TICKS: {
  id: string
  title: string
  proposed: string
  note: string
}[] = [
  {
    id: 'L1',
    title: 'Unlisted lab on helgoiq.com',
    proposed: 'Keep /review/competitive-lab live, noindex, not in nav or sitemap.',
    note: 'Public pages stay as they are. This is the launcher-lab analogue.',
  },
  {
    id: 'T1',
    title: 'Top ten',
    proposed: 'Adopt the ranked ten in the lab. Phase A is Home show-blocks + hero product frame.',
    note: 'No public Home rewrite until this is ticked.',
  },
  {
    id: 'T2',
    title: 'CTA stance',
    proposed:
      'Keep trial + demo. Do not demo-gate pricing. Hero may still lead with Bring my site for migration-intent traffic.',
    note: 'Independents will not book a sales call as the only door.',
  },
  {
    id: 'T3',
    title: 'Hero visual',
    proposed: 'Helgoland atmosphere stays. Product working sits in-frame (split or single).',
    note: 'Real Refrm screens replace the illustrative chrome when you supply them.',
  },
  {
    id: 'T4',
    title: 'Comms journey copy',
    proposed: 'Trial added → same day → after first class → birthday. Outcome tiles without invented percentages.',
    note: 'Needs your message-preview captures before this ships on Home.',
  },
  {
    id: 'T5',
    title: 'Do not build public pages from this PR',
    proposed: 'This merge is lab + docs only.',
    note: 'A later PR, after ticks, does Phase A.',
  },
]

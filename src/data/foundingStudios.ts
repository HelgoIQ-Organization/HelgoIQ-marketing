/**
 * Founding studios proof — hidden slots until real data lands.
 * Never invent members / hours / testimonials.
 */

export type MetricSlot = {
  /** Label after the number, e.g. "members" */
  label: string
  value: number | string | null
}

export type FoundingStudio = {
  id: string
  name: string
  subtitle: string
  imageLabel: string
  imageSrc: string | null
  storyHref: string
  storyLabel: string
  /** Feature claim that may show without a metric (e.g. door automation). */
  featureClaims: string[]
  metrics: MetricSlot[]
  /** Extra quote slots (Emma / Ali) — hidden until non-null. */
  secondaryQuote: { text: string; attribution: string } | null
}

/** Declan founder-story — approved draft from mockup. */
export const FOUNDER_QUOTE = {
  text: 'I run four Pilates studios and three 24/7 gyms. I built HelgoIQ because nothing on the market ran them the way I needed.',
  attribution: 'Declan Ryan · Founder, HelgoIQ · Refrm Pilates & Active 247',
} as const

export const FOUNDING_STUDIOS: FoundingStudio[] = [
  {
    id: 'refrm',
    name: 'Refrm Pilates',
    subtitle: 'Four studios, Stevenage to Weymouth',
    imageLabel: 'Refrm studio floor — genuine photo pending',
    imageSrc: null,
    storyHref: '/about',
    storyLabel: 'Read the story',
    featureClaims: [],
    metrics: [
      { label: 'members', value: null },
      { label: 'classes a week', value: null },
      { label: 'hours saved weekly on admin', value: null },
    ],
    secondaryQuote: null,
  },
  {
    id: 'active247',
    name: 'Active 247',
    subtitle: 'Three 24/7 gyms',
    imageLabel: 'Active 247 gym at night — door system photo pending',
    imageSrc: null,
    storyHref: '/about',
    storyLabel: 'Read the story',
    featureClaims: ['Door access, billing and follow-up fully automated'],
    metrics: [
      { label: 'members', value: null },
      { label: 'unstaffed hours a week', value: null },
    ],
    secondaryQuote: null,
  },
]

/** Support strip — entire strip hidden while null. Declan confirms X before show. */
export const SUPPORT_RESPONSE_HOURS: number | null = null

export function visibleMetrics(studio: FoundingStudio): MetricSlot[] {
  return studio.metrics.filter(m => m.value !== null && m.value !== '')
}

/** Review badges — hidden until listings exist. */
export const REVIEW_BADGES_ENABLED = false

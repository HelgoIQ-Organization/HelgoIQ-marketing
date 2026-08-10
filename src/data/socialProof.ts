/**
 * Named studio social proof for Arketa-parity marketing.
 * Quotes marked `placeholder: true` are awaiting final studio approval —
 * replace copy before production cutover.
 */
export type SocialProofItem = {
  studio: string
  name: string
  role: string
  quote: string
  location: string
  placeholder: boolean
}

export const featuredStudios = [
  { name: 'REFRM Pilates', location: 'UK' },
  { name: 'Active247', location: 'UK' },
] as const

export const socialProof: SocialProofItem[] = [
  {
    studio: 'REFRM Pilates',
    name: 'Studio Owner',
    role: 'Founder',
    location: 'UK',
    quote:
      'Placeholder quote pending approval — HelgoIQ replaced fragmented booking, CRM, and follow-up tools with one connected platform for our reformer studio.',
    placeholder: true,
  },
  {
    studio: 'Active247',
    name: 'Operations Lead',
    role: 'Studio Operations',
    location: 'UK',
    quote:
      'Placeholder quote pending approval — waitlists, trial conversion, and member retention finally live in the same system our front desk actually uses.',
    placeholder: true,
  },
]

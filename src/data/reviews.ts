import {
  CAPTERRA_GYM_CATEGORY_URL,
  CAPTERRA_VENDORS_URL,
  G2_VENDORS_URL,
  GETAPP_VENDORS_URL,
  GOOGLE_BUSINESS_CREATE_URL,
  GOOGLE_BUSINESS_ELIGIBILITY_URL,
  HELGOIQ_GOOGLE_FACTS,
  REVIEW_PLATFORM_POLICY,
  SOFTWARE_ADVICE_VENDORS_URL,
  TRUSTPILOT_CLAIM_URL,
  TRUSTPILOT_PROFILE_URL,
  type PlatformId,
  type PlatformSetupStatus,
  type PlatformSuitability,
} from '../lib/reviewPlatforms'
import {
  COMPANY_LEGAL_NAME,
  COMPANY_NUMBER,
  CONTACT_EMAIL_ADDRESS,
  REGISTERED_OFFICE_SINGLE_LINE,
} from '../lib/company'

export type FeaturedTestimonial = {
  id: string
  quote: string
  name: string
  handle: string
  featured?: boolean
}

export type StudioReview = {
  id: string
  rating: 5
  author: string
  date: string
  title: string
  body: string
}

/**
 * Layout samples only. Same honesty rule as Home / For Pilates:
 * do not present these as live Google, Trustpilot, or Capterra reviews.
 */
export const featuredTestimonials: FeaturedTestimonial[] = [
  {
    id: 'ease',
    quote:
      '[Placeholder — pending approved wording] We went from a pile of booking tools to a fully working studio operation without a systems team — and without learning a new stack from scratch.',
    name: 'Studio owner',
    handle: 'Boutique reformer studio',
  },
  {
    id: 'speed',
    quote:
      '[Placeholder — pending approved wording] HelgoIQ helped us stand up a timetable, intro offer, and front-desk flow in days, not a quarter. The demo already looked like our studio.',
    name: 'Operations lead',
    handle: 'Multi-service fitness operator',
  },
  {
    id: 'refrm',
    quote:
      '[Placeholder — pending approved wording] HelgoIQ is the operating layer we wanted for bookings, memberships, and day-to-day studio clarity. One data layer. Fewer tabs. Calmer mornings.',
    name: 'REFRM Pilates',
    handle: 'Boutique reformer studio',
    featured: true,
  },
  {
    id: 'support',
    quote:
      '[Placeholder — pending approved wording] The team is responsive and service-minded. When something on the floor needed a change, we got a human answer — not a ticket that vanished.',
    name: 'Front desk lead',
    handle: 'Independent Pilates studio',
  },
  {
    id: 'growth',
    quote:
      '[Placeholder — pending approved wording] Trial packs convert because follow-up lives on the same member record. We look professional to new clients and we can see which classes actually fill.',
    name: 'Owner-operator',
    handle: 'Growing boutique studio',
  },
  {
    id: 'active247',
    quote:
      '[Placeholder — pending approved wording] One connected platform for scheduling, CRM follow-up, and the decisions that fill the room.',
    name: 'Active247',
    handle: 'Multi-service fitness operator',
  },
]

export const studioReviews: StudioReview[] = [
  {
    id: 'booking',
    rating: 5,
    author: 'Reformer studio owner',
    date: 'Pending live review',
    title: 'Waitlists that actually convert',
    body: 'Sample layout — replace with a live review. Class capacity, substitutions, and waitlists sit on one timetable so the room fills without a spreadsheet at the desk.',
  },
  {
    id: 'setup',
    rating: 5,
    author: 'New studio operator',
    date: 'Pending live review',
    title: 'Live without a systems team',
    body: 'Sample layout — replace with a live review. Booking, packs, and the member record were usable quickly. No code, no agency build, no second login for payments.',
  },
  {
    id: 'crm',
    rating: 5,
    author: 'Membership manager',
    date: 'Pending live review',
    title: 'The messy middle after the trial',
    body: 'Sample layout — replace with a live review. Intro offers, tasks, and follow-up stay on the same person. The gap after class one is no longer where people disappear.',
  },
  {
    id: 'payments',
    rating: 5,
    author: 'Studio finance lead',
    date: 'Pending live review',
    title: 'Failed payments recovered in-product',
    body: 'Sample layout — replace with a live review. Memberships, packs, and retries live with the booking record. Less exporting. Fewer “did they pay?” conversations.',
  },
  {
    id: 'support-review',
    rating: 5,
    author: 'Owner-operator',
    date: 'Pending live review',
    title: 'Responsive when the floor needs it',
    body: 'Sample layout — replace with a live review. Questions about timetable changes and member journeys got a clear answer. That service-minded attitude matters on a busy Saturday.',
  },
  {
    id: 'ai',
    rating: 5,
    author: 'Multi-location ops',
    date: 'Pending live review',
    title: 'AI drafts we approve, not auto-send',
    body: 'Sample layout — replace with a live review. Churn flags and campaign drafts stay behind a human approval queue. Intelligence without sending something the floor would not stand behind.',
  },
  {
    id: 'migrate',
    rating: 5,
    author: 'Studio switching systems',
    date: 'Pending live review',
    title: 'Left the old stack without a panic week',
    body: 'Sample layout — replace with a live review. Members, remaining packs, and the public timetable were previewed before go-live. Migration felt checked, not hoped-for.',
  },
  {
    id: 'growth-review',
    rating: 5,
    author: 'Boutique fitness owner',
    date: 'Pending live review',
    title: 'Looks like a real studio, not a starter kit',
    body: 'Sample layout — replace with a live review. The booking site and member journey look finished. New clients take us seriously before they walk through the door.',
  },
  {
    id: 'team',
    rating: 5,
    author: 'Studio manager',
    date: 'Pending live review',
    title: 'The team can see what is on fire',
    body: 'Sample layout — replace with a live review. Rota, permissions, and a daily command view mean the owner is not the only person who knows which class is short a teacher.',
  },
]

export type ReviewPlatform = {
  id: PlatformId
  name: string
  suitability: PlatformSuitability
  status: PlatformSetupStatus
  headline: string
  body: string
  fit: string[]
  caution: string[]
  ownerAction: string
  href: string
  hrefLabel: string
}

export const reviewPlatforms: ReviewPlatform[] = [
  {
    id: 'google',
    name: 'Google reviews',
    suitability: REVIEW_PLATFORM_POLICY.google.suitability,
    status: REVIEW_PLATFORM_POLICY.google.status,
    headline: 'Powerful if you qualify — not automatic for a SaaS brand',
    body: 'Google Business Profile is the kettlebell-app pattern people recognise: stars, recency, and a “Write a review” link. Google only allows listings for businesses that make in-person contact with customers during stated hours. Online-only brands are explicitly ineligible. HelgoIQ can list if staff visit studios for onboarding, or if customers visit a real office with signage. A registered office used only for Companies House mail is not a storefront.',
    fit: [
      'Studio owners already search Google for local proof',
      'Matches the product’s own Google Reviews & Sentiment feature',
      'Free once a listing is verified',
    ],
    caution: [
      'Do not publish Rooks Nest Farm as a public shop if customers never visit it',
      'Virtual offices, PO boxes, and mail-only addresses are grounds for suspension',
      'A listing created from this environment cannot be verified — the owner must complete Google’s flow',
    ],
    ownerAction:
      'Decide eligibility, then create the profile at business.google.com with the listing pack on this page. Paste the Place ID into VITE_GOOGLE_PLACE_ID to unlock the public write-review button.',
    href: GOOGLE_BUSINESS_CREATE_URL,
    hrefLabel: 'Open Google Business Profile',
  },
  {
    id: 'trustpilot',
    name: 'Trustpilot',
    suitability: REVIEW_PLATFORM_POLICY.trustpilot.suitability,
    status: REVIEW_PLATFORM_POLICY.trustpilot.status,
    headline: 'Claim the free profile now — do not pay until reviews exist',
    body: 'Trustpilot is suitable as a company-reputation layer for a UK SaaS. Anyone can review helgoiq.com once the domain is claimed. The free tier lets you respond and show a basic TrustScore. Paid plans start around $99/month per domain on a 12-month prepaid contract and jump quickly — skip them until invitation volume actually needs it. Trustpilot is weaker than Capterra or G2 for feature-level software comparison.',
    fit: [
      'UK buyers recognise the TrustScore badge',
      'Free claim, replies, and a public profile at uk.trustpilot.com/review/helgoiq.com',
      'Useful for service, billing, and onboarding feedback',
    ],
    caution: [
      'Invite every eligible customer the same way — no cherry-picking (CMA / ASA)',
      'Do not buy 5-star campaigns or filter negatives',
      'Paid TrustBox widgets are optional; this page does not embed a paid widget',
    ],
    ownerAction:
      'Sign in at business.trustpilot.com with an @helgoiq.com address, claim helgoiq.com, and start invitation-only collection after a few live studios can review honestly.',
    href: TRUSTPILOT_CLAIM_URL,
    hrefLabel: 'Claim Trustpilot',
  },
  {
    id: 'capterra',
    name: 'Capterra',
    suitability: REVIEW_PLATFORM_POLICY.capterra.suitability,
    status: REVIEW_PLATFORM_POLICY.capterra.status,
    headline: 'Yes — this is the right software marketplace to list first',
    body: 'Capterra is built for B2B software buyers comparing gym and studio platforms. A product listing is free. Categories that fit HelgoIQ are Gym Management Software plus membership / scheduling adjacencies. Capterra, GetApp, and Software Advice now sit under G2 Digital Markets — one vendor cabinet, separate listings and review pools. Paid PPC is optional and not required to appear.',
    fit: [
      'Studio operators already shop Mindbody, TeamUp, and Glofox here',
      'Verified reviews with feature checklists, not just star ratings',
      'Free listing; screenshots and pricing from the public site are enough to start',
    ],
    caution: [
      'Use an @helgoiq.com email — personal Gmail is often rejected',
      'Tick only features the product actually ships',
      'A Capterra review does not copy to G2 (separate cabinets)',
    ],
    ownerAction:
      'Register at capterra.com/vendors, claim or create HelgoIQ, set primary category to Gym Management Software, and upload existing product screenshots from /features.',
    href: CAPTERRA_VENDORS_URL,
    hrefLabel: 'List on Capterra',
  },
  {
    id: 'g2',
    name: 'G2',
    suitability: REVIEW_PLATFORM_POLICY.g2.suitability,
    status: REVIEW_PLATFORM_POLICY.g2.status,
    headline: 'Claim in parallel — buyers treat G2 as the software shortlist',
    body: 'G2 is the other primary B2B software review site. Listings and reviews do not sync from Capterra even though G2 now owns that family. A free vendor profile is possible; badges and buyer-intent data are paid. For HelgoIQ, G2 matters once a handful of studios can write structured “what I like / dislike” reviews.',
    fit: [
      'Structured reviews (likes, dislikes, alternatives considered)',
      'Category grids studio software buyers already use',
      'Separate from Capterra — worth claiming so the name is not empty',
    ],
    caution: [
      'Incentivised reviews must be disclosed',
      'Do not manufacture volume before real customers exist',
    ],
    ownerAction: 'Create a vendor account at sell.g2.com and submit HelgoIQ under gym / membership management.',
    href: G2_VENDORS_URL,
    hrefLabel: 'List on G2',
  },
  {
    id: 'getapp',
    name: 'GetApp & Software Advice',
    suitability: REVIEW_PLATFORM_POLICY.getapp.suitability,
    status: REVIEW_PLATFORM_POLICY.getapp.status,
    headline: 'Possible from the same cabinet as Capterra',
    body: 'GetApp and Software Advice share the G2 Digital Markets vendor cabinet with Capterra. Claim each listing separately after Capterra is live. Same product facts, separate public pages. Skip paid advisor-lead programmes until inbound volume justifies them.',
    fit: [
      'Extra discovery surfaces for the same product record',
      'No second product write-up required once Capterra is complete',
    ],
    caution: ['Do not treat these as a substitute for Capterra or G2'],
    ownerAction: 'From the G2 Digital Markets cabinet, claim GetApp and Software Advice after the Capterra listing is approved.',
    href: GETAPP_VENDORS_URL,
    hrefLabel: 'GetApp vendors',
  },
]

export const siblingMarketplaceLinks = [
  { label: 'Capterra Gym Management category', href: CAPTERRA_GYM_CATEGORY_URL },
  { label: 'Software Advice vendors', href: SOFTWARE_ADVICE_VENDORS_URL },
  { label: 'Expected Trustpilot profile', href: TRUSTPILOT_PROFILE_URL },
  { label: 'Google eligibility rules', href: GOOGLE_BUSINESS_ELIGIBILITY_URL },
]

export const googleListingPack = {
  businessName: 'HelgoIQ',
  legalName: COMPANY_LEGAL_NAME,
  companyNumber: COMPANY_NUMBER,
  primaryCategory: 'Software company',
  website: 'https://helgoiq.com',
  email: CONTACT_EMAIL_ADDRESS,
  verificationAddress: REGISTERED_OFFICE_SINGLE_LINE,
  publicAddressPolicy:
    'Hide the street address unless customers visit Rooks Nest Farm during stated hours and permanent signage exists. Default: service-area business covering the United Kingdom, address used only for Google’s private verification.',
  serviceArea: 'United Kingdom',
  customersVisitOffice: HELGOIQ_GOOGLE_FACTS.customersVisitRegisteredOffice,
  staffVisitStudios: HELGOIQ_GOOGLE_FACTS.staffVisitCustomerSites,
  description:
    'HelgoIQ is the intelligent operating platform for modern fitness studios. Booking, memberships, payments, CRM, marketing sites, and AI intelligence share one data layer — built first for reformer Pilates and boutique operators.',
}

export const reviewCollectionRules = [
  {
    title: 'Invite evenly',
    body: 'Ask every studio that has completed onboarding — not only the happiest ones. Cherry-picking invitations is the fastest way to lose Trustpilot, Capterra, and ASA/CMA standing.',
  },
  {
    title: 'No bought stars',
    body: 'Do not pay for 5-star reviews, run “review for discount” schemes, or suppress negatives. A gift for completing any review (not a positive one) must be disclosed on G2/Capterra.',
  },
  {
    title: 'Say they are samples until they are not',
    body: 'Cards on this page are layout samples until a live profile URL and real quotes are approved. We do not mark up fake AggregateRating schema.',
  },
]

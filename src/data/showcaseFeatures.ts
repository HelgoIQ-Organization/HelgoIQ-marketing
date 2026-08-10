/** Product screenshots from the live helgoiq.com asset set */

export type ShowcaseFeature = {
  id: string
  eyebrow: string
  headline: string
  body: string
  help: string
  bullets: string[]
  image: string
  imageAlt: string
  href: string
}

export const showcaseFeatures: ShowcaseFeature[] = [
  {
    id: 'screen-management',
    eyebrow: 'Screen management',
    headline: 'Live studio displays without another system to manage',
    body: 'Connect front-desk screens, playlist content, offers, schedules, and announcements to the same operational data already powering the studio.',
    help: 'Studios stop juggling a separate digital-signage login. What’s on the wall matches today’s timetable, offers, and member moments.',
    bullets: [
      'Device status and playlists in one dashboard',
      'Audience rules by membership tier or attendance',
      'Schedules, offers, and retreat promos from live data',
    ],
    image: '/images/feature-screen-management.webp',
    imageAlt: 'HelgoIQ Screen Management dashboard with studio displays and content playlist',
    href: '/features#screen-management',
  },
  {
    id: 'ai-inbox',
    eyebrow: 'AI-powered inbox',
    headline: 'Draft replies with the member context your team already knows',
    body: 'Conversation history, health score, membership status, and suggested retention language — before you open the thread.',
    help: 'Front desk answers faster without losing the human tone. AI drafts stay in an approval path so nothing reaches a member unchecked.',
    bullets: [
      'Member context beside every conversation',
      'AI draft replies with edit-before-send',
      'Churn and attendance signals in-thread',
    ],
    image: '/images/feature-ai-inbox.webp',
    imageAlt: 'HelgoIQ AI-powered inbox with draft reply and member context panel',
    href: '/features#ai-inbox',
  },
  {
    id: 'social-meta',
    eyebrow: 'Marketing & ads',
    headline: 'Social and Meta ads intelligence built for studio operators',
    body: 'Compose posts, run campaigns, and get plain-language recommendations from performance data — without another agency dashboard.',
    help: 'Boutique studios get clearer “what to post / what to spend” guidance tied to trials and class fill, not generic ad metrics.',
    bullets: [
      'Post composer for Instagram and Facebook',
      'Meta campaign performance in-platform',
      'AI insights on creative and audience',
    ],
    image: '/images/feature-social-meta.webp',
    imageAlt: 'HelgoIQ Social Media and Meta Ads dashboard with AI analysis',
    href: '/features#social-meta',
  },
  {
    id: 'retreat-management',
    eyebrow: 'Retreats',
    headline: 'Room allocation, deposits, and guest status in one workflow',
    body: 'Create retreats, manage capacity and room types, track deposits and balances, and keep itinerary visibility next to the rest of the studio.',
    help: 'High-margin retreats stop living in spreadsheets. Owners see who’s paid, who’s assigned, and what’s left to sell.',
    bullets: [
      'Room types and visual allocation',
      'Deposit and final payment tracking',
      'Waitlist and participant communications',
    ],
    image: '/images/feature-retreat-management.webp',
    imageAlt: 'HelgoIQ Retreat Management with room allocation and booking details',
    href: '/features#retreat-management',
  },
  {
    id: 'access-control',
    eyebrow: 'Front desk',
    headline: 'Check-in and welcome moments tied to operational records',
    body: 'QR check-in, kiosk welcome screens, access rules, and live logs — connected to membership and attendance, not a separate door app.',
    help: 'Arrivals become recognition and data: the right welcome on screen, the right access rule, and a log staff can trust.',
    bullets: [
      'Branded kiosk welcome with member context',
      'Access rules linked to membership state',
      'Live access log for the front desk',
    ],
    image: '/images/feature-access-control.webp',
    imageAlt: 'HelgoIQ Access Control welcome kiosk and live access log',
    href: '/features#access-control',
  },
  {
    id: 'milestones',
    eyebrow: 'Retention',
    headline: 'Milestones and rewards that keep members and teachers engaged',
    body: 'Configurable journeys for class counts, anniversaries, and teacher achievements — with badges and optional rewards.',
    help: 'Recognition becomes a system, not a sticky note. Studios celebrate streaks and tenure without manual tracking.',
    bullets: [
      'Member and teacher milestone journeys',
      'Custom badges and reward assignment',
      'Achievement visibility for the community',
    ],
    image: '/images/feature-milestones.webp',
    imageAlt: 'HelgoIQ Milestones dashboard with member and teacher achievements',
    href: '/features#milestones',
  },
  {
    id: 'newsletter',
    eyebrow: 'Marketing',
    headline: 'AI newsletter drafts from what’s actually happening in the studio',
    body: 'Pull schedules, instructor spotlights, retreats, milestones, and offers into an on-brand draft you can edit and send.',
    help: 'Owners get a monthly member email in minutes, grounded in real classes and offers — not a blank template.',
    bullets: [
      'Generated from live studio data',
      'Tone and content controls',
      'Preview, send, or export',
    ],
    image: '/images/feature-newsletter.webp',
    imageAlt: 'HelgoIQ AI Newsletter Creator with live preview',
    href: '/features#newsletter',
  },
  {
    id: 'reviews',
    eyebrow: 'Reputation',
    headline: 'Reviews and sentiment you can act on',
    body: 'Bring Google reviews into the platform, see themes and sentiment shifts, and draft replies when something needs attention.',
    help: 'Studios catch service gaps early and turn strong reviews into clearer public proof — without living in Google Business Profile.',
    bullets: [
      'Sentiment and theme tracking',
      'AI-suggested replies for negatives',
      'Rating and volume trends over time',
    ],
    image: '/images/feature-reviews.webp',
    imageAlt: 'HelgoIQ Google Reviews and sentiment analysis dashboard',
    href: '/features#reviews',
  },
]

/** Operator verticals for homepage cards + /for/* landing pages (Phase 5 SEO). */

export type Vertical = {
  slug: string
  path: string
  name: string
  shortName: string
  teaser: string[]
  pain: string
  features: { title: string; body: string }[]
  /** Feature proof only — not invented outcome stats. */
  proofPoint: string
  imageLabel: string
  /** Optional real photo path once Declan supplies assets. */
  imageSrc: string | null
}

export const VERTICALS: Vertical[] = [
  {
    slug: 'pilates',
    path: '/for/pilates',
    name: 'Reformer & Pilates studios',
    shortName: 'Pilates',
    teaser: ['Bed-level booking', 'Waitlists', 'Instructor profiles', 'Trial packs'],
    pain:
      'Reformer capacity, trial packs, and waitlists don\u2019t fit generic gym software — beds and intro offers get bolted on as afterthoughts.',
    features: [
      {
        title: 'Bed-level booking',
        body: 'Schedule by reformer, not just room capacity, so the floor matches what members actually book.',
      },
      {
        title: 'Waitlists that fill gaps',
        body: 'Cancellations and no-shows open seats to the next person without a spreadsheet chase.',
      },
      {
        title: 'Trial packs on one record',
        body: 'Intro offers, instructor profiles, and conversion follow-up sit on the same member journey.',
      },
    ],
    proofPoint: 'Bed-level booking with waitlists — built for how reformer studios fill the room.',
    imageLabel: 'Refrm studio floor — photo pending',
    imageSrc: null,
  },
  {
    slug: 'unstaffed-gyms',
    path: '/for/unstaffed-gyms',
    name: 'Unstaffed & 24/7 gyms',
    shortName: '24/7 gyms',
    teaser: ['Native door access', 'Check-in', 'Signage', 'Automated follow-up'],
    pain:
      'Door access, billing, and follow-up usually mean a third-party bolt-on while the floor is empty.',
    features: [
      {
        title: 'Native door access',
        body: 'Access control in the platform — no third-party bolt-on layered on top of billing.',
      },
      {
        title: 'Check-in without a desk',
        body: 'Members get in; you see who was there when nobody is on shift.',
      },
      {
        title: 'Follow-up that still runs',
        body: 'Billing, signage, and automated outreach keep working through unstaffed hours.',
      },
    ],
    proofPoint: 'Native door access — no third-party bolt-on.',
    imageLabel: 'Active 247 gym at night — door system photo pending',
    imageSrc: null,
  },
  {
    slug: 'multi-site',
    path: '/for/multi-site',
    name: 'Multi-site operators',
    shortName: 'Multi-site',
    teaser: ['One login', 'Switch studios', 'Consolidated reporting'],
    pain: 'Owners bounce between logins and export CSVs to see the group.',
    features: [
      {
        title: 'One login',
        body: 'Owners and managers enter once, then switch between locations without new accounts.',
      },
      {
        title: 'Studio switcher',
        body: 'Context stays clear: timetable, members, and tasks for the site you\u2019re looking at.',
      },
      {
        title: 'Consolidated reporting',
        body: 'Group view without merging spreadsheets every Monday morning.',
      },
    ],
    proofPoint: 'One login across studios with consolidated reporting.',
    imageLabel: 'Multi-site ops photo pending',
    imageSrc: null,
  },
  {
    slug: 'boutique-fitness',
    path: '/for/boutique-fitness',
    name: 'Boutique fitness & small group',
    shortName: 'Boutique',
    teaser: ['Capacity-based classes', 'Packs', 'Memberships', 'Challenges'],
    pain: 'Capacity-based classes, packs, and challenges need one member record — not three tools.',
    features: [
      {
        title: 'Capacity-based classes',
        body: 'Small-group limits, packs, and memberships share the same booking brain.',
      },
      {
        title: 'Packs and memberships',
        body: 'Sell what you sell today without exporting credits into another system.',
      },
      {
        title: 'Challenges that stick',
        body: 'Campaigns and challenges attach to the same people who book your classes.',
      },
    ],
    proofPoint: 'Capacity-based classes, packs, and memberships on one member record.',
    imageLabel: 'Boutique / small-group floor photo pending',
    imageSrc: null,
  },
  {
    slug: 'personal-trainers',
    path: '/for/personal-trainers',
    name: 'Personal trainers',
    shortName: 'Personal trainers',
    teaser: ['Appointments', 'Packages', 'Client progress'],
    pain: 'Appointments, packages, and progress live in different inboxes.',
    features: [
      {
        title: 'Appointments',
        body: 'Book 1:1 sessions with clear availability — not a shared calendar hack.',
      },
      {
        title: 'Packages',
        body: 'Session packs and renewals on the client record you already trust.',
      },
      {
        title: 'Client progress',
        body: 'Notes and progress stay with the person, not in a private spreadsheet.',
      },
    ],
    proofPoint: 'Appointments, packages, and progress on one client record.',
    imageLabel: 'PT / appointment setting photo pending',
    imageSrc: null,
  },
  {
    slug: 'wellness-recovery',
    path: '/for/wellness-recovery',
    name: 'Wellness & recovery',
    shortName: 'Wellness',
    teaser: ['Appointments', 'Room booking', 'Retreats'],
    pain: 'Rooms, retreats, and appointments need the same booking brain as classes.',
    features: [
      {
        title: 'Appointments',
        body: 'Treatments and recovery sessions book alongside everything else you run.',
      },
      {
        title: 'Room booking',
        body: 'Rooms and resources have availability that doesn\u2019t collide with classes.',
      },
      {
        title: 'Retreats',
        body: 'Retreats and longer programmes use the same member and payment layer.',
      },
    ],
    proofPoint: 'Appointments, room booking, and retreats on the same platform.',
    imageLabel: 'Recovery / room photo pending',
    imageSrc: null,
  },
]

export function verticalBySlug(slug: string | undefined): Vertical | undefined {
  if (!slug) return undefined
  return VERTICALS.find(v => v.slug === slug)
}

export const VERTICAL_PATHS = VERTICALS.map(v => v.path)

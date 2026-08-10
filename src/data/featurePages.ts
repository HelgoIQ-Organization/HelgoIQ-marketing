import {
  Brain,
  Calendar,
  CreditCard,
  Globe2,
  LucideIcon,
  Users,
  Zap,
} from 'lucide-react'

export type FeaturePage = {
  slug: string
  label: string
  headline: string
  support: string
  icon: LucideIcon
  sections: { title: string; body: string; bullets: string[] }[]
}

export const featurePages: FeaturePage[] = [
  {
    slug: 'booking',
    label: 'Booking & scheduling',
    headline: 'A timetable your front desk can trust',
    support:
      'Classes, appointments, recovery sessions, waitlists, and check-in — connected to the same member and membership records as the rest of HelgoIQ.',
    icon: Calendar,
    sections: [
      {
        title: 'Fill the room without spreadsheet gymnastics',
        body: 'Recurring schedules, capacity rules, and waitlist promotion that actually fires when a spot opens — including hold windows your studio defines.',
        bullets: [
          'Recurring and one-off class schedules',
          'Automated waitlist with configurable hold windows',
          'Instructor substitution workflows',
          'Kiosk / front-desk check-in',
          'Deferred and recovery session booking',
          'Cancellation policy enforcement',
        ],
      },
      {
        title: 'Built for reformer and boutique formats',
        body: 'Pilates and boutique studios need clarity on capacity, teachers, and late changes. HelgoIQ keeps the operational picture in one place instead of chat threads.',
        bullets: [
          'Class capacity and room awareness',
          'Teacher-facing schedules',
          'Same-day change visibility for staff',
        ],
      },
    ],
  },
  {
    slug: 'memberships',
    label: 'Memberships & payments',
    headline: 'Revenue that reconciles to attendance',
    support:
      'Trials, packs, memberships, gift cards, and failed-payment recovery — Stripe and GoCardless native — tied to the member profile your team already uses.',
    icon: CreditCard,
    sections: [
      {
        title: 'Sell the products studios actually sell',
        body: 'Intro offers, class packs, recurring memberships, and one-off invoices without bolting on a separate billing tool.',
        bullets: [
          'Stripe card payments',
          'GoCardless direct debit',
          'Membership renewals and pauses',
          'Class packs and credit packs',
          'Trial packs and conversion tracking',
          'Refunds and failed-payment retries',
        ],
      },
      {
        title: 'Fewer “did they pay?” conversations',
        body: 'Payment state sits next to attendance and CRM stages, so front desk and owners share one truth.',
        bullets: [
          'Purchase history on the member profile',
          'Staff invoicing hooks',
          'Stripe Connect path on Premium for multi-location',
        ],
      },
    ],
  },
  {
    slug: 'crm',
    label: 'CRM & marketing',
    headline: 'Close the gap between trial and member',
    support:
      'Most studios don’t lose people in the room — they lose them in the follow-up. HelgoIQ gives you pipeline, tasks, segments, and campaigns on the same data as bookings.',
    icon: Zap,
    sections: [
      {
        title: 'A sales pipeline built for studios',
        body: 'Leads, stages, and tasks that match how boutique fitness actually converts — not a generic CRM template.',
        bullets: [
          'Visual sales pipeline',
          'Lead source tracking',
          'Follow-up tasks and reminders',
          'Trial conversion tracking',
          'Retention sequences on Growth+',
          'Smart segments and journey orchestration',
        ],
      },
      {
        title: 'Marketing without another login',
        body: 'Email, push, campaigns, referrals, and landing pages that can reference live studio inventory.',
        bullets: [
          'Campaign builder',
          'Referral programme',
          'Gift cards and discount codes',
          'Landing pages tied to offers',
        ],
      },
    ],
  },
  {
    slug: 'ai',
    label: 'AI & Command Centre',
    headline: 'Intelligence that surfaces — your team still decides',
    support:
      'Twenty-six AI features for churn, fill rates, campaigns, forecasting, and daily briefings. Everything member-facing routes through human approval.',
    icon: Brain,
    sections: [
      {
        title: 'Start the day in the Command Centre',
        body: 'One view of what needs attention: at-risk members, underfilled classes, campaign drafts, and anomalies — before the first class starts.',
        bullets: [
          'AI Churn Prevention',
          'AI Class Filler',
          'AI Trial Conversion prioritisation',
          'AI Financial Forecasting',
          'AI Anomaly Detection',
          'AI Weekly Growth Brief',
        ],
      },
      {
        title: 'Governance by default',
        body: 'Draft replies and campaigns are suggestions. Approval queues keep brand voice and member trust intact.',
        bullets: [
          'AI Governance & approval queue',
          'AI-powered inbox drafts with member context',
          'AI Newsletter Creator from live studio data',
          'Sentiment analysis on reviews',
        ],
      },
    ],
  },
  {
    slug: 'websites',
    label: 'Websites & migration',
    headline: 'A public site connected to the operating system',
    support:
      'HelgoIQ websites are the acquisition layer of the platform — timetables, pricing, retreats, teachers, and lead capture powered by live data — with SEO-safe migration when you leave an old site.',
    icon: Globe2,
    sections: [
      {
        title: 'Live data, not a disconnected builder',
        body: 'Publish schedules, membership offers, and retreat inventory without copying numbers into a separate CMS every week.',
        bullets: [
          'Timetable-powered pages',
          'Pricing and intro offers',
          'Teacher and location pages',
          'Lead forms into CRM',
        ],
      },
      {
        title: 'Migration in preservation mode',
        body: 'Crawl, map, preview, redirect, verify — then optimise. Designed so you don’t gamble search visibility for a redesign.',
        bullets: [
          'Source-site crawl of SEO fields',
          'URL mapping and redirect preview',
          'Shadow launch / stability window',
          'Unlock optimisation after verification',
        ],
      },
    ],
  },
  {
    slug: 'team',
    label: 'Team & ops',
    headline: 'Operations that don’t only live in the owner’s head',
    support:
      'Rota, permissions, payroll hooks, screens, access, and daily operational visibility — so the studio keeps running when the founder steps off the floor.',
    icon: Users,
    sections: [
      {
        title: 'Staff workflows with the right access',
        body: 'Role-based permissions, instructor tools, and employment records without giving everyone owner keys.',
        bullets: [
          'Staff rota and scheduling',
          'Employment records',
          'Expense claim workflows',
          'Payroll integration hooks',
          'Instructor substitutions',
          'Multi-location staff management',
        ],
      },
      {
        title: 'The physical studio stays connected',
        body: 'Screens, access, milestones, and retreats sit on the same data layer as bookings and CRM.',
        bullets: [
          'Studio screen / playlist management',
          'Access control and welcome moments',
          'Milestones for members and teachers',
          'Retreat room allocation and deposits',
        ],
      },
    ],
  },
]

export function getFeaturePage(slug: string): FeaturePage | undefined {
  return featurePages.find(p => p.slug === slug)
}

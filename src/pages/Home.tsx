import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Brain,
  Calendar,
  Check,
  CreditCard,
  Globe2,
  Users,
  Zap,
} from 'lucide-react'
import DemoVideoModal from '../components/DemoVideoModal'
import FoundingStudiosSection from '../components/FoundingStudiosSection'
import HeroSplitVisual from '../components/HeroSplitVisual'
import VerticalCardImage from '../components/VerticalCardImage'
import { VERTICALS } from '../data/verticals'
import { showcaseFeatures } from '../data/showcaseFeatures'
import { BOOK_DEMO_PATH, TRIAL_SIGNUP_URL } from '../lib/urls'

const connected = [
  {
    n: '01',
    title: 'Booking engine',
    body: 'Classes, appointments, recovery sessions, retreats, rooms, teachers, waitlists, cancellations, and availability.',
  },
  {
    n: '02',
    title: 'Membership sales',
    body: 'Trials, memberships, class packs, products, gift cards, invoices, renewals, failed payments, and purchase journeys.',
  },
  {
    n: '03',
    title: 'CRM and automation',
    body: 'Leads, member profiles, lifecycle campaigns, retention tasks, follow-up prompts, tags, notes, and owner visibility.',
  },
  {
    n: '04',
    title: 'Team command centre',
    body: 'Tasks, inboxes, staff performance, timetable health, operational risks, and daily studio briefing workflows.',
  },
]

const pillars = [
  {
    icon: Calendar,
    title: 'Booking that fills the room',
    body: 'Classes, waitlists, recovery sessions, and check-in on one timetable — so capacity and substitutions stop living in spreadsheets.',
    to: '/features/booking',
  },
  {
    icon: CreditCard,
    title: 'Memberships & payments',
    body: 'Trials, packs, memberships, and failed-payment recovery wired to the same member record your front desk already trusts.',
    to: '/features/memberships',
  },
  {
    icon: Zap,
    title: 'CRM that closes the gap',
    body: 'Lead pipeline, retention sequences, and tasks built for the messy middle between a trial pack and a membership.',
    to: '/features/crm',
  },
  {
    icon: Brain,
    title: 'AI Command Centre',
    body: 'Twenty-six AI surfaces for churn, fill rates, campaigns, and briefings — with human approval before anything reaches a member.',
    to: '/features/ai',
  },
  {
    icon: Globe2,
    title: 'Websites & migration',
    body: 'Marketing sites connected to live timetable and pricing data, with SEO-safe migration when you leave an old stack behind.',
    to: '/features/websites',
  },
  {
    icon: Users,
    title: 'Team & ops',
    body: 'Rota, permissions, payroll hooks, and a daily command view so owners aren\u2019t the only people who know what\u2019s on fire.',
    to: '/features/team',
  },
]

export default function Home() {
  const [demoOpen, setDemoOpen] = useState(false)

  return (
    <div>
      <DemoVideoModal open={demoOpen} onClose={() => setDemoOpen(false)} />

      {/* Hero — outcome promise */}
      <section className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden text-white">
        <img
          src="/images/helgoland-hero.webp"
          alt="Helgoland coastline — the North Sea island that inspired the HelgoIQ name"
          className="absolute inset-0 h-full w-full object-cover object-center animate-fade-in"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(10,22,16,0.35) 0%, rgba(10,22,16,0.35) 35%, rgba(10,22,16,0.82) 100%)',
          }}
          aria-hidden
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-14 pt-28 w-full">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-end">
            <div className="max-w-xl animate-fade-up">
              <p
                className="text-4xl sm:text-5xl lg:text-6xl font-medium text-white mb-5 leading-none"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic' }}
              >
                HelgoIQ
              </p>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white/95 mb-4">
                Your studio online in days, not months.
              </h1>
              <p className="text-white/85 text-base sm:text-lg leading-relaxed mb-8">
                Paste your current website. We import it, protect your Google rankings for 30 days,
                and connect your timetable, booking and payments — live in one platform. Our team
                walks you through every step.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/migrate" className="btn-dark text-base py-3 px-7">
                  Bring my site <ArrowRight size={16} />
                </Link>
                <button
                  type="button"
                  onClick={() => setDemoOpen(true)}
                  className="inline-flex items-center justify-center gap-2 border border-forest-400/50 text-white px-7 py-3 rounded-lg font-medium text-base hover:bg-forest-500/30 transition-all"
                >
                  See it working
                </button>
              </div>
              <p className="text-xs text-white/55 mt-4">
                Import in minutes · Rankings protected for 30 days · Guided cutover
              </p>
            </div>
            <div className="animate-fade-up">
              <HeroSplitVisual />
            </div>
          </div>
        </div>
      </section>

      {/* Connected systems */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="section-label mb-3">Connected studio systems</p>
            <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 tracking-tight">
              One platform where every part of the studio shares the same data layer
            </h2>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Bookings, CRM, payments, memberships, staff workflows, marketing sites, and reporting
              stay in sync — less admin, cleaner journeys, better decisions.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {connected.map(item => (
              <div key={item.n}>
                <div className="text-xs font-semibold tracking-widest text-forest-400 mb-3">
                  {item.n}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built for how your studio runs */}
      <section id="verticals" className="py-20 bg-mist">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="section-label mb-3">Who it’s for</p>
            <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 tracking-tight">
              Built for how your studio runs
            </h2>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Six operator types. Same platform. Pick the path that matches the floor you run.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VERTICALS.map(v => (
              <Link
                key={v.slug}
                to={v.path}
                className="group card overflow-hidden flex flex-col hover:-translate-y-0.5 transition-transform"
              >
                <div className="aspect-[16/10]">
                  <VerticalCardImage label={v.imageLabel} imageSrc={v.imageSrc} />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-forest-600 transition-colors mb-3">
                    {v.name}
                  </h3>
                  <ul className="flex flex-wrap gap-1.5 mb-4">
                    {v.teaser.map(t => (
                      <li
                        key={t}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-forest-50 text-forest-700"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-forest-600 group-hover:gap-2 transition-all">
                    Explore <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Product screenshots */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-12 pb-4">
          <p className="section-label mb-3">In the product</p>
          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 tracking-tight max-w-2xl">
            Real surfaces studios and gyms use every day
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl leading-relaxed">
            Screenshots from the HelgoIQ platform — with the operational job each one does for
            owners, front desk, and teachers.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 divide-y divide-forest-100/80">
          {showcaseFeatures.map((feature, idx) => (
            <div
              key={feature.id}
              id={feature.id}
              className="py-16 lg:py-20 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
            >
              <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                <p className="section-label mb-3">{feature.eyebrow}</p>
                <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900 tracking-tight mb-4 leading-snug">
                  {feature.headline}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-3">{feature.body}</p>
                <p className="text-sm text-forest-800/90 leading-relaxed mb-6 border-l-2 border-forest-300 pl-4">
                  {feature.help}
                </p>
                <ul className="space-y-2 mb-7">
                  {feature.bullets.map(b => (
                    <li key={b} className="flex items-start gap-2 text-sm text-gray-700">
                      <Check size={15} className="text-forest-500 mt-0.5 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                <Link
                  to={feature.href}
                  className="inline-flex items-center gap-2 text-sm font-medium text-forest-600 hover:gap-3 transition-all"
                >
                  See more detail <ArrowRight size={14} />
                </Link>
              </div>
              <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="rounded-xl overflow-hidden border border-gray-200/80 shadow-lg bg-white">
                  <img
                    src={feature.image}
                    alt={feature.imageAlt}
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Feature depth links */}
      <section className="py-20 bg-mist">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="section-label mb-3">Platform</p>
            <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 tracking-tight">
              Depth where studio software usually goes shallow
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
            {pillars.map(({ icon: Icon, title, body, to }) => (
              <Link key={to} to={to} className="group block">
                <div className="feature-icon mb-4 group-hover:bg-forest-100 transition-colors">
                  <Icon size={20} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-forest-600 transition-colors">
                  {title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">{body}</p>
                <span className="text-sm font-medium text-forest-600 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn more <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-12">
            <Link to="/features" className="btn-secondary">
              View all features <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <FoundingStudiosSection />

      {/* Dual path pricing tease */}
      <section className="py-20 bg-forest-600 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-forest-300 mb-3">
              Two ways in
            </p>
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-4">
              Self-serve trial or a guided demo
            </h2>
            <p className="text-forest-200 leading-relaxed mb-6">
              Core starts free. Growth and Premium unlock analytics, automation, and the full AI
              suite. Enterprise is for multi-location groups who want a walkthrough first.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href={TRIAL_SIGNUP_URL} className="btn-dark text-base py-3 px-7">
                Start free trial <ArrowRight size={16} />
              </a>
              <Link
                to={BOOK_DEMO_PATH}
                className="inline-flex items-center gap-2 border border-forest-400/50 text-white px-7 py-3 rounded-lg font-medium text-base hover:bg-forest-500/30 transition-all"
              >
                Book a demo
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            {[
              { name: 'Core', price: 'Free to start', note: 'Booking, members, payments, CRM' },
              { name: 'Growth', price: '£149/location', note: 'Analytics, marketing, staff ops' },
              { name: 'Premium', price: '£249/location', note: '26 AI features + Command Centre' },
            ].map(plan => (
              <div
                key={plan.name}
                className="flex items-baseline justify-between gap-4 border-b border-forest-500/60 pb-4"
              >
                <div>
                  <div className="font-semibold">{plan.name}</div>
                  <div className="text-sm text-forest-300">{plan.note}</div>
                </div>
                <div className="text-forest-100 font-medium whitespace-nowrap">{plan.price}</div>
              </div>
            ))}
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 text-sm font-medium text-sage hover:text-white transition-colors pt-2"
            >
              Compare plans <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden text-white">
        <img
          src="/images/helgoland-hero.webp"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden
        />
        <div className="absolute inset-0 bg-forest-900/80" aria-hidden />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <p
            className="text-3xl sm:text-4xl mb-4"
            style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic' }}
          >
            HelgoIQ
          </p>
          <h2 className="text-3xl font-semibold tracking-tight mb-4">
            Ready when your studio is
          </h2>
          <p className="text-forest-100/90 mb-8 leading-relaxed">
            Named for Helgoland — where Heisenberg worked out quantum mechanics in 1925. Built for
            the complexity of running a modern studio without the chaos of five tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/migrate" className="btn-dark text-base py-3 px-8">
              Bring my site <ArrowRight size={16} />
            </Link>
            <Link
              to={BOOK_DEMO_PATH}
              className="btn-secondary border-white/40 text-white hover:bg-white/10 text-base py-3 px-8"
            >
              Book a demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

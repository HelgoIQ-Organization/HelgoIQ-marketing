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
import CtaButtons from '../components/CtaButtons'
import { BOOK_DEMO_PATH, TRIAL_SIGNUP_URL } from '../lib/urls'

const proofStudios = [
  {
    name: 'REFRM Pilates',
    role: 'Boutique reformer studio',
    quote:
      '[Placeholder — pending approved wording] HelgoIQ is the operating layer we wanted for bookings, memberships, and day-to-day studio clarity.',
  },
  {
    name: 'Active247',
    role: 'Multi-service fitness operator',
    quote:
      '[Placeholder — pending approved wording] One connected platform for scheduling, CRM follow-up, and the decisions that fill the room.',
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
    body: 'Rota, permissions, payroll hooks, and a daily command view so owners aren’t the only people who know what’s on fire.',
    to: '/features/team',
  },
]

export default function Home() {
  return (
    <div>
      {/* Brand-first full-bleed hero — one composition */}
      <section className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden text-white">
        <div
          className="absolute inset-0 bg-forest-700"
          aria-hidden
        />
        <div
          className="absolute inset-0 hero-atmosphere"
          aria-hidden
        />
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
            maskImage: 'linear-gradient(to bottom, black 40%, transparent 95%)',
          }}
          aria-hidden
        />

        {/* Dominant product plane */}
        <div className="absolute inset-x-0 top-[18%] bottom-0 pointer-events-none select-none">
          <div className="max-w-6xl mx-auto px-4 h-full flex items-end justify-center">
            <div className="w-full max-w-4xl translate-y-8 sm:translate-y-12 opacity-90 animate-fade-up-slow">
              <div className="rounded-t-xl border border-white/15 bg-forest-800/70 backdrop-blur-sm shadow-2xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/10 bg-forest-900/40">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-white/25" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/25" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/25" />
                  </div>
                  <span className="text-[11px] text-white/45 ml-2">app.helgoiq.com</span>
                </div>
                <div className="grid grid-cols-3 gap-px bg-white/5 p-3 sm:p-5">
                  {[
                    ['Today', '8 classes', '2 full'],
                    ['Pipeline', '14 trials', '3 due'],
                    ['AI focus', 'Churn', '2 flagged'],
                  ].map(([a, b, c]) => (
                    <div key={a} className="bg-forest-700/80 p-3 sm:p-4 min-h-[88px]">
                      <div className="text-[10px] uppercase tracking-wider text-forest-300 mb-1">{a}</div>
                      <div className="text-sm sm:text-base font-semibold text-white">{b}</div>
                      <div className="text-xs text-sage mt-1">{c}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-16 pt-28 w-full">
          <div className="max-w-2xl animate-fade-up">
            <p
              className="text-4xl sm:text-5xl lg:text-6xl font-medium text-white mb-5 leading-none"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic' }}
            >
              HelgoIQ
            </p>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white/95 mb-4 max-w-xl">
              The calm operating platform for modern studios
            </h1>
            <p className="text-forest-100/90 text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
              Bookings, memberships, CRM, websites, and AI intelligence — one connected system for
              operators who are done juggling tools.
            </p>
            <CtaButtons variant="forest" />
            <p className="text-xs text-forest-300 mt-4">No card required for trial · Cancel anytime</p>
          </div>
        </div>
      </section>

      {/* Proof — after first viewport */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="section-label mb-8 text-center">Studios on HelgoIQ</p>
          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {proofStudios.map(studio => (
              <figure key={studio.name} className="animate-fade-up">
                <blockquote
                  className="text-lg text-gray-700 leading-relaxed mb-4"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  “{studio.quote}”
                </blockquote>
                <figcaption>
                  <div className="text-sm font-semibold text-forest-600">{studio.name}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{studio.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ICP path */}
      <section className="py-20 bg-mist">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="section-label mb-3">Built for operators</p>
            <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 tracking-tight">
              Start with how your studio actually runs
            </h2>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Pilates and boutique fitness first — reformer capacity, trial conversion, and member
              continuity — then the same platform grows with you.
            </p>
          </div>
          <Link
            to="/for/pilates"
            className="group block max-w-3xl rounded-2xl bg-forest-600 text-white p-8 sm:p-10 relative overflow-hidden transition-transform duration-300 hover:-translate-y-0.5"
          >
            <div
              className="absolute inset-0 opacity-30 pointer-events-none"
              style={{
                background:
                  'radial-gradient(ellipse at 80% 20%, rgba(126,194,169,0.45), transparent 50%)',
              }}
            />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-widest text-forest-300 mb-3">
                Primary ICP
              </p>
              <h3 className="text-2xl sm:text-3xl font-semibold mb-3">HelgoIQ for Pilates</h3>
              <p className="text-forest-100 max-w-xl leading-relaxed mb-6">
                Spot-aware scheduling, waitlists, intro offers, and retention workflows shaped for
                reformer and boutique Pilates studios.
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:gap-3 transition-all">
                Explore the Pilates path <ArrowRight size={16} />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Feature depth */}
      <section className="py-20 bg-white">
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
            <ul className="space-y-2 mb-8">
              {[
                'Start free trial → app signup with owner binding',
                'Book a demo → pick a live slot with our team',
                'Transparent plans: Core · Growth · Premium · Enterprise',
              ].map(item => (
                <li key={item} className="flex items-start gap-2 text-sm text-forest-100">
                  <Check size={15} className="text-sage mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <CtaButtons variant="forest" />
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
            <Link to="/pricing" className="inline-flex items-center gap-2 text-sm font-medium text-sage hover:text-white transition-colors pt-2">
              Compare plans <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p
            className="text-3xl sm:text-4xl text-forest-600 mb-4"
            style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic' }}
          >
            HelgoIQ
          </p>
          <h2 className="text-3xl font-semibold text-gray-900 tracking-tight mb-4">
            Ready when your studio is
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Named for Helgoland — where Heisenberg worked out quantum mechanics in 1925. Built for
            the complexity of running a modern studio without the chaos of five tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={TRIAL_SIGNUP_URL} className="btn-primary text-base py-3 px-8">
              Start free trial <ArrowRight size={16} />
            </a>
            <Link to={BOOK_DEMO_PATH} className="btn-secondary text-base py-3 px-8">
              Book a demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

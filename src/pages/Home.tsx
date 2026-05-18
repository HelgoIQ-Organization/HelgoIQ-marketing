import { Link } from 'react-router-dom'
import { ArrowRight, Check, Zap, Users, BarChart3, Brain, Calendar, CreditCard, Mail, Shield } from 'lucide-react'

const APP_URL = 'https://app.helgoiq.com'

const stats = [
  { value: '26', label: 'AI-powered features' },
  { value: '£149', label: 'Growth plan / location / mo' },
  { value: '100%', label: 'No card required for trial' },
  { value: '1', label: 'Platform. Everything connected.' },
]

const featureTabs = [
  {
    id: 'booking',
    label: 'Booking',
    icon: Calendar,
    headline: 'Scheduling that works the way your studio does',
    description: 'Class scheduling, waitlist automation, deferred bookings, recovery sessions, and check-in — all in one connected system. When a class fills, the waitlist manages itself.',
    bullets: ['Recurring class schedules', 'Automated waitlist management', 'Instructor substitution workflows', 'Kiosk mode for front desk check-in', 'Deferred and recovery session booking'],
  },
  {
    id: 'members',
    label: 'Members',
    icon: Users,
    headline: 'A complete picture of every member',
    description: 'Member profiles that tell a story — attendance history, health score, credits, tags, and GDPR tools. Not a list of bookings. A profile that drives action.',
    bullets: ['Member health score', 'Credit management', 'Smart member tags', 'GDPR export and anonymisation', 'CSV import and bulk management'],
  },
  {
    id: 'crm',
    label: 'CRM & Sales',
    icon: BarChart3,
    headline: 'A sales pipeline built for fitness studios',
    description: 'Lead management, visual sales pipeline, task management, and retention sequences. The gap between a trial pack and a membership is almost always a follow-up problem.',
    bullets: ['Visual sales pipeline', 'Lead management and tracking', 'Automated retention sequences', 'Smart member segments', 'Journey orchestrator'],
  },
  {
    id: 'ai',
    label: 'AI Intelligence',
    icon: Brain,
    headline: 'Intelligence that surfaces, not replaces',
    description: 'Twenty-six AI features designed around one principle: AI should surface insights and suggest actions, but your team approves anything that goes to a member.',
    bullets: ['AI Churn Prevention', 'AI Class Filler', 'AI Campaign Composer', 'AI Financial Forecasting', 'AI Command Centre with approval queue'],
  },
]

const coreFeatures = [
  { icon: Calendar, label: 'Booking & Scheduling' },
  { icon: Users, label: 'Member Management' },
  { icon: CreditCard, label: 'Payments & Billing' },
  { icon: BarChart3, label: 'Analytics & Reports' },
  { icon: Mail, label: 'Marketing Automation' },
  { icon: Brain, label: '26 AI Features' },
  { icon: Zap, label: 'Sales Pipeline & CRM' },
  { icon: Shield, label: 'GDPR & Compliance' },
]

const testimonials = [
  {
    quote: "HelgoIQ replaced four separate tools we were using. The AI churn prevention alone has saved us more members in three months than we'd managed manually in a year.",
    name: 'Studio Owner',
    studio: 'Boutique Pilates Studio, London',
  },
  {
    quote: "The sales pipeline changed how we handle trials. We used to lose leads in the gap between the trial and the follow-up. Now that gap doesn't exist.",
    name: 'Studio Manager',
    studio: 'Reformer Pilates, Manchester',
  },
  {
    quote: "I was sceptical about the AI features. The AI Command Centre is the thing I check first every morning. It tells me exactly what needs attention.",
    name: 'Studio Director',
    studio: 'Multi-location Yoga Studio',
  },
]

export default function Home() {
  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="relative bg-forest-600 text-white overflow-hidden pt-24 pb-20 lg:pt-32 lg:pb-28">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — copy */}
            <div>
              <div className="inline-flex items-center gap-2 bg-forest-500/40 border border-forest-400/30 rounded-full px-4 py-1.5 mb-6">
                <span className="text-xs font-medium text-forest-200 uppercase tracking-widest">Named for Helgoland · 1925</span>
              </div>

              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight tracking-tight mb-6">
                The intelligent platform for modern fitness businesses
              </h1>

              <p className="text-lg text-forest-200 leading-relaxed mb-4 max-w-lg">
                Booking, member management, CRM, marketing automation, and 26 AI features — in one calm, connected platform.
              </p>

              <p className="text-sm text-forest-300 leading-relaxed mb-8 max-w-lg italic" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Named for Helgoland, the small North Sea island where Heisenberg worked out quantum mechanics in 1925 — the science that, a century later, made AI possible.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/trial" className="btn-dark text-base py-3 px-7">
                  Start free trial
                  <ArrowRight size={16} />
                </Link>
                <Link to="/pricing" className="inline-flex items-center gap-2 border border-forest-400/50 text-white px-7 py-3 rounded-lg font-medium text-base hover:bg-forest-500/30 transition-all duration-200">
                  View pricing
                </Link>
              </div>

              <p className="text-xs text-forest-400 mt-4">No credit card required. Cancel anytime.</p>
            </div>

            {/* Right — platform screenshot mockup */}
            <div className="relative">
              <div className="bg-forest-500/20 border border-forest-400/20 rounded-2xl p-1 shadow-2xl">
                <div className="bg-forest-700/50 rounded-xl overflow-hidden">
                  {/* Browser chrome */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-forest-800/50 border-b border-forest-600/30">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400/60" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                      <div className="w-3 h-3 rounded-full bg-green-400/60" />
                    </div>
                    <div className="flex-1 bg-forest-700/50 rounded-md h-6 mx-4 flex items-center px-3">
                      <span className="text-xs text-forest-400">app.helgoiq.com/dashboard</span>
                    </div>
                  </div>
                  {/* Dashboard mockup */}
                  <div className="p-4 space-y-3">
                    {/* Stats row */}
                    <div className="grid grid-cols-4 gap-2">
                      {[
                        { label: 'Active Members', value: '284', trend: '+12' },
                        { label: 'Classes Today', value: '8', trend: '2 full' },
                        { label: 'Revenue MTD', value: '£18.4k', trend: '+8%' },
                        { label: 'Churn Risk', value: '3', trend: 'flagged' },
                      ].map(stat => (
                        <div key={stat.label} className="bg-forest-600/40 rounded-lg p-2.5">
                          <div className="text-xs text-forest-300 mb-1">{stat.label}</div>
                          <div className="text-lg font-semibold text-white">{stat.value}</div>
                          <div className="text-xs text-sage">{stat.trend}</div>
                        </div>
                      ))}
                    </div>
                    {/* Schedule preview */}
                    <div className="bg-forest-600/30 rounded-lg p-3">
                      <div className="text-xs text-forest-300 mb-2 font-medium">Today's Schedule</div>
                      {[
                        { time: '07:00', name: 'Reformer Fundamentals', instructor: 'Sarah K.', spots: '12/12' },
                        { time: '09:30', name: 'Advanced Reformer', instructor: 'James L.', spots: '8/12' },
                        { time: '12:00', name: 'Mat Pilates', instructor: 'Emma R.', spots: '11/12' },
                        { time: '18:30', name: 'Evening Flow', instructor: 'Sarah K.', spots: '5/12' },
                      ].map(cls => (
                        <div key={cls.time} className="flex items-center justify-between py-1.5 border-b border-forest-500/20 last:border-0">
                          <div className="flex items-center gap-3">
                            <span className="text-xs text-forest-400 w-10">{cls.time}</span>
                            <div>
                              <div className="text-xs font-medium text-white">{cls.name}</div>
                              <div className="text-xs text-forest-400">{cls.instructor}</div>
                            </div>
                          </div>
                          <span className={`text-xs px-2 py-0.5 rounded-full ${cls.spots.startsWith('12') ? 'bg-red-500/20 text-red-300' : 'bg-forest-500/30 text-forest-200'}`}>
                            {cls.spots}
                          </span>
                        </div>
                      ))}
                    </div>
                    {/* AI alert */}
                    <div className="bg-amber-500/10 border border-amber-400/20 rounded-lg p-3 flex items-start gap-2">
                      <Brain size={14} className="text-amber-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-xs font-medium text-amber-300">AI Churn Alert</div>
                        <div className="text-xs text-amber-200/70">3 members showing early churn signals. Review suggested actions →</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats bar ────────────────────────────────────────────────────────── */}
      <section className="bg-forest-500 text-white py-5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-forest-400/30">
            {stats.map(stat => (
              <div key={stat.label} className="text-center lg:px-8">
                <div className="text-2xl font-semibold text-white">{stat.value}</div>
                <div className="text-xs text-forest-200 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Core features grid ───────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Everything in one platform</p>
            <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 tracking-tight">
              Every tool your studio needs.<br />
              <span className="text-forest-500">None of the fragmentation.</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto text-base">
              The average studio uses 5–8 disconnected tools. HelgoIQ replaces them with a single platform where every system shares the same data.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {coreFeatures.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-gray-100 hover:border-forest-200 hover:bg-forest-50/50 transition-all duration-200 group">
                <div className="w-12 h-12 rounded-xl bg-forest-50 flex items-center justify-center text-forest-500 group-hover:bg-forest-100 transition-colors">
                  <Icon size={22} />
                </div>
                <span className="text-sm font-medium text-gray-700 text-center">{label}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/features" className="btn-secondary">
              Explore all features <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Feature tabs ─────────────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Built for studio operators</p>
            <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 tracking-tight">
              Every part of your operation, connected
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {featureTabs.map(({ id, label, icon: Icon, headline, description, bullets }) => (
              <div key={id} className="card p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="feature-icon">
                    <Icon size={20} />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-forest-500">{label}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{headline}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{description}</p>
                <ul className="space-y-2">
                  {bullets.map(b => (
                    <li key={b} className="flex items-start gap-2 text-sm text-gray-600">
                      <Check size={15} className="text-forest-500 mt-0.5 flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/features" className="btn-primary">
              See all features <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Brand story ──────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="section-label mb-4">The name</p>
          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 tracking-tight mb-6">
            Named for Helgoland.<br />
            <span className="text-forest-500">Built for complexity.</span>
          </h2>
          <div className="text-gray-600 text-base leading-relaxed space-y-4 max-w-2xl mx-auto">
            <p>
              HelgoIQ takes its name from Helgoland, the small island in the North Sea where, in 1925, a 23-year-old Werner Heisenberg worked out the mathematics of quantum mechanics — the science that, a century later, made modern computing and AI possible.
            </p>
            <p>
              The connection isn't decorative. Running a modern fitness business is its own complex system: retention, scheduling, instructor performance, demand, recovery, communication, member behaviour — every part influencing another. The platforms that help you understand it should be built with the same intellectual care.
            </p>
          </div>
          <div className="mt-8">
            <Link to="/about" className="btn-secondary">
              Read the full story <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────────────────── */}
      <section className="py-20 bg-forest-600 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-forest-300 mb-3">From studio operators</p>
            <h2 className="text-3xl font-semibold text-white tracking-tight">What studios are saying</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-forest-500/30 border border-forest-400/20 rounded-2xl p-7">
                <p className="text-forest-100 text-sm leading-relaxed mb-5 italic" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1rem' }}>
                  "{t.quote}"
                </p>
                <div>
                  <div className="text-sm font-medium text-white">{t.name}</div>
                  <div className="text-xs text-forest-300">{t.studio}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing preview ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Simple, transparent pricing</p>
            <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 tracking-tight">
              Start free. Scale when you're ready.
            </h2>
            <p className="text-gray-500 mt-3 text-base">No card required. No setup fees. Cancel anytime.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                name: 'Core',
                price: 'Free to start',
                description: 'Full booking, member management, payments, and CRM.',
                cta: 'Start free',
                featured: false,
                features: ['Class scheduling & booking', 'Member management', 'Payments (Stripe + GoCardless)', 'Sales pipeline & CRM', 'Email & push notifications', 'GDPR tools'],
              },
              {
                name: 'Growth',
                price: '£149',
                period: '/location/mo',
                description: 'Analytics, marketing automation, and advanced CRM.',
                cta: 'Start free trial',
                featured: true,
                features: ['Everything in Core', 'Full analytics & reporting', 'Marketing automation', 'Campaign builder', 'Staff rota & payroll', 'Referral programme'],
              },
              {
                name: 'Premium',
                price: '£249',
                period: '/location/mo',
                description: '26 AI features, advanced automation, and enterprise reporting.',
                cta: 'Start free trial',
                featured: false,
                features: ['Everything in Growth', '26 AI-powered features', 'AI Churn Prevention', 'AI Campaign Composer', 'AI Financial Forecasting', 'AI Command Centre'],
              },
            ].map(plan => (
              <div
                key={plan.name}
                className={`rounded-2xl p-7 flex flex-col ${
                  plan.featured
                    ? 'bg-forest-600 text-white shadow-xl ring-2 ring-forest-500 scale-105'
                    : 'bg-white border border-gray-200'
                }`}
              >
                {plan.featured && (
                  <div className="text-xs font-semibold uppercase tracking-widest text-forest-200 mb-3">Most popular</div>
                )}
                <div className="mb-5">
                  <h3 className={`text-lg font-semibold mb-1 ${plan.featured ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className={`text-3xl font-bold ${plan.featured ? 'text-white' : 'text-gray-900'}`}>{plan.price}</span>
                    {plan.period && <span className={`text-sm ${plan.featured ? 'text-forest-200' : 'text-gray-400'}`}>{plan.period}</span>}
                  </div>
                  <p className={`text-sm mt-2 ${plan.featured ? 'text-forest-200' : 'text-gray-500'}`}>{plan.description}</p>
                </div>
                <ul className="space-y-2 flex-1 mb-6">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check size={14} className={`mt-0.5 flex-shrink-0 ${plan.featured ? 'text-sage' : 'text-forest-500'}`} />
                      <span className={plan.featured ? 'text-forest-100' : 'text-gray-600'}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/trial"
                  className={`text-center py-2.5 px-5 rounded-lg text-sm font-medium transition-all ${
                    plan.featured
                      ? 'bg-white text-forest-600 hover:bg-cream'
                      : 'bg-forest-500 text-white hover:bg-forest-600'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/pricing" className="text-sm text-forest-500 hover:text-forest-600 font-medium">
              Compare all plans in detail →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA banner ───────────────────────────────────────────────────────── */}
      <section className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 tracking-tight mb-4">
            Ready to run your studio with clarity?
          </h2>
          <p className="text-gray-500 text-base mb-8">
            Start your free trial today. No credit card required. Full platform access from day one.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/trial" className="btn-primary text-base py-3 px-8">
              Start free trial <ArrowRight size={16} />
            </Link>
            <a href="mailto:hello@helgoiq.com" className="btn-secondary text-base py-3 px-8">
              Talk to us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

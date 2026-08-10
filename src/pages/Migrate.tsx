import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import CtaButtons from '../components/CtaButtons'

const steps = [
  {
    n: '01',
    title: 'Extract or share exports',
    body: 'We work from reports you provide, or help pull structured exports from your current stack (including common gym platforms).',
  },
  {
    n: '02',
    title: 'Map & preview in HelgoIQ',
    body: 'Members, remaining pack balances, memberships, and timetable constructs are mapped into a preview environment you can check before go-live.',
  },
  {
    n: '03',
    title: 'Go live when you’re ready',
    body: 'Invite members on your schedule. Payment continuity (Stripe / GoCardless) is planned so you don’t surprise cash flow mid-cycle.',
  },
]

const faqs = [
  {
    q: 'Will billing be disrupted?',
    a: 'We plan cutover around renewal cycles where possible and coordinate Stripe / GoCardless handoff so active mandates aren’t casually broken. Timing is part of the migration plan.',
  },
  {
    q: 'Can remaining class packs come across?',
    a: 'Yes in most cases — remaining credits/sessions are a first-class migration item, then verified by your team before launch.',
  },
  {
    q: 'Do members need to rebuild accounts immediately?',
    a: 'No. Imports can be prepared quietly; members are invited when you choose to launch, typically setting a password and continuing bookings.',
  },
  {
    q: 'We’re on TeamUp / another gym system today — can you help?',
    a: 'Yes. HelgoIQ is built for operators moving off bolted-together or incumbent booking tools. Book a demo and we’ll scope the import path for your stack.',
  },
  {
    q: 'What about our marketing website SEO?',
    a: 'Website migration can run in preservation mode: crawl, map, redirect, verify — then optimise. See Websites & migration in Features.',
  },
]

export default function Migrate() {
  return (
    <div className="pt-16">
      <section className="bg-forest-600 text-white py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-forest-300 mb-3">
            Switch to HelgoIQ
          </p>
          <h1 className="text-3xl lg:text-5xl font-semibold tracking-tight mb-4">
            Migration without gambling the front desk
          </h1>
          <p className="text-forest-200 text-lg leading-relaxed mb-8">
            Bring members, packs, and operational history across with a checked preview — then invite
            clients when you’re ready. Built for studios and gyms that can’t afford a messy cutover.
          </p>
          <CtaButtons variant="forest" size="sm" />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-gray-900 tracking-tight mb-10">
            How transferring data works
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {steps.map(step => (
              <div key={step.n}>
                <div className="text-xs font-semibold tracking-widest text-forest-400 mb-3">
                  {step.n}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-mist">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 tracking-tight mb-4">
              What we aim to bring across
            </h2>
            <ul className="space-y-3">
              {[
                'Current and former customer profiles',
                'Memberships and remaining pack usage',
                'Timetable / class constructs where exportable',
                'Payment processor continuity planning (Stripe, GoCardless)',
                'Staff roles for day-one operations',
              ].map(item => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                  <Check size={15} className="text-forest-500 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 tracking-tight mb-4">
              You stay in control
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Preview before go-live. Member invites wait for your signal. Website SEO migrations
              can run in preservation mode so search visibility isn’t a coin toss.
            </p>
            <Link
              to="/features/websites"
              className="inline-flex items-center gap-2 text-forest-600 font-medium hover:gap-3 transition-all"
            >
              Websites & SEO migration <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-gray-900 tracking-tight mb-8">
            Migration FAQs
          </h2>
          <div className="space-y-6">
            {faqs.map(({ q, a }) => (
              <div key={q} className="border-b border-gray-100 pb-6">
                <h3 className="text-base font-semibold text-gray-900 mb-2">{q}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-forest-600 text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold mb-3">Plan your switch</h2>
          <p className="text-forest-200 mb-8">
            Book a demo and we’ll scope import effort for your current platform — or start a trial
            if you want to explore first.
          </p>
          <CtaButtons variant="forest" className="justify-center" />
        </div>
      </section>
    </div>
  )
}

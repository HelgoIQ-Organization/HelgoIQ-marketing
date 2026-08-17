import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import CtaButtons from '../components/CtaButtons'

const outcomes = [
  {
    title: 'Capacity you can see',
    body: 'Class schedules, waitlists, and substitutions that match how reformer and boutique studios actually fill the room.',
  },
  {
    title: 'Intro offers that convert',
    body: 'Trial packs and CRM follow-up on the same member record — so the gap after the first class isn’t where people disappear.',
  },
  {
    title: 'Membership continuity',
    body: 'Pauses, packs, failed payments, and retention sequences without exporting CSVs into another tool.',
  },
  {
    title: 'AI that respects the floor',
    body: 'Churn flags, class-fill suggestions, and campaign drafts — approved by your team before anything reaches a client.',
  },
]

export default function ForPilates() {
  return (
    <div>
      <section className="relative min-h-[85svh] flex items-end overflow-hidden text-white bg-forest-700">
        <div
          className="absolute inset-0 hero-atmosphere"
          aria-hidden
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-16 pt-32 w-full">
          <div className="max-w-2xl animate-fade-up">
            <p
              className="text-4xl sm:text-5xl font-medium mb-5"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic' }}
            >
              HelgoIQ
            </p>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight mb-4">
              Built for Pilates studios that outgrew bolted-together tools
            </h1>
            <p className="text-forest-100/90 text-lg leading-relaxed mb-8 max-w-xl">
              Booking, memberships, CRM, and AI intelligence shaped for reformer and boutique
              Pilates operators — with REFRM Pilates among the studios already on the path.
            </p>
            <CtaButtons variant="forest" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="section-label mb-3">Social proof</p>
          <blockquote
            className="text-xl text-gray-700 leading-relaxed mb-4"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            “[Placeholder — pending approved wording] REFRM Pilates runs on HelgoIQ for the
            operating clarity a boutique reformer studio needs.”
          </blockquote>
          <cite className="not-italic text-sm font-semibold text-forest-600">REFRM Pilates</cite>
          <div className="mt-6">
            <Link
              to="/reviews"
              className="inline-flex items-center gap-2 text-sm font-medium text-forest-600 hover:gap-3 transition-all"
            >
              More operator reviews <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-mist">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 tracking-tight">
              What Pilates operators care about first
            </h2>
            <p className="text-gray-600 mt-3 leading-relaxed">
              One job per surface — fill the room, convert the intro, keep members, and keep the
              team aligned.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {outcomes.map(item => (
              <div key={item.title}>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="section-label mb-3">Platform paths</p>
            <h2 className="text-3xl font-semibold text-gray-900 tracking-tight mb-4">
              Go deep where it matters
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Start from booking and memberships, then layer CRM and AI when your team is ready —
              without migrating tools again.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                ['Booking & scheduling', '/features/booking'],
                ['Memberships & payments', '/features/memberships'],
                ['CRM & marketing', '/features/crm'],
                ['AI Command Centre', '/features/ai'],
              ].map(([label, to]) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="inline-flex items-center gap-2 text-forest-600 font-medium hover:gap-3 transition-all"
                  >
                    {label} <ArrowRight size={14} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-forest-600 text-white rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-3">Typical first 30 days</h3>
            <ul className="space-y-3 text-sm text-forest-100">
              {[
                'Connect timetable, teachers, and membership products',
                'Turn on intro offer + pipeline stages',
                'Train front desk on check-in and waitlist',
                'Review AI Command Centre with approval queue on',
              ].map(item => (
                <li key={item} className="flex items-start gap-2">
                  <Check size={15} className="text-sage mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <CtaButtons variant="forest" size="sm" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

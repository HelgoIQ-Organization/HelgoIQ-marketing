import { Link } from 'react-router-dom'
import { Check, Minus } from 'lucide-react'
import CtaButtons from '../components/CtaButtons'
import { BOOK_DEMO_PATH, TRIAL_SIGNUP_URL } from '../lib/urls'

const plans = [
  {
    name: 'Core',
    price: 'Free to start',
    period: '',
    description: 'Full booking, member management, payments, and CRM. Everything you need to run your studio from day one.',
    cta: 'Start free',
    featured: false,
    color: 'border-gray-200',
  },
  {
    name: 'Growth',
    price: '£149',
    period: '/location/month',
    description: 'Analytics, marketing automation, advanced CRM, and staff management. For studios focused on growth.',
    cta: 'Start free trial',
    featured: true,
    color: 'border-forest-500',
  },
  {
    name: 'Premium',
    price: '£249',
    period: '/location/month',
    description: '26 AI-powered features, advanced automation, and enterprise reporting. For studios that want intelligence.',
    cta: 'Start free trial',
    featured: false,
    color: 'border-gray-200',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Negotiated per-tenant pricing for multi-location groups and franchise operators.',
    cta: 'Talk to us',
    featured: false,
    color: 'border-gray-200',
    isEnterprise: true,
  },
]

const comparisonRows = [
  { category: 'Booking & Scheduling', features: [
    { name: 'Class scheduling', core: true, growth: true, premium: true, enterprise: true },
    { name: 'Waitlist management', core: true, growth: true, premium: true, enterprise: true },
    { name: 'Check-in (kiosk mode)', core: true, growth: true, premium: true, enterprise: true },
    { name: 'Instructor substitutions', core: true, growth: true, premium: true, enterprise: true },
    { name: 'Deferred & recovery bookings', core: true, growth: true, premium: true, enterprise: true },
  ]},
  { category: 'Member Management', features: [
    { name: 'Member profiles & history', core: true, growth: true, premium: true, enterprise: true },
    { name: 'Member health score', core: true, growth: true, premium: true, enterprise: true },
    { name: 'Credit management', core: true, growth: true, premium: true, enterprise: true },
    { name: 'Member tags', core: true, growth: true, premium: true, enterprise: true },
    { name: 'GDPR tools (export/anonymise)', core: true, growth: true, premium: true, enterprise: true },
    { name: 'CSV import', core: true, growth: true, premium: true, enterprise: true },
  ]},
  { category: 'Payments & Billing', features: [
    { name: 'Stripe integration', core: true, growth: true, premium: true, enterprise: true },
    { name: 'GoCardless (direct debit)', core: true, growth: true, premium: true, enterprise: true },
    { name: 'Membership billing', core: true, growth: true, premium: true, enterprise: true },
    { name: 'Refund processing', core: true, growth: true, premium: true, enterprise: true },
    { name: 'Staff invoicing', core: true, growth: true, premium: true, enterprise: true },
    { name: 'Stripe Connect (multi-location)', core: false, growth: false, premium: true, enterprise: true },
  ]},
  { category: 'CRM & Sales', features: [
    { name: 'Lead management', core: true, growth: true, premium: true, enterprise: true },
    { name: 'Sales pipeline', core: true, growth: true, premium: true, enterprise: true },
    { name: 'Task management', core: true, growth: true, premium: true, enterprise: true },
    { name: 'Member segments', core: false, growth: true, premium: true, enterprise: true },
    { name: 'Smart folders', core: false, growth: true, premium: true, enterprise: true },
    { name: 'Journey orchestrator', core: false, growth: true, premium: true, enterprise: true },
    { name: 'Retention sequences', core: false, growth: true, premium: true, enterprise: true },
  ]},
  { category: 'Analytics & Reporting', features: [
    { name: 'Analytics dashboard', core: false, growth: true, premium: true, enterprise: true },
    { name: 'Full reports (CSV/PDF export)', core: false, growth: true, premium: true, enterprise: true },
    { name: 'Retention analytics', core: false, growth: true, premium: true, enterprise: true },
    { name: 'Revenue intelligence', core: false, growth: true, premium: true, enterprise: true },
    { name: 'Geographic heatmap', core: false, growth: true, premium: true, enterprise: true },
    { name: 'Conversion funnels', core: false, growth: true, premium: true, enterprise: true },
    { name: 'Studio benchmarking', core: false, growth: true, premium: true, enterprise: true },
  ]},
  { category: 'Marketing Automation', features: [
    { name: 'Email communications', core: true, growth: true, premium: true, enterprise: true },
    { name: 'Push notifications', core: true, growth: true, premium: true, enterprise: true },
    { name: 'Campaign builder', core: false, growth: true, premium: true, enterprise: true },
    { name: 'Marketing automation', core: false, growth: true, premium: true, enterprise: true },
    { name: 'Landing pages', core: false, growth: true, premium: true, enterprise: true },
    { name: 'Referral programme', core: false, growth: true, premium: true, enterprise: true },
    { name: 'Gift cards & discount codes', core: false, growth: true, premium: true, enterprise: true },
    { name: 'Google Ads integration', core: false, growth: true, premium: true, enterprise: true },
  ]},
  { category: 'Staff & Operations', features: [
    { name: 'Instructor management', core: true, growth: true, premium: true, enterprise: true },
    { name: 'Staff rota', core: false, growth: true, premium: true, enterprise: true },
    { name: 'Employment records', core: false, growth: true, premium: true, enterprise: true },
    { name: 'Expense claims', core: false, growth: true, premium: true, enterprise: true },
    { name: 'Payroll integration', core: false, growth: true, premium: true, enterprise: true },
  ]},
  { category: 'AI Intelligence', features: [
    { name: 'AI Churn Prevention', core: false, growth: false, premium: true, enterprise: true },
    { name: 'AI Class Filler', core: false, growth: false, premium: true, enterprise: true },
    { name: 'AI Campaign Composer', core: false, growth: false, premium: true, enterprise: true },
    { name: 'AI Trial Conversion', core: false, growth: false, premium: true, enterprise: true },
    { name: 'AI Financial Forecasting', core: false, growth: false, premium: true, enterprise: true },
    { name: 'AI Anomaly Detection', core: false, growth: false, premium: true, enterprise: true },
    { name: 'AI Command Centre', core: false, growth: false, premium: true, enterprise: true },
    { name: 'AI Governance & Approval Queue', core: false, growth: false, premium: true, enterprise: true },
    { name: 'All 26 AI features', core: false, growth: false, premium: true, enterprise: true },
  ]},
]

const Cell = ({ value }: { value: boolean }) =>
  value ? (
    <Check size={16} className="text-forest-500 mx-auto" />
  ) : (
    <Minus size={16} className="text-gray-300 mx-auto" />
  )

export default function Pricing() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-forest-600 text-white py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-forest-300 mb-4">Pricing</p>
          <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight mb-4">
            Simple, transparent pricing
          </h1>
          <p className="text-forest-200 text-lg mb-8">
            Start free. No credit card required. Scale when you're ready — or book a demo for Enterprise and multi-location paths.
          </p>
          <CtaButtons variant="forest" className="justify-center" size="sm" />
        </div>
      </section>

      {/* Plan cards */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {plans.map(plan => (
              <div
                key={plan.name}
                className={`rounded-2xl border-2 p-6 flex flex-col ${plan.color} ${
                  plan.featured ? 'bg-forest-600 text-white shadow-xl' : 'bg-white'
                }`}
              >
                {plan.featured && (
                  <span className="text-xs font-semibold uppercase tracking-widest text-forest-200 mb-2">Most popular</span>
                )}
                <h2 className={`text-xl font-semibold mb-1 ${plan.featured ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h2>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className={`text-3xl font-bold ${plan.featured ? 'text-white' : 'text-gray-900'}`}>{plan.price}</span>
                  {plan.period && <span className={`text-xs ${plan.featured ? 'text-forest-200' : 'text-gray-400'}`}>{plan.period}</span>}
                </div>
                <p className={`text-sm leading-relaxed flex-1 mt-2 mb-6 ${plan.featured ? 'text-forest-200' : 'text-gray-500'}`}>
                  {plan.description}
                </p>
                {plan.isEnterprise ? (
                  <Link
                    to={BOOK_DEMO_PATH}
                    className={`text-center py-2.5 px-4 rounded-lg text-sm font-medium transition-all ${
                      plan.featured ? 'bg-white text-forest-600 hover:bg-mist' : 'bg-forest-500 text-white hover:bg-forest-600'
                    }`}
                  >
                    Book a demo
                  </Link>
                ) : (
                  <a
                    href={TRIAL_SIGNUP_URL}
                    className={`text-center py-2.5 px-4 rounded-lg text-sm font-medium transition-all ${
                      plan.featured ? 'bg-white text-forest-600 hover:bg-mist' : 'bg-forest-500 text-white hover:bg-forest-600'
                    }`}
                  >
                    {plan.cta}
                  </a>
                )}
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-gray-400 mt-6">
            All prices per location per month. Annual billing available — contact us for details.
          </p>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-gray-900 text-center mb-10 tracking-tight">Compare plans in detail</h2>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left px-6 py-4 text-gray-500 font-medium w-1/2">Feature</th>
                  {['Core', 'Growth', 'Premium', 'Enterprise'].map(p => (
                    <th key={p} className={`text-center px-4 py-4 font-semibold ${p === 'Growth' ? 'text-forest-600 bg-forest-50' : 'text-gray-700'}`}>
                      {p}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map(group => (
                  <>
                    <tr key={group.category} className="bg-gray-50 border-t border-gray-100">
                      <td colSpan={5} className="px-6 py-3 text-xs font-semibold uppercase tracking-widest text-forest-500">
                        {group.category}
                      </td>
                    </tr>
                    {group.features.map(f => (
                      <tr key={f.name} className="border-t border-gray-50 hover:bg-gray-50/50 transition-colors">
                        <td className="px-6 py-3 text-gray-700">{f.name}</td>
                        <td className="px-4 py-3 text-center"><Cell value={f.core} /></td>
                        <td className="px-4 py-3 text-center bg-forest-50/30"><Cell value={f.growth} /></td>
                        <td className="px-4 py-3 text-center"><Cell value={f.premium} /></td>
                        <td className="px-4 py-3 text-center"><Cell value={f.enterprise} /></td>
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-gray-900 text-center mb-10 tracking-tight">Frequently asked questions</h2>
          <div className="space-y-6">
            {[
              {
                q: 'Is there really no credit card required?',
                a: 'Correct. You can start on the Core plan and use the full platform with no payment details required. When you are ready to upgrade to Growth or Premium, you add a card at that point.',
              },
              {
                q: 'What counts as a "location"?',
                a: 'A location is a physical studio or gym. If you run two studios, you pay for two locations. The Enterprise plan is designed for multi-location groups and franchises with custom pricing.',
              },
              {
                q: 'Can I change plans at any time?',
                a: 'Yes. You can upgrade or downgrade at any time. Upgrades take effect immediately. Downgrades take effect at the next billing cycle.',
              },
              {
                q: 'What happens to my data if I cancel?',
                a: 'Your data remains accessible for 30 days after cancellation. You can export everything at any time — member data, payment history, attendance records — in CSV format.',
              },
              {
                q: 'Is there a setup fee?',
                a: 'No setup fees on any plan. The Core plan is free to start. Growth and Premium plans have a 14-day free trial with full feature access.',
              },
              {
                q: 'Do you offer annual billing?',
                a: 'Yes. Annual billing is available with a discount. Contact us at hello@helgoiq.com for details.',
              },
            ].map(({ q, a }) => (
              <div key={q} className="border-b border-gray-100 pb-6">
                <h3 className="text-base font-semibold text-gray-900 mb-2">{q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-forest-600 text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight mb-4">Start free today</h2>
          <p className="text-forest-200 mb-8">No credit card. No setup fee. Full platform access from day one.</p>
          <CtaButtons variant="forest" className="justify-center" demoLabel="Book a demo (Enterprise)" />
        </div>
      </section>
    </div>
  )
}

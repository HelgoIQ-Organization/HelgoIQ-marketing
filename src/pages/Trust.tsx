import { Link } from 'react-router-dom'
import { Activity, ArrowRight, FileText, Network, Scale, Shield } from 'lucide-react'
import CtaButtons from '../components/CtaButtons'
import {
  COMPANY_LEGAL_NAME,
  COMPANY_NUMBER,
  COMPANY_NUMBER_URL,
  PRIVACY_EMAIL_ADDRESS,
  REGISTERED_OFFICE_SINGLE_LINE,
} from '../lib/company'

const docs = [
  {
    icon: Shield,
    title: 'Privacy Policy',
    body: 'Website + Meta messaging privacy (Meta App Review URL also at /privacy.html).',
    to: '/privacy',
  },
  {
    icon: Scale,
    title: 'Website Terms',
    body: 'Marketing-site terms configured for Meta (also at /terms.html).',
    to: '/terms',
  },
  {
    icon: Shield,
    title: 'Platform Privacy',
    body: 'Holding policy for studio/member data, Meta, Stripe, Twilio and other providers.',
    to: '/platform-privacy',
  },
  {
    icon: Scale,
    title: 'Platform Terms',
    body: 'Holding subscription terms — @helgoiq.com contacts only; SLA/fees pending counsel.',
    to: '/platform-terms',
  },
  {
    icon: FileText,
    title: 'SMS Communication Policy',
    body: 'Consent, STOP/HELP, and non-sharing of mobile opt-in data (Twilio verification).',
    to: '/sms-consent',
  },
  {
    icon: FileText,
    title: 'Meta data deletion',
    body: 'User-data-deletion instructions for Facebook/Instagram connections.',
    to: '/data-deletion',
  },
  {
    icon: FileText,
    title: 'Data Processing Agreement',
    body: 'Holding DPA with downloadable draft — request a countersigned copy for your records.',
    to: '/dpa',
  },
  {
    icon: FileText,
    title: 'DPIA overview',
    body: 'A holding DPIA-style summary studios can use while completing their own controller assessment.',
    to: '/dpia',
  },
  {
    icon: Network,
    title: 'Sub-processors',
    body: 'Public list of vendors that help deliver HelgoIQ (hosting, auth, payments, email, monitoring).',
    to: '/subprocessors',
  },
  {
    icon: Activity,
    title: 'System status',
    body: 'Live checks for the marketing site, app origin, and demo booking API proxy.',
    to: '/status',
  },
]

export default function Trust() {
  return (
    <div className="pt-16">
      <section className="bg-forest-600 text-white py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-forest-300 mb-3">
            Trust centre
          </p>
          <h1 className="text-3xl lg:text-5xl font-semibold tracking-tight mb-4">
            Security & privacy for studio operators
          </h1>
          <p className="text-forest-200 text-lg leading-relaxed">
            Company identity, holding legal documents, sub-processors, DPA download, and live status
            — so you can evaluate HelgoIQ with the same seriousness you bring to member data.
          </p>
        </div>
      </section>

      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 space-y-3 text-sm text-gray-700">
          <p>
            <span className="font-semibold text-gray-900">Legal entity:</span> {COMPANY_LEGAL_NAME}
          </p>
          <p>
            <span className="font-semibold text-gray-900">Company number:</span>{' '}
            <a
              href={COMPANY_NUMBER_URL}
              target="_blank"
              rel="noreferrer"
              className="text-forest-600 hover:underline"
            >
              {COMPANY_NUMBER}
            </a>{' '}
            (Companies House)
          </p>
          <p>
            <span className="font-semibold text-gray-900">Registered office:</span>{' '}
            {REGISTERED_OFFICE_SINGLE_LINE}
          </p>
          <p>
            <span className="font-semibold text-gray-900">Privacy:</span>{' '}
            <a href={`mailto:${PRIVACY_EMAIL_ADDRESS}`} className="text-forest-600 hover:underline">
              {PRIVACY_EMAIL_ADDRESS}
            </a>
          </p>
        </div>
      </section>

      <section className="py-16 bg-mist">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {docs.map(({ icon: Icon, title, body, to }) => (
              <Link
                key={to}
                to={to}
                className="block bg-white border border-gray-100 rounded-xl p-6 hover:border-forest-200 transition-colors"
              >
                <div className="feature-icon mb-4">
                  <Icon size={18} />
                </div>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">{title}</h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{body}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-forest-600">
                  Open <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-8 max-w-2xl">
            Legal documents are marked as holding drafts until counsel sign-off. Download the DPA
            draft or request a countersigned copy via {PRIVACY_EMAIL_ADDRESS}.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Switching from another system?</h2>
          <p className="text-gray-600 mb-6">
            See how HelgoIQ approaches disruption-light migration for members, packs, and payments.
          </p>
          <Link to="/migrate" className="btn-primary">
            Migration overview <ArrowRight size={15} />
          </Link>
          <div className="mt-10">
            <CtaButtons className="justify-center" />
          </div>
        </div>
      </section>
    </div>
  )
}

import { Link } from 'react-router-dom'
import { ArrowRight, Mail, MapPin } from 'lucide-react'
import {
  COMPANY_LEGAL_NAME,
  COMPANY_NUMBER,
  COMPANY_NUMBER_URL,
  CONTACT_EMAIL_ADDRESS,
  REGISTERED_OFFICE,
} from '../lib/company'
import { BOOK_DEMO_PATH, TRIAL_SIGNUP_URL } from '../lib/urls'

export default function Contact() {
  return (
    <div className="pt-16">
      <section className="bg-forest-600 text-white py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-forest-300 mb-3">
            Contact
          </p>
          <h1 className="text-3xl lg:text-5xl font-semibold tracking-tight mb-4">
            Talk to HelgoIQ
          </h1>
          <p className="text-forest-200 text-lg leading-relaxed">
            Book a demo for a guided walkthrough, start a free trial, or email us for enterprise and
            migration questions.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-2 text-forest-600 mb-2">
                <Mail size={18} />
                <h2 className="text-lg font-semibold text-gray-900">Email</h2>
              </div>
              <a
                href={`mailto:${CONTACT_EMAIL_ADDRESS}`}
                className="text-forest-600 font-medium hover:underline"
              >
                {CONTACT_EMAIL_ADDRESS}
              </a>
              <p className="text-sm text-gray-500 mt-2">
                Privacy / DPIA / DPA requests: privacy@helgoiq.com
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 text-forest-600 mb-2">
                <MapPin size={18} />
                <h2 className="text-lg font-semibold text-gray-900">Registered office</h2>
              </div>
              <address className="not-italic text-gray-700 text-sm leading-relaxed">
                {REGISTERED_OFFICE.line1}
                <br />
                {REGISTERED_OFFICE.line2}
                <br />
                {REGISTERED_OFFICE.city}
                <br />
                {REGISTERED_OFFICE.county}
                <br />
                {REGISTERED_OFFICE.postcode}
                <br />
                {REGISTERED_OFFICE.country}
              </address>
              <p className="text-sm text-gray-500 mt-3">
                {COMPANY_LEGAL_NAME} · Company No.{' '}
                <a
                  href={COMPANY_NUMBER_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="text-forest-600 hover:underline"
                >
                  {COMPANY_NUMBER}
                </a>
              </p>
            </div>
          </div>

          <div className="bg-mist rounded-2xl p-8 space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">Fastest paths</h2>
            <Link to={BOOK_DEMO_PATH} className="btn-primary w-full justify-center">
              Book a demo <ArrowRight size={15} />
            </Link>
            <a href={TRIAL_SIGNUP_URL} className="btn-secondary w-full justify-center">
              Start free trial
            </a>
            <Link
              to="/migrate"
              className="block text-center text-sm font-medium text-forest-600 hover:underline pt-2"
            >
              Switching systems? See migration →
            </Link>
            <Link
              to="/trust"
              className="block text-center text-sm font-medium text-forest-600 hover:underline"
            >
              Trust centre (Privacy, Terms, DPIA) →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

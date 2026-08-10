import LegalDoc, { LegalH2, LegalUl } from '../components/LegalDoc'
import {
  COMPANY_LEGAL_NAME,
  COMPANY_NUMBER,
  CONTACT_EMAIL_ADDRESS,
  REGISTERED_OFFICE_SINGLE_LINE,
} from '../lib/company'
import { TRIAL_SIGNUP_URL } from '../lib/urls'

export default function Terms() {
  return (
    <LegalDoc title="Terms of Service" updated="10 August 2026">
      <p>
        These Terms govern access to HelgoIQ websites and software provided by {COMPANY_LEGAL_NAME}{' '}
        (Company No. {COMPANY_NUMBER}), registered office {REGISTERED_OFFICE_SINGLE_LINE}. By using
        the Service (including starting a trial at{' '}
        <a href={TRIAL_SIGNUP_URL} className="text-forest-600 underline">
          app.helgoiq.com/signup
        </a>
        ), you agree to these Terms.
      </p>

      <LegalH2>1. The Service</LegalH2>
      <p>
        HelgoIQ provides studio operating software and related marketing sites, including booking,
        memberships, CRM, websites, payments integrations, and AI-assisted tools. Features available
        depend on your plan.
      </p>

      <LegalH2>2. Accounts & authority</LegalH2>
      <LegalUl
        items={[
          'You must provide accurate account information and keep credentials secure.',
          'If you create a studio/organisation, you represent that you are authorised to bind that Business.',
          'You are responsible for activity under your accounts and for the lawfulness of data you upload.',
        ]}
      />

      <LegalH2>3. Trials & plans</LegalH2>
      <p>
        Free trials and Core access are offered as described on the Pricing page. Paid plans renew
        according to the billing terms shown at purchase. You can cancel according to in-product
        controls; unpaid invoices may result in suspension.
      </p>

      <LegalH2>4. Acceptable use</LegalH2>
      <LegalUl
        items={[
          'Do not misuse the Service (malware, scraping abuse, unauthorized access, spam).',
          'Do not use HelgoIQ to send unlawful marketing; obtain required consents for SMS/email.',
          'Do not upload unlawful content or infringe others’ rights.',
          'AI features are assistive; you remain responsible for reviewing outputs before they reach members.',
        ]}
      />

      <LegalH2>5. Customer data</LegalH2>
      <p>
        As between you and HelgoIQ, the Business retains ownership of its customer/member data. We
        process that data to provide the Service under our Privacy Policy and, where required, a Data
        Processing Agreement. You grant us a limited licence to host and process that data for the
        Service.
      </p>

      <LegalH2>6. Third-party services</LegalH2>
      <p>
        Integrations (e.g. Stripe, GoCardless, Clerk authentication, messaging providers) are subject
        to those providers’ terms. HelgoIQ is not responsible for third-party outages outside our
        reasonable control.
      </p>

      <LegalH2>7. Intellectual property</LegalH2>
      <p>
        HelgoIQ and its branding, software, and documentation remain our intellectual property. You
        receive a limited, non-exclusive right to use the Service during your subscription.
      </p>

      <LegalH2>8. Warranties & liability</LegalH2>
      <p>
        The Service is provided on an “as is” and “as available” basis to the fullest extent
        permitted by law. Nothing in these Terms excludes liability that cannot be excluded under UK
        law (including for death/personal injury caused by negligence or fraud). Subject to that,
        our aggregate liability arising out of the Service in any 12-month period is limited to the
        fees you paid us for the Service in that period (or £100 if you are on a free plan).
      </p>

      <LegalH2>9. Suspension & termination</LegalH2>
      <p>
        We may suspend or terminate access for material breach, non-payment, or risk to the Service
        or others. On termination, export tools (where available) should be used promptly; we may
        delete data after a retention window described in our Privacy Policy.
      </p>

      <LegalH2>10. Governing law</LegalH2>
      <p>
        These Terms are governed by the laws of England and Wales. Courts of England and Wales have
        exclusive jurisdiction, subject to any mandatory consumer protections that apply.
      </p>

      <LegalH2>11. Contact</LegalH2>
      <p>
        Questions:{' '}
        <a href={`mailto:${CONTACT_EMAIL_ADDRESS}`} className="text-forest-600 underline">
          {CONTACT_EMAIL_ADDRESS}
        </a>
      </p>
    </LegalDoc>
  )
}

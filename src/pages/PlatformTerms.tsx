import { Link } from 'react-router-dom'
import LegalDoc, { LegalH2, LegalUl } from '../components/LegalDoc'
import {
  COMPANY_LEGAL_NAME,
  COMPANY_NUMBER,
  CONTACT_EMAIL_ADDRESS,
  LEGAL_EMAIL_ADDRESS,
  PRIVACY_EMAIL_ADDRESS,
  REGISTERED_OFFICE_SINGLE_LINE,
} from '../lib/company'
import { TRIAL_SIGNUP_URL } from '../lib/urls'

/**
 * Platform Terms of Service (holding).
 * Corrected contact domains (@helgoiq.com). Does not restate legacy transaction-fee
 * assumptions or unverified SLA commitments — those require counsel sign-off.
 */
export default function PlatformTerms() {
  return (
    <LegalDoc title="Platform Terms of Service" updated="11 August 2026">
      <p>
        These Platform Terms govern access to the HelgoIQ software platform provided by{' '}
        {COMPANY_LEGAL_NAME} (Company No. {COMPANY_NUMBER}), registered office{' '}
        {REGISTERED_OFFICE_SINGLE_LINE}. By creating an account or starting a trial at{' '}
        <a href={TRIAL_SIGNUP_URL} className="text-forest-600 underline">
          app.helgoiq.com/signup
        </a>
        , you agree to these Terms (as updated and once counsel-finalised).
      </p>
      <p>
        Website-only terms for the marketing site remain at{' '}
        <Link to="/terms" className="text-forest-600 underline">
          /terms
        </Link>{' '}
        and Meta URL{' '}
        <a href="/terms.html" className="text-forest-600 underline">
          /terms.html
        </a>
        .
      </p>

      <LegalH2>1. The Service</LegalH2>
      <p>
        HelgoIQ provides studio operating software including booking, memberships, CRM, websites,
        payments integrations, messaging integrations, and AI-assisted tools. Features available
        depend on your plan and enabled integrations.
      </p>

      <LegalH2>2. Accounts &amp; authority</LegalH2>
      <LegalUl
        items={[
          'You must provide accurate account information and keep credentials secure.',
          'If you create a studio/organisation, you represent that you are authorised to bind that Business.',
          'You are responsible for activity under your accounts and for the lawfulness of data you upload and messages you send.',
        ]}
      />

      <LegalH2>3. Trials, plans &amp; fees</LegalH2>
      <p>
        Free trials and paid plans are offered as described on the Pricing page and in-product at the
        time of purchase. Fees, billing intervals, and any payment-processing charges from providers
        such as Stripe or GoCardless are those shown at checkout or in your order form — not legacy
        assumptions from older drafts. You can cancel according to in-product controls; unpaid
        invoices may result in suspension.
      </p>

      <LegalH2>4. Customer data ownership</LegalH2>
      <p>
        As between you and HelgoIQ, the Business retains ownership of its customer/member data. We
        process that data to provide the Service under our{' '}
        <Link to="/platform-privacy" className="text-forest-600 underline">
          Platform Privacy Policy
        </Link>{' '}
        and, where required, a{' '}
        <Link to="/dpa" className="text-forest-600 underline">
          Data Processing Agreement
        </Link>
        . You grant us a limited licence to host and process that data for the Service.
      </p>

      <LegalH2>5. Acceptable use</LegalH2>
      <LegalUl
        items={[
          'Do not misuse the Service (malware, scraping abuse, unauthorized access, spam).',
          'Do not use HelgoIQ to send unlawful marketing; obtain required consents for SMS/email/Meta messaging.',
          'Do not upload unlawful content or infringe others’ rights.',
          'AI features are assistive; you remain responsible for reviewing outputs before they reach members.',
        ]}
      />

      <LegalH2>6. Third-party services</LegalH2>
      <p>
        Integrations (e.g. Stripe, GoCardless, Clerk authentication, Twilio SMS, Meta messaging) are
        subject to those providers’ terms. HelgoIQ is not responsible for third-party outages outside
        our reasonable control.
      </p>

      <LegalH2>7. Service levels</LegalH2>
      <p>
        We aim to keep the Service available and supported for paying customers. Specific uptime
        commitments, credits, or support response SLAs — if any — will be stated in an order form or
        separately signed agreement after legal review. This holding page does not invent percentage
        uptime guarantees.
      </p>

      <LegalH2>8. Intellectual property</LegalH2>
      <p>
        HelgoIQ and its branding, software, and documentation remain our intellectual property. You
        receive a limited, non-exclusive right to use the Service during your subscription.
      </p>

      <LegalH2>9. Warranties &amp; liability</LegalH2>
      <p>
        The Service is provided on an “as is” and “as available” basis to the fullest extent permitted
        by law. Nothing in these Terms excludes liability that cannot be excluded under UK law
        (including for death/personal injury caused by negligence or fraud). Subject to that, our
        aggregate liability arising out of the Service in any 12-month period is limited to the fees
        you paid us for the Service in that period (or £100 if you are on a free plan), unless a
        signed order form states otherwise.
      </p>

      <LegalH2>10. Suspension &amp; termination</LegalH2>
      <p>
        We may suspend or terminate access for material breach, non-payment, or risk to the Service or
        others. On termination, export tools (where available) should be used promptly; we may delete
        data after a retention window described in our privacy policies.
      </p>

      <LegalH2>11. Governing law</LegalH2>
      <p>
        These Terms are governed by the laws of England and Wales. Courts of England and Wales have
        exclusive jurisdiction, subject to any mandatory consumer protections that apply.
      </p>

      <LegalH2>12. Contact</LegalH2>
      <p>
        Legal:{' '}
        <a href={`mailto:${LEGAL_EMAIL_ADDRESS}`} className="text-forest-600 underline">
          {LEGAL_EMAIL_ADDRESS}
        </a>{' '}
        · Privacy:{' '}
        <a href={`mailto:${PRIVACY_EMAIL_ADDRESS}`} className="text-forest-600 underline">
          {PRIVACY_EMAIL_ADDRESS}
        </a>{' '}
        · General:{' '}
        <a href={`mailto:${CONTACT_EMAIL_ADDRESS}`} className="text-forest-600 underline">
          {CONTACT_EMAIL_ADDRESS}
        </a>
      </p>
    </LegalDoc>
  )
}

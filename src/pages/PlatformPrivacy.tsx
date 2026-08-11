import { Link } from 'react-router-dom'
import LegalDoc, { LegalH2, LegalH3, LegalUl } from '../components/LegalDoc'
import {
  COMPANY_LEGAL_NAME,
  COMPANY_NUMBER,
  COMPLIANCE_EMAIL_ADDRESS,
  CONTACT_EMAIL_ADDRESS,
  PRIVACY_EMAIL_ADDRESS,
  REGISTERED_OFFICE_SINGLE_LINE,
} from '../lib/company'

/**
 * Platform Privacy Policy (holding).
 * Covers studio/member data and providers (Meta, Stripe, Twilio, etc.).
 * All contact addresses are @helgoiq.com — never legacy brand domains.
 */
export default function PlatformPrivacy() {
  return (
    <LegalDoc title="Platform Privacy Policy" updated="11 August 2026">
      <p>
        This Platform Privacy Policy describes how {COMPANY_LEGAL_NAME} (Company No. {COMPANY_NUMBER}),
        registered office {REGISTERED_OFFICE_SINGLE_LINE}, processes personal data when providing the
        HelgoIQ studio operating platform at app.helgoiq.com and related services.
      </p>
      <p>
        For website enquiry privacy and Meta App Review URLs, see the{' '}
        <Link to="/privacy" className="text-forest-600 underline">
          website Privacy Policy
        </Link>{' '}
        and static{' '}
        <a href="/privacy.html" className="text-forest-600 underline">
          /privacy.html
        </a>
        .
      </p>

      <LegalH2>1. Contact</LegalH2>
      <LegalUl
        items={[
          `Privacy: ${PRIVACY_EMAIL_ADDRESS}`,
          `Compliance / Meta deletion: ${COMPLIANCE_EMAIL_ADDRESS}`,
          `General: ${CONTACT_EMAIL_ADDRESS}`,
        ]}
      />

      <LegalH2>2. Roles</LegalH2>
      <LegalUl
        items={[
          'Business (studio) — controller for member, lead, staff, and customer-communications data it uploads or generates in HelgoIQ.',
          'HelgoIQ — processor for that Business customer data, acting on documented instructions.',
          'HelgoIQ — controller for account administration, billing contacts, security logs, product analytics necessary to run the Service, and our own support records.',
        ]}
      />

      <LegalH2>3. Categories of personal data</LegalH2>
      <LegalH3>Studio &amp; staff</LegalH3>
      <LegalUl
        items={[
          'Account identity, roles, authentication identifiers',
          'Studio profile and configuration',
          'Support communications with HelgoIQ',
        ]}
      />
      <LegalH3>Members &amp; leads (controller: Business)</LegalH3>
      <LegalUl
        items={[
          'Identity and contact details',
          'Bookings, attendance, memberships, packs, and purchase history',
          'Notes and CRM fields the Business chooses to store',
          'Communications content sent via email, SMS, or connected inboxes',
        ]}
      />
      <LegalH3>Payments</LegalH3>
      <p>
        Payment card and bank details are handled by payment processors such as Stripe and GoCardless.
        HelgoIQ stores payment-related metadata needed for memberships, invoices, and reconciliation —
        not full card numbers.
      </p>
      <LegalH3>Meta messaging</LegalH3>
      <p>
        Where a Business connects Facebook, Instagram or other Meta assets, HelgoIQ may process Page /
        Instagram identifiers, message content and metadata, and connection tokens as described in the{' '}
        <Link to="/privacy" className="text-forest-600 underline">
          website Privacy Policy
        </Link>{' '}
        and{' '}
        <Link to="/data-deletion" className="text-forest-600 underline">
          Meta data deletion
        </Link>{' '}
        instructions.
      </p>
      <LegalH3>SMS (Twilio and similar)</LegalH3>
      <p>
        Phone numbers and message content are processed to deliver opted-in SMS. Consent, opt-out
        (STOP), and sharing rules are described in the{' '}
        <Link to="/sms-consent" className="text-forest-600 underline">
          SMS Communication Policy
        </Link>
        .
      </p>

      <LegalH2>4. Purposes &amp; lawful bases (summary)</LegalH2>
      <LegalUl
        items={[
          'Provide, secure, and support the Service (contract / legitimate interests; processor instructions for Business data)',
          'Billing and fraud prevention (contract / legitimate interests / legal obligation)',
          'Service notices (contract / legitimate interests)',
          'Marketing only where lawful (consent or soft opt-in where applicable)',
          'Legal compliance and dispute handling',
        ]}
      />

      <LegalH2>5. Sub-processors &amp; DPA</LegalH2>
      <p>
        Current public list:{' '}
        <Link to="/subprocessors" className="text-forest-600 underline">
          /subprocessors
        </Link>
        . Processor terms:{' '}
        <Link to="/dpa" className="text-forest-600 underline">
          /dpa
        </Link>
        . Request countersignature via {PRIVACY_EMAIL_ADDRESS}.
      </p>

      <LegalH2>6. International transfers</LegalH2>
      <p>
        Where providers process data outside the UK/EEA, HelgoIQ uses appropriate safeguards such as
        UK IDTA / EU SCCs.
      </p>

      <LegalH2>7. Retention &amp; deletion</LegalH2>
      <p>
        Businesses control retention of their member data subject to product tools and their own
        policies. HelgoIQ retains controller data (accounts, billing, security) for as long as needed
        for the Service and legal obligations. Meta-connected deletion follows{' '}
        <Link to="/data-deletion" className="text-forest-600 underline">
          /data-deletion
        </Link>
        .
      </p>

      <LegalH2>8. Security</LegalH2>
      <p>
        HelgoIQ uses encryption in transit, modern authentication, role-based access for studio staff,
        and operational monitoring. No method of transmission or storage is perfectly secure; report
        concerns to {PRIVACY_EMAIL_ADDRESS} or {COMPLIANCE_EMAIL_ADDRESS}.
      </p>

      <LegalH2>9. Rights</LegalH2>
      <p>
        Members should normally contact their studio (controller). Businesses and individuals may also
        contact {PRIVACY_EMAIL_ADDRESS}. You may complain to the ICO (ico.org.uk).
      </p>

      <LegalH2>10. Updates</LegalH2>
      <p>
        Material changes will be posted on this page with an updated date. Account holders may be
        notified by email where appropriate.
      </p>
    </LegalDoc>
  )
}

import LegalDoc, { LegalH2, LegalH3, LegalUl } from '../components/LegalDoc'
import {
  COMPANY_DISPLAY_NAME,
  COMPANY_LEGAL_NAME,
  COMPANY_NUMBER,
  CONTACT_EMAIL_ADDRESS,
  PRIVACY_EMAIL_ADDRESS,
  REGISTERED_OFFICE_SINGLE_LINE,
} from '../lib/company'

export default function Privacy() {
  return (
    <LegalDoc title="Privacy Policy" updated="10 August 2026">
      <p>
        {COMPANY_LEGAL_NAME} (“HelgoIQ”, “we”, “us”) provides studio operating software for fitness
        and wellness businesses. This policy explains how we handle personal data for our marketing
        site and platform in plain language. Role model: like many studio platforms, HelgoIQ
        typically acts as a <strong>processor</strong> for member data controlled by the studio, and
        as a <strong>controller</strong> for our own prospect, account, and website data.
      </p>

      <LegalH2>1. Who we are</LegalH2>
      <p>
        {COMPANY_LEGAL_NAME} (Company No. {COMPANY_NUMBER}) is a private limited company registered
        in England and Wales. Registered office: {REGISTERED_OFFICE_SINGLE_LINE}.
      </p>
      <p>
        Privacy contact:{' '}
        <a href={`mailto:${PRIVACY_EMAIL_ADDRESS}`} className="text-forest-600 underline">
          {PRIVACY_EMAIL_ADDRESS}
        </a>{' '}
        · General:{' '}
        <a href={`mailto:${CONTACT_EMAIL_ADDRESS}`} className="text-forest-600 underline">
          {CONTACT_EMAIL_ADDRESS}
        </a>
      </p>

      <LegalH2>2. Roles</LegalH2>
      <LegalUl
        items={[
          'Studio / gym (“Business”) — usually the data controller for its members, leads, staff, and customer communications.',
          'HelgoIQ — data processor for Business customer data processed in the platform on the Business’s instructions.',
          'HelgoIQ — data controller for marketing-site visitors, demo bookings, trial accounts, billing contacts, and our own support records.',
        ]}
      />

      <LegalH2>3. What we collect</LegalH2>
      <LegalH3>Marketing site & demos</LegalH3>
      <LegalUl
        items={[
          'Name, email, phone, studio name, and notes when you book a demo or contact us',
          'Optional SMS consent where you tick the consent box',
          'Technical data such as IP address, browser, and pages viewed (to run and secure the site)',
        ]}
      />
      <LegalH3>Platform (on behalf of a Business)</LegalH3>
      <LegalUl
        items={[
          'Member and lead profiles (e.g. name, contact details, bookings, memberships, notes)',
          'Payment-related metadata via processors such as Stripe and GoCardless (card numbers are handled by those processors)',
          'Staff accounts, roles, and operational activity needed to run the studio',
          'Communications content you choose to process in HelgoIQ (email/SMS/inbox tools)',
        ]}
      />

      <LegalH2>4. Why we use personal data</LegalH2>
      <LegalUl
        items={[
          'Provide, secure, and improve the Service',
          'Respond to demos, trials, and support requests',
          'Process payments and prevent fraud/abuse',
          'Send service notices; send marketing only where lawful (consent or soft opt-in where applicable)',
          'Comply with legal obligations and protect our rights',
        ]}
      />

      <LegalH2>5. Cookies</LegalH2>
      <p>
        We use cookies and similar technologies that are necessary to run the site and app (e.g.
        session/authentication). Analytics or advertising cookies, if introduced, will be described
        here and offered with appropriate controls on the marketing site.
      </p>

      <LegalH2>6. Sharing</LegalH2>
      <p>
        We share data with sub-processors only as needed to operate HelgoIQ (for example hosting,
        email/SMS delivery, payment processors, error monitoring, and authentication). We do not sell
        personal data. A current sub-processor list will be maintained in the Trust centre as it is
        finalised.
      </p>

      <LegalH2>7. International transfers</LegalH2>
      <p>
        Where data is transferred outside the UK/EEA, we use appropriate safeguards (such as UK
        IDTA / EU SCCs) with relevant providers. Details will be listed with our sub-processors.
      </p>

      <LegalH2>8. Retention</LegalH2>
      <p>
        We keep personal data only as long as needed for the purposes above, including backups and
        legal retention. Businesses control retention of their member data subject to platform tools
        and their own policies. Export and anonymisation tools are part of the product direction for
        UK GDPR support.
      </p>

      <LegalH2>9. Your rights</LegalH2>
      <p>
        Depending on your situation you may have rights to access, rectify, erase, restrict,
        port, or object to processing, and to withdraw consent. Studio members should usually contact
        their studio first (the controller). You can also contact {PRIVACY_EMAIL_ADDRESS}. You may
        complain to the ICO (ico.org.uk).
      </p>

      <LegalH2>10. Children</LegalH2>
      <p>
        HelgoIQ is aimed at businesses. It is not directed at children under 13. Where a Business
        serves minors, the Business is responsible for lawful collection and parental consents.
      </p>

      <LegalH2>11. Updates</LegalH2>
      <p>
        We may update this policy. Material changes will be posted on this page with a new “last
        updated” date, and we may notify account holders by email where appropriate.
      </p>

      <p className="text-sm text-gray-500 pt-4">
        This holding draft is provided by {COMPANY_DISPLAY_NAME} for transparency while formal legal
        sign-off is completed.
      </p>
    </LegalDoc>
  )
}

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
 * Marketing-site Privacy Policy.
 * Meta App Review also uses the static twin at /privacy.html — keep Meta/SMS language aligned.
 */
export default function Privacy() {
  return (
    <LegalDoc title="Privacy Policy" updated="11 August 2026" holding={false}>
      <p>
        {COMPANY_LEGAL_NAME} (“HelgoIQ”, “we”, “us”) provides software for fitness and wellness
        studio operators. This policy explains how we collect and use information submitted through
        this website, related enquiry workflows, Meta (Facebook and Instagram) business integrations,
        and the HelgoIQ platform.
      </p>
      <p className="text-sm text-gray-500">
        Canonical Meta App Review URL:{' '}
        <a href="/privacy.html" className="text-forest-600 underline">
          /privacy.html
        </a>
        . Deeper platform processing is also summarised in the{' '}
        <Link to="/platform-privacy" className="text-forest-600 underline">
          Platform Privacy Policy
        </Link>{' '}
        (holding draft).
      </p>

      <LegalH2>1. Who we are</LegalH2>
      <p>
        {COMPANY_LEGAL_NAME} (Company No. {COMPANY_NUMBER}) is a private limited company registered
        in England and Wales. Registered office: {REGISTERED_OFFICE_SINGLE_LINE}.
      </p>
      <p>
        Privacy:{' '}
        <a href={`mailto:${PRIVACY_EMAIL_ADDRESS}`} className="text-forest-600 underline">
          {PRIVACY_EMAIL_ADDRESS}
        </a>{' '}
        · Compliance:{' '}
        <a href={`mailto:${COMPLIANCE_EMAIL_ADDRESS}`} className="text-forest-600 underline">
          {COMPLIANCE_EMAIL_ADDRESS}
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

      <LegalH2>3. Information we collect</LegalH2>
      <LegalH3>Website &amp; enquiries</LegalH3>
      <p>
        We may collect your name, studio or company name, email address, phone number, enquiry
        details, and communication preferences when you contact us.
      </p>
      <LegalH3>Platform (on behalf of a Business)</LegalH3>
      <LegalUl
        items={[
          'Member and lead profiles (e.g. name, contact details, bookings, memberships, notes)',
          'Payment-related metadata via processors such as Stripe and GoCardless (card numbers are handled by those processors)',
          'Staff accounts, roles, and operational activity needed to run the studio',
          'Communications content you choose to process in HelgoIQ (email/SMS/inbox tools)',
        ]}
      />

      <LegalH2>4. How we use information</LegalH2>
      <p>
        We use submitted information to respond to enquiries, arrange walkthroughs, provide product
        information, operate the website and platform, improve our services, process payments and
        prevent abuse, and comply with legal obligations.
      </p>

      <LegalH2>5. SMS and phone information</LegalH2>
      <p>
        If you provide a mobile number and choose to receive SMS messages, we may use that number to
        contact you about your enquiry, appointment, account, or service-related updates. Message and
        data rates may apply. You can opt out by replying STOP. Message frequency varies based on your
        enquiry, appointment, or account activity.
      </p>
      <p>
        Mobile opt-in data and consent are not sold, rented, or shared with third parties for their
        marketing or promotional purposes. See our{' '}
        <Link to="/sms-consent" className="text-forest-600 underline">
          SMS Communication Policy
        </Link>
        .
      </p>

      <LegalH2>6. Meta, Facebook and Instagram</LegalH2>
      <p>
        When a studio owner connects Facebook, Instagram or other Meta business assets to HelgoIQ, we
        may receive and process information needed to provide messaging, inbox, and related
        integration features. Depending on permissions granted and features enabled, this can include
        Page / Instagram professional account identifiers, message content and metadata, sender
        identifiers, timestamps, delivery status, conversation context, and connection tokens.
      </p>
      <p>
        HelgoIQ processes this information to operate the integration for the connecting studio,
        provide support, maintain security, and meet legal obligations. Studios remain responsible for
        how they communicate with their customers through connected channels. Meta products remain
        subject to Meta’s terms and policies.
      </p>
      <p>
        To disconnect Meta or request deletion of Meta-connected data, follow{' '}
        <Link to="/data-deletion" className="text-forest-600 underline">
          Meta data deletion
        </Link>{' '}
        or email {COMPLIANCE_EMAIL_ADDRESS}.
      </p>

      <LegalH2>7. Cookies</LegalH2>
      <p>
        We use cookies and similar technologies that are necessary to run the site and app (e.g.
        session/authentication). Optional analytics cookies are off until you accept them via the
        cookie banner on this marketing site. Preferences are stored locally in your browser.
      </p>

      <LegalH2>8. Sharing</LegalH2>
      <p>
        We share data with sub-processors only as needed to operate HelgoIQ (for example hosting,
        email/SMS delivery including Twilio where configured, payment processors, error monitoring,
        and authentication). We do not sell personal data. See{' '}
        <Link to="/subprocessors" className="text-forest-600 underline">
          /subprocessors
        </Link>{' '}
        and our{' '}
        <Link to="/dpa" className="text-forest-600 underline">
          DPA
        </Link>
        .
      </p>

      <LegalH2>9. International transfers</LegalH2>
      <p>
        Where data is transferred outside the UK/EEA, we use appropriate safeguards (such as UK IDTA /
        EU SCCs) with relevant providers.
      </p>

      <LegalH2>10. Retention</LegalH2>
      <p>
        We keep personal data only as long as needed for the purposes above, including backups and
        legal retention. Businesses control retention of their member data subject to platform tools
        and their own policies.
      </p>

      <LegalH2>11. Your rights &amp; choices</LegalH2>
      <p>
        Depending on your situation you may have rights to access, rectify, erase, restrict, port, or
        object to processing, and to withdraw consent. Studio members should usually contact their
        studio first (the controller). You can also contact {PRIVACY_EMAIL_ADDRESS}. You may complain
        to the ICO (ico.org.uk).
      </p>

      <LegalH2>12. Children</LegalH2>
      <p>
        HelgoIQ is aimed at businesses. It is not directed at children under 13. Where a Business
        serves minors, the Business is responsible for lawful collection and parental consents.
      </p>

      <LegalH2>13. Updates</LegalH2>
      <p>
        We may update this policy. Material changes will be posted on this page with a new “last
        updated” date, and we may notify account holders by email where appropriate.
      </p>
    </LegalDoc>
  )
}

import LegalDoc, { LegalH2 } from '../components/LegalDoc'
import { CONTACT_EMAIL_ADDRESS, PRIVACY_EMAIL_ADDRESS } from '../lib/company'

/**
 * SMS Communication Policy — Twilio / carrier verification language.
 * Static twin at /sms-consent.html for cutover URL continuity.
 */
export default function SmsConsent() {
  return (
    <LegalDoc title="SMS Communication Policy" updated="8 June 2026" holding={false}>
      <p className="text-sm text-gray-500">
        Public URL (also available as{' '}
        <a href="/sms-consent.html" className="text-forest-600 underline">
          /sms-consent.html
        </a>
        ).
      </p>

      <LegalH2>How SMS consent is collected</LegalH2>
      <p>
        HelgoIQ only sends SMS messages to people who provide a phone number and opt in through a
        clear consent checkbox, booking flow, account workflow, or written request.
      </p>

      <LegalH2>Types of messages</LegalH2>
      <p>
        Messages may include enquiry follow-up, walkthrough scheduling, account support, operational
        updates, booking-related information, or service-related notifications.
      </p>

      <LegalH2>Opt-out</LegalH2>
      <p>
        You can opt out of SMS messages at any time by replying STOP. For help, reply HELP or contact{' '}
        <a href={`mailto:${CONTACT_EMAIL_ADDRESS}`} className="text-forest-600 underline">
          {CONTACT_EMAIL_ADDRESS}
        </a>
        .
      </p>

      <LegalH2>Fees and frequency</LegalH2>
      <p>
        Message frequency varies based on your enquiry or account activity. Message and data rates may
        apply. Carriers are not liable for delayed or undelivered messages.
      </p>

      <LegalH2>Data sharing</LegalH2>
      <p>
        Mobile opt-in data and consent are not sold, rented, or shared with third parties for their
        marketing or promotional purposes.
      </p>

      <LegalH2>Contact</LegalH2>
      <p>
        Questions:{' '}
        <a href={`mailto:${CONTACT_EMAIL_ADDRESS}`} className="text-forest-600 underline">
          {CONTACT_EMAIL_ADDRESS}
        </a>{' '}
        · Privacy:{' '}
        <a href={`mailto:${PRIVACY_EMAIL_ADDRESS}`} className="text-forest-600 underline">
          {PRIVACY_EMAIL_ADDRESS}
        </a>
      </p>
    </LegalDoc>
  )
}

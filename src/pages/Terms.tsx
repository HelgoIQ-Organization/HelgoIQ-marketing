import { Link } from 'react-router-dom'
import LegalDoc, { LegalH2 } from '../components/LegalDoc'
import {
  COMPANY_LEGAL_NAME,
  COMPANY_NUMBER,
  CONTACT_EMAIL_ADDRESS,
  LEGAL_EMAIL_ADDRESS,
  REGISTERED_OFFICE_SINGLE_LINE,
} from '../lib/company'

/**
 * Website Terms — aligned with the Meta-configured /terms.html page.
 * Platform subscription terms live separately at /platform-terms (holding).
 */
export default function Terms() {
  return (
    <LegalDoc title="Website Terms" updated="8 June 2026" holding={false}>
      <p>
        These Website Terms apply to the HelgoIQ marketing site operated by {COMPANY_LEGAL_NAME}{' '}
        (Company No. {COMPANY_NUMBER}), registered office {REGISTERED_OFFICE_SINGLE_LINE}.
      </p>
      <p className="text-sm text-gray-500">
        Canonical Meta App Review URL:{' '}
        <a href="/terms.html" className="text-forest-600 underline">
          /terms.html
        </a>
        . Platform subscription terms (holding draft):{' '}
        <Link to="/platform-terms" className="text-forest-600 underline">
          /platform-terms
        </Link>
        .
      </p>

      <LegalH2>Use of this website</LegalH2>
      <p>
        This website provides information about HelgoIQ software and related services. You agree not
        to misuse the website, interfere with its operation, or submit false or unlawful information.
      </p>

      <LegalH2>Product information</LegalH2>
      <p>
        Product descriptions, features, screenshots, and availability may change as the platform
        develops. Nothing on this website creates a service agreement unless separately agreed in
        writing.
      </p>

      <LegalH2>Intellectual property</LegalH2>
      <p>
        The HelgoIQ name, website content, visual design, and product materials are owned by HelgoIQ
        or its licensors and may not be copied or reused without permission.
      </p>

      <LegalH2>Communications</LegalH2>
      <p>
        If you submit an enquiry, we may contact you using the details you provide. SMS
        communications require your consent and are used for HelgoIQ enquiry follow-up, walkthrough
        scheduling, account support, operational updates, booking-related information, and
        service-related notifications.
      </p>
      <p>
        Message frequency varies. Message and data rates may apply. For help, reply HELP or contact{' '}
        <a href={`mailto:${CONTACT_EMAIL_ADDRESS}`} className="text-forest-600 underline">
          {CONTACT_EMAIL_ADDRESS}
        </a>
        . To opt out, reply <strong>STOP</strong>. Carriers are not liable for delayed or undelivered
        messages.
      </p>
      <p>
        See our{' '}
        <Link to="/privacy" className="text-forest-600 underline">
          Privacy Policy
        </Link>{' '}
        and{' '}
        <Link to="/sms-consent" className="text-forest-600 underline">
          SMS Communication Policy
        </Link>
        .
      </p>

      <LegalH2>Contact</LegalH2>
      <p>
        Questions:{' '}
        <a href={`mailto:${CONTACT_EMAIL_ADDRESS}`} className="text-forest-600 underline">
          {CONTACT_EMAIL_ADDRESS}
        </a>{' '}
        · Legal:{' '}
        <a href={`mailto:${LEGAL_EMAIL_ADDRESS}`} className="text-forest-600 underline">
          {LEGAL_EMAIL_ADDRESS}
        </a>
      </p>
    </LegalDoc>
  )
}

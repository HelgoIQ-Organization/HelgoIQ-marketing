import { Download } from 'lucide-react'
import LegalDoc, { LegalH2, LegalUl } from '../components/LegalDoc'
import {
  COMPANY_LEGAL_NAME,
  COMPANY_NUMBER,
  PRIVACY_EMAIL_ADDRESS,
  REGISTERED_OFFICE_SINGLE_LINE,
} from '../lib/company'
import { Link } from 'react-router-dom'

export default function Dpa() {
  return (
    <LegalDoc title="Data Processing Agreement" updated="10 August 2026">
      <p>
        This is a <strong>holding DPA</strong> for studios that need processor terms while evaluating
        HelgoIQ. {COMPANY_LEGAL_NAME} (Company No. {COMPANY_NUMBER}), registered office{' '}
        {REGISTERED_OFFICE_SINGLE_LINE}, typically acts as processor for member data controlled by
        your business.
      </p>

      <div className="not-prose flex flex-col sm:flex-row gap-3 my-6">
        <a
          href="/legal/helgoiq-dpa-holding.md"
          download="helgoiq-dpa-holding.md"
          className="btn-primary justify-center"
        >
          <Download size={16} /> Download holding DPA (.md)
        </a>
        <a
          href={`mailto:${PRIVACY_EMAIL_ADDRESS}?subject=HelgoIQ%20DPA%20countersign%20request`}
          className="btn-secondary justify-center"
        >
          Request countersigned copy
        </a>
      </div>

      <LegalH2>Roles</LegalH2>
      <LegalUl
        items={[
          'Customer (studio/gym) — Data Controller for Customer Personal Data in the platform',
          'HelgoIQ — Data Processor for that Customer Personal Data on documented instructions',
          'HelgoIQ — independent controller for its own marketing, account, and support records',
        ]}
      />

      <LegalH2>What the DPA covers</LegalH2>
      <LegalUl
        items={[
          'Subject matter, nature, and purpose of processing',
          'Types of personal data and data subjects',
          'Processor security, confidentiality, and assistance duties',
          'Sub-processor authorisation and the public list',
          'International transfers, breach notice, and return/deletion',
        ]}
      />

      <LegalH2>Sub-processors</LegalH2>
      <p>
        Authorised sub-processors are listed at{' '}
        <Link to="/subprocessors" className="text-forest-600 underline">
          /subprocessors
        </Link>
        . Material changes will be reflected there and, where practicable, notified to account
        owners.
      </p>

      <LegalH2>How to execute</LegalH2>
      <p>
        Download the holding draft, review with your counsel, then email{' '}
        <a href={`mailto:${PRIVACY_EMAIL_ADDRESS}`} className="text-forest-600 underline">
          {PRIVACY_EMAIL_ADDRESS}
        </a>{' '}
        to request a countersigned PDF/version for your records. Until countersigned, this page is
        informational only.
      </p>
    </LegalDoc>
  )
}

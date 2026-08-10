import LegalDoc, { LegalH2, LegalUl } from '../components/LegalDoc'
import { COMPANY_LEGAL_NAME, COMPANY_NUMBER, PRIVACY_EMAIL_ADDRESS } from '../lib/company'

/**
 * Holding DPIA overview for studio diligence.
 * Structured similarly to how fitness platforms support controller DPIAs
 * (processor assistance + processing description) — HelgoIQ-specific content only.
 */
export default function Dpia() {
  return (
    <LegalDoc title="DPIA overview (holding)" updated="10 August 2026">
      <p>
        Under UK GDPR, a Data Protection Impact Assessment (DPIA) helps identify and reduce privacy
        risk for higher-risk processing. Studios using HelgoIQ often remain the <strong>controller</strong>{' '}
        for member data; {COMPANY_LEGAL_NAME} (Company No. {COMPANY_NUMBER}) typically acts as{' '}
        <strong>processor</strong> and can assist with information needed for your DPIA.
      </p>
      <p>
        This page is a <strong>holding summary</strong> of processing categories and safeguards — not
        a completed DPIA for every studio. Controllers should tailor assessments to their own use of
        the platform (e.g. SMS marketing, minors, health-related notes, CCTV integrations).
      </p>

      <LegalH2>1. Processing description (typical)</LegalH2>
      <LegalUl
        items={[
          'Purpose: operate bookings, memberships, payments metadata, CRM, communications, websites, and AI-assisted operational insights for fitness/wellness businesses.',
          'Data subjects: studio members, leads, staff, teachers, and Business account users.',
          'Data types: identity & contact data; booking/attendance; membership & purchase history; communications content; limited payment metadata; device/log data for security.',
          'Special category data: not required by HelgoIQ by default. If a Business stores health notes or similar, the Business must ensure a lawful basis and extra safeguards.',
        ]}
      />

      <LegalH2>2. Necessity & proportionality</LegalH2>
      <p>
        Processing is tied to running studio operations the Business chooses to configure. AI
        features are designed to surface suggestions with human approval before member-facing
        actions. Marketing/SMS should be consent-led where required.
      </p>

      <LegalH2>3. Risks considered (examples)</LegalH2>
      <LegalUl
        items={[
          'Unauthorised staff access to member records → mitigated by roles/permissions and access logging direction of travel',
          'Unlawful marketing messages → mitigated by consent capture patterns and opt-out language',
          'Over-retention of member data → mitigated by export/anonymisation tooling and Business retention policies',
          'Vendor/sub-processor failure → mitigated by processor diligence and contractual controls (in progress)',
          'Incorrect AI messaging → mitigated by approval queues / human-in-the-loop design',
        ]}
      />

      <LegalH2>4. Measures HelgoIQ aims to support</LegalH2>
      <LegalUl
        items={[
          'Encryption in transit; access controls and authentication via modern identity providers',
          'Role-based access for studio staff',
          'Audit-oriented operational logging where productised',
          'GDPR export / anonymisation tools for Business controllers',
          'Documented sub-processors and DPA on request (Trust centre)',
          'Assistance with controller DPIAs by providing processing descriptions and security summaries',
        ]}
      />

      <LegalH2>5. Controller checklist (for studios)</LegalH2>
      <LegalUl
        items={[
          'Document your lawful bases for member and marketing data',
          'Review SMS/email consent capture on forms and booking flows',
          'Limit staff access to need-to-know roles',
          'Decide retention periods and use export/delete processes',
          'Complete your own DPIA if your use is likely high risk (e.g. large-scale profiling, children’s data, systematic monitoring)',
          'Request a HelgoIQ DPA if your compliance programme requires one',
        ]}
      />

      <LegalH2>6. Request help</LegalH2>
      <p>
        For a DPA, sub-processor list, or DPIA questionnaire support, email{' '}
        <a href={`mailto:${PRIVACY_EMAIL_ADDRESS}`} className="text-forest-600 underline">
          {PRIVACY_EMAIL_ADDRESS}
        </a>
        .
      </p>
    </LegalDoc>
  )
}

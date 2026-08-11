import LegalDoc, { LegalH2 } from '../components/LegalDoc'
import { COMPLIANCE_EMAIL_ADDRESS, PRIVACY_EMAIL_ADDRESS } from '../lib/company'

/**
 * Meta user-data-deletion instructions.
 * Static twin retained at /data-deletion.html for the Meta Basic Settings URL.
 */
export default function DataDeletion() {
  return (
    <LegalDoc title="Meta data deletion" updated="10 August 2026" holding={false}>
      <p className="text-sm text-gray-500">
        Canonical Meta App Review URL:{' '}
        <a href="/data-deletion.html" className="text-forest-600 underline">
          /data-deletion.html
        </a>
        .
      </p>
      <p>
        These instructions apply to information HelgoIQ receives when a studio owner connects
        Facebook, Instagram or other Meta business assets to HelgoIQ.
      </p>

      <LegalH2>Disconnect inside HelgoIQ</LegalH2>
      <ol className="list-decimal pl-5 space-y-1.5 text-gray-700">
        <li>Sign in to your HelgoIQ studio account.</li>
        <li>Open your studio&apos;s Integrations page and select Meta.</li>
        <li>
          Select <strong>Disconnect</strong> and confirm the request.
        </li>
      </ol>
      <p>
        Disconnecting stops future access and synchronisation for that studio. HelgoIQ will remove or
        anonymise the associated connection data, except where information must be retained for
        security, fraud prevention, accounting or another legal obligation.
      </p>

      <LegalH2>Request deletion by email</LegalH2>
      <p>
        If you cannot sign in, email{' '}
        <a
          href={`mailto:${COMPLIANCE_EMAIL_ADDRESS}?subject=Meta%20data%20deletion%20request`}
          className="text-forest-600 underline"
        >
          {COMPLIANCE_EMAIL_ADDRESS}
        </a>{' '}
        with the subject <strong>Meta data deletion request</strong>. Include your name, your HelgoIQ
        login email, and the studio or business name. Do not send your Facebook password,
        authentication codes or other sign-in credentials.
      </p>
      <p>
        We may ask for information needed to verify that you are authorised to act for the connected
        studio. We will acknowledge the request, process it within the period required by applicable
        data-protection law, and send confirmation when it is complete.
      </p>

      <LegalH2>Remove HelgoIQ from Meta</LegalH2>
      <p>
        You can also remove HelgoIQ from your Facebook account through Facebook&apos;s Settings and
        privacy, then Settings, then Apps and websites. Choose HelgoIQ and select Remove. This
        prevents future access by the app but does not replace a deletion request for information
        already held by HelgoIQ.
      </p>

      <LegalH2>Contact</LegalH2>
      <p>
        For questions about this process, contact{' '}
        <a href={`mailto:${COMPLIANCE_EMAIL_ADDRESS}`} className="text-forest-600 underline">
          {COMPLIANCE_EMAIL_ADDRESS}
        </a>{' '}
        or{' '}
        <a href={`mailto:${PRIVACY_EMAIL_ADDRESS}`} className="text-forest-600 underline">
          {PRIVACY_EMAIL_ADDRESS}
        </a>
        .
      </p>
    </LegalDoc>
  )
}

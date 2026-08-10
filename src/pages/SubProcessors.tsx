import { Link } from 'react-router-dom'
import LegalDoc, { LegalH2 } from '../components/LegalDoc'
import { PRIVACY_EMAIL_ADDRESS } from '../lib/company'
import { SUBPROCESSORS_UPDATED, subProcessors } from '../data/subProcessors'

export default function SubProcessors() {
  return (
    <LegalDoc title="Sub-processors" updated={SUBPROCESSORS_UPDATED}>
      <p>
        HelgoIQ uses carefully chosen sub-processors to deliver the platform and marketing site.
        This public list is for controller diligence. Categories and vendors may be refined as our
        stack is formally documented with counsel.
      </p>

      <LegalH2>Current list</LegalH2>
      <div className="not-prose overflow-x-auto rounded-xl border border-gray-200 my-4">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-mist text-left">
              <th className="px-4 py-3 font-semibold text-gray-900">Provider</th>
              <th className="px-4 py-3 font-semibold text-gray-900">Purpose</th>
              <th className="px-4 py-3 font-semibold text-gray-900">Location</th>
            </tr>
          </thead>
          <tbody>
            {subProcessors.map(sp => (
              <tr key={sp.name} className="border-t border-gray-100 align-top">
                <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">
                  {sp.privacyUrl ? (
                    <a
                      href={sp.privacyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-forest-600 hover:underline"
                    >
                      {sp.name}
                    </a>
                  ) : (
                    sp.name
                  )}
                </td>
                <td className="px-4 py-3 text-gray-700">{sp.purpose}</td>
                <td className="px-4 py-3 text-gray-600">{sp.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <LegalH2>Updates</LegalH2>
      <p>
        We will update this page when sub-processors change. For objections or questions, email{' '}
        <a href={`mailto:${PRIVACY_EMAIL_ADDRESS}`} className="text-forest-600 underline">
          {PRIVACY_EMAIL_ADDRESS}
        </a>
        . Related documents:{' '}
        <Link to="/dpa" className="text-forest-600 underline">
          DPA
        </Link>
        ,{' '}
        <Link to="/privacy" className="text-forest-600 underline">
          Privacy
        </Link>
        ,{' '}
        <Link to="/trust" className="text-forest-600 underline">
          Trust centre
        </Link>
        .
      </p>
    </LegalDoc>
  )
}

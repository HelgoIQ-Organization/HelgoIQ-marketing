import { Link } from 'react-router-dom'
import { REVIEW_LAB_MARKER } from '../../lib/reviewLab'

export default function LabBanner() {
  return (
    <div className="bg-amber-50 border-b border-amber-200 text-amber-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-3 text-sm leading-relaxed">
        <p className="font-semibold">{REVIEW_LAB_MARKER}</p>
        <p className="text-amber-900/80 mt-0.5">
          Public pages unchanged.{' '}
          <Link to="/" className="underline underline-offset-2 hover:text-amber-950">
            View live homepage
          </Link>
          . Nothing here ships to Home, Features, or nav until Declan ticks.
        </p>
      </div>
    </div>
  )
}
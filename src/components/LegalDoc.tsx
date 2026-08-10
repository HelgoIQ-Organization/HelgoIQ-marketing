import { Link } from 'react-router-dom'
import { ReactNode } from 'react'

type Props = {
  title: string
  updated: string
  holding?: boolean
  children: ReactNode
}

export default function LegalDoc({ title, updated, holding = true, children }: Props) {
  return (
    <div className="pt-16">
      <section className="bg-forest-600 text-white py-14 lg:py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-forest-300 mb-3">Legal</p>
          <h1 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-3">{title}</h1>
          <p className="text-forest-200 text-sm">Last updated: {updated}</p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          {holding && (
            <div className="mb-8 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-950 leading-relaxed">
              <strong className="font-semibold">Holding draft.</strong> This page is a working
              placeholder for studio-owner diligence while formal UK counsel review is completed.
              It is not a substitute for a signed contract, DPA, or final policy. Questions:{' '}
              <a href="mailto:privacy@helgoiq.com" className="underline font-medium">
                privacy@helgoiq.com
              </a>
              .
            </div>
          )}
          <div className="prose-legal space-y-6 text-gray-700 text-[15px] leading-relaxed">
            {children}
          </div>
          <div className="mt-12 pt-8 border-t border-gray-100 flex flex-wrap gap-4 text-sm">
            <Link to="/privacy" className="text-forest-600 font-medium hover:underline">
              Privacy
            </Link>
            <Link to="/terms" className="text-forest-600 font-medium hover:underline">
              Terms
            </Link>
            <Link to="/dpa" className="text-forest-600 font-medium hover:underline">
              DPA
            </Link>
            <Link to="/dpia" className="text-forest-600 font-medium hover:underline">
              DPIA overview
            </Link>
            <Link to="/subprocessors" className="text-forest-600 font-medium hover:underline">
              Sub-processors
            </Link>
            <Link to="/trust" className="text-forest-600 font-medium hover:underline">
              Trust centre
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export function LegalH2({ children }: { children: ReactNode }) {
  return <h2 className="text-xl font-semibold text-gray-900 tracking-tight pt-2">{children}</h2>
}

export function LegalH3({ children }: { children: ReactNode }) {
  return <h3 className="text-base font-semibold text-gray-900 pt-1">{children}</h3>
}

export function LegalUl({ items }: { items: string[] }) {
  return (
    <ul className="list-disc pl-5 space-y-1.5 text-gray-700">
      {items.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

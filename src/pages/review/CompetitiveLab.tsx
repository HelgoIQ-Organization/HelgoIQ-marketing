import { useEffect, useState } from 'react'
import LabBanner from '../../components/review-lab/LabBanner'
import TickCard from '../../components/review-lab/TickCard'
import BookingPaymentMock from '../../components/review-lab/mockups/BookingPaymentMock'
import CommandCentreMock from '../../components/review-lab/mockups/CommandCentreMock'
import CommsJourneyMock from '../../components/review-lab/mockups/CommsJourneyMock'
import HeroMock from '../../components/review-lab/mockups/HeroMock'
import ProofTrustMock from '../../components/review-lab/mockups/ProofTrustMock'
import StudioTypeMock from '../../components/review-lab/mockups/StudioTypeMock'
import {
  COMPARISON_ROWS,
  LabTab,
  SHARED_PATTERNS,
  SIGNAL_LINE,
  TABS,
} from '../../data/reviewLab'
import { REVIEW_LAB_TITLE } from '../../lib/reviewLab'

export default function CompetitiveLab() {
  const [tab, setTab] = useState<LabTab>('summary')

  useEffect(() => {
    document.title = `${REVIEW_LAB_TITLE} — HelgoIQ`
    let robots = document.querySelector('meta[name="robots"]')
    if (!robots) {
      robots = document.createElement('meta')
      robots.setAttribute('name', 'robots')
      document.head.appendChild(robots)
    }
    robots.setAttribute('content', 'noindex, nofollow')
  }, [])

  return (
    <div className="pt-16 bg-mist min-h-screen">
      <LabBanner />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
        <p className="section-label mb-3">September 2026</p>
        <h1 className="text-3xl lg:text-4xl font-semibold text-gray-900 tracking-tight max-w-3xl">
          {REVIEW_LAB_TITLE}
        </h1>
        <p className="text-gray-700 mt-4 max-w-3xl leading-relaxed">{SIGNAL_LINE}</p>
        <p className="text-sm text-gray-500 mt-3">
          Inspiration only. No copied layouts, illustrations, or copy. Full write-up in{' '}
          <code className="text-xs bg-white px-1.5 py-0.5 rounded border border-gray-200">
            docs/marketing/competitive/2026-09/
          </code>
        </p>

        <div className="mt-8 flex gap-1 overflow-x-auto border-b border-gray-200 pb-px">
          {TABS.map(item => (
            <button
              key={item.id}
              type="button"
              onClick={() => setTab(item.id)}
              className={`px-4 py-2.5 text-sm font-medium rounded-t-lg whitespace-nowrap ${
                tab === item.id
                  ? 'bg-white text-forest-700 border border-gray-200 border-b-white -mb-px'
                  : 'text-gray-600 hover:text-forest-700'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="mt-8">
          {tab === 'summary' && <SummaryTab onOpenMockups={() => setTab('mockups')} />}
          {tab === 'compare' && <CompareTab />}
          {tab === 'show' && <ShowTab onOpenMockups={() => setTab('mockups')} />}
          {tab === 'mockups' && <MockupsTab />}
          {tab === 'phases' && <PhasesTab />}
          {tab === 'shots' && <ShotsTab />}
          {tab === 'tick' && <TickCard />}
        </div>
      </div>
    </div>
  )
}

function SummaryTab({ onOpenMockups }: { onOpenMockups: () => void }) {
  return (
    <div className="space-y-6">
      <div className="card p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-gray-900">The honest read</h2>
        <p className="text-gray-700 mt-3 leading-relaxed">
          LegitFit and Walla feel bright because they put a working picture next to every claim.
          HelgoIQ’s forest brand is calmer and already more honest. It is also flatter. The deep
          feature pages are the worst of it: a green band, a paragraph, a bullet list, no picture of
          the thing working. Home has screenshots, but they are unannotated admin frames. That is why
          the site reads as text-led even when images are present.
        </p>
        <p className="text-gray-700 mt-3 leading-relaxed">
          Where we are already better: public pricing and a free Core; a real trial; website import
          with a 30-day ranking window; unstaffed 24/7 and native door access; AI that cannot send
          without approval. Do not throw those away to look more like a demo-gated US boutique
          vendor.
        </p>
        <button type="button" onClick={onOpenMockups} className="btn-primary mt-6">
          Open the mockups
        </button>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {[
          {
            k: 'Borrow',
            v: 'Flow + hanging artefacts + outcome tiles. Annotated product chrome. Studio-type scenes. Repeat CTAs without changing the doors.',
          },
          {
            k: 'Do not borrow',
            v: 'Hot pink, Walla blue, invented 110% / 800+ claims, demo-only pricing, “Get demo & pricing” as the sole CTA.',
          },
          {
            k: 'Blocked on you',
            v: 'Real message previews, booking-to-pay recording, Command Centre recording, Refrm before/after, founding-studio photos and numbers.',
          },
        ].map(item => (
          <div key={item.k} className="card p-5">
            <p className="section-label mb-2">{item.k}</p>
            <p className="text-sm text-gray-700 leading-relaxed">{item.v}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function CompareTab() {
  return (
    <div className="space-y-6">
      <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100 bg-mist">
              <th className="text-left px-4 py-3 font-semibold text-gray-600 w-36">Heading</th>
              <th className="text-left px-4 py-3 font-semibold text-gray-600">LegitFit</th>
              <th className="text-left px-4 py-3 font-semibold text-gray-600">Walla</th>
              <th className="text-left px-4 py-3 font-semibold text-gray-600">HelgoIQ</th>
            </tr>
          </thead>
          <tbody>
            {COMPARISON_ROWS.map(row => (
              <tr key={row.heading} className="border-t border-gray-100 align-top">
                <td className="px-4 py-3 font-semibold text-gray-900">{row.heading}</td>
                <td className="px-4 py-3 text-gray-700">{row.legitfit}</td>
                <td className="px-4 py-3 text-gray-700">{row.walla}</td>
                <td
                  className={`px-4 py-3 ${
                    row.weakest === 'helgoiq' ? 'text-gray-900 bg-amber-50/60' : 'text-gray-700'
                  }`}
                >
                  {row.helgoiq}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="card p-6">
        <h2 className="text-lg font-semibold text-gray-900">What both share — safer bets</h2>
        <ul className="mt-4 space-y-3">
          {SHARED_PATTERNS.map(item => (
            <li key={item.pattern}>
              <p className="font-medium text-gray-900">{item.pattern}</p>
              <p className="text-sm text-gray-600 mt-1">{item.why}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="card p-6">
        <h2 className="text-lg font-semibold text-gray-900">Where they differ — what suits independents</h2>
        <p className="text-gray-700 mt-3 leading-relaxed">
          LegitFit hides price behind a demo and sells growth percentages. Walla publishes $320 /
          $599 and sells a boutique-only insider story plus Mindbody-switch. HelgoIQ sells to small
          independent studios in the UK, often one or a handful of sites. Lead with a trial they can
          actually start, keep the demo for people who want a walkthrough, and keep prices on the
          page. Hero can still lead Bring my site because migration is a real HelgoIQ motion. Do not
          make “talk to sales” the only door.
        </p>
      </div>
    </div>
  )
}

function ShowTab({ onOpenMockups }: { onOpenMockups: () => void }) {
  const notes = [
    {
      where: 'Home · Connected systems',
      now: 'Four numbered paragraphs. No picture.',
      instead: 'Replace or follow with the comms journey and booking-to-pay frames.',
    },
    {
      where: 'Home · In the product',
      now: 'Eight admin screenshots with bullets. The screenshot does not explain itself.',
      instead: 'Keep two signature shots. Promote the three show-blocks above this list.',
    },
    {
      where: '/features/crm, /booking, /memberships, /ai',
      now: 'Forest hero + sections of body + bullets. Zero product visuals.',
      instead: 'One annotated working picture per section — same pattern as the Home show-blocks.',
    },
    {
      where: '/for/*',
      now: 'Pain paragraph + three text features + pending photo.',
      instead: 'A scene of the product in that studio type (bed hold, door log, studio switcher).',
    },
  ]
  return (
    <div className="space-y-4">
      {notes.map(n => (
        <div key={n.where} className="card p-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-forest-500">{n.where}</p>
          <p className="text-sm text-gray-800 mt-2">
            <span className="font-medium">Today: </span>
            {n.now}
          </p>
          <p className="text-sm text-gray-700 mt-1">
            <span className="font-medium">Proposed: </span>
            {n.instead}
          </p>
        </div>
      ))}
      <button type="button" onClick={onOpenMockups} className="btn-primary">
        See the proposed frames
      </button>
    </div>
  )
}

function MockupsTab() {
  return (
    <div className="space-y-10">
      <HeroMock />
      <CommsJourneyMock />
      <BookingPaymentMock />
      <CommandCentreMock />
      <StudioTypeMock />
      <ProofTrustMock />
    </div>
  )
}

function PhasesTab() {
  const phases = [
    {
      name: 'Phase A — biggest visible lift',
      items:
        'Home hero product frame; comms journey; booking-to-pay; Command Centre ask/answer. Keep verticals, founding studios, and pricing tease. After tick + shots.',
    },
    {
      name: 'Phase B',
      items:
        'Feature detail pages get the same show-pattern. /migrate becomes a pictured cutover. Mid-page CTA after each show-block. Dual trial + demo unchanged.',
    },
    {
      name: 'Phase C — later',
      items:
        'Calculator or comparison only with defensible numbers. Customer stories when Emma / Ali / Becky exist. Motion loops. Tools nav. Do not invent ROI.',
    },
  ]
  return (
    <div className="space-y-4">
      {phases.map(p => (
        <div key={p.name} className="card p-6">
          <h2 className="font-semibold text-gray-900">{p.name}</h2>
          <p className="text-sm text-gray-700 mt-2 leading-relaxed">{p.items}</p>
        </div>
      ))}
    </div>
  )
}

function ShotsTab() {
  const shots = [
    {
      need: 'Journey canvas + three real message previews (welcome, post-class, birthday)',
      for: 'Comms journey on Home + /features/crm',
      have: 'We do not have these yet',
    },
    {
      need: '15–20s recording: book a class → pay → member profile shows pack and payment',
      for: 'Booking-to-pay block',
      have: 'We do not have this yet',
    },
    {
      need: 'Command Centre: type a question, show the answer, show the approval queue',
      for: 'AI show-block',
      have: 'We do not have this yet',
    },
    {
      need: 'Refrm Squarespace vs HelgoIQ frames',
      for: 'Hero product visual',
      have: 'Still the labelled placeholder on live Home',
    },
    {
      need: 'Founding-studio photos and live metrics',
      for: 'Proof block',
      have: 'Slots exist; values are null',
    },
  ]
  return (
    <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-mist border-b border-gray-100">
            <th className="text-left px-4 py-3">Capture</th>
            <th className="text-left px-4 py-3">Goes on</th>
            <th className="text-left px-4 py-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {shots.map(s => (
            <tr key={s.need} className="border-t border-gray-100 align-top">
              <td className="px-4 py-3 text-gray-900">{s.need}</td>
              <td className="px-4 py-3 text-gray-700">{s.for}</td>
              <td className="px-4 py-3 text-amber-800">{s.have}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
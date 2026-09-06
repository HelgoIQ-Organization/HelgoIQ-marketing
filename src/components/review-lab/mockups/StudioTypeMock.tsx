import MockBadge from '../MockBadge'
import { VERTICALS } from '../../../data/verticals'

const scenes: Record<string, { scene: string; pending: string }> = {
  pilates: {
    scene: 'Reformer timetable with bed 4 held, waitlist of three, intro pack on the booker.',
    pending: 'Refrm floor photo still pending',
  },
  'unstaffed-gyms': {
    scene: 'Night check-in log + door rule on the same member as the failed-payment retry.',
    pending: 'Active 247 door photo still pending',
  },
  'multi-site': {
    scene: 'Studio switcher: Stevenage timetable, Weymouth members, one login.',
    pending: 'Multi-site ops photo pending',
  },
  'boutique-fitness': {
    scene: 'Small-group cap at 12, pack credits, challenge campaign on the same people.',
    pending: 'Boutique floor photo pending',
  },
  'personal-trainers': {
    scene: 'Thursday 1:1 grid, remaining sessions on the client, note from last PT.',
    pending: 'PT setting photo pending',
  },
  'wellness-recovery': {
    scene: 'Treatment room vs class collision check, retreat deposit sitting on the guest.',
    pending: 'Recovery room photo pending',
  },
}

export default function StudioTypeMock() {
  return (
    <section className="rounded-2xl border border-gray-100 bg-white p-6 sm:p-10">
      <MockBadge>Mock — not live · photos stay labelled pending</MockBadge>
      <p className="section-label mb-2">Who it’s for</p>
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 tracking-tight">
        Built for how your studio runs
      </h2>
      <p className="text-gray-600 mt-3 max-w-2xl leading-relaxed">
        Same six verticals as today. Each card should show the product in that room — not a chip list
        waiting on a stock floor.
      </p>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {VERTICALS.map(v => {
          const scene = scenes[v.slug]
          return (
            <article
              key={v.slug}
              className="rounded-xl border border-gray-100 overflow-hidden bg-mist/50"
            >
              <div className="aspect-[16/9] bg-forest-800 text-forest-50 p-4 flex flex-col justify-end">
                <p className="text-[10px] uppercase tracking-widest text-sage">{v.shortName}</p>
                <p className="text-xs mt-1 leading-relaxed">{scene?.scene}</p>
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-900">{v.name}</h3>
                <p className="text-[11px] text-forest-700 mt-2">{scene?.pending}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
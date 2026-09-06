import { TICKS } from '../../data/reviewLab'

export default function TickCard() {
  return (
    <section className="rounded-2xl border border-forest-200 bg-white overflow-hidden">
      <div className="bg-forest-600 text-white px-6 py-5">
        <p className="text-xs font-semibold uppercase tracking-widest text-forest-300">Tick</p>
        <h2 className="text-2xl font-semibold tracking-tight mt-1">What Declan ticks before any public build</h2>
        <p className="text-forest-200 mt-2 text-sm">
          This PR is the lab. A later PR does Phase A. Do not treat a merge of this branch as a homepage
          redesign.
        </p>
      </div>
      <div className="divide-y divide-gray-100">
        {TICKS.map(tick => (
          <div key={tick.id} className="px-6 py-5 grid sm:grid-cols-[4.5rem_1fr] gap-3">
            <p className="text-xs font-semibold tracking-widest text-forest-500">{tick.id}</p>
            <div>
              <h3 className="font-semibold text-gray-900">{tick.title}</h3>
              <p className="text-sm text-gray-700 mt-1">{tick.proposed}</p>
              <p className="text-xs text-gray-500 mt-2">{tick.note}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
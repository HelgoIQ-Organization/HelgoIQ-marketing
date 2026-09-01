/**
 * Split-screen hero visual.
 * Real Refrm Squarespace → HelgoIQ frames replace this when Declan supplies assets.
 */
export default function HeroSplitVisual() {
  return (
    <figure className="w-full">
      <div className="rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-forest-800/40 backdrop-blur-sm">
        <div className="grid sm:grid-cols-2 min-h-[220px] sm:min-h-[280px]">
          <div className="relative p-5 sm:p-6 border-b sm:border-b-0 sm:border-r border-white/15 bg-gradient-to-br from-gray-700/80 to-gray-900/90">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-white/50 mb-3">
              Before
            </p>
            <p className="text-sm font-semibold text-white/90 mb-2">Your current site</p>
            <ul className="space-y-1.5 text-xs text-white/55">
              <li>Static pages</li>
              <li>Timetable elsewhere</li>
              <li>Booking bolted on</li>
            </ul>
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-forest-600/80 to-transparent pointer-events-none" />
          </div>
          <div className="relative p-5 sm:p-6 bg-gradient-to-br from-forest-500/90 to-forest-800">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-sage mb-3">
              After
            </p>
            <p className="text-sm font-semibold text-white mb-2">Live on HelgoIQ</p>
            <ul className="space-y-1.5 text-xs text-forest-100/90">
              <li>Same brand online</li>
              <li>Timetable live</li>
              <li>Booking & payments connected</li>
            </ul>
          </div>
        </div>
      </div>
      <figcaption className="mt-3 text-xs text-white/55 font-[Manrope]">
        Illustrative frame — real Refrm Squarespace → HelgoIQ screens replace this when supplied.
      </figcaption>
    </figure>
  )
}

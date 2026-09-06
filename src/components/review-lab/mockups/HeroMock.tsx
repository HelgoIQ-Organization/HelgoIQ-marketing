import { ArrowRight } from 'lucide-react'
import MockBadge from '../MockBadge'
import ProductChrome from '../ProductChrome'

export default function HeroMock() {
  return (
    <section className="rounded-2xl overflow-hidden border border-forest-900/20 shadow-xl">
      <div className="relative min-h-[520px] bg-forest-800 text-white">
        <div className="absolute inset-0 hero-atmosphere" aria-hidden />
        <div className="relative px-6 sm:px-10 py-12 lg:py-16 max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-end">
          <div>
            <MockBadge>Mock — not live · real Refrm screens pending</MockBadge>
            <p
              className="text-4xl sm:text-5xl font-medium mb-4"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic' }}
            >
              HelgoIQ
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight mb-4">
              Your studio online in days, not months.
            </h2>
            <p className="text-forest-100/90 leading-relaxed mb-8 max-w-md">
              Paste your current website. We import it, protect your Google rankings for 30 days, and
              connect timetable, booking and payments.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <span className="btn-dark text-base py-3 px-7 pointer-events-none">
                Bring my site <ArrowRight size={16} />
              </span>
              <span className="inline-flex items-center justify-center gap-2 border border-forest-400/50 text-white px-7 py-3 rounded-lg font-medium text-base">
                See it working
              </span>
            </div>
            <p className="text-xs text-white/55 mt-4">
              Import in minutes · Rankings protected for 30 days · Guided cutover
            </p>
          </div>
          <ProductChrome title="helgoiq.com/book · Refrm Stevenage">
            <div className="grid grid-cols-5 text-[10px] bg-white text-gray-800">
              <div className="col-span-2 border-r border-gray-100 p-3 space-y-2">
                <p className="text-[9px] uppercase tracking-widest text-forest-500 font-semibold">
                  Today
                </p>
                {['06:30 Reformer', '07:30 Reformer', '09:00 Mat', '12:00 Reformer', '18:00 Reformer'].map(
                  (row, i) => (
                    <div
                      key={row}
                      className={`rounded-md px-2 py-1.5 ${
                        i === 4 ? 'bg-forest-500 text-white' : 'bg-mist text-forest-800'
                      }`}
                    >
                      {row}
                      <span className="block text-[9px] opacity-80">
                        {i === 4 ? '8/8 · waitlist 3' : `${4 + i}/8 booked`}
                      </span>
                    </div>
                  ),
                )}
              </div>
              <div className="col-span-3 p-3 space-y-3">
                <p className="text-xs font-semibold">Book Reformer 18:00</p>
                <p className="text-[11px] text-gray-500">Bed 4 · Maya Chen · Intro 3-pack</p>
                <div className="rounded-lg border border-forest-100 p-3 bg-mist/60">
                  <p className="text-[10px] text-forest-700 font-semibold">Intro 3-pack · £45</p>
                  <p className="text-[10px] text-gray-500 mt-1">Pay now · 3 classes remaining after this</p>
                  <div className="mt-2 h-7 rounded-md bg-forest-500 text-white text-[10px] font-medium flex items-center justify-center">
                    Confirm booking
                  </div>
                </div>
                <p className="text-[10px] text-forest-600">Same member record as CRM and payments.</p>
              </div>
            </div>
          </ProductChrome>
        </div>
      </div>
    </section>
  )
}
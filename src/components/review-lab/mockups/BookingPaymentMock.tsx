import { ArrowRight } from 'lucide-react'
import MockBadge from '../MockBadge'
import ProductChrome from '../ProductChrome'

export default function BookingPaymentMock() {
  return (
    <section className="rounded-2xl border border-gray-100 bg-white p-6 sm:p-10">
      <MockBadge>Mock — not live · needs a 15–20s product recording</MockBadge>
      <p className="section-label mb-2">Booking to payment</p>
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 tracking-tight max-w-2xl">
        Book, pay, and see it on the same person
      </h2>
      <p className="text-gray-600 mt-3 max-w-2xl leading-relaxed">
        The desk should never ask “did they pay?” after a booking. Three frames, one member.
      </p>

      <div className="mt-10 grid lg:grid-cols-[1fr_auto_1fr_auto_1fr] gap-4 items-center">
        <ProductChrome title="Timetable">
          <div className="p-4 text-sm">
            <p className="text-[10px] uppercase tracking-widest text-forest-500 font-semibold">
              Thursday
            </p>
            <p className="font-semibold text-gray-900 mt-1">Reformer 18:00 · Jess</p>
            <p className="text-xs text-gray-500 mt-1">Bed 4 available · 7/8</p>
            <div className="mt-3 rounded-lg bg-forest-500 text-white text-center text-xs font-medium py-2">
              Hold bed 4
            </div>
          </div>
        </ProductChrome>

        <ArrowRight className="hidden lg:block text-forest-400 mx-auto" size={20} />

        <ProductChrome title="Checkout">
          <div className="p-4 text-sm">
            <p className="text-[10px] uppercase tracking-widest text-forest-500 font-semibold">
              Maya Chen
            </p>
            <p className="font-semibold text-gray-900 mt-1">Intro 3-pack</p>
            <p className="text-xs text-gray-500 mt-1">£45 · Stripe · this class uses 1</p>
            <div className="mt-3 flex gap-2">
              <span className="flex-1 rounded-md bg-mist text-[10px] text-center py-2 text-forest-800">
                Card
              </span>
              <span className="flex-1 rounded-md bg-forest-500 text-white text-[10px] text-center py-2">
                Pay £45
              </span>
            </div>
          </div>
        </ProductChrome>

        <ArrowRight className="hidden lg:block text-forest-400 mx-auto" size={20} />

        <ProductChrome title="Member record">
          <div className="p-4 text-sm">
            <p className="text-[10px] uppercase tracking-widest text-forest-500 font-semibold">
              Profile
            </p>
            <p className="font-semibold text-gray-900 mt-1">Maya Chen</p>
            <ul className="mt-2 space-y-1 text-xs text-gray-600">
              <li>Intro 3-pack · 2 remaining</li>
              <li>Paid today · Stripe · £45</li>
              <li>Next: Reformer Thu 18:00</li>
            </ul>
          </div>
        </ProductChrome>
      </div>
    </section>
  )
}
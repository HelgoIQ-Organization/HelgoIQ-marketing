import MockBadge from '../MockBadge'
import ProductChrome from '../ProductChrome'

export default function CommandCentreMock() {
  return (
    <section className="rounded-2xl border border-gray-100 bg-forest-900 text-white p-6 sm:p-10">
      <MockBadge>Mock — not live · needs a Command Centre recording</MockBadge>
      <p className="text-[10px] font-semibold uppercase tracking-widest text-sage mb-2">
        AI & Command Centre
      </p>
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight max-w-2xl">
        Ask what the floor needs. Approve before anything leaves the building.
      </h2>
      <p className="text-forest-200 mt-3 max-w-2xl leading-relaxed">
        The picture is a question, an answer with names, and a locked send. Human approval stays in
        the frame — that is the HelgoIQ difference, not a chatbot.
      </p>

      <div className="mt-8 grid lg:grid-cols-2 gap-6 items-start">
        <ProductChrome title="Command Centre" className="bg-white text-gray-900">
          <div className="p-4 space-y-3 text-sm">
            <div className="rounded-lg bg-mist px-3 py-2">
              <p className="text-[10px] uppercase tracking-widest text-forest-500">You asked</p>
              <p className="mt-1 font-medium">
                Which intro members have not booked a second class this week?
              </p>
            </div>
            <div className="rounded-lg border border-forest-100 p-3 space-y-2">
              <p className="text-[10px] uppercase tracking-widest text-forest-500">Answer</p>
              <ul className="space-y-2 text-xs">
                <li>
                  <span className="font-semibold">Maya Chen</span> — intro, 1 of 3 used, last seen
                  Tuesday.
                </li>
                <li>
                  <span className="font-semibold">Tom Hale</span> — intro, no second book, pack ends
                  Friday.
                </li>
                <li>
                  <span className="font-semibold">Priya Shah</span> — trial no-show Monday, waitlisted
                  Thursday.
                </li>
              </ul>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="text-[10px] px-2 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                Draft only — not sent
              </span>
              <span className="text-[10px] px-2 py-1 rounded-full bg-forest-50 text-forest-700 border border-forest-100">
                Needs your approval
              </span>
            </div>
          </div>
        </ProductChrome>
        <div className="rounded-xl border border-white/10 bg-forest-800/80 p-5">
          <h3 className="font-semibold">What this frame must never imply</h3>
          <ul className="mt-3 space-y-2 text-sm text-forest-100/90 leading-relaxed">
            <li>No invented fill-rate or churn percentages on the marketing site.</li>
            <li>No “AI sent this for you” — drafts queue.</li>
            <li>Names in this mock are illustrative, not customers.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
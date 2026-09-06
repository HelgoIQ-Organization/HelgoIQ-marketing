import MockBadge from '../MockBadge'

const steps = [
  {
    when: 'When a trial is added',
    then: 'Immediately',
    channel: 'SMS',
    from: 'Refrm',
    body: 'Maya, your intro pack is live. Reformer tomorrow 18:00 is held for 2 hours — book from this link.',
  },
  {
    when: 'After their first class',
    then: 'Same evening',
    channel: 'Email',
    from: 'Refrm',
    body: 'You made it to Reformer with Jess. Two classes left on the intro. Here’s the week’s timetable — pick the next one before Friday.',
  },
  {
    when: 'If they go quiet',
    then: 'After 7 days',
    channel: 'SMS',
    from: 'Refrm',
    body: 'We saved your favourite bed. One intro class left this month — want Thursday 07:30 or Saturday 09:00?',
  },
  {
    when: 'On their birthday',
    then: 'Morning of',
    channel: 'Email',
    from: 'Refrm',
    body: 'Happy birthday Maya. A guest pass is on your account until Sunday. Bring someone who hasn’t tried reformer.',
  },
]

const outcomes = [
  {
    title: 'The desk does not chase',
    body: 'Welcome, hold windows, and the quiet-week nudge fire from the same member record as booking.',
  },
  {
    title: 'The intro does not go cold',
    body: 'After class one, the next slot is offered while they still remember how the room felt.',
  },
  {
    title: 'They feel known, not mailed',
    body: 'Birthday and guest-pass sit on the profile — not a Mailchimp list that drifted out of date.',
  },
]

export default function CommsJourneyMock() {
  return (
    <section className="rounded-2xl border border-gray-100 bg-mist p-6 sm:p-10">
      <MockBadge>Mock — not live · needs real message captures</MockBadge>
      <p className="section-label mb-2">CRM & journeys</p>
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 tracking-tight max-w-2xl">
        The follow-up that currently lives in someone’s head
      </h2>
      <p className="text-gray-600 mt-3 max-w-2xl leading-relaxed">
        One glance: when something happens to a member, what goes out, and what it is for. Illustrative
        copy — replace cards with screenshots of HelgoIQ messages before this lands on Home.
      </p>

      <div className="mt-10 grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {steps.map((step, i) => (
          <div key={step.when} className="relative">
            {i < steps.length - 1 && (
              <div
                className="hidden xl:block absolute top-7 left-[calc(100%-0.5rem)] w-4 h-px bg-forest-300 z-0"
                aria-hidden
              />
            )}
            <div className="relative bg-white rounded-2xl border border-forest-100 shadow-sm overflow-hidden">
              <div className="px-4 pt-4">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-forest-500">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="text-sm font-semibold text-gray-900 mt-1">{step.when}</h3>
                <p className="text-xs text-forest-600 mt-0.5">{step.then}</p>
              </div>
              <div className="m-4 rounded-xl bg-forest-800 text-white p-3 shadow-md">
                <div className="flex items-center justify-between text-[10px] text-sage mb-2">
                  <span>{step.channel}</span>
                  <span>{step.from}</span>
                </div>
                <p className="text-[11px] leading-relaxed text-forest-50">{step.body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid md:grid-cols-3 gap-4">
        {outcomes.map(o => (
          <div key={o.title} className="rounded-xl bg-white border border-gray-100 p-5">
            <h3 className="text-sm font-semibold text-gray-900">{o.title}</h3>
            <p className="text-sm text-gray-600 mt-2 leading-relaxed">{o.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
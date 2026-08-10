import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Calendar, Check, Clock, Loader2 } from 'lucide-react'
import {
  MEETING_TYPES,
  formatDemoDate,
  getAvailableDays,
  getSlotsForDay,
  submitDemoBooking,
  type DemoMeetingType,
  type DemoSlot,
} from '../lib/demoBooking'
import { SIGNUP_URL } from '../lib/cta'

type Step = 'type' | 'datetime' | 'details' | 'done'

export default function BookDemo() {
  const days = useMemo(() => getAvailableDays(), [])
  const [step, setStep] = useState<Step>('type')
  const [meetingType, setMeetingType] = useState<DemoMeetingType | null>(null)
  const [selectedDay, setSelectedDay] = useState<Date | null>(days[0] ?? null)
  const [selectedSlot, setSelectedSlot] = useState<DemoSlot | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [confirmationId, setConfirmationId] = useState<string | null>(null)
  const [form, setForm] = useState({
    name: '',
    email: '',
    studioName: '',
    locations: '1',
    phone: '',
    notes: '',
  })

  const slots = useMemo(
    () => (selectedDay ? getSlotsForDay(selectedDay) : []),
    [selectedDay],
  )

  const timezone = useMemo(
    () => Intl.DateTimeFormat().resolvedOptions().timeZone || 'Europe/London',
    [],
  )

  const stepIndex = step === 'type' ? 0 : step === 'datetime' ? 1 : step === 'details' ? 2 : 3

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!meetingType || !selectedSlot) return
    setSubmitting(true)
    setError(null)

    const result = await submitDemoBooking({
      meetingTypeId: meetingType.id,
      start: selectedSlot.start,
      timezone,
      name: form.name.trim(),
      email: form.email.trim(),
      studioName: form.studioName.trim(),
      locations: form.locations.trim(),
      phone: form.phone.trim() || undefined,
      notes: form.notes.trim() || undefined,
      source: 'marketing-site',
    })

    setSubmitting(false)
    if (!result.ok) {
      setError(result.error)
      return
    }
    setConfirmationId(result.confirmationId)
    setStep('done')
  }

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-forest-50 via-white to-cream">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="mb-10 animate-fade-up">
          <p className="section-label mb-3">Book a demo</p>
          <h1 className="text-3xl lg:text-4xl font-semibold text-gray-900 tracking-tight mb-3">
            See HelgoIQ with your studio in mind
          </h1>
          <p className="text-gray-500 max-w-2xl leading-relaxed">
            Pick a time that works. We'll walk through booking, members, CRM, and AI — and answer migration questions for your setup.
          </p>
        </div>

        {/* Progress */}
        <ol className="flex flex-wrap gap-2 mb-8">
          {['Meeting type', 'Date & time', 'Your details', 'Confirmed'].map((label, i) => (
            <li
              key={label}
              className={`inline-flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full transition-colors ${
                i === stepIndex
                  ? 'bg-forest-600 text-white'
                  : i < stepIndex
                  ? 'bg-forest-100 text-forest-700'
                  : 'bg-white text-gray-400 border border-gray-200'
              }`}
            >
              <span className="w-4 h-4 rounded-full border border-current flex items-center justify-center text-[10px]">
                {i < stepIndex ? <Check size={10} /> : i + 1}
              </span>
              {label}
            </li>
          ))}
        </ol>

        <div className="grid lg:grid-cols-[1fr_280px] gap-8 items-start">
          <div className="bg-white/90 border border-forest-100 rounded-2xl shadow-sm p-6 lg:p-8 animate-fade-in">
            {step === 'type' && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">What would you like to book?</h2>
                {MEETING_TYPES.map(type => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => {
                      setMeetingType(type)
                      setStep('datetime')
                    }}
                    className="w-full text-left border border-gray-200 hover:border-forest-400 hover:bg-forest-50/50 rounded-xl p-5 transition-all duration-200 group"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="font-semibold text-gray-900 group-hover:text-forest-700">{type.title}</div>
                        <p className="text-sm text-gray-500 mt-1 leading-relaxed">{type.description}</p>
                      </div>
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-forest-600 bg-forest-50 px-2.5 py-1 rounded-lg whitespace-nowrap">
                        <Clock size={12} />
                        {type.durationMinutes} min
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            )}

            {step === 'datetime' && meetingType && (
              <div>
                <button
                  type="button"
                  onClick={() => setStep('type')}
                  className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-forest-600 mb-4"
                >
                  <ArrowLeft size={14} /> Back
                </button>
                <h2 className="text-xl font-semibold text-gray-900 mb-1">{meetingType.title}</h2>
                <p className="text-sm text-gray-500 mb-6 flex items-center gap-2">
                  <Clock size={14} /> {meetingType.durationMinutes} minutes · Times shown in {timezone}
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-forest-500 mb-3">Select a day</p>
                    <div className="space-y-2 max-h-80 overflow-y-auto pr-1">
                      {days.map(day => {
                        const active = selectedDay && toDateKey(day) === toDateKey(selectedDay)
                        return (
                          <button
                            key={toDateKey(day)}
                            type="button"
                            onClick={() => {
                              setSelectedDay(day)
                              setSelectedSlot(null)
                            }}
                            className={`w-full text-left px-4 py-3 rounded-xl border text-sm transition-all ${
                              active
                                ? 'border-forest-500 bg-forest-50 text-forest-800'
                                : 'border-gray-200 hover:border-forest-300 text-gray-700'
                            }`}
                          >
                            <span className="inline-flex items-center gap-2">
                              <Calendar size={14} className={active ? 'text-forest-600' : 'text-gray-400'} />
                              {formatDemoDate(day)}
                            </span>
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-forest-500 mb-3">Select a time</p>
                    {selectedDay ? (
                      <div className="grid grid-cols-2 gap-2 max-h-80 overflow-y-auto">
                        {slots.map(slot => {
                          const active = selectedSlot?.start === slot.start
                          return (
                            <button
                              key={slot.start}
                              type="button"
                              onClick={() => setSelectedSlot(slot)}
                              className={`px-3 py-2.5 rounded-lg border text-sm font-medium transition-all ${
                                active
                                  ? 'border-forest-600 bg-forest-600 text-white'
                                  : 'border-gray-200 text-gray-700 hover:border-forest-400'
                              }`}
                            >
                              {slot.label}
                            </button>
                          )
                        })}
                      </div>
                    ) : (
                      <p className="text-sm text-gray-400">Choose a day to see available times.</p>
                    )}
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <button
                    type="button"
                    disabled={!selectedSlot}
                    onClick={() => setStep('details')}
                    className="btn-primary disabled:opacity-40 disabled:pointer-events-none"
                  >
                    Continue <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            )}

            {step === 'details' && meetingType && selectedDay && selectedSlot && (
              <form onSubmit={onSubmit} className="space-y-4">
                <button
                  type="button"
                  onClick={() => setStep('datetime')}
                  className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-forest-600 mb-2"
                >
                  <ArrowLeft size={14} /> Back
                </button>
                <h2 className="text-xl font-semibold text-gray-900">Your details</h2>
                <p className="text-sm text-gray-500 mb-2">
                  {formatDemoDate(selectedDay)} at {selectedSlot.label} · {meetingType.title}
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Full name" required>
                    <input
                      required
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      className="input"
                      autoComplete="name"
                    />
                  </Field>
                  <Field label="Work email" required>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      className="input"
                      autoComplete="email"
                    />
                  </Field>
                  <Field label="Studio name" required>
                    <input
                      required
                      value={form.studioName}
                      onChange={e => setForm(f => ({ ...f, studioName: e.target.value }))}
                      className="input"
                    />
                  </Field>
                  <Field label="Locations" required>
                    <input
                      required
                      value={form.locations}
                      onChange={e => setForm(f => ({ ...f, locations: e.target.value }))}
                      className="input"
                      placeholder="e.g. 1 or 3"
                    />
                  </Field>
                  <Field label="Phone (optional)">
                    <input
                      value={form.phone}
                      onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                      className="input"
                      autoComplete="tel"
                    />
                  </Field>
                </div>
                <Field label="Anything we should know?">
                  <textarea
                    value={form.notes}
                    onChange={e => setForm(f => ({ ...f, notes: e.target.value }))}
                    className="input min-h-[96px] resize-y"
                    placeholder="Current software, studio type, go-live timing…"
                  />
                </Field>

                {error && (
                  <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">{error}</p>
                )}

                <button type="submit" disabled={submitting} className="btn-primary w-full justify-center disabled:opacity-60">
                  {submitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" /> Confirming…
                    </>
                  ) : (
                    <>
                      Confirm demo <ArrowRight size={15} />
                    </>
                  )}
                </button>
              </form>
            )}

            {step === 'done' && meetingType && selectedDay && selectedSlot && (
              <div className="text-center py-6 animate-fade-up">
                <div className="w-14 h-14 rounded-full bg-forest-100 text-forest-600 flex items-center justify-center mx-auto mb-5">
                  <Check size={28} />
                </div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">You're booked</h2>
                <p className="text-gray-500 mb-6 max-w-md mx-auto leading-relaxed">
                  {formatDemoDate(selectedDay)} at {selectedSlot.label} ({timezone})
                  <br />
                  {meetingType.title} · confirmation {confirmationId}
                </p>
                <p className="text-sm text-gray-500 mb-8">
                  We'll email {form.email || 'you'} with a calendar invite. Prefer to explore now?
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a href={SIGNUP_URL} className="btn-primary justify-center">
                    Start free trial <ArrowRight size={15} />
                  </a>
                  <Link to="/features" className="btn-secondary justify-center">
                    Explore features
                  </Link>
                </div>
              </div>
            )}
          </div>

          <aside className="lg:sticky lg:top-24 space-y-4">
            <div className="bg-forest-600 text-white rounded-2xl p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-forest-300 mb-3">What to expect</p>
              <ul className="space-y-3 text-sm text-forest-100">
                {[
                  'Live product walkthrough, not a slide deck',
                  'Questions about your current stack answered honestly',
                  'Clear next steps for trial or migration',
                ].map(item => (
                  <li key={item} className="flex gap-2">
                    <Check size={14} className="text-sage mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-gray-200 rounded-2xl p-5 bg-white">
              <p className="text-sm text-gray-600 leading-relaxed">
                Want to try the product yourself first?{' '}
                <a href={SIGNUP_URL} className="text-forest-600 font-medium hover:underline">
                  Start a free trial
                </a>{' '}
                — no card required.
              </p>
            </div>
          </aside>
        </div>
      </div>

      <style>{`
        .input {
          width: 100%;
          border: 1px solid #e5e7eb;
          border-radius: 0.75rem;
          padding: 0.65rem 0.85rem;
          font-size: 0.875rem;
          outline: none;
          transition: border-color 0.15s, box-shadow 0.15s;
        }
        .input:focus {
          border-color: #2d6a4f;
          box-shadow: 0 0 0 3px rgba(45, 106, 79, 0.12);
        }
      `}</style>
    </div>
  )
}

function Field({
  label,
  required,
  children,
}: {
  label: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <label className="block">
      <span className="block text-xs font-medium text-gray-600 mb-1.5">
        {label}
        {required ? <span className="text-forest-500"> *</span> : null}
      </span>
      {children}
    </label>
  )
}

function toDateKey(d: Date) {
  const pad = (n: number) => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
}

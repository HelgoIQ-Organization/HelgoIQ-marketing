import { FormEvent, useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, CheckCircle2, Clock, Loader2, RefreshCw } from 'lucide-react'
import {
  createDemoBooking,
  CreateBookingResult,
  DemoSlot,
  formatSlotRange,
  formatSlotTime,
  groupSlotsByDay,
  listDemoSlots,
} from '../lib/demoBooking'
import { CONTACT_EMAIL, TRIAL_SIGNUP_URL } from '../lib/urls'

type Step = 'slot' | 'details' | 'success'

const DEFAULT_TZ = 'Europe/London'

export default function BookDemo() {
  const [step, setStep] = useState<Step>('slot')
  const [slots, setSlots] = useState<DemoSlot[]>([])
  const [timezone, setTimezone] = useState(DEFAULT_TZ)
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [selectedDay, setSelectedDay] = useState<string | null>(null)
  const [selectedSlot, setSelectedSlot] = useState<DemoSlot | null>(null)
  const [confirmation, setConfirmation] = useState<CreateBookingResult | null>(null)

  const [guestName, setGuestName] = useState('')
  const [guestEmail, setGuestEmail] = useState('')
  const [studioName, setStudioName] = useState('')
  const [guestPhone, setGuestPhone] = useState('')
  const [notes, setNotes] = useState('')
  const [smsConsent, setSmsConsent] = useState(false)

  const loadSlots = async () => {
    setLoading(true)
    setError(null)
    try {
      const result = await listDemoSlots(14)
      setSlots(result.slots)
      setTimezone(result.timezone || DEFAULT_TZ)
      const groups = groupSlotsByDay(result.slots, result.timezone || DEFAULT_TZ)
      if (groups.length > 0) {
        setSelectedDay(prev => prev ?? groups[0].dayKey)
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Could not load available times'
      setError(message)
      setSlots([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    void loadSlots()
  }, [])

  const dayGroups = useMemo(
    () => groupSlotsByDay(slots, timezone),
    [slots, timezone],
  )

  const daySlots = useMemo(() => {
    const group = dayGroups.find(g => g.dayKey === selectedDay)
    return group?.slots ?? []
  }, [dayGroups, selectedDay])

  const onContinueToDetails = () => {
    if (!selectedSlot) return
    setStep('details')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!selectedSlot) return
    setSubmitting(true)
    setError(null)
    try {
      const result = await createDemoBooking({
        startsAt: selectedSlot.startsAt,
        guestName: guestName.trim(),
        guestEmail: guestEmail.trim(),
        studioName: studioName.trim() || undefined,
        guestPhone: guestPhone.trim() || undefined,
        notes: notes.trim() || undefined,
        smsConsent: smsConsent || undefined,
      })
      setConfirmation(result)
      setStep('success')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Booking failed'
      setError(message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div>
      <section className="relative overflow-hidden bg-forest-600 text-white pt-28 pb-16 lg:pt-32 lg:pb-20">
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 20% 20%, rgba(126,194,169,0.35), transparent 55%), radial-gradient(ellipse 70% 50% at 90% 80%, rgba(27,58,46,0.9), transparent 50%)',
          }}
        />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center animate-fade-up">
          <p
            className="text-3xl sm:text-4xl font-medium mb-4"
            style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic' }}
          >
            HelgoIQ
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-4">
            Book a studio walkthrough
          </h1>
          <p className="text-forest-200 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Pick a time that works. We’ll walk through bookings, memberships, CRM, websites, and the
            AI Command Centre — using your studio as the lens.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-mist">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          {step === 'success' && confirmation ? (
            <div className="bg-white border border-forest-100 rounded-2xl p-8 sm:p-10 animate-fade-up">
              <div className="flex items-center gap-3 text-forest-600 mb-4">
                <CheckCircle2 size={28} />
                <h2 className="text-2xl font-semibold text-gray-900">You’re booked</h2>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                A confirmation email
                {confirmation.guestEmail ? ` to ${confirmation.guestEmail}` : ''} is on its way,
                with calendar details when mail is configured.
              </p>
              <dl className="space-y-3 text-sm mb-8">
                <div className="flex justify-between gap-4 border-b border-gray-100 pb-3">
                  <dt className="text-gray-500">When</dt>
                  <dd className="text-gray-900 text-right font-medium">
                    {formatSlotRange(
                      confirmation.startsAt,
                      confirmation.endsAt,
                      confirmation.timezone || timezone,
                    )}
                  </dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-gray-100 pb-3">
                  <dt className="text-gray-500">Name</dt>
                  <dd className="text-gray-900 text-right font-medium">{confirmation.guestName}</dd>
                </div>
                {confirmation.studioName && (
                  <div className="flex justify-between gap-4 border-b border-gray-100 pb-3">
                    <dt className="text-gray-500">Studio</dt>
                    <dd className="text-gray-900 text-right font-medium">{confirmation.studioName}</dd>
                  </div>
                )}
              </dl>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/" className="btn-primary justify-center">
                  Back to home
                </Link>
                <a href={TRIAL_SIGNUP_URL} className="btn-secondary justify-center">
                  Or start free trial <ArrowRight size={15} />
                </a>
              </div>
            </div>
          ) : (
            <div className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-2 mb-6 text-xs font-semibold uppercase tracking-widest text-forest-500">
                <span className={step === 'slot' ? 'text-forest-600' : 'text-forest-300'}>1. Time</span>
                <span className="text-gray-300">/</span>
                <span className={step === 'details' ? 'text-forest-600' : 'text-forest-300'}>2. Details</span>
              </div>

              {error && (
                <div className="mb-6 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
                  <p className="font-medium mb-1">Couldn’t complete that step</p>
                  <p className="leading-relaxed">{error}</p>
                  <p className="mt-2 text-amber-800/80">
                    Prefer email?{' '}
                    <a href={CONTACT_EMAIL} className="underline hover:no-underline">
                      hello@helgoiq.com
                    </a>
                  </p>
                  {step === 'slot' && (
                    <button
                      type="button"
                      onClick={() => void loadSlots()}
                      className="mt-3 inline-flex items-center gap-2 text-forest-600 font-medium"
                    >
                      <RefreshCw size={14} /> Retry loading times
                    </button>
                  )}
                </div>
              )}

              {step === 'slot' && (
                <div className="animate-fade-in">
                  <div className="flex items-start gap-3 mb-6">
                    <Calendar className="text-forest-500 mt-0.5 shrink-0" size={20} />
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900">Choose a time</h2>
                      <p className="text-sm text-gray-500 mt-1">
                        30-minute sessions · weekday mornings & afternoons · times in {timezone}
                      </p>
                    </div>
                  </div>

                  {loading ? (
                    <div className="flex items-center justify-center gap-2 py-16 text-forest-500">
                      <Loader2 className="animate-spin" size={20} />
                      <span className="text-sm">Loading open slots…</span>
                    </div>
                  ) : dayGroups.length === 0 ? (
                    <div className="py-10 text-center">
                      <p className="text-gray-600 mb-4">No open slots in the next two weeks.</p>
                      <a href={CONTACT_EMAIL} className="btn-secondary">
                        Email us instead
                      </a>
                    </div>
                  ) : (
                    <>
                      <div className="flex gap-2 overflow-x-auto pb-3 mb-4 -mx-1 px-1">
                        {dayGroups.map(group => (
                          <button
                            key={group.dayKey}
                            type="button"
                            onClick={() => {
                              setSelectedDay(group.dayKey)
                              setSelectedSlot(null)
                            }}
                            className={`flex-shrink-0 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                              selectedDay === group.dayKey
                                ? 'bg-forest-600 text-white'
                                : 'bg-mist text-gray-700 hover:bg-forest-50'
                            }`}
                          >
                            {group.label}
                          </button>
                        ))}
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-8">
                        {daySlots.map(slot => {
                          const active = selectedSlot?.startsAt === slot.startsAt
                          return (
                            <button
                              key={slot.startsAt}
                              type="button"
                              onClick={() => setSelectedSlot(slot)}
                              className={`flex items-center justify-center gap-2 px-3 py-3 rounded-lg text-sm font-medium transition-all ${
                                active
                                  ? 'bg-forest-500 text-white shadow-sm'
                                  : 'border border-gray-200 text-gray-700 hover:border-forest-300 hover:bg-forest-50'
                              }`}
                            >
                              <Clock size={14} />
                              {formatSlotTime(slot.startsAt, timezone)}
                            </button>
                          )
                        })}
                      </div>

                      <button
                        type="button"
                        disabled={!selectedSlot}
                        onClick={onContinueToDetails}
                        className="btn-primary w-full justify-center disabled:opacity-40 disabled:cursor-not-allowed"
                      >
                        Continue <ArrowRight size={16} />
                      </button>
                    </>
                  )}
                </div>
              )}

              {step === 'details' && selectedSlot && (
                <form onSubmit={onSubmit} className="animate-fade-in space-y-5">
                  <div className="rounded-xl bg-forest-50 border border-forest-100 px-4 py-3 text-sm text-forest-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <span>
                      {formatSlotRange(selectedSlot.startsAt, selectedSlot.endsAt, timezone)}
                    </span>
                    <button
                      type="button"
                      className="text-forest-600 font-medium underline-offset-2 hover:underline text-left"
                      onClick={() => setStep('slot')}
                    >
                      Change time
                    </button>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <label className="block sm:col-span-1">
                      <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                        Your name *
                      </span>
                      <input
                        required
                        value={guestName}
                        onChange={e => setGuestName(e.target.value)}
                        className="mt-1.5 w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-forest-400/40 focus:border-forest-400"
                        autoComplete="name"
                      />
                    </label>
                    <label className="block sm:col-span-1">
                      <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                        Work email *
                      </span>
                      <input
                        required
                        type="email"
                        value={guestEmail}
                        onChange={e => setGuestEmail(e.target.value)}
                        className="mt-1.5 w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-forest-400/40 focus:border-forest-400"
                        autoComplete="email"
                      />
                    </label>
                    <label className="block sm:col-span-1">
                      <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                        Studio name
                      </span>
                      <input
                        value={studioName}
                        onChange={e => setStudioName(e.target.value)}
                        className="mt-1.5 w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-forest-400/40 focus:border-forest-400"
                      />
                    </label>
                    <label className="block sm:col-span-1">
                      <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                        Phone
                      </span>
                      <input
                        type="tel"
                        value={guestPhone}
                        onChange={e => setGuestPhone(e.target.value)}
                        className="mt-1.5 w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-forest-400/40 focus:border-forest-400"
                        autoComplete="tel"
                      />
                    </label>
                  </div>

                  <label className="block">
                    <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                      What should we focus on?
                    </span>
                    <textarea
                      value={notes}
                      onChange={e => setNotes(e.target.value)}
                      rows={3}
                      className="mt-1.5 w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-forest-400/40 focus:border-forest-400"
                      placeholder="Migration from another system, reformer booking, memberships…"
                    />
                  </label>

                  <label className="flex items-start gap-3 text-sm text-gray-600">
                    <input
                      type="checkbox"
                      checked={smsConsent}
                      onChange={e => setSmsConsent(e.target.checked)}
                      className="mt-1 rounded border-gray-300 text-forest-500 focus:ring-forest-400"
                    />
                    <span>
                      Optional: HelgoIQ may text me about this demo. Message rates may apply. Reply
                      STOP to unsubscribe.
                    </span>
                  </label>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary w-full justify-center disabled:opacity-60"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="animate-spin" size={16} /> Booking…
                      </>
                    ) : (
                      <>
                        Confirm demo <ArrowRight size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          )}

          {step !== 'success' && (
            <p className="text-center text-sm text-gray-500 mt-8">
              Prefer to explore alone?{' '}
              <a href={TRIAL_SIGNUP_URL} className="text-forest-600 font-medium hover:underline">
                Start a free trial
              </a>
            </p>
          )}
        </div>
      </section>
    </div>
  )
}

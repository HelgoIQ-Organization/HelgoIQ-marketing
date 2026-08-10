import { DEMO_BOOKING_API_URL } from './cta'

export type DemoMeetingType = {
  id: string
  title: string
  durationMinutes: number
  description: string
}

export type DemoSlot = {
  /** ISO local datetime without timezone, e.g. 2026-08-12T10:00:00 */
  start: string
  label: string
}

export type DemoBookingPayload = {
  meetingTypeId: string
  start: string
  timezone: string
  name: string
  email: string
  studioName: string
  locations: string
  phone?: string
  notes?: string
  source: 'marketing-site'
}

export type DemoBookingResult =
  | { ok: true; confirmationId: string; mode: 'api' | 'local' }
  | { ok: false; error: string }

export const MEETING_TYPES: DemoMeetingType[] = [
  {
    id: 'product-demo',
    title: 'Product demo',
    durationMinutes: 30,
    description: 'A focused walkthrough of booking, CRM, and AI — tailored to your studio type.',
  },
  {
    id: 'deep-dive',
    title: 'Platform deep dive',
    durationMinutes: 45,
    description: 'Full platform tour plus migration questions for multi-location or switching studios.',
  },
]

const WEEKDAY_SLOTS = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00']

function pad(n: number) {
  return String(n).padStart(2, '0')
}

function toDateKey(d: Date) {
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
}

/** Generate bookable UK weekday slots for the next ~21 days (client-side until Platform API owns availability). */
export function getAvailableDays(from = new Date(), count = 14): Date[] {
  const days: Date[] = []
  const cursor = new Date(from)
  cursor.setHours(0, 0, 0, 0)
  // Start from tomorrow
  cursor.setDate(cursor.getDate() + 1)

  while (days.length < count) {
    const day = cursor.getDay()
    if (day !== 0 && day !== 6) {
      days.push(new Date(cursor))
    }
    cursor.setDate(cursor.getDate() + 1)
  }
  return days
}

export function getSlotsForDay(day: Date): DemoSlot[] {
  const key = toDateKey(day)
  return WEEKDAY_SLOTS.map(time => {
    const [h, m] = time.split(':')
    return {
      start: `${key}T${h}:${m}:00`,
      label: time,
    }
  })
}

export function formatDemoDate(day: Date) {
  return day.toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export async function submitDemoBooking(payload: DemoBookingPayload): Promise<DemoBookingResult> {
  try {
    const res = await fetch(DEMO_BOOKING_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    })

    if (res.ok) {
      const data = (await res.json().catch(() => ({}))) as { id?: string; confirmationId?: string }
      return {
        ok: true,
        confirmationId: data.confirmationId || data.id || `demo_${Date.now()}`,
        mode: 'api',
      }
    }

    // Platform public API may not be live yet — fall back to local confirmation + mailto handoff
    if (res.status === 404 || res.status === 405 || res.status >= 500) {
      return localFallback(payload)
    }

    const text = await res.text().catch(() => '')
    return { ok: false, error: text || `Booking failed (${res.status})` }
  } catch {
    return localFallback(payload)
  }
}

function localFallback(payload: DemoBookingPayload): DemoBookingResult {
  const confirmationId = `local_${Date.now().toString(36)}`
  try {
    const existing = JSON.parse(localStorage.getItem('helgoiq_demo_bookings') || '[]') as unknown[]
    existing.push({ ...payload, confirmationId, createdAt: new Date().toISOString() })
    localStorage.setItem('helgoiq_demo_bookings', JSON.stringify(existing))
  } catch {
    // ignore storage failures
  }

  const subject = encodeURIComponent(`HelgoIQ demo request — ${payload.studioName || payload.name}`)
  const body = encodeURIComponent(
    [
      'New demo booking from helgoiq.com/book-demo',
      '',
      `Meeting: ${payload.meetingTypeId}`,
      `When: ${payload.start} (${payload.timezone})`,
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      `Studio: ${payload.studioName}`,
      `Locations: ${payload.locations}`,
      payload.phone ? `Phone: ${payload.phone}` : '',
      payload.notes ? `Notes: ${payload.notes}` : '',
      '',
      `Confirmation: ${confirmationId}`,
    ]
      .filter(Boolean)
      .join('\n'),
  )

  // Open a mailto as operational backup until Platform API owns the calendar
  window.open(`mailto:hello@helgoiq.com?subject=${subject}&body=${body}`, '_blank')

  return { ok: true, confirmationId, mode: 'local' }
}

/**
 * Public demo booking client (Platform demoBooking router).
 * Calls same-origin `/api/trpc/...` so Cloudflare Pages Functions / Vite proxy
 * can forward to the Platform app origin without browser CORS issues.
 */

export type DemoSlot = {
  startsAt: string
  endsAt: string
  timezone?: string
}

export type ListSlotsResult = {
  slots: DemoSlot[]
  timezone?: string
  hostLabel?: string
}

export type CreateBookingInput = {
  startsAt: string
  guestName: string
  guestEmail: string
  studioName?: string
  guestPhone?: string
  notes?: string
  smsConsent?: boolean
}

export type CreateBookingResult = {
  id?: string
  startsAt: string
  endsAt?: string
  guestName: string
  guestEmail: string
  studioName?: string
  timezone?: string
  status?: string
}

type TrpcErrorBody = {
  error?: {
    json?: {
      message?: string
      data?: { code?: string; httpStatus?: number; path?: string }
    }
  }
}

type TrpcSuccessBody<T> = {
  result?: {
    data?: {
      json?: T
    }
  }
}

function unwrapTrpc<T>(body: TrpcSuccessBody<T> & TrpcErrorBody): T {
  if (body.error?.json?.message) {
    const code = body.error.json.data?.code
    const msg = body.error.json.message
    throw new Error(code ? `${msg} (${code})` : msg)
  }
  const data = body.result?.data?.json
  if (data === undefined) {
    throw new Error('Unexpected empty response from demo booking API')
  }
  return data
}

async function trpcQuery<T>(procedure: string, input: unknown): Promise<T> {
  const encoded = encodeURIComponent(JSON.stringify({ json: input }))
  const res = await fetch(`/api/trpc/${procedure}?input=${encoded}`, {
    method: 'GET',
    headers: { Accept: 'application/json' },
  })
  const body = (await res.json()) as TrpcSuccessBody<T> & TrpcErrorBody
  if (!res.ok && !body.error) {
    throw new Error(`Request failed (${res.status})`)
  }
  return unwrapTrpc(body)
}

async function trpcMutation<T>(procedure: string, input: unknown): Promise<T> {
  const res = await fetch(`/api/trpc/${procedure}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ json: input }),
  })
  const body = (await res.json()) as TrpcSuccessBody<T> & TrpcErrorBody
  if (!res.ok && !body.error) {
    throw new Error(`Request failed (${res.status})`)
  }
  return unwrapTrpc(body)
}

function normalizeSlots(raw: unknown): ListSlotsResult {
  if (Array.isArray(raw)) {
    return { slots: raw as DemoSlot[] }
  }
  if (raw && typeof raw === 'object') {
    const obj = raw as Record<string, unknown>
    const slots = (obj.slots ?? obj.openSlots ?? obj.availableSlots ?? []) as DemoSlot[]
    return {
      slots: Array.isArray(slots) ? slots : [],
      timezone: typeof obj.timezone === 'string' ? obj.timezone : undefined,
      hostLabel: typeof obj.hostLabel === 'string' ? obj.hostLabel : undefined,
    }
  }
  return { slots: [] }
}

export async function listDemoSlots(days = 14): Promise<ListSlotsResult> {
  const raw = await trpcQuery<unknown>('demoBooking.listSlots', { days })
  return normalizeSlots(raw)
}

export async function createDemoBooking(
  input: CreateBookingInput,
): Promise<CreateBookingResult> {
  const raw = await trpcMutation<unknown>('demoBooking.create', input)
  if (raw && typeof raw === 'object') {
    const obj = raw as Record<string, unknown>
    return {
      id: typeof obj.id === 'string' ? obj.id : undefined,
      startsAt: (typeof obj.startsAt === 'string' ? obj.startsAt : input.startsAt),
      endsAt: typeof obj.endsAt === 'string' ? obj.endsAt : undefined,
      guestName: (typeof obj.guestName === 'string' ? obj.guestName : input.guestName),
      guestEmail: (typeof obj.guestEmail === 'string' ? obj.guestEmail : input.guestEmail),
      studioName:
        typeof obj.studioName === 'string' ? obj.studioName : input.studioName,
      timezone: typeof obj.timezone === 'string' ? obj.timezone : undefined,
      status: typeof obj.status === 'string' ? obj.status : 'confirmed',
    }
  }
  return {
    startsAt: input.startsAt,
    guestName: input.guestName,
    guestEmail: input.guestEmail,
    studioName: input.studioName,
    status: 'confirmed',
  }
}

export function formatSlotDay(iso: string, timeZone = 'Europe/London'): string {
  return new Intl.DateTimeFormat('en-GB', {
    timeZone,
    weekday: 'short',
    day: 'numeric',
    month: 'short',
  }).format(new Date(iso))
}

export function formatSlotTime(iso: string, timeZone = 'Europe/London'): string {
  return new Intl.DateTimeFormat('en-GB', {
    timeZone,
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(new Date(iso))
}

export function formatSlotRange(
  startsAt: string,
  endsAt?: string,
  timeZone = 'Europe/London',
): string {
  const day = new Intl.DateTimeFormat('en-GB', {
    timeZone,
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(startsAt))
  const start = formatSlotTime(startsAt, timeZone)
  const end = endsAt ? formatSlotTime(endsAt, timeZone) : null
  return end ? `${day} · ${start}–${end} (${timeZone})` : `${day} · ${start} (${timeZone})`
}

export function groupSlotsByDay(
  slots: DemoSlot[],
  timeZone = 'Europe/London',
): { dayKey: string; label: string; slots: DemoSlot[] }[] {
  const map = new Map<string, { label: string; slots: DemoSlot[] }>()
  for (const slot of slots) {
    const dayKey = new Intl.DateTimeFormat('en-CA', {
      timeZone,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).format(new Date(slot.startsAt))
    const existing = map.get(dayKey)
    if (existing) {
      existing.slots.push(slot)
    } else {
      map.set(dayKey, { label: formatSlotDay(slot.startsAt, timeZone), slots: [slot] })
    }
  }
  return Array.from(map.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([dayKey, value]) => ({ dayKey, ...value }))
}

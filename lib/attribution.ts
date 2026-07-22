// Where the lead came from. Captured on the landing page, read later on the form page —
// by the time a person reaches /enroll the utm params are long gone from the URL.
//
// Both first and last touch are kept on purpose. First-touch alone makes paid ads look
// worthless (the organic visit a month ago takes the credit); last-touch alone makes them
// look better than they are. Storing both lets us compare instead of guess.

/** Same counter as the tag in layout.tsx. Keep in sync if it ever changes. */
export const METRIKA_ID = 107144239

const COOKIE = "ewe_attr"
const TTL_DAYS = 90

export interface Touch {
  utmSource?: string
  utmMedium?: string
  utmCampaign?: string
  utmContent?: string
  utmTerm?: string
  /** Yandex.Direct click id — the only reliable link between a lead and a paid click. */
  yclid?: string
  referrer?: string
  landingPage?: string
  at?: string
}

export interface Attribution {
  first?: Touch
  last?: Touch
  /** Metrika ClientID — lets us match a lead against the visit stats later. */
  ymClientId?: string
}

function readCookie(): Attribution {
  const raw = document.cookie
    .split("; ")
    .find((c) => c.startsWith(`${COOKIE}=`))
    ?.slice(COOKIE.length + 1)

  if (!raw) return {}
  try {
    return JSON.parse(decodeURIComponent(raw)) as Attribution
  } catch {
    return {}
  }
}

function writeCookie(value: Attribution) {
  const expires = new Date(Date.now() + TTL_DAYS * 864e5).toUTCString()
  const encoded = encodeURIComponent(JSON.stringify(value))
  document.cookie = `${COOKIE}=${encoded}; expires=${expires}; path=/; SameSite=Lax`
}

/** Reads the current URL. Returns undefined when there is nothing worth attributing. */
function touchFromUrl(): Touch | undefined {
  const params = new URLSearchParams(window.location.search)
  const referrer = document.referrer && !document.referrer.includes(window.location.host)
    ? document.referrer
    : undefined

  const touch: Touch = {
    utmSource: params.get("utm_source") || undefined,
    utmMedium: params.get("utm_medium") || undefined,
    utmCampaign: params.get("utm_campaign") || undefined,
    utmContent: params.get("utm_content") || undefined,
    utmTerm: params.get("utm_term") || undefined,
    yclid: params.get("yclid") || undefined,
    referrer,
  }

  const hasSignal = Object.values(touch).some(Boolean)
  if (!hasSignal) return undefined

  touch.landingPage = window.location.pathname
  touch.at = new Date().toISOString()
  return touch
}

/** Call once per page load. Safe to call repeatedly. */
export function captureAttribution() {
  const stored = readCookie()
  const touch = touchFromUrl()

  if (touch) {
    stored.last = touch
    stored.first = stored.first ?? touch
  }

  if (!stored.ymClientId) {
    // ym() may not be ready yet; it queues calls, so this resolves once the tag loads.
    window.ym?.(METRIKA_ID, "getClientID", (clientId: string) => {
      const fresh = readCookie()
      fresh.ymClientId = clientId
      writeCookie(fresh)
    })
  }

  if (touch || Object.keys(stored).length > 0) writeCookie(stored)
}

/** What the form sends along with the lead. Empty object means direct/unknown traffic. */
export function getAttribution(): Attribution {
  if (typeof document === "undefined") return {}
  return readCookie()
}

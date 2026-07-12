declare global {
  interface Window {
    dataLayer?: unknown[][];
  }
}

/**
 * Mirrors what gtag() does internally. Pushing straight to dataLayer (instead
 * of calling window.gtag) means events survive even if this fires before
 * gtag.js has finished loading — nothing gets silently dropped.
 */
function pushToDataLayer(...args: unknown[]) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(args);
}

export function trackPageView(pagePath: string) {
  pushToDataLayer("event", "page_view", {
    page_path: pagePath,
    page_location: typeof window !== "undefined" ? window.location.href : undefined,
    page_title: typeof document !== "undefined" ? document.title : undefined,
  });
}

/**
 * Fires when a visitor clicks a "Book Now" / "Check availability" CTA that
 * leads to the /book page, so CTA placements can be compared for intent.
 */
export function trackBookingCtaClick(location: string) {
  pushToDataLayer("event", "booking_cta_click", {
    event_category: "engagement",
    cta_location: location,
  });
}

/**
 * Fires when a visitor is handed off to Resort Realty's checkout — the
 * closest thing to a "conversion" this site can measure, since booking
 * itself happens off-site.
 */
export function trackBookingHandoff(params: { checkIn?: string; checkOut?: string; source: string }) {
  pushToDataLayer("event", "booking_handoff", {
    event_category: "engagement",
    check_in: params.checkIn || undefined,
    check_out: params.checkOut || undefined,
    source: params.source,
  });
}

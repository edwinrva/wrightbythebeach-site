declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Fires when a visitor is handed off to Resort Realty's checkout — the
 * closest thing to a "conversion" this site can measure, since booking
 * itself happens off-site.
 */
export function trackBookingHandoff(params: { checkIn?: string; checkOut?: string }) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", "booking_handoff", {
    event_category: "engagement",
    check_in: params.checkIn || undefined,
    check_out: params.checkOut || undefined,
  });
}

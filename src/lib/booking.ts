const BOOKING_BASE =
  "https://www.resortrealty.com/booking/wright-by-the-beach/5310/";

function formatDate(d: Date): string {
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${mm}/${dd}/${d.getFullYear()}`;
}

/**
 * Builds the Resort Realty booking deep link. Dates land pre-filled in their
 * checkout as sd/ed (MM/DD/YYYY, URL-encoded).
 */
export function buildBookingUrl(start?: Date, end?: Date): string {
  if (!start || !end) return BOOKING_BASE;
  const params = new URLSearchParams({
    sd: formatDate(start),
    ed: formatDate(end),
  });
  return `${BOOKING_BASE}?${params.toString()}`;
}

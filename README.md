# Wright by the Beach

Marketing website for **Wright by the Beach**, a 5-bedroom oceanside vacation rental in Kill Devil Hills, NC (Outer Banks). Built with Next.js (App Router, TypeScript, Tailwind CSS).

Bookings are handled by Resort Realty — every "Book Now" CTA deep-links into their checkout (`resortrealty.com/booking/wright-by-the-beach/5310/`) with the visitor's chosen dates pre-filled.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

- `src/app/` — routes (homepage, `/gallery`, `/amenities`, `/faq`, `/book`, `/area`, `/area/[slug]`)
- `src/components/` — shared UI (Header, Footer, Section, CtaButton, BookingWidget, PhotoPlaceholder)
- `src/content/` — typed property data (amenities, rooms, FAQs, attractions, property facts)
- `src/lib/` — booking URL builder and JSON-LD structured data helpers

## Status

Phase 1 (MVP) complete. Photos are placeholders pending the Phase 0 asset-collection step — see the project plan for the full phased roadmap.

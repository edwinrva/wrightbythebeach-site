export const property = {
  name: "Wright by the Beach",
  tagline: "Where vacation first took flight",
  listingId: "5310",
  manager: "Resort Realty",
  managerPhone: "(800) 458-3830",
  address: {
    street: "110 Baker Avenue",
    city: "Kill Devil Hills",
    state: "NC",
    zip: "27948",
    region: "Outer Banks",
  },
  // TODO(phase-0): verify exact coordinates for 110 Baker Ave before shipping JSON-LD.
  // These are approximate for Kill Devil Hills oceanside near Ferris Ave beach access.
  geo: {
    latitude: 36.0246,
    longitude: -75.6699,
  },
  stats: {
    bedrooms: 5,
    fullBaths: 3,
    halfBaths: 1,
    sleeps: 10,
    levels: 4,
  },
  beachAccess: {
    name: "Ferris Avenue beach access",
    distanceYards: 352,
    walkMinutes: 4,
  },
  headline: "A five-bedroom oceanside retreat in the heart of Kill Devil Hills",
  description: [
    "Four minutes. That's how long it takes to walk from your keyless front door to your toes in the Atlantic. Wright by the Beach is a four-level, five-bedroom oceanside home in Kill Devil Hills — the very town where the Wright Brothers proved the impossible in 1903, and the inspiration for our name.",
    "Mornings start with coffee and ocean views from the sun deck. Afternoons belong to the beach — gear included, cooler to boogie boards, so pack light. Evenings wind down in the hot tub under Outer Banks stars, while the kids battle it out at the foosball table in the rec room.",
    "With two king suites, room for ten, a chef-ready kitchen with breakfast bar, and covered decks for the one rainy afternoon you might get, this is the house that turns a week at the beach into the week everyone talks about at Thanksgiving. And yes — bring the dog.",
  ],
  highlights: [
    "4-minute walk to the beach",
    "Hot tub under the stars",
    "Dog friendly (crate provided)",
    "Ocean views from sun decks",
    "Sleeps 10 across 5 bedrooms",
    "Free beach gear included",
  ],
} as const;

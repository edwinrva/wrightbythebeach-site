export type Photo = { src: string; alt: string };

export const photos = {
  heroAerial: {
    src: "/images/site/hero-aerial.jpg",
    alt: "Aerial view of the Kill Devil Hills coastline near Wright by the Beach",
  },
  wrightBrothersMemorial: {
    src: "/images/site/wright-brothers-memorial.jpg",
    alt: "Aerial view of the Wright Brothers National Memorial at sunset",
  },
  avalonPier: {
    src: "/images/site/avalon-pier.jpg",
    alt: "Avalon Fishing Pier at dusk in Kill Devil Hills",
  },
  exteriorFront: {
    src: "/images/site/exterior-front.jpg",
    alt: "Front exterior of Wright by the Beach",
  },
  exteriorRearDeck: {
    src: "/images/site/exterior-rear-deck.jpg",
    alt: "Rear exterior and deck of Wright by the Beach",
  },
  frontPorch: {
    src: "/images/site/front-porch.jpg",
    alt: "Front porch entrance at 110 Baker Avenue",
  },
  hotTub: {
    src: "/images/site/hot-tub.jpg",
    alt: "Private hot tub on the shaded deck at Wright by the Beach",
  },
  gasGrill: {
    src: "/images/site/gas-grill.jpg",
    alt: "Gas grill on the back deck",
  },
  recRoom: {
    src: "/images/site/rec-room.jpg",
    alt: "Rec room with foosball table and arcade game",
  },
  livingRoom: {
    src: "/images/site/living-room.jpg",
    alt: "Open living room with sectional sofa and breakfast bar",
  },
  breakfastBar: {
    src: "/images/site/breakfast-bar.jpg",
    alt: "Kitchen breakfast bar with seating for four",
  },
  kitchen: {
    src: "/images/site/kitchen.jpg",
    alt: "Fully equipped kitchen",
  },
  diningTable: {
    src: "/images/site/dining-table.jpg",
    alt: "Dining table seating six with deck views",
  },
  readingNook: {
    src: "/images/site/reading-nook.jpg",
    alt: "Upstairs reading nook with ocean-view windows",
  },
  kingSuite1: {
    src: "/images/site/king-suite-1.jpg",
    alt: "King Suite I bedroom",
  },
  kingSuite2: {
    src: "/images/site/king-suite-2.jpg",
    alt: "King Suite II bedroom",
  },
  queenRoom: {
    src: "/images/site/queen-room.jpg",
    alt: "Queen Room bedroom with private deck access",
  },
  bunkRoom: {
    src: "/images/site/bunk-room.jpg",
    alt: "Bunk Room with two double-over-double bunk beds",
  },
  twinRoom: {
    src: "/images/site/twin-room.jpg",
    alt: "Twin Room bedroom",
  },
  keylessEntry: {
    src: "/images/site/keyless-entry.jpg",
    alt: "Keyless entry door at Wright by the Beach",
  },
  laundry: {
    src: "/images/site/laundry.jpg",
    alt: "In-unit washer and dryer",
  },
  bathroomShower: {
    src: "/images/site/bathroom-shower.jpg",
    alt: "Full bathroom with glass walk-in shower",
  },
  stairwell: {
    src: "/images/site/stairwell.jpg",
    alt: "Interior stairwell connecting all four levels",
  },
} as const satisfies Record<string, Photo>;

export type Photo = { src: string; alt: string };

export const photos = {
  heroAerial: {
    src: "/images/site/hero-aerial.jpg",
    alt: "Ocean waves washing onto the sandy shore near Wright by the Beach",
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
  jockeysRidge: {
    src: "/images/site/jockeys-ridge.jpg",
    alt: "Sand dunes at Jockey's Ridge State Park in Nags Head, NC",
  },
  bodieIslandLighthouse: {
    src: "/images/site/bodie-island-lighthouse.jpg",
    alt: "The black-and-white striped Bodie Island Lighthouse",
  },
  ncAquarium: {
    src: "/images/site/nc-aquarium.jpg",
    alt: "Exterior of the North Carolina Aquarium on Roanoke Island",
  },
  beachAccessMap: {
    src: "/images/site/beach-access-map.jpg",
    alt: "Map highlighting the 5-minute walk from Wright by the Beach to the Raleigh Avenue beach access",
  },
  jackBrowns: {
    src: "/images/site/jack-browns.jpg",
    alt: "Burger from Jack Brown's Beer & Burger Joint",
  },
  thaiRoom: {
    src: "/images/site/thai-room.jpg",
    alt: "Thai Room restaurant sign",
  },
  mamaKwans: {
    src: "/images/site/mama-kwans.jpg",
    alt: "Mama Kwan's Tiki Bar & Grill exterior and patio",
  },
  threeTequilas: {
    src: "/images/site/three-tequilas.jpg",
    alt: "3 Tequilas Mexican Restaurant exterior",
  },
  goombays: {
    src: "/images/site/goombays.jpg",
    alt: "Goombays Grill & Raw Bar exterior",
  },
  pigmans: {
    src: "/images/site/pigmans.jpg",
    alt: "Pigman's Bar-B-Que sign",
  },
} as const satisfies Record<string, Photo>;

/** Credit required by a photo's license (e.g. CC BY-SA); shown as a small caption. */
export const photoAttribution: Partial<Record<keyof typeof photos, string>> = {
  ncAquarium: "Photo: RadioFan at English Wikipedia, CC BY-SA 3.0, via Wikimedia Commons",
};

/** Restaurant photo grid for the kill-devil-hills-eats area guide page. */
export const restaurantPhotos: { name: string; photo: Photo }[] = [
  { name: "Jack Brown's Beer & Burger Joint", photo: photos.jackBrowns },
  { name: "Thai Room", photo: photos.thaiRoom },
  { name: "Mama Kwan's Tiki Bar & Grill", photo: photos.mamaKwans },
  { name: "3 Tequilas Mexican Restaurant", photo: photos.threeTequilas },
  { name: "Goombays Grill & Raw Bar", photo: photos.goombays },
  { name: "Pigman's Bar-B-Que", photo: photos.pigmans },
];

export type Attraction = {
  slug: string;
  name: string;
  // TODO(phase-2): verify all distances/drive times from 110 Baker Ave when writing full guide pages.
  distance: string;
  teaser: string;
  category: "history" | "nature" | "beach" | "family" | "food";
};

export const attractions: Attraction[] = [
  {
    slug: "wright-brothers-memorial",
    name: "Wright Brothers National Memorial",
    distance: "≈ 1 mile",
    teaser:
      "Where Orville and Wilbur flew first in 1903 — and where our house got its name. Climb Big Kill Devil Hill to the monument and stand on the spot where flight began.",
    category: "history",
  },
  {
    slug: "ferris-avenue-beach",
    name: "Ferris Avenue Beach Access",
    distance: "352 yards — 4-min walk",
    teaser:
      "Your home beach. Lifeguarded in season, wide sand, and close enough for a lunchtime reset between waves.",
    category: "beach",
  },
  {
    slug: "avalon-pier",
    name: "Avalon Fishing Pier",
    distance: "≈ 1 mile",
    teaser:
      "A classic 1958 Outer Banks pier — fish, grab a snack, or just watch the sunrise stretch down the coast.",
    category: "family",
  },
  {
    slug: "jockeys-ridge",
    name: "Jockey's Ridge State Park",
    distance: "≈ 5 miles",
    teaser:
      "The tallest living sand dune on the East Coast. Fly a kite, take a hang-gliding lesson, or catch the best sunset on the OBX.",
    category: "nature",
  },
  {
    slug: "nc-aquarium",
    name: "NC Aquarium on Roanoke Island",
    distance: "≈ 12 miles",
    teaser:
      "Sea turtles, sharks, and touch tanks — the perfect rainy-day (or too-much-sun day) adventure for the crew.",
    category: "family",
  },
  {
    slug: "bodie-island-lighthouse",
    name: "Bodie Island Lighthouse",
    distance: "≈ 14 miles",
    teaser:
      "Black-and-white striped icon of the Outer Banks. Climb it in season for a view from Oregon Inlet to the sound.",
    category: "history",
  },
  {
    slug: "kill-devil-hills-eats",
    name: "Kill Devil Hills Restaurants",
    distance: "walkable & short drives",
    teaser:
      "From fresh-catch seafood shacks to donut runs on the Beach Road, the best of OBX eating is minutes from the driveway.",
    category: "food",
  },
];

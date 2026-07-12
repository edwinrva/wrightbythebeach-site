export type Attraction = {
  slug: string;
  name: string;
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
      "Your home beach. Wide, soft sand and an outdoor shower close enough for a lunchtime reset between waves.",
    category: "beach",
  },
  {
    slug: "avalon-pier",
    name: "Avalon Fishing Pier",
    distance: "≈ 1.5 miles — 5-min drive",
    teaser:
      "A classic 1958 Outer Banks pier — fish, grab a snack, or just watch the sunrise stretch down the coast.",
    category: "family",
  },
  {
    slug: "jockeys-ridge",
    name: "Jockey's Ridge State Park",
    distance: "≈ 6–7 miles — 12–15 min drive",
    teaser:
      "The tallest natural sand dune system on the East Coast. Fly a kite, take a hang-gliding lesson, or catch the best sunset on the OBX.",
    category: "nature",
  },
  {
    slug: "nc-aquarium",
    name: "NC Aquarium on Roanoke Island",
    distance: "≈ 15–16 miles — 25–30 min drive",
    teaser:
      "Sea turtles, sharks, and touch tanks — the perfect rainy-day (or too-much-sun day) adventure for the crew.",
    category: "family",
  },
  {
    slug: "bodie-island-lighthouse",
    name: "Bodie Island Lighthouse",
    distance: "≈ 14–16 miles — 25–30 min drive",
    teaser:
      "Black-and-white striped icon of the Outer Banks. Climb it in season for a view from Oregon Inlet to the sound.",
    category: "history",
  },
  {
    slug: "kill-devil-hills-eats",
    name: "Kill Devil Hills Restaurants",
    distance: "in town — most within a 5–10 min drive",
    teaser:
      "From fresh-catch seafood shacks to a 50-year-old Beach Road diner, the best of OBX eating is minutes from the driveway.",
    category: "food",
  },
];

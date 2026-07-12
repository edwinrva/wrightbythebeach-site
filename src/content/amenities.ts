export type AmenityCategory = {
  title: string;
  items: { name: string; detail?: string }[];
};

export const amenityCategories: AmenityCategory[] = [
  {
    title: "Outdoor Living",
    items: [
      { name: "Hot tub", detail: "Open year-round, on the deck" },
      { name: "Ocean views", detail: "From the upper sun decks" },
      { name: "Sun decks & covered decks", detail: "Multiple levels of outdoor space" },
      { name: "Gas grill", detail: "For fresh-catch cookouts" },
    ],
  },
  {
    title: "Entertainment",
    items: [
      { name: "Rec room with foosball & arcade game", detail: "Plus a TV — no surround sound" },
      { name: "Second-floor living room", detail: "Big TV with soundbar, plus plenty of board games" },
      { name: "7 TVs throughout the home", detail: "One in nearly every room" },
      { name: "Reading nook", detail: "Quiet upstairs corner" },
      { name: "High-speed WiFi", detail: "Whole-house coverage" },
    ],
  },
  {
    title: "Kitchen & Dining",
    items: [
      { name: "Fully stocked kitchen", detail: "Everything you need to prep a meal" },
      { name: "Ice maker", detail: "Ice always on hand" },
      { name: "Breakfast bar", detail: "Seats 4" },
      { name: "Dining table", detail: "Seats 6" },
      { name: "Dishwasher & microwave" },
    ],
  },
  {
    title: "Convenience",
    items: [
      { name: "Keyless entry", detail: "No check-in desk, no lost keys" },
      { name: "Washer & dryer" },
      { name: "Complimentary linens", detail: "Beds made before you arrive" },
      { name: "Free beach gear", detail: "VayK Life program — chairs, umbrellas & more" },
    ],
  },
  {
    title: "Good to Know",
    items: [
      { name: "Dog friendly", detail: "Crate provided; pet fee applies" },
      { name: "Partial-week stays accepted" },
      { name: "Military discount available" },
      { name: "No smoking" },
    ],
  },
];

export type Room = {
  name: string;
  beds: string;
  sleeps: number;
  note?: string;
};

export const bedrooms: Room[] = [
  { name: "King Suite I", beds: "1 King", sleeps: 2, note: "TV with surround sound" },
  { name: "King Suite II", beds: "1 King", sleeps: 2, note: "TV" },
  { name: "Queen Room", beds: "1 Queen", sleeps: 2, note: "TV" },
  {
    name: "Bunk Room",
    beds: "2 Double-over-Double bunks",
    sleeps: 3,
    note: "Kids' favorite — sleeps a whole crew",
  },
  { name: "Twin Room", beds: "1 Twin", sleeps: 1, note: "Cozy single, near the reading nook" },
];

export const sleepingSummary = {
  totalSleeps: 10,
  bedrooms: 5,
  fullBaths: 3,
  halfBaths: 1,
};

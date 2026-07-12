import { photos, type Photo } from "./photos";

export type Room = {
  name: string;
  beds: string;
  sleeps: number;
  note?: string;
  photo: Photo;
};

export const bedrooms: Room[] = [
  {
    name: "King Suite I",
    beds: "1 King",
    sleeps: 2,
    note: "TV",
    photo: photos.kingSuite1,
  },
  {
    name: "King Suite II",
    beds: "1 King",
    sleeps: 2,
    note: "TV",
    photo: photos.kingSuite2,
  },
  {
    name: "Queen Room",
    beds: "1 Queen",
    sleeps: 2,
    note: "TV",
    photo: photos.queenRoom,
  },
  {
    name: "Bunk Room",
    beds: "2 Queen-over-Queen bunks",
    sleeps: 3,
    note: "Kids' favorite — sleeps a whole crew",
    photo: photos.bunkRoom,
  },
  {
    name: "Twin Room",
    beds: "1 Twin",
    sleeps: 1,
    note: "Cozy single, near the reading nook",
    photo: photos.twinRoom,
  },
];

export const sleepingSummary = {
  totalSleeps: 10,
  bedrooms: 5,
  fullBaths: 3,
  halfBaths: 1,
};

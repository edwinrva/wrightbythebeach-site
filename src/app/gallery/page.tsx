import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { CtaButton } from "@/components/CtaButton";
import { GalleryGrid } from "@/components/GalleryGrid";
import { photos } from "@/content/photos";

export const metadata: Metadata = {
  title: "Photo Gallery",
  description:
    "See every room, deck, and view at Wright by the Beach — a 5-bedroom oceanside vacation rental in Kill Devil Hills, NC.",
};

const galleryGroups = [
  {
    title: "Exterior & Decks",
    photos: [
      { label: "Front Exterior", ...photos.exteriorFront },
      { label: "Front Porch", ...photos.frontPorch },
      { label: "Rear Deck", ...photos.exteriorRearDeck },
      { label: "Hot Tub", ...photos.hotTub },
      { label: "Gas Grill", ...photos.gasGrill },
    ],
  },
  {
    title: "Living & Dining",
    photos: [
      { label: "Living Room", ...photos.livingRoom },
      { label: "Kitchen", ...photos.kitchen },
      { label: "Breakfast Bar", ...photos.breakfastBar },
      { label: "Dining Table", ...photos.diningTable },
    ],
  },
  {
    title: "Bedrooms",
    photos: [
      { label: "King Suite I", ...photos.kingSuite1 },
      { label: "King Suite II", ...photos.kingSuite2 },
      { label: "Queen Room", ...photos.queenRoom },
      { label: "Bunk Room", ...photos.bunkRoom },
      { label: "Twin Room", ...photos.twinRoom },
    ],
  },
  {
    title: "Rec Room, Bath & Stairs",
    photos: [
      { label: "Rec Room", ...photos.recRoom },
      { label: "Reading Nook", ...photos.readingNook },
      { label: "Bathroom", ...photos.bathroomShower },
      { label: "Stairwell", ...photos.stairwell },
    ],
  },
  {
    title: "Convenience",
    photos: [
      { label: "Keyless Entry", ...photos.keylessEntry },
      { label: "Laundry", ...photos.laundry },
    ],
  },
];

export default function GalleryPage() {
  return (
    <>
      <Section tone="ocean" className="text-center">
        <h1 className="font-display text-4xl sm:text-5xl">Photo Gallery</h1>
        <p className="mx-auto mt-4 max-w-xl text-sand-100">
          A closer look at every room, deck, and view at Wright by the Beach.
        </p>
      </Section>

      <Section tone="light">
        <GalleryGrid groups={galleryGroups} />
        <div className="mt-14 text-center">
          <CtaButton href="/book">Check availability</CtaButton>
        </div>
      </Section>
    </>
  );
}

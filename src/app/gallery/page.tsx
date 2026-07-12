import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { CtaButton } from "@/components/CtaButton";
import { GalleryGrid } from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Photo Gallery",
  description:
    "See every room, deck, and view at Wright by the Beach — a 5-bedroom oceanside vacation rental in Kill Devil Hills, NC.",
};

const galleryGroups: { title: string; photos: string[] }[] = [
  {
    title: "Exterior & Decks",
    photos: ["Front exterior", "Sun deck", "Covered deck", "Hot tub"],
  },
  {
    title: "Living & Dining",
    photos: ["Living room", "Kitchen", "Breakfast bar", "Dining table"],
  },
  {
    title: "Bedrooms",
    photos: ["King Suite I", "King Suite II", "Queen Room", "Bunk Room", "Twin Room"],
  },
  {
    title: "Rec Room & Views",
    photos: ["Foosball table", "Reading nook", "Ocean view", "Beach access walk"],
  },
];

export default function GalleryPage() {
  return (
    <>
      <Section tone="ocean" className="text-center">
        <h1 className="font-display text-4xl sm:text-5xl">Photo Gallery</h1>
        <p className="mx-auto mt-4 max-w-xl text-sand-100">
          {/* TODO(phase-0): replace placeholders with licensed listing photos */}
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

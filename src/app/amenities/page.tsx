import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { CtaButton } from "@/components/CtaButton";
import { amenityCategories } from "@/content/amenities";
import { property } from "@/content/property";

export const metadata: Metadata = {
  title: "Amenities",
  description:
    "Every amenity at Wright by the Beach: hot tub, ocean views, rec room, dog-friendly, keyless entry, free beach gear, and more in Kill Devil Hills, NC.",
};

export default function AmenitiesPage() {
  return (
    <>
      <Section tone="ocean" className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-ocean-200">{property.name}</p>
        <h1 className="mt-2 font-display text-4xl sm:text-5xl">Amenities</h1>
        <p className="mx-auto mt-4 max-w-xl text-sand-100">
          Everything included in your stay — no surprises, just a house built for a full week away.
        </p>
      </Section>

      <Section tone="light">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {amenityCategories.map((cat) => (
            <div key={cat.title} className="rounded-2xl bg-sand-100 p-6">
              <h2 className="font-display text-xl text-ocean-900">{cat.title}</h2>
              <ul className="mt-4 space-y-3 text-sm text-ink/80">
                {cat.items.map((item) => (
                  <li key={item.name}>
                    <span className="font-semibold text-ink">{item.name}</span>
                    {item.detail && <span className="text-ink/70"> — {item.detail}</span>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <CtaButton href="/book">Check availability</CtaButton>
        </div>
      </Section>
    </>
  );
}

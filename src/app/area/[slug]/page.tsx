import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Section } from "@/components/Section";
import { CtaButton } from "@/components/CtaButton";
import { PropertyImage } from "@/components/PropertyImage";
import { AnimatedCoastalVisual } from "@/components/AnimatedCoastalVisual";
import { attractions } from "@/content/attractions";
import { areaGuideBodies } from "@/content/areaGuides";
import { property } from "@/content/property";
import { photos, photoAttribution, restaurantPhotos } from "@/content/photos";

const attractionPhotoKeys: Partial<Record<string, keyof typeof photos>> = {
  "wright-brothers-memorial": "wrightBrothersMemorial",
  "avalon-pier": "avalonPier",
  "jockeys-ridge": "jockeysRidge",
  "bodie-island-lighthouse": "bodieIslandLighthouse",
  "nc-aquarium": "ncAquarium",
  "beach-access": "beachAccessMap",
};

export function generateStaticParams() {
  return attractions.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const attraction = attractions.find((a) => a.slug === slug);
  if (!attraction) return {};
  return {
    title: attraction.name,
    description: `${attraction.teaser} Located ${attraction.distance} from Wright by the Beach in Kill Devil Hills, NC.`,
  };
}

export default async function AttractionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const attraction = attractions.find((a) => a.slug === slug);
  if (!attraction) notFound();

  const bodyParagraphs = areaGuideBodies[attraction.slug] ?? [];
  const photoKey = attractionPhotoKeys[attraction.slug];
  const photo = photoKey ? photos[photoKey] : undefined;
  const attribution = photoKey ? photoAttribution[photoKey] : undefined;
  const isRestaurantGuide = attraction.slug === "kill-devil-hills-eats";
  const otherAttractions = attractions.filter((a) => a.slug !== attraction.slug);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Area Guide",
        item: "https://www.wrightbythebeach.com/area",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: attraction.name,
        item: `https://www.wrightbythebeach.com/area/${attraction.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Section tone="ocean">
        <nav className="text-xs text-sand-200">
          <Link href="/area" className="hover:text-sand-50">
            Area Guide
          </Link>{" "}
          / {attraction.name}
        </nav>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl">{attraction.name}</h1>
        <p className="mt-3 text-sand-100">
          {attraction.distance} from {property.name}
        </p>
      </Section>

      <Section tone="light">
        {isRestaurantGuide ? (
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="text-ink/80">{attraction.teaser}</p>
              {bodyParagraphs.length > 0 && (
                <div className="mt-6 space-y-4 text-ink/80">
                  {bodyParagraphs.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              )}
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-2">
              {restaurantPhotos.map((r) => (
                <div key={r.name}>
                  <PropertyImage {...r.photo} className="aspect-square rounded-xl" />
                  <p className="mt-2 text-sm font-medium text-ink/80">{r.name}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid gap-10 sm:grid-cols-2 sm:items-center">
            <div>
              <p className="text-ink/80">{attraction.teaser}</p>
              {bodyParagraphs.length > 0 && (
                <div className="mt-6 space-y-4 text-ink/80">
                  {bodyParagraphs.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              )}
            </div>
            <div>
              {photo ? (
                <PropertyImage {...photo} className="h-64 rounded-2xl sm:h-80" />
              ) : (
                <AnimatedCoastalVisual className="h-64 rounded-2xl sm:h-80" />
              )}
              {attribution && <p className="mt-2 text-xs text-ink/70">{attribution}</p>}
            </div>
          </div>
        )}

        <div className="mt-16 border-t border-sand-200 pt-10">
          <h2 className="font-display text-2xl text-ocean-900">More around the area</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {otherAttractions.map((a) => (
              <Link
                key={a.slug}
                href={`/area/${a.slug}`}
                className="block rounded-2xl bg-sand-50 p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-ocean-600">{a.distance}</p>
                <h3 className="mt-2 font-display text-lg text-ocean-900">{a.name}</h3>
                <p className="mt-2 text-sm text-ink/70">{a.teaser}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <CtaButton href="/book">Check availability</CtaButton>
        </div>
      </Section>
    </>
  );
}

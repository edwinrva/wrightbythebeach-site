import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Section } from "@/components/Section";
import { CtaButton } from "@/components/CtaButton";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { PropertyImage } from "@/components/PropertyImage";
import { attractions } from "@/content/attractions";
import { areaGuideBodies } from "@/content/areaGuides";
import { property } from "@/content/property";
import { photos } from "@/content/photos";

const attractionPhotos: Partial<Record<string, (typeof photos)[keyof typeof photos]>> = {
  "wright-brothers-memorial": photos.wrightBrothersMemorial,
  "avalon-pier": photos.avalonPier,
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
  const photo = attractionPhotos[attraction.slug];

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
          {photo ? (
            <PropertyImage {...photo} className="h-64 rounded-2xl sm:h-80" />
          ) : (
            <PhotoPlaceholder label={`${attraction.name} photo`} className="h-64 rounded-2xl sm:h-80" />
          )}
        </div>
        <div className="mt-12 text-center">
          <CtaButton href="/book">Check availability</CtaButton>
        </div>
      </Section>
    </>
  );
}

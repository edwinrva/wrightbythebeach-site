import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Section } from "@/components/Section";
import { CtaButton } from "@/components/CtaButton";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { attractions } from "@/content/attractions";
import { property } from "@/content/property";

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

  const isWrightBrothers = attraction.slug === "wright-brothers-memorial";

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
            {isWrightBrothers && (
              <div className="mt-6 space-y-4 text-ink/80">
                <p>
                  On December 17, 1903, Orville and Wilbur Wright achieved the first sustained,
                  controlled flight of a powered aircraft on the dunes of Kill Devil Hills — the
                  same town where our house sits today. It&apos;s the reason the home is named{" "}
                  <strong>Wright by the Beach</strong>.
                </p>
                <p>
                  The memorial includes a visitor center with a full-scale Wright Flyer
                  reproduction, the original flight markers showing the distance of each of the
                  four 1903 flights, and a granite monument atop Big Kill Devil Hill — a short,
                  worthwhile climb with sweeping views of the Outer Banks.
                </p>
                <p className="text-sm text-ink/60">
                  Check the National Park Service site for current hours and admission before you
                  go.
                </p>
              </div>
            )}
          </div>
          <PhotoPlaceholder label={`${attraction.name} photo`} className="h-64 rounded-2xl sm:h-80" />
        </div>
        <div className="mt-12 text-center">
          <CtaButton href="/book">Check availability</CtaButton>
        </div>
      </Section>
    </>
  );
}

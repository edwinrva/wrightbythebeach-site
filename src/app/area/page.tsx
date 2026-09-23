import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { CtaButton } from "@/components/CtaButton";
import { attractions } from "@/content/attractions";
import { breadcrumbJsonLd } from "@/lib/structuredData";

export const metadata: Metadata = {
  title: "Outer Banks Area Guide",
  description:
    "Explore Kill Devil Hills and the Outer Banks near Wright by the Beach: the Wright Brothers Memorial, Jockey's Ridge, Avalon Pier, beaches, and more.",
  alternates: {
    canonical: "/area",
  },
};

const areaFaqs = [
  {
    question: "Where is Wright by the Beach located?",
    answer:
      "Wright by the Beach is located in Kill Devil Hills, which sits between Kitty Hawk and Nags Head on the Outer Banks. The property is approximately 1 mile from the Wright Brothers National Memorial.",
  },
  {
    question: "What attractions are near Wright by the Beach?",
    answer:
      "Notable nearby attractions include the Wright Brothers National Memorial (about 1 mile away), Avalon Fishing Pier (about 1.5 miles, 5-minute drive), Jockey's Ridge State Park (about 6-7 miles, 12-15 minutes), NC Aquarium on Roanoke Island (about 15-16 miles, 25-30 minutes), and Bodie Island Lighthouse (about 14-16 miles, 25-30 minutes).",
  },
  {
    question: "What can you do at Jockey's Ridge State Park?",
    answer:
      "Jockey's Ridge State Park features the tallest natural sand dune system on the East Coast. Visitors can fly a kite, take a hang-gliding lesson, or watch the sunset.",
  },
  {
    question: "Are there restaurants near Wright by the Beach?",
    answer:
      "Yes, there are favorite local restaurants within a 5-10 minute drive, offering options ranging from burgers and craft beer to fish tacos.",
  },
];

const areaFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: areaFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function AreaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(areaFaqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd([{ name: "Area Guide", path: "/area" }])),
        }}
      />
      <Section tone="ocean" className="text-center">
        <h1 className="font-display text-4xl sm:text-5xl">The Outer Banks Area Guide from Wright by the Beach</h1>
        <p className="mx-auto mt-4 max-w-xl text-sand-100">
          Kill Devil Hills sits between Kitty Hawk and Nags Head — history, dunes, and beach all
          within a short drive of Wright by the Beach.
        </p>
      </Section>

      <Section tone="light">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {attractions.map((a) => (
            <Link
              key={a.slug}
              href={`/area/${a.slug}`}
              className="block rounded-2xl bg-sand-100 p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-ocean-600">{a.distance}</p>
              <h2 className="mt-2 font-display text-xl text-ocean-900">{a.name}</h2>
              <p className="mt-2 text-sm text-ink/70">{a.teaser}</p>
            </Link>
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-3xl divide-y divide-sand-200">
          {areaFaqs.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="cursor-pointer list-none font-display text-lg text-ocean-900 marker:content-none">
                <span className="flex items-center justify-between gap-4">
                  {faq.question}
                  <span className="text-ocean-600 transition-transform group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-3 text-ink/75">{faq.answer}</p>
            </details>
          ))}
        </div>

        <div className="mt-12 text-center">
          <CtaButton href="/book" trackingLocation="area_page">Check availability</CtaButton>
        </div>
      </Section>
    </>
  );
}

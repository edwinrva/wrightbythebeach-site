import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { CtaButton } from "@/components/CtaButton";
import { attractions } from "@/content/attractions";

export const metadata: Metadata = {
  title: "Outer Banks Area Guide",
  description:
    "Explore Kill Devil Hills and the Outer Banks near Wright by the Beach: the Wright Brothers Memorial, Jockey's Ridge, Avalon Pier, beaches, and more.",
};

export default function AreaPage() {
  return (
    <>
      <Section tone="ocean" className="text-center">
        <h1 className="font-display text-4xl sm:text-5xl">Outer Banks Area Guide</h1>
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
        <div className="mt-12 text-center">
          <CtaButton href="/book">Check availability</CtaButton>
        </div>
      </Section>
    </>
  );
}

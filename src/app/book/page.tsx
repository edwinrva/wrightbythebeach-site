import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { BookingWidget } from "@/components/BookingWidget";
import { property } from "@/content/property";

export const metadata: Metadata = {
  title: "Book Your Stay",
  description:
    "Check availability and book Wright by the Beach in Kill Devil Hills, NC — securely processed by Resort Realty.",
  alternates: {
    canonical: "/book",
  },
};

export default function BookPage() {
  return (
    <Section tone="light" className="min-h-[60vh]">
      <div className="mx-auto max-w-xl text-center">
        <h1 className="font-display text-4xl text-ocean-900 sm:text-5xl">Book Your Stay</h1>
        <p className="mt-4 text-ink/75">
          Pick your dates below. We&apos;ll take you straight to {property.manager}&apos;s secure
          checkout for {property.name}, with your dates already filled in.
        </p>
        <div className="mt-10">
          <BookingWidget source="book_page" />
        </div>
        <p className="mt-6 text-sm text-ink/70">
          Prefer to talk to someone? Call {property.manager} at{" "}
          <a href={`tel:${property.managerPhone.replace(/[^\d+]/g, "")}`} className="font-semibold text-ocean-800">
            {property.managerPhone}
          </a>
          .
        </p>
      </div>
    </Section>
  );
}

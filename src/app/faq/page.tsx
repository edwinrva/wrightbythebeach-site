import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { CtaButton } from "@/components/CtaButton";
import { faqs } from "@/content/faqs";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers about booking, pets, check-in, beach distance, and cancellation policy for Wright by the Beach, a Kill Devil Hills, NC vacation rental.",
  alternates: {
    canonical: "/faq",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Section tone="ocean" className="text-center">
        <h1 className="font-display text-4xl sm:text-5xl">Frequently Asked Questions</h1>
        <p className="mx-auto mt-4 max-w-xl text-sand-100">
          Everything you need to know before booking your stay.
        </p>
      </Section>

      <Section tone="light">
        <div className="mx-auto max-w-3xl divide-y divide-sand-200">
          {faqs.map((faq) => (
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
          <CtaButton href="/book" trackingLocation="faq_page">Check availability</CtaButton>
        </div>
      </Section>
    </>
  );
}

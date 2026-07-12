import Link from "next/link";
import { Section } from "@/components/Section";
import { CtaButton } from "@/components/CtaButton";
import { BookingWidget } from "@/components/BookingWidget";
import { PropertyImage } from "@/components/PropertyImage";
import { Reveal } from "@/components/Reveal";
import { property } from "@/content/property";
import { bedrooms, sleepingSummary } from "@/content/rooms";
import { amenityCategories } from "@/content/amenities";
import { attractions } from "@/content/attractions";
import { faqs } from "@/content/faqs";
import { photos } from "@/content/photos";
import { lodgingBusinessJsonLd } from "@/lib/structuredData";

export default function Home() {
  const wrightBrothers = attractions.find((a) => a.slug === "wright-brothers-memorial")!;
  const previewFaqs = faqs.slice(0, 4);
  const previewAttractions = attractions.slice(0, 4);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(lodgingBusinessJsonLd()) }}
      />
      {/* Hero */}
      <section className="relative overflow-hidden bg-ocean-900 text-sand-50">
        <PropertyImage {...photos.heroAerial} priority absolute objectPosition="70% center" />
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-900/40 via-ocean-900/45 to-ocean-900/80" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ocean-200">
            {property.address.city}, {property.address.state} · {property.address.region}
          </p>
          <h1 className="mt-4 max-w-2xl font-display text-4xl italic leading-tight sm:text-6xl">
            {property.tagline}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-sand-100">{property.headline}</p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-sand-100">
            {property.highlights.map((h) => (
              <span key={h} className="flex items-center gap-2">
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-ocean-200" />
                {h}
              </span>
            ))}
          </div>
          <div className="mt-10 max-w-xl">
            <BookingWidget />
          </div>
        </div>
      </section>

      {/* Story: the name origin */}
      <Section tone="light">
        <Reveal className="grid gap-10 sm:grid-cols-2 sm:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-ocean-600">
              Why &ldquo;Wright by the Beach&rdquo;
            </p>
            <h2 className="mt-3 font-display text-3xl text-ocean-900 sm:text-4xl">
              A name borrowed from history
            </h2>
            <p className="mt-4 text-ink/80">
              Kill Devil Hills is where Orville and Wilbur Wright proved powered flight was
              possible in December 1903 — {wrightBrothers.distance} from our front door. We
              named the house in their honor, and a visit to the {wrightBrothers.name} is the
              easiest, most meaningful day trip of your stay.
            </p>
            <Link
              href={`/area/${wrightBrothers.slug}`}
              className="mt-5 inline-block font-semibold text-ocean-800 underline underline-offset-4 hover:text-ocean-600"
            >
              Read the full story →
            </Link>
          </div>
          <PropertyImage {...photos.wrightBrothersMemorial} className="h-64 rounded-2xl sm:h-80" />
        </Reveal>
      </Section>

      {/* Rooms */}
      <Section id="rooms" tone="sand">
        <Reveal className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-ocean-600">Sleeping arrangements</p>
            <h2 className="mt-2 font-display text-3xl text-ocean-900 sm:text-4xl">
              Room for the whole crew — {sleepingSummary.totalSleeps} guests
            </h2>
          </div>
          <p className="text-ink/70">
            {sleepingSummary.bedrooms} bedrooms · {sleepingSummary.fullBaths} full baths ·{" "}
            {sleepingSummary.halfBaths} half bath
          </p>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {bedrooms.map((room, i) => (
            <Reveal key={room.name} delay={i * 0.05}>
              <div className="h-full rounded-2xl bg-sand-50 p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                <PropertyImage {...room.photo} className="mb-4 h-40 rounded-xl" />
                <h3 className="font-display text-xl text-ocean-900">{room.name}</h3>
                <p className="mt-1 text-sm text-ink/70">
                  {room.beds} · sleeps {room.sleeps}
                </p>
                {room.note && <p className="mt-2 text-sm text-ink/70">{room.note}</p>}
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Amenities */}
      <Section tone="light">
        <Reveal className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-ocean-600">Everything included</p>
            <h2 className="mt-2 font-display text-3xl text-ocean-900 sm:text-4xl">
              Amenities built for a full week away
            </h2>
          </div>
          <CtaButton href="/amenities" variant="secondary">
            See all amenities
          </CtaButton>
        </Reveal>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {amenityCategories.map((cat) => (
            <div key={cat.title}>
              <h3 className="font-display text-lg text-ocean-900">{cat.title}</h3>
              <ul className="mt-3 space-y-1 text-sm text-ink/75">
                {cat.items.slice(0, 3).map((item) => (
                  <li key={item.name}>{item.name}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Gallery teaser */}
      <Section tone="sand">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-ocean-600">See it for yourself</p>
            <h2 className="mt-2 font-display text-3xl text-ocean-900 sm:text-4xl">Explore the full gallery</h2>
          </div>
          <CtaButton href="/gallery" variant="secondary">
            View gallery
          </CtaButton>
        </Reveal>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { label: "Front Exterior", ...photos.exteriorFront },
            { label: "Living Room", ...photos.livingRoom },
            { label: "Hot Tub", ...photos.hotTub },
            { label: "Rec Room", ...photos.recRoom },
          ].map((photo) => (
            <Link key={photo.label} href="/gallery" className="block">
              <PropertyImage
                src={photo.src}
                alt={photo.alt}
                className="h-32 rounded-xl transition-transform duration-200 hover:scale-[1.02] sm:h-40"
              />
            </Link>
          ))}
        </div>
      </Section>

      {/* Booking */}
      <Section tone="light">
        <Reveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-ocean-600">Availability</p>
          <h2 className="mt-2 font-display text-3xl text-ocean-900 sm:text-4xl">
            Check dates for your week away
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink/70">
            Pick your check-in and check-out — we&apos;ll take you straight to Resort Realty&apos;s
            secure checkout with your dates already filled in.
          </p>
          <div className="mx-auto mt-8 max-w-xl">
            <BookingWidget />
          </div>
        </Reveal>
      </Section>

      {/* Area teaser */}
      <Section tone="sand">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-ocean-600">Beyond the house</p>
            <h2 className="mt-2 font-display text-3xl text-ocean-900 sm:text-4xl">
              Explore Kill Devil Hills &amp; the Outer Banks
            </h2>
          </div>
          <CtaButton href="/area" variant="secondary">
            Full area guide
          </CtaButton>
        </Reveal>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {previewAttractions.map((a, i) => (
            <Reveal key={a.slug} delay={i * 0.05}>
              <Link
                href={`/area/${a.slug}`}
                className="block h-full rounded-2xl bg-sand-50 p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-ocean-600">{a.distance}</p>
                <h3 className="mt-2 font-display text-lg text-ocean-900">{a.name}</h3>
                <p className="mt-2 text-sm text-ink/70">{a.teaser}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* FAQ preview */}
      <Section tone="light">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-wide text-ocean-600">Questions</p>
          <h2 className="mt-2 font-display text-3xl text-ocean-900 sm:text-4xl">Good to know before you book</h2>
        </Reveal>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {previewFaqs.map((faq) => (
            <div key={faq.question}>
              <h3 className="font-semibold text-ocean-900">{faq.question}</h3>
              <p className="mt-1 text-sm text-ink/70">{faq.answer}</p>
            </div>
          ))}
        </div>
        <CtaButton href="/faq" variant="secondary" className="mt-8">
          See all FAQs
        </CtaButton>
      </Section>

      {/* Final CTA */}
      <Section tone="ocean">
        <div className="text-center">
          <h2 className="font-display text-3xl sm:text-4xl">Ready for your week at the beach?</h2>
          <p className="mx-auto mt-4 max-w-xl text-sand-100">
            Check real-time availability and book securely through {property.manager} — your
            trusted local property manager.
          </p>
          <div className="mx-auto mt-8 max-w-xl">
            <BookingWidget />
          </div>
        </div>
      </Section>
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/sections/Hero";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/animation/FadeIn";
import CTABanner from "@/components/sections/CTABanner";
import {
  getBreadcrumbSchema,
  SUMMIT_HOUSE_DESCRIPTION,
  ORG_ID,
} from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Press & Media Kit — Summit House Napa",
  description:
    "Press kit for editorial coverage of Summit House Napa: brand description, key facts, downloadable high-resolution photography, brand voice notes, and press contact.",
  alternates: { canonical: "/press" },
  openGraph: {
    title: "Press & Media Kit — Summit House Napa",
    description:
      "Editorial resources for press coverage of Summit House Napa, a private 1969 A-frame rental at the summit of Mount Veeder.",
    images: [{ url: "/images/twilight-aerial-aframe-glowing.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Press & Media Kit — Summit House Napa",
    description: "Press kit for editorial coverage of Summit House Napa.",
    images: ["/images/twilight-aerial-aframe-glowing.jpg"],
  },
};

const QUICK_FACTS: { label: string; value: string }[] = [
  { label: "Property Type", value: "Restored 1969 A-frame rental" },
  { label: "Location", value: "Mount Veeder, Napa Valley, California" },
  { label: "Elevation", value: "Approximately 1,800 feet" },
  { label: "Size", value: "Three bedrooms, 2.5 bathrooms" },
  { label: "Sleeps", value: "Up to 11 guests" },
  { label: "Land", value: "Several private acres of ancient redwoods" },
  { label: "Year Built", value: "1969" },
  { label: "Year Renovated", value: "2026" },
  { label: "Minimum Stay", value: "31 nights (Napa County ordinance)" },
  { label: "Rate Range", value: "$12,000 – $18,000 per month, by season" },
  { label: "Distance to Downtown Napa", value: "15 minutes" },
  { label: "Distance to San Francisco", value: "1 hour" },
];

const PRESS_PHOTOS: { src: string; alt: string; caption: string }[] = [
  {
    src: "/images/twilight-aerial-aframe-glowing.jpg",
    alt: "Aerial view of Summit House A-frame glowing at twilight, nestled in ancient redwoods on Mount Veeder",
    caption: "Aerial — twilight",
  },
  {
    src: "/images/aerial-aframe-facade.jpg",
    alt: "Daytime aerial view of the A-frame facade with surrounding redwood forest",
    caption: "Aerial — facade",
  },
  {
    src: "/images/great-room-conversation-pit-windows.jpg",
    alt: "Great room with sunken conversation pit and floor-to-ceiling A-frame windows",
    caption: "Great room — conversation pit",
  },
  {
    src: "/images/twilight-conversation-pit.jpg",
    alt: "Sunken conversation pit illuminated by firelight at dusk",
    caption: "Conversation pit at dusk",
  },
  {
    src: "/images/twilight-hot-tub-illuminated.jpg",
    alt: "Hot tub illuminated at twilight overlooking Napa Valley",
    caption: "Hot tub — twilight",
  },
  {
    src: "/images/meditation-spot-redwoods.jpg",
    alt: "Meditation spot under ancient redwoods on the property",
    caption: "Meditation trail",
  },
  {
    src: "/images/exterior-front-driveway.jpg",
    alt: "A-frame rental viewed from the driveway, framed by lush greenery and redwoods",
    caption: "Exterior — driveway approach",
  },
  {
    src: "/images/twilight-deck-firepit-sunset.jpg",
    alt: "Deck firepit lounge at sunset with panoramic Napa Valley view",
    caption: "Deck firepit — sunset",
  },
];

export default function PressPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBreadcrumbSchema("Press", "/press")),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Press & Media Kit — Summit House Napa",
            url: "https://www.summithousenapa.com/press",
            description: "Editorial resources for press coverage of Summit House Napa.",
            about: { "@id": ORG_ID },
            publisher: { "@id": ORG_ID },
          }),
        }}
      />

      <Hero
        image="/images/twilight-aerial-aframe-glowing.jpg"
        title="Press & Media"
        subtitle="Editorial resources, high-resolution photography, and contact for press inquiries about Summit House Napa."
        alt="Aerial view of Summit House A-frame at twilight on Mount Veeder"
        overlayOpacity={0.45}
      />

      {/* Brand description */}
      <section className="bg-parchment py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 md:px-12">
          <FadeIn>
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-text-muted text-center">
              About Summit House
            </p>
            <p className="mt-6 font-serif text-xl md:text-2xl text-ink leading-relaxed text-center">
              {SUMMIT_HOUSE_DESCRIPTION}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6 md:px-12">
          <FadeIn>
            <SectionHeading
              title="Quick Facts"
              subtitle="Property fact sheet for editorial use."
            />
          </FadeIn>
          <FadeIn delay={0.1}>
            <dl className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              {QUICK_FACTS.map((fact) => (
                <div
                  key={fact.label}
                  className="flex flex-col gap-1 border-b border-charcoal/10 pb-4"
                >
                  <dt className="font-sans text-xs uppercase tracking-[0.18em] text-text-muted">
                    {fact.label}
                  </dt>
                  <dd className="font-serif text-lg text-ink">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </FadeIn>
        </div>
      </section>

      {/* Brand Voice */}
      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6 md:px-12">
          <FadeIn>
            <SectionHeading
              title="Brand Voice"
              subtitle="Quick guidelines for accurate editorial reference."
            />
          </FadeIn>
          <div className="mt-12 grid gap-12 md:grid-cols-2">
            <FadeIn delay={0.1}>
              <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-brass">
                Preferred Language
              </h3>
              <ul className="mt-5 flex flex-col gap-3 font-serif text-lg text-ink">
                <li>A-frame rental</li>
                <li>1969 A-frame</li>
                <li>Mountaintop residence</li>
                <li>Monthly residency</li>
                <li>Private retreat</li>
              </ul>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-text-muted">
                Please Avoid
              </h3>
              <ul className="mt-5 flex flex-col gap-3 font-serif text-lg text-ink/70">
                <li>Cabin</li>
                <li>Vacation home</li>
                <li>Airbnb listing</li>
                <li>Weekend rental</li>
                <li>Mountain shack</li>
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Boilerplate */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6 md:px-12">
          <FadeIn>
            <SectionHeading
              title="Boilerplate"
              subtitle="Approved descriptions in three lengths — drop directly into copy."
            />
          </FadeIn>
          <div className="mt-12 flex flex-col gap-12">
            <FadeIn delay={0.1}>
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-brass">
                Short — 25 words
              </p>
              <p className="mt-3 font-serif text-lg text-ink leading-relaxed">
                Summit House Napa is a private 1969 A-frame rental at the summit
                of Mount Veeder, available exclusively for 31-night-minimum
                residencies in Napa Valley.
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-brass">
                Medium — 60 words
              </p>
              <p className="mt-3 font-serif text-lg text-ink leading-relaxed">
                Summit House Napa is a renovated 1969 A-frame rental at the
                summit of Mount Veeder in Napa Valley, offered exclusively for
                31-night-minimum residencies. Three bedrooms on several private
                acres of ancient redwoods at 1,800 feet, with hot tub, infrared
                sauna, meditation trail, and Starlink internet — designed for
                remote work, creative retreats, and seasonal residencies.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-brass">
                Long — 130 words
              </p>
              <p className="mt-3 font-serif text-lg text-ink leading-relaxed">
                Summit House Napa is a private 1969 A-frame rental at the summit
                of Mount Veeder in Napa Valley, fully renovated in 2026 and
                offered exclusively for 31-night-minimum residencies under Napa
                County&rsquo;s short-term rental ordinance. Three bedrooms,
                2.5 bathrooms, and capacity for 11 guests sit on several private
                acres of ancient redwoods at 1,800 feet, well above the valley
                fog line. Wellness amenities include a hot tub, infrared sauna,
                outdoor shower, and meditation trail. The renovated interior
                preserves the original three joined A-frame geometry, sunken
                conversation pit, and river-rock hearth. Starlink satellite
                internet supports remote work; downtown Napa is 15 minutes
                away by car. Designed for extended stays — sabbaticals,
                creative retreats, harvest seasons, and remote-work months.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Logo download */}
      <section className="bg-white py-16 md:py-20 border-t border-charcoal/10">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          <FadeIn>
            <SectionHeading
              title="Logo"
              subtitle="Vector brand mark for editorial use. SVG format, scalable to any size."
            />
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="mt-10 flex flex-col items-center gap-6">
              <div className="bg-parchment px-12 py-10 w-full flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/summit-house-logo.svg"
                  alt="Summit House Napa logo"
                  width={315}
                  height={96}
                  className="max-w-full h-auto"
                />
              </div>
              <a
                href="/images/summit-house-logo.svg"
                download
                className="font-sans text-xs uppercase tracking-[0.18em] text-brass hover:text-ink transition-colors"
              >
                Download SVG &rarr;
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Photography */}
      <section className="bg-parchment py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <FadeIn>
            <SectionHeading
              title="Photography"
              subtitle="High-resolution photography for editorial use. Right-click any image to save, or use the link below it."
            />
          </FadeIn>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRESS_PHOTOS.map((photo, i) => (
              <FadeIn key={photo.src} delay={i * 0.05}>
                <figure className="flex flex-col gap-3">
                  <div className="relative aspect-[4/3] overflow-hidden bg-charcoal/5">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="flex flex-col gap-1">
                    <span className="font-serif text-base text-ink">
                      {photo.caption}
                    </span>
                    <a
                      href={photo.src}
                      download
                      className="font-sans text-xs uppercase tracking-[0.18em] text-brass hover:text-ink transition-colors"
                    >
                      Download &rarr;
                    </a>
                  </figcaption>
                </figure>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.4}>
            <p className="mt-12 text-center font-sans text-sm text-text-muted">
              Need a specific image, additional resolution, or
              non-watermarked exterior shots? Email{" "}
              <a
                href="mailto:stay@summithousenapa.com"
                className="text-brass hover:text-ink transition-colors"
              >
                stay@summithousenapa.com
              </a>
              .
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Press Contact */}
      <section className="bg-ink py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-12 text-center">
          <FadeIn>
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-brass">
              Press Contact
            </p>
            <h2 className="mt-4 font-serif font-extralight uppercase tracking-[4px] text-3xl md:text-4xl text-parchment">
              Editorial Inquiries
            </h2>
            <p className="mt-6 font-sans text-base md:text-lg text-parchment/80 leading-relaxed">
              For interviews, image requests, fact-checking, or press visit
              coordination, please reach the Summit House Napa press desk by
              email. We aim to respond within two business days.
            </p>
            <a
              href="mailto:stay@summithousenapa.com?subject=Press%20Inquiry"
              className="mt-8 inline-block font-serif text-xl md:text-2xl text-brass hover:text-parchment transition-colors"
            >
              stay@summithousenapa.com
            </a>
            <p className="mt-6 font-sans text-sm text-text-muted">
              Property location:{" "}
              <span className="text-parchment/70">Mount Veeder, Napa Valley, California</span>
            </p>
          </FadeIn>
        </div>
      </section>

      <CTABanner
        headline="Plan a press visit to Summit House"
        buttonLabel="Email Press Desk"
        buttonHref="mailto:stay@summithousenapa.com?subject=Press%20Visit%20Request"
      />

      {/* Pointer back to journal for editorial coverage of brand voice */}
      <section className="bg-white py-12 text-center">
        <Link
          href="/blog"
          className="font-sans text-xs uppercase tracking-[0.2em] text-text-muted hover:text-ink transition-colors"
        >
          Read the Summit House Journal &rarr;
        </Link>
      </section>
    </>
  );
}

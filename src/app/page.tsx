import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/animation/FadeIn";
import CTABanner from "@/components/sections/CTABanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Summit House Collection — Mount Veeder · Pacific Heights",
  description:
    "The Summit House Collection — a curated portfolio of furnished luxury residences. Mount Veeder, Napa Valley and Pacific Heights, San Francisco.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "The Summit House Collection — Mount Veeder · Pacific Heights",
    description:
      "A curated portfolio of furnished luxury residences. Mount Veeder, Napa Valley and Pacific Heights, San Francisco.",
    images: [{ url: "/images/twilight-aframe-facade-front.jpg", width: 1200, height: 630 }],
  },
};

const properties = [
  {
    name: "Summit House Napa",
    location: "Mount Veeder · Napa Valley",
    description:
      "A private 3-bedroom residence on three acres at the summit of Mount Veeder. Hot tub, sauna, panoramic valley views, and the stillness of life above the cloud line.",
    href: "/property",
    image: "/images/twilight-aframe-facade-front.jpg",
    alt: "Summit House Napa A-frame residence glowing at twilight among redwoods on Mount Veeder",
    cta: "Explore Napa",
  },
  {
    name: "Summit House Pied-à-Terre",
    location: "Pacific Heights · San Francisco",
    description:
      "A timelessly elegant two-bedroom flat on the top floor of an iconic Pacific Heights building. Original character throughout, fully reimagined interiors, and one of the city's best blocks.",
    href: "/pied-a-terre",
    image: "/photos/pied-a-terre/IMG_0156.jpg",
    alt: "Summit House Pied-à-Terre living room with bay windows and sage sofa in Pacific Heights",
    cta: "Explore the Pied-à-Terre",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-parchment py-32 md:py-44 text-center">
        <div className="mx-auto max-w-4xl px-6 md:px-12">
          <FadeIn>
            <p className="font-serif text-xs uppercase tracking-[4px] text-brass mb-7">
              A Private Portfolio
            </p>
            <h1 className="font-serif font-extralight uppercase tracking-[6px] text-5xl md:text-7xl lg:text-8xl text-ink leading-[1.1] mb-8">
              The Summit House
              <br />
              Collection
            </h1>
            <div className="w-16 h-px bg-brass mx-auto mb-8" aria-hidden="true" />
            <p className="font-sans text-lg md:text-xl text-text-muted leading-relaxed max-w-2xl mx-auto">
              A small portfolio of fully furnished residences, each carefully
              designed and held to a single standard of quality. Two locations —
              one above the valley, one in the heart of San Francisco — for
              those who would rather live somewhere well than visit it.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Properties */}
      <section className="bg-parchment pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <FadeIn>
            <SectionHeading
              title="Two Homes, One Standard"
              subtitle="Each residence in the collection is fully furnished, designer-curated, and offered for residencies of one month or longer."
            />
          </FadeIn>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
            {properties.map((property, i) => (
              <FadeIn key={property.name} delay={i * 0.15} direction="up">
                <Link href={property.href} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden mb-0">
                    <Image
                      src={property.image}
                      alt={property.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="bg-white p-8 md:p-10 text-center border-b border-brass">
                    <p className="font-serif text-[10px] uppercase tracking-[3px] text-brass mb-3">
                      The Residence
                    </p>
                    <h3 className="font-serif font-extralight uppercase tracking-[3px] text-2xl md:text-[26px] text-ink mb-2">
                      {property.name}
                    </h3>
                    <p className="font-serif text-[13px] uppercase tracking-[2.5px] text-charcoal mb-5">
                      {property.location}
                    </p>
                    <div className="w-10 h-px bg-brass mx-auto mb-5" aria-hidden="true" />
                    <p className="font-sans text-[15px] text-text-muted leading-relaxed mb-7">
                      {property.description}
                    </p>
                    <span className="font-serif text-[11px] uppercase tracking-[2.5px] text-ink border-b border-brass pb-1 transition-colors duration-200 group-hover:text-brass">
                      {property.cta} →
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Ethos */}
      <section className="bg-ink py-24 md:py-32 text-center">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          <FadeIn>
            <p className="font-serif text-xs uppercase tracking-[3px] text-brass mb-6">
              The Standard
            </p>
            <h2 className="font-serif font-extralight uppercase tracking-[4px] text-[32px] md:text-5xl text-parchment leading-tight mb-8">
              A Single Sensibility,
              <br />
              Two Locations
            </h2>
            <p className="font-sans text-[17px] text-parchment/70 leading-relaxed">
              Each home in the Summit House Collection is held to the same
              standard — fully furnished, considered in every room, and ready to
              live in. Designer-curated interiors, high-end linens, working
              kitchens, and the kind of details you only notice once you&apos;ve
              settled in. These are residences, not rentals — homes for a
              chapter of life, not a weekend.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        headline="Begin planning your stay"
        buttonLabel="Inquire Now"
        buttonHref="mailto:stay@summithousenapa.com?subject=Summit%20House%20Collection%20Inquiry"
      />
    </>
  );
}


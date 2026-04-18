import Hero from "@/components/sections/Hero";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/animation/FadeIn";
import CTABanner from "@/components/sections/CTABanner";
import Image from "next/image";
import Link from "next/link";
import { REVIEWS, PROPERTY } from "@/lib/constants";
import { getLodgingBusinessSchema } from "@/lib/structured-data";
import { getReviewStats } from "@/lib/reviews";

const pillars = [
  {
    title: "The Property",
    description:
      "A fully restored 1969 residence with a sunken conversation pit, designer finishes, and several acres of private land.",
    href: "/property",
    label: "A-frame residence with soaring ceilings and floor-to-ceiling windows",
    image: "/images/exterior-front-driveway.jpg",
  },
  {
    title: "The Experience",
    description:
      "Private meditation trails, an outdoor wellness suite, and evenings spent under ancient redwoods by the fire.",
    href: "/experience",
    label: "Guest relaxing in hot tub overlooking Napa Valley at sunset",
    image: "/images/twilight-hot-tub-illuminated.jpg",
  },
  {
    title: "The Setting",
    description:
      "Perched at the summit of Mount Veeder, surrounded by ancient redwoods, 15 minutes from downtown Napa.",
    href: "/location",
    label: "Panoramic view of Napa Valley from Mount Veeder summit",
    image: "/images/twilight-deck-firepit-sunset.jpg",
  },
];

const stats = [
  { end: 3, suffix: " BR", label: "Bedrooms" },
];

const signatureMoments = [
  "Morning sun filtering through ancient redwoods onto the meditation trail",
  "The sunken conversation pit glowing with firelight at dusk",
  "Steam rising from the hot tub beneath a canopy of stars",
];

export default async function Home() {
  const featuredReview = REVIEWS[0];
  const reviewStats = await getReviewStats();

  return (
    <>
      {/* Organization + WebSite schemas live in app/layout.tsx (site-wide). */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getLodgingBusinessSchema(reviewStats)) }}
      />
      {/* 1. Hero */}
      <Hero
        image="/images/twilight-aerial-aframe-glowing.jpg"
        title="Summit House Napa"
        subtitle="A private mountaintop retreat above Napa Valley — several acres of ancient redwoods at the peak of Mount Veeder."
        alt="Aerial view of Summit House A-frame glowing at twilight, nestled among ancient redwoods on Mount Veeder"
        cta={{ label: "Check Availability", href: "/availability" }}
      />

      {/* 2. Brand Statement Strip */}
      <section className="bg-ink py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6 md:px-12">
          <FadeIn>
            <div className="flex flex-col items-center gap-8">
              <div className="w-24 h-px bg-brass" aria-hidden="true" />
              <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-parchment text-center leading-relaxed">
                Most of Napa Valley is seen from the valley floor. This is
                seen from above it.
              </p>
              <div className="w-24 h-px bg-brass" aria-hidden="true" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2b. Definitional intro — sr-only, in DOM for AI crawlers + screen readers,
              hidden from sighted visitors (info is reinforced visually elsewhere on the page). */}
      <p className="sr-only">
        Summit House is a three-bedroom A-frame rental on Mount Veeder in Napa
        Valley, offered exclusively for 31-night-minimum residencies under Napa
        County&rsquo;s short-term rental ordinance. Set on several private acres
        of ancient redwoods at 1,800 feet, it is designed for extended stays —
        remote work, creative retreats, and seasonal residencies.
      </p>

      {/* 3. Three Pillars */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <FadeIn>
            <SectionHeading
              title="Discover Summit House"
              subtitle="Not a valley floor estate. Not a resort. A mountaintop of your own."
            />
          </FadeIn>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {pillars.map((pillar, i) => (
              <FadeIn key={pillar.title} delay={i * 0.15} direction="up">
                <div className="flex flex-col gap-6">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={pillar.image} alt={pillar.label} fill className="object-cover" />
                  </div>
                  <h3 className="font-serif font-light uppercase tracking-[2px] text-xl md:text-2xl text-ink">
                    {pillar.title}
                  </h3>
                  <p className="font-sans text-base text-text-muted leading-relaxed">
                    {pillar.description}
                  </p>
                  <Link
                    href={pillar.href}
                    className="font-sans text-xs uppercase tracking-[0.2em] text-brass hover:text-ink transition-colors"
                  >
                    Discover &rarr;
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Key Stats Bar */}
      <section className="bg-ink py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 md:gap-4 text-center">
            {[
              { value: `${stats[0].end}${stats[0].suffix}`, label: stats[0].label },
              { value: `${PROPERTY.bathrooms} BA`, label: "Bathrooms" },
              { value: `${PROPERTY.acres} Acres`, label: "Land" },
              { value: "Est. 1969", label: "Year Built", smallText: true },
              { value: "2026", label: "Renovated" },
              { value: `${PROPERTY.rating}`, label: "Rating" },
            ].map((item, i) => (
              <FadeIn key={item.label} delay={i * 0.2}>
                <div className="flex flex-col items-center gap-2">
                  <span className={`font-serif ${item.smallText ? "text-3xl md:text-4xl" : "text-4xl md:text-5xl"} text-brass ${item.smallText ? "whitespace-nowrap" : ""}`}>
                    {item.value}
                  </span>
                  <span className="font-sans text-xs uppercase tracking-[0.2em] text-parchment/70">
                    {item.label}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Signature Moments */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <FadeIn>
            <SectionHeading title="Signature Moments" />
          </FadeIn>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Large image left */}
            <FadeIn direction="left">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image src="/images/meditation-spot-redwoods.jpg" alt={signatureMoments[0]} fill className="object-cover" />
              </div>
            </FadeIn>
            {/* Two stacked images right */}
            <div className="flex flex-col gap-6">
              <FadeIn direction="right" delay={0.1}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src="/images/twilight-conversation-pit.jpg" alt={signatureMoments[1]} fill className="object-cover" />
                </div>
              </FadeIn>
              <FadeIn direction="right" delay={0.2}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src="/images/twilight-hot-tub-illuminated.jpg" alt={signatureMoments[2]} fill className="object-cover" />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Guest Quote */}
      <section className="bg-ink py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 md:px-12 text-center">
          <FadeIn>
            <div className="flex flex-col items-center gap-8">
              <div className="w-12 h-px bg-brass" aria-hidden="true" />
              <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-parchment italic leading-relaxed">
                &ldquo;{featuredReview.text}&rdquo;
              </blockquote>
              <div className="flex flex-col items-center gap-1">
                <span className="font-sans text-sm uppercase tracking-[0.2em] text-brass">
                  {featuredReview.name}
                </span>
                <span className="font-sans text-xs text-text-muted">
                  {featuredReview.date}
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 7. Availability Teaser */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 md:px-12 text-center">
          <FadeIn>
            <div className="flex flex-col items-center gap-8">
              <h2 className="font-serif font-extralight uppercase tracking-[4px] text-[32px] md:text-5xl text-ink leading-tight">
                Monthly Residency
              </h2>
              <p className="font-sans text-base md:text-lg text-text-muted leading-relaxed max-w-xl">
                Extended stays on Mount Veeder — priced by season. Utilities, WiFi, and all amenities included.
              </p>
              <Button variant="primary" href="/availability#inquiry">
                Inquire Now
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 8. CTA Banner */}
      <CTABanner
        headline="Begin planning your month on the mountain"
        buttonLabel="Check Availability"
        buttonHref="/availability"
      />
    </>
  );
}

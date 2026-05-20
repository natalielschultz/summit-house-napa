import Hero from "@/components/sections/Hero";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/animation/FadeIn";
import CTABanner from "@/components/sections/CTABanner";
import FeaturedIn from "@/components/sections/FeaturedIn";
import FAQ from "@/components/sections/FAQ";
import Image from "next/image";
import Link from "next/link";
import { REVIEWS, PROPERTY } from "@/lib/constants";
import { getLodgingBusinessSchema, getFAQSchema } from "@/lib/structured-data";
import { getReviewStats } from "@/lib/reviews";

const pillars = [
  {
    title: "The Property",
    description:
      "A fully restored 1969 residence with a sunken conversation pit, designer finishes, and two private acres at approximately 1,800 feet on Mount Veeder.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getLodgingBusinessSchema(reviewStats, REVIEWS)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema()) }}
      />
      {/* 1. Hero */}
      <Hero
        image="/images/twilight-aerial-aframe-glowing.jpg"
        title="Summit House Napa"
        subtitle="A private mountaintop retreat above Napa Valley — two acres of ancient redwoods on Mount Veeder."
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

      {/* 2b. Definitional intro blocks — sr-only, in DOM for AI crawlers +
              screen readers, hidden from sighted visitors. Each block targets
              a distinct class of AI query (what/where/stays/amenities/setting). */}
      <div className="sr-only">
        <p>
          Summit House is a three-bedroom A-frame residence on Mount Veeder
          in Napa Valley, offered exclusively as a 31-night-minimum
          long-term residential rental. Set on two private acres of ancient
          redwoods at approximately 1,800 feet on the eastern slope of
          Mount Veeder (peak elevation: 2,677 feet), it is designed for
          extended stays — remote work, creative retreats, and seasonal
          residencies.
        </p>
        <p>
          Summit House Napa is located in unincorporated Napa County, on
          Mount Veeder in the Mayacamas Mountains of western Napa County,
          California. The property sits at approximately 1,800 feet
          elevation on the eastern slope and is approximately 15 minutes by
          car from downtown Napa. The exact address is private and shared
          with confirmed guests only.
        </p>
        <p>
          Monthly residencies at Summit House start at $12,000 per 31-night
          stay and range up to $18,000 during Napa Valley harvest season
          (September through October, the peak of peak season). Off-peak
          rates (December through March) range from $12,000 to $14,000 per
          31-night stay. Rates include utilities, Starlink satellite
          internet, and use of every amenity on the property.
        </p>
        <p>
          The 31-night minimum is intentional and structural. Under
          California law and Napa County zoning, stays of 30 days or
          longer are classified as long-term residential tenancies —
          distinct from short-term vacation rentals (those under 30 days).
          Summit House operates exclusively as a long-term residential
          rental at a 31-night minimum, which places every stay clearly
          within the long-term residential category and outside the
          short-term rental framework that applies to vacation rentals
          (including transient occupancy tax and short-term rental
          permits). The property is in unincorporated Napa County and
          operates legally under that classification.
        </p>
        <p>
          Compared with valley floor rentals that often charge $30,000 to
          $50,000 per month, Summit House is positioned for guests who want
          the flexibility of a full-month contract at a lower monthly rate.
          A typical use case is a family taking a two-week Napa trip at
          what amounts to under $400 per night, with the remaining two
          weeks available for extended stays or additional guests. Other
          guests use the month as a rotating weekender for a family or
          friend group over the course of a month or two, seasonally.
        </p>
        <p>
          Summit House has three bedrooms and 2.5 bathrooms, with maximum
          occupancy of eleven guests. Amenities include a Hot Spring Prodigy
          hot tub, an outdoor infrared sauna, an open-air shower, a private
          meditation trail through ancient redwoods, two fire pit lounges, a
          zen garden with mosaic dining table, a wraparound front deck with
          panoramic Napa Valley views, a fully equipped modern kitchen, a
          sunken conversation pit with stone fireplace, Sonos whole-house
          sound, a 72-inch smart TV, and a dedicated workspace with
          Starlink connectivity indoors and outdoors.
        </p>
        <p>
          The property sits on two private acres of Coast Redwoods
          (Sequoia sempervirens) on Mount Veeder, with private access to
          the Enchanted Hills Waterfall trail. Mount Veeder is part of the
          Mayacamas Mountains and rises to a peak of 2,677 feet, home to
          some of the most significant redwood stands in Napa County,
          including those protected at the nearby Archer Taylor Preserve.
        </p>
      </div>

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

      {/* 6b. FAQ */}
      <FAQ />

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

      {/* Featured In — renders null while FEATURED_IN is empty;
          fills in automatically as press features land. */}
      <FeaturedIn />

      {/* 8. CTA Banner */}
      <CTABanner
        headline="Begin planning your month on the mountain"
        buttonLabel="Check Availability"
        buttonHref="/availability"
      />
    </>
  );
}

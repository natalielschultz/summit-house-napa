import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/sections/Hero";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/animation/FadeIn";
import CTABanner from "@/components/sections/CTABanner";
import {
  getBreadcrumbSchema,
  getMountVeederPlaceSchema,
  getLocationFaqSchema,
} from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Mount Veeder, Napa Valley — Location & Access | Summit House Napa",
  description:
    "Located at the summit of Mount Veeder, 15 minutes from downtown Napa. Proximity to wineries, restaurants, and San Francisco. Directions and travel tips.",
  alternates: { canonical: "/location" },
  openGraph: {
    title: "Mount Veeder, Napa Valley — Location & Access | Summit House Napa",
    description:
      "Located at the summit of Mount Veeder, 15 minutes from downtown Napa. Proximity to wineries, restaurants, and San Francisco.",
    images: [{ url: "/images/aerial-property-full.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mount Veeder, Napa Valley — Location & Access | Summit House Napa",
    description:
      "Located at the summit of Mount Veeder, 15 minutes from downtown Napa.",
    images: ["/images/aerial-property-full.jpg"],
  },
};

const proximityData = [
  {
    destination: "Downtown Napa",
    time: "15 min",
    note: "Restaurants, tasting rooms, Oxbow Public Market, and the Napa River waterfront.",
  },
  {
    destination: "Oakville Grocery",
    time: "10 min",
    note: "Napa's iconic gourmet stop for picnic supplies, wine, and artisan provisions.",
  },
  {
    destination: "Silverado Trail",
    time: "20 min",
    note: "The quieter route through Napa Valley's most celebrated vineyards and caves.",
  },
  {
    destination: "San Francisco",
    time: "1 hr 15 min",
    note: "An easy drive across the Golden Gate for world-class dining, culture, and coastline.",
  },
  {
    destination: "SFO Airport",
    time: "1 hr 15 min",
    note: "San Francisco International — the region's primary hub for domestic and international flights.",
  },
  {
    destination: "Oakland Airport",
    time: "1 hr",
    note: "A convenient alternative with shorter security lines and easy freeway access.",
  },
];

export default function LocationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbSchema("Mount Veeder", "/location")) }}
      />
      {/* Tier 2.2: TouristAttraction schema for Mount Veeder with geo coords +
          containedInPlace chain. Anchors the property to a recognized geographic entity. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getMountVeederPlaceSchema()) }}
      />
      {/* Tier 2.4: FAQPage with high-intent location queries. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getLocationFaqSchema()) }}
      />
      <Hero
        image="/images/aerial-property-full.jpg"
        title="Mount Veeder"
        subtitle="One of Napa Valley's most prestigious and storied appellations."
        alt="Aerial view of Summit House property nestled among redwoods at the summit of Mount Veeder"
      />

      {/* Mount Veeder Story */}
      <section className="bg-parchment py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <FadeIn className="lg:col-span-4">
              <SectionHeading
                title="The Mountain"
                subtitle="A place apart"
                align="left"
              />
            </FadeIn>
            <FadeIn delay={0.2} className="lg:col-span-8">
              <div className="space-y-6 font-sans text-base md:text-lg text-text leading-relaxed">
                <p>
                  Summit House Napa sits at approximately 1,800 feet of
                  elevation on Mount Veeder, a ridge in the Mayacamas
                  Mountains of western Napa County, California. The property
                  is 15 minutes by car from downtown Napa, reached by Redwood
                  Road and Mount Veeder Road as they climb through the range.
                  Mount Veeder is one of Napa Valley&rsquo;s 16 American
                  Viticultural Areas, distinguished by volcanic soils,
                  mature Coast Redwood (<em>Sequoia sempervirens</em>)
                  forest, and a microclimate that sits above the fog line
                  that typically settles on the valley floor &mdash; mornings
                  here are brighter, evenings cooler, and summer temperatures
                  several degrees lower than in the town below. The
                  three-bedroom, 2.5-bathroom 1969 A-frame rental occupies
                  two private acres of redwoods on the mountain, with
                  private access to the Enchanted Hills Waterfall trail and
                  panoramic views of Napa Valley.
                </p>
                <Link
                  href="/mount-veeder-napa-area-guide"
                  className="font-sans text-xs uppercase tracking-[0.2em] text-brass hover:text-ink transition-colors inline-block mt-2"
                >
                  Read our Mount Veeder Guide &rarr;
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Proximity Cards */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <FadeIn>
            <SectionHeading
              title="How Close You Are"
              subtitle="Mount Veeder feels remote, but everything is remarkably close."
            />
          </FadeIn>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {proximityData.map((item, i) => (
              <FadeIn key={item.destination} delay={i * 0.1}>
                <div className="border border-charcoal/10 p-8 flex flex-col gap-3 h-full">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-serif font-light uppercase tracking-[2px] text-xl text-ink">
                      {item.destination}
                    </h3>
                    <span className="font-sans text-sm text-brass uppercase tracking-wider whitespace-nowrap">
                      {item.time}
                    </span>
                  </div>
                  <div className="bg-brass h-px w-10" aria-hidden="true" />
                  <p className="font-sans text-sm text-text-muted leading-relaxed">
                    {item.note}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <FadeIn>
            <div className="bg-parchment border border-charcoal/10 flex flex-col items-center justify-center aspect-[16/7] w-full">
              <p className="font-serif text-2xl md:text-3xl text-ink mb-3">
                Interactive map coming soon
              </p>
              <p className="font-sans text-sm text-text-muted max-w-md text-center leading-relaxed">
                Summit House is located at the summit of Mount Veeder, approximately
                15 minutes from downtown Napa via a scenic mountain road. Exact
                address shared upon booking confirmation.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Getting Here */}
      <section className="bg-parchment py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <FadeIn className="lg:col-span-4">
              <SectionHeading
                title="Getting Here"
                subtitle="The drive is part of the experience"
                align="left"
              />
            </FadeIn>
            <FadeIn delay={0.2} className="lg:col-span-8">
              <div className="space-y-8">
                <div>
                  <h3 className="font-serif font-light uppercase tracking-[2px] text-xl text-ink mb-3">
                    From San Francisco or Oakland
                  </h3>
                  <p className="font-sans text-base text-text leading-relaxed">
                    Take I-80 East to Highway 37 West, then Highway 29 North into Napa.
                    From downtown Napa, follow Redwood Road west — it becomes Mount Veeder
                    Road as it climbs into the Mayacamas Mountains. The final stretch is a
                    winding, single-lane road through redwoods and madrones. Allow
                    approximately 15 minutes from downtown Napa to the property.
                  </p>
                </div>
                <div className="bg-brass h-px w-20" aria-hidden="true" />
                <div>
                  <h3 className="font-serif font-light uppercase tracking-[2px] text-xl text-ink mb-3">
                    The Mountain Road
                  </h3>
                  <p className="font-sans text-base text-text leading-relaxed">
                    Mount Veeder Road is a narrow, winding two-lane road that climbs roughly
                    1,800 feet in elevation. It is well-maintained but has no streetlights
                    and limited guardrails — take it slowly the first time, especially after
                    dark. Most guests come to love the drive as a ritual transition between
                    the valley and the summit, a threshold between the ordinary world and the
                    mountain.
                  </p>
                </div>
                <div className="bg-brass h-px w-20" aria-hidden="true" />
                <div>
                  <h3 className="font-serif font-light uppercase tracking-[2px] text-xl text-ink mb-3">
                    Winter Advisory
                  </h3>
                  <p className="font-sans text-base text-text leading-relaxed">
                    During the rainy season (November through March), we recommend an
                    all-wheel-drive or four-wheel-drive vehicle. The road can be slick after
                    rain, and occasional fallen branches may require careful navigation.
                    Your host will always provide road condition updates before your arrival and
                    throughout your stay.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <CTABanner
        headline="Plan your month on the mountain"
        buttonLabel="Check Availability"
        buttonHref="/availability"
      />
    </>
  );
}

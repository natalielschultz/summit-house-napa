import { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/animation/FadeIn";
import CTABanner from "@/components/sections/CTABanner";
import Image from "next/image";
import Link from "next/link";
import { getBreadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "The Experience — Trails, Wellness & Wine Country | Summit House Napa",
  description:
    "Discover daily life on Mount Veeder: private meditation trail to Enchanted Hills Waterfall, outdoor hot tub, infrared sauna, and Napa Valley wine country at your doorstep.",
  alternates: { canonical: "/experience" },
  openGraph: {
    title: "The Experience — Trails, Wellness & Wine Country | Summit House Napa",
    description:
      "Discover daily life on Mount Veeder: private meditation trail, outdoor hot tub, infrared sauna, and Napa Valley wine country at your doorstep.",
    images: [{ url: "/images/twilight-deck-lounge-sunset.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Experience — Trails, Wellness & Wine Country | Summit House Napa",
    description:
      "Discover daily life on Mount Veeder: private meditation trail, outdoor hot tub, infrared sauna, and wine country at your doorstep.",
    images: ["/images/twilight-deck-lounge-sunset.jpg"],
  },
};

const timeline = [
  {
    time: "Morning",
    hours: "7:00 – 10:00 AM",
    title: "Stillness & Light",
    description:
      "Begin on the private meditation trail, a winding path through ancient redwoods that leads to Enchanted Hills Waterfall. Return to the deck for coffee as the valley below fills with morning light. The silence here is not empty — it is layered with birdsong, wind through the canopy, and the particular stillness that only exists at 2,000 feet.",
    imageLabel:
      "Morning mist along the meditation trail through ancient redwoods",
    image: "/images/balcony-rattan-chairs.jpg",
  },
  {
    time: "Midday",
    hours: "10:00 AM – 2:00 PM",
    title: "Focus & Flow",
    description:
      "With Starlink satellite internet reaching every corner of the property, Summit House becomes a creative workspace without equal. Settle into the dedicated desk, the conversation pit, or a chair on the front deck — wherever focus finds you. The distance from the city is not a limitation here. It is the entire point. Writers, founders, and remote professionals have all found that the mountain sharpens their thinking.",
    imageLabel:
      "Laptop and coffee on the front deck with valley views beyond",
    image: "/images/living-room-sofa-redwood-view.jpg",
  },
  {
    time: "Afternoon",
    hours: "2:00 – 6:00 PM",
    title: "Restoration",
    description:
      "Step into the outdoor infrared sauna and let the warmth dissolve whatever the morning held. Follow it with the open-air shower — cold water, redwood canopy overhead, a practice in presence. Then sink into the hot tub, surrounded by ferns and ancient trunks, and watch the afternoon light shift through the trees. This is the rhythm of a long stay: not indulgence, but restoration.",
    imageLabel:
      "Outdoor infrared sauna nestled among ferns and redwood trunks",
    image: "/images/hot-tub-sauna-garden.jpg",
  },
  {
    time: "Evening",
    hours: "6:00 PM – Late",
    title: "Gathering & Stars",
    description:
      "As the sun sets behind the ridge, light one of the two fire pits and let the evening arrive slowly. The conversation pit — with its sunken design and stone fireplace — is where the best nights happen. Cook dinner in the fully equipped kitchen, open a bottle from a Mount Veeder winery, and settle in. On clear nights, step outside. At this elevation, with no light pollution, the stars are extraordinary.",
    imageLabel:
      "Fire pit glowing at dusk with redwood silhouettes against a starlit sky",
    image: "/images/twilight-deck-firepit-sunset.jpg",
  },
];

const wellnessSuite = [
  {
    title: "Hot Tub",
    description:
      "A Hot Spring Prodigy hot tub seats six and is tucked into a grove of redwoods and sword ferns. Morning soaks, afternoon recovery, midnight stargazing — it becomes the anchor of daily life on the mountain. The water is always ready. The view never gets old.",
    imageLabel:
      "Hot Spring Prodigy hot tub surrounded by ferns and redwood trunks",
    image: "/images/twilight-hot-tub-illuminated.jpg",
  },
  {
    title: "Infrared Sauna",
    description:
      "The outdoor infrared sauna sits among the trees, offering deep therapeutic heat in a setting that feels more like a forest ritual than a wellness amenity. Step out into cool mountain air, let the contrast wake every nerve, and understand why this is not a feature — it is a practice.",
    imageLabel:
      "Cedar infrared sauna with glass door opening onto the forest floor",
    image: "/images/infrared-sauna.jpg",
  },
  {
    title: "Outdoor Shower",
    description:
      "An open-air shower beneath the redwood canopy. Hot water, cold water, sky overhead, bark and fern at eye level. It is one of those experiences that sounds simple and turns out to be unforgettable. Guests mention it in every review. You will understand why.",
    imageLabel:
      "Open-air shower with natural stone base beneath towering redwoods",
    image: "/images/outdoor-shower.jpg",
  },
];

export default function ExperiencePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbSchema("The Experience", "/experience")) }}
      />
      {/* 1. Hero */}
      <Hero
        image="/images/twilight-deck-lounge-sunset.jpg"
        title="The Experience"
        subtitle="What happens when a month isn't a booking — it's a rhythm."
        alt="Deck lounge chairs overlooking Napa Valley at sunset from Mount Veeder"
      />

      {/* 2. Day Timeline */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <FadeIn>
            <SectionHeading
              title="What a Day Looks Like"
              subtitle="There is no itinerary. Only a rhythm that the mountain teaches you."
            />
          </FadeIn>
          <div className="mt-20 relative">
            {/* Vertical timeline line */}
            <div
              className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-brass/30 -translate-x-1/2 hidden md:block"
              aria-hidden="true"
            />
            <div className="flex flex-col gap-20 md:gap-28">
              {timeline.map((node, i) => {
                const isEven = i % 2 === 0;
                return (
                  <div
                    key={node.time}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center relative"
                  >
                    {/* Timeline dot */}
                    <div
                      className="absolute left-1/2 top-0 -translate-x-1/2 w-3 h-3 rounded-full bg-brass border-2 border-white hidden md:block"
                      aria-hidden="true"
                    />

                    {/* Content — alternates sides */}
                    <FadeIn
                      direction={isEven ? "left" : "right"}
                      className={isEven ? "" : "md:order-2"}
                    >
                      <div className="flex flex-col gap-4">
                        <div className="flex items-baseline gap-3">
                          <span className="font-sans text-xs uppercase tracking-[0.2em] text-brass">
                            {node.time}
                          </span>
                          <span className="font-sans text-xs text-text-muted">
                            {node.hours}
                          </span>
                        </div>
                        <h3 className="font-serif font-light uppercase tracking-[2px] text-xl md:text-2xl text-ink">
                          {node.title}
                        </h3>
                        <div
                          className="w-12 h-px bg-brass"
                          aria-hidden="true"
                        />
                        <p className="font-sans text-base text-text-muted leading-relaxed">
                          {node.description}
                        </p>
                      </div>
                    </FadeIn>

                    <FadeIn
                      direction={isEven ? "right" : "left"}
                      delay={0.15}
                      className={isEven ? "" : "md:order-1"}
                    >
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image src={node.image} alt={node.imageLabel} fill className="object-cover" />
                      </div>
                    </FadeIn>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Trail */}
      <section className="bg-ink py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <FadeIn direction="left">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image src="/images/meditation-spot-redwoods.jpg" alt="The private meditation trail winding through ancient redwoods toward Enchanted Hills Waterfall" fill className="object-cover" />
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.15}>
              <div className="flex flex-col gap-6">
                <span className="font-sans text-xs uppercase tracking-[0.2em] text-brass">
                  Private Trail
                </span>
                <h2 className="font-serif font-extralight uppercase tracking-[4px] text-[32px] md:text-5xl text-parchment leading-tight">
                  The Path to
                  <br />
                  Enchanted Hills
                </h2>
                <div className="w-16 h-px bg-brass" aria-hidden="true" />
                <p className="font-sans text-base md:text-lg text-parchment/70 leading-relaxed">
                  From the property, a private trail winds through old-growth
                  redwoods to Enchanted Hills Waterfall — a hidden cascade known
                  only to the handful of residents who share this ridge. The walk
                  takes fifteen minutes each way, and it will become the ritual
                  that shapes your mornings.
                </p>
                <p className="font-sans text-base text-parchment/70 leading-relaxed">
                  The trail is not groomed or manicured. It is real forest — soft
                  earth underfoot, light filtering through the canopy in
                  cathedral beams, the sound of water growing louder as you
                  approach. Guests who have stayed for months say this trail
                  alone was worth the stay. We believe them.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 4. Wellness Suite */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <FadeIn>
            <SectionHeading
              title="The Wellness Suite"
              subtitle="Three outdoor amenities that redefine what it means to unwind. All private. All surrounded by forest."
            />
          </FadeIn>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {wellnessSuite.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.15}>
                <div className="flex flex-col gap-6">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image src={item.image} alt={item.imageLabel} fill className="object-cover" />
                  </div>
                  <h3 className="font-serif font-light uppercase tracking-[2px] text-xl md:text-2xl text-ink">
                    {item.title}
                  </h3>
                  <div className="w-10 h-px bg-brass" aria-hidden="true" />
                  <p className="font-sans text-sm text-text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Outdoor Living */}
      <section className="bg-parchment py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <FadeIn direction="left">
              <div className="flex flex-col gap-6">
                <span className="font-sans text-xs uppercase tracking-[0.2em] text-brass">
                  2 Acres of Private Land
                </span>
                <h2 className="font-serif font-extralight uppercase tracking-[4px] text-[32px] md:text-5xl text-ink leading-tight">
                  Outdoor Living
                </h2>
                <div className="w-16 h-px bg-brass" aria-hidden="true" />
                <p className="font-sans text-base md:text-lg text-text-muted leading-relaxed">
                  Summit House sits on two acres of private land at the
                  summit of Mount Veeder. This is not a shared compound or a
                  resort with neighbors. It is your own ridge, your own forest,
                  your own silence.
                </p>
                <p className="font-sans text-base text-text-muted leading-relaxed">
                  The zen garden — anchored by a one-of-a-kind mosaic dining
                  table — is where most mornings begin and many dinners end. Two
                  fire pit lounges offer different vantage points for evening
                  gatherings. The wraparound front deck delivers the panoramic
                  view that stops every first-time guest mid-sentence: the full
                  sweep of Napa Valley, from the valley floor to the distant
                  ridgelines, changing light by the hour.
                </p>
                <p className="font-sans text-base text-text-muted leading-relaxed">
                  Total privacy. No shared walls. No visible neighbors. Most
                  Napa rentals put you among vineyards. This one puts you above
                  them.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.15}>
              <div className="flex flex-col gap-4">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src="/images/twilight-deck-dining-stringlights.jpg" alt="Deck dining at night with string lights and candles" fill className="object-cover" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative aspect-square overflow-hidden">
                    <Image src="/images/twilight-firepit-sauna-garden.jpg" alt="Fire pit lounge at twilight" fill className="object-cover" />
                  </div>
                  <div className="relative aspect-square overflow-hidden">
                    <Image src="/images/deck-lounge-redwoods-day.jpg" alt="Panoramic valley view from the front deck" fill className="object-cover" />
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 6. Wine Country Access */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6 md:px-12 text-center">
          <FadeIn>
            <div className="flex flex-col items-center gap-8">
              <span className="font-sans text-xs uppercase tracking-[0.2em] text-brass">
                Wine Country at Your Doorstep
              </span>
              <h2 className="font-serif font-extralight uppercase tracking-[4px] text-[32px] md:text-5xl text-ink leading-tight">
                Mount Veeder &amp; Beyond
              </h2>
              <div className="w-16 h-px bg-brass" aria-hidden="true" />
              <p className="font-sans text-base md:text-lg text-text-muted leading-relaxed max-w-2xl">
                Mount Veeder is one of Napa Valley&rsquo;s most celebrated
                appellations — known for small-production wines of extraordinary
                depth and character. Several acclaimed wineries sit within
                minutes of the property, and downtown Napa is just fifteen
                minutes down the mountain.
              </p>
              <p className="font-sans text-base text-text-muted leading-relaxed max-w-2xl">
                The beauty of living above the valley, not in it, is that
                wine country becomes a backdrop — not an itinerary. A Tuesday
                afternoon tasting, a Wednesday dinner in town, a bottle brought
                back to the fire pit. The valley is there when you want it. The
                mountain is there when you don&rsquo;t.
              </p>
              <Link
                href="/location"
                className="font-sans text-xs uppercase tracking-[0.2em] text-brass hover:text-ink transition-colors"
              >
                Explore the Location &rarr;
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 7. CTA Banner */}
      <CTABanner
        headline="Experience it yourself"
        buttonLabel="Check Availability"
        buttonHref="/availability"
      />
    </>
  );
}

import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/animation/FadeIn";
import Image from "next/image";
import CTABanner from "@/components/sections/CTABanner";
import { getBreadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Our Story — The Renovation & Philosophy | Summit House Napa",
  description:
    "How a 1969 A-frame cabin on Mount Veeder was restored into a luxury monthly retreat. The renovation journey, hosting philosophy, and why booking direct matters.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "Our Story — The Renovation & Philosophy | Summit House Napa",
    description:
      "How a 1969 A-frame cabin on Mount Veeder was restored into a luxury monthly retreat. The renovation journey and hosting philosophy.",
    images: [{ url: "/images/twilight-great-room-chandelier.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Story — The Renovation & Philosophy | Summit House Napa",
    description:
      "How a 1969 A-frame cabin on Mount Veeder was restored into a luxury monthly retreat.",
    images: ["/images/twilight-great-room-chandelier.jpg"],
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbSchema("Our Story", "/about")) }}
      />
      <Hero
        image="/images/twilight-great-room-chandelier.jpg"
        title="The Story"
        subtitle="How a 1969 A-frame became a mountaintop sanctuary."
        alt="Summit House great room chandelier glowing warmly beneath the A-frame roofline at dusk"
      />

      {/* Origin */}
      <section className="bg-parchment py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <FadeIn className="lg:col-span-4">
              <SectionHeading
                title="The Discovery"
                align="left"
              />
              <div className="mt-8 relative aspect-[3/4] overflow-hidden">
                <Image src="/images/exterior-front-driveway.jpg" alt="Summit House exterior nestled among ancient redwoods" fill className="object-cover" />
              </div>
            </FadeIn>
            <FadeIn delay={0.2} className="lg:col-span-8 flex items-center">
              <div className="space-y-6 font-sans text-base md:text-lg text-text leading-relaxed">
                <p>
                  Summit House sits at the very summit of Mount Veeder, tucked
                  among ancient redwoods at the end of a winding mountain road.
                  When the property was first discovered, it had been quietly
                  aging for decades — a 1969 A-frame cabin with extraordinary
                  bones, cathedral ceilings, massive windows facing the forest,
                  and two acres of wild, private land. The air was
                  different up there — cooler, cleaner, impossibly quiet. Not
                  just a house, but a feeling: the sense that the rest of the
                  world had been gently set aside.
                </p>
                <p>
                  It was immediately clear that this was something rare — a
                  property with the kind of natural setting and architectural
                  character that couldn&rsquo;t be replicated. The question was
                  never whether to restore it, but how to do so in a way that
                  honored what made it special in the first place.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* The Renovation */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <FadeIn>
            <SectionHeading
              title="The Renovation"
              subtitle="Two years of careful, intentional transformation."
            />
          </FadeIn>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
            <FadeIn>
              <div className="flex flex-col gap-4">
                <div className="bg-surface flex items-center justify-center text-text-muted text-sm aspect-video">
                  Before — original A-frame exterior, 2021
                </div>
                <span className="font-sans text-xs uppercase tracking-[0.15em] text-text-muted">
                  Before
                </span>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="flex flex-col gap-4">
                <div className="relative aspect-video overflow-hidden">
                  <Image src="/images/great-room-conversation-pit-wide.jpg" alt="After — renovated interior with sunken lounge" fill className="object-cover" />
                </div>
                <span className="font-sans text-xs uppercase tracking-[0.15em] text-text-muted">
                  After
                </span>
              </div>
            </FadeIn>
          </div>
          <FadeIn delay={0.3}>
            <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
              <div className="lg:col-span-6 space-y-6 font-sans text-base text-text leading-relaxed">
                <p>
                  The renovation began with the essentials: a complete new roof,
                  upgraded electrical and plumbing systems, and structural
                  reinforcement of the original A-frame. Every decision was guided
                  by a simple principle — honor the architecture. The dramatic
                  roofline, the soaring windows, the way light enters each room —
                  these were the elements that made the house worth saving, and they
                  had to remain at the center of the design.
                </p>
              </div>
              <div className="lg:col-span-6 space-y-6 font-sans text-base text-text leading-relaxed">
                <p>
                  From there, every surface was reimagined. The kitchen was rebuilt
                  with modern appliances and custom cabinetry. The bathrooms were
                  gutted and redesigned with designer tile and fixtures. Outside,
                  the Hot Spring Prodigy hot tub, an infrared sauna, the open-air
                  shower, two fire pit lounges, and the zen garden with its mosaic
                  dining table were added. The result is a property that feels both
                  timeless and entirely new — a place where mid-century character
                  meets contemporary luxury.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Why Book Direct */}
      <section className="bg-ink py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <FadeIn className="lg:col-span-5">
              <SectionHeading
                title="Why Book Direct"
                subtitle="A different kind of experience."
                align="left"
                light
              />
            </FadeIn>
            <FadeIn delay={0.2} className="lg:col-span-7 flex items-center">
              <div className="space-y-6 font-sans text-base md:text-lg text-parchment/80 leading-relaxed">
                <p>
                  Booking through a platform means dealing with an algorithm.
                  Booking directly means working with a dedicated host who knows
                  this property and this mountain inside and out. Every inquiry
                  is answered personally. Recommendations are tailored to your
                  interests — whether that means the best tasting rooms for
                  natural wine, the quietest trail for a morning run, or the
                  restaurant where the chef will come to your table. Your host is
                  available before, during, and after your stay — not because
                  it&rsquo;s a policy, but because making your time on the mountain
                  extraordinary is the whole point.
                </p>
                <p>
                  Direct booking also means no platform fees, no corporate
                  middleman, and no generic communication. It means flexibility
                  when plans change, honest answers to every question, and the
                  peace of mind that comes from working directly with someone who
                  knows and loves this property deeply.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <CTABanner
        headline="Have questions? We'd love to hear from you."
        buttonLabel="Get in Touch"
        buttonHref="/availability"
      />
    </>
  );
}

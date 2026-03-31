import { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/animation/FadeIn";
import CTABanner from "@/components/sections/CTABanner";
import Image from "next/image";
import { AMENITIES, PROPERTY } from "@/lib/constants";
import { getVacationRentalSchema, getBreadcrumbSchema } from "@/lib/structured-data";
import PropertyNavChips from "@/components/ui/PropertyNavChips";

export const metadata: Metadata = {
  title: "The Property — Restored 1969 A-Frame Cabin | A-Frame of Napa",
  description:
    "Tour a fully restored 1969 A-frame cabin on Mount Veeder. 3BR/2.5BA, 2 acres, hot tub, infrared sauna, sunken conversation pit, and panoramic Napa Valley views.",
  alternates: { canonical: "/property" },
  openGraph: {
    title: "The Property — Restored 1969 A-Frame Cabin | A-Frame of Napa",
    description:
      "Tour a fully restored 1969 A-frame cabin on Mount Veeder. 3BR/2.5BA, 2 acres, hot tub, infrared sauna, and panoramic Napa Valley views.",
    images: [{ url: "/images/aframe-exterior-foggy.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Property — Restored 1969 A-Frame Cabin | A-Frame of Napa",
    description:
      "Tour a fully restored 1969 A-frame cabin on Mount Veeder. 3BR/2.5BA, 2 acres, hot tub, infrared sauna, and panoramic Napa Valley views.",
    images: ["/images/aframe-exterior-foggy.jpg"],
  },
};

const quickSpecs = [
  { value: `${PROPERTY.bedrooms} BR`, label: "Bedrooms" },
  { value: `${PROPERTY.bathrooms} BA`, label: "Bathrooms" },
  { value: `${PROPERTY.acres} Acres`, label: "Land" },
  { value: `Est. ${PROPERTY.yearBuilt}`, label: "Year Built" },
  { value: "2026", label: "Renovated" },
  { value: `${PROPERTY.rating}`, label: "Rating" },
];

const roomTour = [
  {
    id: "great-room",
    title: "Great Room & Conversation Pit",
    description:
      "The heart of the A-Frame is a soaring double-height great room crowned by the iconic triangular roofline. Floor-to-ceiling windows fill the space with filtered light from the surrounding redwoods. At its center, a sunken conversation pit — restored with custom cushions and anchored by a stone fireplace — invites the kind of slow, lingering evenings that define life on the mountain. The Sonos sound system fills the room with warmth, whether it is morning jazz or evening silence you are after.",
    imageLabel: "Double-height great room with sunken conversation pit and stone fireplace",
    image: "/images/great-room-window-wall.jpg",
    direction: "left" as const,
  },
  {
    id: "bedrooms",
    title: "Primary Bedroom",
    description:
      "The primary suite occupies the upper loft of the A-frame, where the roofline meets at its peak. Wake to dappled light through the redwoods and the quiet of two acres of private land. The room features a king bed with luxury linens, designer lighting, and an en-suite bathroom with modern finishes. It is the kind of room where you lose track of which day it is — and that is the point.",
    imageLabel: "Loft primary bedroom with king bed tucked beneath the A-frame peak",
    image: "/images/conversation-pit-closeup.jpg",
    direction: "right" as const,
  },
  {
    id: undefined,
    title: "Guest Bedrooms",
    description:
      "Two additional bedrooms on the main level provide comfortable retreats for guests or family. Each is thoughtfully appointed with quality mattresses, soft linens, and the quiet insulation that comes from being surrounded by forest. Whether welcoming friends for part of your stay or settling in for a multi-month creative retreat, every guest sleeps well on Mount Veeder.",
    imageLabel: "Guest bedroom with warm textiles and natural wood accents",
    image: "/images/sunrise-from-loft.jpg",
    direction: "left" as const,
  },
  {
    id: "kitchen",
    title: "Kitchen",
    description:
      "Fully equipped for the kind of cooking that a month-long stay demands — not just reheating, but real meals. Modern appliances, ample counter space, quality cookware, and a layout that makes the kitchen feel like part of the living experience rather than a utility room. Open a bottle of Mount Veeder wine, put something on the stove, and let the evening unfold.",
    imageLabel: "Modern kitchen with open shelving and view into the great room",
    image: "/images/living-room-full-view.jpg",
    direction: "right" as const,
  },
  {
    id: "outdoor",
    title: "Outdoor Spaces",
    description:
      "The property extends far beyond the cabin walls. A wraparound front deck offers panoramic views of Napa Valley — the kind of vista that changes with every hour and every season. The zen garden, with its handmade mosaic dining table, is a place for morning coffee or afternoon reading. Two fire pit lounges anchor the evenings. And everywhere, the redwoods stand watch, ancient and still.",
    imageLabel: "Front deck with panoramic valley views framed by towering redwoods",
    image: "/images/garden-pathway-brick.jpg",
    direction: "left" as const,
  },
];

const amenityCategories = [
  { title: "Wellness", items: AMENITIES.wellness },
  { title: "Outdoor", items: AMENITIES.outdoor },
  { title: "Interior", items: AMENITIES.interior },
  { title: "Work & Connectivity", items: AMENITIES.work },
];

const galleryItems = [
  { label: "A-frame exterior at golden hour through the redwoods", image: "/images/living-room-full-chandelier.jpg" },
  { label: "Conversation pit with fireplace glowing at dusk", image: "/images/sunken-lounge-colorful.jpg" },
  { label: "Hot tub nestled among ferns and redwood trunks", image: "/images/hanging-chair-sunlit.jpg" },
  { label: "Morning light streaming through the great room windows", image: "/images/sofa-window-trees.jpg" },
  { label: "Zen garden mosaic table set for dinner", image: "/images/deck-dining-table-trees.jpg" },
  { label: "Meditation trail winding through ancient forest", image: "/images/hot-tub-night.jpg" },
  { label: "Primary loft bedroom with peak ceiling detail", image: "/images/exterior-peak-lookingup.jpg" },
  { label: "Front deck panoramic view of Napa Valley", image: "/images/great-room-overhead-wide.jpg" },
];

export default function PropertyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getVacationRentalSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbSchema("The Property", "/property")) }}
      />
      {/* 1. Hero */}
      <Hero
        image="/images/aframe-exterior-foggy.jpg"
        title="The Property"
        subtitle="A fully restored 1969 A-frame cabin, reimagined for the modern long-stay guest."
      />

      {/* Nav Chips */}
      <PropertyNavChips />

      {/* 2. Quick Specs */}
      <section className="bg-ink py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 text-center">
            {quickSpecs.map((spec) => (
              <div key={spec.label} className="flex flex-col items-center gap-1">
                <span className="font-serif text-xl md:text-2xl text-brass">
                  {spec.value}
                </span>
                <span className="font-sans text-xs uppercase tracking-[0.2em] text-parchment/60">
                  {spec.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Room Tour */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <FadeIn>
            <SectionHeading
              title="A Tour of the A-Frame"
              subtitle="Every room has been restored with intention — honoring the 1969 architecture while equipping every corner for modern comfort."
            />
          </FadeIn>
          <div className="mt-20 flex flex-col gap-24 md:gap-32">
            {roomTour.map((room, i) => {
              const imageOnLeft = i % 2 === 0;
              return (
                <div
                  key={room.title}
                  id={room.id}
                  className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center ${
                    !imageOnLeft ? "md:[direction:rtl]" : ""
                  }`}
                >
                  <FadeIn direction={imageOnLeft ? "left" : "right"}>
                    <div className="relative aspect-[4/3] overflow-hidden md:[direction:ltr]">
                      <Image src={room.image} alt={room.imageLabel} fill className="object-cover" />
                    </div>
                  </FadeIn>
                  <FadeIn
                    direction={imageOnLeft ? "right" : "left"}
                    delay={0.15}
                  >
                    <div className="flex flex-col gap-4 md:[direction:ltr]">
                      <h3 className="font-serif text-2xl md:text-3xl text-ink">
                        {room.title}
                      </h3>
                      <div className="w-16 h-px bg-brass" aria-hidden="true" />
                      <p className="font-sans text-base text-text-muted leading-relaxed">
                        {room.description}
                      </p>
                    </div>
                  </FadeIn>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Amenities Grid */}
      <section id="amenities" className="bg-parchment py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <FadeIn>
            <SectionHeading
              title="Amenities"
              subtitle="Everything included in your monthly stay — no hidden fees, no nickel-and-diming."
            />
          </FadeIn>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {amenityCategories.map((cat) => (
              <FadeIn key={cat.title}>
                <div className="flex flex-col gap-4">
                  <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-sage font-medium">{cat.title}</h3>
                  <div className="w-10 h-px bg-sage/40" aria-hidden="true" />
                  <ul className="flex flex-col gap-3">
                    {cat.items.map((item) => (
                      <li
                        key={item}
                        className="font-sans text-sm text-text-muted leading-relaxed"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Photo Gallery */}
      <section id="gallery" className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <FadeIn>
            <SectionHeading title="Gallery" />
          </FadeIn>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryItems.map((item, i) => (
              <FadeIn key={item.label} delay={i * 0.05}>
                <div
                  className={`relative overflow-hidden ${
                    i === 0 || i === 5
                      ? "aspect-[4/3] md:col-span-2 md:row-span-2 md:aspect-square"
                      : "aspect-square"
                  }`}
                >
                  <Image src={item.image} alt={item.label} fill className="object-cover" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA Banner */}
      <CTABanner
        headline="Ready to make it yours?"
        buttonLabel="Check Availability"
        buttonHref="/availability"
        variant="brass"
      />
    </>
  );
}

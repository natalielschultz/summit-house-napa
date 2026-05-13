import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/animation/FadeIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Summit House Pied-à-Terre — Pacific Heights, San Francisco",
  description:
    "A timelessly elegant top-floor flat in Pacific Heights, San Francisco. Two bedrooms, 1.5 baths, fully furnished. Part of the Summit House Collection.",
  alternates: {
    canonical: "/pied-a-terre",
  },
  openGraph: {
    title: "Summit House Pied-à-Terre — Pacific Heights, San Francisco",
    description:
      "A timelessly elegant top-floor flat in Pacific Heights, San Francisco. Two bedrooms, 1.5 baths, fully furnished.",
    images: [{ url: "/photos/pied-a-terre/IMG_0156.jpg", width: 1200, height: 630 }],
  },
};

const features = [
  {
    title: "Kitchen",
    description:
      "Brand-new chef's kitchen with all-new appliances, knives, and full tool set.",
  },
  {
    title: "Bathrooms",
    description:
      "Both bathrooms newly renovated — a full bath plus a generously sized powder room.",
  },
  {
    title: "Floors",
    description:
      "All-new flooring throughout, finished to complement the original architectural details.",
  },
  {
    title: "Architecture",
    description:
      "Original bay windows, stained glass, arched windows, and crown moldings preserved throughout.",
  },
  {
    title: "Light & Quiet",
    description:
      "Top-floor position with natural sunlight, private roof access, and blackout shades in the bedroom.",
  },
  {
    title: "Linens & Textiles",
    description:
      "High-end linens, designer drapery, and considered window dressings in every room.",
  },
];

const specs = [
  { label: "Address", value: "1871 Sacramento Street, San Francisco" },
  { label: "Layout", value: "2 bedrooms · 1.5 bathrooms" },
  { label: "Position", value: "Top floor, back of building" },
  { label: "Building", value: "Iconic six-unit historic flat" },
  { label: "Roof Access", value: "Private" },
  { label: "Furnishings", value: "Fully furnished, designer-curated" },
  { label: "Kitchen", value: "Chef's kitchen with full tools" },
  { label: "Updates", value: "Renovated in 2025" },
  { label: "Laundry", value: "Washer and dryer (basement level)" },
  { label: "Entry", value: "Secure gated entry · front and back doors" },
  { label: "Utilities", value: "All utilities included" },
  { label: "Policy", value: "No smoking · No pets" },
];

const nearby = [
  { place: "Lafayette Park", distance: "Across the street" },
  { place: "Whole Foods", distance: "1 block" },
  { place: "Trader Joe's", distance: "3 blocks" },
  { place: "Fillmore Street", distance: "5-min walk" },
  { place: "Polk Street", distance: "5-min walk" },
  { place: "Marina shops & dining", distance: "Walking distance" },
  { place: "Public transit", distance: "Steps away" },
];

const galleryPhotos = [
  { src: "/photos/pied-a-terre/IMG_0128.jpg", alt: "Dramatic entry hallway with vaulted ceiling and dark accent walls", tall: true },
  { src: "/photos/pied-a-terre/IMG_0133.jpg", alt: "Dining room with stone-topped table and brass dome pendant" },
  { src: "/photos/pied-a-terre/IMG_0137_3.jpg", alt: "Dining room editorial angle with gallery wall and eclectic chairs" },
  { src: "/photos/pied-a-terre/IMG_0125.jpg", alt: "Powder room with Scalamandré zebra wallpaper and candle chandelier" },
  { src: "/photos/pied-a-terre/IMG_0144.jpg", alt: "Framed view from hallway into the dining room" },
];

export default function PiedATerre() {
  return (
    <>
      {/* Hero — centered text */}
      <section className="bg-parchment py-28 md:py-40 text-center">
        <div className="mx-auto max-w-4xl px-6 md:px-12">
          <FadeIn>
            <p className="font-serif text-xs uppercase tracking-[4px] text-brass mb-6">
              The Summit House Collection
            </p>
            <h1 className="font-serif font-extralight uppercase tracking-[6px] text-5xl md:text-7xl text-ink leading-[1.1] mb-6">
              Summit House
              <br />
              Pied-à-Terre
            </h1>
            <p className="font-serif font-light text-lg uppercase tracking-[3px] text-charcoal mb-12">
              Pacific Heights · San Francisco
            </p>
            <div className="w-16 h-px bg-brass mx-auto mb-12" aria-hidden="true" />
            <p className="font-sans text-lg text-text-muted leading-relaxed max-w-2xl mx-auto">
              A timelessly elegant two-bedroom flat on the top floor of an
              iconic Pacific Heights building. Original architectural detail,
              fully reimagined interiors, and one of the most coveted addresses
              in San Francisco — a quiet block beside Lafayette Park.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Hero Image */}
      <FadeIn>
        <div className="relative w-full aspect-[16/9] md:aspect-[2.4/1]">
          <Image
            src="/photos/pied-a-terre/IMG_0156.jpg"
            alt="Living room with arched bay windows and sage green sofa at Summit House Pied-à-Terre"
            fill
            className="object-cover"
            priority
          />
        </div>
      </FadeIn>

      {/* The Residence */}
      <section className="bg-parchment py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <div>
                <p className="font-serif text-xs uppercase tracking-[3px] text-brass mb-4">
                  The Residence
                </p>
                <h2 className="font-serif font-extralight uppercase tracking-[4px] text-[32px] md:text-5xl text-ink leading-tight mb-8">
                  Original Character,
                  <br />
                  Considered Throughout
                </h2>
                <div className="space-y-5 font-sans text-base md:text-[17px] text-text-muted leading-relaxed">
                  <p>
                    Set on the top floor of a stately six-unit building at 1871
                    Sacramento Street, the Pied-à-Terre brings together two
                    sensibilities that rarely live well together — historic San
                    Francisco architecture and a fully realized contemporary
                    interior.
                  </p>
                  <p>
                    Original bay windows frame the rooms. Stained glass, arched
                    windows, and crown moldings remain intact — the kind of
                    detail that defines this era of San Francisco flats and can
                    never be reproduced. Every other surface has been
                    thoughtfully renewed: new floors, new bathrooms, a new
                    kitchen, fresh paint throughout.
                  </p>
                  <p>
                    The result is a residence with the quiet confidence of a home
                    that has been lived in well — preserved where it should be,
                    and renewed everywhere else.
                  </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/photos/pied-a-terre/IMG_0140.jpg"
                  alt="Living room with sage green sofa and bay windows"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* The Design */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <div className="relative aspect-[4/5] overflow-hidden order-2 md:order-1">
                <Image
                  src="/photos/pied-a-terre/IMG_0137_3.jpg"
                  alt="Dining room with eclectic design details and gallery wall"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="order-1 md:order-2">
                <p className="font-serif text-xs uppercase tracking-[3px] text-brass mb-4">
                  The Design
                </p>
                <h2 className="font-serif font-extralight uppercase tracking-[4px] text-[32px] md:text-5xl text-ink leading-tight mb-8">
                  Designer Curated,
                  <br />
                  Down to the Detail
                </h2>
                <div className="space-y-5 font-sans text-base md:text-[17px] text-text-muted leading-relaxed">
                  <p>
                    The interiors are styled by hand — eclectic, artistic, and
                    unmistakably collected. Custom chandeliers and light
                    fixtures, original artwork, layered textiles, and high-quality
                    linens throughout. A curved vaulted ceiling at the entry sets
                    the tone. Blackout shades in the primary bedroom and bespoke
                    window dressings throughout balance the architecture&apos;s
                    generous natural light with proper rest.
                  </p>
                  <p>
                    The kitchen is fully outfitted as a working chef&apos;s
                    kitchen — new appliances, a complete set of knives and tools,
                    and the equipment of a home where someone genuinely cooks.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-parchment py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <FadeIn>
            <SectionHeading
              title="Fully Updated in 2025"
              align="left"
              divider={false}
            />
          </FadeIn>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((f, i) => (
              <FadeIn key={f.title} delay={i * 0.1} direction="up">
                <div className="border-t border-brass pt-6">
                  <h3 className="font-serif font-light uppercase tracking-[2.5px] text-base text-ink mb-3">
                    {f.title}
                  </h3>
                  <p className="font-sans text-[15px] text-text-muted leading-relaxed">
                    {f.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* The Rooms */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <div>
                <p className="font-serif text-xs uppercase tracking-[3px] text-brass mb-4">
                  The Rooms
                </p>
                <h2 className="font-serif font-extralight uppercase tracking-[4px] text-[32px] md:text-5xl text-ink leading-tight mb-8">
                  Two Bedrooms,
                  <br />
                  1.5 Bathrooms
                </h2>
                <div className="space-y-5 font-sans text-base md:text-[17px] text-text-muted leading-relaxed">
                  <p>
                    The primary bedroom is a quiet retreat with blackout shades
                    and luxury linens.
                  </p>
                  <p>
                    The second bedroom is the larger of the two — a flexible,
                    well-proportioned space that serves equally as a guest room,
                    an office, or a lounge. A daybed accommodates one guest, with
                    an air mattress available for additional needs.
                  </p>
                  <p>
                    The full bathroom is generously sized with flexibility built
                    in. The powder room serves day-to-day use and guests.
                  </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/photos/pied-a-terre/IMG_0126.jpg"
                  alt="Powder room with Scalamandré zebra wallpaper"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-parchment py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <FadeIn>
            <SectionHeading title="A Closer Look" align="left" divider={false} />
          </FadeIn>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
            {galleryPhotos.map((photo, i) => (
              <FadeIn key={photo.src} delay={i * 0.08} direction="up">
                <div
                  className={`relative overflow-hidden ${
                    photo.tall
                      ? "aspect-[3/4] md:row-span-2"
                      : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhood */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <FadeIn direction="left">
              <div>
                <p className="font-serif text-xs uppercase tracking-[3px] text-brass mb-4">
                  The Neighborhood
                </p>
                <h2 className="font-serif font-extralight uppercase tracking-[4px] text-[32px] md:text-5xl text-ink leading-tight mb-8">
                  Pacific Heights
                </h2>
                <div className="space-y-5 font-sans text-base md:text-[17px] text-text-muted leading-relaxed">
                  <p>
                    One of San Francisco&apos;s most established and exclusive
                    neighborhoods — and within it, one of its best blocks. The
                    building sits directly beside Lafayette Park, a green expanse
                    with panoramic city and bay views. The street itself is
                    residential, quiet, and walkable, with public transportation
                    steps from the door.
                  </p>
                  <p>
                    Everything you&apos;d want is within a short walk: groceries,
                    the Fillmore, Polk Street, and the Marina are all accessible
                    on foot.
                  </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="mt-4 md:mt-16">
                <ul className="divide-y divide-ink/10">
                  {nearby.map((item) => (
                    <li
                      key={item.place}
                      className="flex justify-between py-4 font-sans text-[15px]"
                    >
                      <span className="text-text">{item.place}</span>
                      <span className="font-serif text-xs uppercase tracking-[2px] text-brass">
                        {item.distance}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="bg-ink py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <FadeIn>
            <SectionHeading
              title="Residence Details"
              align="left"
              light
              divider={false}
            />
          </FadeIn>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-16">
            {specs.map((spec, i) => (
              <FadeIn key={spec.label} delay={i * 0.05}>
                <div className="py-3 border-b border-parchment/10">
                  <span className="font-serif text-[11px] uppercase tracking-[2px] text-brass block mb-1">
                    {spec.label}
                  </span>
                  <span className="font-sans text-[15px] text-parchment">
                    {spec.value}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-24 md:py-32 text-center">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          <FadeIn>
            <h2 className="font-serif font-extralight uppercase tracking-[5px] text-4xl md:text-5xl text-parchment leading-tight mb-6">
              Inquire About a Stay
            </h2>
            <p className="font-sans text-base text-parchment/70 leading-relaxed max-w-xl mx-auto mb-10">
              The Summit House Pied-à-Terre is available for furnished mid-term
              residencies in San Francisco. To inquire about availability and
              rates, please get in touch.
            </p>
            <Button
              variant="primary"
              href="mailto:stay@summithousenapa.com?subject=Summit%20House%20Pied-%C3%A0-Terre%20Inquiry"
            >
              Begin Your Stay
            </Button>
          </FadeIn>
        </div>
      </section>
    </>
  );
}


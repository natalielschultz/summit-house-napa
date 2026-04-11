import { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/animation/FadeIn";
import CTABanner from "@/components/sections/CTABanner";
import Image from "next/image";
import { getAllImages } from "@/lib/images";
import { getBreadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Photo Gallery — Summit House Napa",
  description:
    "Browse every angle of Summit House — a restored 1969 A-frame cabin on Mount Veeder. 46 photos of the interior, outdoor spaces, and surrounding redwood forest.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "Photo Gallery — Summit House Napa",
    description:
      "Browse every angle of Summit House — a restored 1969 A-frame cabin on Mount Veeder.",
    images: [{ url: "/images/living-room-full-chandelier.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Photo Gallery — Summit House Napa",
    description:
      "Browse every angle of Summit House — a restored 1969 A-frame cabin on Mount Veeder.",
    images: ["/images/living-room-full-chandelier.jpg"],
  },
};

const allImages = getAllImages();

export default function GalleryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbSchema("Gallery", "/gallery")) }}
      />
      {/* Hero */}
      <Hero
        image="/images/living-room-full-chandelier.jpg"
        title="Gallery"
        subtitle="Every angle of Summit House — from sunrise in the loft to starlight in the hot tub."
      />

      {/* Full Gallery Grid */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <FadeIn>
            <SectionHeading
              title="All Photos"
              subtitle="46 images of the property, interiors, outdoor spaces, and Mount Veeder surroundings."
            />
          </FadeIn>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {allImages.map((img, i) => (
              <FadeIn key={img.key} delay={Math.min(i * 0.03, 0.6)}>
                <div
                  className={`relative overflow-hidden ${
                    i % 8 === 0 || i % 8 === 5
                      ? "aspect-[4/3] md:col-span-2 md:row-span-2 md:aspect-square"
                      : "aspect-square"
                  }`}
                >
                  <Image src={img.src} alt={img.alt} fill className="object-cover" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        headline="Ready to make it yours?"
        buttonLabel="Check Availability"
        buttonHref="/availability"
        variant="brass"
      />
    </>
  );
}

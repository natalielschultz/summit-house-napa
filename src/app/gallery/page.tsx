import { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import CTABanner from "@/components/sections/CTABanner";
import Image from "next/image";
import { getBreadcrumbSchema } from "@/lib/structured-data";
import { getAllImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Gallery — Summit House Napa",
  description:
    "Browse all photos of Summit House Napa — a fully restored 1969 A-frame cabin on Mount Veeder with panoramic views, sunken conversation pit, hot tub, and two acres of private redwood forest.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "Gallery — Summit House Napa",
    description:
      "Browse all photos of Summit House Napa — a restored 1969 A-frame cabin on Mount Veeder, Napa Valley.",
    images: [{ url: "/images/twilight-aframe-facade-front.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery — Summit House Napa",
    description:
      "Browse all photos of Summit House Napa — a restored 1969 A-frame cabin on Mount Veeder, Napa Valley.",
    images: ["/images/twilight-aframe-facade-front.jpg"],
  },
};

export default function GalleryPage() {
  const allImages = getAllImages();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbSchema("Gallery", "/gallery")) }}
      />
      <Hero
        image="/images/twilight-deck-aframe-glowing.jpg"
        title="Gallery"
        subtitle="Every angle of Summit House — from the soaring great room to the redwood-wrapped outdoor spaces."
        alt="Summit House deck with string lights and outdoor lounge at twilight among Mount Veeder redwoods"
      />

      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
            {allImages.map((item) => (
              <div key={item.src} className="mb-4 break-inside-avoid">
                <div className="relative overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Ready to make it yours?"
        buttonLabel="Check Availability"
        buttonHref="/availability"
        variant="brass"
      />
    </>
  );
}

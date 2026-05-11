import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/sections/Hero";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/animation/FadeIn";
import CTABanner from "@/components/sections/CTABanner";
import { getBreadcrumbSchema, getArticleSchema, getMountVeederPlaceSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Mount Veeder Napa: Area Guide — Things to Do, Wineries & More",
  description:
    "A complete guide to Mount Veeder and the surrounding Napa Valley area — wineries, hiking, dining, and why guests at Summit House rarely want to leave.",
  alternates: { canonical: "/mount-veeder-napa-area-guide" },
  openGraph: {
    title: "Mount Veeder Napa: Area Guide — Things to Do, Wineries & More",
    description:
      "Wineries, hiking, dining, and why guests at Summit House rarely want to leave. A complete guide to Mount Veeder.",
    images: [{ url: "/images/aerial-redwoods-overview.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mount Veeder Napa: Area Guide — Things to Do, Wineries & More",
    description:
      "Wineries, hiking, dining, and why guests at Summit House rarely want to leave.",
    images: ["/images/aerial-redwoods-overview.jpg"],
  },
};

const wineries: { name: string; url?: string; note: string }[] = [
  {
    name: "Mount Veeder Winery",
    url: "https://mountveederwinery.com",
    note: "One of the original estate wineries on the mountain. Known for structured, age-worthy Cabernet. Tastings by appointment.",
  },
  {
    name: "Hess Collection",
    url: "https://hesscollection.com",
    note: "A large, well-known winery on the lower slopes of Mount Veeder with an impressive contemporary art collection integrated into the tasting space. More accessible for walk-in visits than most mountain producers.",
  },
  {
    name: "Mayacamas Vineyards",
    url: "https://mayacamas.com",
    note: "Historic estate at the summit of the Mayacamas Range. One of the most respected names in California wine. Produces small quantities of Cabernet and Chardonnay that are allocated and hard to find. Visits are very limited but worth pursuing.",
  },
  {
    name: "Sky Vineyards",
    note: "Small family operation at high elevation. Known for Zinfandel and mountain-grown Cabernet. Intimate setting.",
  },
  {
    name: "Auberge du Soleil",
    note: "Not a winery, but worth noting: approximately 30 minutes from the mountain, this Relais & Ch\u00e2teaux property has one of the best wine programs in the valley. The terrace at sunset is exceptional.",
  },
];

const dining: { name: string; location: string; url?: string; note: string }[] = [
  {
    name: "The French Laundry",
    location: "Yountville",
    url: "https://www.thomaskeller.com/tfl",
    note: "Reservations open 60 days in advance at 10am Pacific and fill within minutes. If you're staying 31+ days, you have enough runway to plan and secure a table. One of a handful of restaurants in the world deserving of the effort.",
  },
  {
    name: "Bouchon Bistro",
    location: "Yountville",
    url: "https://www.thomaskeller.com/bouchon",
    note: "Thomas Keller's more accessible Yountville restaurant. Excellent for a regular Tuesday dinner. The burger at the bar is one of the best in the valley.",
  },
  {
    name: "Farmstead at Long Meadow Ranch",
    location: "St. Helena",
    note: "Farm-to-table in the most literal sense. Comfortable, ingredient-forward, not precious. Good for repeat visits.",
  },
  {
    name: "Goose & Gander",
    location: "St. Helena",
    note: "Relaxed American food in an historic craftsman building. Good cocktails. Less formal than most St. Helena options.",
  },
  {
    name: "Oxbow Public Market",
    location: "Napa",
    note: "A food hall worth visiting early in a stay to orient yourself. Good charcuterie, cheese, coffee, and produce vendors. Model Bakery does an exceptional English muffin.",
  },
  {
    name: "Mustards Grill",
    location: "Napa",
    note: "An institution. Roadhouse-style with serious food and an enormous wine list. The pork chop and the martini are both recommended.",
  },
];

const outdoors: { name: string; url?: string; note: string }[] = [
  {
    name: "Bothe-Napa Valley State Park",
    url: "https://www.parks.ca.gov/?page_id=477",
    note: "Located on Highway 29 between St. Helena and Calistoga. Swimming pool (seasonal), redwood groves, and several hiking trails ranging from easy to moderate. One of the more underused state parks in the region.",
  },
  {
    name: "Robert Louis Stevenson State Park",
    note: "At the summit of Mount St. Helena, the highest peak in the area. The trail to the summit is approximately 10 miles round-trip with significant elevation gain. Views extend to the Sierra Nevada on clear days.",
  },
  {
    name: "Skyline Wilderness Park",
    note: "850 acres on the southern end of Napa Valley. Mountain biking, hiking, and equestrian trails. Less crowded than parks further north.",
  },
  {
    name: "Lake Berryessa",
    note: "About 30 minutes east of Napa. Swimming, kayaking, and paddleboarding. A practical option for a warm afternoon.",
  },
];

const towns = [
  {
    name: "Yountville",
    note: "The culinary center of the valley. Small, walkable, and dense with excellent restaurants. Worth a slow afternoon walk.",
  },
  {
    name: "St. Helena",
    note: "The most beautiful of the valley towns. Excellent bookstore (Copperfield's), good food, and a main street that hasn't been entirely taken over by tasting rooms.",
  },
  {
    name: "Calistoga",
    note: "Northern end of the valley. Known for mud baths and mineral springs. More relaxed and locals-oriented than the southern towns. Several excellent spas.",
  },
  {
    name: "Napa",
    note: "The commercial hub. Oxbow, the riverfront, and a growing restaurant scene. More useful than it's often given credit for.",
  },
];

export default function MountVeederAreaGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbSchema("Mount Veeder Area Guide", "/mount-veeder-napa-area-guide")
          ),
        }}
      />
      {/* Place/TouristAttraction schema for Mount Veeder — anchors this guide
          to the recognized geographic entity (AVA + AdministrativeArea chain). */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getMountVeederPlaceSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getArticleSchema({
              title: "Mount Veeder Napa: Area Guide — Things to Do, Wineries & More",
              description:
                "A complete guide to Mount Veeder and the surrounding Napa Valley area — wineries, hiking, dining, and seasonal rhythms.",
              url: "/mount-veeder-napa-area-guide",
              datePublished: "2026-04-12",
              image: "/images/aerial-redwoods-overview.jpg",
            })
          ),
        }}
      />
      <Hero
        image="/images/aerial-redwoods-overview.jpg"
        title="Mount Veeder, Napa Valley"
        subtitle="An area guide."
        alt="Aerial view of ancient redwood forest on Mount Veeder, Napa Valley"
      />

      {/* Intro */}
      <section className="bg-parchment py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          <FadeIn>
            <div className="space-y-6 font-sans text-base md:text-lg text-text leading-relaxed">
              <p>
                <a
                  href="https://napavintners.com/napa_valley/mount-veeder-ava/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brass underline-offset-4 hover:underline"
                >
                  Mount Veeder
                </a>{" "}
                sits at the western edge of Napa Valley in the Mayacamas
                Range, rising from the valley floor to a peak of approximately
                2,677 feet. The Mount Veeder American Viticultural Area was
                established in 1990 and is one of Napa Valley&rsquo;s 16
                sub-appellations — known for small-production, structured
                Cabernet Sauvignon grown above the fog line in volcanic soils.
                Summit House sits at approximately 1,800 feet on the eastern
                slope of the mountain.
              </p>
              <p>
                This guide covers the wineries, trails, towns, and experiences worth
                knowing if you&rsquo;re spending a month or more above the valley.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* The Mountain Itself */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          <FadeIn>
            <SectionHeading title="The Mountain Itself" />
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="mt-12 space-y-6 font-sans text-base md:text-lg text-text leading-relaxed">
              <p>
                Mount Veeder is part of the Mayacamas Range, the ridge that divides Napa
                Valley from Sonoma. The mountain&rsquo;s elevation, morning fog, and
                afternoon winds create a microclimate distinct from the warmer valley
                floor — cooler growing days, longer hang time for grapes, and a persistent
                stillness that doesn&rsquo;t exist at lower elevations.
              </p>
              <p>
                The summit area is mostly residential, with winding two-lane roads,
                scattered ranches, and long stretches where the only view is open sky and
                ridgeline. Summit House sits at approximately 1,800 feet, with panoramic
                views east across the valley toward the Vaca Range.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Wineries */}
      <section className="bg-parchment py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <FadeIn>
            <SectionHeading title="Wineries on and Near Mount Veeder" />
          </FadeIn>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wineries.map((winery, i) => (
              <FadeIn key={winery.name} delay={i * 0.1}>
                <div className="border border-charcoal/10 p-8 flex flex-col gap-3 h-full">
                  <h3 className="font-serif font-light uppercase tracking-[2px] text-xl text-ink">
                    {winery.url ? (
                      <a
                        href={winery.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-brass transition-colors"
                      >
                        {winery.name}
                      </a>
                    ) : (
                      winery.name
                    )}
                  </h3>
                  <div className="bg-brass h-px w-10" aria-hidden="true" />
                  <p className="font-sans text-sm text-text-muted leading-relaxed">
                    {winery.note}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Dining */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <FadeIn>
            <SectionHeading title="Dining Worth the Drive" />
          </FadeIn>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dining.map((item, i) => (
              <FadeIn key={item.name} delay={i * 0.1}>
                <div className="border border-charcoal/10 p-8 flex flex-col gap-3 h-full">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-serif font-light uppercase tracking-[2px] text-xl text-ink">
                      {item.url ? (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-brass transition-colors"
                        >
                          {item.name}
                        </a>
                      ) : (
                        item.name
                      )}
                    </h3>
                    <span className="font-sans text-sm text-brass uppercase tracking-wider whitespace-nowrap">
                      {item.location}
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

      {/* Outdoor Access */}
      <section className="bg-parchment py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <FadeIn>
            <SectionHeading title="Outdoor Access" />
          </FadeIn>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
            {outdoors.map((item, i) => (
              <FadeIn key={item.name} delay={i * 0.1}>
                <div className="border border-charcoal/10 p-8 flex flex-col gap-3 h-full">
                  <h3 className="font-serif font-light uppercase tracking-[2px] text-xl text-ink">
                    {item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-brass transition-colors"
                      >
                        {item.name}
                      </a>
                    ) : (
                      item.name
                    )}
                  </h3>
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

      {/* Towns Worth Knowing */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <FadeIn>
            <SectionHeading title="Towns Worth Knowing" />
          </FadeIn>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
            {towns.map((item, i) => (
              <FadeIn key={item.name} delay={i * 0.1}>
                <div className="border border-charcoal/10 p-8 flex flex-col gap-3 h-full">
                  <h3 className="font-serif font-light uppercase tracking-[2px] text-xl text-ink">
                    {item.name}
                  </h3>
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

      {/* Getting Around */}
      <section className="bg-parchment py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          <FadeIn>
            <SectionHeading title="Getting Around" />
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="mt-12 space-y-6 font-sans text-base md:text-lg text-text leading-relaxed">
              <p>
                Mount Veeder is not walkable to town. A car is essential. The drive from
                Summit House to Yountville is approximately 20 minutes; to
                St. Helena, 30 minutes; to Calistoga, 40 minutes. The roads on the
                mountain are winding and beautiful — allow more time than the map suggests,
                especially at night.
              </p>
              <p>
                There is no rideshare availability on the mountain itself. Plan accordingly
                if you intend to drink at dinner.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Closing */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 md:px-12 text-center">
          <FadeIn>
            <p className="font-sans text-base md:text-lg text-text leading-relaxed">
              A month on Mount Veeder moves differently than time in the valley. The
              mornings are quieter. The light is different at elevation. After a week,
              most guests stop thinking about what they&rsquo;re missing and start
              noticing what they have.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Read more from the journal */}
      <section className="bg-parchment py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6 md:px-12">
          <FadeIn>
            <SectionHeading title="Read More from the Journal" />
          </FadeIn>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
            <FadeIn delay={0.1}>
              <Link
                href="/blog/napa-valley-locals-guide"
                className="group block border border-charcoal/10 p-8 h-full hover:border-brass transition-colors"
              >
                <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-brass mb-3">
                  Where to Eat, Drink &amp; Shop
                </p>
                <h3 className="font-serif font-light uppercase tracking-[2px] text-xl text-ink mb-3 group-hover:text-brass transition-colors">
                  Napa Valley Locals Guide
                </h3>
                <p className="font-sans text-sm text-text-muted leading-relaxed">
                  A born-and-raised native&rsquo;s list of restaurants, markets,
                  wineries, and the cocktail moves locals actually use.
                </p>
              </Link>
            </FadeIn>
            <FadeIn delay={0.15}>
              <Link
                href="/blog/best-hikes-napa-valley"
                className="group block border border-charcoal/10 p-8 h-full hover:border-brass transition-colors"
              >
                <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-brass mb-3">
                  A Native&rsquo;s Insider Guide
                </p>
                <h3 className="font-serif font-light uppercase tracking-[2px] text-xl text-ink mb-3 group-hover:text-brass transition-colors">
                  Best Hikes in Napa Valley
                </h3>
                <p className="font-sans text-sm text-text-muted leading-relaxed">
                  The trails, historic spots, and wild places locals actually
                  walk — from Petrified Forest to Mount St. Helena.
                </p>
              </Link>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Link
                href="/blog/finding-summit-house"
                className="group block border border-charcoal/10 p-8 h-full hover:border-brass transition-colors"
              >
                <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-brass mb-3">
                  A Designer&rsquo;s Story
                </p>
                <h3 className="font-serif font-light uppercase tracking-[2px] text-xl text-ink mb-3 group-hover:text-brass transition-colors">
                  Finding Summit House
                </h3>
                <p className="font-sans text-sm text-text-muted leading-relaxed">
                  How a lifelong Napa native found three 1969 A-frames at the
                  summit of Mount Veeder and chose to recognize them rather than
                  reinvent them.
                </p>
              </Link>
            </FadeIn>
            <FadeIn delay={0.25}>
              <Link
                href="/blog/the-rare-kind-of-privacy-in-napa"
                className="group block border border-charcoal/10 p-8 h-full hover:border-brass transition-colors"
              >
                <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-brass mb-3">
                  On Seclusion &amp; Access
                </p>
                <h3 className="font-serif font-light uppercase tracking-[2px] text-xl text-ink mb-3 group-hover:text-brass transition-colors">
                  The Rare Kind of Privacy
                </h3>
                <p className="font-sans text-sm text-text-muted leading-relaxed">
                  Most people think about privacy in Napa as something you buy.
                  It&rsquo;s also something you can simply live inside of for a
                  little while.
                </p>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      <CTABanner
        headline="Ready to settle in?"
        buttonLabel="Inquire About Residency"
        buttonHref="/availability#inquiry"
      />
    </>
  );
}

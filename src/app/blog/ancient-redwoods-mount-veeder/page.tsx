import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/animation/FadeIn";
import CTABanner from "@/components/sections/CTABanner";
import Link from "next/link";
import { getBreadcrumbSchema, getArticleSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "The Napa Redwoods: Mount Veeder's Ancient Forest | Summit House Napa",
  description:
    "Mount Veeder holds California's farthest inland stand of Coast Redwood (Sequoia sempervirens) — the historic \"Napa Redwoods.\" A field guide to the forest's history, species, and where to experience it today.",
  alternates: { canonical: "/blog/ancient-redwoods-mount-veeder" },
  openGraph: {
    title: "The Napa Redwoods: Mount Veeder's Ancient Forest",
    description:
      "California's farthest inland stand of Coast Redwood — the historic \"Napa Redwoods.\" A field guide to Mount Veeder's ancient forest.",
    images: [{ url: "/images/aerial-redwoods-overview.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Napa Redwoods: Mount Veeder's Ancient Forest",
    description:
      "California's farthest inland stand of Coast Redwood — the historic \"Napa Redwoods.\"",
    images: ["/images/aerial-redwoods-overview.jpg"],
  },
};

export default function AncientRedwoodsMountVeederPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbSchema(
              "The Napa Redwoods: Mount Veeder's Ancient Forest",
              "/blog/ancient-redwoods-mount-veeder"
            )
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getArticleSchema({
              title: "The Napa Redwoods: Mount Veeder's Ancient Forest",
              description:
                "A field guide to California's farthest inland stand of Coast Redwood (Sequoia sempervirens) — the historic \"Napa Redwoods\" of Mount Veeder, Napa County.",
              url: "/blog/ancient-redwoods-mount-veeder",
              datePublished: "2026-04-18",
              image: "/images/aerial-redwoods-overview.jpg",
              wordCount: 1500,
              articleSection: "Mount Veeder",
            })
          ),
        }}
      />

      <Hero
        image="/images/aerial-redwoods-overview.jpg"
        title="The Napa Redwoods"
        subtitle="Mount Veeder&rsquo;s ancient forest &mdash; and California&rsquo;s farthest inland stand of Coast Redwood"
        alt="Aerial view of ancient Coast Redwood canopy on Mount Veeder in Napa Valley"
        overlayOpacity={0.5}
      />

      {/* Intro — citability answer block */}
      <section className="bg-parchment py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          <FadeIn>
            <div className="space-y-6 font-sans text-base md:text-lg text-text leading-relaxed">
              <p>
                Mount Veeder, in the Mayacamas Mountains of western Napa
                County, California, holds one of the largest remaining stands
                of Coast Redwood (<em>Sequoia sempervirens</em>) in Napa
                Valley &mdash; and marks the farthest inland boundary for the
                species in California. From roughly 1860 to 1930, the region
                was known formally as the <strong>Napa Redwoods</strong>, a
                name that appears in period maps, newspapers, and federal
                records. The trees are ancient, the ecosystem is
                self-contained, and the climate is entirely unlike the valley
                floor a few thousand feet below. Most visitors to Napa never
                see this forest. The ones who do rarely forget it. What
                follows is a field guide to the Napa Redwoods &mdash; their
                history, their species, and where to experience them today.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* H2: The "Napa Redwoods" era */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          <FadeIn>
            <SectionHeading title="The &ldquo;Napa Redwoods&rdquo; &mdash; a forgotten name" />
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="mt-12 space-y-6 font-sans text-base md:text-lg text-text leading-relaxed">
              <p>
                From roughly 1860 to 1930, the high country east of the
                Napa/Sonoma County boundary was formally called the{" "}
                <strong>Napa Redwoods</strong>. The name appears on federal
                tax records, period maps, and early local newspapers. For
                nearly seventy years, the identity of this region was the
                forest &mdash; not the vineyards that would later define it.
              </p>
              <p>
                The mountain itself was named after{" "}
                <strong>Reverend Peter V. Veeder</strong>, a 19th-century
                pastor and hiker who explored the ridge before it was widely
                settled. A small cluster of mountain resorts &mdash; among
                them <strong>Lokoya Lodge</strong> and the{" "}
                <strong>Mount Veeder Resort</strong> &mdash; operated in the
                late 19th and early 20th centuries, drawing visitors from San
                Francisco to spend summers in the redwoods.
              </p>
              <p>
                By the 1940s, the name <em>Napa Redwoods</em> had largely
                fallen out of local usage, supplanted by <em>Mount Veeder</em>{" "}
                as the region&rsquo;s defining term. The forest, however, did
                not go anywhere. It remains &mdash; quieter now, less
                celebrated, and still the inland edge of California&rsquo;s
                coastal redwood range.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* H2: Why Mount Veeder marks the inland edge */}
      <section className="bg-parchment py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          <FadeIn>
            <SectionHeading title="Why Mount Veeder marks the inland edge of California&rsquo;s Coast Redwoods" />
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="mt-12 space-y-6 font-sans text-base md:text-lg text-text leading-relaxed">
              <p>
                Coast Redwoods grow along a narrow strip of the Pacific coast,
                from southern Oregon to a small pocket in Big Sur. They
                depend on coastal fog &mdash; not just for moisture, but to
                buffer summer temperatures that would otherwise stress the
                species.
              </p>
              <p>
                Mount Veeder is unusual because it sits at the{" "}
                <strong>farthest inland point</strong> where Coast Redwoods
                still thrive in California. The reason is the{" "}
                <strong>Petaluma Gap</strong>, a low corridor in the coastal
                mountains through which marine layer from the Pacific drifts
                over the Mayacamas ridge. That fog rolls across the summit of
                Mount Veeder most mornings from late spring through early
                fall, collects on the redwood canopy, and drips down to the
                forest floor &mdash; a phenomenon called <em>fog drip</em>{" "}
                that functions as a second rainy season for the trees.
              </p>
              <p>
                Below the redwood canopy on Mount Veeder, the microclimate is
                several degrees cooler than the valley floor. Summer
                afternoons at 1,800 feet sit in shade for much of the day.
                Summer humidity is higher, and summer temperatures rarely
                reach the 90s and 100s common in the town of Napa a few
                thousand feet below.
              </p>
              <p>
                The redwoods are here because the fog is here. Move a few
                miles further inland, and the species disappears.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* H2: What species grows here */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          <FadeIn>
            <SectionHeading title="What species grows on Mount Veeder" />
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="mt-12 space-y-6 font-sans text-base md:text-lg text-text leading-relaxed">
              <p>
                The redwoods on Mount Veeder are <strong>Coast Redwoods</strong>,{" "}
                <em>Sequoia sempervirens</em> &mdash; the tall, slender
                species native to coastal California.
              </p>
              <p>
                They are <strong>not</strong>{" "}
                <strong>Giant Sequoias</strong> (<em>Sequoiadendron
                giganteum</em>), which are a different tree entirely. Giant
                Sequoias grow only in the Sierra Nevada, at much higher
                elevations, and are stouter and shorter than their coastal
                cousin. The two species are often confused, but their ranges
                do not overlap and their ecological niches are distinct.
              </p>
              <p>
                Coast Redwoods are the tallest trees on Earth. Mature
                individuals in coastal stands routinely exceed 200 feet. On
                Mount Veeder, at the inland edge of their range, the trees
                are not quite as tall as those on the North Coast but remain
                striking &mdash; deeply furrowed bark, limbs that begin
                only forty or fifty feet above the ground, reddish heartwood
                visible where old bark has shed.
              </p>
              <p>
                Companion species on Mount Veeder slopes include{" "}
                <strong>California bay laurel</strong> (<em>Umbellularia
                californica</em>), <strong>Pacific madrone</strong> (
                <em>Arbutus menziesii</em>),{" "}
                <strong>tanoak</strong> (<em>Notholithocarpus densiflorus</em>),{" "}
                <strong>huckleberry</strong>, and{" "}
                <strong>sword fern</strong>. The understory is cool, damp,
                and quieter than the oak-and-chaparral woodlands a few
                hundred feet below.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* H2: Logging, fire, and persistence */}
      <section className="bg-parchment py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          <FadeIn>
            <SectionHeading title="Logging, fire, and persistence" />
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="mt-12 space-y-6 font-sans text-base md:text-lg text-text leading-relaxed">
              <p>
                Most of California&rsquo;s accessible Coast Redwood forest
                was logged between 1850 and 1940. The Napa Redwoods were not
                spared. During the historical Napa Redwoods era, the forest
                was cut for lumber that built much of early San Francisco and
                Napa. What remained by the 1940s were the stands on the
                steepest, most inaccessible slopes &mdash; terrain where
                logging equipment could not reach.
              </p>
              <p>Those are the stands that persist today.</p>
              <p>
                Coast Redwoods are uncommonly{" "}
                <strong>fire-resilient</strong>. Their bark is thick, rich in
                tannins, and low in flammable resin. They can resprout from
                the base after heavy damage, and a scorched tree can recover
                from the <strong>burl</strong> &mdash; the woody mass at its
                root collar. These traits allowed the species to persist
                through a climate history of natural fire, and they continue
                to matter.
              </p>
              <p>
                In October 2017, the <strong>Nuns Fire</strong> burned across
                parts of Mount Veeder. In September 2020, the{" "}
                <strong>Glass Fire</strong> returned. Both events damaged
                structures, understory, and many non-redwood trees on the
                mountain. The redwoods, however, came through: scorched in
                places, but rooted, sprouting, and alive. Walk the forest
                today and you can still see dark fire-scars low on the bark
                of the largest trees, and rings of new shoots at the base of
                those that were hit hardest.
              </p>
              <p>
                Summit House came through both fires intact. The owners credit
                the surrounding redwoods &mdash; the fire-resilient bark, the
                dense crown cover, the damp microclimate at the forest floor
                &mdash; for forming a defensive envelope that slowed and
                redirected flames approaching the structure. On Mount Veeder,
                a redwood grove is not only a scenic feature; it is a living
                windbreak and firebreak, and the oldest, largest trees are
                among the most reliable you could have between you and a fire
                line.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* H2: Where to see them today */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          <FadeIn>
            <SectionHeading title="Where to see the redwoods today" />
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="mt-12 space-y-8 font-sans text-base md:text-lg text-text leading-relaxed">
              <p>
                A handful of places on Mount Veeder offer access to the
                redwood forest.
              </p>
              <div>
                <h3 className="font-serif font-light uppercase tracking-[2px] text-lg text-ink mb-3">
                  Archer Taylor Preserve
                </h3>
                <p>
                  The largest publicly accessible redwood stand on Mount
                  Veeder. Managed by the{" "}
                  <strong>Land Trust of Napa County</strong> and open for
                  guided hikes by reservation. The preserve protects a
                  significant grove of mature Coast Redwoods and a year-round
                  creek, and is one of the best places in Napa County to see
                  the species in a public setting.
                </p>
              </div>
              <div className="bg-brass h-px w-20" aria-hidden="true" />
              <div>
                <h3 className="font-serif font-light uppercase tracking-[2px] text-lg text-ink mb-3">
                  Mount Veeder Road &amp; Dry Creek Road
                </h3>
                <p>
                  Both roads pass through pockets of redwood canopy. A slow
                  drive along either &mdash; especially in early morning,
                  when the fog is still settling &mdash; is the easiest way
                  to see the forest without a permit.
                </p>
              </div>
              <div className="bg-brass h-px w-20" aria-hidden="true" />
              <div>
                <h3 className="font-serif font-light uppercase tracking-[2px] text-lg text-ink mb-3">
                  Enchanted Hills
                </h3>
                <p>
                  A private property near the summit, originally known as
                  &ldquo;The Cove&rdquo; and later the site of a camp for
                  blind and visually impaired children, operated for decades
                  by <strong>LightHouse for the Blind and Visually
                  Impaired</strong> in San Francisco. The camp was damaged in
                  the 2017 Nuns Fire and has been rebuilt in phases. The
                  redwood groves that surround it remain.
                </p>
              </div>
              <div className="bg-brass h-px w-20" aria-hidden="true" />
              <div>
                <h3 className="font-serif font-light uppercase tracking-[2px] text-lg text-ink mb-3">
                  Private ridgeline residences
                </h3>
                <p>
                  A few private properties along the ridge sit directly
                  within the redwood canopy and offer private trail access
                  for guests. <strong>Summit House Napa</strong> is one of
                  them.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* H2: Living with the redwoods at Summit House */}
      <section className="bg-parchment py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          <FadeIn>
            <SectionHeading title="Living with the ancient redwoods at Summit House" />
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="mt-12 space-y-6 font-sans text-base md:text-lg text-text leading-relaxed">
              <p>
                <strong>Summit House Napa</strong> sits at approximately 1,800
                feet of elevation on Mount Veeder, on several private acres
                of ancient Coast Redwoods. A private trail on the property
                leads to the <strong>Enchanted Hills Waterfall</strong>{" "}
                &mdash; a small seasonal cascade fed by winter rain, reached
                in about fifteen minutes of walking through the redwood
                forest.
              </p>
              <p>
                Mornings here begin in fog. The redwood canopy collects it
                overnight; by sunrise, the drip is audible. The air is colder
                than the valley. The light is filtered, diffuse, and slow to
                reach the forest floor. Walking the trail, the temperature
                drops several degrees under the canopy, and the usual sound
                of Napa &mdash; road noise, distant traffic, occasional
                equipment &mdash; falls away.
              </p>
              <p>
                What makes the property unusual is the proximity. Five
                minutes of driving in any direction returns you to vineyard
                country, tasting rooms, restaurants &mdash; the Napa Valley
                most guests come for. But at the peak of Mount Veeder, inside
                the grove itself, you are in a different world entirely: the
                heart of a coastal redwood forest, with all the benefits of
                Napa a short drive below and the mystery of the canopy
                overhead. Guests describe it most often as{" "}
                <em>mystical</em>, and it earns the word.
              </p>
              <p>
                The property offers 31-night monthly residencies, the minimum
                required by Napa&rsquo;s short-term rental regulations. See{" "}
                <Link
                  href="/availability"
                  className="text-brass hover:text-ink transition-colors underline underline-offset-2"
                >
                  availability and rates
                </Link>{" "}
                or read about{" "}
                <Link
                  href="/experience"
                  className="text-brass hover:text-ink transition-colors underline underline-offset-2"
                >
                  life on the mountain
                </Link>
                .
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* H2: Quick reference */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          <FadeIn>
            <SectionHeading title="Mount Veeder redwoods at a glance" />
          </FadeIn>
          <FadeIn delay={0.15}>
            <ul className="mt-12 space-y-4 font-sans text-base md:text-lg text-text leading-relaxed list-none">
              <li>
                <strong>Species:</strong> Coast Redwood (
                <em>Sequoia sempervirens</em>)
              </li>
              <li>
                <strong>Range note:</strong> Mount Veeder marks the farthest
                inland point where the species thrives in California
              </li>
              <li>
                <strong>Elevation on Mount Veeder:</strong> roughly 500 to
                2,000 feet on redwood-bearing slopes
              </li>
              <li>
                <strong>Protected area:</strong> Archer Taylor Preserve (Land
                Trust of Napa County)
              </li>
              <li>
                <strong>Private access:</strong> Enchanted Hills Waterfall
                trail via Summit House Napa
              </li>
              <li>
                <strong>Historical name of the region (1860&ndash;1930):</strong>{" "}
                &ldquo;Napa Redwoods&rdquo;
              </li>
              <li>
                <strong>Mountain namesake:</strong> Reverend Peter V. Veeder
              </li>
              <li>
                <strong>Companion species:</strong> California bay laurel,
                Pacific madrone, tanoak, huckleberry, sword fern
              </li>
              <li>
                <strong>Primary climate driver:</strong> marine fog via the
                Petaluma Gap
              </li>
            </ul>
          </FadeIn>
        </div>
      </section>

      <CTABanner
        headline="Spend a month among the redwoods."
        buttonLabel="Check Availability"
        buttonHref="/availability"
      />
    </>
  );
}

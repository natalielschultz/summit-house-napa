import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/sections/Hero";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/animation/FadeIn";
import CTABanner from "@/components/sections/CTABanner";
import { getBreadcrumbSchema, getArticleSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "The Rare Kind of Privacy You Don't Have to Own — Mount Veeder",
  description:
    "A private Mount Veeder rental without buying. At Summit House, live in the quiet of Napa Valley's most secluded mountain residence for a season.",
  alternates: { canonical: "/blog/the-rare-kind-of-privacy-in-napa" },
  openGraph: {
    title: "The Rare Kind of Privacy You Don't Have to Own — Mount Veeder",
    description:
      "Most people think about privacy in Napa as something you buy. It's also something you can simply live inside of for a little while.",
    images: [{ url: "/images/meditation-spot-redwoods.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Rare Kind of Privacy You Don't Have to Own — Mount Veeder",
    description:
      "Most people think about privacy in Napa as something you buy. It's also something you can simply live inside of for a little while.",
    images: ["/images/meditation-spot-redwoods.jpg"],
  },
};

export default function TheRareKindOfPrivacyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbSchema(
              "The Rare Kind of Privacy",
              "/blog/the-rare-kind-of-privacy-in-napa"
            )
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getArticleSchema({
              title:
                "The Rare Kind of Privacy You Don't Have to Own — Mount Veeder",
              description:
                "Most people think about privacy in Napa as something you buy — an estate, a vineyard, a compound. But privacy is also something you can simply live inside of for a little while.",
              url: "/blog/the-rare-kind-of-privacy-in-napa",
              datePublished: "2026-04-13",
              image: "/images/meditation-spot-redwoods.jpg",
            })
          ),
        }}
      />
      <Hero
        image="/images/meditation-spot-redwoods.jpg"
        title="The Rare Kind of Privacy"
        subtitle="On seclusion, access, and living at the summit for a season."
        alt="Morning light through ancient redwoods at Summit House on Mount Veeder, Napa Valley"
      />

      {/* Intro */}
      <section className="bg-parchment py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          <FadeIn>
            <div className="space-y-6 font-sans text-base md:text-lg text-text leading-relaxed">
              <p>
                There is a particular kind of quiet that exists on Mount Veeder.
                It&rsquo;s the kind you notice the first morning you wake up here —
                when you realize the sound you&rsquo;re listening to is nothing at
                all. No cars. No neighbors. No hum of infrastructure. Just the slow
                breath of the redwoods and, if you&rsquo;re lucky, a woodpecker
                somewhere up the ridge.
              </p>
              <p>
                That quiet is rare in Napa Valley. Most of the valley is beautiful,
                but it is not quiet. The roads fill, the tasting rooms fill, the
                shoulder seasons have gotten shorter every year. Even the hillsides
                above the valley floor tend to be dotted with other homes, other
                driveways, other lives happening within earshot.
              </p>
              <p>
                The kind of privacy we offer at Summit House is something most
                people associate with ownership. A country estate. A family
                compound. A vineyard with a long gate. Something you buy into — for
                a lot of money, usually, and for a long time.
              </p>
              <p>
                But privacy is also something you can simply live inside of for a
                little while.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* What Summit House actually feels like */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          <FadeIn>
            <SectionHeading title="What Summit House Actually Feels Like" />
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="mt-12 space-y-6 font-sans text-base md:text-lg text-text leading-relaxed">
              <p>
                Summit House sits at the summit of Mount Veeder, on several private
                acres of ancient redwoods. There are no visible neighbors. The
                property ends where the mountain begins — a waterfall trail through
                old-growth redwoods, a deck that looks out over the ridgelines, a
                hot tub under the stars, a sauna tucked into the edge of the trees.
                When you&rsquo;re here, the rest of the valley is something you can
                see but rarely hear.
              </p>
              <p>
                And yet, when you want to go down the mountain, you go. Fifteen
                minutes puts you in downtown Napa. Twenty minutes puts you in
                Yountville. Half an hour puts you at the French Laundry, if
                you&rsquo;ve planned ahead. The best restaurants, the best wine,
                the best produce markets in the country — all within an easy drive.
              </p>
              <p>
                It&rsquo;s the combination that does something to you. Total
                privacy, with access. Seclusion you don&rsquo;t have to earn by
                driving forty minutes through switchbacks. A mountain that&rsquo;s
                its own world, fifteen minutes above a valley full of everything.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Why this matters for a longer stay */}
      <section className="bg-parchment py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          <FadeIn>
            <SectionHeading title="Why This Matters for a Longer Stay" />
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="mt-12 space-y-6 font-sans text-base md:text-lg text-text leading-relaxed">
              <p>
                The privacy lands differently when you&rsquo;re staying for weeks
                or months instead of a weekend.
              </p>
              <p>
                A weekend visitor to Napa has a checklist — wineries, dinner, one
                or two hikes. The weekend stacks up, the rental van is full by
                Sunday, and Monday morning the drive home is spent thinking about
                the meetings waiting in the inbox.
              </p>
              <p>
                A resident — even a temporary one — has time. Time to let a morning
                be slow. Time to work from the deck until the sun moves. Time to
                walk the same trail on Tuesday and notice what you missed on
                Monday. Time for the quiet to actually take.
              </p>
              <p>
                This is why Summit House asks for a 31-night minimum. Not because a
                two-week stay isn&rsquo;t appealing, but because shorter stays
                rarely let the quiet do its work. The guests who thrive here are
                the ones who arrived a little tired, planned to work remotely for a
                month, and found themselves extending to two. Or the couples who
                came for a creative sabbatical and left having finished the book.
                Or the families who spent a month here after selling a home and
                were surprised to find it felt like the best month in recent
                memory.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Privacy as a kind of rest */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          <FadeIn>
            <SectionHeading title="Privacy as a Kind of Rest" />
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="mt-12 space-y-6 font-sans text-base md:text-lg text-text leading-relaxed">
              <p>
                You don&rsquo;t notice how rarely you&rsquo;re truly alone until
                you&rsquo;ve been alone for a week and realize your shoulders have
                dropped two inches. Modern life is loud. Most of us have spent
                years optimizing for access — faster internet, closer neighbors,
                restaurants on every block, ambient stimulation dialed up to the
                point where we no longer hear it.
              </p>
              <p>
                At Summit House, the dial gets turned down on its own. You
                don&rsquo;t have to ask it to. The trees do it. The elevation does
                it. The absence of foot traffic and car noise does it. Within a
                few days, most guests report sleeping better than they have in
                months. Within a few weeks, they start to notice how much faster
                they think when they&rsquo;re not being interrupted.
              </p>
              <p>
                That kind of restoration is rare. And the fact that it&rsquo;s
                available without a down payment, without a renovation budget,
                without a commitment to a property you&rsquo;ll have to sell
                someday — that&rsquo;s the part we&rsquo;re trying to make more
                obvious.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* A different kind of Napa */}
      <section className="bg-parchment py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          <FadeIn>
            <SectionHeading title="A Different Kind of Napa — On Mount Veeder" />
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="mt-12 space-y-6 font-sans text-base md:text-lg text-text leading-relaxed">
              <p>
                Most marketing about Napa shows you crowded tasting rooms and
                sunset patios. That&rsquo;s a real Napa, and it has its place. But
                there&rsquo;s another Napa, quieter and older, higher up the
                mountain —{" "}
                <a
                  href="https://napavintners.com/napa_valley/mount-veeder-ava/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brass underline-offset-4 hover:underline"
                >
                  Mount Veeder
                </a>
                , one of the valley&rsquo;s most storied mountain AVAs. The kind of
                Napa that existed before the valley floor became a destination. The
                kind you can still find if you drive up{" "}
                <Link
                  href="/mount-veeder-napa-area-guide"
                  className="text-brass underline-offset-4 hover:underline"
                >
                  Mount Veeder Road
                </Link>{" "}
                and keep going past where most people turn around.
              </p>
              <p>
                Summit House is a small part of that older, quieter Napa. For 31
                nights or more, you can live inside it.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Closing italic note */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 md:px-12 text-center">
          <FadeIn>
            <p className="font-sans italic text-base md:text-lg text-text-muted leading-relaxed">
              Summit House is a private residence at the summit of Mount Veeder,
              Napa Valley.
            </p>
          </FadeIn>
        </div>
      </section>

      <CTABanner
        headline="Live inside the quiet for a season"
        buttonLabel="Inquire About Residency"
        buttonHref="/availability#inquiry"
      />
    </>
  );
}

import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/animation/FadeIn";
import CTABanner from "@/components/sections/CTABanner";
import { REVIEWS } from "@/lib/constants";
import { getBreadcrumbSchema } from "@/lib/structured-data";
import { getReviews, getReviewStats } from "@/lib/reviews";

export async function generateMetadata(): Promise<Metadata> {
  const stats = await getReviewStats();
  const title = `Guest Reviews — ${stats.rating} Rating | Summit House Napa`;
  const description = `Read verified guest reviews of Summit House Napa. Rated ${stats.rating} out of 5 from ${stats.count} Airbnb reviews. See what guests say about this luxury Mount Veeder retreat.`;

  return {
    title,
    description,
    alternates: { canonical: "/reviews" },
    openGraph: {
      title,
      description: `Rated ${stats.rating} out of 5 from ${stats.count} verified Airbnb reviews. See what guests say about Summit House Napa, a luxury Mount Veeder retreat.`,
      images: [{ url: "/images/hanging-chair-sunlit.jpg", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: `Rated ${stats.rating} out of 5 from ${stats.count} verified Airbnb reviews.`,
      images: ["/images/hanging-chair-sunlit.jpg"],
    },
  };
}

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="text-brass text-sm tracking-wider">
      {Array.from({ length: rating }, (_, i) => (
        <span key={i}>&#9733;</span>
      ))}
    </span>
  );
}

export default async function ReviewsPage() {
  const [reviews, stats] = await Promise.all([getReviews(), getReviewStats()]);
  const allReviews = reviews.length > 0 ? reviews : [...REVIEWS];
  const [featured, ...remaining] = allReviews;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbSchema("Guest Reviews", "/reviews")) }}
      />
      <Hero
        image="/images/hanging-chair-sunlit.jpg"
        title="What Guests Say"
        subtitle={`${stats.rating} out of 5 — ${stats.count} reviews on Airbnb.`}
      />

      {/* Featured Review */}
      <section className="bg-parchment py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 md:px-12 text-center">
          <FadeIn>
            <div className="flex flex-col items-center gap-8">
              <span className="font-serif text-8xl text-brass/20 leading-none select-none">
                &ldquo;
              </span>
              <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-ink leading-snug italic -mt-12">
                {featured.text}
              </blockquote>
              <div className="bg-brass h-px w-16" aria-hidden="true" />
              <div className="flex flex-col items-center gap-2">
                <StarRating rating={featured.rating} />
                <p className="font-sans text-sm text-text-muted">
                  <span className="text-ink font-medium">{featured.name}</span>
                  {" "}&mdash;{" "}
                  {featured.date}
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* All Reviews Grid */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <FadeIn>
            <SectionHeading
              title="All Reviews"
              subtitle="What our guests remember most."
            />
          </FadeIn>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
            {remaining.map((review, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="border border-charcoal/10 p-8 md:p-10 flex flex-col gap-5 h-full">
                  <span className="font-serif text-6xl text-brass/15 leading-none select-none -mb-4">
                    &ldquo;
                  </span>
                  <p className="font-sans text-base text-text leading-relaxed">
                    {review.text}
                  </p>
                  <div className="mt-auto pt-4 flex items-center justify-between border-t border-sage/25">
                    <div>
                      <p className="font-sans text-sm text-ink font-medium">
                        {review.name}
                      </p>
                      <p className="font-sans text-xs text-text-muted mt-0.5">
                        {review.date}
                      </p>
                    </div>
                    <StarRating rating={review.rating} />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Airbnb Badge */}
      <section className="bg-surface py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-12 text-center">
          <FadeIn>
            <div className="flex flex-col items-center gap-4">
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-text-muted">
                Verified Reviews
              </p>
              <p className="font-serif text-xl md:text-2xl text-ink">
                Read all {stats.count} reviews on Airbnb
              </p>
              <p className="font-sans text-sm text-text-muted">
                Link coming soon — all reviews shown above are from verified Airbnb guests.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTABanner
        headline="Ready to write your own chapter?"
        buttonLabel="Check Availability"
        buttonHref="/availability"
      />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found | Summit House Napa",
  robots: "noindex",
};

export default function NotFound() {
  return (
    <section className="bg-parchment min-h-[80vh] flex items-center justify-center px-6">
      <div className="max-w-xl text-center flex flex-col items-center gap-8">
        <p className="font-sans text-xs uppercase tracking-[0.2em] text-brass">
          404
        </p>
        <h1 className="font-serif font-light uppercase tracking-[6px] text-4xl md:text-5xl text-ink leading-tight">
          Page Not Found
        </h1>
        <div className="w-16 h-px bg-brass" aria-hidden="true" />
        <p className="font-sans text-base md:text-lg text-text-muted leading-relaxed">
          This page seems to have wandered off the trail.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
          <Link
            href="/"
            className="inline-block bg-ink text-parchment font-sans text-xs uppercase tracking-[0.2em] px-8 py-4 hover:bg-charcoal transition-colors"
          >
            Return Home
          </Link>
          <Link
            href="/availability"
            className="inline-block border border-ink text-ink font-sans text-xs uppercase tracking-[0.2em] px-8 py-4 hover:bg-ink hover:text-parchment transition-colors"
          >
            Check Availability
          </Link>
        </div>
      </div>
    </section>
  );
}

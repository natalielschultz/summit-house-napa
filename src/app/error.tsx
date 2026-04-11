"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="bg-parchment min-h-[80vh] flex items-center justify-center px-6">
      <div className="max-w-xl text-center flex flex-col items-center gap-8">
        <p className="font-sans text-xs uppercase tracking-[0.2em] text-brass">
          Something Went Wrong
        </p>
        <h1 className="font-serif font-light uppercase tracking-[6px] text-4xl md:text-5xl text-ink leading-tight">
          Unexpected Error
        </h1>
        <div className="w-16 h-px bg-brass" aria-hidden="true" />
        <p className="font-sans text-base md:text-lg text-text-muted leading-relaxed">
          We apologize for the inconvenience. Please try again or return to the homepage.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
          <button
            onClick={() => reset()}
            className="inline-block bg-ink text-parchment font-sans text-xs uppercase tracking-[0.2em] px-8 py-4 hover:bg-charcoal transition-colors cursor-pointer"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="inline-block border border-ink text-ink font-sans text-xs uppercase tracking-[0.2em] px-8 py-4 hover:bg-ink hover:text-parchment transition-colors"
          >
            Return Home
          </Link>
        </div>
      </div>
    </section>
  );
}

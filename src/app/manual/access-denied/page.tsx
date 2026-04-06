import { Metadata } from "next";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Access Required — A-Frame of Napa",
  robots: { index: false, follow: false },
};

export default function AccessDeniedPage() {
  return (
    <section className="flex min-h-[calc(100vh-72px)] items-center justify-center bg-parchment px-6">
      <div className="max-w-md text-center">
        <h1 className="font-serif font-extralight uppercase tracking-[4px] text-3xl md:text-4xl text-ink leading-tight">
          Access Required
        </h1>
        <div className="mx-auto mt-4 h-px w-20 bg-brass" />
        <p className="mt-6 font-sans text-base text-text-muted leading-relaxed">
          The house manual is available exclusively to confirmed guests. If you
          have a booking, check your welcome message for your personal access link.
        </p>
        <p className="mt-4 font-sans text-sm text-text-muted">
          Link expired? Contact us at{" "}
          <a
            href="mailto:stay@aframeofnapa.com"
            className="text-brass underline underline-offset-2"
          >
            stay@aframeofnapa.com
          </a>{" "}
          for a new one.
        </p>
        <div className="mt-8">
          <Button variant="primary" href="/">
            Return Home
          </Button>
        </div>
      </div>
    </section>
  );
}

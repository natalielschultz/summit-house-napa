import Link from "next/link";
import { SITE } from "@/lib/constants";
import Logo from "@/components/ui/Logo";

const FOOTER_COL_CLASS =
  "text-sm text-parchment/80 transition-colors duration-200 hover:text-sage";
const FOOTER_HEADING_CLASS =
  "mb-4 text-xs font-medium uppercase tracking-widest text-text-muted";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink text-parchment">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Row 1: brand + contact */}
        <div className="grid gap-12 md:grid-cols-2">
          {/* Logo & tagline */}
          <div>
            <Link href="/" className="inline-block">
              <Logo className="h-8 w-auto text-parchment" />
            </Link>
            <p className="mt-3 text-sm text-text-muted">
              Mount Veeder &middot; Napa Valley &middot; California
            </p>
          </div>

          {/* Contact */}
          <div className="md:text-right">
            <h3 className={FOOTER_HEADING_CLASS}>Contact</h3>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href={`mailto:${SITE.email}`}
                className="text-parchment/80 transition-colors duration-200 hover:text-sage"
              >
                {SITE.email}
              </a>
              <a
                href={`https://instagram.com/${SITE.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-parchment/80 transition-colors duration-200 hover:text-sage"
              >
                @{SITE.instagram}
              </a>
            </div>
          </div>
        </div>

        {/* Row 2: navigation columns */}
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className={FOOTER_HEADING_CLASS}>The Property</h3>
            <nav className="flex flex-col gap-3">
              <Link href="/property" className={FOOTER_COL_CLASS}>Property</Link>
              <Link href="/experience" className={FOOTER_COL_CLASS}>Experience</Link>
              <Link href="/location" className={FOOTER_COL_CLASS}>Location</Link>
              <Link href="/gallery" className={FOOTER_COL_CLASS}>Gallery</Link>
            </nav>
          </div>
          <div>
            <h3 className={FOOTER_HEADING_CLASS}>Planning Your Stay</h3>
            <nav className="flex flex-col gap-3">
              <Link href="/availability" className={FOOTER_COL_CLASS}>Availability</Link>
              <Link href="/reviews" className={FOOTER_COL_CLASS}>Reviews</Link>
              <Link href="/about" className={FOOTER_COL_CLASS}>Our Story</Link>
            </nav>
          </div>
          <div>
            <h3 className={FOOTER_HEADING_CLASS}>Journal &amp; Press</h3>
            <nav className="flex flex-col gap-3">
              <Link href="/blog" className={FOOTER_COL_CLASS}>Journal</Link>
              <Link href="/mount-veeder-napa-area-guide" className={FOOTER_COL_CLASS}>Mount Veeder Guide</Link>
              <Link href="/press" className={FOOTER_COL_CLASS}>Press</Link>
            </nav>
          </div>
          <div>
            <h3 className={FOOTER_HEADING_CLASS}>Extended Stays</h3>
            <nav className="flex flex-col gap-3">
              <Link href="/remote-work-retreat-napa-valley" className={FOOTER_COL_CLASS}>Remote Work Retreats</Link>
            </nav>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 flex flex-col gap-4 border-t border-parchment/10 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-text-muted">
            &copy; {currentYear} {SITE.name}. All rights reserved.
          </p>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-xs">
            <Link
              href="/privacy-policy"
              className="text-text-muted transition-colors duration-200 hover:text-sage"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="text-text-muted transition-colors duration-200 hover:text-sage"
            >
              Terms &amp; Conditions
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

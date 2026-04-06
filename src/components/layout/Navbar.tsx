"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { NAV_LINKS, SITE } from "@/lib/constants";
import Logo from "@/components/ui/Logo";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  const headerBg = useTransform(
    scrollY,
    [0, 80],
    ["rgba(245, 242, 237, 0)", "rgba(245, 242, 237, 1)"]
  );

  const headerShadow = useTransform(
    scrollY,
    [0, 80],
    ["0 0 0 0 rgba(0,0,0,0)", "0 1px 3px 0 rgba(0,0,0,0.06)"]
  );

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        style={{ backgroundColor: headerBg, boxShadow: headerShadow }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Logo className="h-8 w-auto md:h-10 text-ink" />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-serif text-xs uppercase tracking-[1.8px] text-charcoal transition-colors duration-200 hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex">
            <Link
              href="/availability"
              className="font-serif bg-brass px-5 py-2.5 text-xs uppercase tracking-[2.5px] text-ink transition-colors duration-200 hover:bg-brass-light"
            >
              Inquire Now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-6 bg-ink"
              transition={{ duration: 0.3 }}
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block h-0.5 w-6 bg-ink"
              transition={{ duration: 0.2 }}
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-6 bg-ink"
              transition={{ duration: 0.3 }}
            />
          </button>
        </nav>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-parchment lg:hidden"
          >
            <nav className="flex flex-col items-center gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-serif text-2xl uppercase tracking-[1.8px] text-ink"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3, delay: NAV_LINKS.length * 0.05 }}
              >
                <Link
                  href="/availability"
                  onClick={() => setMobileOpen(false)}
                  className="font-serif mt-4 inline-block bg-brass px-8 py-3 text-xs uppercase tracking-[2.5px] text-ink transition-colors duration-200 hover:bg-brass-light"
                >
                  Inquire Now
                </Link>
              </motion.div>
            </nav>

            <p className="absolute bottom-12 text-sm text-text-muted">
              {SITE.tagline}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

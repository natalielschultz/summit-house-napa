"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface FAQItem {
  question: string;
  answer: string;
  link?: { label: string; href: string };
}

const faqData: FAQItem[] = [
  {
    question: "Where is Summit House located?",
    answer:
      "Summit House is at approximately 1,800 feet elevation on Mount Veeder, in the Mayacamas Mountains of western Napa County, California. The property is 15 minutes by car from downtown Napa. Mount Veeder is a wine-growing AVA and home to some of the most significant redwood stands in Napa County. The exact address is private and shared only with confirmed guests.",
  },
  {
    question: "Why is the minimum stay 31 nights?",
    answer:
      "The 31-night minimum is required by Napa's short-term rental regulations — it's not a stylistic choice. The City of Napa caps vacation-rental permits at 41 (all currently issued, with no new applications accepted), and Napa County applies similar restrictions to unincorporated areas including Mount Veeder. Stays of 31 nights or longer fall outside the short-term rental framework, which is why monthly residency is the only option here. A full month also happens to be the right way to experience Summit House.",
    link: { label: "Read: Why 31 Days?", href: "/blog/why-napa-rentals-require-31-days" },
  },
  {
    question: "How does Summit House compare to valley floor rentals?",
    answer:
      "Most Napa Valley vacation rentals are vineyard-adjacent weekend estates that charge $30,000 to $50,000 per month during peak season. Summit House starts at $12,000 per 31-night stay and reaches $18,000 at peak harvest (September–October). For a guest taking a two-week Napa trip, that's under $400 per night — with the remaining two weeks available for rotating guests, a weekender group, or a seasonal residency. The setting is also different: several private acres of redwoods and panoramic views rather than a vineyard patio.",
  },
  {
    question: "What is included in the monthly rate?",
    answer:
      "Your rate covers all utilities — water, electric, gas, and trash. It also includes Starlink high-speed internet, full access to the hot tub, sauna, and outdoor shower, basic toiletries and cleaning supplies, and a welcome bottle of Napa wine with a handwritten note from your host.",
  },
  {
    question: "What is the cancellation policy?",
    answer:
      "We require a 50% deposit to confirm your booking, with the balance due 31 days before check-in. Cancellations made more than 60 days before check-in receive a full refund of the deposit. Cancellations within 31–60 days receive a 50% refund. We are happy to discuss rescheduling options on a case-by-case basis.",
  },
  {
    question: "Is cleaning included?",
    answer:
      "A professional deep clean is included before your arrival and after your departure. For stays longer than one month, we offer optional mid-stay cleaning services at an additional cost. Basic cleaning supplies are provided for day-to-day upkeep.",
  },
  {
    question: "What is the check-in process?",
    answer:
      "Check-in is at 3:00 PM and checkout is at 11:00 AM. We use a keyless entry system, so you can arrive on your own schedule. Your host will send detailed arrival instructions — including gate code, parking guidance, and a digital house manual — the week before your stay, and is available by phone or text on the day of arrival.",
  },
  {
    question: "How fast is the WiFi?",
    answer:
      "We use Starlink satellite internet, which delivers reliable speeds of 100–200 Mbps download and 20–40 Mbps upload — more than sufficient for video conferencing, streaming, and remote work. Coverage extends throughout the house and outdoor areas including the deck and zen garden.",
  },
  {
    question: "Are pets allowed?",
    answer:
      "We welcome well-behaved dogs on a case-by-case basis. Please mention your pet in your inquiry so we can discuss any specifics. We do ask that dogs stay off the furniture and are supervised near the hot tub and sauna areas.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(index: number) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 md:px-12">
        <div className="flex flex-col items-center gap-4 mb-14 text-center">
          <h2 className="font-serif font-extralight uppercase tracking-[4px] text-[32px] md:text-5xl text-ink leading-tight">
            Frequently Asked Questions
          </h2>
          <div
            className="bg-brass"
            style={{ width: 120, height: 1 }}
            aria-hidden="true"
          />
        </div>
        <div className="flex flex-col divide-y divide-sage/30">
          {faqData.map((item, index) => (
            <div key={index} className="py-5">
              <button
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between text-left cursor-pointer"
                aria-expanded={openIndex === index}
              >
                <span className="font-sans text-base md:text-lg text-ink pr-4">
                  {item.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="text-brass text-2xl leading-none flex-shrink-0"
                >
                  +
                </motion.span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      height: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
                      opacity: { duration: 0.3, delay: 0.1 },
                    }}
                    className="overflow-hidden"
                  >
                    <p className="font-sans text-sm md:text-base text-text-muted leading-relaxed pt-4 pb-2">
                      {item.answer}
                    </p>
                    {item.link && (
                      <Link
                        href={item.link.href}
                        className="inline-block font-sans text-xs uppercase tracking-[0.2em] text-brass hover:text-ink transition-colors pb-2"
                      >
                        {item.link.label} &rarr;
                      </Link>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

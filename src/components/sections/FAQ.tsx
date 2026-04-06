"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is the minimum stay?",
    answer:
      "Our minimum stay is one month. The A-Frame is designed for extended stays — whether you're working remotely, taking a sabbatical, or simply slowing down. We find that a full month allows guests to truly settle into the rhythm of the mountain.",
  },
  {
    question: "Are pets allowed?",
    answer:
      "We welcome well-behaved dogs on a case-by-case basis. Please mention your pet in your inquiry so we can discuss any specifics. We do ask that dogs stay off the furniture and are supervised near the hot tub and sauna areas.",
  },
  {
    question: "What is the cancellation policy?",
    answer:
      "We require a 50% deposit to confirm your booking, with the balance due 30 days before check-in. Cancellations made more than 60 days before check-in receive a full refund of the deposit. Cancellations within 30-60 days receive a 50% refund. We are happy to discuss rescheduling options on a case-by-case basis.",
  },
  {
    question: "Is cleaning included?",
    answer:
      "A professional deep clean is included before your arrival and after your departure. For stays longer than one month, we offer optional mid-stay cleaning services at an additional cost. Basic cleaning supplies are provided for day-to-day upkeep.",
  },
  {
    question: "What is included in the monthly rate?",
    answer:
      "Your rate covers all utilities — water, electric, gas, and trash. It also includes Starlink high-speed internet, full access to the hot tub, sauna, and outdoor shower, basic toiletries and cleaning supplies, and a welcome bottle of Napa wine with a handwritten note from your host.",
  },
  {
    question: "What is the check-in process?",
    answer:
      "Check-in is at 3:00 PM and checkout is at 11:00 AM. We use a keyless entry system, so you can arrive on your own schedule. Your host will send detailed arrival instructions — including gate code, parking guidance, and a digital house manual — the week before your stay, and is available by phone or text on the day of arrival.",
  },
  {
    question: "How fast is the WiFi?",
    answer:
      "We use Starlink satellite internet, which delivers reliable speeds of 100-200 Mbps download and 20-40 Mbps upload — more than sufficient for video conferencing, streaming, and remote work. Coverage extends throughout the house and outdoor areas including the deck and zen garden.",
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

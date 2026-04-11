"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

interface HeroProps {
  image: string;
  title: string;
  subtitle?: string;
  cta?: { label: string; href: string };
  overlayOpacity?: number;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
};

export default function Hero({
  image,
  title,
  subtitle,
  cta,
  overlayOpacity = 0.3,
}: HeroProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Image
        src={image}
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
        priority
      />
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to top, rgba(26,26,26,${overlayOpacity + 0.3}) 0%, rgba(26,26,26,${overlayOpacity * 0.3}) 50%, rgba(26,26,26,${overlayOpacity * 0.1}) 100%)`,
        }}
      />
      <div className="relative z-10 flex h-full items-end pb-20 md:pb-28">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6 max-w-3xl"
          >
            <motion.h1
              variants={itemVariants}
              className="font-serif font-light uppercase tracking-[6px] text-5xl md:text-7xl text-parchment leading-[1.1]"
              style={{ textShadow: "0 2px 12px rgba(0,0,0,0.4)" }}
            >
              {title}
            </motion.h1>
            {subtitle && (
              <motion.p
                variants={itemVariants}
                className="font-sans text-lg md:text-xl text-parchment/90 max-w-xl leading-relaxed"
                style={{ textShadow: "0 2px 8px rgba(0,0,0,0.3)" }}
              >
                {subtitle}
              </motion.p>
            )}
            {cta && (
              <motion.div variants={itemVariants}>
                <Button variant="primary" href={cta.href}>
                  {cta.label}
                </Button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

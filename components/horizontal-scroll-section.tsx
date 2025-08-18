"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

/* -----------------------------
   Reusable fullscreen hero
------------------------------*/
type HeroProps = {
  href: string;
  label: string;
  index: string; // "01" / "02" / ...
  src: string;
};

function FullscreenHero({ href, label, index, src }: HeroProps) {
  return (
    <motion.section
      className="group relative w-full h-[100svh] min-h-screen overflow-hidden"
      style={{ backgroundColor: "#0a1526" }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* Background image */}
      <Image
        src={src}
        alt={label}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Readability overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-transparent" />

      {/* Click layer — makes entire section clickable */}
      <Link
        href={href}
        aria-label={`Go to ${label}`}
        className="absolute inset-0 z-30 block"
      />

      {/* Content overlay (non-interactive so clicks hit the link below) */}
      <div className="pointer-events-none relative z-20 h-full max-w-2xl mx-auto px-6 flex items-end pb-10 md:pb-14">
        <div className="w-full">
          <div className="text-white/45 text-xs md:text-sm tracking-[0.2em] mb-2">
            {index}
          </div>

          <div className="flex items-center justify-between gap-4">
            <h2 className="text-white font-light tracking-wide text-2xl md:text-3xl">
              {label}
            </h2>

            {/* Fancy Explore pill (decorative; section itself is clickable) */}
            <div className="hidden md:inline-flex relative items-center gap-2 text-amber-300/90 text-sm uppercase tracking-wider border border-amber-300/40 rounded-full px-3 py-1 overflow-hidden">
              {/* shimmer sweep */}
              <motion.span
                className="absolute inset-y-0 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-amber-300/15 to-transparent"
                initial={false}
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
              />
              <span className="relative z-10">Explore</span>
              <motion.svg
                width="25"
                height="25"
                viewBox="0 0 24 24"
                fill="none"
                className="relative z-10 translate-y-[1px]"
                animate={{ x: [0, 4, 0] }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <path
                  d="M5 12h14M13 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            </div>
          </div>

          <div className="mt-3 h-[2px] w-14 bg-amber-400/90 rounded-full transition-all duration-500 group-hover:w-20" />
        </div>
      </div>

      {/* Micro hover effect on the whole frame */}
      <motion.div
        className="absolute inset-0"
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.4 }}
      />
    </motion.section>
  );
}

/* -----------------------------
   Page sections wrapper
------------------------------*/
export default function ProjectSections() {
  return (
    <div
      className="flex flex-col gap-5 md:gap-11"
      style={{ backgroundColor: "#0a1526" }}
    >
      <FullscreenHero
        href="/kitchens"
        label="Modular Kitchens"
        index="01"
        src="/images/kitchen11.png"
      />
      <FullscreenHero
        href="/wardrobes"
        label="Wardrobes"
        index="02"
        src="/images/wrd11.png"
      />
      <FullscreenHero
        href="/shutters"
        label="Shutters"
        index="03"
        src="/images/shut1.png"
      />
      <FullscreenHero
        href="/partitions"
        label="Partitions"
        index="04"
        src="/images/part11.png"
      />
    </div>
  );
}

// components/SectionReveal.tsx
"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

type Props = {
  children: React.ReactNode;
  id?: string;
  className?: string; // padding, bg, etc.
  curtainGradient?: string; // tailwind gradient classes
  duration?: number;
};

export default function SectionReveal({
  children,
  id,
  className = "",
  curtainGradient = "from-[#0a1526] via-black/40 to-transparent",
  duration = 0.8,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section
      id={id}
      ref={ref}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Curtain overlay */}
      <motion.div
        initial={{ y: 0 }}
        whileInView={{ y: "-100%" }}
        viewport={{ amount: 0.3, once: true }}
        transition={{ duration, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute inset-0 z-10"
      >
        <div
          className={`absolute inset-0 bg-gradient-to-b ${curtainGradient}`}
        />
      </motion.div>

      {/* Content fade/slide */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3, once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-0"
      >
        {children}
      </motion.div>
    </section>
  );
}

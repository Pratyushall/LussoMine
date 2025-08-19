// components/HeroSection.tsx
"use client";

import { useRef } from "react";
import { Playfair_Display } from "next/font/google";
import { motion, useScroll, useTransform } from "framer-motion";

const playfair = Playfair_Display({ subsets: ["latin"], display: "swap" });

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section
      ref={ref}
      className="relative isolate min-h-[100dvh] overflow-hidden z-[1] kill-overlays"
      style={{
        backgroundColor: "fff",
        backgroundImage: 'url("/images/hero-2.png?v=2")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* 👇 Blur overlay */}
      <div className="absolute inset-0 z-[1]" />

      <div className="relative z-[2] h-[100dvh] flex items-center justify-center px-6">
        <div className={`text-center space-y-4 ${playfair.className}`}>
          {[
            "Let your space speak in your language...",
            "The canvas is yours, always!",
          ].map((line, i) => (
            <motion.h2
              key={i}
              style={{ y: i === 0 ? y1 : y2 }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              className="text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] tracking-wide font-normal text-2xl md:text-2xl leading-tight"
            >
              {line}
            </motion.h2>
          ))}
        </div>
      </div>
    </section>
  );
}

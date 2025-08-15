"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // gentle parallax for the gallery strip
  const yParallax = useTransform(scrollYProgress, [0, 1], [50, -50]);

  // your images (we'll show first 4)
  const gallery = [
    "/images/Lshape5.png",
    "/images/minimalkit3.jpg",
    "/images/walkin4.png",
    "/images/openable1.png",
    "/images/gallery1.png",
    "/images/island2.png",
  ];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-32 min-h-screen"
      style={{ backgroundColor: "#0a1526" }}
    >
      {/* ambient glows */}
      <motion.div
        className="absolute -top-10 -left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"
        style={{ y: yParallax }}
      />
      <motion.div
        className="absolute -bottom-16 -right-12 w-[34rem] h-[34rem] bg-white/5 rounded-full blur-3xl"
        style={{ y: useTransform(yParallax, (v) => -v) }}
      />

      {/* heading */}
      <div className="container mx-auto px-6 relative z-[60]">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className={`${playfair.className} text-6xl md:text-8xl font-light text-white mb-8 tracking-tight`}
            animate={{
              textShadow: [
                "0 0 30px rgba(255,255,255,0.12)",
                "0 0 60px rgba(255,255,255,0.22)",
                "0 0 30px rgba(255,255,255,0.12)",
              ],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            About{" "}
            <span className="text-transparent font-light bg-gradient-to-r from-amber-400 via-amber-600 to-amber-800 bg-clip-text">
              LUSSO
            </span>
          </motion.h1>

          <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto" />
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            We compose elegance out of beautiful chaos — layered, lived-in, and
            irresistibly refined.
          </p>
        </motion.div>
      </div>

      {/* NEW: 4-up gallery with big gradient border (not clickable) */}
      <motion.div
        className="relative mx-auto max-w-6xl px-6"
        style={{ y: yParallax }}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, delay: 0.15 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {gallery.slice(0, 4).map((src, i) => (
            <motion.figure
              key={src}
              className="relative group"
              whileHover={{
                y: -8,
                scale: 1.02,
                rotate: i % 2 === 0 ? -0.3 : 0.3,
              }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
            >
              {/* big amber/yellow gradient border */}
              <div className="relative rounded-3xl p-[10px] md:p-[12px] bg-gradient-to-br from-white-300 via-white-400 to-amber-600">
                {/* subtle outer glow on hover */}
                <div className="pointer-events-none absolute -inset-3 rounded-[28px] bg-amber-400/0 blur-2xl transition-opacity duration-500 group-hover:bg-amber-400/20" />

                {/* image container */}
                <div className="relative rounded-2xl overflow-hidden bg-white/5 ring-1 ring-white/10 aspect-[4/5]">
                  <Image
                    src={src}
                    alt={`Lusso gallery image ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 90vw, (max-width: 1024px) 40vw, 25vw"
                    priority={i < 2}
                  />
                  {/* gentle top fade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                </div>
              </div>
            </motion.figure>
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        className="text-center mt-16 relative z-[60]"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <Link href="/experience" className="inline-block">
          <span
            className="inline-flex items-center justify-center px-10 py-4 rounded-full text-black font-medium tracking-wide
                       bg-gradient-to-r from-amber-400 via-amber-500 to-amber-700
                       hover:from-amber-300 hover:via-amber-500 hover:to-amber-800
                       shadow-[0_8px_30px_rgba(251,191,36,0.25)] transition duration-300"
          >
            Discover the Lusso Experience
          </span>
        </Link>
      </motion.div>
    </section>
  );
}

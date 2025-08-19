"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/footer";

/** -----------------------------------------------------------
 *  PRODUCTS PAGE — Immersive full-screen sections
 * ----------------------------------------------------------- */
export default function ProductsPage() {
  return (
    <div style={{ backgroundColor: "#0a1526" }} className="min-h-screen">
      <TopRightMenu />
      <ProductsHero /> {/* 👈 added back header */}
      <ProductsStack />
      <Footer />
    </div>
  );
}

/* ────────────────────────────────────────────────────────────
   Reusable top-right menu (unchanged)
   ──────────────────────────────────────────────────────────── */
function TopRightMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed top-5 right-5 z-[90]">
      <motion.button
        onClick={() => setOpen((v) => !v)}
        whileTap={{ scale: 0.96 }}
        className="relative px-4 py-2 rounded-full border border-white/20 text-white/90 backdrop-blur-sm bg-white/5 hover:bg-white/10 transition"
        aria-label="Open menu"
      >
        <span className="inline-flex items-center gap-2">
          <span aria-hidden>☰</span>
        </span>
      </motion.button>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 6 }}
          exit={{ opacity: 0, y: -8 }}
          className="mt-2 w-56 rounded-2xl overflow-hidden border border-white/15 bg-[#0a1526]/95 backdrop-blur-md shadow-xl"
        >
          {[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 transition"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </motion.div>
      )}
    </div>
  );
}

/* ────────────────────────────────────────────────────────────
   Products Hero (header text)
   ──────────────────────────────────────────────────────────── */
function ProductsHero() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section
      ref={ref}
      className="min-h-[100vh] flex items-center justify-center relative overflow-hidden"
    >
      {/* Ambient glows */}
      <motion.div
        className="absolute -top-20 -left-28 w-[28rem] h-[28rem] bg-gradient-to-r from-amber-400/10 to-pink-500/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.15, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute -bottom-28 -right-32 w-[32rem] h-[32rem] bg-gradient-to-r from-red-400/10 to-orange-500/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.12, 1], rotate: [0, -180, -360] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="text-6xl md:text-8xl font-thin text-white tracking-tight"
        >
          Our{" "}
          <span className="text-transparent bg-gradient-to-r from-amber-400 via-amber-600 to-amber-800 bg-clip-text">
            Products
          </span>
        </motion.h1>
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent my-6 mx-auto" />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-lg md:text-2xl text-white/75 leading-relaxed max-w-3xl mx-auto"
        >
          Explore kitchens, wardrobes, shutters and partitions, curated from the
          best B2B brands so you can mix, match & perfect.
        </motion.p>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────
   Full-screen stack — 4 sections (unchanged from your code)
   ──────────────────────────────────────────────────────────── */
function ProductsStack() {
  const cards = [
    {
      name: "Kitchens",
      href: "/kitchens",
      blurb: "Islands, G, L & Galley — crafted for your flow.",
      img: "/images/kitchen11.png",
    },
    {
      name: "Wardrobes",
      href: "/wardrobes",
      blurb: "Walk-in, sliding, openable — boutique organization.",
      img: "/images/wrd11.png",
    },
    {
      name: "Shutters",
      href: "/shutters",
      blurb: "Light, privacy, and quiet — perfectly balanced.",
      img: "/images/shut1.png",
    },
    {
      name: "Partitions",
      href: "/partitions",
      blurb: "Metal & glass, shelving, smart glass — define space.",
      img: "/images/part11.png",
    },
  ];

  return (
    <div className="space-y-20 md:space-y-24">
      {cards.map((c, i) => (
        <FullScreenProductSection key={c.name} {...c} index={i} />
      ))}

      {/* Bottom CTA */}
      <div className="py-16 md:py-24 flex justify-center">
        <GradientArrowBtn
          asLink
          href="/startvision"
          label="Start your vision"
          big
        />
      </div>
    </div>
  );
}

type SectionProps = {
  name: string;
  href: string;
  blurb: string;
  img: string;
  index: number;
};

function FullScreenProductSection({
  name,
  href,
  blurb,
  img,
  index,
}: SectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] py-8 md:py-14"
      style={{ backgroundColor: "#0a1526" }}
    >
      {/* Big gap around the image */}
      <div className="h-full w-full px-6 md:px-12 xl:px-20">
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: index * 0.05 }}
          className="relative h-[calc(100svh-4rem)] md:h-[calc(100svh-6rem)] rounded-3xl overflow-hidden border border-white/15 shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
        >
          {/* Background Image */}
          <img
            src={img || "/placeholder.svg?height=1600&width=2400&text=Image"}
            alt={name}
            className="absolute inset-0 w-full h-full object-cover will-change-transform"
          />

          {/* Soft overlay for legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-black/20" />

          {/* On-image content */}
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-10 lg:p-14">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[10vw] leading-[0.95] md:text-7xl lg:text-8xl font-light tracking-tight text-white"
            >
              {name}
            </motion.h2>

            <motion.p
              initial={{ y: 16, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-3 md:mt-4 max-w-2xl text-white/80 text-base md:text-lg"
            >
              {blurb}
            </motion.p>

            <motion.div
              initial={{ y: 16, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6"
            >
              <GradientArrowBtn asLink href={href} label={`Explore ${name}`} />
            </motion.div>
          </div>

          {/* A very subtle inner sheen (no “frame” look) */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,rgba(255,255,255,0.06)_30%,transparent_60%)]" />
        </motion.div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────
   Fancy gradient arrow button
   - Shimmering animated gradient background
   - Soft glow on hover
   - Works as <button> or Link
   ──────────────────────────────────────────────────────────── */
function GradientArrowBtn({
  label,
  href,
  asLink = false,
  big = false,
}: {
  label: string;
  href?: string;
  asLink?: boolean;
  big?: boolean;
}) {
  const Btn = (
    <motion.span
      whileTap={{ scale: 0.98 }}
      className={[
        "relative inline-flex items-center justify-center rounded-full font-medium",
        "text-black",
        big
          ? "px-10 py-4 text-base md:text-lg"
          : "px-6 py-3 text-sm md:text-base",
        // animated gradient bg
        "bg-[length:200%_200%] bg-gradient-to-r from-amber-300 via-amber-500 to-rose-500",
        "animate-[gradientShift_6s_linear_infinite]",
        "shadow-[0_12px_36px_rgba(251,191,36,0.25)]",
      ].join(" ")}
      style={{
        // keyframes via inline style fallback for Tailwind-less @keyframes
        // (Tailwind not defining gradientShift by default)
        // You can move this to global CSS if you prefer.
        animationName: "gradientShift",
      }}
    >
      <span>{label}</span>
      <span
        aria-hidden
        className="ml-2 inline-block translate-x-0 transition-transform duration-300 group-hover:translate-x-1"
      >
        →
      </span>
      {/* subtle inner highlight */}
      <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-white/25"></span>
      <style jsx>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </motion.span>
  );

  return asLink && href ? (
    <Link href={href} className="group inline-block">
      {Btn}
    </Link>
  ) : (
    <button className="group">{Btn}</button>
  );
}

"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/footer";

export default function ProductsPage() {
  return (
    <div
      style={{ backgroundColor: "#0a1526" }}
      className="min-h-screen relative"
    >
      {/* If you want this on EVERY page: move <TopRightMenu /> into app/layout.tsx */}
      <TopRightMenu />

      <ProductsHero />
      <QuiltGallery />

      <Footer />
    </div>
  );
}

/* ────────────────────────────────────────────────────────────
   Top-right menu (reusable)
   ──────────────────────────────────────────────────────────── */
function TopRightMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed top-5 right-5 z-[80]">
      <motion.button
        onClick={() => setOpen((v) => !v)}
        whileTap={{ scale: 0.96 }}
        className="relative px-4 py-2 rounded-full border border-white/20 text-white/90 backdrop-blur-sm
                   bg-white/5 hover:bg-white/10 transition"
        aria-label="Open menu"
      >
        <span className="inline-flex items-center gap-2">
          <span aria-hidden>☰</span>
          <span>Menu</span>
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
            { label: "Kitchens", href: "/kitchens" },
            { label: "Wardrobes", href: "/wardrobes" },
            { label: "Shutters", href: "/shutters" },
            { label: "Partitions", href: "/partitions" },
            { label: "Experience", href: "/experience" },
            { label: "Start your vision", href: "/startvision" },
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
   Hero
   ──────────────────────────────────────────────────────────── */
function ProductsHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section
      ref={sectionRef}
      className="min-h-[64vh] md:min-h-[70vh] relative overflow-hidden flex items-center"
    >
      {/* Soft ambient glows */}
      <motion.div
        className="absolute -top-16 -left-20 w-[28rem] h-[28rem] bg-gradient-to-r from-amber-400/10 to-pink-500/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.15, 1], rotate: [0, 180, 360] }}
        transition={{
          duration: 24,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute -bottom-24 -right-24 w-[36rem] h-[36rem] bg-gradient-to-r from-red-400/10 to-orange-500/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.12, 1], rotate: [0, -180, -360] }}
        transition={{
          duration: 28,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
        >
          <h1 className="text-6xl md:text-8xl font-thin text-white tracking-tight">
            Our{" "}
            <span className="text-transparent bg-gradient-to-r from-amber-400 via-amber-600 to-amber-800 bg-clip-text">
              Products
            </span>
          </h1>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent my-6" />
          <p className="text-lg md:text-xl text-white/75 leading-relaxed">
            Explore kitchens, wardrobes, shutters and partitions — curated from
            the best B2B brands so you can mix, match & perfect.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────
   Quilt Gallery — 4 products, big amber frames, engaging hover
   Layout:
   [ Kitchens   ][ Wardrobes ]
   [  Shutters  ][ Partitions ]
   ──────────────────────────────────────────────────────────── */
function QuiltGallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const cards = [
    {
      name: "Kitchens",
      href: "/kitchens",
      blurb: "Islands, G, L & Galley — crafted for your flow.",
      img: "/images/bohokit6.jpg", // replace with your real images
    },
    {
      name: "Wardrobes",
      href: "/wardrobes",
      blurb: "Walk-in, sliding, openable — boutique organization.",
      img: "/images/openable13.png",
    },
    {
      name: "Shutters",
      href: "/shutters",
      blurb: "Light, privacy, and quiet — perfectly balanced.",
      img: "/images/8.jpg",
    },
    {
      name: "Partitions",
      href: "/partitions",
      blurb: "Metal & glass, shelving, smart glass — define space.",
      img: "/images/6.jpg",
    },
  ];

  return (
    <section ref={sectionRef} className="relative pb-24 pt-6">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {cards.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group"
            >
              {/* Whole card is clickable */}
              <Link href={c.href} className="block focus:outline-none">
                {/* Amber frame */}
                <div className="relative rounded-[28px] p-[12px] bg-gradient-to-br from-white-300 via-yellow-400 to-black-600">
                  {/* subtle outer halo on hover */}
                  <div className="pointer-events-none absolute -inset-3 rounded-[32px] bg-amber-400/0 blur-2xl transition-opacity duration-500 group-hover:bg-amber-400/15" />
                  {/* Image container */}
                  <div className="relative rounded-2xl overflow-hidden bg-white/5 ring-1 ring-white/10 aspect-[4/3] sm:aspect-[4/3] lg:aspect-[5/4]">
                    <img
                      src={
                        c.img ||
                        "/placeholder.svg?height=800&width=1200&text=Image"
                      }
                      alt={c.name}
                      className="w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.05]"
                    />
                    {/* sheen on hover */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-transparent opacity-70" />
                    <motion.div
                      className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,rgba(255,255,255,0.06)_30%,transparent_60%)]"
                      initial={{ x: "-120%" }}
                      animate={isInView ? { x: ["-120%", "120%"] } : {}}
                      transition={{
                        duration: 3.2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: i * 0.4,
                      }}
                    />
                    {/* copy */}
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="text-2xl font-light text-white">
                        {c.name}
                      </h3>
                      <p className="text-white/70 text-sm mt-1 max-w-[40ch]">
                        {c.blurb}
                      </p>

                      {/* per-card button */}
                      <span
                        className="mt-4 inline-flex items-center justify-center px-5 py-2 rounded-full text-black text-sm font-medium
                                   bg-gradient-to-r from-black-400 via-yellow-300 to-white-700
                                   hover:from-amber-300 hover:via-amber-500 hover:to-amber-800
                                   shadow-[0_10px_30px_rgba(251,191,36,0.25)] transition"
                      >
                        View {c.name}
                        <motion.span
                          aria-hidden
                          className="ml-2"
                          animate={{ x: [0, 6, 0] }}
                          transition={{
                            repeat: Number.POSITIVE_INFINITY,
                            duration: 1.4,
                          }}
                        >
                          →
                        </motion.span>
                      </span>
                    </div>

                    {/* tiny accent corners (just enough drama) */}
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-amber-300/60" />
                      <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-amber-300/60" />
                      <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-amber-300/60" />
                      <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-amber-300/60" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Optional: bottom tagline CTA */}
        <div className="text-center mt-16">
          <Link href="/startvision" className="inline-block">
            <span
              className="inline-flex items-center justify-center px-10 py-4 rounded-full text-black font-medium tracking-wide
                         bg-gradient-to-r from-amber-400 via-amber-500 to-amber-700
                         hover:from-amber-300 hover:via-amber-500 hover:to-amber-800
                         shadow-[0_8px_30px_rgba(251,191,36,0.25)] transition duration-300"
            >
              Start your vision
              <motion.span
                aria-hidden
                className="ml-2"
                animate={{ x: [0, 6, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.4 }}
              >
                →
              </motion.span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

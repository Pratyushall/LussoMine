// app/experience/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import Footer from "@/components/footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export default function ExperiencePage() {
  return (
    <main
      className="min-h-screen relative"
      style={{ backgroundColor: "#0a1526" }}
    >
      <TopRightMenu /> {/* ← Menu */}
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* soft ambient glows */}
        <motion.div
          className="absolute -top-16 -left-16 w-[28rem] h-[28rem] bg-white/5 rounded-full blur-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        />
        <motion.div
          className="absolute -bottom-24 -right-24 w-[36rem] h-[36rem] bg-white/5 rounded-full blur-3xl"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        />

        <div className="relative z-10 container mx-auto px-6 py-24">
          <motion.h1
            className={`${playfair.className} text-5xl md:text-7xl font-light text-white tracking-tight`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Discover the{" "}
            <span className="text-transparent bg-gradient-to-r from-amber-400 via-amber-600 to-amber-800 bg-clip-text">
              Lusso Experience
            </span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-lg text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            Step into our world of material samples, finishes, and live builds.
            Feel the craftsmanship, test the details, and design your space with
            our team—up close.
          </motion.p>

          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            <a href="#visit" className="inline-block">
              <span
                className="inline-flex items-center justify-center px-8 py-3 rounded-full text-black font-medium tracking-wide
                           bg-gradient-to-r from-amber-400 via-amber-500 to-amber-700
                           hover:from-amber-300 hover:via-amber-500 hover:to-amber-800
                           shadow-[0_8px_30px_rgba(251,191,36,0.25)] transition duration-300"
              >
                Plan your visit
              </span>
            </a>
          </motion.div>
        </div>
      </section>
      {/* ADDRESS & HOURS */}
      <section className="relative z-10 container mx-auto px-6 pb-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Address card with amber frame */}
          <motion.div
            className="relative rounded-[26px] p-[2px] bg-gradient-to-r from-amber-300/40 via-amber-500/40 to-amber-700/40"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative rounded-[24px] bg-white/5 ring-1 ring-white/10 p-6">
              <h2 className="text-white text-2xl font-light">Address</h2>
              <div className="mt-4 space-y-1 text-white/90">
                <p>Lusso Experience Center</p>
                <p>12, Indiranagar, 100 Feet Road</p>
                <p>Bengaluru, Karnataka 560038</p>
              </div>

              <div className="mt-6 grid sm:grid-cols-2 gap-4 text-sm">
                <div className="space-y-1">
                  <p className="text-white/60">Call</p>
                  <a
                    href="tel:+919494567900"
                    className="text-transparent bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text border-b border-transparent hover:border-amber-400/60 transition"
                  >
                    +91 94945 67900
                  </a>
                </div>
                <div className="space-y-1">
                  <p className="text-white/60">Email</p>
                  <a
                    href="mailto:hello@lusso.com"
                    className="text-transparent bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text border-b border-transparent hover:border-amber-400/60 transition"
                  >
                    hello@lusso.com
                  </a>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-white/60 text-sm">Hours</p>
                <ul className="mt-2 text-white/90 text-sm space-y-1">
                  <li>Mon–Sat: 10:00 – 19:00</li>
                  <li>Sun: 11:00 – 17:00</li>
                </ul>
              </div>

              <div className="mt-6 flex gap-4">
                <Link
                  href="/contact"
                  className="text-transparent bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text border-b border-transparent hover:border-amber-400/60 transition text-sm"
                >
                  Talk to a designer →
                </Link>
                <a
                  href="https://maps.google.com/?q=Lusso%20Experience%20Center%20Bengaluru"
                  target="_blank"
                  rel="noreferrer"
                  className="text-transparent bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text border-b border-transparent hover:border-amber-400/60 transition text-sm"
                >
                  Get directions →
                </a>
              </div>
            </div>
          </motion.div>

          {/* Why Visit */}
          <motion.div
            className="relative rounded-[26px] p-[2px] bg-gradient-to-r from-amber-300/20 via-amber-500/20 to-amber-700/20"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="relative rounded-[24px] bg-white/5 ring-1 ring-white/10 p-6">
              <h2 className="text-white text-2xl font-light">Why visit</h2>
              <ul className="mt-4 space-y-4 text-gray-300 leading-relaxed">
                <li>
                  <span className="text-white/90">Touch & see materials:</span>{" "}
                  compare stones, veneers, laminates, shutters, handles, and
                  hardware in real lighting.
                </li>
                <li>
                  <span className="text-white/90">Live mechanisms:</span> try
                  soft-close drawers, lift-ups, corner units, and pull-outs.
                </li>
                <li>
                  <span className="text-white/90">Personalized design:</span>{" "}
                  sit with our team; sketch layouts and pick palettes that fit
                  your home.
                </li>
                <li>
                  <span className="text-white/90">Transparent pricing:</span>{" "}
                  get a clear estimate, timelines, and a sample build roadmap.
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
      {/* BIG CTA SECTION (takes a whole section) */}
      <section id="visit" className="relative py-24 overflow-hidden">
        {/* faint glow band */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-amber-400/10 to-transparent" />
        <div className="relative container mx-auto px-6">
          <motion.div
            className="rounded-[36px] p-[3px] bg-gradient-to-r from-amber-300 via-amber-500 to-amber-700"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="rounded-[33px] bg-[#0a1526] p-12 md:p-16 flex items-center justify-center text-center"
              style={{ boxShadow: "0 20px 80px rgba(251,191,36,0.15)" }}
            >
              <div>
                <h3
                  className={`${playfair.className} text-3xl md:text-5xl font-light text-white`}
                >
                  Ready to feel Lusso in person?
                </h3>
                <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
                  Book a slot to tour the Experience Center and co-create your
                  kitchen, wardrobes, shutters, and partitions with our team.
                </p>

                <div className="mt-10">
                  <Link href="/visit" className="inline-block">
                    <span
                      className="inline-flex items-center gap-3 justify-center px-10 py-5 rounded-full text-black text-lg font-medium tracking-wide
                                 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-700
                                 hover:from-amber-300 hover:via-amber-500 hover:to-amber-800
                                 shadow-[0_12px_40px_rgba(251,191,36,0.35)] transition duration-300"
                    >
                      Visit the Experience Center
                      <motion.span
                        aria-hidden
                        animate={{ x: [0, 6, 0] }}
                        transition={{ repeat: Infinity, duration: 1.6 }}
                      >
                        →
                      </motion.span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer /> {/* ← Footer */}
    </main>
  );
}

/* ────────────────────────────────────────────────────────────
   Top-right menu (reuse across pages or move to app/layout.tsx)
   ──────────────────────────────────────────────────────────── */
function TopRightMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed top-5 right-5 z-[80]">
      <button
        onClick={() => setOpen((v) => !v)}
        className="relative px-4 py-2 rounded-full border border-white/20 text-white/90 backdrop-blur-sm
                   bg-white/5 hover:bg-white/10 transition"
        aria-label="Open menu"
      >
        <span className="inline-flex items-center gap-2">
          <span aria-hidden>☰</span>
          <span>Menu</span>
        </span>
      </button>

      {open && (
        <nav className="mt-2 w-56 rounded-2xl overflow-hidden border border-white/15 bg-[#0a1526]/95 backdrop-blur-md shadow-xl">
          {[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
            { label: "Kitchens", href: "/kitchens" },
            { label: "Wardrobes", href: "/wardrobes" },
            { label: "Shutters", href: "/shutters" },
            { label: "Partitions", href: "/partitions" },
            { label: "Experience", href: "/experience" },
            { label: "Start your vision", href: "/startvision" },
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
        </nav>
      )}
    </div>
  );
}

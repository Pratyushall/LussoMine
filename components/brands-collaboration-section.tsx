"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type Brand = {
  name: string;
  logo: string;
};

export default function BrandsCollaborationSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.25 });

  const brands: Brand[] = [
    { name: "Blum", logo: "/images/blum.png" },
    { name: "Aristo", logo: "/images/aristo.png" },
    { name: "Casantro", logo: "/images/casantro.jpeg" },
    { name: "Häfele", logo: "/images/hafele.png" },
    { name: "Hettich", logo: "/images/hettich.png" },
    { name: "Kesseböhmer", logo: "/images/kessebohmer.png" },
    { name: "Indoline", logo: "/images/indoline.png" },
    { name: "Liebherr", logo: "/images/liebherr.png" },
    { name: "Makwana", logo: "/images/makwana.png" },
    { name: "Navaki", logo: "/images/navaki.png" },
    { name: "Quantra Quartz", logo: "/images/quantra.png" },
    { name: "Salice", logo: "/images/salice.png" },
    { name: "Bosch", logo: "/images/bosch.png" },
    { name: "Siemens", logo: "/images/siemens.png" },
    { name: "Grayzo", logo: "/images/grayzo.png" },
    { name: "Forever", logo: "/images/forever.png" },
    { name: "Dyson", logo: "/images/dyson.png" },
    { name: "ceasertone", logo: "/images/ceaserstone.png" },
    { name: "Wesmark", logo: "/images/wesmark.png" },
  ];

  const primary = brands.slice(0, 7);
  const more = brands.slice(7);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-20"
      style={{ backgroundColor: "#0a1526" }}
    >
      {/* Background image */}
      <Image
        src="/images/bg11.png" // 👉 replace with your image path
        alt="Background"
        fill
        priority
        className="object-cover scale-110 blur-lg"
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-[#0a1526]/80" />
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-10 md:mb-14"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-light text-amber-300">
            Key Collaborations
          </h2>
          <div className="w-16 h-px bg-amber-400/60 mx-auto my-4" />
          <p className="text-base md:text-lg text-gray-300">
            Born from your vision, built by us.
          </p>
        </motion.div>

        {/* 7 brands + “Many more” */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {primary.map((b, idx) => (
            <motion.div
              key={b.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="rounded-xl border border-amber-200/30 
                         bg-gradient-to-br from-[#3f6096] to-[#eaecee] 
                         hover:from-[#6282b5] hover:to-[#6a8ac3] 
                         transition-colors will-change-transform"
            >
              <div className="aspect-[4/3] flex items-center justify-center p-4">
                <Image
                  src={b.logo}
                  alt={`${b.name} logo`}
                  width={220}
                  height={130}
                  className="max-h-16 w-auto opacity-95"
                />
              </div>
              <div className="px-4 pb-4 text-center">
                <p className="text-sm text-white/90">{b.name}</p>
              </div>
            </motion.div>
          ))}

          {/* Many More card */}
          <motion.button
            type="button"
            onClick={() => setOpen(true)}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 7 * 0.05 }}
            className="rounded-xl border border-amber-200/30 
                       bg-gradient-to-br from-[#3f6096]/30 to-[#eaecee]/30 
                       hover:from-[#6282b5]/50 hover:to-[#2f4063]/50 
                       transition-colors relative group overflow-hidden"
            aria-haspopup="dialog"
            aria-expanded={open}
          >
            <div className="aspect-[4/3] flex flex-col items-center justify-center gap-2">
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: [0.95, 1, 0.95] }}
                transition={{ duration: 1.6, repeat: Infinity }}
                className="w-8 h-8 relative"
              >
                <span className="absolute inset-0 rounded-full border border-amber-300/40" />
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-px bg-amber-300" />
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-5 w-px bg-amber-300" />
              </motion.div>
              <span className="text-base font-medium text-white">
                Many more
              </span>
              <span className="text-xs text-white/80">Tap to view</span>
            </div>
          </motion.button>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/startvision"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium
                       bg-amber-500/90 text-black hover:bg-amber-400 transition-colors"
          >
            Start Your Vision →
          </Link>
        </div>
      </div>

      {/* Dialog for remaining brands */}
      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="More brand collaborations"
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/60"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            {/* Panel */}
            <motion.div
              className="relative z-10 w-full max-w-4xl rounded-2xl border border-white/10 
                         bg-[#0f1b2f] p-6 shadow-xl max-h-[80vh] overflow-y-auto 
                         scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent"
              initial={{ scale: 0.96, y: 8, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.96, y: 8, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-white">
                  More Collaborations
                </h3>
                <button
                  onClick={() => setOpen(false)}
                  className="text-sm text-gray-300 hover:text-white px-3 py-1 rounded-md hover:bg-white/10"
                >
                  Close
                </button>
              </div>

              {/* Grid of remaining brands */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {more.map((b) => (
                  <motion.div
                    key={b.name}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="rounded-xl border border-amber-200/30 
                               bg-gradient-to-br from-[#3f6096]/30 to-[#eaecee]/30 
                               hover:from-[#6282b5]/50 hover:to-[#2f3000]/50 
                               transition-colors relative group overflow-hidden will-change-transform"
                  >
                    <div className="aspect-[4/3] flex items-center justify-center p-3">
                      <Image
                        src={b.logo}
                        alt={`${b.name} logo`}
                        width={180}
                        height={110}
                        className="max-h-12 w-auto opacity-95"
                      />
                    </div>
                    <div className="px-3 pb-3 text-center">
                      <p className="text-xs text-white/90">{b.name}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

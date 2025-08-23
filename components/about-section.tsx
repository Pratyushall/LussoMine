"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type Pillar = {
  key: "love" | "excellence" | "wonder" | "poise";
  title: string;
  img: string;
  hover: string; // 2-line teaser
  body: string; // dialog copy
};

const PILLARS: Pillar[] = [
  {
    key: "love",
    title: "Love",
    img: "/images/ab1.jpg",
    hover: "Morning coffee. Shared silence.",
    body: "Morning coffee, shared silence, the soft steam folding into light. Love is the hush between sentences—the way a room warms when two people breathe in the same rhythm. It is the patience of a chair that keeps your shape, the cup that remembers the warmth of your hand. In these quiet geometries, a home learns your pulse and returns it—steady, familiar, kind.",
  },
  {
    key: "excellence",
    title: "Excellence",
    img: "/images/ab2.jpg",
    hover: "Discipline in detail. Ease in use.",
    body: "We make things that release a quiet joy: precision hidden inside ease, edges tuned until the hand forgets to worry. Surfaces that keep the day light, fittings that move like breath. We choose for performance, we build for time, and sometimes—when the sun lands right—there is a faint fragrance of sunshine in the wood, a proof you can feel more than see.",
  },
  {
    key: "wonder",
    title: "Wonder",
    img: "/images/ab3.jpg",
    hover: "Light finds corners. Corners find light.",
    body: "A drawer opening to a perfect quiet. A panel catching the afternoon like a held note. Wonder lives in the small inevitabilities—the moment something does exactly what you hoped, only smoother. Rooms become instruments, tuned to curiosity. You reach, and the house answers.",
  },
  {
    key: "poise",
    title: "Poise",
    img: "/images/ab4.jpg",
    hover: "Calm proportions. Certain pause.",
    body: "Poise is not absence of movement—it is measured movement. Lines that stand without strain, materials that speak softly under light. The room holds itself the way a sentence holds meaning: balanced, breathing, unforced. You enter, and your shoulders lower. This is how stillness looks when it’s alive.",
  },
];

export default function AboutLussoPillars() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<Pillar | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const onOpen = (p: Pillar) => {
    setActive(p);
    setOpen(true);
  };

  return (
    <section className="relative overflow-hidden py-12 md:py-16 bg-[#0a1526]">
      {/* Title (keeps a little padding) */}
      <div className="text-center px-4">
        <h2 className="text-3xl md:text-4xl font-light text-white">
          About{" "}
          <span className="text-transparent bg-gradient-to-r from-yellow-200 via-amber-300 to-orange-300 bg-clip-text">
            LUSSO
          </span>
        </h2>
        <div className="w-20 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-3" />
        <p className="text-sm md:text-base text-white/75 mt-4">
          Four quiet words. One living philosophy.
        </p>
      </div>

      {/* FULL-BLEED GRID (no side gaps, looser spacing) */}
      <div className="mt-8 md:mt-12">
        <div
          className="
            grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4
            gap-4 md:gap-6
            w-screen max-w-[100vw] mx-[calc(50%-50vw)]
          "
        >
          {PILLARS.map((p) => (
            <button
              key={p.key}
              onClick={() => onOpen(p)}
              className="
                group relative overflow-hidden
                h-[52vh] sm:h-[56vh] md:h-[72vh]
                text-left
              "
              aria-label={`${p.title}: open details`}
            >
              {/* Image */}
              <Image
                src={p.img}
                alt={p.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover"
                priority
              />

              {/* Hover veil */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Title + teaser */}
              <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                <div className="text-white text-lg md:text-xl font-light tracking-wide">
                  {p.title}
                </div>
                <div
                  className="text-white/85 text-xs md:text-sm mt-1"
                  style={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 2,
                    overflow: "hidden",
                  }}
                >
                  {p.hover}
                </div>
                <div className="mt-2 h-[2px] w-10 md:w-12 bg-amber-400 rounded-full" />
              </div>

              {/* Subtle lift */}
              <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.02]" />
            </button>
          ))}
        </div>
      </div>

      {/* Dialog */}
      <AnimatePresence>
        {open && active && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${active.title} details`}
            className="fixed inset-0 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-black/70"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              className="relative z-10 mx-auto w-full max-w-3xl p-0 sm:p-2 md:p-4"
              initial={{ scale: 0.98, y: 8, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.98, y: 8, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <div className="absolute inset-0">
                  <Image
                    src={active.img}
                    alt=""
                    fill
                    className="object-cover scale-110"
                    sizes="100vw"
                    priority
                  />
                  <div className="absolute inset-0 backdrop-blur-xl bg-black/40" />
                </div>

                <div className="relative p-6 md:p-8 max-h-[80vh] overflow-y-auto">
                  <div className="flex items-start justify-between gap-6">
                    <h3 className="text-2xl md:text-3xl font-light text-white">
                      {active.title}
                    </h3>
                    <button
                      onClick={() => setOpen(false)}
                      className="shrink-0 text-white/80 hover:text-white rounded-md border border-white/20 px-3 py-1 text-sm"
                    >
                      Close
                    </button>
                  </div>

                  <div className="mt-4 h-[2px] w-12 bg-amber-400/90 rounded-full" />

                  <p className="mt-6 text-white/90 leading-relaxed text-base md:text-lg">
                    {active.body}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

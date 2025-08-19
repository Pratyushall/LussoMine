"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/footer";
import { motion, useScroll, useTransform } from "framer-motion";

/* ---------------------------------------------
 * Types & Data
 * -------------------------------------------*/
type Tile = { src: string; alt: string };

const KITCHEN_TYPES = [
  { key: "islands", label: "Islands" },
  { key: "galley", label: "Galley" },
  { key: "lshape", label: "L-Shape" },
  { key: "gshape", label: "G-Shape" },
] as const;

export default function KitchensPage() {
  return (
    <div
      style={{ backgroundColor: "#0a1526" }}
      className="min-h-screen relative"
    >
      <TopRightMenu />
      <Hero />
      <TypesNav />
      <TypesSections />
      <Footer />
    </div>
  );
}

/* Top-right menu (unchanged) */
function TopRightMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed top-5 right-5 z-[80]">
      <button
        onClick={() => setOpen((v) => !v)}
        className="relative px-4 py-2 rounded-full border border-white/20 text-white/90 backdrop-blur-sm bg-white/5 hover:bg-white/10 transition"
        aria-label="Open menu"
      >
        <span className="inline-flex items-center gap-2">
          <span aria-hidden>☰</span>
        </span>
      </button>

      {open && (
        <nav className="mt-2 w-56 rounded-2xl overflow-hidden border border-white/15 bg-[#0a1526]/95 backdrop-blur-md shadow-xl">
          {[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
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

/* Hero */
function Hero() {
  return (
    <section className="min-h-[48vh] md:min-h-[58vh] relative overflow-hidden flex items-center">
      <div className="absolute -top-24 -left-28 w-[28rem] h-[28rem] rounded-full blur-3xl bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.12),rgba(255,255,255,0)_60%)]" />
      <div className="absolute -bottom-28 -right-24 w-[34rem] h-[34rem] rounded-full blur-3xl bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.10),rgba(255,255,255,0)_60%)]" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-6xl md:text-8xl font-thin text-white tracking-tight">
            <span className="text-transparent bg-gradient-to-r from-amber-400 via-amber-600 to-amber-800 bg-clip-text">
              Kitchens
            </span>
          </h1>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent my-6" />
          <p className="text-lg md:text-xl text-white/75 leading-relaxed">
            Islands, galley, L and G — crafted for daily theatre and effortless
            flow.
          </p>
        </div>
      </div>
    </section>
  );
}

/* -----------------------------------------------------------
 * Types button row — click scrolls to sections below
 * ---------------------------------------------------------*/
function TypesNav() {
  const handleJump = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap gap-3 md:gap-4 py-6 md:py-8">
          {KITCHEN_TYPES.map((t) => (
            <button
              key={t.key}
              onClick={() => handleJump(`type-${t.key}`)}
              className="group px-5 md:px-6 py-2.5 md:py-3 rounded-full border border-white/20 text-white/90
                         bg-white/5 hover:bg-white/10 hover:border-white/30 backdrop-blur-sm transition
                         text-sm md:text-base"
            >
              <span className="align-middle">{t.label}</span>
              <span
                aria-hidden
                className="ml-2 inline-block transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -----------------------------------------------------------
 * Sections per type — each has a stacked-overlap scroller
 * + Lightbox per type (full-screen)
 * ---------------------------------------------------------*/
function TypesSections() {
  const ISLANDS: Tile[] = [
    { src: "/images/islanda.jpg", alt: "Island centerpiece with stone top" },
    { src: "/images/islandb.jpg", alt: "Two-tone island with seating" },
    { src: "/images/islandc.jpg", alt: "Warm wood island, brass accents" },
  ];
  const GALLEY: Tile[] = [
    { src: "/images/gal1.jpg", alt: "Compact galley elegance" },
    { src: "/images/gal2.jpg", alt: "Light & bright galley" },
    { src: "/images/gal3.jpg", alt: "Galley with statement pendants" },
  ];
  const LSHAPE: Tile[] = [
    { src: "/images/Lshp1.jpg", alt: "L-shape, warm wood" },
    { src: "/images/Lshp2.jpg", alt: "L-shape, veneer + stone harmony" },
    { src: "/images/Lshp3.jpg", alt: "Minimal L-shape with island vibe" },
  ];
  const GSHAPE: Tile[] = [
    { src: "/images/gshp1.jpg", alt: "G-shape storage master" },
    { src: "/images/gshp2.jpg", alt: "G-shape with family nook" },
    { src: "/images/gshp3.jpg", alt: "Compact city G-shape" },
  ];

  return (
    <div className="mt-2 md:mt-4">
      <TypeBlock
        id="type-islands"
        title="Islands"
        blurb="A stage at the heart of the home."
        tiles={ISLANDS}
      />
      <TypeBlock
        id="type-galley"
        title="Galley"
        blurb="Slim, efficient, and beautifully linear."
        tiles={GALLEY}
      />
      <TypeBlock
        id="type-lshape"
        title="L-Shape"
        blurb="Cornered for comfort, open for flow."
        tiles={LSHAPE}
      />
      <TypeBlock
        id="type-gshape"
        title="G-Shape"
        blurb="Wraparound utility with graceful reach."
        tiles={GSHAPE}
      />
    </div>
  );
}

function TypeBlock({
  id,
  title,
  blurb,
  tiles,
}: {
  id: string;
  title: string;
  blurb: string;
  tiles: Tile[];
}) {
  // Lightbox state for this type
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openAt = (i: number) => {
    setIndex(i);
    setOpen(true);
  };

  const next = () => setIndex((i) => (i + 1) % tiles.length);
  const prev = () => setIndex((i) => (i - 1 + tiles.length) % tiles.length);

  return (
    <section id={id} className="relative py-14 md:py-20">
      <div className="container mx-auto px-6">
        <header className="mb-6 md:mb-8">
          <h2 className="text-4xl md:text-6xl font-light tracking-tight text-white">
            {title}
          </h2>
          <p className="text-white/70 mt-2">{blurb}</p>
        </header>

        <StackScroller tiles={tiles} onOpen={openAt} />

        <Lightbox
          open={open}
          images={tiles}
          index={index}
          onClose={() => setOpen(false)}
          onPrev={prev}
          onNext={next}
          setIndex={setIndex}
          title={title}
        />
      </div>
    </section>
  );
}

/* ---------------------------------------------
 * RevealCard (scroll-linked reveal)
 * -------------------------------------------*/
const RevealCard = ({
  i,
  src,
  alt,
  onClick,
}: {
  i: number;
  src: string;
  alt: string;
  onClick: () => void;
}) => {
  const ref = useRef<HTMLButtonElement>(null); // ✅ fixed

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"],
  });

  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    ["inset(0% 0% 35% 0%)", "inset(0% 0% 0% 0%)"]
  );
  const scale = useTransform(scrollYProgress, [0, 1], [0.99, 1]);
  const glossY = useTransform(scrollYProgress, [0, 1], ["60%", "-20%"]);

  return (
    <motion.button
      ref={ref}
      type="button"
      onClick={onClick}
      aria-label={`Open ${alt}`}
      className="block w-full text-left"
      style={{ scale }}
    >
      <div
        className="relative overflow-hidden rounded-3xl ring-1 ring-white/15 bg-white/5 backdrop-blur-sm shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
        style={{ height: "calc(100svh - 140px)" }}
      >
        <motion.div className="absolute inset-0" style={{ clipPath }}>
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="100vw"
            priority={i === 0}
          />
        </motion.div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />

        <motion.div
          className="pointer-events-none absolute left-0 right-0 h-48 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0))]"
          style={{ top: glossY }}
        />

        <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8">
          <p className="text-white/90 text-sm md:text-base">{alt}</p>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/55 via-black/0 to-transparent" />
      </div>
    </motion.button>
  );
};

/* ---------------------------------------------
 * Stacked scroller: “one stands over the next”
 * Click opens lightbox
 * -------------------------------------------*/
function StackScroller({
  tiles,
  onOpen,
}: {
  tiles: { src: string; alt: string }[];
  onOpen: (index: number) => void;
}) {
  const overlapVH = 72; // how much the next card starts under the previous
  const stickyTop = 80; // px from top when pinned (room for nav)

  return (
    <div className="relative">
      {/* spacer to allow the stack to scroll fully */}
      <div
        aria-hidden
        className="absolute left-0 right-0"
        style={{
          top: 0,
          height: `calc(${tiles.length * overlapVH}vh + 30vh)`,
        }}
      />

      <div className="relative">
        {tiles.map((t, i) => (
          <figure
            key={t.src + i}
            className="relative"
            style={{
              marginTop: i === 0 ? 0 : `-${overlapVH - 8}vh`, // leave a small peek
              zIndex: tiles.length - i, // earlier image above later ones
            }}
          >
            <div className="sticky" style={{ top: stickyTop }}>
              <RevealCard
                i={i}
                src={t.src}
                alt={t.alt}
                onClick={() => onOpen(i)}
              />
            </div>
          </figure>
        ))}
      </div>
    </div>
  );
}

/* ---------------------------------------------
 * Full-screen Lightbox (with arrows + keyboard)
 * -------------------------------------------*/
function Lightbox({
  open,
  images,
  index,
  onClose,
  onPrev,
  onNext,
  setIndex,
  title,
}: {
  open: boolean;
  images: Tile[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  setIndex: (i: number) => void;
  title?: string;
}) {
  const overlayRef = useRef<HTMLDivElement>(null);

  // body scroll lock + keyboard controls
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose, onNext, onPrev]);

  if (!open) return null;

  const current = images[index];

  const clickOverlay = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === overlayRef.current) onClose();
  };

  return (
    <div
      ref={overlayRef}
      onClick={clickOverlay}
      className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
    >
      {/* Close */}
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white/80
                   hover:bg-white/20 hover:text-white transition flex items-center justify-center"
      >
        ✕
      </button>

      {/* Prev */}
      <button
        onClick={onPrev}
        aria-label="Previous image"
        className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 border border-white/20
                   text-white/90 hover:bg-white/20 transition flex items-center justify-center"
      >
        ←
      </button>

      {/* Next */}
      <button
        onClick={onNext}
        aria-label="Next image"
        className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 border border-white/20
                   text-white/90 hover:bg-white/20 transition flex items-center justify-center"
      >
        →
      </button>

      {/* Stage */}
      <div className="max-w-7xl w-full">
        <div className="relative rounded-2xl overflow-hidden bg-white/5 ring-1 ring-white/10">
          <img
            src={current.src}
            alt={current.alt}
            className="w-full h-auto object-contain max-h-[80vh]"
          />

          {/* Caption & counter */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/55 via-black/0 to-transparent" />
            <div className="relative flex flex-wrap items-center justify-between gap-2 text-sm text-white/85">
              <span className="truncate">
                {title ? `${title} — ` : ""}
                {current.alt}
              </span>
              <span className="text-white/60">
                {index + 1} / {images.length}
              </span>
            </div>
          </div>
        </div>

        {/* Thumbnails (optional) */}
        <div className="mt-4 hidden md:flex gap-2 overflow-x-auto">
          {images.map((img, i) => (
            <button
              key={img.src + i}
              onClick={() => setIndex(i)}
              aria-label={`Go to image ${i + 1}`}
              className={`shrink-0 w-20 h-14 rounded-lg overflow-hidden ring-1 transition
                         ${
                           i === index
                             ? "ring-white/40"
                             : "ring-white/10 hover:ring-white/20"
                         }`}
            >
              <img
                src={img.src}
                alt=""
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";

import {
  useEffect,
  useRef,
  useState,
  type TouchEvent as ReactTouchEvent,
} from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/footer";

/* ---------------------------------------------
 * Types & Data
 * -------------------------------------------*/
type Tile = { src: string; alt: string };

type ShutterType = {
  key: "hinged" | "bifold" | "sliding";
  label: string;
};

const SHUTTER_TYPES: ShutterType[] = [
  { key: "hinged", label: "Hinged" },
  { key: "bifold", label: "Bi-Fold" },
  { key: "sliding", label: "Sliding" },
];

/* ---------------------------------------------
 * Page
 * -------------------------------------------*/
export default function ShuttersPage() {
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

/* ---------------------------------------------
 * Top-right menu
 * -------------------------------------------*/
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

/* ---------------------------------------------
 * Hero
 * -------------------------------------------*/
function Hero() {
  return (
    <section className="min-h-[48vh] md:min-h-[58vh] relative overflow-hidden flex items-center">
      <div className="absolute -top-24 -left-28 w-[28rem] h-[28rem] rounded-full blur-3xl bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.12),rgba(255,255,255,0)_60%)]" />
      <div className="absolute -bottom-28 -right-24 w-[34rem] h-[34rem] rounded-full blur-3xl bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.10),rgba(255,255,255,0)_60%)]" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-6xl md:text-8xl font-thin text-white tracking-tight">
            <span className="text-transparent bg-gradient-to-r from-amber-400 via-amber-600 to-amber-800 bg-clip-text">
              Shutters
            </span>
          </h1>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent my-6" />
          <p className="text-lg md:text-xl text-white/75 leading-relaxed">
            Hinged, bi-fold, and sliding shutters — crafted for light, privacy,
            and presence.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------
 * Types button row — click scrolls to sections
 * -------------------------------------------*/
function TypesNav() {
  const handleJump = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap gap-3 md:gap-4 py-6 md:py-8">
          {SHUTTER_TYPES.map((item) => (
            <button
              key={item.key}
              onClick={() => handleJump(`type-${item.key}`)}
              className="group px-5 md:px-6 py-2.5 md:py-3 rounded-full border border-white/20 text-white/90
                         bg-white/5 hover:bg-white/10 hover:border-white/30 backdrop-blur-sm transition
                         text-sm md:text-base"
            >
              <span className="align-middle">{item.label}</span>
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

/* ---------------------------------------------
 * Sections per type — each = FULL-SCREEN framed slideshow
 * -------------------------------------------*/
function TypesSections() {
  // Swap these placeholders for your real images (6 each recommended).
  const HINGED: Tile[] = [
    {
      src: "/images/shutters-hinged1.jpg",
      alt: "Hinged shutters, classic louvers",
    },
    { src: "/images/shutters-hinged2.jpg", alt: "Wide-panel hinged shutters" },
    {
      src: "/images/shutters-hinged3.jpg",
      alt: "Hinged shutters with arch detail",
    },
    {
      src: "/images/shutters-hinged4.jpg",
      alt: "Matte white hinged shutters, bay window",
    },
    {
      src: "/images/shutters-hinged5.jpg",
      alt: "Walnut hinged shutters, living room",
    },
    {
      src: "/images/shutters-hinged6.jpg",
      alt: "Hinged shutters with brass hardware",
    },
  ];
  const BIFOLD: Tile[] = [
    {
      src: "/images/shutters-bifold1.jpg",
      alt: "Bi-fold shutters, airy opening",
    },
    { src: "/images/shutters-bifold2.jpg", alt: "Bi-fold plantation shutters" },
    { src: "/images/shutters-bifold3.jpg", alt: "Bi-fold with tall panels" },
    {
      src: "/images/shutters-bifold4.jpg",
      alt: "Textured finish bi-fold shutters",
    },
    {
      src: "/images/shutters-bifold5.jpg",
      alt: "Bi-fold shutters, modern frame",
    },
    {
      src: "/images/shutters-bifold6.jpg",
      alt: "Corner bi-fold shutters solution",
    },
  ];
  const SLIDING: Tile[] = [
    {
      src: "/images/shutters-sliding1.jpg",
      alt: "Sliding shutters, track system",
    },
    { src: "/images/shutters-sliding2.jpg", alt: "Wide-span sliding shutters" },
    {
      src: "/images/shutters-sliding3.jpg",
      alt: "Sliding shutters with glass partition",
    },
    {
      src: "/images/shutters-sliding4.jpg",
      alt: "Dark timber sliding shutters",
    },
    {
      src: "/images/shutters-sliding5.jpg",
      alt: "Minimal sliding shutters, matte finish",
    },
    {
      src: "/images/shutters-sliding6.jpg",
      alt: "Outdoor sliding shutter screen",
    },
  ];

  return (
    <>
      <TypeBlock id="type-hinged" title="Hinged" images={HINGED} />
      <TypeBlock id="type-bifold" title="Bi-Fold" images={BIFOLD} />
      <TypeBlock id="type-sliding" title="Sliding" images={SLIDING} />
    </>
  );
}

function TypeBlock({
  id,
  title,
  images,
}: {
  id: string;
  title: string;
  images: Tile[];
}) {
  return (
    <section id={id} className="relative h-[100svh] w-[100vw]">
      <FullscreenWoodFrame title={title} images={images} />
    </section>
  );
}

/* ---------------------------------------------
 * FullscreenWoodFrame (single textured brown frame)
 * -------------------------------------------*/
function FullscreenWoodFrame({
  title,
  images,
  intervalMs = 5000,
}: {
  title: string;
  images: Tile[];
  intervalMs?: number;
}) {
  const FRAME = "clamp(18px, 3vw, 36px)"; // responsive frame thickness

  return (
    <div
      className="relative h-[100svh] w-[100vw] overflow-hidden"
      style={{
        background: [
          "linear-gradient(135deg, #553318, #2b170a)",
          "repeating-linear-gradient(90deg, rgba(255,255,255,0.05) 0 2px, rgba(0,0,0,0.08) 2px 4px)",
          "radial-gradient(120% 160% at 0% 0%, rgba(255,255,255,0.06), transparent 55%)",
          "radial-gradient(130% 170% at 100% 100%, rgba(0,0,0,0.35), transparent 55%)",
        ].join(","),
        backgroundBlendMode: "overlay, multiply, normal, normal",
        boxShadow:
          "inset 0 2px 0 rgba(255,255,255,0.12), inset 0 -2px 0 rgba(0,0,0,0.45), 0 40px 120px rgba(0,0,0,0.55)",
        padding: FRAME,
      }}
    >
      {/* Frame sheen / vignette */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ boxShadow: "inset 0 0 60px rgba(0,0,0,0.35)" }}
      />

      {/* Title badge */}
      <div className="absolute top-4 left-6 z-20">
        <span className="px-3 py-1 rounded-full text-xs tracking-wide uppercase text-white/80 bg-white/10 border border-white/20 backdrop-blur-sm">
          {title}
        </span>
      </div>

      {/* Slideshow stage */}
      <div className="relative h-full w-full rounded-[10px] overflow-hidden ring-1 ring-black/20 bg-black/20">
        <SlideshowCore images={images} intervalMs={intervalMs} />
      </div>
    </div>
  );
}

/* ---------------------------------------------
 * SlideshowCore — autoplay, arrows, dots, keyboard, swipe
 * -------------------------------------------*/
function SlideshowCore({
  images,
  intervalMs = 5000,
}: {
  images: Tile[];
  intervalMs?: number;
}) {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const next = () => setIdx((i) => (i + 1) % images.length);
  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length);
  const goto = (i: number) => setIdx(i);

  // Autoplay
  useEffect(() => {
    if (!images.length || paused) return;
    timerRef.current = window.setInterval(next, intervalMs);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [images.length, paused, intervalMs]);

  // Keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (!images?.length) return null;

  // Swipe
  const onTouchStart = (e: ReactTouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };
  const onTouchEnd = (e: ReactTouchEvent<HTMLDivElement>) => {
    const start = touchStartX.current;
    if (start == null) return;
    const dx = e.changedTouches[0]?.clientX - start;
    if (Math.abs(dx) > 40) dx < 0 ? next() : prev();
    touchStartX.current = null;
  };

  return (
    <div
      className="relative h-full w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Slides */}
      <div className="absolute inset-0">
        {images.map((img, i) => {
          const active = i === idx;
          return (
            <div
              key={img.src + i}
              className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                active ? "opacity-100" : "opacity-0"
              }`}
              aria-hidden={!active}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="100vw"
                priority={active}
                className={`object-cover will-change-transform ${
                  active ? "scale-100" : "scale-105"
                }`}
                draggable={false}
              />
              {/* Vignettes */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/20" />
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8">
                <p className="text-white/90 text-sm md:text-base drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">
                  {img.alt}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 border border-white/20
                   text-white/90 hover:bg-white/20 transition flex items-center justify-center z-10"
      >
        ←
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 border border-white/20
                   text-white/90 hover:bg-white/20 transition flex items-center justify-center z-10"
      >
        →
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-2 z-10">
        {images.map((_, i) => (
          <button
            key={`dot-${i}`}
            onClick={() => goto(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === idx
                ? "w-8 bg-white/90"
                : "w-2.5 bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

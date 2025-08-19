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

type KitchenType = {
  key: "islands" | "galley" | "lshape" | "gshape";
  label: string;
};

const KITCHEN_TYPES: KitchenType[] = [
  { key: "islands", label: "Islands" },
  { key: "galley", label: "Galley" },
  { key: "lshape", label: "L-Shape" },
  { key: "gshape", label: "G-Shape" },
];

/* ---------------------------------------------
 * Page
 * -------------------------------------------*/
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
          {KITCHEN_TYPES.map((item) => (
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
  const ISLANDS: Tile[] = [
    { src: "/images/herki.png", alt: "Stone waterfall edge island" },
    { src: "/images/islanda.jpg", alt: "Island centerpiece with stone top" },
    { src: "/images/islandb.jpg", alt: "Two-tone island with seating" },
    { src: "/images/islandc.jpg", alt: "Warm wood island, brass accents" },
    { src: "/images/islande.jpg", alt: "Monolithic island, matte finish" },
    { src: "/images/islandf.jpg", alt: "Open-plan island with bar stools" },
  ];
  const GALLEY: Tile[] = [
    { src: "/images/herki1.png", alt: "High-contrast galley cabinetry" },
    { src: "/images/gal1.jpg", alt: "Compact galley elegance" },
    { src: "/images/gal2.jpg", alt: "Light & bright galley" },
    { src: "/images/gal3.jpg", alt: "Galley with statement pendants" },
    { src: "/images/gal5.jpg", alt: "Warm wood galley with brass" },
    { src: "/images/gal6.jpg", alt: "Sleek galley, handle-less units" },
  ];
  const LSHAPE: Tile[] = [
    { src: "/images/herki2.png", alt: "Matte L-shape with open shelving" },
    { src: "/images/Lshp1.jpg", alt: "L-shape, warm wood" },
    { src: "/images/Lshp2.jpg", alt: "L-shape, veneer + stone harmony" },
    { src: "/images/Lshp3.jpg", alt: "Minimal L-shape with island vibe" },
    { src: "/images/Lshp4.jpg", alt: "Bright L-shape, integrated lighting" },
    { src: "/images/Lshp6.jpg", alt: "Elegant L-shape with tall units" },
  ];
  const GSHAPE: Tile[] = [
    { src: "/images/herki3.png", alt: "Wraparound G-shape, stone splash" },
    { src: "/images/gshp1.jpg", alt: "G-shape storage master" },
    { src: "/images/gshp2.jpg", alt: "G-shape with family nook" },
    { src: "/images/gshp3.jpg", alt: "Compact city G-shape" },
    { src: "/images/gshp5.jpg", alt: "G-shape, premium appliances" },
    { src: "/images/gshp6.jpg", alt: "G-shape, soft minimal palette" },
  ];

  return (
    <>
      <TypeBlock id="type-islands" title="Islands" images={ISLANDS} />
      <TypeBlock id="type-galley" title="Galley" images={GALLEY} />
      <TypeBlock id="type-lshape" title="L-Shape" images={LSHAPE} />
      <TypeBlock id="type-gshape" title="G-Shape" images={GSHAPE} />
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
 * - Full viewport (100svh/100vw)
 * - Subtle bevel + CSS grain texture
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
      <div
        className="pointer-events-none absolute inset-0"
        style={{ boxShadow: "inset 0 0 60px rgba(0,0,0,0.35)" }}
      />

      {/* Title badge */}
      <div className="absolute top-15 left-10 z-20">
        <span className="px-3 py-1 rounded-full text-2xl tracking-wide uppercase text-white/80 bg-white/10 border border-white/20 backdrop-blur-sm">
          {title}
        </span>
      </div>

      {/* Inner stage */}
      <div className="relative h-full w-full rounded-[10px] overflow-hidden ring-1 ring-black/20 bg-black/20">
        <SlideshowCore images={images} intervalMs={intervalMs} />
      </div>
    </div>
  );
}

/* ---------------------------------------------
 * SlideshowCore
 * - Autoplay (pause on hover), arrows, dots, keyboard, swipe
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

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

type WardrobeType = {
  key: "walkin" | "sliding" | "openable";
  label: string;
};

const WARDROBE_TYPES: WardrobeType[] = [
  { key: "walkin", label: "Walk-in" },
  { key: "sliding", label: "Sliding" },
  { key: "openable", label: "Openable" },
];

/* ---------------------------------------------
 * Page
 * -------------------------------------------*/
export default function WardrobesPage() {
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
              Wardrobes
            </span>
          </h1>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent my-6" />
          <p className="text-lg md:text-xl text-white/75 leading-relaxed">
            Walk-in, sliding, and openable systems — boutique organization
            tailored to you.
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
          {WARDROBE_TYPES.map((item) => (
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
  const WALKIN: Tile[] = [
    { src: "/images/wrdpp.png", alt: "Open shelving showcase" },
    { src: "/images/walkina.jpg", alt: "Walk-in wardrobe with central island" },
    { src: "/images/walkinb.jpg", alt: "Warm veneer walk-in" },
    { src: "/images/walkinc.jpg", alt: "Walk-in with glass partitions" },
    { src: "/images/walkine.jpg", alt: "Walk-in with mirrored doors" },
    { src: "/images/walkinf.jpg", alt: "Boutique-style lighting" },
  ];
  const SLIDING: Tile[] = [
    { src: "/images/wrdpp1.png", alt: "Handle-less graphite sliding" },
    { src: "/images/slidinga.jpg", alt: "Sliding doors with bronze mirror" },
    { src: "/images/slidingb.jpg", alt: "Floor-to-ceiling sliding panels" },
    { src: "/images/slidingc.jpg", alt: "Sliding smoked glass fronts" },
    { src: "/images/slidinge.jpg", alt: "Soft-close aluminum frames" },
    { src: "/images/slidingf.jpg", alt: "Textured panel finishes" },
  ];
  const OPENABLE: Tile[] = [
    { src: "/images/wrdpp2.png", alt: "Compact master hinged wardrobe" },
    { src: "/images/open1.jpg", alt: "Openable wardrobe, matte finish" },
    { src: "/images/open2.jpg", alt: "Minimal white hinged doors" },
    { src: "/images/open3.jpg", alt: "Soft beige hinged wardrobe" },
    { src: "/images/open5.jpg", alt: "Paneled classic doors" },
    { src: "/images/open6.jpg", alt: "Hinged wardrobe with glass inlays" },
  ];

  return (
    <>
      <TypeBlock id="type-walkin" title="Walk-in" images={WALKIN} />
      <TypeBlock id="type-sliding" title="Sliding" images={SLIDING} />
      <TypeBlock id="type-openable" title="Openable" images={OPENABLE} />
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
 * FullscreenWoodFrame (uses frame5.png like Kitchens)
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
  // Responsive padding so slides sit *inside* the wood border
  const FRAME = "clamp(32px, 6vw, 120px)";

  return (
    <div className="relative h-[100svh] w-[100vw] overflow-hidden">
      {/* Background: wooden frame image */}
      <Image
        src="/images/frame5.png" // <-- place frame5.png in /public/images/
        alt=""
        fill
        priority={false}
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Soft vignette for legibility without hiding the frame */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(110%_110%_at_50%_50%,rgba(0,0,0,0.25),rgba(0,0,0,0.6))]" />

      {/* Inner stage: padded area inside the frame */}
      <div
        className="relative h-full w-full overflow-hidden"
        style={{ padding: FRAME }}
      >
        <div className="relative h-full w-full rounded-[10px] overflow-hidden ring-1 ring-black/20">
          <SlideshowCore
            images={images}
            intervalMs={intervalMs}
            hoverLabel={title}
          />
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------
 * SlideshowCore (same interaction as Kitchens)
 * - Autoplay (pauses while hovering center zone)
 * - Arrows, dots, keyboard, swipe
 * - Center hover overlay shows the type label
 * -------------------------------------------*/
function SlideshowCore({
  images,
  intervalMs = 5000,
  hoverLabel,
}: {
  images: Tile[];
  intervalMs?: number;
  hoverLabel: string;
}) {
  const [idx, setIdx] = useState(0);
  const [hoveringCenter, setHoveringCenter] = useState(false);
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

  // Touch to show label briefly
  const onCenterTouch = () => {
    setHoveringCenter(true);
    window.setTimeout(() => setHoveringCenter(false), 1200);
  };

  return (
    <div
      className="relative h-full w-full"
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
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/20" />
            </div>
          );
        })}
      </div>

      {/* Center hover sensor (middle area only) */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3/5 h-3/5 max-w-[640px] max-h-[60vh] z-20"
        onMouseEnter={() => setHoveringCenter(true)}
        onMouseLeave={() => setHoveringCenter(false)}
        onTouchStart={onCenterTouch}
      >
        {/* Center hover label */}
        <div
          className={`pointer-events-none absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
            hoveringCenter ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={!hoveringCenter}
        >
          <div className="px-6 py-3 rounded-full bg-black/35 border border-white/20 backdrop-blur-sm">
            <span className="text-white/90 text-xl md:text-2xl tracking-wide uppercase">
              {hoverLabel}
            </span>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 border border-white/20
                   text-white/90 hover:bg-white/20 transition flex items-center justify-center z-30"
      >
        ←
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 border border-white/20
                   text-white/90 hover:bg-white/20 transition flex items-center justify-center z-30"
      >
        →
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-2 z-30">
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

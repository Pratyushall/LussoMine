"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/footer";

type Tile = {
  src: string;
  alt: string;
  ratio: "square" | "portrait" | "landscape";
};

export default function KitchensPage() {
  return (
    <div
      style={{ backgroundColor: "#0a1526" }}
      className="min-h-screen relative"
    >
      <TopRightMenu />
      <Hero />
      <KitchensGallery />
      <Footer />
    </div>
  );
}

/* Top-right menu */
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

/* Gallery (grid + aspect ratios, glassy frame) + Lightbox + Load more */
function KitchensGallery() {
  const allImages: Tile[] = useMemo(
    () => [
      {
        src: "/images/minimalkit3.jpg",
        alt: "Minimal island kitchen",
        ratio: "landscape",
      },
      {
        src: "/images/Lshape5.png",
        alt: "L-shape kitchen, warm wood",
        ratio: "landscape",
      },
      {
        src: "/images/island2.png",
        alt: "Stone island centerpiece",
        ratio: "landscape",
      },
      {
        src: "/images/gallery1.png",
        alt: "Matte charcoal cabinetry",
        ratio: "portrait",
      },
      {
        src: "/images/bohokit1.jpg",
        alt: "Handle-less gloss white",
        ratio: "square",
      },
      {
        src: "/images/bohokit2.jpg",
        alt: "Warm oak & quartz",
        ratio: "landscape",
      },
      {
        src: "/images/kit11.jpg",
        alt: "Compact galley elegance",
        ratio: "portrait",
      },
      {
        src: "/images/kit12.jpg",
        alt: "Marble backsplash drama",
        ratio: "square",
      },
      {
        src: "/images/kit15.jpg",
        alt: "G-shape storage master",
        ratio: "landscape",
      },
      {
        src: "/images/kit16.jpg",
        alt: "Mixed metal accents",
        ratio: "portrait",
      },
      // extra (revealed by Load more)
      {
        src: "/images/kit17.jpg",
        alt: "Soft beige palette",
        ratio: "square",
      },
      {
        src: "/images/kit18.jpg",
        alt: "Walnut + black stone",
        ratio: "landscape",
      },
      {
        src: "/images/gallery29.png",
        alt: "Light & bright galley",
        ratio: "portrait",
      },
      {
        src: "/images/island3.png",
        alt: "Two-tone cabinets",
        ratio: "square",
      },
      {
        src: "/images/island2.jpg",
        alt: "Open shelves & brass",
        ratio: "landscape",
      },
      {
        src: "/images/kit12.jpg",
        alt: "Textured panels",
        ratio: "portrait",
      },
      {
        src: "/images/kit13.jpg",
        alt: "Statement pendant trio",
        ratio: "landscape",
      },
      {
        src: "/images/kit14.jpg",
        alt: "Compact city kitchen",
        ratio: "square",
      },
      {
        src: "/images/kit15.jpg",
        alt: "Veneer + stone harmony",
        ratio: "landscape",
      },
      {
        src: "/images/kit16.jpg",
        alt: "Family breakfast nook",
        ratio: "portrait",
      },
    ],
    []
  );

  const [visible, setVisible] = useState(10);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openAt = (i: number) => {
    setIndex(i);
    setLightboxOpen(true);
  };
  const close = () => setLightboxOpen(false);
  const next = () => setIndex((i) => (i + 1) % allImages.length);
  const prev = () =>
    setIndex((i) => (i - 1 + allImages.length) % allImages.length);

  const canLoadMore = visible < allImages.length;

  const ratioClass = (r: Tile["ratio"]) =>
    r === "square"
      ? "aspect-square"
      : r === "portrait"
      ? "aspect-[3/4]"
      : "aspect-[16/10]";

  return (
    <section className="relative pb-24 pt-6">
      <div className="container mx-auto px-6">
        {/* classy quilt grid (no masonry glitch) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {allImages.slice(0, visible).map((tile, i) => (
            <figure key={`${tile.src}-${i}`} className="group relative">
              <button
                type="button"
                onClick={() => openAt(i)}
                className="block w-full text-left"
                aria-label={`Open ${tile.alt}`}
              >
                {/* Glassy frame with reserved height via aspect ratio */}
                <div
                  className={`relative overflow-hidden rounded-2xl ${ratioClass(
                    tile.ratio
                  )}
                                bg-white/5 backdrop-blur-sm ring-1 ring-white/10 hover:ring-white/20 transition`}
                >
                  {/* subtle inner edge */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10 mix-blend-screen" />
                  {/* image (Next/Image, fills container) */}
                  <Image
                    src={tile.src}
                    alt={tile.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={i < 6}
                  />
                  {/* bottom wash + caption */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 via-black/0 to-transparent" />
                  <figcaption className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-sm text-white/85">{tile.alt}</p>
                  </figcaption>
                </div>
              </button>
            </figure>
          ))}
        </div>

        {/* Load more / Show less */}
        <div className="text-center mt-12">
          {canLoadMore ? (
            <button
              onClick={() =>
                setVisible((v) => Math.min(v + 10, allImages.length))
              }
              className="px-8 py-3 rounded-full text-white font-light tracking-wide
                         bg-white/10 border border-white/20 backdrop-blur-sm
                         hover:bg-white/15 hover:border-white/30 transition"
            >
              Load more
            </button>
          ) : (
            <button
              onClick={() => setVisible(10)}
              className="px-8 py-3 rounded-full text-black font-medium tracking-wide
                         bg-gradient-to-r from-amber-400 via-amber-500 to-amber-700
                         hover:from-amber-300 hover:via-amber-500 hover:to-amber-800
                         shadow-[0_8px_30px_rgba(251,191,36,0.25)] transition"
            >
              Show less
            </button>
          )}
        </div>
      </div>

      {/* Lightbox Modal (slideshow) */}
      <Lightbox
        open={lightboxOpen}
        images={allImages}
        index={index}
        onClose={close}
        onPrev={prev}
        onNext={next}
        setIndex={setIndex}
      />
    </section>
  );
}

/* Lightbox with arrows + keyboard navigation */
function Lightbox({
  open,
  images,
  index,
  onClose,
  onPrev,
  onNext,
  setIndex,
}: {
  open: boolean;
  images: Tile[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  setIndex: (i: number) => void;
}) {
  const overlayRef = useRef<HTMLDivElement>(null);

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
      className="fixed inset-0 z-[90] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
      aria-modal="true"
      role="dialog"
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

      <div className="max-w-6xl w-full">
        <div className="relative rounded-2xl overflow-hidden bg-white/5 ring-1 ring-white/10">
          <img
            src={current.src}
            alt={current.alt}
            className="w-full h-auto object-contain max-h-[72vh]"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 via-black/0 to-transparent" />
            <div className="relative flex items-center justify-between text-sm text-white/85">
              <span>{current.alt}</span>
              <span className="text-white/60">
                {index + 1} / {images.length}
              </span>
            </div>
          </div>
        </div>

        {/* Thumbs */}
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

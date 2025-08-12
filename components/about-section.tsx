"use client";

import { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
// import Footer from "@/components/footer"; // optional

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

type GalleryItem = {
  src: string;
  w: number;
  h: number;
  z: number;
  rotate: number;
  pos: string; // tailwind position classes
};

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const ySlow = useTransform(scrollYProgress, [0, 1], [120, -120]);
  const yFast = useTransform(scrollYProgress, [0, 1], [-160, 160]);

  // 🔖 Swap these with your images
  const gallery: GalleryItem[] = [
    {
      src: "/images/Lshape5.png",
      w: 260,
      h: 340,
      z: 30,
      rotate: -6,
      pos: "top-6 left-8 md:top-10 md:left-16",
    },
    {
      src: "/images/minimalkit3.jpg",
      w: 320,
      h: 220,
      z: 20,
      rotate: 4,
      pos: "top-40 right-4 md:top-48 md:right-24",
    },
    {
      src: "/images/walkin4.png",
      w: 220,
      h: 280,
      z: 40,
      rotate: 8,
      pos: "top-72 left-24 md:top-64 md:left-52",
    },
    {
      src: "/images/openable1.png",
      w: 280,
      h: 340,
      z: 10,
      rotate: -2,
      pos: "bottom-24 right-10 md:bottom-24 md:right-40",
    },
    {
      src: "/images/gallery1.png",
      w: 340,
      h: 220,
      z: 50,
      rotate: -10,
      pos: "bottom-10 left-6 md:bottom-12 md:left-24",
    },
    {
      src: "/images/island2.png",
      w: 220,
      h: 260,
      z: 35,
      rotate: 6,
      pos: "top-24 right-40 md:top-24 md:right-72",
    },
  ];

  // 🪄 Lightbox state
  const [open, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-32 min-h-screen"
      style={{ backgroundColor: "#0a1526" }}
    >
      {/* Ambient glows */}
      <motion.div
        className="absolute -top-10 -left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"
        style={{ y: ySlow }}
      />
      <motion.div
        className="absolute -bottom-16 -right-12 w-[34rem] h-[34rem] bg-white/5 rounded-full blur-3xl"
        style={{ y: yFast }}
      />

      {/* Heading */}
      <div className="container mx-auto px-6 relative z-[60]">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className={`${playfair.className} text-6xl md:text-8xl font-light text-white mb-8 tracking-tight`}
            animate={{
              textShadow: [
                "0 0 30px rgba(255,255,255,0.12)",
                "0 0 60px rgba(255,255,255,0.22)",
                "0 0 30px rgba(255,255,255,0.12)",
              ],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            About{" "}
            <span className="text-transparent font-light bg-gradient-to-r from-amber-400 via-amber-600 to-amber-800 bg-clip-text">
              LUSSO
            </span>
          </motion.h1>

          <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto" />
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            We compose elegance out of beautiful chaos — layered, lived-in, and
            irresistibly refined.
          </p>
        </motion.div>
      </div>

      {/* Criss-cross collage */}
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="relative mx-auto w-full h-[34rem] md:h-[42rem]">
          {/* Layer A */}
          <motion.div className="absolute inset-0" style={{ y: ySlow }}>
            {gallery.slice(0, Math.ceil(gallery.length / 2)).map((item, i) => (
              <motion.button
                key={`A-${i}-${item.src}`}
                type="button"
                onClick={() => {
                  setPhotoIndex(i);
                  setOpen(true);
                }}
                className={`absolute ${item.pos} rounded-xl overflow-hidden ring-1 ring-white/10 shadow-2xl focus:outline-none focus:ring-2 focus:ring-amber-400`}
                style={{ zIndex: item.z, width: item.w, height: item.h }}
                initial={{ opacity: 0, scale: 0.92, rotate: item.rotate }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.08 * i }}
                whileHover={{
                  scale: 1.04,
                  rotate: item.rotate * 0.7,
                  zIndex: item.z + 100,
                }}
              >
                <motion.div
                  animate={{ x: [0, 16, -14, 0], y: [0, -14, 16, 0] }}
                  transition={{
                    duration: 12 + i * 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-full h-full"
                >
                  <Image
                    src={item.src}
                    alt="Lusso collage"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 40vw, 20vw"
                    priority={i < 2}
                  />
                </motion.div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/10" />
              </motion.button>
            ))}
          </motion.div>

          {/* Layer B */}
          <motion.div className="absolute inset-0" style={{ y: yFast }}>
            {gallery.slice(Math.ceil(gallery.length / 2)).map((item, j) => {
              const idx = Math.ceil(gallery.length / 2) + j;
              return (
                <motion.button
                  key={`B-${j}-${item.src}`}
                  type="button"
                  onClick={() => {
                    setPhotoIndex(idx);
                    setOpen(true);
                  }}
                  className={`absolute ${item.pos} rounded-xl overflow-hidden ring-1 ring-white/10 shadow-2xl focus:outline-none focus:ring-2 focus:ring-amber-400`}
                  style={{ zIndex: item.z, width: item.w, height: item.h }}
                  initial={{ opacity: 0, scale: 0.92, rotate: item.rotate }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.12 * j }}
                  whileHover={{
                    scale: 1.05,
                    rotate: item.rotate * 0.6,
                    zIndex: item.z + 100,
                  }}
                >
                  <motion.div
                    animate={{ x: [0, -18, 16, 0], y: [0, 16, -18, 0] }}
                    transition={{
                      duration: 13 + j * 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="w-full h-full"
                  >
                    <Image
                      src={item.src}
                      alt="Lusso collage"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 40vw, 22vw"
                    />
                  </motion.div>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/10" />
                </motion.button>
              );
            })}
          </motion.div>
        </div>

        {/* edge fades */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-[#0a1526] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[#0a1526] to-transparent" />
      </div>

      {/* CTA */}
      <motion.div
        className="text-center mt-16 relative z-[60]"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <Link
          href="/experience" // ← change to your target page
          className="inline-block"
        >
          <span
            className="inline-flex items-center justify-center px-10 py-4 rounded-full text-black font-medium tracking-wide
                       bg-gradient-to-r from-amber-400 via-amber-500 to-amber-700
                       hover:from-amber-300 hover:via-amber-500 hover:to-amber-800
                       shadow-[0_8px_30px_rgba(251,191,36,0.25)] transition duration-300"
          >
            Discover the Lusso Experience
          </span>
        </Link>
      </motion.div>

      {/* Lightbox (plain slideshow with arrows/keyboard) */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={photoIndex}
        slides={gallery.map((g) => ({ src: g.src }))}
        // Defaults already provide left/right arrows & keyboard controls.
        render={{
          buttonPrev: undefined,
          buttonNext: undefined,
          buttonClose: undefined,
        }}
        styles={{ container: { backgroundColor: "rgba(10,21,38,0.96)" } }}
        animation={{ fade: 250, swipe: 300 }}
        controller={{ closeOnBackdropClick: true }}
        on={{ view: ({ index }) => setPhotoIndex(index) }}
      />

      {/* <Footer /> */}
    </section>
  );
}

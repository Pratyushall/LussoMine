"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = ["/images/pic6.png", "/images/pic7.png", "/images/pic8.png"];

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [200, -200]);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen relative overflow-hidden py-32"
      style={{ backgroundColor: "#0a1526" }}
    >
      {/* 🫧 Background accents */}
      <motion.div
        className="absolute top-24 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"
        style={{ y: y1 }}
      />
      <motion.div
        className="absolute bottom-24 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"
        style={{ y: y2 }}
      />

      {/* 👑 Heading */}
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <h2 className="text-6xl font-light text-white mb-6">About Lusso</h2>
          <div className="w-32 h-px bg-white/20 mx-auto mb-6" />
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            We create spaces where elegance whispers, and every detail tells a
            story of refined living.
          </p>
        </motion.div>

        {/* 🎥 Gallery with dots */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="w-full max-w-4xl h-96 relative rounded-xl overflow-hidden shadow-lg">
            {currentSlide === 0 ? (
              <video
                autoPlay
                muted
                loop
                playsInline
                poster="/images/pic5.png"
                className="w-full h-full object-cover"
              >
                <source src="/videos/hero.mp4" type="video/mp4" />
              </video>
            ) : (
              <Image
                src={images[currentSlide - 1]}
                alt={`Gallery ${currentSlide}`}
                fill
                className="object-cover"
              />
            )}
          </div>

          <div className="flex space-x-3 mt-6">
            {[0, 1, 2, 3].map((i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === i ? "bg-white" : "bg-gray-500/40"
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* ✨ Call to action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <button className="px-10 py-4 bg-white text-black rounded-full tracking-wide hover:bg-gray-100 transition duration-300">
            Discover the Lusso Experience
          </button>
        </motion.div>
      </div>
    </section>
  );
}

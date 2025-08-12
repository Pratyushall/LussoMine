"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -250]);

  const textLines = ["Transforming visions into reality"];

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden"
      style={{ backgroundColor: "#0a1526" }}
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="/placeholder.svg?height=1080&width=1920"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-slate-900/60" />
      </div>

      {/* Animated Text */}
      <div className="relative z-3  h-full flex items-center justify-center">
        <div className="text-center space-y-2">
          {textLines.map((line, index) => (
            <motion.div
              key={index}
              style={{
                y: index === 0 ? y1 : index === 1 ? y2 : index === 2 ? y3 : y4,
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="overflow-hidden"
            >
              <h2 className="text-4xl md:text-6xl font-light tracking-wide text-white">
                {line}
              </h2>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

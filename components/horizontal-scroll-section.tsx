"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image"; // ✅ REQUIRED
import NextImage from "next/image";

export default function ProjectSections() {
  return (
    <div style={{ backgroundColor: "#0a1526" }}>
      <KitchensSection />
      <WardrobesSection />
      <ShuttersSection />
      <PartitionsSection />
    </div>
  );
}

/* =========================
   Kitchens (Wardrobes clone)
   ========================= */
function KitchensSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const [activeCard, setActiveCard] = useState<number>(0);

  const KitchenTypes = [
    {
      title: "Island Kitchen",
      desc: "Spacious luxury dressing rooms",
      color: "from-blue-400 to-purple-600",
    },
    {
      title: "G - Shape",
      desc: "Seamlessly integrated storage",
      color: "from-purple-400 to-pink-600",
    },
    {
      title: "L - Shape",
      desc: "Flexible and expandable",
      color: "from-pink-400 to-red-600",
    },
    {
      title: "Gallery Kitchen",
      desc: "Flexible and expandable",
      color: "from-pink-400 to-red-600",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="min-h-screen py-20 relative overflow-hidden"
      style={{ backgroundColor: "#0a1526" }}
    >
      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 border border-white/10 rounded-lg"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
            transition={{
              duration: 10 + i * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="inline-block text-8xl font-thin text-white/10 mb-4"
            initial={{ scale: 0.5 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 1.2 }}
          >
            01
          </motion.div>
          <h2 className="text-6xl font-light text-transparent bg-gradient-to-r from-amber-400 via-amber-400 to-amber-800 bg-clip-text mb-6">
            Kitchens
          </h2>
          <div className="w-32 h-px bg-gradient-to-r from-yellow-400 to-amber-400 mx-auto" />
        </motion.div>

        {/* Morphing Cards Layout */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {KitchenTypes.map((type, index) => (
              <motion.div
                key={index}
                className={`relative p-8 rounded-2xl cursor-pointer transition-all duration-500 ${
                  activeCard === index ? "bg-white/10" : "bg-white/5"
                }`}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                onHoverStart={() => setActiveCard(index)}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${type.color} opacity-0 rounded-2xl`}
                  animate={{ opacity: activeCard === index ? 0.1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
                <h3 className="text-2xl font-light text-white mb-4">
                  {type.title}
                </h3>
                <p className="text-gray-400">{type.desc}</p>
                <motion.div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${type.color} rounded-full`}
                  initial={{ width: 0 }}
                  animate={{ width: activeCard === index ? "100%" : "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>

          {/* Central Image (replaces video) */}
          <motion.figure
            className="relative h-[28rem] md:h-[32rem] rounded-[28px]"
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            {/* Amber gradient frame */}
            <div className="relative h-full rounded-[28px] p-[2px] bg-gradient-to-r from-amber-300/40 via-amber-500/40 to-amber-700/40">
              {/* Soft glow behind the frame (very subtle) */}
              <div className="pointer-events-none absolute -inset-6 rounded-[32px] bg-amber-400/10 blur-3xl" />

              {/* Image container */}
              <div className="relative h-full rounded-[26px] overflow-hidden bg-white/5 ring-1 ring-white/10">
                <Image
                  src="/images/bohokit5.jpg" // string literal → TS is fine
                  alt="Lusso kitchen — classic, refined, timeless"
                  fill // ✅ Next 13+ supported
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 1200px"
                  priority
                />
                {/* Gentle top fade for readability */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a1526]/40 via-transparent to-transparent" />

                {/* Minimal accent line at bottom */}
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-amber-300/60 via-amber-500/60 to-amber-700/60" />
              </div>
            </div>
          </motion.figure>
        </div>
      </div>
    </section>
  );
}

/* ===========================
   Wardrobes (original source)
   =========================== */
function WardrobesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const [activeCard, setActiveCard] = useState<number>(0);

  const wardrobeTypes = [
    {
      title: "Walk-in",
      desc: "Spacious luxury dressing rooms",
      color: "from-blue-400 to-purple-600",
    },
    {
      title: "Sliding Wardrobes",
      desc: "Seamlessly integrated storage",
      color: "from-purple-400 to-pink-600",
    },
    {
      title: "Openable Wardrobes",
      desc: "Flexible and expandable",
      color: "from-pink-400 to-red-600",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="min-h-screen py-20 relative overflow-hidden"
      style={{ backgroundColor: "#0a1526" }}
    >
      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 border border-white/10 rounded-lg"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
            transition={{
              duration: 10 + i * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="inline-block text-8xl font-thin text-white/10 mb-4"
            initial={{ scale: 0.5 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 1.2 }}
          >
            02
          </motion.div>
          <h2 className="text-6xl font-light text-transparent bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-800 bg-clip-text mb-6">
            Wardrobes
          </h2>
          {/* Tailwind doesn't have gold-400; using amber-400 to avoid errors */}
          <div className="w-32 h-px bg-gradient-to-r from-yellow-400 to-amber-400 mx-auto" />
        </motion.div>

        {/* Morphing Cards Layout */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {wardrobeTypes.map((type, index) => (
              <motion.div
                key={index}
                className={`relative p-8 rounded-2xl cursor-pointer transition-all duration-500 ${
                  activeCard === index ? "bg-white/10" : "bg-white/5"
                }`}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                onHoverStart={() => setActiveCard(index)}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${type.color} opacity-0 rounded-2xl`}
                  animate={{ opacity: activeCard === index ? 0.1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
                <h3 className="text-2xl font-light text-white mb-4">
                  {type.title}
                </h3>
                <p className="text-gray-400">{type.desc}</p>
                <motion.div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${type.color} rounded-full`}
                  initial={{ width: 0 }}
                  animate={{ width: activeCard === index ? "100%" : "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>

          {/* Central Image (replaces video) */}
          <motion.figure
            className="relative h-[28rem] md:h-[32rem] rounded-[28px]"
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            {/* Amber gradient frame */}
            <div className="relative h-full rounded-[28px] p-[2px] bg-gradient-to-r from-amber-300/40 via-amber-500/40 to-amber-700/40">
              {/* Soft ambient glow */}
              <div className="pointer-events-none absolute -inset-6 rounded-[32px] bg-amber-400/10 blur-3xl" />

              {/* Image container */}
              <div className="relative h-full rounded-[26px] overflow-hidden bg-white/5 ring-1 ring-white/10">
                <NextImage
                  src="/images/walkin9.png" // 👉 replace with your image
                  alt="Lusso wardrobes — refined storage, timeless craft"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 1200px"
                  priority
                />

                {/* Gentle top fade */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a1526]/40 via-transparent to-transparent" />

                {/* Minimal accent line at bottom */}
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-amber-300/60 via-amber-500/60 to-amber-700/60" />
              </div>
            </div>
          </motion.figure>
        </div>
      </div>
    </section>
  );
}

/* =========================
   Shutters (Wardrobes clone)
   ========================= */
function ShuttersSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const [activeCard, setActiveCard] = useState<number>(0);

  const shutterTypes = [
    {
      title: "Panel Shutters",
      desc: "Spacious luxury dressing rooms",
      color: "from-blue-400 to-purple-600",
    },
    {
      title: "Plantation Shutters",
      desc: "Seamlessly integrated storage",
      color: "from-purple-400 to-pink-600",
    },
    {
      title: "Custom Shutters",
      desc: "Flexible and expandable",
      color: "from-pink-400 to-red-600",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="min-h-screen py-20 relative overflow-hidden"
      style={{ backgroundColor: "#0a1526" }}
    >
      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 border border-white/10 rounded-lg"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
            transition={{
              duration: 10 + i * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="inline-block text-8xl font-thin text-white/10 mb-4"
            initial={{ scale: 0.5 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 1.2 }}
          >
            03
          </motion.div>
          <h2 className="text-6xl font-light text-transparent bg-gradient-to-r from-amber-400 via-amber-800 to-yellow-800 bg-clip-text mb-6">
            Shutters
          </h2>
          <div className="w-32 h-px bg-gradient-to-r from-amber-400 to-amber-800 mx-auto" />
        </motion.div>

        {/* Morphing Cards Layout */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {shutterTypes.map((type, index) => (
              <motion.div
                key={index}
                className={`relative p-8 rounded-2xl cursor-pointer transition-all duration-500 ${
                  activeCard === index ? "bg-white/10" : "bg-white/5"
                }`}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                onHoverStart={() => setActiveCard(index)}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${type.color} opacity-0 rounded-2xl`}
                  animate={{ opacity: activeCard === index ? 0.1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
                <h3 className="text-2xl font-light text-white mb-4">
                  {type.title}
                </h3>
                <p className="text-gray-400">{type.desc}</p>
                <motion.div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${type.color} rounded-full`}
                  initial={{ width: 0 }}
                  animate={{ width: activeCard === index ? "100%" : "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>

          {/* Central Image (replaces video) */}
          <motion.figure
            className="relative h-[28rem] md:h-[32rem] rounded-[28px]"
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            {/* Amber gradient frame */}
            <div className="relative h-full rounded-[28px] p-[2px] bg-gradient-to-r from-amber-300/40 via-amber-500/40 to-amber-700/40">
              {/* Soft ambient glow */}
              <div className="pointer-events-none absolute -inset-6 rounded-[32px] bg-amber-400/10 blur-3xl" />

              {/* Image container */}
              <div className="relative h-full rounded-[26px] overflow-hidden bg-white/5 ring-1 ring-white/10">
                <NextImage
                  src="/images/4.jpg" // 👉 replace with your image
                  alt="Lusso shutters — crafted light and privacy"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 1200px"
                  priority
                />

                {/* Gentle top fade */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a1526]/40 via-transparent to-transparent" />

                {/* Minimal accent line at bottom */}
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-amber-300/60 via-amber-500/60 to-amber-700/60" />
              </div>
            </div>
          </motion.figure>
        </div>
      </div>
    </section>
  );
}

/* ============================
   Partitions (Wardrobes clone)
   ============================ */
function PartitionsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const [activeCard, setActiveCard] = useState<number>(0);

  const partitionTypes = [
    {
      title: "Shelving Partitions",
      desc: "Spacious luxury dressing rooms",
      color: "from-blue-400 to-purple-600",
    },
    {
      title: "Smart Glass Partitions",
      desc: "Seamlessly integrated storage",
      color: "from-purple-400 to-pink-600",
    },
    {
      title: "Metal Frame Partitons",
      desc: "Flexible and expandable",
      color: "from-pink-400 to-red-600",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="min-h-screen py-20 relative overflow-hidden"
      style={{ backgroundColor: "#0a1526" }}
    >
      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 border border-white/10 rounded-lg"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
            transition={{
              duration: 10 + i * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="inline-block text-8xl font-thin text-white/10 mb-4"
            initial={{ scale: 0.5 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 1.2 }}
          >
            04
          </motion.div>
          <h2 className="text-6xl font-light text-transparent bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-800 bg-clip-text mb-6">
            Partitions
          </h2>
          <div className="w-32 h-px bg-gradient-to-r from-amber-400 to-yellow-400 mx-auto" />
        </motion.div>

        {/* Morphing Cards Layout */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {partitionTypes.map((type, index) => (
              <motion.div
                key={index}
                className={`relative p-8 rounded-2xl cursor-pointer transition-all duration-500 ${
                  activeCard === index ? "bg-white/10" : "bg-white/5"
                }`}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                onHoverStart={() => setActiveCard(index)}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${type.color} opacity-0 rounded-2xl`}
                  animate={{ opacity: activeCard === index ? 0.1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
                <h3 className="text-2xl font-light text-white mb-4">
                  {type.title}
                </h3>
                <p className="text-gray-400">{type.desc}</p>
                <motion.div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${type.color} rounded-full`}
                  initial={{ width: 0 }}
                  animate={{ width: activeCard === index ? "100%" : "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>

          {/* Central Image (replaces video) */}
          <motion.figure
            className="relative h-[28rem] md:h-[32rem] rounded-[28px]"
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            {/* Amber gradient frame */}
            <div className="relative h-full rounded-[28px] p-[2px] bg-gradient-to-r from-amber-300/40 via-amber-500/40 to-amber-700/40">
              {/* Soft ambient glow */}
              <div className="pointer-events-none absolute -inset-6 rounded-[32px] bg-amber-400/10 blur-3xl" />

              {/* Image container */}
              <div className="relative h-full rounded-[26px] overflow-hidden bg-white/5 ring-1 ring-white/10">
                <NextImage
                  src="/images/8.jpg" // 👉 replace with your image path
                  alt="Lusso partitions — elegant space division"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 1200px"
                  priority
                />

                {/* Gentle top fade */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a1526]/40 via-transparent to-transparent" />

                {/* Minimal accent line at bottom */}
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-amber-300/60 via-amber-500/60 to-amber-700/60" />
              </div>
            </div>
          </motion.figure>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

export default function BrandsCollaborationSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const [hoveredBrand, setHoveredBrand] = useState<number | null>(null);

  const brands = [
    {
      name: "Blum",
      category: "",
      description: "Exquisite craftsmanship meets timeless elegance",
      logo: "/images/blum.png",
    },
    {
      name: "Aristo",
      category: "",
      description: "Illuminating spaces with crystal perfection",
      logo: "/images/aristo.png",
    },
    {
      name: "Casantro",
      category: "",
      description: "Masterful Italian leather craftsmanship",
      logo: "/images/casantro.png",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
      style={{ backgroundColor: "#0a1526" }}
    >
      {/* Subtle Background Animation */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-amber-500/5 to-pink-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      {/* Narrow Container */}
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <motion.h2
            className="text-5xl font-light text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Key Collaborations
          </motion.h2>

          <motion.div
            className="w-24 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-8"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          />

          <motion.p
            className="text-2xl font-light text-transparent bg-gradient-to-r from-amber-300 via-pink-300 to-purple-300 bg-clip-text mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
          >
            "Born from your vision, built by us"
          </motion.p>

          <motion.p
            className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
          >
            This is so possible with Lusso. We partner with the Nation&apos;s
            most prestigious brands to bring your luxury vision to life.
          </motion.p>
        </motion.div>

        {/* Brands Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              onHoverStart={() => setHoveredBrand(index)}
              onHoverEnd={() => setHoveredBrand(null)}
            >
              <motion.div
                className="relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 overflow-hidden cursor-pointer h-48 flex flex-col justify-between"
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Hover Background Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-pink-500/10 to-purple-500/10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredBrand === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Brand Logo */}
                <div className="relative z-10">
                  <motion.div
                    className="h-12 flex items-center justify-center mb-4"
                    animate={{ scale: hoveredBrand === index ? 1.1 : 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={brand.logo} // ✅ use the brand's own logo
                      alt={`${brand.name} logo`}
                      className="max-h-full max-w-full object-contain filter brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </motion.div>

                  {/* Brand Info */}
                  <div className="text-center">
                    <h3 className="text-lg font-light text-white mb-2">
                      {brand.name}
                    </h3>
                    {brand.category ? (
                      <p className="text-sm text-amber-400 mb-2">
                        {brand.category}
                      </p>
                    ) : null}
                    <motion.p
                      className="text-xs text-gray-400 leading-relaxed"
                      initial={{ opacity: 0.7 }}
                      animate={{ opacity: hoveredBrand === index ? 1 : 0.7 }}
                      transition={{ duration: 0.3 }}
                    >
                      {brand.description}
                    </motion.p>
                  </div>
                </div>

                {/* Animated Border */}
                {hoveredBrand === index && (
                  <motion.div
                    className="absolute inset-0 rounded-2xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      borderWidth: 2,
                      borderStyle: "solid",
                      borderImageSource:
                        "linear-gradient(45deg, rgba(245,158,11,0.5), rgba(236,72,153,0.5), rgba(147,51,234,0.5))",
                      borderImageSlice: 1,
                    }}
                  />
                )}

                {/* Corner Accent */}
                <motion.div
                  className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-amber-400 to-pink-400 rounded-full"
                  animate={{
                    scale: hoveredBrand === index ? [1, 1.5, 1] : 1,
                    opacity: hoveredBrand === index ? [1, 0.5, 1] : 0.3,
                  }}
                  transition={{
                    duration: 0.5,
                    repeat:
                      hoveredBrand === index ? Number.POSITIVE_INFINITY : 0,
                  }}
                />
              </motion.div>
            </motion.div>
          ))}

          {/* Center Brand - Featured */}
          <motion.div
            className="md:col-span-2 lg:col-span-1 lg:col-start-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-amber-500/10 via-pink-500/10 to-purple-500/10 backdrop-blur-sm border border-amber-400/20 text-center">
              <motion.div
                className="text-4xl mb-4"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                ✨
              </motion.div>
              <h3 className="text-xl font-light text-white mb-2">
                & Many More
              </h3>
              <p className="text-sm text-gray-400">
                Exclusive partnerships with luxury brands worldwide
              </p>
            </div>
          </motion.div>
        </div>

        {/* Call to Action — SINGLE button linking to /startvision */}
        <motion.div
          className="text-center mt-16 relative z-[60]"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <Link href="/startvision" className="block">
            <motion.div
              role="button"
              tabIndex={0}
              className="inline-flex items-center justify-center px-10 py-4 rounded-full text-black font-medium tracking-wide
                       bg-gradient-to-r from-amber-400 via-amber-500 to-amber-700
                       hover:from-amber-300 hover:via-amber-500 hover:to-amber-800
                       shadow-[0_8px_30px_rgba(251,191,36,0.25)] transition duration-300"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              {/* Hover sweep overlay */}
              <motion.div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Inner padding + white text */}
              <div className="relative z-10 px-10 py-4 text-center">
                <span className="flex items-center justify-center gap-2 text-white font-light tracking-wide">
                  Start Your Vision
                  <motion.span
                    aria-hidden
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 1.5,
                    }}
                  >
                    →
                  </motion.span>
                </span>
              </div>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

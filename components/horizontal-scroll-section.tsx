"use client";

import { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

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

// Kitchens Section - Floating Elements Design
function KitchensSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const [hoveredElement, setHoveredElement] = useState<string | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);

  const kitchenFeatures = [
    {
      id: "island",
      x: "20%",
      y: "30%",
      title: "U - Shape",
      desc: "Centerpiece of culinary excellence",
    },
    {
      id: "cabinets",
      x: "70%",
      y: "25%",
      title: "Gallery Kitchen",
      desc: "Handcrafted storage solutions",
    },
    {
      id: "appliances",
      x: "30%",
      y: "70%",
      title: "G - Shape",
      desc: "State-of-the-art technology",
    },
    {
      id: "lighting",
      x: "80%",
      y: "65%",
      title: "Island Kitchen",
      desc: "Perfect illumination design",
    },

    {
      id: "lighting",
      x: "80%",
      y: "65%",
      title: "I - shape",
      desc: "Perfect illumination design",
    },

    {
      id: "lighting",
      x: "80%",
      y: "65%",
      title: "One Counter Kitchen",
      desc: "Perfect illumination design",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="min-h-screen relative overflow-hidden py-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-full blur-3xl"
          style={{ y: y1, rotate }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 rounded-full blur-3xl"
          style={{ y: y2 }}
        />
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
          <h2 className="text-6xl font-light text-transparent bg-gradient-to-r from-red-400 via-orange-400 to-amber-400 bg-clip-text mb-6">
            Kitchens
          </h2>
          <div className="w-32 h-px bg-gradient-to-r from-red-400 to-amber-400 mx-auto" />
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Interactive Kitchen Layout */}
          <motion.div
            className="relative h-[600px] rounded-3xl overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
              poster="/images/pic12.png"
            >
              <source src="/videos/hero.mp4" type="video/mp4" />
            </video>

            {/* Interactive Hotspots */}
            {kitchenFeatures.map((feature, index) => (
              <motion.div
                key={feature.id}
                className="absolute w-12 h-12 rounded-full bg-gradient-to-r from-white-400/80 to-grey-400/80 backdrop-blur-sm border-2 border-white/30 cursor-pointer flex items-center justify-center group"
                style={{ left: feature.x, top: feature.y }}
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: 0.5, opacity: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                onHoverStart={() => setHoveredElement(feature.id)}
                onHoverEnd={() => setHoveredElement(null)}
                whileHover={{ scale: 1.3 }}
              >
                <div className="w-2 h-2 bg-white rounded-full" />
                {hoveredElement === feature.id && (
                  <motion.div
                    className="absolute -top-20 left-1/2 transform -translate-x-1/2 bg-slate-800/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap border border-white/20"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div className="font-medium">{feature.title}</div>
                    <div className="text-gray-300 text-xs">{feature.desc}</div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <p className="text-xl text-gray-300 leading-relaxed">
              Where culinary artistry meets sophisticated design. Our kitchen
              spaces blend functionality with luxury, creating the perfect
              environment for both intimate family meals and grand entertaining.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                "U - Shape",
                "Gallery Kitchen",
                "Island kitchen",
                "I - Shape",
                "G - Shape",
                "One Counter Kitchen",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  className="p-4 bg-gradient-to-br from-white/5 to-white/10 rounded-lg backdrop-blur-sm border border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255,255,255,0.1)",
                  }}
                >
                  <div className="text-white font-light">{item}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Wardrobes Section - Morphing Cards Design
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
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
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
          <h2 className="text-6xl font-light text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text mb-6">
            Wardrobes
          </h2>
          <div className="w-32 h-px bg-gradient-to-r from-blue-400 to-pink-400 mx-auto" />
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

          {/* Central Video */}
          <motion.div
            className="relative h-96 rounded-3xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
              poster="/images/pic11.png"
            >
              <source src="/videos/hero.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Shutters Section - Layered Parallax Design
function ShuttersSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -300]);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen py-20 relative overflow-hidden"
      style={{ backgroundColor: "#0a1526" }}
    >
      {/* Layered Background Elements */}
      <motion.div className="absolute inset-0 opacity-20" style={{ y: y3 }}>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-500/20 to-teal-500/20" />
      </motion.div>
      <motion.div className="absolute inset-0 opacity-30" style={{ y: y2 }}>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-full blur-3xl" />
      </motion.div>
      <motion.div className="absolute inset-0 opacity-40" style={{ y: y1 }}>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 rounded-full blur-3xl" />
      </motion.div>

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
          <h2 className="text-6xl font-light text-transparent bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text mb-6">
            Shutters
          </h2>
          <div className="w-32 h-px bg-gradient-to-r from-green-400 to-teal-400 mx-auto" />
        </motion.div>

        {/* Split Screen Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Stacked Images */}
          <div className="relative">
            <motion.div
              className="relative z-10 rounded-2xl overflow-hidden mb-8"
              style={{ y: y1 }}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1 }}
            >
              <div
                className="h-64 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/images/pic7.png')",
                }}
              />
            </motion.div>
            <motion.div
              className="relative z-20 rounded-2xl overflow-hidden ml-12"
              style={{ y: y2 }}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div
                className="h-64 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/images/pic8.png')",
                }}
              />
            </motion.div>
          </div>

          {/* Right Side - Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <p className="text-xl text-gray-300 leading-relaxed">
              Privacy meets style in perfect harmony. Our shutter designs offer
              both functional light control and architectural beauty that
              enhances any interior space.
            </p>

            {/* Feature List */}
            <div className="space-y-4">
              {[
                "Light Control",
                "Privacy Solutions",
                "Energy Efficiency",
                "Custom Finishes",
              ].map((feature, index) => (
                <motion.div
                  key={feature}
                  className="flex items-center space-x-4 p-4 rounded-lg bg-gradient-to-r from-white/5 to-transparent border-l-2 border-green-400"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{
                    x: 10,
                    backgroundColor: "rgba(255,255,255,0.1)",
                  }}
                >
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  <span className="text-white font-light">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Partitions Section - 3D Cube Design
function PartitionsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const [rotateY, setRotateY] = useState(0);

  const partitionTypes = [
    {
      title: "Glass Partitions",
      desc: "Transparent elegance",
      image: "Glass+Partitions",
    },
    {
      title: "Wooden Screens",
      desc: "Natural warmth",
      image: "Wooden+Screens",
    },
    {
      title: "Metal Dividers",
      desc: "Industrial chic",
      image: "Metal+Dividers",
    },
    {
      title: "Fabric Panels",
      desc: "Soft sophistication",
      image: "Fabric+Panels",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="min-h-screen py-20 relative overflow-hidden"
      style={{ backgroundColor: "#0a1526" }}
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 grid-rows-8 h-full w-full">
          {[...Array(96)].map((_, i) => (
            <motion.div
              key={i}
              className="border border-white/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.5, 0] }}
              transition={{
                duration: 2,
                delay: i * 0.05,
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: 5,
              }}
            />
          ))}
        </div>
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
          <h2 className="text-6xl font-light text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text mb-6">
            Partitions
          </h2>
          <div className="w-32 h-px bg-gradient-to-r from-purple-400 to-red-400 mx-auto" />
        </motion.div>

        {/* 3D Rotating Gallery */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative h-96 perspective-1000">
            <motion.div
              className="relative w-full h-full transform-style-preserve-3d"
              animate={{ rotateY }}
              transition={{ duration: 0.8 }}
            >
              {partitionTypes.map((type, index) => (
                <motion.div
                  key={index}
                  className="absolute inset-0 rounded-2xl overflow-hidden cursor-pointer"
                  style={{
                    transform: `rotateY(${index * 90}deg) translateZ(200px)`,
                  }}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: index * 0.2 }}
                  onClick={() => setRotateY(rotateY - 90)}
                >
                  <div
                    className="w-full h-full bg-cover bg-center relative"
                    style={{
                      backgroundImage: `url('/images/pic10.png')`,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <h3 className="text-2xl font-light text-white mb-2">
                        {type.title}
                      </h3>
                      <p className="text-gray-300">{type.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-4 mt-8">
            {partitionTypes.map((_, index) => (
              <motion.button
                key={index}
                className="w-3 h-3 rounded-full bg-white/30 hover:bg-white/60 transition-colors"
                onClick={() => setRotateY(-index * 90)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>

        {/* Description */}
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1 }}
        >
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            Divide and define spaces with sculptural elements that serve as both
            functional room dividers and stunning focal points in your interior
            landscape.
          </p>
          <motion.button
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-light tracking-wide hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

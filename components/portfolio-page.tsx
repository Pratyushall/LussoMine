"use client";

import { useRef, useState, useEffect } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";

export default function PortfolioPage() {
  return (
    <div style={{ backgroundColor: "#0a1526" }} className="min-h-screen">
      <PortfolioHero />
      <PremiumVideoSection />
      <ImageGallerySection />
      <TestimonialsSection />
    </div>
  );
}

// Hero Section
function PortfolioHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section
      ref={sectionRef}
      className="min-h-screen relative overflow-hidden flex items-center justify-center pt-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-8xl font-thin text-white mb-8 tracking-tight"
            animate={{
              textShadow: [
                "0 0 30px rgba(255,255,255,0.1)",
                "0 0 60px rgba(255,255,255,0.2)",
                "0 0 30px rgba(255,255,255,0.1)",
              ],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            Our{" "}
            <span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text">
              Portfolio
            </span>
          </motion.h1>

          <motion.div
            className="w-32 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mb-8"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.5 }}
          />

          <motion.p
            className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Discover our collection of luxury interiors that redefine elegance
            and sophistication. Each project tells a unique story of
            craftsmanship and vision.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

// Premium Video Section
function PremiumVideoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [activeVideo, setActiveVideo] = useState<number>(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const videos = [
    {
      title: "Penthouse Paradise",
      subtitle: "Manhattan Luxury Living",
      description:
        "A breathtaking transformation of a Manhattan penthouse featuring floor-to-ceiling windows and bespoke Italian furnishings.",
      video: "/placeholder.mp4",
      poster: "/placeholder.svg?height=1080&width=1920&text=Penthouse+Paradise",
    },
    {
      title: "Modern Minimalism",
      subtitle: "Beverly Hills Estate",
      description:
        "Clean lines and sophisticated materials create an oasis of calm in this Beverly Hills masterpiece.",
      video: "/placeholder.mp4",
      poster: "/placeholder.svg?height=1080&width=1920&text=Modern+Minimalism",
    },
    {
      title: "Classic Elegance",
      subtitle: "London Townhouse",
      description:
        "Traditional British elegance meets contemporary luxury in this stunning London townhouse renovation.",
      video: "/placeholder.mp4",
      poster: "/placeholder.svg?height=1080&width=1920&text=Classic+Elegance",
    },
  ];

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-500/5 to-cyan-500/5 rounded-full blur-3xl" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <h2 className="text-6xl font-light text-white mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto" />
        </motion.div>

        {/* Main Video Display */}
        <motion.div
          className="relative mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="relative h-[70vh] rounded-3xl overflow-hidden">
            <video
              key={activeVideo}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
              poster={videos[activeVideo].poster}
            >
              <source src={videos[activeVideo].video} type="video/mp4" />
            </video>

            {/* Video Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

            {/* Video Info */}
            <motion.div
              className="absolute bottom-8 left-8 right-8"
              key={activeVideo}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="max-w-2xl">
                <h3 className="text-4xl font-light text-white mb-2">
                  {videos[activeVideo].title}
                </h3>
                <p className="text-xl text-blue-300 mb-4">
                  {videos[activeVideo].subtitle}
                </p>
                <p className="text-white/80 leading-relaxed">
                  {videos[activeVideo].description}
                </p>
              </div>
            </motion.div>

            {/* Play Button Overlay */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center cursor-pointer">
                <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1" />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Video Thumbnails */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              className={`relative cursor-pointer group ${
                activeVideo === index ? "ring-2 ring-blue-400" : ""
              } rounded-2xl overflow-hidden`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
              onClick={() => setActiveVideo(index)}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={video.poster || "/placeholder.svg"}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Active Indicator */}
                {activeVideo === index && (
                  <motion.div
                    className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{
                      duration: 1,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  />
                )}
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <h4 className="text-lg font-light text-white mb-1">
                  {video.title}
                </h4>
                <p className="text-sm text-blue-300">{video.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Image Gallery Section
function ImageGallerySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      src: "/placeholder.svg?height=600&width=800&text=Luxury+Kitchen",
      title: "Gourmet Kitchen",
      category: "Kitchen Design",
      description:
        "A chef's paradise with premium appliances and custom cabinetry.",
    },
    {
      src: "/placeholder.svg?height=800&width=600&text=Master+Bedroom",
      title: "Master Suite",
      category: "Bedroom Design",
      description:
        "Serene sanctuary with bespoke furnishings and panoramic views.",
    },
    {
      src: "/placeholder.svg?height=600&width=800&text=Living+Room",
      title: "Grand Living Room",
      category: "Living Spaces",
      description:
        "Elegant entertaining space with statement lighting and art.",
    },
    {
      src: "/placeholder.svg?height=800&width=600&text=Bathroom",
      title: "Spa Bathroom",
      category: "Bathroom Design",
      description:
        "Luxurious retreat with marble finishes and modern fixtures.",
    },
    {
      src: "/placeholder.svg?height=600&width=800&text=Dining+Room",
      title: "Formal Dining",
      category: "Dining Spaces",
      description: "Sophisticated dining experience with custom millwork.",
    },
    {
      src: "/placeholder.svg?height=800&width=600&text=Home+Office",
      title: "Executive Office",
      category: "Work Spaces",
      description:
        "Productive workspace with built-in storage and premium materials.",
    },
  ];

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <h2 className="text-6xl font-light text-white mb-6">Gallery</h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto mb-8" />
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Explore our curated collection of luxury interior transformations
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="break-inside-avoid relative group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              onClick={() => setSelectedImage(index)}
              whileHover={{ y: -10 }}
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.title}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <motion.div
                  className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ y: 20 }}
                  whileHover={{ y: 0 }}
                >
                  <p className="text-sm text-purple-300 mb-2">
                    {image.category}
                  </p>
                  <h3 className="text-xl font-light text-white mb-2">
                    {image.title}
                  </h3>
                  <p className="text-sm text-white/80">{image.description}</p>
                </motion.div>

                {/* Zoom Icon */}
                <motion.div
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="w-4 h-4 border-2 border-white rounded-full relative">
                    <div className="absolute -bottom-1 -right-1 w-2 h-0.5 bg-white rotate-45 origin-left" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-5xl max-h-[90vh] rounded-2xl overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[selectedImage].src || "/placeholder.svg"}
                alt={galleryImages[selectedImage].title}
                className="w-full h-full object-contain"
              />

              {/* Close Button */}
              <motion.button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ✕
              </motion.button>

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-purple-300 text-sm mb-2">
                  {galleryImages[selectedImage].category}
                </p>
                <h3 className="text-2xl font-light text-white mb-2">
                  {galleryImages[selectedImage].title}
                </h3>
                <p className="text-white/80">
                  {galleryImages[selectedImage].description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

// Testimonials Section
function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Mitchell",
      title: "CEO, Tech Innovations",
      image: "/placeholder.svg?height=100&width=100&text=SM",
      quote:
        "LUSSO transformed our Manhattan penthouse into a masterpiece. Their attention to detail and understanding of luxury is unparalleled. Every corner tells a story of elegance.",
      rating: 5,
      project: "Manhattan Penthouse",
    },
    {
      name: "David Chen",
      title: "Investment Banker",
      image: "/placeholder.svg?height=100&width=100&text=DC",
      quote:
        "Working with LUSSO was an extraordinary experience. They didn't just design our home; they created a lifestyle. The quality of craftsmanship exceeded all expectations.",
      rating: 5,
      project: "Beverly Hills Estate",
    },
    {
      name: "Isabella Rodriguez",
      title: "Art Collector",
      image: "/placeholder.svg?height=100&width=100&text=IR",
      quote:
        "LUSSO understood our vision perfectly. They created spaces that not only showcase our art collection beautifully but also provide the ultimate in comfort and sophistication.",
      rating: 5,
      project: "Miami Beach Villa",
    },
    {
      name: "James Thompson",
      title: "Real Estate Developer",
      image: "/placeholder.svg?height=100&width=100&text=JT",
      quote:
        "The team at LUSSO delivered beyond our wildest dreams. Their innovative approach to luxury design has set a new standard in our industry. Simply phenomenal work.",
      rating: 5,
      project: "London Townhouse",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-pink-500/5 to-purple-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <h2 className="text-6xl font-light text-white mb-6">
            Client Stories
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent mx-auto mb-8" />
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Hear from our clients about their luxury transformation journey
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <motion.div
          className="max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8 }}
            >
              {/* Quote */}
              <motion.div className="mb-8">
                <div className="text-6xl text-pink-400/30 mb-4">"</div>
                <p className="text-2xl font-light text-white leading-relaxed italic">
                  {testimonials[activeTestimonial].quote}
                </p>
                <div className="text-6xl text-pink-400/30 mt-4 rotate-180 inline-block">
                  "
                </div>
              </motion.div>

              {/* Rating */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[activeTestimonial].rating)].map(
                  (_, i) => (
                    <motion.div
                      key={i}
                      className="text-2xl text-yellow-400 mx-1"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      ★
                    </motion.div>
                  )
                )}
              </div>

              {/* Client Info */}
              <div className="flex items-center justify-center space-x-4">
                <motion.img
                  src={testimonials[activeTestimonial].image}
                  alt={testimonials[activeTestimonial].name}
                  className="w-16 h-16 rounded-full border-2 border-pink-400/30"
                  whileHover={{ scale: 1.1 }}
                />
                <div className="text-left">
                  <h4 className="text-xl font-light text-white">
                    {testimonials[activeTestimonial].name}
                  </h4>
                  <p className="text-pink-300">
                    {testimonials[activeTestimonial].title}
                  </p>
                  <p className="text-white/60 text-sm">
                    {testimonials[activeTestimonial].project}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Testimonial Navigation */}
        <div className="flex justify-center space-x-4">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeTestimonial === index
                  ? "bg-pink-400 scale-125"
                  : "bg-white/30 hover:bg-white/50"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>

        {/* Client Logos */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1 }}
        >
          <p className="text-white/60 mb-8">
            Trusted by luxury brands and discerning clients worldwide
          </p>
          <div className="flex justify-center items-center space-x-12 opacity-40">
            {[
              "FORBES",
              "ARCHITECTURAL DIGEST",
              "ELLE DECOR",
              "LUXURY HOMES",
            ].map((brand, index) => (
              <motion.div
                key={brand}
                className="text-white font-light tracking-wider"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                whileHover={{ opacity: 0.8, scale: 1.05 }}
              >
                {brand}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

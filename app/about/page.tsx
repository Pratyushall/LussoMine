"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/footer"; // <-- Import footer

export default function AboutLussoPage() {
  return (
    <div
      style={{ backgroundColor: "#0a1526" }}
      className="min-h-screen relative"
    >
      <TopRightMenu /> {/* <-- Menu in the top-right */}
      <AboutHero />
      <OurStorySection />
      <TeamSection />
      <ValuesSection />
      <AwardsSection />
      <Footer /> {/* <-- Footer at the bottom */}
    </div>
  );
}

/* ────────────────────────────────────────────────────────────
   Top-right menu (reuse this across pages or move to app/layout.tsx)
   ──────────────────────────────────────────────────────────── */
function TopRightMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed top-5 right-5 z-[80]">
      <button
        onClick={() => setOpen((v) => !v)}
        className="relative px-4 py-2 rounded-full border border-white/20 text-white/90 backdrop-blur-sm
                   bg-white/5 hover:bg-white/10 transition"
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
            { label: "About", href: "/about" },
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

function AboutHero() {
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
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-amber-500/10 to-pink-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{
            duration: 20,
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
            About{" "}
            <span className="text-transparent bg-gradient-to-r from-amber-400 via-amber-600 to-amber-800 bg-clip-text">
              LUSSO
            </span>
          </motion.h1>

          <motion.div
            className="w-32 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-8"
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
            Where luxury meets innovation, and dreams become reality. Discover
            the story behind our passion for creating extraordinary spaces.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

function OurStorySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <h2 className="text-5xl font-light text-white mb-8">Our Story</h2>
            <div className="space-y-6 text-white/80 leading-relaxed">
              <p>
                Founded in 2008, LUSSO began as a vision to redefine luxury
                interior design. Our journey started with a simple belief: every
                space has the potential to become extraordinary.
              </p>
              <p>
                Over the years, we've transformed hundreds of homes, offices,
                and commercial spaces, each project reflecting our commitment to
                excellence, innovation, and timeless elegance.
              </p>
              <p>
                Today, LUSSO stands as a testament to the power of visionary
                design, bringing together the world's finest materials,
                cutting-edge technology, and unparalleled craftsmanship.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="aspect-square rounded-3xl overflow-hidden">
              <img
                src="/images/abt1.png"
                alt="Our Story"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const team = [
    {
      name: "Pranav Kondabathini",
      title: "Founder & Creative Director",
      image: "/images/prnv.jpg",
    },
    {
      name: "Shiva Pranav",
      title: "Head of Design",
      image: "/images/prnv.jpg",
    },
    {
      name: "Pranav",
      title: "Project Director",
      image: "/images/prnv.jpg",
    },
  ];

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl font-light text-white mb-6">Our Team</h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="relative mb-6">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full aspect-square object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-light text-white mb-2">
                {member.name}
              </h3>
              <p className="text-amber-400 mb-4">{member.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ValuesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const values = [
    {
      title: "Excellence",
      description:
        "We pursue perfection in every detail, from concept to completion.",
      icon: "ᯓ★",
    },
    {
      title: "Innovation",
      description:
        "We embrace cutting-edge technology and forward-thinking design.",
      icon: "ᯓ★",
    },
    {
      title: "Sustainability",
      description:
        "We're committed to environmentally responsible luxury design.",
      icon: "ᯓ★",
    },
    {
      title: "Craftsmanship",
      description:
        "We honor traditional techniques while embracing modern methods.",
      icon: "ᯓ★",
    },
  ];

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl font-light text-white mb-6">Our Values</h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-light text-white mb-4">
                {value.title}
              </h3>
              <p className="text-white/70 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AwardsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const awards = [
    {
      year: "2023",
      title: "Best Luxury Interior Design",
      organization: "International Design Awards",
    },
    {
      year: "2022",
      title: "Innovation in Sustainable Design",
      organization: "Green Design Council",
    },
    {
      year: "2021",
      title: "Designer of the Year",
      organization: "Luxury Living Magazine",
    },
    {
      year: "2020",
      title: "Excellence in Craftsmanship",
      organization: "Artisan Guild",
    },
  ];

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl font-light text-white mb-6">Recognition</h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              className="flex items-center space-x-6 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="text-3xl font-light text-amber-400">
                {award.year}
              </div>
              <div>
                <h3 className="text-lg font-light text-white mb-1">
                  {award.title}
                </h3>
                <p className="text-white/60">{award.organization}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

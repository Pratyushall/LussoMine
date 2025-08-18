"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll } from "framer-motion";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ProjectSections from "@/components/horizontal-scroll-section";
import BrandsCollaborationSection from "@/components/brands-collaboration-section";
import JourneySection from "@/components/journey-section";
import Footer from "@/components/footer";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      setIsScrolled(latest > 100);
    });
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <div
      ref={containerRef}
      className="text-white overflow-x-hidden"
      style={{ backgroundColor: "#7e4a35" }}
    >
      <Header isScrolled={isScrolled} />
      <HeroSection />
      <AboutSection />
      <ProjectSections />
      <BrandsCollaborationSection />
      <JourneySection />
      <Footer />
    </div>
  );
}

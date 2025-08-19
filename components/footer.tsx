"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

// knobs
const SHOW_THRESHOLD_RATIO = 0.2; // near bottom: 20% of viewport
const SHOW_THRESHOLD_MIN = 200; // or 200px
const FOOTER_MAX_H = "65vh"; // set "none" for unlimited height
const STORE_KEY = "lusso_footer_min"; // session storage key

export default function Footer() {
  const [visible, setVisible] = useState(false); // auto show/hide based on scroll
  const [minimized, setMinimized] = useState(false); // user toggle
  const lastY = useRef(0);

  // Restore minimized state per session
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem(STORE_KEY);
      if (saved === "1") setMinimized(true);
    } catch {}
  }, []);
  useEffect(() => {
    try {
      sessionStorage.setItem(STORE_KEY, minimized ? "1" : "0");
    } catch {}
  }, [minimized]);

  // Scroll-driven show/hide (disabled while minimized)
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset;
      const vh = window.innerHeight || 0;
      const doc = document.documentElement;
      const bottomGap = doc.scrollHeight - (y + vh);

      if (minimized) {
        lastY.current = y;
        return;
      }

      const goingDown = y > lastY.current + 2;
      const goingUp = y < lastY.current - 2;
      const nearBottom =
        bottomGap < Math.max(SHOW_THRESHOLD_MIN, vh * SHOW_THRESHOLD_RATIO);

      if (nearBottom && goingDown) setVisible(true);
      if (goingUp && !nearBottom) setVisible(false);

      lastY.current = y;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [minimized]);

  const productCategories = [
    { name: "Kitchens", href: "/products#kitchens" },
    { name: "Wardrobes", href: "/products#wardrobes" },
    { name: "Shutters", href: "/products#shutters" },
    { name: "Partitions", href: "/products#partitions" },
  ];

  const quickLinks = [
    { name: "About Lusso", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact Us", href: "/contact" },
    { name: "Our Process", href: "/about#process" },
  ];

  const buttonClass =
    "inline-flex items-center justify-center rounded-full border px-3.5 py-1.5 text-[12px] tracking-wide " +
    "border-amber-300/40 text-amber-100/90 " +
    "transition-all duration-300 hover:-translate-y-[1px] " +
    "hover:text-[#0a1526] hover:shadow-[0_8px_30px_rgba(255,191,71,0.15)] " +
    "bg-transparent hover:bg-[linear-gradient(45deg,#fff8dc,#ffd700,#b8860b)] " +
    "focus:outline-none focus:ring-2 focus:ring-amber-300/40";

  const slideClasses =
    visible && !minimized
      ? "translate-y-0 opacity-100 pointer-events-auto"
      : "translate-y-[calc(100%+1rem)] opacity-0 pointer-events-none";

  return (
    <>
      {/* MAIN FOOTER */}
      <footer
        aria-live="polite"
        className={[
          "fixed left-0 right-0",
          "bottom-[max(0rem,env(safe-area-inset-bottom))]",
          "z-[90]",
          "transition-[transform,opacity,box-shadow,filter] duration-700",
          "ease-[cubic-bezier(0.22,1,0.36,1)]",
          slideClasses,
        ].join(" ")}
        style={{ willChange: "transform, opacity" }}
      >
        <div
          className={`relative overflow-hidden rounded-none ring-1 ring-white/10 backdrop-blur-xl shadow-[0_-6px_50px_rgba(0,0,0,0.45)] ${playfair.variable} font-[var(--font-playfair)]`}
          style={{ maxHeight: FOOTER_MAX_H }}
          role="dialog"
          aria-label="Site footer"
        >
          {/* FULL background image */}
          <Image
            src="/images/lussoflower11.png"
            alt=""
            fill
            priority={false}
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Tint + grain + vignette */}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,21,38,0.45),rgba(10,21,38,0.55))]" />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-overlay"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, rgba(255,255,255,0.06) 0 1px, rgba(0,0,0,0) 1px 3px)",
            }}
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{ boxShadow: "inset 0 0 60px rgba(0,0,0,0.35)" }}
          />

          {/* CLICKABLE HANDLE (minimize) */}
          <button
            type="button"
            onClick={() => setMinimized(true)}
            aria-label="Minimize footer"
            className="group absolute top-0 left-0 right-0 h-10 z-20 flex items-center justify-center focus:outline-none"
            title="Minimize"
          >
            <span className="h-1.5 w-14 rounded-full bg-white/30 group-hover:bg-white/50 transition-colors" />
          </button>

          {/* Content (scrolls if needed) */}
          <div className="relative z-10 max-h-[inherit] overflow-y-auto overscroll-contain">
            <div className="px-4 sm:px-6 md:px-8 py-8 md:py-9">
              {/* Header */}
              <div className="flex items-center justify-between gap-6">
                <Link href="/" className="flex items-center gap-3">
                  <Image
                    src="/images/favicon.png"
                    alt="Lusso Icon"
                    width={44}
                    height={44}
                    className="object-contain rounded-lg"
                  />
                  <h3 className="text-xl md:text-2xl tracking-[0.2em] text-white">
                    LUSSO
                  </h3>
                </Link>

                <div className="hidden md:flex flex-wrap gap-2.5">
                  {["Instagram", "LinkedIn", "Facebook"].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className={buttonClass}
                      aria-label={social}
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent my-8" />

              {/* Links */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <h4 className="text-white/90 mb-3 text-base md:text-lg">
                    Products
                  </h4>
                  <div className="flex flex-wrap gap-2.5">
                    {productCategories.map((category) => (
                      <Link
                        key={category.name}
                        href={category.href}
                        className={buttonClass}
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-white/90 mb-3 text-base md:text-lg">
                    Company
                  </h4>
                  <div className="flex flex-wrap gap-2.5">
                    {quickLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className={buttonClass}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="mt-8 pt-6 border-t border-white/15 grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
                <div className="space-y-2">
                  <p className="text-white/60">Address</p>
                  <p className="text-white/85">123, Lusso, Banjara Hills</p>
                </div>
                <div className="space-y-2">
                  <p className="text-white/60">Contact</p>
                  <div className="space-y-1">
                    <a
                      href="tel:+919494567900"
                      className="block text-transparent bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text border-b border-transparent hover:border-amber-300/60 transition-colors"
                    >
                      +919494567900-LUSSO
                    </a>
                    <a
                      href="mailto:hello@lusso.com"
                      className="block text-transparent bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text border-b border-transparent hover:border-amber-300/60 transition-colors"
                    >
                      hello@lusso.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Legal */}
              <div className="mt-4 flex flex-wrap items-center gap-6 text-xs text-white/70">
                <span>© 2025 Lusso. All rights reserved.</span>
                <span className="w-px h-3 bg-white/20" />
                <div className="flex flex-wrap gap-2.5">
                  <a href="#" className={buttonClass}>
                    Terms &amp; Conditions
                  </a>
                  <a href="#" className={buttonClass}>
                    Privacy Policy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* EXPAND PILL (only when minimized) */}
      {minimized && (
        <button
          onClick={() => {
            setMinimized(false);
            setVisible(true);
          }}
          aria-label="Expand footer"
          className="fixed bottom-[max(0.75rem,env(safe-area-inset-bottom))] right-3 z-[91] px-3.5 py-2 rounded-full border border-white/20 bg-white/10 text-white/90 hover:bg-white/20 transition backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
          title="Show footer"
        >
          ↑ Show footer
        </button>
      )}
    </>
  );
}

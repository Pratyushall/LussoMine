"use client";

import Link from "next/link";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export default function Footer() {
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

  // Reusable gold “chip button”
  const buttonClass =
    "inline-flex items-center justify-center rounded-full border px-3.5 py-1.5 text-[12px] tracking-wide " +
    "border-amber-400/40 text-amber-200/90 " +
    "transition-all duration-300 hover:-translate-y-[1px] " +
    "hover:text-[#0a1526] hover:shadow-[0_8px_30px_rgba(255,191,71,0.15)] " +
    "bg-transparent hover:bg-[linear-gradient(45deg,#fff8dc,#ffd700,#b8860b)] " +
    "focus:outline-none focus:ring-2 focus:ring-amber-300/40";

  return (
    <footer
      className={`relative overflow-hidden ${playfair.variable} font-[var(--font-playfair)]`}
    >
      {/* Background */}
      <Image
        src="/images/lussoflower11.png"
        alt=""
        fill
        priority
        className="object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 py-16">
        <div className="h-px bg-gradient-to-r from-transparent via-white/50 to-transparent mb-12" />
        <div className="container mx-auto px-4">
          <div className="flex items-start justify-between">
            <div className="flex-1 space-y-10">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-3">
                <Image
                  src="/images/favicon.png"
                  alt="Lusso Icon"
                  width={50}
                  height={50}
                  className="object-contain"
                />
                <h3
                  className={`${playfair.className} text-2xl tracking-[0.2em] text-white`}
                >
                  LUSSO
                </h3>
              </Link>

              {/* Links */}
              <div className="grid grid-cols-2 gap-12">
                {/* Products */}
                <div>
                  <h4 className="text-white mb-4 text-lg">Products</h4>
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

                {/* Company */}
                <div>
                  <h4 className="text-white mb-4 text-lg">Company</h4>
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
              <div className="flex gap-12 text-sm pt-6 border-t border-white/20">
                <div className="space-y-2">
                  <p className="text-white/60">Address</p>
                  <p className="text-white/80">123, Lusso, Banjara Hills</p>
                </div>
                <div className="space-y-2">
                  <p className="text-white/60">Contact</p>
                  <div className="space-y-1">
                    <a
                      href="tel:+919494567900"
                      className="block text-transparent bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text border-b border-transparent hover:border-amber-400/60 transition duration-300"
                    >
                      +919494567900-LUSSO
                    </a>
                    <a
                      href="mailto:hello@lusso.com"
                      className="block text-transparent bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text border-b border-transparent hover:border-amber-400/60 transition duration-300"
                    >
                      hello@lusso.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Social & Legal */}
              <div className="flex items-center gap-8 text-sm pt-4">
                <div className="flex flex-wrap gap-2.5">
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
                <div className="w-px h-4 bg-white/20" />
                <div className="flex flex-wrap gap-2.5">
                  <a href="#" className={buttonClass}>
                    Terms &amp; Conditions
                  </a>
                  <a href="#" className={buttonClass}>
                    Privacy Policy
                  </a>
                </div>
              </div>

              {/* Copyright */}
              <div className="pt-4">
                <p className="text-white/70 text-xs">
                  © 2025 All rights reserved by{" "}
                  <span className="text-transparent bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text">
                    Lusso
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

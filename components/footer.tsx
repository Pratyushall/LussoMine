"use client";

import Link from "next/link";
import Image from "next/image";

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

  return (
    <footer className="relative overflow-hidden">
      {/* Full background image */}
      <Image
        src="/images/footer2.jpg"
        alt=""
        fill
        priority
        className="object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 py-16">
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-12" />
        <div className="container mx-auto px-6">
          <div className="flex items-start justify-between">
            <div className="flex-1 space-y-8">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-3">
                <Image
                  src="/images/favicon.png"
                  alt="Lusso Icon"
                  width={32}
                  height={32}
                  className="object-contain"
                />
                <h3 className="text-2xl font-light tracking-[0.2em] text-white">
                  LUSSO
                </h3>
              </Link>

              {/* Links */}
              <div className="grid grid-cols-2 gap-12">
                {/* Products */}
                <div>
                  <h4 className="text-white font-light mb-4 text-lg">
                    Products
                  </h4>
                  <div className="space-y-3">
                    {productCategories.map((category) => (
                      <Link
                        key={category.name}
                        href={category.href}
                        className="block text-transparent bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text border-b border-transparent hover:border-amber-400/60 transition duration-300 text-sm"
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Quick Links */}
                <div>
                  <h4 className="text-white font-light mb-4 text-lg">
                    Company
                  </h4>
                  <div className="space-y-3">
                    {quickLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="block text-transparent bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text border-b border-transparent hover:border-amber-400/60 transition duration-300 text-sm"
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
                  <p className="text-white/60 font-medium">Address</p>
                  <p className="text-white/80">123, Lusso, Banjara Hills</p>
                </div>
                <div className="space-y-2">
                  <p className="text-white/60 font-medium">Contact</p>
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
                <div className="flex gap-6">
                  {["Instagram", "LinkedIn", "Facebook"].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="text-transparent bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text border-b border-transparent hover:border-amber-400/60 transition duration-300"
                    >
                      {social}
                    </a>
                  ))}
                </div>
                <div className="w-px h-4 bg-white/20" />
                <div className="flex gap-6">
                  <a
                    href="#"
                    className="text-transparent bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text border-b border-transparent hover:border-amber-400/60 transition duration-300"
                  >
                    Terms & Conditions
                  </a>
                  <a
                    href="#"
                    className="text-transparent bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text border-b border-transparent hover:border-amber-400/60 transition duration-300"
                  >
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

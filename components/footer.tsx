"use client";

export default function Footer() {
  const productCategories = [
    { name: "Kitchens", href: "#kitchens" },
    { name: "Wardrobes", href: "#wardrobes" },
    { name: "Shutters", href: "#shutters" },
    { name: "Partitions", href: "#partitions" },
  ];

  const quickLinks = [
    { name: "About Lusso", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact Us", href: "#contact" },
    { name: "Our Process", href: "#process" },
  ];

  return (
    <footer
      className="relative overflow-hidden py-16"
      style={{ backgroundColor: "#0a1526" }}
    >
      {/* Subtle Background Effect */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-white/2 via-white/1 to-white/2 rounded-full blur-3xl opacity-30" />
      </div>

      {/* Top Border */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-12" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-start justify-between">
          {/* Left Side - Main Content */}
          <div className="flex-1 space-y-8">
            {/* Brand */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-slate-900 rounded-full"></div>
                </div>
              </div>
              <h3 className="text-2xl font-light tracking-[0.2em] text-white">
                LUSSO
              </h3>
            </div>

            {/* Navigation Links */}
            <div className="grid grid-cols-2 gap-12">
              {/* Products */}
              <div>
                <h4 className="text-white font-light mb-4 text-lg">Products</h4>
                <div className="space-y-3">
                  {productCategories.map((category) => (
                    <a
                      key={category.name}
                      href={category.href}
                      className="block text-white/70 hover:text-white transition-colors duration-300 text-sm hover:translate-x-1 transform transition-transform"
                    >
                      {category.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-white font-light mb-4 text-lg">Company</h4>
                <div className="space-y-3">
                  {quickLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="block text-white/70 hover:text-white transition-colors duration-300 text-sm hover:translate-x-1 transform transition-transform"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex gap-12 text-sm pt-6 border-t border-white/10">
              <div className="space-y-2">
                <p className="text-white/60 font-medium">Address</p>
                <p className="text-white/80">123 Design District, NY 10001</p>
              </div>
              <div className="space-y-2">
                <p className="text-white/60 font-medium">Contact</p>
                <div className="space-y-1">
                  <a
                    href="tel:+15551234567"
                    className="block text-white/80 hover:text-white transition-colors"
                  >
                    +1 (555) 123-LUSSO
                  </a>
                  <a
                    href="mailto:hello@lusso.com"
                    className="block text-white/80 hover:text-white transition-colors"
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
                    className="text-white/60 hover:text-white transition-colors duration-300"
                  >
                    {social}
                  </a>
                ))}
              </div>
              <div className="w-px h-4 bg-white/20" />
              <div className="flex gap-6">
                <a
                  href="#"
                  className="text-white/60 hover:text-white transition-colors duration-300"
                >
                  Terms & Conditions
                </a>
                <a
                  href="#"
                  className="text-white/60 hover:text-white transition-colors duration-300"
                >
                  Privacy Policy
                </a>
              </div>
            </div>

            {/* Copyright */}
            <div className="pt-4">
              <p className="text-white/50 text-xs">
                © 2025 All rights reserved by{" "}
                <span className="text-white/70">Lusso</span>
              </p>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="w-64 h-48 ml-12 flex-shrink-0">
            <div className="relative w-full h-full rounded-2xl overflow-hidden group">
              <img
                src="/placeholder.svg?height=200&width=300&text=Luxury+Interior"
                alt="Luxury Interior"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

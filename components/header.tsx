"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

import AboutLussoPage from "./about-lusso-page";
import ContactPage from "./contact-page";
import PortfolioPage from "./portfolio-page";
import ProductsPage from "./products-page";

interface HeaderProps {
  isScrolled: boolean;
}

export default function Header({ isScrolled }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<string>("home");

  const menuItems = [
    { label: "About Lusso", href: "about", component: AboutLussoPage },
    { label: "Contact Us", href: "contact", component: ContactPage },
    { label: "Portfolio", href: "portfolio", component: PortfolioPage },
    { label: "Products", href: "products", component: ProductsPage },
  ];

  const handleNavigation = (href: string) => {
    setCurrentPage(href);
    setIsMenuOpen(false);

    const overlay = document.createElement("div");
    overlay.className =
      "fixed inset-0 bg-gradient-to-br from-white/10 via-neutral-500/10 to-slate-600/10 backdrop-blur-sm z-[100] pointer-events-none";
    overlay.style.opacity = "0";
    document.body.appendChild(overlay);

    overlay.animate(
      [
        { opacity: 0, transform: "scale(0.8)" },
        { opacity: 1, transform: "scale(1)" },
      ],
      {
        duration: 300,
        easing: "ease-out",
      }
    ).onfinish = () => {
      setTimeout(() => {
        overlay.animate(
          [
            { opacity: 1, transform: "scale(1)" },
            { opacity: 0, transform: "scale(1.2)" },
          ],
          {
            duration: 200,
            easing: "ease-in",
          }
        ).onfinish = () => {
          document.body.removeChild(overlay);
        };
      }, 100);
    };
  };

  if (currentPage !== "home") {
    const CurrentPageComponent = menuItems.find(
      (item) => item.href === currentPage
    )?.component;
    if (CurrentPageComponent) {
      return (
        <div>
          <motion.header
            className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/20 transition-all duration-700"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="container mx-auto px-6 py-6 flex justify-between items-center">
              <motion.button
                onClick={() => setCurrentPage("home")}
                className="flex items-baseline space-x-2 transition-transform duration-300 hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-2xl text-white font-semibold tracking-widest">
                  LUSSO
                </span>
                <span className="text-xs text-gray-300 font-light">
                  | Luxury simplified
                </span>
              </motion.button>
              {renderMenu()}
            </div>
          </motion.header>
          <CurrentPageComponent />
        </div>
      );
    }
  }

  function renderMenu() {
    return (
      <motion.div className="relative">
        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            animate={{ rotate: isMenuOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 text-white" />
            ) : (
              <Menu className="w-5 h-5 text-white" />
            )}
          </motion.div>
        </motion.button>

        <motion.div
          className={cn(
            "absolute top-16 right-0 w-56 rounded-2xl bg-neutral-900/90 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden",
            isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
          )}
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{
            opacity: isMenuOpen ? 1 : 0,
            y: isMenuOpen ? 0 : -10,
            scale: isMenuOpen ? 1 : 0.95,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="p-2">
            {menuItems.map((item, index) => (
              <motion.button
                key={item.label}
                onClick={() => handleNavigation(item.href)}
                className="w-full text-left px-6 py-4 text-white hover:bg-gradient-to-r hover:from-white/5 hover:to-neutral-700/10 rounded-xl transition-all duration-400 text-base font-light tracking-wide relative overflow-hidden"
                initial={{ opacity: 0, x: -10 }}
                animate={{
                  opacity: isMenuOpen ? 1 : 0,
                  x: isMenuOpen ? 0 : -10,
                }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                whileHover={{
                  scale: 1.02,
                  x: 5,
                }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700",
        isScrolled ? "backdrop-blur-md bg-black/10" : "bg-transparent"
      )}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6 py-6">
        {!isScrolled ? (
          <div className="flex justify-center items-center">
            <motion.div
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="/images/favicon.png"
                alt="Lusso Logo"
                width={60}
                height={60}
                className="mx-auto mb-2 rounded-full"
                priority
              />
              <motion.div
                className="w-24 h-px bg-gradient-to-r from-transparent via-white to-transparent mt-2 mx-auto"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              />
            </motion.div>
          </div>
        ) : (
          <div className="flex justify-between items-center">
            <motion.button
              onClick={() => setCurrentPage("home")}
              className="flex items-baseline space-x-2 transition-transform duration-300 hover:scale-105"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-2xl text-white font-semibold tracking-widest">
                LUSSO
              </span>
              <span className="text-xs text-gray-300 font-light">
                | Luxury simplified
              </span>
            </motion.button>
            {renderMenu()}
          </div>
        )}
      </div>
    </motion.header>
  );
}

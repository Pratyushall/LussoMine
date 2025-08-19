"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HomeButton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-5 left-5 z-[95]"
    >
      <Link href="/" aria-label="Go to Home" className="group">
        <motion.span
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 md:px-5 md:py-2.5
                     text-black bg-gradient-to-r from-amber-300 via-amber-500 to-rose-500
                     shadow-[0_12px_36px_rgba(251,191,36,0.25)] ring-1 ring-white/25
                     backdrop-blur-sm"
        >
          {/* Home icon (inline SVG) */}
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M3 10.5 12 3l9 7.5M5 11.5V21h5v-5h4v5h5v-9.5" />
          </svg>
          <span className="hidden sm:inline">Home</span>
        </motion.span>
      </Link>
    </motion.div>
  );
}

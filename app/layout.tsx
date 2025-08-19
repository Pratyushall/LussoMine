import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HomeButton from "@/components/HomeButton"; // 👈 global Home button

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LUSSO - Luxury Interior Design",
  description:
    "Where luxury meets innovation. Transform your space with LUSSO's bespoke interior design solutions.",
  keywords: [
    "luxury interior design",
    "bespoke furniture",
    "premium kitchens",
    "custom wardrobes",
    "interior design",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <HomeButton /> {/* ✅ appears on every page */}
      </body>
    </html>
  );
}

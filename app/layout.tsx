import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HomeButton from "@/components/HomeButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  /* … */
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
        {/* Top-right global home button; hidden on "/" */}
        <HomeButton hideOnHome />
      </body>
    </html>
  );
}

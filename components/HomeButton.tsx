"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function HomeButton({
  hideOnHome = false,
}: {
  hideOnHome?: boolean;
}) {
  const pathname = usePathname();
  if (hideOnHome && (pathname === "/" || pathname === "/home")) return null;

  return (
    <Link
      href="/"
      aria-label="Go to Home"
      className="group fixed z-[95] pointer-events-auto"
      style={{
        position: "fixed",
        // hard-pin to top-right and reset any legacy positioning
        top: "max(0.75rem, env(safe-area-inset-top))",
        left: "max(0.75rem, env(safe-area-inset-right))",
        bottom: "auto",
        right: "auto",
      }}
    >
      <span
        className="block h-11 w-11 rounded-full overflow-hidden
                   backdrop-blur-md bg-white/10 ring-1 ring-white/25
                   shadow-[0_8px_30px_rgba(0,0,0,0.35)]
                   transition-transform duration-200
                   group-hover:scale-[1.03] group-active:scale-[0.97]"
      >
        <Image
          src="/images/favicon.png" // Lusso favicon
          alt="Lusso"
          width={44}
          height={44}
          className="h-full w-full object-contain p-1.5"
          priority={false}
        />
      </span>
    </Link>
  );
}

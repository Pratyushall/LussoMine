// app/startvision/page.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/footer";

/* ────────────────────────────────────────────────────────────
   Top-right menu (reuse on any page or move to app/layout.tsx)
   ──────────────────────────────────────────────────────────── */
function TopRightMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed top-5 right-5 z-[80]">
      <button
        onClick={() => setOpen((v) => !v)}
        className="relative px-4 py-2 rounded-full border border-white/20 text-white/90 backdrop-blur-sm
                   bg-white/5 hover:bg-white/10 transition"
        aria-label="Open menu"
      >
        <span className="inline-flex items-center gap-2">
          <span aria-hidden>☰</span>
          <span>Menu</span>
        </span>
      </button>

      {open && (
        <nav className="mt-2 w-56 rounded-2xl overflow-hidden border border-white/15 bg-[#0a1526]/95 backdrop-blur-md shadow-xl">
          {[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
            { label: "Kitchens", href: "/kitchens" },
            { label: "Wardrobes", href: "/wardrobes" },
            { label: "Shutters", href: "/shutters" },
            { label: "Partitions", href: "/partitions" },
            { label: "Experience", href: "/experience" },
            { label: "Start your vision", href: "/startvision" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 transition"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </div>
  );
}

export default function StartVisionPage() {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [form, setForm] = useState({
    name: "",
    contact: "",
    city: "",
    kitchenVibe: "",
    finishes: [] as string[],
    wardrobe: "",
    shutters: "",
    partitions: "",
    website: "", // honeypot (bots)
  });

  const maxFinishes = 2;
  const toggleFinish = (opt: string) =>
    setForm((f) => {
      const exists = f.finishes.includes(opt);
      const next = exists
        ? f.finishes.filter((x) => x !== opt)
        : f.finishes.length < maxFinishes
        ? [...f.finishes, opt]
        : f.finishes;
      return { ...f, finishes: next };
    });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setOk(false);
    try {
      const res = await fetch("/api/start-vision", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to submit");
      setOk(true);
      setForm({
        name: "",
        contact: "",
        city: "",
        kitchenVibe: "",
        finishes: [],
        wardrobe: "",
        shutters: "",
        partitions: "",
        website: "",
      });
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main
      className="min-h-screen relative"
      style={{ backgroundColor: "#0a1526" }}
    >
      <TopRightMenu /> {/* ← Menu */}
      <section className="relative overflow-hidden">
        <div className="absolute -top-16 -left-16 w-[28rem] h-[28rem] bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-[36rem] h-[36rem] bg-white/5 rounded-full blur-3xl" />
        <div className="relative z-10 container mx-auto px-6 py-16 md:py-24">
          <motion.h1
            className="text-5xl md:text-7xl font-light text-white tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Start your{" "}
            <span className="text-transparent bg-gradient-to-r from-amber-400 via-amber-600 to-amber-800 bg-clip-text">
              vision
            </span>
          </motion.h1>
          <p className="mt-5 max-w-2xl text-lg text-gray-300">
            We can build anything — let’s make it fun. Answer 5 quick questions
            so we catch your vibe.
          </p>

          {/* success / error banners */}
          {ok && (
            <div className="mt-6 rounded-xl border border-emerald-500/40 bg-emerald-500/10 text-emerald-200 px-4 py-3">
              Thank you! We’ll reach out to craft your mix.
            </div>
          )}
          {error && (
            <div className="mt-6 rounded-xl border border-red-500/40 bg-red-500/10 text-red-200 px-4 py-3">
              {error}
            </div>
          )}

          <form onSubmit={onSubmit} className="mt-10 space-y-8">
            {/* Honeypot (hidden) */}
            <input
              type="text"
              name="website"
              value={form.website}
              onChange={(e) =>
                setForm((f) => ({ ...f, website: e.target.value }))
              }
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            {/* Contact */}
            <div className="grid sm:grid-cols-3 gap-4">
              <input
                required
                placeholder="Your name"
                value={form.name}
                onChange={(e) =>
                  setForm((f) => ({ ...f, name: e.target.value }))
                }
                className="rounded-xl bg-white/5 ring-1 ring-white/10 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:ring-amber-400/40"
              />
              <input
                required
                placeholder="Phone or email"
                value={form.contact}
                onChange={(e) =>
                  setForm((f) => ({ ...f, contact: e.target.value }))
                }
                className="rounded-xl bg-white/5 ring-1 ring-white/10 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:ring-amber-400/40"
              />
              <input
                placeholder="City"
                value={form.city}
                onChange={(e) =>
                  setForm((f) => ({ ...f, city: e.target.value }))
                }
                className="rounded-xl bg-white/5 ring-1 ring-white/10 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:ring-amber-400/40"
              />
            </div>

            {/* Q1 */}
            <fieldset>
              <legend className="text-white/90 mb-3">
                1) Your kitchen vibe?
              </legend>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Island social",
                  "Galley efficient",
                  "L-shape compact",
                  "G-shape storage-max",
                ].map((opt) => (
                  <label
                    key={opt}
                    className={`rounded-xl border px-4 py-3 cursor-pointer text-sm ${
                      form.kitchenVibe === opt
                        ? "border-amber-400 bg-amber-400/10 text-white"
                        : "border-white/15 text-gray-300 hover:border-white/30"
                    }`}
                  >
                    <input
                      type="radio"
                      className="hidden"
                      name="kitchenVibe"
                      value={opt}
                      checked={form.kitchenVibe === opt}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, kitchenVibe: e.target.value }))
                      }
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </fieldset>

            {/* Q2 */}
            <fieldset>
              <legend className="text-white/90 mb-3">
                2) Pick up to 2 finish priorities
              </legend>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Ultra-durable (quartz/granite)",
                  "Warm & natural (veneers/wood)",
                  "Stain-proof & easy (laminates)",
                  "Seamless & handle-less (J-pull/tip-on)",
                ].map((opt) => {
                  const checked = form.finishes.includes(opt);
                  const disabled =
                    !checked && form.finishes.length >= maxFinishes;
                  return (
                    <label
                      key={opt}
                      className={`rounded-xl border px-4 py-3 cursor-pointer text-sm ${
                        checked
                          ? "border-amber-400 bg-amber-400/10 text-white"
                          : disabled
                          ? "border-white/10 text-gray-500 cursor-not-allowed"
                          : "border-white/15 text-gray-300 hover:border-white/30"
                      }`}
                    >
                      <input
                        type="checkbox"
                        className="hidden"
                        checked={checked}
                        onChange={() => toggleFinish(opt)}
                        disabled={disabled}
                      />
                      {opt}
                    </label>
                  );
                })}
              </div>
              <p className="text-xs text-white/50 mt-2">
                {form.finishes.length}/{maxFinishes} selected
              </p>
            </fieldset>

            {/* Q3 */}
            <fieldset>
              <legend className="text-white/90 mb-3">
                3) Wardrobe personality?
              </legend>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Walk-in boutique",
                  "Sliding minimalist",
                  "Openable classic",
                  "Hybrid mix",
                ].map((opt) => (
                  <label
                    key={opt}
                    className={`rounded-xl border px-4 py-3 cursor-pointer text-sm ${
                      form.wardrobe === opt
                        ? "border-amber-400 bg-amber-400/10 text-white"
                        : "border-white/15 text-gray-300 hover:border-white/30"
                    }`}
                  >
                    <input
                      type="radio"
                      className="hidden"
                      name="wardrobe"
                      value={opt}
                      checked={form.wardrobe === opt}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, wardrobe: e.target.value }))
                      }
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </fieldset>

            {/* Q4 */}
            <fieldset>
              <legend className="text-white/90 mb-3">
                4) Shutters should…
              </legend>
              <div className="grid sm:grid-cols-3 gap-3">
                {[
                  "Let the light pour in",
                  "Balance light & privacy",
                  "Prioritize privacy",
                ].map((opt) => (
                  <label
                    key={opt}
                    className={`rounded-xl border px-4 py-3 cursor-pointer text-sm ${
                      form.shutters === opt
                        ? "border-amber-400 bg-amber-400/10 text-white"
                        : "border-white/15 text-gray-300 hover:border-white/30"
                    }`}
                  >
                    <input
                      type="radio"
                      className="hidden"
                      name="shutters"
                      value={opt}
                      checked={form.shutters === opt}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, shutters: e.target.value }))
                      }
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </fieldset>

            {/* Q5 */}
            <fieldset>
              <legend className="text-white/90 mb-3">5) Partition mood?</legend>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Slim metal & glass",
                  "Open shelving divider",
                  "Smart glass (privacy on tap)",
                  "Solid / acoustic",
                ].map((opt) => (
                  <label
                    key={opt}
                    className={`rounded-xl border px-4 py-3 cursor-pointer text-sm ${
                      form.partitions === opt
                        ? "border-amber-400 bg-amber-400/10 text-white"
                        : "border-white/15 text-gray-300 hover:border-white/30"
                    }`}
                  >
                    <input
                      type="radio"
                      className="hidden"
                      name="partitions"
                      value={opt}
                      checked={form.partitions === opt}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, partitions: e.target.value }))
                      }
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="submit"
                disabled={loading}
                className="px-7 py-3 rounded-full text-black font-medium bg-gradient-to-r from-amber-400 via-amber-500 to-amber-700 hover:from-amber-300 hover:to-amber-800 shadow-[0_10px_30px_rgba(251,191,36,0.28)] disabled:opacity-60"
              >
                {loading ? "Sending…" : "Send & book a callback"}
              </button>
            </div>
          </form>
        </div>
      </section>
      <Footer /> {/* ← Footer */}
    </main>
  );
}

"use client";

import type React from "react";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/footer";

/** Reusable blurred background */
const BlurredBg: React.FC<{ src: string; overlayClass?: string }> = ({
  src,
  overlayClass = "bg-[#0a1526]/75",
}) => (
  <>
    <img
      src={src}
      alt=""
      aria-hidden
      className="absolute inset-0 w-full h-full object-cover blur-md scale-110"
    />
    <div className={`absolute inset-0 ${overlayClass}`} aria-hidden />
  </>
);

export default function ContactPage() {
  return (
    <div className="min-h-screen relative bg-[#0a1526]">
      <TopRightMenu />
      <ContactHero />
      <ContactFormSection />
      <ContactInfoSection />
      <Footer />
    </div>
  );
}

/* ──────────────────────────────────────────────────────────── */
function TopRightMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed top-5 right-5 z-[80]">
      <button
        onClick={() => setOpen((v) => !v)}
        className="relative px-4 py-2 rounded-full border border-white/20 text-white/90 backdrop-blur-sm bg-white/5 hover:bg-white/10 transition"
        aria-label="Open menu"
      >
        <span className="inline-flex items-center gap-2">
          <span aria-hidden>☰</span>
        </span>
      </button>

      {open && (
        <nav
          className="mt-2 w-56 rounded-2xl overflow-hidden border border-white/15 backdrop-blur-sm shadow-xl"
          style={{
            backgroundImage: "url('/images/bg11.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
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

/* ──────────────────────────────────────────────────────────── */
function ContactHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section
      ref={sectionRef}
      className="min-h-[100svh] relative overflow-hidden flex items-center justify-center pt-20"
      aria-label="Contact Hero"
    >
      <BlurredBg src="/images/wrd11.png" overlayClass="bg-[#0a1526]/70" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-8xl font-thin text-white mb-8 tracking-tight"
            animate={{
              textShadow: [
                "0 0 30px rgba(255,255,255,0.1)",
                "0 0 60px rgba(255,255,255,0.2)",
                "0 0 30px rgba(255,255,255,0.1)",
              ],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            Contact{" "}
            <span className="text-transparent bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text">
              Us
            </span>
          </motion.h1>

          <motion.div
            className="w-32 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-8"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.5 }}
          />

          <motion.p
            className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Ready to transform your space? Let's discuss your vision and bring
            your luxury interior dreams to life.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────── */
/* FULL-SCREEN: segmented toggle + neatly centered form card */
function ContactFormSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  type Audience = "homeowner" | "partner";
  const [audience, setAudience] = useState<Audience>("homeowner");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    projectType: "",
    budget: "",
    company: "",
    partnership: "",
    website: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <section
      ref={sectionRef}
      className="min-h-[100svh] relative overflow-hidden flex items-center"
      aria-label="Contact Form"
    >
      <BlurredBg src="/images/wrd11.png" overlayClass="bg-[#0a1526]/82" />

      <div className="container mx-auto px-6 relative z-10 w-full">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
          >
            {/* Segmented toggle (Lusso colors, no emojis) */}
            <div className="mb-8">
              <div className="grid grid-cols-2 rounded-2xl overflow-hidden border border-white/20">
                <button
                  type="button"
                  onClick={() => setAudience("homeowner")}
                  aria-pressed={audience === "homeowner"}
                  className={`py-4 md:py-5 text-base md:text-lg font-medium tracking-wide transition-all
                    ${
                      audience === "homeowner"
                        ? "bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-[#0a1526] shadow-inner"
                        : "bg-white text-[#0a1526]"
                    } 
                  `}
                >
                  Are you a home owner?
                </button>
                <button
                  type="button"
                  onClick={() => setAudience("partner")}
                  aria-pressed={audience === "partner"}
                  className={`py-4 md:py-5 text-base md:text-lg font-medium tracking-wide transition-all
                    ${
                      audience === "partner"
                        ? "bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-[#0a1526] shadow-inner"
                        : "bg-[#1f2737] text-white"
                    } 
                  `}
                >
                  Partner with us
                </button>
              </div>
            </div>

            {/* Form */}
            <motion.form
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.15 }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <Field
                  label={audience === "partner" ? "Contact Name" : "Full Name"}
                >
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-amber-400 focus:bg-white/15 transition-all duration-300"
                    placeholder={
                      audience === "partner"
                        ? "Your name"
                        : "Enter your full name"
                    }
                  />
                </Field>
                <Field label="Email Address">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-amber-400 focus:bg-white/15 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </Field>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Field label="Phone Number">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-amber-400 focus:bg-white/15 transition-all duration-300"
                    placeholder="+91 9XXXX XXXXX"
                  />
                </Field>

                {audience === "homeowner" ? (
                  <Field label="Project Type">
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-amber-400 focus:bg-white/15 transition-all duration-300"
                    >
                      <option value="">Select project type</option>
                      <option value="kitchen">Kitchen</option>
                      <option value="wardrobe">Wardrobe</option>
                      <option value="interiors">Full Interiors</option>
                      <option value="renovation">Renovation</option>
                    </select>
                  </Field>
                ) : (
                  <Field label="Company">
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-amber-400 focus:bg-white/15 transition-all duration-300"
                      placeholder="Company / Studio name"
                    />
                  </Field>
                )}
              </div>

              {audience === "homeowner" ? (
                <Field label="Budget Range">
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-amber-400 focus:bg-white/15 transition-all duration-300"
                  >
                    <option value="">Select budget range</option>
                    <option value="5-10">₹5L – ₹10L</option>
                    <option value="10-25">₹10L – ₹25L</option>
                    <option value="25-50">₹25L – ₹50L</option>
                    <option value="50+">₹50L+</option>
                  </select>
                </Field>
              ) : (
                <div className="grid md:grid-cols-2 gap-6">
                  <Field label="Partnership Type">
                    <select
                      name="partnership"
                      value={formData.partnership}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-amber-400 focus:bg-white/15 transition-all duration-300"
                    >
                      <option value="">Choose one</option>
                      <option value="architect">Architect</option>
                      <option value="interior-designer">
                        Interior Designer
                      </option>
                      <option value="builder">Builder / Developer</option>
                      <option value="supplier">Supplier</option>
                      <option value="dealer">Dealer</option>
                      <option value="other">Other</option>
                    </select>
                  </Field>
                  <Field label="Role / Website (optional)">
                    <input
                      type="text"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-amber-400 focus:bg-white/15 transition-all duration-300"
                      placeholder="e.g., Principal Architect / https://…"
                    />
                  </Field>
                </div>
              )}

              <Field
                label={
                  audience === "partner"
                    ? "How can we collaborate?"
                    : "Project Details"
                }
              >
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-amber-400 focus:bg-white/15 transition-all duration-300 resize-none"
                  placeholder={
                    audience === "partner"
                      ? "Tell us about your firm, region, typical project sizes, and what you’re looking for."
                      : "Tell us about your vision, timeline, and any specific requirements…"
                  }
                />
              </Field>

              {/* Submit — centered, not touching edges */}
              <div className="pt-2 flex justify-center">
                <motion.button
                  type="submit"
                  className="px-10 sm:px-12 py-4 rounded-full
                             bg-gradient-to-r from-amber-500 to-amber-600
                             text-black font-light tracking-wide
                             shadow-[0_8px_24px_rgba(251,191,36,0.25)]
                             hover:shadow-[0_12px_36px_rgba(251,191,36,0.35)]
                             transition-all duration-300
                             w-full sm:w-auto sm:min-w-[220px] mx-auto"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </div>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────── */
/* FULL-SCREEN: centered, uniform contact cards with tidy alignment */
function ContactInfoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section
      ref={sectionRef}
      className="min-h-[100svh] relative overflow-hidden flex items-center"
      aria-label="Contact Details"
    >
      <BlurredBg src="/images/bg11.png" overlayClass="bg-[#0a1526]/48" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-light text-white text-center mb-10">
            Contact Information
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <InfoCard
              title="Phone"
              lines={["+919497567844-LUSSO", "+918456789011"]}
              svg={
                <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none">
                  <path
                    d="M6 3h4l2 5-3 2a12 12 0 006 6l2-3 5 2v4a2 2 0 01-2 2A17 17 0 013 8a2 2 0 012-2z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              }
            />
            <InfoCard
              title="Email"
              lines={["hello@lusso.com", "projects@lusso.com"]}
              svg={
                <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none">
                  <path
                    d="M4 6h16v12H4z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M4 7l8 6 8-6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              }
            />
            <InfoCard
              title="Address"
              lines={["123 Lusso", "Banjara Hills, Hyderabad"]}
              svg={
                <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none">
                  <path
                    d="M12 21s7-5.33 7-10a7 7 0 10-14 0c0 4.67 7 10 7 10z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <circle
                    cx="12"
                    cy="11"
                    r="2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              }
            />
            <InfoCard
              title="Hours"
              lines={[
                "Mon–Fri: 9:00 AM – 7:00 PM",
                "Sat–Sun: 10:00 AM – 6:00 PM",
              ]}
              svg={
                <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none">
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M12 7v5l4 2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              }
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ───────────────────── helpers ───────────────────── */
function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-white/80 text-sm font-light mb-2">
        {label}
      </label>
      {children}
    </div>
  );
}

function InfoCard({
  title,
  lines,
  svg,
}: {
  title: string;
  lines: string[];
  svg: React.ReactNode;
}) {
  return (
    <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 text-center flex flex-col items-center justify-center gap-3">
      <div className="text-amber-300/90">{svg}</div>
      <h4 className="text-white font-light">{title}</h4>
      <div className="text-white/75 text-sm leading-relaxed">
        {lines.map((l, i) => (
          <div key={i}>{l}</div>
        ))}
      </div>
    </div>
  );
}

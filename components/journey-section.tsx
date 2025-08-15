"use client";

import { useRef, useState, useEffect } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";

export default function JourneySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [openModal, setOpenModal] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const voidScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener("mousemove", handleMouseMove);
      return () => section.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  const journeySteps = [
    {
      number: "01",
      title: "Let's Connect",
      description:
        "Fill out a quick form or give us a call — tell us about your dream kitchen or wardrobe.",
      icon: "",
      color: "from-amber-500 to-orange-500",
      voidColor: "rgba(59, 130, 246, 0.3)",
    },
    {
      number: "02",
      title: "Design Consultation",
      description:
        "Our experts get in touch to understand your space, style, and budget. We co-create the perfect design, just for you.",
      icon: "",
      color: "from-amber-500 to-orange-500",
      voidColor: "rgba(147, 51, 234, 0.3)",
    },
    {
      number: "03",
      title: "Experience It Live",
      description:
        "Visit our Experience Center to explore materials, finishes, and modular layouts in person.",
      icon: "",
      color: "from-amber-500 to-orange-500",
      voidColor: "rgba(16, 185, 129, 0.3)",
    },
    {
      number: "04",
      title: "Final Touches & Quote",
      description:
        "We finalize the design, share a transparent quote, and lock in timelines.",
      icon: "",
      color: "from-amber-500 to-orange-500",
      voidColor: "rgba(245, 158, 11, 0.3)",
    },
    {
      number: "05",
      title: "Installation Begins",
      description:
        "Sit back and relax — our team handles delivery and installation with care and precision.",
      icon: "",
      color: "from-amber-500 to-orange-500",
      voidColor: "rgba(239, 68, 68, 0.3)",
    },
    {
      number: "06",
      title: "Aftercare & Support",
      description:
        "Even after the work is done, we're just a call away for maintenance or upgrades.",
      icon: "",
      color: "from-amber-500 to-amber-500",
      voidColor: "rgba(99, 102, 241, 0.3)",
    },
  ];

  const handleStepClick = (index: number) => {
    setOpenModal(index);
  };

  const closeModal = () => {
    setOpenModal(null);
  };

  const renderModalContent = (stepIndex: number) => {
    const step = journeySteps[stepIndex];

    switch (stepIndex) {
      case 0: // Let's Connect - Contact Form
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-light text-white mb-4">
                Let's Connect
              </h3>
              <p className="text-white/70">
                Tell us about your dream project and we'll get back to you
                within 24 hours.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white/80 text-sm font-light mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-amber-400 focus:bg-white/15 transition-all duration-300"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-white/80 text-sm font-light mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-amber-400 focus:bg-white/15 transition-all duration-300"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white/80 text-sm font-light mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-white/80 text-sm font-light mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all duration-300"
                  placeholder="9192457683"
                />
              </div>

              <div>
                <label className="block text-white/80 text-sm font-light mb-2">
                  Project Type
                </label>
                <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-black focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all duration-300">
                  <option value="">Select your project type</option>
                  <option value="kitchen">Kitchen Design</option>
                  <option value="wardrobe">Wardrobe Design</option>
                  <option value="shutters">Window Shutters</option>
                  <option value="partitions">Room Partitions</option>
                  <option value="complete">Complete Home Interior</option>
                </select>
              </div>

              <div>
                <label className="block text-white/80 text-sm font-light mb-2">
                  Budget Range
                </label>
                <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-black focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all duration-300">
                  <option value="">Select your budget range</option>
                  <option value="50k-100k">Rs.50,000 - Rs.100,000</option>
                  <option value="100k-250k">Rs.100,000 - Rs.250,000</option>
                  <option value="250k-500k">Rs.250,000 - Rs.500,000</option>
                  <option value="500k+">Rs.500,000+</option>
                </select>
              </div>

              <div>
                <label className="block text-white/80 text-sm font-light mb-2">
                  Tell us about your dream project
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all duration-300 resize-none"
                  placeholder="Describe your vision, style preferences, timeline, and any specific requirements..."
                />
              </div>

              <motion.button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-amber-500 to-amber-800 text-white rounded-xl font-light tracking-wide hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </div>
        );

      case 1: // Design Consultation
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-light text-white mb-4">
                Design Consultation Process
              </h3>
              <p className="text-white/70">
                Our comprehensive consultation ensures every detail is perfect.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <h4 className="text-xl font-light text-white mb-3">
                    Initial Discovery
                  </h4>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li>• Space measurement and analysis</li>
                    <li>• Lifestyle and usage assessment</li>
                    <li>• Style preference exploration</li>
                    <li>• Budget planning and optimization</li>
                  </ul>
                </div>

                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <h4 className="text-xl font-light text-white mb-3">
                    Design Development
                  </h4>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li>• 3D visualization and renderings</li>
                    <li>• Material and finish selection</li>
                    <li>• Functional layout optimization</li>
                    <li>• Color scheme coordination</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <h4 className="text-xl font-light text-white mb-3">
                    Collaborative Refinement
                  </h4>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li>• Real-time design adjustments</li>
                    <li>• Client feedback integration</li>
                    <li>• Technical feasibility review</li>
                    <li>• Timeline and milestone planning</li>
                  </ul>
                </div>

                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <h4 className="text-xl font-light text-white mb-3">
                    Final Presentation
                  </h4>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li>• Complete design package delivery</li>
                    <li>• Detailed specifications document</li>
                    <li>• Installation timeline overview</li>
                    <li>• Investment breakdown</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center pt-6">
              <motion.button
                className="px-8 py-3 bg-gradient-to-r from-amber-400 to-amber-500 text-white rounded-xl font-light tracking-wide"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Schedule Consultation
              </motion.button>
            </div>
          </div>
        );

      case 2: // Experience It Live
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-light text-white mb-4">
                Experience Center
              </h3>
              <p className="text-white/70">
                Visit our state-of-the-art showroom and touch, feel, and
                experience luxury.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="aspect-video bg-gradient-to-br from-amber-400/20 to-amber-500/20 rounded-2xl flex items-center justify-center border border-white/10">
                  <div className="text-center">
                    <div className="text-4xl mb-4">🏢</div>
                    <p className="text-white/70">Virtual Tour Available</p>
                  </div>
                </div>

                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <h4 className="text-xl font-light text-white mb-4">
                    What You'll Experience
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                      <span className="text-white/70 text-sm">
                        Full-scale kitchen and wardrobe displays
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                      <span className="text-white/70 text-sm">
                        Premium material library with 500+ samples
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                      <span className="text-white/70 text-sm">
                        Interactive technology demonstrations
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                      <span className="text-white/70 text-sm">
                        One-on-one expert consultations
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <h4 className="text-xl font-light text-white mb-4">
                    Location & Hours
                  </h4>
                  <div className="space-y-3 text-white/70 text-sm">
                    <p>
                      <strong className="text-white">Address:</strong>
                      <br />
                      123 Design District, Luxury Lane
                      <br />
                      New York, NY 10001
                    </p>
                    <p>
                      <strong className="text-white">Hours:</strong>
                      <br />
                      Mon-Fri: 9:00 AM - 7:00 PM
                      <br />
                      Sat-Sun: 10:00 AM - 6:00 PM
                    </p>
                    <p>
                      <strong className="text-white">Phone:</strong> +1 (555)
                      123-LUSSO
                    </p>
                  </div>
                </div>

                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <h4 className="text-xl font-light text-white mb-4">
                    Book Your Visit
                  </h4>
                  <div className="space-y-4">
                    <input
                      type="date"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-emerald-400 focus:bg-white/15 transition-all duration-300"
                    />
                    <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-emerald-400 focus:bg-white/15 transition-all duration-300">
                      <option value="">Select time slot</option>
                      <option value="morning">
                        Morning (9:00 AM - 12:00 PM)
                      </option>
                      <option value="afternoon">
                        Afternoon (1:00 PM - 5:00 PM)
                      </option>
                      <option value="evening">
                        Evening (5:00 PM - 7:00 PM)
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center pt-6">
              <motion.button
                className="px-8 py-3 bg-gradient-to-r from-amber-400 to-amber-600 text-white rounded-xl font-light tracking-wide"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Book Experience Center Visit
              </motion.button>
            </div>
          </div>
        );

      case 3: // Final Touches & Quote
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-light text-white mb-4">
                Final Touches & Quote
              </h3>
              <p className="text-white/70">
                Transparent pricing with detailed breakdown and timeline
                confirmation.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <h4 className="text-xl font-light text-white mb-4">
                    What's Included
                  </h4>
                  <div className="space-y-3">
                    {[
                      "Detailed 3D renderings and technical drawings",
                      "Complete material specifications",
                      "Installation timeline with milestones",
                      "Warranty and aftercare information",
                      "Payment schedule options",
                      "Project management coordination",
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-amber-400 rounded-full mt-2"></div>
                        <span className="text-white/70 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <h4 className="text-xl font-light text-white mb-4">
                    Investment Breakdown
                  </h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between text-white/70">
                      <span>Design & Planning</span>
                      <span>15%</span>
                    </div>
                    <div className="flex justify-between text-white/70">
                      <span>Materials & Finishes</span>
                      <span>60%</span>
                    </div>
                    <div className="flex justify-between text-white/70">
                      <span>Installation & Labor</span>
                      <span>20%</span>
                    </div>
                    <div className="flex justify-between text-white/70">
                      <span>Project Management</span>
                      <span>5%</span>
                    </div>
                    <div className="border-t border-white/20 pt-3 mt-3">
                      <div className="flex justify-between text-white font-light">
                        <span>Total Investment</span>
                        <span>100%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <h4 className="text-xl font-light text-white mb-4">
                    Timeline Overview
                  </h4>
                  <div className="space-y-4">
                    {[
                      { phase: "Design Finalization", duration: "1-2 weeks" },
                      { phase: "Material Procurement", duration: "2-4 weeks" },
                      { phase: "Manufacturing", duration: "4-6 weeks" },
                      { phase: "Installation", duration: "1-2 weeks" },
                      { phase: "Final Touches", duration: "3-5 days" },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center p-3 bg-white/5 rounded-lg"
                      >
                        <span className="text-white/80 text-sm">
                          {item.phase}
                        </span>
                        <span className="text-amber-400 text-sm font-light">
                          {item.duration}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <h4 className="text-xl font-light text-white mb-4">
                    Payment Options
                  </h4>
                  <div className="space-y-3 text-white/70 text-sm">
                    <div className="p-3 bg-white/5 rounded-lg">
                      <strong className="text-white">Standard Plan:</strong> 30%
                      deposit, 40% at manufacturing, 30% on completion
                    </div>
                    <div className="p-3 bg-white/5 rounded-lg">
                      <strong className="text-white">Flexible Plan:</strong>{" "}
                      Custom payment schedule available
                    </div>
                    <div className="p-3 bg-white/5 rounded-lg">
                      <strong className="text-white">Financing:</strong> 0% APR
                      available for qualified buyers
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center pt-6">
              <motion.button
                className="px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl font-light tracking-wide"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Request Detailed Quote
              </motion.button>
            </div>
          </div>
        );

      case 4: // Installation Begins
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-light text-white mb-4">
                Installation Process
              </h3>
              <p className="text-white/70">
                Our expert team ensures flawless installation with minimal
                disruption.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <h4 className="text-xl font-light text-white mb-4">
                    Pre-Installation
                  </h4>
                  <div className="space-y-3">
                    {[
                      "Site preparation and protection",
                      "Final measurements verification",
                      "Material delivery coordination",
                      "Installation team briefing",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                        <span className="text-white/70 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <h4 className="text-xl font-light text-white mb-4">
                    During Installation
                  </h4>
                  <div className="space-y-3">
                    {[
                      "Daily progress updates",
                      "Quality checkpoints at each stage",
                      "Minimal disruption protocols",
                      "Real-time issue resolution",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                        <span className="text-white/70 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <h4 className="text-xl font-light text-white mb-4">
                    Our Installation Promise
                  </h4>
                  <div className="space-y-4">
                    <div className="p-4 bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded-lg border border-red-500/20">
                      <h5 className="text-white font-light mb-2">
                        Zero Damage Guarantee
                      </h5>
                      <p className="text-white/70 text-sm">
                        Complete protection of your existing spaces and
                        belongings.
                      </p>
                    </div>
                    <div className="p-4 bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded-lg border border-red-500/20">
                      <h5 className="text-white font-light mb-2">
                        Timeline Commitment
                      </h5>
                      <p className="text-white/70 text-sm">
                        Installation completed within agreed timeframe or
                        compensation provided.
                      </p>
                    </div>
                    <div className="p-4 bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded-lg border border-red-500/20">
                      <h5 className="text-white font-light mb-2">
                        Quality Assurance
                      </h5>
                      <p className="text-white/70 text-sm">
                        Multi-point quality checks and client approval at each
                        milestone.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <h4 className="text-xl font-light text-white mb-4">
                    Installation Team
                  </h4>
                  <div className="space-y-3 text-white/70 text-sm">
                    <p>
                      • Certified master craftsmen with 10+ years experience
                    </p>
                    <p>• Specialized teams for different installation phases</p>
                    <p>• Project manager on-site for coordination</p>
                    <p>• Quality inspector for final approval</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center pt-6">
              <motion.button
                className="px-8 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl font-light tracking-wide"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Track Installation Progress
              </motion.button>
            </div>
          </div>
        );

      case 5: // Aftercare & Support
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-light text-white mb-4">
                Aftercare & Support
              </h3>
              <p className="text-white/70">
                Lifetime relationship with comprehensive support and maintenance
                services.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <h4 className="text-xl font-light text-white mb-4">
                    Warranty Coverage
                  </h4>
                  <div className="space-y-4">
                    <div className="p-4 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-lg border border-indigo-500/20">
                      <div className="flex justify-between items-center mb-2">
                        <h5 className="text-white font-light">
                          Structural Components
                        </h5>
                        <span className="text-indigo-400 text-sm">
                          25 Years
                        </span>
                      </div>
                      <p className="text-white/70 text-sm">
                        Cabinet boxes, frames, and structural elements
                      </p>
                    </div>
                    <div className="p-4 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-lg border border-indigo-500/20">
                      <div className="flex justify-between items-center mb-2">
                        <h5 className="text-white font-light">
                          Hardware & Mechanisms
                        </h5>
                        <span className="text-indigo-400 text-sm">
                          10 Years
                        </span>
                      </div>
                      <p className="text-white/70 text-sm">
                        Hinges, slides, handles, and moving parts
                      </p>
                    </div>
                    <div className="p-4 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-lg border border-indigo-500/20">
                      <div className="flex justify-between items-center mb-2">
                        <h5 className="text-white font-light">
                          Finishes & Surfaces
                        </h5>
                        <span className="text-indigo-400 text-sm">5 Years</span>
                      </div>
                      <p className="text-white/70 text-sm">
                        Paint, laminate, and surface treatments
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <h4 className="text-xl font-light text-white mb-4">
                    Maintenance Services
                  </h4>
                  <div className="space-y-3">
                    {[
                      "Annual maintenance inspections",
                      "Hardware adjustment and lubrication",
                      "Surface cleaning and restoration",
                      "Replacement parts availability",
                      "Upgrade and modification services",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                        <span className="text-white/70 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <h4 className="text-xl font-light text-white mb-4">
                    Support Channels
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 p-3 bg-white/5 rounded-lg">
                      <div className="text-2xl"></div>
                      <div>
                        <h5 className="text-white font-light">
                          24/7 Support Hotline
                        </h5>
                        <p className="text-white/70 text-sm">
                          +1 (555) 123-CARE
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 p-3 bg-white/5 rounded-lg">
                      <div className="text-2xl"></div>
                      <div>
                        <h5 className="text-white font-light">
                          Live Chat Support
                        </h5>
                        <p className="text-white/70 text-sm">
                          Instant help on our website
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 p-3 bg-white/5 rounded-lg">
                      <div className="text-2xl"></div>
                      <div>
                        <h5 className="text-white font-light">Email Support</h5>
                        <p className="text-white/70 text-sm">
                          support@lusso.com
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 p-3 bg-white/5 rounded-lg">
                      <div className="text-2xl"></div>
                      <div>
                        <h5 className="text-white font-light">
                          On-Site Service
                        </h5>
                        <p className="text-white/70 text-sm">
                          Scheduled maintenance visits
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <h4 className="text-xl font-light text-white mb-4">
                    Request Support
                  </h4>
                  <div className="space-y-4">
                    <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-indigo-400 focus:bg-white/15 transition-all duration-300">
                      <option value="">Select support type</option>
                      <option value="warranty">Warranty Claim</option>
                      <option value="maintenance">Maintenance Request</option>
                      <option value="repair">Repair Service</option>
                      <option value="upgrade">Upgrade Consultation</option>
                    </select>
                    <textarea
                      rows={3}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-indigo-400 focus:bg-white/15 transition-all duration-300 resize-none"
                      placeholder="Describe your support request..."
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center pt-6">
              <motion.button
                className="px-8 py-3 bg-gradient-to-r from-amber-400 to-amber-500 text-white rounded-xl font-light tracking-wide"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Support Team
              </motion.button>
            </div>
          </div>
        );

      default:
        return <div>Content not available</div>;
    }
  };

  return (
    <section
      ref={sectionRef}
      className="py-32 relative overflow-hidden"
      style={{ backgroundColor: "#0a1526" }}
    >
      {/* Void Background Effects */}
      <div className="absolute inset-0">
        {/* Main Void Portal */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{ scale: voidScale }}
        >
          <motion.div
            className="w-96 h-96 rounded-full relative"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            {/* Void Rings */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute inset-0 rounded-full border border-white/10"
                style={{
                  scale: 1 - i * 0.15,
                  opacity: 0.8 - i * 0.15,
                }}
                animate={{
                  rotate: [0, -360],
                  scale: [1 - i * 0.15, 1.2 - i * 0.15, 1 - i * 0.15],
                }}
                transition={{
                  duration: 15 + i * 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            ))}

            {/* Central Void */}
            <motion.div
              className="absolute inset-16 rounded-full bg-gradient-to-r from-grey-100 via-white-200 to-black-300 shadow-inner"
              animate={{
                boxShadow: [
                  "inset 0 0 50px rgba(0,0,0,0.8)",
                  "inset 0 0 100px rgba(0,0,0,0.9)",
                  "inset 0 0 50px rgba(0,0,0,0.8)",
                ],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>

        {/* Floating Void Particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Interactive Void Distortion */}
        <motion.div
          className="absolute w-64 h-64 rounded-full bg-gradient-radial from-white/5 to-transparent blur-xl pointer-events-none"
          animate={{
            x: mousePosition.x * 100 - 50,
            y: mousePosition.y * 100 - 50,
          }}
          transition={{ type: "spring", stiffness: 100, damping: 30 }}
        />
      </div>

      {/* Parallax Background Layer */}
      <motion.div className="absolute inset-0" style={{ y: backgroundY }}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-800/20 to-transparent" />
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Dramatic Header */}
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="relative inline-block mb-8"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            <motion.h2
              className="text-7xl font-thin text-white tracking-tight relative z-10"
              animate={{
                textShadow: [
                  "0 0 20px rgba(255,255,255,0.1)",
                  "0 0 40px rgba(255,255,255,0.2)",
                  "0 0 20px rgba(255,255,255,0.1)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              Your Journey with{" "}
              <span className="text-transparent bg-gradient-to-r from-amber-400 via-amber-600 to-amber-700 bg-clip-text">
                LUSSO
              </span>
            </motion.h2>

            {/* Void Halo Effect */}
            <motion.div
              className="absolute -inset-8 rounded-full border border-white/10"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          </motion.div>

          <motion.div
            className="w-24 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
        </motion.div>

        {/* Enhanced Grid with Void Effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {journeySteps.map((step, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer relative"
              initial={{ opacity: 0, y: 60, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              onHoverStart={() => setActiveStep(index)}
              onHoverEnd={() => setActiveStep(null)}
              onClick={() => handleStepClick(index)}
              style={{ perspective: "1000px" }}
            >
              {/* Void Aura */}
              <motion.div
                className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle, ${step.voidColor}, transparent 70%)`,
                  filter: "blur(20px)",
                }}
              />

              <motion.div
                className={`relative p-8 rounded-3xl backdrop-blur-sm border h-full transition-all duration-500 overflow-hidden ${
                  activeStep === index
                    ? "bg-white/10 border-white/30"
                    : "bg-white/5 border-white/10"
                }`}
                whileHover={{
                  y: -12,
                  rotateY: 5,
                  rotateX: 5,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {/* Void Portal in Card */}
                <motion.div
                  className="absolute top-4 right-4 w-8 h-8 rounded-full border border-white/20 opacity-0 group-hover:opacity-100"
                  animate={
                    activeStep === index
                      ? {
                          rotate: [0, 360],
                          scale: [1, 1.2, 1],
                        }
                      : {}
                  }
                  transition={{
                    duration: 2,
                    repeat: activeStep === index ? Number.POSITIVE_INFINITY : 0,
                    ease: "linear",
                  }}
                >
                  <motion.div
                    className="absolute inset-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-600"
                    animate={
                      activeStep === index
                        ? {
                            boxShadow: [
                              "inset 0 0 10px rgba(0,0,0,0.8)",
                              "inset 0 0 20px rgba(0,0,0,0.9)",
                              "inset 0 0 10px rgba(0,0,0,0.8)",
                            ],
                          }
                        : {}
                    }
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  />
                </motion.div>

                {/* Enhanced Step Number */}
                <motion.div
                  className="flex items-center mb-6"
                  animate={{ x: activeStep === index ? 8 : 0 }}
                  transition={{ duration: 0.4, type: "spring" }}
                >
                  <motion.div
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-light mr-4 border relative overflow-hidden ${
                      activeStep === index
                        ? `bg-gradient-to-r ${step.color} border-white/40 text-white shadow-lg`
                        : "bg-white/10 border-white/20 text-white/70"
                    }`}
                    whileHover={{ scale: 1.15, rotateY: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.span
                      animate={
                        activeStep === index ? { rotateY: [0, 360] } : {}
                      }
                      transition={{ duration: 0.6 }}
                    >
                      {step.number}
                    </motion.span>

                    {/* Void Particles in Number */}
                    {activeStep === index &&
                      [...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-white rounded-full"
                          animate={{
                            x: [0, Math.random() * 20 - 10, 0],
                            y: [0, Math.random() * 20 - 10, 0],
                            opacity: [0, 1, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: i * 0.3,
                          }}
                        />
                      ))}
                  </motion.div>

                  <motion.div
                    className="text-3xl"
                    animate={{
                      scale: activeStep === index ? 1.2 : 1,
                      rotateZ: activeStep === index ? [0, 10, -10, 0] : 0,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {step.icon}
                  </motion.div>
                </motion.div>

                {/* Content with Void Glow */}
                <motion.h3
                  className={`text-xl font-light mb-4 leading-tight transition-all duration-500 ${
                    activeStep === index
                      ? "text-white drop-shadow-lg"
                      : "text-white/90"
                  }`}
                  animate={
                    activeStep === index
                      ? {
                          textShadow: "0 0 20px rgba(255,255,255,0.5)",
                        }
                      : {}
                  }
                >
                  {step.title}
                </motion.h3>

                <motion.p
                  className={`text-sm leading-relaxed font-light transition-colors duration-500 ${
                    activeStep === index ? "text-white/90" : "text-white/60"
                  }`}
                >
                  {step.description}
                </motion.p>

                {/* Click to expand hint */}
                <motion.div className="absolute bottom-4 right-4 text-xs text-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Click to expand
                </motion.div>

                {/* Void Energy Line */}
                <motion.div
                  className={`absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r ${step.color}`}
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{
                    scaleX: activeStep === index ? 1 : 0,
                    opacity: activeStep === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.5 }}
                />

                {/* Void Distortion Effect */}
                <motion.div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${step.color} opacity-0`}
                  animate={{ opacity: activeStep === index ? 0.05 : 0 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Void Portal CTA */}
        <motion.div
          className="text-center mt-24"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <motion.button
            className="relative px-10 py-4 bg-gradient-to-r from-amber-500 to-amber-700 text-white rounded-full font-light tracking-wide border border-white/20 overflow-hidden group"
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Void Ripple Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-amber-500/20 via-amber-800/20 to-amber-600/20 rounded-full opacity-0 group-hover:opacity-100"
              animate={{
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />

            <span className="relative z-10 flex items-center gap-3">
              Begin Your Journey
              <motion.span
                animate={{ rotate: [0, 360] }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                ⚡
              </motion.span>
            </span>
          </motion.button>
        </motion.div>
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {openModal !== null && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative w-full max-w-4xl max-h-[90vh] bg-slate-800/90 backdrop-blur-md rounded-3xl border border-white/20 overflow-hidden"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-slate-800/95 backdrop-blur-md border-b border-white/10 p-6 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <motion.div
                    className={`w-10 h-10 rounded-full bg-gradient-to-r ${journeySteps[openModal].color} flex items-center justify-center text-white text-sm font-light`}
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  >
                    {journeySteps[openModal].number}
                  </motion.div>
                  <div>
                    <h2 className="text-2xl font-light text-white">
                      {journeySteps[openModal].title}
                    </h2>
                    <p className="text-white/60 text-sm">
                      Step {Number.parseInt(journeySteps[openModal].number)} of
                      6
                    </p>
                  </div>
                </div>
                <motion.button
                  onClick={closeModal}
                  className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  ✕
                </motion.button>
              </div>

              {/* Modal Content - Scrollable */}
              <div className="overflow-y-auto max-h-[calc(90vh-100px)] p-8">
                {renderModalContent(openModal)}
              </div>

              {/* Void Effect Border */}
              <motion.div
                className={`absolute inset-0 rounded-3xl border-2 bg-gradient-to-r ${journeySteps[openModal].color} opacity-20 pointer-events-none`}
                animate={{
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

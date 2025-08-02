"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function ProductsPage() {
  return (
    <div style={{ backgroundColor: "#0a1526" }} className="min-h-screen">
      <ProductsHero />
      <ProductCategoriesSection />
      <FeaturedProductsSection />
      <CustomizationSection />
    </div>
  );
}

function ProductsHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section
      ref={sectionRef}
      className="min-h-screen relative overflow-hidden flex items-center justify-center pt-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

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
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            Our{" "}
            <span className="text-transparent bg-gradient-to-r from-red-400 via-orange-400 to-amber-400 bg-clip-text">
              Products
            </span>
          </motion.h1>

          <motion.div
            className="w-32 h-px bg-gradient-to-r from-transparent via-red-400 to-transparent mx-auto mb-8"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.5 }}
          />

          <motion.p
            className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Discover our curated collection of luxury furniture, fixtures, and
            finishes that define sophisticated living.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

function ProductCategoriesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      name: "Kitchens",
      description:
        "Gourmet kitchen solutions with premium appliances and custom cabinetry",
      image: "/placeholder.svg?height=400&width=600&text=Luxury+Kitchens",
      products: [
        "Custom Cabinets",
        "Premium Appliances",
        "Kitchen Islands",
        "Countertops",
      ],
    },
    {
      name: "Wardrobes",
      description: "Bespoke storage solutions designed for your lifestyle",
      image: "/placeholder.svg?height=400&width=600&text=Luxury+Wardrobes",
      products: [
        "Walk-in Closets",
        "Built-in Wardrobes",
        "Modular Systems",
        "Accessories",
      ],
    },
    {
      name: "Shutters",
      description:
        "Designer window treatments that combine style with functionality",
      image: "/placeholder.svg?height=400&width=600&text=Designer+Shutters",
      products: [
        "Plantation Shutters",
        "Motorized Systems",
        "Custom Finishes",
        "Hardware",
      ],
    },
    {
      name: "Partitions",
      description: "Architectural elements that define and enhance your spaces",
      image: "/placeholder.svg?height=400&width=600&text=Room+Partitions",
      products: [
        "Glass Partitions",
        "Wooden Screens",
        "Metal Dividers",
        "Fabric Panels",
      ],
    },
  ];

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl font-light text-white mb-6">
            Product Categories
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Category Navigation */}
          <div className="space-y-4">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-500 ${
                  activeCategory === index
                    ? "bg-white/10 border border-white/20"
                    : "bg-white/5 hover:bg-white/8"
                }`}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                onClick={() => setActiveCategory(index)}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-2xl font-light text-white mb-3">
                  {category.name}
                </h3>
                <p className="text-white/70 mb-4">{category.description}</p>
                <div className="flex flex-wrap gap-2">
                  {category.products.map((product, productIndex) => (
                    <span
                      key={productIndex}
                      className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80"
                    >
                      {product}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Category Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden">
              <motion.img
                key={activeCategory}
                src={categories[activeCategory].image}
                alt={categories[activeCategory].name}
                className="w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FeaturedProductsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const featuredProducts = [
    {
      name: "Executive Kitchen Island",
      category: "Kitchen",
      price: "From $15,000",
      image: "/placeholder.svg?height=400&width=400&text=Kitchen+Island",
      features: [
        "Marble Countertop",
        "Built-in Appliances",
        "Custom Storage",
        "LED Lighting",
      ],
    },
    {
      name: "Master Wardrobe System",
      category: "Wardrobe",
      price: "From $12,000",
      image: "/placeholder.svg?height=400&width=400&text=Wardrobe+System",
      features: [
        "Walk-in Design",
        "Soft-close Drawers",
        "LED Interior",
        "Mirror Panels",
      ],
    },
    {
      name: "Motorized Plantation Shutters",
      category: "Shutters",
      price: "From $800/sqm",
      image: "/placeholder.svg?height=400&width=400&text=Plantation+Shutters",
      features: [
        "Smart Control",
        "Premium Wood",
        "Custom Finish",
        "UV Protection",
      ],
    },
    {
      name: "Glass Room Divider",
      category: "Partitions",
      price: "From $2,500",
      image: "/placeholder.svg?height=400&width=400&text=Glass+Divider",
      features: [
        "Tempered Glass",
        "Minimal Frame",
        "Sliding System",
        "Privacy Options",
      ],
    },
  ];

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl font-light text-white mb-6">
            Featured Products
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="relative mb-6 rounded-2xl overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="flex flex-wrap gap-1">
                    {product.features
                      .slice(0, 2)
                      .map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="px-2 py-1 bg-white/20 rounded text-xs text-white"
                        >
                          {feature}
                        </span>
                      ))}
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-orange-400 text-sm">{product.category}</p>
                <h3 className="text-xl font-light text-white">
                  {product.name}
                </h3>
                <p className="text-white/60">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CustomizationSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const customizationOptions = [
    {
      title: "Materials",
      description: "Choose from premium woods, metals, glass, and stone",
      icon: "🏗️",
    },
    {
      title: "Finishes",
      description: "Custom colors, textures, and protective coatings",
      icon: "🎨",
    },
    {
      title: "Hardware",
      description: "Luxury handles, hinges, and mechanical systems",
      icon: "⚙️",
    },
    {
      title: "Technology",
      description: "Smart home integration and automated features",
      icon: "📱",
    },
  ];

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <h2 className="text-5xl font-light text-white mb-8">
              Complete Customization
            </h2>
            <p className="text-xl text-white/70 leading-relaxed mb-12">
              Every LUSSO product is tailored to your exact specifications,
              ensuring a perfect fit for your space and lifestyle.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {customizationOptions.map((option, index) => (
                <motion.div
                  key={index}
                  className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-3xl mb-4">{option.icon}</div>
                  <h3 className="text-lg font-light text-white mb-2">
                    {option.title}
                  </h3>
                  <p className="text-white/70 text-sm">{option.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="aspect-square rounded-3xl overflow-hidden">
              <img
                src="/placeholder.svg?height=600&width=600&text=Customization+Process"
                alt="Customization Process"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.button
            className="px-12 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full font-light tracking-wide hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Customization Options
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

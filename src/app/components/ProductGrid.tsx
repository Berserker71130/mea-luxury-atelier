"use client";
import { motion } from "framer-motion";
import { ArrowRight, ShoppingBag } from "lucide-react";

// Curated selection of ultra-premium footwear silhouettes
const PRODUCTS = [
  {
    id: "prod-1",
    name: "Kombat Boot Mate",
    category: "Artisanal Boots",
    price: "$1250",
    image: "/combatboot.jpg",
    size: "Large",
  },
  {
    id: "prod-2",
    name: "Aura Runner V4",
    category: "Luxury Technical",
    price: "$890",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
    size: "normal",
  },
  {
    id: "prod-3",
    name: "Monarch Velvet Loafers",
    category: "Evening Atelier",
    price: "$1,400",
    image:
      "https://images.unsplash.com/photo-1531310197839-ccf54634509e?q=80&w=1200&auto=format&fit=crop",
    size: "normal",
  },
  {
    id: "prod-4",
    name: "The Sovereign Derby",
    category: "Executive Dress",
    price: "$1,100",
    image:
      "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=1200&auto=format&fit=crop",
    size: "wide",
  },
];

export default function ProductGrid() {
  return (
    <section
      id="collections"
      className="w-full bg-luxury-bg py-24 px-6 md:px-12 border-t border-luxury"
    >
      <div className="max-w-7xl mx-auto">
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
          <div className="space-y-2">
            <span className="text-[10px] tracking-[0.3em] text-gold-dark font-bold uppercase">
              Curated Silhouettes
            </span>
            <h2 className="text-2xl md:text-4xl font-light tracking-tight text-luxury-text">
              The{" "}
              <span className="font-semibold text-gold-gradient">Atelier</span>{" "}
              Showcase
            </h2>
          </div>
          <p className="max-w-xs text-xs text-luxury-muted font-light leading-relaxed tracking-wide">
            Limited-run production models built with top-grain Italian calfskin
            and custom-engineered comfort architectures.
          </p>
        </div>

        {/* ASYMETRIC DESIGNER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`group relative rounded-2xl overflow-hidden bg-luxury-surface border border-luxury flex flex-col justify-between ${
                product.size === "large"
                  ? "md:col-span-2 md:row-span-2 h-[500px] md:h-[700px]"
                  : ""
              } ${
                product.size === "wide"
                  ? "md:col-span-2 h-[450px]"
                  : "h-[450px]"
              }`}
            >
              {/* IMAGE CANVAS & PREMIUM SCALE OVERLAY */}
              <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out scale-100 group-hover:scale-105"
                  style={{ backgroundImage: `url(${product.image})` }}
                />
                {/* Smooth Dark Gradient Mask over image to keep item text perfectly readable */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
              </div>

              {/* TOP DETAIL: CATEGORY BADGE */}
              <div className="relative z-10 p-6 flex justify-between items-start">
                <span className="px-3 py-1 bg-black/40 backdrop-blur-md border border-luxury rounded-full text-[10px] tracking-widest text-luxury-muted uppercase font-medium">
                  {product.category}
                </span>
                <div className="w-8 h-8 rounded-full bg-luxury-surface/80 border border-luxury backdrop-blur-sm flex items-center justify-center text-luxury-muted opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowRight className="w-4 h-4 text-gold-light" />
                </div>
              </div>

              {/* BOTTOM CONTENT: PRODUCT DETAILS & BUTTONS */}
              <div className="relative z-10 p-6 bg-gradient-to-t from-black via-black/80 to-transparent pt-20">
                <div className="flex items-end justify-between">
                  <div className="space-y-1">
                    <h3 className="text-lg md:text-xl font-medium tracking-tight text-luxury-text group-hover:text-gold-light transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className="text-sm font-bold text-gold-gradient tracking-wide">
                      {product.price}
                    </p>
                  </div>

                  {/* High-End Quick Add Button */}
                  <button className="p-3 bg-luxury-elevated border border-luxury rounded-xl hover:border-gold-glow hover:bg-gold-dark hover:text-black text-luxury-text transition-all duration-300 cursor-pointer shadow-lg group/btn">
                    <ShoppingBag className="w-4 h-4 transform group-hover/btn:scale-110 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

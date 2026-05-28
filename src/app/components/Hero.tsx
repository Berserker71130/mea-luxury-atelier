"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Mock placeholder images simulating luxury products or scenes
const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=1800&auto=format&fit=crop",
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  //   Handle the automatic slideshow rotation with premium timing (5 seconds per frame)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  //   Split the name into an array of individual characters for the staggered falling effect
  const brandNameLetters = Array.from(
    "MANASSEH ELIAS ANCHE'S LUXURY FOOTWEARS.",
  );

  // PINPOINT 1: Explicitly assigned the ': Variants' type to both configuration objects
  const containerVariants: Variants = {
    before: {},
    after: { transition: { staggerChildren: 0.05 } },
  };

  const letterVariants: Variants = {
    before: { opacity: 0, y: -50, filter: "blur(10px)" },
    after: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { type: "spring", stiffness: 60, damping: 15 },
    },
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-luxury-bg flex items-center justify-center">
      {/* LAYER 1: CINEMATIC CROSS-FADING BACKGROUND IMAGERY */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.35, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${HERO_IMAGES[currentImageIndex]})`,
            }}
          />
        </AnimatePresence>
        {/* Luxury Vignette Overlay to darken edges and focus attention on the typography */}
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-bg via-transparent to-luxury-bg/50" />
      </div>

      {/* LAYER 2: INTERACTIVE CONTENT LAYER */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center space-y-6 mt-16">
        {/* Small Editorial Sub-heading */}
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.2em" }}
          animate={{ opacity: 1, letterSpacing: "0.4em" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-[10px] md:text-xs uppercase font-light text-luxury-muted tracking-[0.4em]"
        >
          Bespoke Footwear Collection
        </motion.p>

        {/* The Falling Letters of the Brand Name with a Staggered Animation */}
        <motion.h1
          variants={containerVariants}
          initial="before"
          animate="after"
          className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tight flex flex-wrap justify-center content-center select-none"
        >
          {brandNameLetters.map((letter, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              /* PINPOINT 2: Changed letter === "" to letter === " " to catch empty word spaces properly */
              className={`inline-block ${letter === " " ? "w-4 md:w-8" : "text-gold-gradient"}`}
            >
              {letter}
            </motion.span>
          ))}
        </motion.h1>

        {/* Brand Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="max-w-md text-xs md:text-sm text-luxury-muted font-light leading-relaxed tracking-wide"
        >
          Engineering high-performance silhouettes for the modern executive.
          Crafted with precision, designed for legacy and impact.
        </motion.p>

        {/* Call to actions buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto"
        >
          <button className="w-full sm:w-auto px-8 py-4 bg-luxury-elevated border border-gold-glow text-gold-light text-xs font-semibold uppercase tracking-[0.2em] rounded-full hover:bg-gold-dark hover:text-black transition-all duration-500 cursor-pointer flex items-center justify-center space-x-2 group shadow-xl">
            <span>Explore Collection</span>
            <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
          </button>

          <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-luxury text-luxury-text text-xs font-semibold uppercase tracking-[0.2em] rounded-full hover:bg-luxury-surface hover:border-luxury-muted transition-all duration-300 cursor-pointer">
            The Atelier Experience
          </button>
        </motion.div>
      </div>

      {/* Luxury bottom border detail */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-luxury-elevated to-transparent" />
    </section>
  );
}

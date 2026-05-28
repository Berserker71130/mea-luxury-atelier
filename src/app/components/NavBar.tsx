"use client";

import { useState, useEffect } from "react";
import { Search, Heart, ShoppingBag, Menu } from "lucide-react";

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? "bg-luxury-surface/70 backdrop-blur-md border-b border-luxury py-4 shadow-2xl"
          : "bg-transparent border-b border-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* 1. BRAND LOGO */}
        <div className="flex items-center  space-x-2 group cursor-pointer">
          <span className="text-xl font-black tracking-widest text-gold-gradient group-hover:opacity-80 transition-opacity">
            M.E.A.
          </span>
          <span className="text-[10px] tracking-[0.3em] font-light text-luxury-muted uppercase pt-1 hidden sm:block">
            Atelier
          </span>
        </div>

        {/* 2. EDITORIAL NAVIGATION LINKS */}
        <div className="hidden md:flex items-center space-x-10 text-xs font-medium tracking-[0.2em] uppercase text-luxury-muted">
          <a
            href="#collections"
            className="hover:text-luxury-text hover:text-gold-light transition-colors duration-300"
          >
            Collections
          </a>
          <a
            href="#atelier"
            className="hover:text-luxury-text hover:text-gold-light transition-colors duration-300"
          >
            The Atelier
          </a>
          <a
            href="#dashboard"
            className="hover:text-luxury-text hover:text-gold-light transition-colors duration-300"
          >
            Executive Desk
          </a>
          <a
            href="#contact"
            className="hover:text-luxury-text hover:text-gold-light transition-colors duration-300"
          >
            Contact
          </a>
        </div>

        {/* 3.LUXURY UTILITY ICONS */}
        <div className="flex items-center space-x-6 text-luxury-text">
          <button className="hover:text-gold-light transition-colors duration-300 cursor-pointer p-1">
            <Search className="w-4 h-4 stroke-[1.5]" />
          </button>
          <button className="hover:text-gold-light transition-colors duration-300 cursor-pointer p-1 hidden sm:block">
            <Heart className="w-4 h-4 stroke-[1.5]" />
          </button>
          <button className="hover:text-gold-light transition-colors duration-300 cursor-pointer p-1 relative">
            <ShoppingBag className="w-4 h-4 stroke-[1.5]" />
            <span className="absolute -top-1 -right-1 bg-gold-dark text-[8px] text-black font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center scale-90">
              0
            </span>
          </button>

          {/* Mobile Menu Icon */}
          <button className="md:hidden hover:text-gold-light transition-colors duration-300 cursor-pointer p-1">
            <Menu className="w-5 h-5 stroke-[1.5]" />
          </button>
        </div>
      </div>
    </nav>
  );
}

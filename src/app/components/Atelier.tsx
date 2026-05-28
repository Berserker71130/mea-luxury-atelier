"use client";

import { motion } from "framer-motion";

export default function Atelier() {
  return (
    <section
      id="atelier"
      className="w-full bg-luxury-surface py-28 px-6 md:px-12 border-t border-luxury relative overflow-hidden"
    >
      {/* Dynamic Background Element for visuakl depth and interest */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-matte/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        {/* LEFT SIDE: EDITORIAL TEXT MASONRY (Spans 5 columns on large screens) */}
        <div className="lg:col-span-5 space-y-8 order-2 lg:order-1">
          <div className="space-y-3">
            <span className="text-[10px] tracking-[0.4em] text-gold-dark font-bold uppercase block">
              The Heritage
            </span>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-luxury-text leading-tight">
              Where Artistry <br />
              Meets{" "}
              <span className="font-semibold text-gold-gradient">
                Engineering
              </span>
            </h2>
          </div>

          <p className="text-sm text-luxury-text-muted font-light leading-relaxed tracking-wide">
            Every silhouette passing through our workshop represents a
            relentless pursuit of geometric perfection. We reject the paradigms
            of mass production, choosing instead to honor the timeless
            methodology of bespoke bench-made assembly. Each piece is a
            testament to the meticulous craftsmanship and unwavering dedication
            that defines our atelier, where every curve and contour is sculpted
            with precision and passion.
          </p>

          {/* Luxury Process Milestones */}
          <div className="space-y-6 pt-4 border-t border-luxury">
            <div className="flex items-start space-x-4">
              <span className="text-xs font-mono text-gold-dark pt-0.5">
                01 //
              </span>
              <div>
                <h4 className="text-xs tracking-[0.2em] font-medium uppercase text-luxury-text mb-1">
                  Anatomical Lasting
                </h4>
                <p className="text-xs text-luxury-muted font-light">
                  Custom carved wodden lasts mapped perfectly to the human gait
                  cycle for unparalleled structural comfort.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <span className="text-xs font-mono text-gold-dark pt-0.5">
                02 //
              </span>
              <div>
                <h4 className="text-xs tracking-[0.2em] font-medium uppercase text-luxury-text mb-1">
                  Artisanal Patina
                </h4>
                <p className="text-xs text-luxury-muted font-light">
                  Hand dyed crust leathers layered meticulously over hours to
                  produce deep, organic tones unique to each pair.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: THE CINEMATIC CRAFT IMAGE CONTAINER (Spans 7 columns) */}
        <div className="lg:col-span-7 order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden border border-luxury shadow-2xl group"
          >
            {/* Main crafting image */}
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-1000 ease-out scale-100 group-hover:scale-105"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1590674899484-d5640e854abe?q=80&w=1600&auto=format&fit=crop')`,
              }}
            />

            {/* Translucent Glass Detail overlay card at the bottom corner */}
            <div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:max-w-xs p-6 bg-black/40 backdrop-blur-md border border-luxury rounded-xl space-y-1">
              <p className="text-[9px] tracking-[0.3em] font-bold text-gold-light uppercase">
                The Master Craftsman
              </p>
              <p className="text-xs text-luxury-text font-light leading-normal">
                We don't just craft luxury footwear, we build architecture
                designed to stand the test of time. Each pair is a testament to
                our unwavering commitment to quality, where every stitch and
                contour is meticulously crafted to create a masterpiece of
                enduring elegance.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

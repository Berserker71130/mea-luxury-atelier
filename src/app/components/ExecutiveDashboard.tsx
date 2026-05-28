"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Award,
  Globe,
  ShieldCheck,
  ArrowUpRight,
  Activity,
} from "lucide-react";

export default function ExecutiveDashboard() {
  // Upgraded structured datasets for an elite luxury brand ledger
  const BAR_CHART_DATA = [
    {
      zone: "London Atelier",
      volume: "$1.45M",
      percentage: 92,
      status: "Peak",
    },
    {
      zone: "Milan Runway",
      volume: "$1.20M",
      percentage: 85,
      status: "Stable",
    },
    {
      zone: "Paris Showroom",
      volume: "$1.85M",
      percentage: 98,
      status: "Max Yield",
    },
    {
      zone: "New York Desk",
      volume: "$940K",
      percentage: 68,
      status: "Active",
    },
  ];

  const ALLOCATION_DATA = [
    {
      material: "Top-Grain Calfskin Leather",
      share: 55,
      color: "bg-gold-light",
      glow: "shadow-gold-glow/20",
    },
    {
      material: "24K Electroplated hardware",
      share: 25,
      color: "bg-gold-matte",
      glow: "shadow-gold-matte/10",
    },
    {
      material: "Aerospace Carbon Fiber Shanks",
      share: 20,
      color: "bg-luxury-elevated",
      glow: "shadow-black/40",
    },
  ];

  return (
    <section
      id="dashboard"
      className="w-full bg-luxury-bg py-32 px-6 md:px-12 border-t border-luxury relative"
    >
      {/* Editorial Watermark background */}
      <div className="absolute left-6 bottom-6 text-[12vw] font-black text-luxury-surface/5 select-none pointer-events-none tracking-tighter uppercase font-mono">
        M.E.A Ledger
      </div>

      <div className="max-w-7xl mx-auto space-y-16">
        {/* SECTION HEADER - Editorial Magazine Style */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-luxury/40 pb-12">
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-dark animate-ping" />
              <span className="text-[10px] tracking-[0.5em] text-gold-dark font-bold uppercase block">
                Live Flagship Metrics
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extralight tracking-tight text-luxury-text">
              The{" "}
              <span className="font-semibold text-gold-gradient">
                Executive
              </span>{" "}
              Desk
            </h2>
          </div>
          <p className="max-w-md text-xs text-luxury-muted font-light leading-relaxed tracking-wide">
            Real-time visual telemetry mapping global allocation, supply chain
            distribution nodes, and transactional ledger values across
            international distribution drops.
          </p>
        </div>

        {/* METRICS HIGHLIGHT BOARD - Translucent luxury glass grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              label: "Global Fulfillment",
              value: "96.4%",
              icon: Globe,
              trend: "+2.1% this week",
            },
            {
              label: "Bespoke Outputs",
              value: "1,845 units",
              icon: Award,
              trend: "Limited Edition allocation",
            },
            {
              label: "Gross Ledger Value",
              value: "$5.44M",
              icon: TrendingUp,
              trend: "Vercel live sync active",
            },
            {
              label: "Cryptographic Vault",
              value: "100% Secured",
              icon: ShieldCheck,
              trend: "Dual-layer authenticated",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-gradient-to-br from-luxury-surface to-luxury-surface/40 border border-luxury/80 rounded-2xl space-y-4 shadow-2xl relative group hover:border-gold-glow/30 transition-all duration-500"
            >
              <div className="flex items-center justify-between text-luxury-muted">
                <span className="text-[9px] tracking-[0.2em] uppercase font-semiold">
                  {item.label}
                </span>
                <div className="p-2 bg-luxury-bg border border-luxury rounded-xl group-hover:text-gold-light transition-colors">
                  <item.icon className="w-3.5 h-3.5 stroke-[1.5]" />
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-2xl md:text-3xl font-bold text-luxury-text tracking-tight">
                  {item.value}
                </p>
                <p className="text-[10px] text-luxury-muted font-mono flex items-center space-x-1">
                  <Activity className="w-3 h-3 text-gold-dark" />
                  <span>{item.trend}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* METRIC VISUALIZATION CHARTS DUAL GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* MODULE 1: LIQUID GOLD DISTRIBUTION BARS (Spans 7 columns) */}
          <div className="lg:col-span-7 p-6 md:p-8 bg-gradient-to-b from-luxury-surface to-luxury-surface/30 border border-luxury rounded-2xl shadow-2xl flex flex-col justify-between relative overflow-hidden">
            <div className="flex justify-between items-start mb-10">
              <div className="space-y-1">
                <h3 className="text-xs font-bold tracking-[0.2em] text-luxury-text uppercase">
                  Zone Volume Distribution
                </h3>
                <p className="text-[11px] text-luxury-muted font-light">
                  Gross fulfillment volume tracking per designated flagship
                  geographic region.
                </p>
              </div>
              <span className="text-[10px] font-mono text-gold-dark px-2 py-0.5 bg-gold-dark/10 border border-gold-dark/20 rounded">
                Live
              </span>
            </div>

            {/* Premium Bar Layout Stack */}
            <div className="space-y-6">
              {BAR_CHART_DATA.map((bar, index) => (
                <div key={index} className="space-y-2 group/bar">
                  <div className="flex justify-between text-xs items-end">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-medium text-luxury-text">
                        {bar.zone}
                      </span>
                      <span className="text-[9px] font-mono text-luxury-muted px-1.5 py-0.2 bg-luxury-elevated rounded border border-luxury uppercase scale-90 opacity-0 group-hover/bar:opacity-100 transition-opacity duration-300">
                        {bar.status}
                      </span>
                    </div>
                    <span className="text-gold-light font-mono font-bold tracking-wide">
                      {bar.volume}
                    </span>
                  </div>
                  {/* Invisible Outer Track Track */}
                  <div className="w-full h-2.5 bg-luxury-bg rounded-full overflow-hidden border border-luxury/60 relative p-[2px]">
                    {/* Interior Glowing Fill Layer */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${bar.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.5,
                        delay: index * 0.15,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="h-full bg-gradient-to-r from-gold-dark via-gold-matte to-gold-light rounded-full shadow-[0_0_12px_rgba(212,175,55,0.4)]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* MODULE 2: REBRAND CYLINDRICAL RADIAL INDEX (Spans 5 columns) */}
          <div className="lg:col-span-5 p-6 md:p-8 bg-gradient-to-b from-luxury-surface to-luxury-surface/30 border border-luxury rounded-2xl shadow-2xl flex flex-col justify-between items-center">
            <div className="w-full mb-8">
              <h3 className="text-xs font-bold tracking-[0.2em] text-luxury-text uppercase">
                Material Compound Allocation
              </h3>
              <p className="text-[11px] text-luxury-muted font-light">
                Dynamic structural mix metrics mapping materials utilized across
                product assemblies.
              </p>
            </div>

            {/* CYLINDRICAL RADIAL CHART RE-DESIGN */}
            <div className="relative w-48 h-48 flex items-center justify-center my-6 select-none">
              {/* Outer Layer Glass Ring */}
              <div className="absolute inset-0 rounded-full border border-luxury bg-gradient-to-tr from-luxury-bg to-luxury-surface shadow-2xl flex items-center justify-center">
                {/* Embedded Concentric Segment Orbits imitating dynamic radial divisions */}
                <div className="absolute inset-3 rounded-full border border-dashed border-gold-dark/30 animate-[spin_40s_linear_infinite]" />
                <div className="absolute inset-6 rounded-full border border-luxury-elevated/80 bg-luxury-bg shadow-inner flex flex-col items-center justify-center z-10">
                  <span className="text-3xl font-black text-gold-gradient tracking-tighter">
                    100%
                  </span>
                  <span className="text-[8px] tracking-[0.2em] text-gold-dark uppercase font-bold">
                    Certified
                  </span>
                </div>

                {/* Stimulated floating visual data arcs */}
                <div className="absolute top-0 w-3 h-3 rounded-full bg-gold-light border border-black shadow-[0_0_10px_rgba(255,215,0,0.6)]" />
                <div className="absolute bottom-6 left-2 w-2 h-2 rounded-full bg-gold-dark border border-black" />
              </div>
            </div>

            {/* MODERN DATA LEGEND LIST */}
            <div className="w-full space-y-3 pt-6 border-t border-luxury/60">
              {ALLOCATION_DATA.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between text-xs group/item cursor-default"
                >
                  <div className="flex items-center space-x-3">
                    <span
                      className={`w-2.5 h-2.5 rounded-full ${item.color} ${item.glow} shadow-lg transition-transform duration-300 group-hover/item:scale-125 borderr border-white/10`}
                    />
                    <span className="text-luxury-muted group-hover/item:text-luxury-text transition-colors duration-300 font-light">
                      {item.material}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1 font-mono">
                    <span className="font-semibold text-luxury-text">
                      {item.share}
                    </span>
                    <span className="text-gold-dark text-[9px] font-bold">
                      %
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  MessageCircle,
  MessageSquare,
  Phone,
  Send,
} from "lucide-react";

export default function Contact() {
  const currentYear = 2026;

  return (
    <section
      id="contact"
      className="w-full bg-luxury-surface pt-32 pb-12 px-6 md:px-12 border-t border-luxury relative overflow-hidden"
    >
      {/* Background radial accent flare */}
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-gold-matte/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* DUAL COLUMN CONTACT WORKSPACE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-24 border-b border-luxury/60">
          {/* COLUMN 1: LEFT PANEL (Spans 5 Columns total on desktop) */}
          <div className="lg:col-span-5 space-y-10">
            {/* Title Block */}
            <div className="space-y-3">
              <span className="text-[10px] tracking-[0.5em] text-gold-dark font-bold uppercase block">
                Direct Client Desk
              </span>
              <h2 className="text-3xl md:text-5xl font-light tracking-tight text-luxury-text leading-tight">
                Initiate The <br />
                <span className="font-semibold text-gold-gradient">
                  Commission
                </span>
              </h2>
              <p className="max-w-sm text-xs text-luxury-muted font-light leading-relaxed tracking-wide pt-2">
                Whether requesting a bespoke size adjustment, securing an
                international runway drops allocation, or scheduling a private
                showroom consultation, our Direct Client Desk is your gateway to
                personalized service. Connect with us to experience the epitome
                of luxury fashion assistance, tailored to your unique needs and
                desires.
              </p>
            </div>

            {/* HIGH-END INTERACTIVE COMMUNICATIONS DIRECTORY */}
            <div className="space-y-4">
              {[
                {
                  label: "Secure Email Desk",
                  value: "concierge@mea-luxury.com",
                  href: "mailto:concierge@mea-luxury.com",
                  icon: Mail,
                },
                {
                  label: "Direct Atelier Voice",
                  value: "+234 Luxury Line",
                  href: "tel:+2348130623720",
                  icon: Phone,
                },
                {
                  label: "Instant Whatsapp Concierge",
                  value: "Secure Chat Active",
                  href: "https://wa.me/2348130623720",
                  icon: MessageCircle,
                },
                {
                  label: "Digital Heritage Network",
                  value: "M.E.A. Atelier Facebook",
                  href: "https://facebook.com",
                  icon: MessageSquare,
                },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-5 bg-luxury-bg border border-luxury rounded-2xl group hover:border-gold-glow/30 hover:shadow-[0_0_20px_rgba(212,175,55,0.05)] transition-all duration-500"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-luxury-surface border border-luxury/80 rounded-xl group-hover:text-gold-light transition-colors duration-300">
                      <item.icon className="w-4 h-4 stroke-[1.5]" />
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-[9px] tracking-widest text-luxury-muted uppercase font-medium">
                        {item.label}
                      </p>
                      <p className="text-xs font-medium text-luxury-text">
                        {item.value}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-luxury-muted group-hover:text-gold-light group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* COLUMN 2: RIGHT PANEL (Spans 7 columns on desktop) */}
          <div className="lg:col-span-7 p-6 md:p-10 bg-gradient-to-b from-luxury-bg to-luxury-bg/40 border border-luxury rounded-3xl shadow-2xl flex flex-col justify-between">
            <div className="mb-8">
              <h3 className="text-xs font-bold tracking-[0.2em] text-luxury-text uppercase">
                Digital Correspondence
              </h3>
              <p className="text-[11px] text-luxury-muted font-light pt-1">
                Transmission lines route straight to our artisanal workbench
                queue.
              </p>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[9px] tracking-widest text-luxury-muted uppercase font-semibold">
                    Client Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Executive Alexander"
                    className="w-full bg-luxury-surface border border-luxury focus:border-gold-glow/40 rounded-xl px-4 py-3.5 text-xs text-luxury-text placeholder:text-luxury-muted outline-none transition-colors duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] tracking-widest text-luxury-muted uppercase font-semibold">
                    Email Anchor
                  </label>
                  <input
                    type="email"
                    placeholder="client@domain.com"
                    className="w-full bg-luxury-surface border border-luxury focus:border-gold-glow/40 rounded-xl px-4 py-3.5 text-xs text-luxury-text placeholder:text-luxury-muted outline-none transition-colors duration-300"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[9px] tracking-widest text-luxury-muted uppercase font-semibold">
                  Inquiry Classification
                </label>
                <select className="w-full bg-luxury-surface border border-luxury focus:border-gold-glow/40 rounded-xl px-4 py-3.5 text-xs text-luxury-text outline-none transition-colors duration-300 appearance-none cursor-pointer">
                  <option className="bg-luxury-bg text-luxury-text">
                    Bespoke Production Commission
                  </option>
                  <option className="bg-luxury-bg text-luxury-text">
                    Flagship Distribution Partnership
                  </option>
                  <option className="bg-luxury-bg text-luxury-text">
                    Press & Editorial Inquiries
                  </option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[9px] tracking-widest text-luxury-muted uppercase font-semibold">
                  The Brief
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe the geometric specifications or collection parameters requested..."
                  className="w-full bg-luxury-surface border border-luxury focus:border-gold-glow/40 rounded-xl px-4 py-3.5 text-xs text-luxury-text placeholder:text-luxury-muted outline-none transition-colors duration-300 resize-none"
                />
              </div>

              <button className="w-full py-4 bg-gradient-to-r from-gold-dark to-gold-light text-black text-[10px] font-bold tracking-[0.3em] uppercase rounded-xl hover:opacity-90 transition-opacity duration-300 shadow-xl flex items-center justify-center space-x-2 cursor-pointer">
                <span>Dispatch Correspondence</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* EXTRAVAGANT LOWER FOOTER MARK */}
      <div className="max-w-7xl mx-auto pt-12 flex flex-col md:flex-row items-center justify-between text-luxury-muted gap-6">
        {/* Logo and brand configuration */}
        <div className="flex items-center space-x-3">
          <span className="text-lg font-black tracking-widest text-gold-gradient">
            M.E.A.
          </span>
          <span className="w-[1px] h-3 bg-luxury" />
          <span className="text-[9px] tracking-[0.3em] uppercase font-light">
            Bespoke Footwear Block
          </span>
        </div>

        {/* Quick link anchors back up stage */}
        <div className="flex items-center space-x-8 text-[10px] tracking-[0.15em] font-medium uppercase">
          <a
            href="#collections"
            className="hover:text-gold-light transition-colors"
          >
            Collections
          </a>
          <a
            href="#atelier"
            className="hover:text-gold-light transition-colors"
          >
            The Atelier
          </a>
          <a
            href="#dashboard"
            className="hover:text-gold-light transition-colors"
          >
            Executive Desk
          </a>
        </div>

        {/* Rights stamp */}
        <p className="text-[10px] font-mono tracking-wide font-light">
          &copy; {currentYear} M.E.A. ATELIER. Engineered for impact.
        </p>
      </div>
    </section>
  );
}

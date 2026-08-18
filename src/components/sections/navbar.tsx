"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Menu, X, ArrowUpRight, ShoppingBag } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";

const NAV_LINKS = [
  { name: "Colecciones", href: "#colecciones" },
  { name: "Skincare Facial", href: "#skincare" },
  { name: "Hair Care", href: "#haircare" },
  { name: "Filosofía Botánica", href: "#filosofia" },
  { name: "Ritual Glow", href: "#rituales" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 flex justify-center px-4 sm:px-6 pt-4 sm:pt-6 pointer-events-none">
        <motion.nav
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto flex items-center justify-between w-full max-w-7xl px-5 sm:px-7 py-3 sm:py-3.5 rounded-full border transition-all duration-500 ${
            isScrolled
              ? "bg-obsidian-900/80 backdrop-blur-2xl border-white/[0.12] shadow-2xl shadow-black/60"
              : "bg-obsidian-950/40 backdrop-blur-xl border-white/[0.07] shadow-lg shadow-black/20"
          }`}
        >
          {/* Brand Logo & Emblem */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 rounded-full overflow-hidden border border-rosegold-300/30 p-1 bg-rosegold-400/10 group-hover:border-rosegold-300 transition-colors">
              <Image
                src="/brand/logo.png"
                alt="Glow Girls Logo"
                fill
                sizes="36px"
                className="object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-semibold tracking-wider text-white group-hover:text-rosegold-200 transition-colors">
                Glow Girls
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-rosegold-300/80 -mt-1 font-medium">
                Skin & Hair Care
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/[0.02] border border-white/[0.05]">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative px-3.5 py-1.5 text-xs font-medium tracking-wider text-pearl-300 hover:text-white rounded-full transition-all duration-300 hover:bg-white/[0.06]"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Action Area */}
          <div className="flex items-center gap-3">
            {/* Status Live Indicator */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-[11px] text-pearl-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-botanical-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-botanical-500" />
              </span>
              <span className="tracking-wide">Stock Disponible</span>
            </div>

            {/* Magnetic Consultation CTA */}
            <a
              href="https://wa.me/5491123923931?text=Hola%20Glow%20Girls!%20Deseo%20conocer%20la%20colecci%C3%B3n%20disponible"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-block"
            >
              <MagneticButton variant="primary" className="text-xs uppercase tracking-wider py-2 px-5">
                <Sparkles className="w-3.5 h-3.5 text-obsidian-950 fill-current" />
                <span>Asesoría Glow</span>
              </MagneticButton>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full bg-white/[0.05] border border-white/10 text-pearl-200 hover:text-white"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-4 top-24 z-50 p-6 rounded-3xl bg-obsidian-900/95 border border-white/[0.12] shadow-2xl backdrop-blur-2xl lg:hidden flex flex-col gap-4 text-center"
          >
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-3 text-base font-medium text-pearl-200 hover:text-rosegold-300 border-b border-white/[0.05] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <a
              href="https://wa.me/5491123923931?text=Hola%20Glow%20Girls!%20Deseo%20asesoramiento%20personalizado"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
            >
              <MagneticButton variant="primary" className="w-full text-xs uppercase tracking-wider py-3 mt-2">
                <Sparkles className="w-4 h-4 text-obsidian-950 fill-current" />
                <span>Asesoría Personalizada</span>
              </MagneticButton>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

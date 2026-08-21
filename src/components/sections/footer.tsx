"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Heart, MessageCircle, ArrowUpRight, ShieldCheck, Truck, RefreshCw } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.08] bg-obsidian-950/80 backdrop-blur-2xl text-pearl-300 pt-20 pb-12 px-4 sm:px-6 md:px-12 overflow-hidden">
      {/* Subtle Glow in Footer */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-rosegold-300/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Top Feature Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pb-16 border-b border-gold-400/15 mb-16">
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-gold-400/15 hover:border-gold-300/40 transition-colors">
            <div className="p-3 rounded-xl bg-gold-400/10 text-gold-300 shadow-glow-gold">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-white text-base font-medium">Envíos a Todo el País</h4>
              <p className="text-xs text-pearl-400">Embalaje reforzado y entregas express</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-gold-400/15 hover:border-gold-300/40 transition-colors">
            <div className="p-3 rounded-xl bg-gold-400/10 text-gold-300 shadow-glow-gold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-white text-base font-medium">Fórmulas 100% Puras</h4>
              <p className="text-xs text-pearl-400">Sin parabenos, sin sulfatos agresivos</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-gold-400/15 hover:border-gold-300/40 transition-colors">
            <div className="p-3 rounded-xl bg-gold-400/10 text-gold-300 shadow-glow-gold">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-white text-base font-medium">Asesoramiento Exclusivo</h4>
              <p className="text-xs text-pearl-400">Rutinas guiadas para tu tipo de piel</p>
            </div>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col items-start">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-gold-400/40 p-1 bg-gold-400/10 shadow-glow-gold">
                <Image
                  src="/brand/logo.png"
                  alt="Glowgirlsok"
                  fill
                  sizes="40px"
                  className="object-cover rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-semibold tracking-wider text-white group-hover:text-gold-200 transition-colors">
                  Glowgirlsok
                </span>
                <span className="text-[10px] uppercase tracking-[0.22em] text-gold-300 font-medium">
                  Botánica · Capilar · Skincare
                </span>
              </div>
            </Link>

            <p className="text-sm text-pearl-400 max-w-sm leading-relaxed mb-6">
              Cosmética botánica, cuidado capilar y skincare de alta gama diseñados para despertar la luminosidad intrínseca de tu piel y la fuerza de tu cabello.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/glowgirlsok"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/[0.04] hover:bg-gold-400/10 border border-white/10 hover:border-gold-400/40 text-pearl-200 hover:text-gold-200 transition-all hover:scale-105"
                aria-label="Instagram @glowgirlsok"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://wa.me/5491123923931?text=Hola%20Glowgirlsok!%20Deseo%20hacer%20una%20consulta"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/[0.04] hover:bg-gold-400/10 border border-white/10 hover:border-gold-400/40 text-pearl-200 hover:text-gold-200 transition-all hover:scale-105"
                aria-label="WhatsApp Glowgirlsok"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links: Skincare & Kits */}
          <div className="md:col-span-2">
            <h4 className="font-serif text-white text-base font-medium mb-4">Skincare & Kits</h4>
            <ul className="space-y-2.5 text-xs text-pearl-400">
              <li>
                <a href="#colecciones" className="text-gold-300 font-medium hover:underline transition-colors">
                  ✦ Rutina Completa (5 Pasos)
                </a>
              </li>
              <li>
                <a href="#colecciones" className="hover:text-gold-300 transition-colors">
                  Tónico de Rosas
                </a>
              </li>
              <li>
                <a href="#colecciones" className="hover:text-gold-300 transition-colors">
                  Niacinamida + Pantenol
                </a>
              </li>
              <li>
                <a href="#colecciones" className="hover:text-gold-300 transition-colors">
                  Crema Aloe Vera
                </a>
              </li>
              <li>
                <a href="#colecciones" className="hover:text-gold-300 transition-colors">
                  Ácido Hialurónico
                </a>
              </li>
              <li>
                <a href="#colecciones" className="hover:text-gold-300 transition-colors">
                  Vitamina C Nocturna
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links: Hair Care & Cursos */}
          <div className="md:col-span-2">
            <h4 className="font-serif text-white text-base font-medium mb-4">Hair Care & Cursos</h4>
            <ul className="space-y-2.5 text-xs text-pearl-400">
              <li>
                <a href="#cursos" className="text-gold-300 font-medium hover:underline transition-colors">
                  ✦ Capacitación Virtual
                </a>
              </li>
              <li>
                <a href="#colecciones" className="hover:text-gold-300 transition-colors">
                  Matizador Violeta
                </a>
              </li>
              <li>
                <a href="#colecciones" className="hover:text-gold-300 transition-colors">
                  Intensificador de Rojos
                </a>
              </li>
              <li>
                <a href="#colecciones" className="hover:text-gold-300 transition-colors">
                  Shampoo Neutro
                </a>
              </li>
              <li>
                <a href="#filosofia" className="hover:text-gold-300 transition-colors">
                  Filosofía Clean
                </a>
              </li>
              <li>
                <a href="#rituales" className="hover:text-gold-300 transition-colors">
                  Guía de Rutinas
                </a>
              </li>
            </ul>
          </div>

          {/* Consultation Card */}
          <div className="md:col-span-3 p-6 rounded-2xl bg-white/[0.02] border border-gold-400/20 flex flex-col justify-between hover:border-gold-300/40 transition-colors shadow-glow-gold-card">
            <div>
              <div className="flex items-center gap-1.5 text-xs text-gold-300 font-semibold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Atención Personal</span>
              </div>
              <h5 className="font-serif text-white text-lg font-medium mb-2">¿Dudas con tu rutina?</h5>
              <p className="text-xs text-pearl-400 leading-relaxed mb-4">
                Escribinos de forma directa y nuestras especialistas te recomendarán el tratamiento ideal.
              </p>
            </div>

            <a
              href="https://wa.me/5491123923931?text=Hola%20Glowgirlsok!%20Quiero%20asesoramiento"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MagneticButton variant="primary" className="w-full text-xs uppercase tracking-wider py-3">
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Chat Directo</span>
              </MagneticButton>
            </a>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between text-xs text-pearl-500 gap-4">
          <p>© {new Date().getFullYear()} Glowgirlsok (glowgirlsok.com.ar). Todos los derechos reservados.</p>
          <div className="flex items-center gap-2 text-pearl-400">
            <span>Cosmética Botánica · Capilar · Skincare con</span>
            <Heart className="w-3.5 h-3.5 text-gold-400 fill-current" />
            <span>para una piel y cabello radiante</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

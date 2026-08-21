"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, Eye, ShieldCheck, Droplet, Star } from "lucide-react";
import { SplitText } from "@/components/ui/split-text";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Card3DTilt } from "@/components/ui/card-3d-tilt";
import { Product, PRODUCTS } from "@/data/products";
import { ProductModal } from "@/components/ui/product-modal";
import { TubesBackground } from "@/components/ui/tubes-background";

const HERO_SHOWCASE_IDS = [
  "tonico-rosas",
  "niacinamida-pantenol",
  "crema-aloe-vera",
  "acido-hialuronico",
  "vitamina-c-despigmentante",
];

export function Hero() {
  const [activeProductId, setActiveProductId] = useState<string>("tonico-rosas");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax on scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const satelliteLeftY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const satelliteRightY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  const activeProduct = PRODUCTS.find((p) => p.id === activeProductId) || PRODUCTS[0];
  const satelliteLeft = PRODUCTS.find((p) => p.id === "niacinamida-pantenol") || PRODUCTS[1];
  const satelliteRight = PRODUCTS.find((p) => p.id === "crema-aloe-vera") || PRODUCTS[2];

  return (
    <>
      <TubesBackground
        className="min-h-[96vh] flex items-center justify-center pt-28 sm:pt-36 pb-20 px-4 sm:px-6 md:px-12"
        opacity={0.8}
      >
        <section
          ref={containerRef}
          className="relative w-full flex items-center justify-center overflow-hidden"
        >
        <motion.div
          style={{ y: heroY, opacity }}
          className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          {/* Left Column: Headline & Editorial Lead */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-20">
            {/* Luminous Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-400/10 border border-gold-400/30 backdrop-blur-md mb-6 shadow-glow-subtle group hover:border-gold-300/60 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-gold-300 animate-pulse" />
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-gold-200">
                Cosmética Botánica · Capilar · Skincare
              </span>
            </motion.div>

            {/* Split-Text Cinematic Heading */}
            <div className="mb-6">
              <SplitText
                tag="h1"
                delay={0.1}
                staggerDelay={0.04}
                highlightWords={["Alquimia", "Piel", "Cabello", "Radiante"]}
                className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-white tracking-tight leading-[1.06]"
              >
                La Alquimia de una Piel y Cabello Radiante
              </SplitText>
            </div>

            {/* Editorial Lead */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-pearl-300/90 font-normal leading-relaxed max-w-2xl mb-8"
            >
              Combinamos hidrolatos puros y extractos botánicos vírgenes con biotecnología celular de máxima eficacia. Despierta la luminosidad intrínseca de tu rostro y la vitalidad de tu cabello.
            </motion.p>

            {/* Interactive Showcase Selector Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8 w-full max-w-xl"
            >
              <span className="text-[10px] uppercase tracking-[0.25em] text-gold-300/90 font-semibold block mb-3">
                Explorar Fórmulas Clave:
              </span>
              <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-white/[0.03] border border-gold-400/15 backdrop-blur-md">
                {HERO_SHOWCASE_IDS.map((id) => {
                  const prod = PRODUCTS.find((p) => p.id === id);
                  if (!prod) return null;
                  const isActive = activeProductId === id;
                  return (
                    <button
                      key={id}
                      onClick={() => setActiveProductId(id)}
                      data-cursor
                      data-cursor-text="Ver"
                      className={`px-3 py-1.5 rounded-xl text-xs font-medium tracking-wide transition-all duration-300 cursor-pointer ${
                        isActive
                          ? "bg-gold-400/20 text-white border border-gold-400/50 shadow-[0_0_15px_rgba(216,180,74,0.25)]"
                          : "text-pearl-400 hover:text-white hover:bg-white/[0.04]"
                      }`}
                    >
                      {prod.name}
                    </button>
                  );
                })}
              </div>
            </motion.div>

            {/* Call to Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-12"
            >
              <a href="#colecciones" className="w-full sm:w-auto" data-cursor>
                <MagneticButton variant="primary" className="w-full sm:w-auto text-xs uppercase tracking-widest py-4 px-8">
                  <span>Ver Colección Completa</span>
                  <ArrowRight className="w-4 h-4" />
                </MagneticButton>
              </a>

              <a
                href="https://wa.me/5491123923931?text=Hola%20Glowgirlsok!%20Quisiera%20un%20diagn%C3%B3stico%20gratuito%20de%20mi%20piel%20y%20cabello"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
                data-cursor
              >
                <MagneticButton variant="secondary" className="w-full sm:w-auto text-xs uppercase tracking-widest py-4 px-8">
                  <span>Diagnóstico Facial</span>
                </MagneticButton>
              </a>
            </motion.div>

            {/* Key Editorial Metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="grid grid-cols-3 gap-6 pt-6 border-t border-gold-400/15 w-full max-w-xl"
            >
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-medium text-white block">100%</span>
                <span className="text-[11px] text-pearl-400 uppercase tracking-wider block mt-0.5">
                  Botánico & Puro
                </span>
              </div>
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-medium text-gold-300 block">+18.5k</span>
                <span className="text-[11px] text-pearl-400 uppercase tracking-wider block mt-0.5">
                  Pieles Radiantes
                </span>
              </div>
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-medium text-white block">0%</span>
                <span className="text-[11px] text-pearl-400 uppercase tracking-wider block mt-0.5">
                  Crueldad & Sulfatos
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: 3D Depth Multi-Layered Showcase */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[480px] sm:min-h-[560px]">
            {/* Luminous Glow Halo */}
            <div className="absolute w-80 sm:w-[420px] h-80 sm:h-[420px] rounded-full bg-gold-400/15 blur-[110px] pointer-events-none" />

            {/* Satellite Floating Card Left (Scroll Parallax) */}
            <motion.div
              style={{ y: satelliteLeftY }}
              initial={{ opacity: 0, x: -40, y: 30 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="hidden sm:block absolute -left-8 top-8 z-10 w-44 animate-float-gentle"
            >
              <Card3DTilt
                maxTilt={16}
                onClick={() => setSelectedProduct(satelliteLeft)}
                className="rounded-2xl border border-gold-400/30 bg-obsidian-900/90 p-3 backdrop-blur-xl shadow-glow-gold-card"
              >
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-2 bg-obsidian-850">
                  <Image
                    src={satelliteLeft.image}
                    alt={satelliteLeft.name}
                    fill
                    sizes="176px"
                    className="object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider text-gold-300 font-medium">
                    {satelliteLeft.badge}
                  </span>
                  <span className="font-serif text-xs font-semibold text-white truncate">
                    {satelliteLeft.name}
                  </span>
                </div>
              </Card3DTilt>
            </motion.div>

            {/* Centerpiece Hero Dynamic Card */}
            <div className="relative z-20 w-full max-w-[340px] sm:max-w-[380px]">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={activeProduct.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Card3DTilt
                    maxTilt={14}
                    onClick={() => setSelectedProduct(activeProduct)}
                    className="rounded-3xl border border-gold-400/35 bg-gradient-to-b from-gold-500/[0.08] to-obsidian-900/95 p-4 sm:p-5 backdrop-blur-2xl shadow-glow-gold-card group/hero"
                  >
                    {/* Badge Header */}
                    <div className="flex items-center justify-between mb-3 px-1">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-gold-500/15 text-gold-200 border border-gold-400/30">
                        <Sparkles className="w-2.5 h-2.5 text-gold-300" />
                        {activeProduct.badge || "Fórmula Insignia"}
                      </span>
                      <span className="text-xs text-pearl-300 font-mono">{activeProduct.volume}</span>
                    </div>

                    {/* Main Image Container */}
                    <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-obsidian-950/70 border border-gold-400/15 mb-4 group/img">
                      <Image
                        src={activeProduct.image}
                        alt={activeProduct.name}
                        fill
                        sizes="(max-width: 768px) 320px, 380px"
                        priority
                        className="object-contain p-2 transition-transform duration-700 group-hover/img:scale-108"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/70 via-transparent to-transparent pointer-events-none" />

                      {/* Quick View Tag on hover */}
                      <div className="absolute inset-x-0 bottom-3 flex justify-center opacity-0 group-hover/img:opacity-100 transition-opacity">
                        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium bg-gold-400/20 backdrop-blur-md border border-gold-300/40 text-white shadow-xl">
                          <Eye className="w-3.5 h-3.5" />
                          Ver Ficha Completa
                        </span>
                      </div>
                    </div>

                    {/* Metadata */}
                    <div className="px-1 flex items-center justify-between">
                      <div>
                        <h3 className="font-serif text-lg sm:text-xl font-medium text-white group-hover/hero:text-gold-200 transition-colors">
                          {activeProduct.name}
                        </h3>
                        <p className="text-xs text-gold-200/90">{activeProduct.highlightKey}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] text-pearl-400 block uppercase">Pureza</span>
                        <span className="text-xs font-semibold text-botanical-400">100% Activo</span>
                      </div>
                    </div>
                  </Card3DTilt>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Satellite Floating Card Right (Scroll Parallax) */}
            <motion.div
              style={{ y: satelliteRightY }}
              initial={{ opacity: 0, x: 40, y: -30 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="hidden sm:block absolute -right-8 bottom-4 z-10 w-44 animate-float-delayed"
            >
              <Card3DTilt
                maxTilt={16}
                onClick={() => setSelectedProduct(satelliteRight)}
                className="rounded-2xl border border-gold-400/30 bg-obsidian-900/90 p-3 backdrop-blur-xl shadow-glow-gold-card"
              >
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-2 bg-obsidian-850">
                  <Image
                    src={satelliteRight.image}
                    alt={satelliteRight.name}
                    fill
                    sizes="176px"
                    className="object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider text-botanical-400 font-medium">
                    {satelliteRight.badge}
                  </span>
                  <span className="font-serif text-xs font-semibold text-white truncate">
                    {satelliteRight.name}
                  </span>
                </div>
              </Card3DTilt>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Discreet 3D WebGL Atmosphere Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-obsidian-950/60 border border-gold-400/20 backdrop-blur-md text-[10px] text-pearl-400">
        <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
        <span className="tracking-widest uppercase">Click en el fondo para alternar atmósfera 3D</span>
      </div>
    </TubesBackground>

    {/* Product Quick View Modal */}
    <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </>
  );
}

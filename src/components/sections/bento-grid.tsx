"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Eye, ArrowUpRight, Droplets, CheckCircle, ShieldCheck, Heart } from "lucide-react";
import { PRODUCTS, Product } from "@/data/products";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { ProductModal } from "@/components/ui/product-modal";
import { formatPrice } from "@/lib/utils";
import { MagneticButton } from "@/components/ui/magnetic-button";

export function BentoGrid() {
  const [activeCategory, setActiveCategory] = useState<"all" | "skincare" | "haircare">("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts =
    activeCategory === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section id="colecciones" className="relative py-24 sm:py-32 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rosegold-400/10 border border-rosegold-300/20 text-rosegold-200 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              <Sparkles className="w-3 h-3 text-rosegold-300" />
              Colecciones Insignia
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-white tracking-tight">
              Fórmulas Dermoestéticas & Cuidado Capilar
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 p-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md self-start md:self-auto">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-full text-xs font-medium tracking-wider transition-all cursor-pointer ${
                activeCategory === "all"
                  ? "bg-rosegold-300/20 text-white border border-rosegold-300/40 shadow-sm"
                  : "text-pearl-300 hover:text-white"
              }`}
            >
              Todos ({PRODUCTS.length})
            </button>
            <button
              onClick={() => setActiveCategory("skincare")}
              className={`px-4 py-2 rounded-full text-xs font-medium tracking-wider transition-all cursor-pointer ${
                activeCategory === "skincare"
                  ? "bg-rosegold-300/20 text-white border border-rosegold-300/40 shadow-sm"
                  : "text-pearl-300 hover:text-white"
              }`}
            >
              Skincare Facial
            </button>
            <button
              onClick={() => setActiveCategory("haircare")}
              className={`px-4 py-2 rounded-full text-xs font-medium tracking-wider transition-all cursor-pointer ${
                activeCategory === "haircare"
                  ? "bg-rosegold-300/20 text-white border border-rosegold-300/40 shadow-sm"
                  : "text-pearl-300 hover:text-white"
              }`}
            >
              Hair Care Profesional
            </button>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <AnimatePresence>
            {filteredProducts.map((product, index) => {
              // Dynamic asymmetric spans for bento aesthetics
              const isLargeCard = index === 0;
              const spanClass = isLargeCard
                ? "col-span-12 md:col-span-8"
                : index === 1
                ? "col-span-12 md:col-span-4"
                : index === 2 || index === 3 || index === 4
                ? "col-span-12 md:col-span-4"
                : "col-span-12 md:col-span-6";

              return (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className={spanClass}
                >
                  <SpotlightCard
                    onClick={() => setSelectedProduct(product)}
                    className="h-full flex flex-col justify-between cursor-pointer p-6 sm:p-8"
                  >
                    {/* Top Row: Tags & Price */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        {product.badge && (
                          <span className="px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-rosegold-400/20 text-rosegold-200 border border-rosegold-300/30">
                            {product.badge}
                          </span>
                        )}
                        <span className="text-xs text-pearl-400 font-mono">{product.volume}</span>
                      </div>
                      <span className="font-serif text-lg font-medium text-rosegold-200">
                        {formatPrice(product.price)}
                      </span>
                    </div>

                    {/* Center Image with Glow Backdrop */}
                    <div
                      className={`relative w-full ${
                        isLargeCard ? "aspect-[16/10] sm:aspect-[21/9]" : "aspect-[4/3] sm:aspect-[1/1]"
                      } rounded-2xl overflow-hidden bg-obsidian-950/60 border border-white/[0.06] mb-6 flex items-center justify-center group/img`}
                    >
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes={isLargeCard ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                        className="object-contain p-4 transition-transform duration-700 group-hover/img:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/80 via-transparent to-transparent pointer-events-none" />

                      {/* Floating View Icon Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity bg-obsidian-950/40 backdrop-blur-xs">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 border border-white/30 text-xs font-semibold text-white shadow-xl">
                          <Eye className="w-4 h-4" />
                          Ver Ficha Completa
                        </span>
                      </div>
                    </div>

                    {/* Bottom Metadata */}
                    <div className="flex flex-col justify-end">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[11px] font-medium uppercase tracking-wider text-rosegold-300">
                          {product.category === "skincare" ? "Skincare Facial" : "Hair Care Profesional"}
                        </span>
                      </div>

                      <h3 className="font-serif text-2xl font-medium text-white group-hover:text-rosegold-200 transition-colors mb-2">
                        {product.name}
                      </h3>

                      <p className="text-pearl-300 text-xs sm:text-sm line-clamp-2 leading-relaxed mb-4">
                        {product.tagline}
                      </p>

                      {/* Active Ingredients & Action Bar */}
                      <div className="flex items-center justify-between pt-4 border-t border-white/[0.06] gap-4">
                        <div className="flex items-center gap-1.5 text-xs text-pearl-400 truncate">
                          <Droplets className="w-3.5 h-3.5 text-rosegold-300 shrink-0" />
                          <span className="truncate">{product.highlightKey}</span>
                        </div>

                        <span className="inline-flex items-center gap-1 text-xs font-medium text-white group-hover:text-rosegold-300 transition-colors shrink-0">
                          <span>Detalles</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Product Quick View Modal */}
      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </section>
  );
}

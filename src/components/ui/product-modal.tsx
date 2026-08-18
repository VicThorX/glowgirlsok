"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Droplets, CheckCircle2, ShieldCheck, Heart, MessageCircle } from "lucide-react";
import { Product } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import { MagneticButton } from "./magnetic-button";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (product) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  const whatsappMessage = encodeURIComponent(
    `¡Hola Glow Girls! ✨ Me encantó el producto *${product.name}* (${product.volume}) y quiero consultar disponibilidad o realizar mi pedido.`
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="fixed inset-0 bg-obsidian-950/80 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/[0.12] bg-obsidian-900/90 shadow-2xl backdrop-blur-2xl text-white p-6 sm:p-8 md:p-10"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2.5 rounded-full bg-white/[0.05] hover:bg-white/[0.12] border border-white/10 text-pearl-300 hover:text-white transition-all cursor-pointer z-20"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Product Image Showcase */}
            <div className="md:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-white/[0.08] bg-obsidian-850/80 p-4 group">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-contain p-2 transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/60 via-transparent to-transparent pointer-events-none" />
                {product.badge && (
                  <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-rosegold-400/20 text-rosegold-200 border border-rosegold-300/30 backdrop-blur-md">
                    <Sparkles className="w-3 h-3 text-rosegold-300" />
                    {product.badge}
                  </span>
                )}
              </div>
            </div>

            {/* Product Info */}
            <div className="md:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2 text-xs uppercase tracking-widest text-rosegold-300 font-medium">
                  <span>{product.category === "skincare" ? "Skincare Botánico" : "Hair Care Profesional"}</span>
                  <span>•</span>
                  <span>{product.volume}</span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl text-white font-medium tracking-tight mb-2">
                  {product.name}
                </h2>
                <p className="text-rosegold-200/90 text-sm font-medium mb-4">{product.subtitle}</p>

                <p className="text-pearl-300 text-sm leading-relaxed mb-6">{product.description}</p>

                {/* Active Ingredients Tag Cloud */}
                <div className="mb-6">
                  <h4 className="text-xs uppercase tracking-wider text-pearl-400 font-semibold mb-2 flex items-center gap-1.5">
                    <Droplets className="w-3.5 h-3.5 text-rosegold-300" />
                    Principios Activos Clave
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {product.activeIngredients.map((ing, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-xs bg-white/[0.04] border border-white/[0.08] text-pearl-200"
                      >
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Benefits List */}
                <div className="mb-6">
                  <h4 className="text-xs uppercase tracking-wider text-pearl-400 font-semibold mb-2 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-botanical-400" />
                    Beneficios Comprobados
                  </h4>
                  <ul className="space-y-1.5 text-xs text-pearl-300">
                    {product.benefits.map((b, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-rosegold-300" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Usage instruction */}
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] mb-6">
                  <p className="text-xs text-pearl-400">
                    <strong className="text-rosegold-300 font-medium">Modo de aplicación:</strong> {product.usage}
                  </p>
                </div>
              </div>

              {/* Price & CTA Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-4 border-t border-white/[0.08]">
                <div>
                  <span className="text-xs text-pearl-400 block uppercase tracking-wider">Precio Exclusivo</span>
                  <span className="font-serif text-2xl sm:text-3xl font-semibold text-white">
                    {formatPrice(product.price)}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={`https://wa.me/5491123923931?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none"
                  >
                    <MagneticButton variant="primary" className="w-full text-xs uppercase tracking-wider py-3 px-6">
                      <MessageCircle className="w-4 h-4 fill-current" />
                      Pedir por WhatsApp
                    </MagneticButton>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

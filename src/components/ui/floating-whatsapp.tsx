"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Sparkles, X } from "lucide-react";

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasDismissedTooltip, setHasDismissedTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end pointer-events-none select-none">
      {/* Floating Prompt Bubble */}
      <AnimatePresence>
        {!hasDismissedTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, delay: 1 }}
            className="pointer-events-auto mb-3 max-w-xs p-3.5 rounded-2xl bg-obsidian-900/90 border border-gold-400/30 shadow-2xl backdrop-blur-xl text-white text-xs flex items-start gap-2.5"
          >
            <div className="p-1.5 rounded-full bg-gold-400/20 text-gold-200 shrink-0">
              <Sparkles className="w-3.5 h-3.5 text-gold-300" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-gold-200">¿Dudas con tu rutina?</p>
              <p className="text-pearl-300 text-[11px] mt-0.5 leading-snug">
                Escribinos por WhatsApp para un diagnóstico botánico gratuito.
              </p>
            </div>
            <button
              onClick={() => setHasDismissedTooltip(true)}
              className="text-pearl-400 hover:text-white p-0.5 cursor-pointer"
              aria-label="Cerrar sugerencia"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main WhatsApp Button */}
      <a
        href="https://wa.me/5491123923931?text=Hola%20Glowgirlsok!%20Quisiera%20asesoramiento%20personalizado"
        target="_blank"
        rel="noopener noreferrer"
        data-cursor
        data-cursor-text="Chat"
        className="pointer-events-auto group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-teal-400 text-white shadow-[0_0_25px_rgba(16,185,129,0.4)] hover:shadow-[0_0_35px_rgba(16,185,129,0.7)] transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
        aria-label="Abrir WhatsApp"
      >
        {/* Soft Pulse Ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400/30 animate-ping pointer-events-none opacity-60" />
        
        {/* Specular Shimmer */}
        <span className="absolute inset-0 rounded-full bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />

        <MessageCircle className="w-7 h-7 fill-current relative z-10" />
      </a>
    </div>
  );
}

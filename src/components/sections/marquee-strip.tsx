"use client";

import React from "react";
import { MARQUEE_ITEMS } from "@/data/products";

export function MarqueeStrip() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="relative w-full py-5 overflow-hidden border-y border-gold-400/15 bg-obsidian-950/80 backdrop-blur-md select-none">
      {/* Side gradient fade masks */}
      <div className="absolute left-0 inset-y-0 w-24 sm:w-36 bg-gradient-to-r from-obsidian-900 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-24 sm:w-36 bg-gradient-to-l from-obsidian-900 to-transparent z-10 pointer-events-none" />

      {/* Marquee Track */}
      <div className="flex w-max animate-marquee items-center gap-12 whitespace-nowrap will-change-transform">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-12">
            <span className="font-serif text-sm sm:text-base font-light tracking-[0.25em] text-gold-200/95 uppercase hover:text-white transition-colors">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400/80 shadow-[0_0_8px_rgba(216,180,74,0.6)]" />
          </div>
        ))}
      </div>
    </div>
  );
}

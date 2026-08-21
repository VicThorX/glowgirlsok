"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function AmbientGlow() {
  const [mounted, setMounted] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rafId = useRef<number | null>(null);

  // Inertial spring for primary rose gold halo
  const springConfig = { damping: 30, stiffness: 85, mass: 0.9 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Secondary ethereal champagne aura with higher lag
  const secondarySpringConfig = { damping: 40, stiffness: 55, mass: 1.3 };
  const secondaryX = useSpring(mouseX, secondarySpringConfig);
  const secondaryY = useSpring(mouseY, secondarySpringConfig);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      mouseX.set(window.innerWidth / 2);
      mouseY.set(window.innerHeight / 2);
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(() => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none">
      {/* Primary Dynamic Luxury Gold Glow Orb (Blur > 120px) */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="absolute w-[680px] h-[680px] rounded-full bg-[radial-gradient(circle,rgba(229,205,117,0.12)_0%,rgba(200,154,37,0.06)_40%,transparent_70%)] blur-[130px] gpu-layer"
      />

      {/* Secondary Dynamic Warm Champagne & Rose Aura (Blur > 140px) */}
      <motion.div
        style={{
          x: secondaryX,
          y: secondaryY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="absolute w-[580px] h-[580px] rounded-full bg-[radial-gradient(circle,rgba(247,240,212,0.10)_0%,rgba(216,180,74,0.04)_45%,transparent_70%)] blur-[150px] gpu-layer"
      />

      {/* Static Atmospheric Anchors */}
      <div className="absolute -top-48 -right-48 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(229,205,117,0.08)_0%,transparent_65%)] blur-[160px] pointer-events-none" />
      <div className="absolute top-[40%] -left-48 w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.04)_0%,transparent_65%)] blur-[160px] pointer-events-none" />
      <div className="absolute bottom-[-15%] right-[-10%] w-[900px] h-[900px] rounded-full bg-[radial-gradient(circle,rgba(216,180,74,0.07)_0%,transparent_65%)] blur-[170px] pointer-events-none" />

      {/* Floating Bioluminescent Micro-Sparkles */}
      {mounted && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/5 w-1 h-1 rounded-full bg-gold-200 opacity-60 animate-float-gentle blur-[0.5px]" />
          <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 rounded-full bg-gold-300 opacity-50 animate-float-delayed blur-[0.5px]" />
          <div className="absolute top-2/3 left-1/3 w-1 h-1 rounded-full bg-white opacity-40 animate-float-gentle blur-[0.5px]" />
          <div className="absolute top-3/4 right-1/5 w-1.5 h-1.5 rounded-full bg-gold-400 opacity-60 animate-float-delayed blur-[0.5px]" />
        </div>
      )}

      {/* Anti-banding Noise Layer (2.5% Opacity) */}
      <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay pointer-events-none" />
    </div>
  );
}

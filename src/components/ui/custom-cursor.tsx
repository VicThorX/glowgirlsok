"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState("");

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // High responsiveness spring for central pearl dot
  const dotSpring = { damping: 28, stiffness: 450, mass: 0.1 };
  const dotX = useSpring(mouseX, dotSpring);
  const dotY = useSpring(mouseY, dotSpring);

  // Fluid elastic trailing aura ring
  const auraSpring = { damping: 24, stiffness: 180, mass: 0.4 };
  const auraX = useSpring(mouseX, auraSpring);
  const auraY = useSpring(mouseY, auraSpring);

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // Check if hovering over interactive element
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest("button, a, input, [data-cursor], .cursor-pointer");
        if (interactive) {
          setIsHovered(true);
          const customText = interactive.getAttribute("data-cursor-text") || "";
          setHoverText(customText);
        } else {
          setIsHovered(false);
          setHoverText("");
        }
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible, mouseX, mouseY]);

  if (!mounted || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden select-none">
      {/* Central Pearl Dot */}
      <motion.div
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className={`fixed top-0 left-0 rounded-full transition-all duration-150 pointer-events-none ${
          isHovered
            ? "w-3 h-3 bg-rosegold-200 shadow-[0_0_15px_rgba(245,194,199,1)]"
            : "w-2.5 h-2.5 bg-pearl-100 shadow-[0_0_10px_rgba(255,255,255,0.9)]"
        }`}
      />

      {/* Trailing Elastic Aura Ring */}
      <motion.div
        style={{
          x: auraX,
          y: auraY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovered ? 64 : 36,
          height: isHovered ? 64 : 36,
          borderColor: isHovered ? "rgba(245, 194, 199, 0.8)" : "rgba(255, 255, 255, 0.4)",
          backgroundColor: isHovered ? "rgba(245, 194, 199, 0.12)" : "rgba(255, 255, 255, 0.03)",
          boxShadow: isHovered ? "0 0 20px rgba(245, 194, 199, 0.3)" : "none",
        }}
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 rounded-full border border-solid backdrop-blur-[1px] flex items-center justify-center pointer-events-none"
      >
        {hoverText && (
          <span className="text-[9px] uppercase tracking-widest text-rosegold-200 font-bold px-1 text-center truncate">
            {hoverText}
          </span>
        )}
      </motion.div>
    </div>
  );
}

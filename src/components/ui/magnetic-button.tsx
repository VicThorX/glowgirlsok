"use client";

import React, { useRef, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "glass";
  strength?: number;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export function MagneticButton({
  children,
  variant = "primary",
  strength = 0.35,
  className,
  onClick,
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = (e.clientX - centerX) * strength;
    const distanceY = (e.clientY - centerY) * strength;

    x.set(distanceX);
    y.set(distanceY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-rosegold-400 via-rosegold-300 to-champagne-300 text-obsidian-950 font-medium shadow-glow-rose hover:shadow-[0_0_35px_rgba(245,194,199,0.5)] border border-white/40",
    secondary:
      "bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/10 hover:border-rosegold-300/40 backdrop-blur-md shadow-glow-subtle",
    ghost:
      "bg-transparent hover:bg-white/[0.04] text-pearl-200 hover:text-white border border-transparent hover:border-white/10",
    glass:
      "bg-obsidian-850/60 hover:bg-obsidian-850/80 text-pearl-100 border border-white/10 hover:border-rosegold-300/50 backdrop-blur-xl shadow-glass-inner",
  };

  return (
    <motion.button
      ref={ref}
      style={{
        x: smoothX,
        y: smoothY,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={cn(
        "relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 select-none overflow-hidden cursor-pointer gpu-layer group",
        variantStyles[variant],
        className
      )}
      {...(props as any)}
    >
      {/* Specular Shimmer Beam */}
      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ease-out pointer-events-none" />

      {/* Button Content */}
      <span className="relative z-10 flex items-center gap-2 transition-transform duration-200 group-hover:scale-[1.02]">
        {children}
      </span>
    </motion.button>
  );
}

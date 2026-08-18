"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface Card3DTiltProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  glareEffect?: boolean;
  perspective?: number;
  onClick?: () => void;
}

export function Card3DTilt({
  children,
  className,
  maxTilt = 12,
  glareEffect = true,
  perspective = 1200,
  onClick,
}: Card3DTiltProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const rotateX = useTransform(smoothY, [0, 1], [maxTilt, -maxTilt]);
  const rotateY = useTransform(smoothX, [0, 1], [-maxTilt, maxTilt]);

  const glareX = useTransform(smoothX, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(smoothY, [0, 1], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const clientX = (e.clientX - rect.left) / rect.width;
    const clientY = (e.clientY - rect.top) / rect.height;

    x.set(clientX);
    y.set(clientY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <div
      ref={ref}
      style={{ perspective: `${perspective}px` }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={cn("relative group cursor-pointer", className)}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="w-full h-full relative transition-shadow duration-500 rounded-3xl will-change-transform"
      >
        {/* Child Content */}
        <div className="relative z-10 w-full h-full [transform:translateZ(20px)]">
          {children}
        </div>

        {/* Specular Reflection Sheen */}
        {glareEffect && (
          <motion.div
            style={{
              opacity: isHovered ? 0.35 : 0,
              background: `radial-gradient(circle 320px at ${glareX} ${glareY}, rgba(255, 255, 255, 0.4) 0%, rgba(245, 194, 199, 0.2) 30%, transparent 80%)`,
            }}
            className="pointer-events-none absolute inset-0 z-20 rounded-3xl transition-opacity duration-300 mix-blend-overlay"
          />
        )}
      </motion.div>
    </div>
  );
}

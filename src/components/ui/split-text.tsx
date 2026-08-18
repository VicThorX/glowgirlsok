"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface SplitTextProps {
  children: string;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  delay?: number;
  staggerDelay?: number;
  highlightWords?: string[];
  highlightClassName?: string;
}

export function SplitText({
  children,
  className,
  tag = "h1",
  delay = 0.2,
  staggerDelay = 0.04,
  highlightWords = [],
  highlightClassName = "italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-rosegold-300 via-rosegold-200 to-champagne-300",
}: SplitTextProps) {
  const words = children.split(" ");

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 36,
      rotateX: -40,
      filter: "blur(6px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1], // Non-linear luxury inertia easing
      },
    },
  };

  const Component = motion[tag] as React.ElementType;

  return (
    <Component
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={cn("inline-block perspective-1000", className)}
    >
      {words.map((word, i) => {
        const cleanWord = word.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ&]/g, "");
        const isHighlighted = highlightWords.some(
          (hw) => hw.toLowerCase() === cleanWord.toLowerCase()
        );

        return (
          <span key={i} className="inline-block overflow-hidden pb-2 mr-[0.25em] last:mr-0 align-bottom">
            <motion.span
              variants={wordVariants}
              className={cn(
                "inline-block gpu-layer",
                isHighlighted ? highlightClassName : "text-white"
              )}
            >
              {word}
            </motion.span>
          </span>
        );
      })}
    </Component>
  );
}

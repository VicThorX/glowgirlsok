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
  highlightClassName = "italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-gold-200 via-gold-300 to-amber-400 pl-[0.06em] pr-[0.25em] inline-block",
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
      y: 28,
      filter: "blur(4px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
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
      className={cn("inline-block overflow-visible", className)}
    >
      {words.map((word, i) => {
        const cleanWord = word.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ&]/g, "");
        const isHighlighted = highlightWords.some(
          (hw) => hw.toLowerCase() === cleanWord.toLowerCase()
        );
        const isFirst = i === 0;
        const isLast = i === words.length - 1;

        return (
          <span
            key={i}
            className={cn(
              "inline-block overflow-visible mr-[0.3em] last:mr-0 align-baseline py-1.5 -my-1.5",
              isFirst && "pl-[0.1em]",
              isLast && "pr-[0.25em]"
            )}
          >
            <motion.span
              variants={wordVariants}
              className={cn(
                "inline-block gpu-layer overflow-visible leading-[1.28] pb-1",
                isHighlighted
                  ? highlightClassName
                  : "text-white px-[0.04em]"
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

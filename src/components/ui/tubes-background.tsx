"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

// Curated Luxury Color Harmonies for Glowgirlsok (Dark & Gold)
export const GLOW_PALETTES = [
  {
    name: "Pure Gold & Champagne",
    tubes: ["#E5CD75", "#D8B44A", "#F7F0D4"],
    lights: ["#D4AF37", "#F7F0D4", "#C89A25", "#FAF6EE"],
  },
  {
    name: "Rose Gold & Pearl",
    tubes: ["#F4D0D6", "#FFB4A2", "#E8D5C4"],
    lights: ["#FFB4A2", "#FDF0D5", "#D9727E", "#E8D5C4"],
  },
  {
    name: "Botanical & Gold",
    tubes: ["#E5CD75", "#34D399", "#FAF6EE"],
    lights: ["#10B981", "#E5CD75", "#059669", "#FDF0D5"],
  },
  {
    name: "Imperial Obsidian",
    tubes: ["#D8B44A", "#B5838D", "#F7F0D4"],
    lights: ["#E5CD75", "#F5C2C7", "#825A12", "#FAF6EE"],
  },
];

interface TubesBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  enableClickInteraction?: boolean;
  opacity?: number;
}

declare global {
  interface Window {
    __initTubesCursor?: (canvas: HTMLCanvasElement, options: any) => any;
  }
}

export function TubesBackground({
  children,
  className,
  enableClickInteraction = true,
  opacity = 0.85,
}: TubesBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [paletteIndex, setPaletteIndex] = useState(0);
  const tubesInstanceRef = useRef<any>(null);

  useEffect(() => {
    let isMounted = true;

    const startTubes = () => {
      if (!canvasRef.current || !window.__initTubesCursor || !isMounted) return;

      try {
        const palette = GLOW_PALETTES[0];
        const app = window.__initTubesCursor(canvasRef.current, {
          tubes: {
            colors: palette.tubes,
            lights: {
              intensity: 180,
              colors: palette.lights,
            },
          },
        });
        tubesInstanceRef.current = app;
      } catch (err) {
        console.warn("Tubes initialization:", err);
      }
    };

    if (window.__initTubesCursor) {
      startTubes();
    } else {
      // Inject native browser ES module script to bypass Next.js bundler rewriting
      const scriptId = "tubes-cursor-module-script";
      let script = document.getElementById(scriptId) as HTMLScriptElement | null;

      if (!script) {
        script = document.createElement("script");
        script.id = scriptId;
        script.type = "module";
        script.textContent = `
          import TubesCursor from 'https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js';
          window.__initTubesCursor = (canvas, options) => TubesCursor(canvas, options);
          window.dispatchEvent(new CustomEvent('tubes-cursor-ready'));
        `;
        document.head.appendChild(script);
      }

      const handleReady = () => {
        startTubes();
      };

      window.addEventListener("tubes-cursor-ready", handleReady);

      return () => {
        isMounted = false;
        window.removeEventListener("tubes-cursor-ready", handleReady);
      };
    }

    return () => {
      isMounted = false;
    };
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    // Only cycle palette if user clicks on background, not on interactive buttons
    const target = e.target as HTMLElement;
    if (target.closest("button, a, input, [data-cursor], .cursor-pointer")) return;

    if (!enableClickInteraction || !tubesInstanceRef.current) return;

    const nextIndex = (paletteIndex + 1) % GLOW_PALETTES.length;
    setPaletteIndex(nextIndex);
    const nextPalette = GLOW_PALETTES[nextIndex];

    try {
      if (tubesInstanceRef.current.tubes?.setColors) {
        tubesInstanceRef.current.tubes.setColors(nextPalette.tubes);
      }
      if (tubesInstanceRef.current.tubes?.setLightsColors) {
        tubesInstanceRef.current.tubes.setLightsColors(nextPalette.lights);
      }
    } catch (err) {
      console.warn("Palette shift error:", err);
    }
  };

  return (
    <div
      className={cn("relative w-full overflow-hidden bg-obsidian-900", className)}
      onClick={handleClick}
    >
      {/* 3D Tubes Cursor Canvas Layer */}
      <canvas
        ref={canvasRef}
        style={{ opacity, touchAction: "none" }}
        className="absolute inset-0 w-full h-full block pointer-events-none mix-blend-screen gpu-layer transition-opacity duration-700 z-0"
      />

      {/* Atmospheric Vignette & Soft Gradient Masks */}
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian-950/50 via-transparent to-obsidian-900/95 pointer-events-none z-1" />

      {/* Content Overlay */}
      <div className="relative z-10 w-full h-full pointer-events-auto">{children}</div>
    </div>
  );
}

export default TubesBackground;

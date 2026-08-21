"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Heart, MessageCircle, ArrowUpRight } from "lucide-react";
import { Card3DTilt } from "@/components/ui/card-3d-tilt";
import { MagneticButton } from "@/components/ui/magnetic-button";

const COMMUNITY_POSTS = [
  {
    image: "/products/tonico-rosas.png",
    caption: "El Tónico de Rosas es el secreto de una piel jugosa antes del maquillaje. Piel fresca todo el día.",
    user: "@martina.glow",
    likes: "1.4k",
    product: "Tónico de Rosas Pura",
  },
  {
    image: "/products/niacinamida-pantenol.png",
    caption: "3 semanas usando Niacinamida + Pantenol y los poros de mis mejillas casi desaparecieron.",
    user: "@sofia.estetica",
    likes: "982",
    product: "Niacinamida + Pantenol",
  },
  {
    image: "/products/shampoo-nutritivo.png",
    caption: "El Matizador Violeta salvó mi rubio del efecto oxidado. Quedó como recién salido del salón.",
    user: "@valen.hair",
    likes: "2.1k",
    product: "Blonde Power Matizador",
  },
  {
    image: "/products/mascarilla-arcilla.png",
    caption: "Intensificador de Rojos: brillo y pigmento intacto después de 5 lavados. Obsesionada.",
    user: "@camila.rojo",
    likes: "840",
    product: "Intensificador de Rojos",
  },
  {
    image: "/products/crema-aloe-vera.png",
    caption: "Textura ligera que no te deja la piel grasosa. El Aloe Vera puro calma cualquier rojez al instante.",
    user: "@lucia.skin",
    likes: "1.2k",
    product: "Crema Facial Aloe Vera",
  },
  {
    image: "/products/acido-hialuronico.png",
    caption: "Efecto relleno inmediato. El ácido hialurónico multicapa es un antes y después en mi rutina nocturna.",
    user: "@julietaskincare",
    likes: "1.7k",
    product: "Ácido Hialurónico Sérum",
  },
];

export function InstagramFeed() {
  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 md:px-12 border-t border-white/[0.06] overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-rosegold-300/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-400/10 border border-gold-400/30 text-gold-200 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              <Sparkles className="w-3 h-3 text-gold-300" />
              Comunidad Glowgirlsok
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-white tracking-tight">
              Resultados Reales en Piel & Cabello
            </h2>
          </div>

          <a
            href="https://instagram.com/glowgirlsok"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor
            data-cursor-text="Instagram"
          >
            <MagneticButton variant="secondary" className="text-xs uppercase tracking-widest py-3 px-6">
              <span>Seguir en @glowgirlsok</span>
              <ArrowUpRight className="w-4 h-4" />
            </MagneticButton>
          </a>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMMUNITY_POSTS.map((post, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <Card3DTilt
                maxTilt={10}
                className="h-full rounded-3xl border border-gold-400/25 bg-gradient-to-b from-obsidian-850/70 to-obsidian-900/90 p-4 backdrop-blur-md hover:border-gold-300/60 hover:shadow-glow-gold-card transition-all duration-500 group"
              >
                {/* Image Container with Inertial Zoom */}
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-obsidian-950/70 border border-gold-400/15 mb-4">
                  <Image
                    src={post.image}
                    alt={post.product}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Top Badge */}
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-obsidian-900/85 backdrop-blur-md text-gold-200 border border-gold-400/30">
                    {post.product}
                  </span>

                  {/* Likes pill */}
                  <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-obsidian-900/85 backdrop-blur-md border border-white/10 text-xs text-white">
                    <Heart className="w-3.5 h-3.5 text-gold-400 fill-current" />
                    <span>{post.likes}</span>
                  </div>
                </div>

                {/* Testimonial Quote & User */}
                <div className="px-2 pb-2">
                  <p className="text-pearl-200 text-xs leading-relaxed italic mb-3">
                    &ldquo;{post.caption}&rdquo;
                  </p>
                  <div className="flex items-center justify-between text-[11px] text-pearl-400">
                    <span className="font-medium text-gold-300">{post.user}</span>
                    <span className="text-pearl-500 uppercase tracking-wider text-[10px]">Cliente Verificada</span>
                  </div>
                </div>
              </Card3DTilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

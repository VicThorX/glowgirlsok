"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Leaf, Shield, HeartHandshake, Compass, Check, ArrowRight } from "lucide-react";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { MagneticButton } from "@/components/ui/magnetic-button";

const PILLARS = [
  {
    icon: Leaf,
    title: "Pureza Botánica Certificada",
    description:
      "Seleccionamos hidrolatos, extractos de rosas damascenas, aloe barbadensis orgánico y aceites esenciales vírgenes que nutren sin agredir el microbioma natural.",
  },
  {
    icon: Shield,
    title: "Biotecnología Dermoestética",
    description:
      "Concentraciones óptimas de Niacinamida, Ácido Hialurónico multicapa y Vitamina C estabilizada con respaldo de compatibilidad cutánea y máxima penetración celular.",
  },
  {
    icon: HeartHandshake,
    title: "Compromiso Ético & Clean",
    description:
      "100% Cruelty Free, sin sulfatos abrasivos ni parabenos, empaques pensados para preservar la bioactividad de cada fórmula y cuidado responsable.",
  },
];

const RITUAL_STEPS = [
  {
    step: "01",
    phase: "Preparar & Purificar",
    name: "Gel Limpiador Suave / Shampoo Neutro",
    description: "Elimina impurezas superficiales sin alterar el manto lipídico protector ni el pH natural.",
    badge: "Paso Fundamental",
  },
  {
    step: "02",
    phase: "Tonificar & Equilibrar",
    name: "Tónico de Rosas Pura",
    description: "Equilibra el pH, revitaliza con hidrolato de rosas y potencia la absorción de los siguientes activos.",
    badge: "Paso Insignia",
  },
  {
    step: "03",
    phase: "Tratar & Transformar",
    name: "Niacinamida + Pantenol o Hialurónico",
    description: "Microgotas de alta penetración que reparan la barrera dérmica y desvanecen imperfecciones.",
    badge: "Alta Concentración",
  },
  {
    step: "04",
    phase: "Sellar & Proteger",
    name: "Crema Facial Aloe Vera / Tratamiento Capilar",
    description: "Capa envolvente que sella la humedad y protege contra la polución y el estrés oxidativo.",
    badge: "Brillo Prolongado",
  },
];

export function Philosophy() {
  return (
    <section id="filosofia" className="relative py-24 sm:py-32 px-4 sm:px-6 md:px-12 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rosegold-400/10 border border-rosegold-300/20 text-rosegold-200 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            <Sparkles className="w-3 h-3 text-rosegold-300" />
            Manifiesto Glow Girls
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-white tracking-tight mb-6">
            La Alquimia entre Naturaleza & Ciencia
          </h2>
          <p className="text-pearl-300 text-sm sm:text-base leading-relaxed">
            No creemos en soluciones mágicas ni en rutinas complejas. Creamos fórmulas inteligentes donde cada ingrediente botánico tiene una función biológica comprobada para realzar tu belleza auténtica.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-28">
          {PILLARS.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <SpotlightCard key={i} className="flex flex-col justify-between p-8">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-rosegold-400/10 border border-rosegold-300/30 flex items-center justify-center text-rosegold-200 mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-medium text-white mb-3">{pillar.title}</h3>
                  <p className="text-pearl-300 text-sm leading-relaxed">{pillar.description}</p>
                </div>
              </SpotlightCard>
            );
          })}
        </div>

        {/* Ritual Section */}
        <div id="rituales" className="relative rounded-3xl border border-white/[0.08] bg-obsidian-850/50 p-8 sm:p-12 md:p-16 backdrop-blur-xl overflow-hidden">
          {/* Subtle Ambient Halo in Card */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-rosegold-300/10 blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Header Info */}
            <div className="lg:col-span-4 flex flex-col items-start">
              <span className="text-xs uppercase tracking-[0.25em] text-rosegold-300 font-semibold mb-2">
                Guía de Aplicación
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-white font-medium tracking-tight mb-4">
                El Ritual Glow en 4 Fases
              </h3>
              <p className="text-pearl-300 text-sm leading-relaxed mb-8">
                Diseñado para maximizar la absorción de los principios activos y brindarte una experiencia sensorial de spa en casa cada mañana y noche.
              </p>

              <a
                href="https://wa.me/5491123923931?text=Hola%20Glow%20Girls!%20Quiero%20asesoramiento%20para%20crear%20mi%20rutina%20personalizada"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MagneticButton variant="primary" className="text-xs uppercase tracking-wider py-3.5 px-6">
                  <span>Asesoría de Rutina</span>
                  <ArrowRight className="w-4 h-4" />
                </MagneticButton>
              </a>
            </div>

            {/* Right Steps Grid */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {RITUAL_STEPS.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.06] hover:border-rosegold-300/30 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-2xl font-light text-rosegold-300/60 group-hover:text-rosegold-200 transition-colors">
                      {item.step}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/[0.04] text-pearl-300 border border-white/[0.08]">
                      {item.badge}
                    </span>
                  </div>
                  <span className="text-xs uppercase tracking-widest text-rosegold-300/80 font-medium block mb-1">
                    {item.phase}
                  </span>
                  <h4 className="font-serif text-lg font-medium text-white mb-2">{item.name}</h4>
                  <p className="text-xs text-pearl-400 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

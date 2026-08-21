"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  CheckCircle2,
  ChevronDown,
  MessageCircle,
  Clock,
  BookOpen,
  ArrowRight,
  HeartHandshake,
  FileText,
  Layers,
  HelpCircle,
} from "lucide-react";
import { COURSES, Course, FormulaCategory } from "@/data/courses";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { formatPrice } from "@/lib/utils";

export function CoursesSection() {
  const course = COURSES[0];
  const [expandedCategoryId, setExpandedCategoryId] = useState<string | null>(
    course.categories[0]?.id || null
  );

  const toggleCategory = (id: string) => {
    setExpandedCategoryId(expandedCategoryId === id ? null : id);
  };

  const whatsappUrl = `https://wa.me/5491123923931?text=${encodeURIComponent(
    course.whatsappMessage
  )}`;

  return (
    <section
      id="cursos"
      className="relative py-20 sm:py-28 md:py-36 px-4 sm:px-6 md:px-12 border-t border-gold-400/15 bg-gradient-to-b from-obsidian-900 via-obsidian-950 to-obsidian-900 overflow-hidden"
    >
      {/* Ambient background glow accents */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-400/8 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-amber-500/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-400/10 border border-gold-400/30 text-gold-200 text-xs font-semibold uppercase tracking-[0.2em] mb-4 shadow-glow-subtle"
          >
            <BookOpen className="w-3.5 h-3.5 text-gold-300" />
            <span>Guías Prácticas · Cosmética Capilar</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight leading-[1.12] mb-5"
          >
            {course.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-pearl-300 text-sm sm:text-base leading-relaxed"
          >
            {course.subtitle}
          </motion.p>
        </div>

        {/* Course Main Showcase Card & Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Course Feature Showcase & Inscription */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <SpotlightCard className="p-6 sm:p-8 border border-gold-400/30 hover:border-gold-300/60 bg-gradient-to-b from-obsidian-850/80 to-obsidian-900/95 shadow-glow-gold-card">
              {/* Banner Image Preview */}
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-obsidian-950 border border-gold-400/20 mb-6 group">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/90 via-obsidian-950/20 to-transparent" />

                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-obsidian-900/85 backdrop-blur-md text-gold-200 border border-gold-400/30">
                    <FileText className="w-3 h-3 text-gold-300" />
                    {course.badge}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-pearl-200">
                  <span className="inline-flex items-center gap-1.5 bg-obsidian-900/80 px-3 py-1 rounded-full border border-white/10 backdrop-blur-md">
                    <Clock className="w-3.5 h-3.5 text-gold-300" />
                    {course.format}
                  </span>
                </div>
              </div>

              {/* Course Title & Price */}
              <div className="mb-5">
                <h3 className="font-serif text-2xl font-medium text-white mb-2 leading-tight">
                  {course.title}
                </h3>
                <p className="text-xs sm:text-sm text-pearl-300 leading-relaxed mb-4">
                  {course.description}
                </p>

                {/* Price Display */}
                <div className="flex items-baseline gap-3 p-4 rounded-2xl bg-gold-400/10 border border-gold-400/25 mb-6">
                  <span className="text-xs uppercase tracking-widest text-gold-300 font-medium">
                    Inversión:
                  </span>
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-white">
                    {formatPrice(course.price)}
                  </span>
                  {course.originalPrice && (
                    <span className="text-sm text-pearl-500 line-through">
                      {formatPrice(course.originalPrice)}
                    </span>
                  )}
                  <span className="ml-auto text-[10px] font-semibold uppercase px-2.5 py-1 rounded-full bg-gold-400/20 text-gold-200 border border-gold-400/30">
                    Acceso Total
                  </span>
                </div>
              </div>

              {/* 1-on-1 Mentorship Highlight Banner */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-gold-500/15 via-gold-400/10 to-amber-500/15 border border-gold-400/40 mb-6 flex items-start gap-3 shadow-glow-subtle">
                <div className="p-2 rounded-xl bg-gold-400/20 text-gold-300 shrink-0 mt-0.5">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-white text-sm font-semibold mb-0.5">
                    {course.keyBenefitTitle}
                  </h4>
                  <p className="text-xs text-pearl-300 leading-relaxed">
                    {course.keyBenefitDescription}
                  </p>
                </div>
              </div>

              {/* What the training includes */}
              <div className="space-y-2.5 mb-8">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-300 block mb-2">
                  Qué incluye la formación:
                </span>
                {course.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-pearl-200">
                    <CheckCircle2 className="w-4 h-4 text-gold-300 shrink-0 mt-0.5" />
                    <span className="leading-snug">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTA Inscription Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block"
              >
                <MagneticButton
                  variant="primary"
                  className="w-full text-xs uppercase tracking-widest py-4 px-6 justify-center"
                >
                  <MessageCircle className="w-4 h-4 text-obsidian-950 fill-current" />
                  <span>Consultar e Inscribirme por WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </MagneticButton>
              </a>
            </SpotlightCard>
          </div>

          {/* Right Column: Practical Formula Categories Accordion */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            <div className="flex items-center justify-between pb-2 border-b border-gold-400/20">
              <div>
                <span className="text-xs uppercase tracking-[0.22em] text-gold-300 font-semibold block">
                  Guías Prácticas y Fórmulas
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium">
                  Categorías de Fórmulas y Productos
                </h3>
              </div>
              <span className="text-xs text-pearl-400 font-mono">
                {course.categories.length} Categorías
              </span>
            </div>

            <p className="text-xs sm:text-sm text-pearl-300 leading-relaxed">
              Haz clic en cada categoría para desplegar el listado completo de fórmulas profesionales, procedimientos y variantes que aprenderás a elaborar:
            </p>

            {/* Formula Categories Accordion */}
            <div className="space-y-3">
              {course.categories.map((cat) => {
                const isExpanded = expandedCategoryId === cat.id;
                return (
                  <div
                    key={cat.id}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isExpanded
                        ? "border-gold-400/50 bg-gradient-to-b from-obsidian-850/90 to-obsidian-900/95 shadow-glow-subtle"
                        : "border-gold-400/20 bg-white/[0.02] hover:bg-white/[0.04] hover:border-gold-400/35"
                    }`}
                  >
                    <button
                      onClick={() => toggleCategory(cat.id)}
                      className="w-full p-5 sm:p-6 flex items-center justify-between text-left cursor-pointer gap-4"
                    >
                      <div className="flex items-center gap-4">
                        <span className="font-mono text-xl sm:text-2xl font-light text-gold-300">
                          {cat.number}
                        </span>
                        <div>
                          <h4 className="font-serif text-base sm:text-lg font-medium text-white group-hover:text-gold-200 transition-colors">
                            {cat.title}
                          </h4>
                          <p className="text-xs text-pearl-400 line-clamp-1 mt-0.5">
                            {cat.summary}
                          </p>
                        </div>
                      </div>
                      <div
                        className={`p-2 rounded-full border border-gold-400/20 text-gold-300 transition-transform duration-300 shrink-0 ${
                          isExpanded ? "rotate-180 bg-gold-400/10" : "bg-white/[0.03]"
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-gold-400/15 space-y-4">
                            {cat.groups.map((group, gIdx) => (
                              <div key={gIdx} className="space-y-2">
                                {group.subtitle && (
                                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gold-300">
                                    <Layers className="w-3.5 h-3.5 text-gold-400" />
                                    {group.subtitle}
                                  </span>
                                )}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                  {group.items.map((item, iIdx) => (
                                    <div
                                      key={iIdx}
                                      className="flex items-start gap-2 p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] text-xs text-pearl-200"
                                    >
                                      <Sparkles className="w-3.5 h-3.5 text-gold-400/80 shrink-0 mt-0.5" />
                                      <span className="leading-snug">{item}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Bottom Support Banner */}
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-gold-400/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-2">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-gold-400/10 text-gold-300 shrink-0">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-serif text-white text-sm font-medium">¿Tenés dudas sobre el curso?</h5>
                  <p className="text-xs text-pearl-400">Escribinos y te asesoramos sobre el temario y la modalidad.</p>
                </div>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 w-full sm:w-auto"
              >
                <MagneticButton variant="secondary" className="w-full sm:w-auto text-xs uppercase tracking-wider py-2.5 px-4">
                  <span>Preguntar por WhatsApp</span>
                </MagneticButton>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

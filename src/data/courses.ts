export interface CourseModule {
  number: string;
  title: string;
  duration: string;
  topics: string[];
}

export interface Course {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  tagline: string;
  description: string;
  image: string;
  price: number;
  originalPrice?: number;
  format: string;
  duration: string;
  keyBenefit: string;
  benefits: string[];
  modules: CourseModule[];
  includes: string[];
  targetAudience: string;
  whatsappMessage: string;
}

export const COURSES: Course[] = [
  {
    id: "capacitacion-cosmetica-botanica",
    title: "Capacitación Virtual en Cosmética Botánica & Skincare Profesional",
    subtitle: "Aprende el arte y la ciencia de formular, diagnosticar y cuidar la piel",
    badge: "Certificación Oficial",
    tagline: "De principiante a formuladora botánica con acompañamiento personalizado",
    description:
      "Una formación 100% online y práctica diseñada para brindarte los conocimientos científicos y botánicos necesarios para comprender la salud dérmica, formular productos botánicos de alta gama y diseñar rutinas personalizadas efectivas.",
    image: "/courses/capacitacion-virtual-banner.jpg",
    price: 48500,
    originalPrice: 65000,
    format: "Online a tu propio ritmo · Acceso 24/7",
    duration: "6 Semanas estimadas (Acceso de por vida)",
    keyBenefit: "Acompañamiento Gratuito y Mentoría 1-a-1 Directa",
    benefits: [
      "Acompañamiento gratuito y seguimiento 1-a-1 por WhatsApp para resolver dudas",
      "Acceso ilimitado y de por vida a todas las clases grabadas y futuras actualizaciones",
      "Material didáctico en PDF, recetarios exclusivos y fichas de diagnóstico",
      "Certificado digital de finalización avalado por Glowgirlsok",
      "Acceso a la comunidad privada de alumnas y red de apoyo",
    ],
    modules: [
      {
        number: "01",
        title: "Fundamentos de la Cosmética Botánica & Dermoestética",
        duration: "Módulo 1",
        topics: [
          "Anatomía y fisiología cutánea: la barrera hidrolipídica",
          "Hidrolatos puros, aguas florales y extractos vírgenes",
          "Identificación de tipos y estados de piel",
          "Filosofía clean: cosmética sin sulfatos ni tóxicos",
        ],
      },
      {
        number: "02",
        title: "Principios Activos Puros & Biotecnología Celular",
        duration: "Módulo 2",
        topics: [
          "Ácido Hialurónico: pesos moleculares y absorción",
          "Niacinamida (B3) y Provitamina B5: reparación dérmica",
          "Vitamina C: estabilidad, antioxidantes y despigmentación",
          "Conservantes naturales certificados y antioxidantes vegetales",
        ],
      },
      {
        number: "03",
        title: "Formulación y Elaboración Práctica Paso a Paso",
        duration: "Módulo 3",
        topics: [
          "Elaboración de tónicos botánicos y brumas faciales",
          "Sérums concentrados acuosos y emulsiones ligeras",
          "Cremas hidratantes y nutritivas: texturas sedosas",
          "Medición y calibración de pH, higiene y esterilización",
        ],
      },
      {
        number: "04",
        title: "Diagnóstico Cutáneo & Diseño de Rutinas a Medida",
        duration: "Módulo 4",
        topics: [
          "Ficha técnica de evaluación facial profesional",
          "Creación de rituales diurnos, nocturnos y de rescate",
          "Tratamiento botánico para rosácea, acné y envejecimiento",
          "Pautas de bioseguridad y test de alergia previo",
        ],
      },
      {
        number: "05",
        title: "Emprendimiento, Packaging & Comercialización",
        duration: "Módulo 5",
        topics: [
          "Costos de producción, márgenes y fijación de precios",
          "Packaging sustentable, envases y preservación",
          "Creación de marca y fotografía de producto",
          "Estrategias de venta en redes sociales y WhatsApp",
        ],
      },
    ],
    includes: [
      "Clases en video HD paso a paso",
      "E-books y recetario descargable en PDF",
      "Soporte directo para consultas",
      "Certificado oficial de asistencia",
    ],
    targetAudience: "Emprendedoras, cosmetólogas, terapeutas holísticas y amantes del cuidado de la piel que buscan profesionalizarse.",
    whatsappMessage: "¡Hola Glowgirlsok! Deseo solicitar información e inscribirme en la Capacitación Virtual con Acompañamiento Gratuito.",
  },
];

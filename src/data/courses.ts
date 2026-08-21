export interface FormulaGroup {
  subtitle?: string;
  items: string[];
}

export interface FormulaCategory {
  id: string;
  number: string;
  title: string;
  summary: string;
  groups: FormulaGroup[];
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
  keyBenefitTitle: string;
  keyBenefitDescription: string;
  benefits: string[];
  categories: FormulaCategory[];
  includes: string[];
  whatsappMessage: string;
}

export const COURSES: Course[] = [
  {
    id: "curso-elaboracion-cosmetica-capilar",
    title: "Curso Completo de Elaboración de Cosmética Capilar",
    subtitle: "Aprende a formular y fabricar tu propia línea de productos capilares profesionales desde cero.",
    badge: "Guías en PDF + Mentoría 1 a 1",
    tagline: "Formación 100% online, flexible y práctica con fórmulas probadas y acompañamiento individual",
    description:
      "Formación 100% online y flexible diseñada para que aprendas a formular y fabricar tu propia línea de productos capilares profesionales desde cero. Incluye guías descargables con fórmulas completas, proporciones exactas y asesoría personalizada directa.",
    image: "/courses/capacitacion-virtual-banner.jpg",
    price: 48500,
    originalPrice: 65000,
    format: "100% Online · A tu propio ritmo",
    duration: "Acceso Permanente sin límite de tiempo",
    keyBenefitTitle: "Asesoría y Mentoría 1 a 1 por WhatsApp",
    keyBenefitDescription: "Acompañamiento personalizado e individual para resolver cualquier duda durante tu proceso de elaboración.",
    benefits: [
      "Material didáctico descargable completo en PDF con fórmulas, proporciones y procedimientos paso a paso.",
      "Asesoría y acompañamiento individual continuo vía WhatsApp.",
      "Acceso permanente y sin límite de tiempo (estudio 100% a tu propio ritmo, sin horarios fijos).",
      "Soporte directo para formulación y consultas técnicas.",
    ],
    categories: [
      {
        id: "shampoos-acondicionadores",
        number: "01",
        title: "Shampoos y Acondicionadores",
        summary: "Fórmulas equilibradas para limpieza y acondicionamiento profesional según necesidad.",
        groups: [
          {
            subtitle: "Línea Shampoos",
            items: [
              "Shampoo Base Profesional",
              "Shampoo Neutro de Limpieza Suave",
              "Shampoo Ácido Post-Color",
              "Shampoo Post-Tratamientos",
              "Shampoo Anticaída Fortalecedor",
              "Shampoo Estimulante del Crecimiento Capilar",
            ],
          },
          {
            subtitle: "Línea Acondicionadores",
            items: [
              "Acondicionador para Todo Tipo de Cabello",
              "Acondicionador Ácido / Post-Color",
              "Acondicionador Multivitamínico Nutritivo",
              "Acondicionador Post-Tratamientos",
              "Acondicionador Anticaída",
              "Acondicionador Anti-Frizz Suavizante",
            ],
          },
        ],
      },
      {
        id: "mascaras-tratamientos",
        number: "02",
        title: "Máscaras y Tratamientos Nutritivos",
        summary: "Tratamientos intensivos, nutrición profunda y sellado cuticular.",
        groups: [
          {
            subtitle: "Baños de Crema & Nutrición",
            items: [
              "Baños de Crema y Nutrición Capilar Específica según tipo de cabello",
              "Tratamientos Reparadores Intensivos",
              "Crema Ácida Selladora de Cutículas",
            ],
          },
          {
            subtitle: "Máscaras Activas Botánicas",
            items: [
              "Máscara Activa de Argán (Brillo y Sedosidad)",
              "Máscara Activa de Lino (Nutrición y Elasticidad)",
              "Máscara Activa de Almendras (Suavidad y Flexibilidad)",
              "Máscara Activa de Ricino (Fuerza y Crecimiento)",
              "Máscara Activa de Coco (Hidratación Profunda)",
              "Máscara Bomba Multivitamínica (Shock Revitalizante)",
            ],
          },
        ],
      },
      {
        id: "finalizadores-brillo-termicos",
        number: "03",
        title: "Finalizadores, Brillo y Protección Térmica",
        summary: "Productos de peinado, control del encrespamiento, luminosidad y protección contra el calor.",
        groups: [
          {
            subtitle: "Peinado & Anti-Frizz",
            items: [
              "Crema para Peinar Modeladora",
              "Loción Desenredante Ultraligera",
              "Spray Anti-Frizz Disciplinante",
              "Acondicionador Bifásico Express",
            ],
          },
          {
            subtitle: "Brillo & Protección",
            items: [
              "Oro Líquido Elixir Capilar",
              "Sérum Reparador de Puntas Selladas",
              "Protector Térmico Anti-Planchita & Secador",
              "Spray de Brillo Capilar Espejo",
            ],
          },
        ],
      },
      {
        id: "alisados-control-frizz",
        number: "04",
        title: "Alisados y Control del Frizz",
        summary: "Líneas de alisado progresivo, laminado y reducción de volumen en múltiples formatos.",
        groups: [
          {
            subtitle: "Línea Anti-Frizz & Cauterización",
            items: [
              "Desvoluminizador Capilar",
              "Cauterizador Molecular",
              "Laminado Capilar",
              "Encerado Térmico",
            ],
          },
          {
            subtitle: "Línea Alisados Profesionales",
            items: [
              "Alisado Plastificado",
              "Alisado Coco y Argán",
              "Alisado Biomolecular",
              "Alisado Efecto Espejo",
              "Alisado Japonés",
              "Alisado Multivitamínico",
              "Bioplastificado Capilar",
              "Alisado Keratínico",
              "Alisado Brillo 3D",
              "Alisado Mota",
            ],
          },
          {
            subtitle: "Formatos de Elaboración",
            items: [
              "Formato Líquido / Spray",
              "Formato Gel de Alta Adherencia",
              "Formato Crema Tradicional",
            ],
          },
        ],
      },
      {
        id: "shocks-botox-matizadores",
        number: "05",
        title: "Shocks, Botox y Matizadores",
        summary: "Tratamientos de relleno capilar, botox regenerativo y neutralización de tonos indeseados.",
        groups: [
          {
            subtitle: "Shocks & Botox Capilar",
            items: [
              "Botox con Ácido Hialurónico Plump",
              "Shock de Botox Restaurador",
              "Shock de Keratina Líquida",
              "Lifting Capilar Antiedad",
            ],
          },
          {
            subtitle: "Línea Matizadores para Rubios & Canas",
            items: [
              "Matizador Violeta (Anti-Amarillo)",
              "Matizador Black (Grisáceos / Platinados)",
              "Matizador Azul (Anti-Cobrizo / Naranja)",
              "Shampoo Matizador Concentrado",
              "Máscara Matizadora Nutritiva",
              "Botox Matizador Restaurador",
            ],
          },
        ],
      },
      {
        id: "barberia-fijacion",
        number: "06",
        title: "Línea Barbería y Fijación",
        summary: "Formulaciones masculinas para cuidado de barba, afeitado y modelado de alta fijación.",
        groups: [
          {
            subtitle: "Cuidado de Barba & Afeitado",
            items: [
              "Shampoo Específico para Barba",
              "Sérum Nutritivo y Acondicionador de Barba",
              "Espuma / Gel de Afeitar Suave",
              "Cera para Bigote y Modelado Fino",
            ],
          },
          {
            subtitle: "Geles & Ceras Modeladoras",
            items: [
              "Ceras Modeladoras Mate y Brillo",
              "Gel Fijador Base Suave",
              "Gel Fijador Fuerte Larga Duración",
              "Gel Fijador Efecto Húmedo (Wet Look)",
            ],
          },
        ],
      },
    ],
    includes: [
      "Guías completas en PDF descargables",
      "Fórmulas y proporciones exactas",
      "Mentoría 1 a 1 por WhatsApp",
      "Acceso permanente de por vida",
    ],
    whatsappMessage: "¡Hola Glowgirlsok! ✨ Deseo solicitar información e inscribirme en el *Curso Completo de Elaboración de Cosmética Capilar* (Guías en PDF + Mentoría 1 a 1 por WhatsApp).",
  },
];

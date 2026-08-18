export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: "skincare" | "haircare" | "rituales";
  badge?: string;
  tagline: string;
  description: string;
  image: string;
  volume: string;
  price: number;
  highlightKey: string;
  activeIngredients: string[];
  benefits: string[];
  usage: string;
  skinHairType: string;
  featuredInBento?: boolean;
  bentoSpan?: "col-span-12 md:col-span-8" | "col-span-12 md:col-span-4" | "col-span-12 md:col-span-6";
}

export const PRODUCTS: Product[] = [
  {
    id: "tonico-rosas",
    name: "Tónico de Rosas",
    subtitle: "Hidrolato Puro de Rosas",
    category: "skincare",
    badge: "Iconic Glow",
    tagline: "El poder natural de las rosas para revitalizar tu piel",
    description:
      "Formulado con hidrolato de rosas 100% puro. Tonifica, hidrata intensamente y restablece el equilibrio del pH cutáneo, dejando un halo de frescura y luminosidad inmediata.",
    image: "/products/tonico-rosas.png",
    volume: "100 ml",
    price: 18500,
    highlightKey: "Hidrolato de Rosas Puro",
    activeIngredients: ["Hidrolato de Rosas Damascena", "Extracto Botánico Calmante", "Agua Termal Purificada"],
    benefits: [
      "Tonifica y refresca para una piel radiante",
      "Equilibra el pH natural del rostro",
      "Aporta hidratación instantánea sin sensación pesada",
      "Prepara la piel para recibir sérums y cremas",
    ],
    usage: "Vaporizar a 15 cm del rostro limpio por la mañana y noche, o a lo largo del día para refrescar.",
    skinHairType: "Todo tipo de piel, ideal para pieles sensibles y deshidratadas",
    featuredInBento: true,
    bentoSpan: "col-span-12 md:col-span-8",
  },
  {
    id: "niacinamida-pantenol",
    name: "Niacinamida + Pantenol",
    subtitle: "Hidratación Pro & Reparación de Barrera",
    category: "skincare",
    badge: "Best Seller",
    tagline: "Fortalece, minimiza poros y calma en profundidad",
    description:
      "Una emulsión sedosa de rápida absorción que restaura la barrera cutánea, reduce visiblemente el aspecto de poros dilatados y calma rojeces gracias a la sinergia de Vitamina B3 y Provitamina B5.",
    image: "/products/niacinamida-pantenol.png",
    volume: "100 ml",
    price: 21900,
    highlightKey: "Niacinamida 5% + Pantenol 2%",
    activeIngredients: ["Niacinamida (Vitamina B3)", "D-Pantenol (Provitamina B5)", "Glicerina Vegetal"],
    benefits: [
      "Refuerza y repara la barrera lipídica",
      "Disminuye poros visibles y líneas finas",
      "Alivia rojeces e irritaciones",
      "Textura ultraligera no comedogénica",
    ],
    usage: "Aplicar 3 a 4 gotas sobre el rostro limpio con suaves masajes ascendentes antes de la crema hidratante.",
    skinHairType: "Pieles con textura irregular, mixtas a grasas o con tendencia a rojeces",
    featuredInBento: true,
    bentoSpan: "col-span-12 md:col-span-4",
  },
  {
    id: "crema-aloe-vera",
    name: "Crema Facial Aloe Vera Pura",
    subtitle: "Hidratación Celular & Calma Botánica",
    category: "skincare",
    badge: "Botánica Pura",
    tagline: "Hidrata profundamente, regenera y calma la piel",
    description:
      "Enriquecida con Aloe Vera de origen orgánico de máxima pureza. Textura ligera de rápida absorción formulada para retener la humedad celular y proteger contra agresiones externas.",
    image: "/products/crema-aloe-vera.png",
    volume: "100 ml",
    price: 19800,
    highlightKey: "Aloe Vera 100% Orgánico",
    activeIngredients: ["Gel concentrado de Aloe Barbadensis", "Vitamina E", "Aceite de Jojoba"],
    benefits: [
      "Hidratación intensa y duradera durante 24 horas",
      "Calma quemaduras leves, irritaciones y tirantez",
      "Favorece la regeneración celular epidérmica",
      "Fórmula libre de parabenos y aceites minerales",
    ],
    usage: "Aplicar por la mañana y por la noche luego del sérum facial distribuyendo de manera uniforme.",
    skinHairType: "Apto para todo tipo de piel, especialmente sensibles o sensibilizadas",
    featuredInBento: true,
    bentoSpan: "col-span-12 md:col-span-4",
  },
  {
    id: "acido-hialuronico",
    name: "Ácido Hialurónico Sérum",
    subtitle: "Hidratación Multicapa & Efecto Relleno",
    category: "skincare",
    badge: "Efecto Plump",
    tagline: "Volumen, elasticidad y tersura desde el interior",
    description:
      "Sérum concentrado con Ácido Hialurónico de alto y bajo peso molecular que penetra múltiples capas dérmicas para retener hasta 1000 veces su peso en agua, alisando líneas de expresión.",
    image: "/products/acido-hialuronico.png",
    volume: "35 ml",
    price: 24500,
    highlightKey: "Doble Peso Molecular",
    activeIngredients: ["Ácido Hialurónico Macro & Micro", "Agua de Rosas", "Péptidos Hidratantes"],
    benefits: [
      "Efecto relleno inmediato y prolongado",
      "Suaviza líneas de expresión y arrugas finas",
      "Recupera la turgencia y tersura juvenil",
      "Absorción inmediata sin residuo pegajoso",
    ],
    usage: "Aplicar 2 a 3 gotas sobre la piel ligeramente humedecida (ideal tras el Tónico de Rosas).",
    skinHairType: "Piel deshidratada, madura o con falta de firmeza",
    featuredInBento: true,
    bentoSpan: "col-span-12 md:col-span-4",
  },
  {
    id: "vitamina-c-despigmentante",
    name: "Vitamina C Despigmentante 10%",
    subtitle: "Sérum Nocturno Antioxidante",
    category: "skincare",
    badge: "Luminosidad Pura",
    tagline: "Unifica el tono, desvanece manchas y reafirma",
    description:
      "Potente fórmula antioxidante al 10% de Vitamina C estabilizada que actúa durante la noche neutralizando radicales libres, estimulando la síntesis de colágeno y devolviendo la luminosidad perdida.",
    image: "/products/serum-vitamina-c.png",
    volume: "35 ml",
    price: 26000,
    highlightKey: "Ácido L-Ascórbico 10%",
    activeIngredients: ["Vitamina C Estabilizada al 10%", "Ácido Ferúlico", "Extracto Cítrico"],
    benefits: [
      "Reduce manchas oscuras e hiperpigmentación",
      "Aporta luminosidad radiante y brillo natural",
      "Protege contra el estrés oxidativo celular",
      "Mejora notablemente la firmeza cutánea",
    ],
    usage: "Aplicar por la noche sobre el rostro limpio. Utilizar protector solar FPS 50+ durante el día.",
    skinHairType: "Piel con manchas solares, tono apagado o signos de fotoenvejecimiento",
    featuredInBento: true,
    bentoSpan: "col-span-12 md:col-span-4",
  },
  {
    id: "contorno-ojos",
    name: "Contorno de Ojos Revitalizante",
    subtitle: "Mirada Fresca, Descansada & Descongestionada",
    category: "skincare",
    badge: "Efecto Despertar",
    tagline: "Reduce bolsas, aclara ojeras y suaviza arrugas periorbitales",
    description:
      "Complejo botánico y péptido con Cafeína pura, Extracto de Té Verde, Aloe Vera y Ácido Hialurónico diseñado específicamente para la piel más fina del contorno ocular.",
    image: "/products/exfoliante-aha.png",
    volume: "30 ml",
    price: 20500,
    highlightKey: "Cafeína + Té Verde + Hialurónico",
    activeIngredients: ["Cafeína Pura", "Extracto Concentrado de Té Verde", "Aloe Vera", "Ácido Hialurónico"],
    benefits: [
      "Descongestiona bolsas y reduce hinchazón matutina",
      "Minimiza la pigmentación de ojeras oscuras",
      "Hidrata profundamente la zona periocular",
      "Aporta efecto refrescante y tensor instantáneo",
    ],
    usage: "Aplicar una gota con el dedo anular dando suaves toquecitos desde el lagrimal hacia las sienes.",
    skinHairType: "Todo tipo de piel, contornos cansados u ojerosos",
    featuredInBento: false,
  },
  {
    id: "matizador-violeta",
    name: "Blonde Power Duo Matizador",
    subtitle: "Shampoo & Crema Matizadora Violeta",
    category: "haircare",
    badge: "Rubios Perfectos",
    tagline: "Neutraliza tonos amarillos y realza un rubio frío y luminoso",
    description:
      "Fórmula profesional de micropigmentos violetas de alta pureza que neutraliza de forma inmediata los reflejos cobrizos y amarillos indeseados en cabellos rubios, platinados, con mechas o canas.",
    image: "/products/shampoo-nutritivo.png",
    volume: "500 ml / 300 g",
    price: 32000,
    highlightKey: "Pigmentos Violetas Ultra-Puros",
    activeIngredients: ["Pigmentos Violetas Concentrados", "Aceite de Argán", "Proteína de Seda Hidrolizada"],
    benefits: [
      "Neutraliza tonos amarillos desde la primera aplicación",
      "Aporta brillo espejo y suavidad sedosa",
      "Protege la cutícula contra la sequedad del decolorado",
      "Fórmula profesional sin sulfatos agresivos",
    ],
    usage: "Lavar con shampoo matizador, dejar actuar 3 a 5 minutos, enjuagar y aplicar crema matizadora.",
    skinHairType: "Cabellos rubios, platinados, balayage, decolorados o con canas",
    featuredInBento: true,
    bentoSpan: "col-span-12 md:col-span-6",
  },
  {
    id: "intensificador-rojos",
    name: "Intensificador de Rojos & Cobrizos",
    subtitle: "Tratamiento de Color, Brillo & Protección",
    category: "haircare",
    badge: "Fuego & Brillo",
    tagline: "Rojo más vivo, más brillo, más vos",
    description:
      "Tratamiento intensivo con pigmentos bio-activos que revitaliza y prolonga el color en melenas rojizas, borgoñas y cobrizas, previniendo el deslave prematuro y sellando la fibra capilar.",
    image: "/products/mascarilla-arcilla.png",
    volume: "500 ml",
    price: 28500,
    highlightKey: "Pigmentos Bio-Rojos + Filtro UV",
    activeIngredients: ["Complejo de Pigmentos Rubí", "Filtro UV Capilar", "Manteca de Karité"],
    benefits: [
      "Revive e intensifica el color en minutos",
      "Máximo brillo y sellado de cutículas",
      "Prolonga la duración del tinte entre visitas al salón",
      "Sin sal ni parabenos nocivos",
    ],
    usage: "Aplicar de medios a puntas sobre el cabello húmedo, dejar actuar 5 a 10 min y enjuagar abundantemente.",
    skinHairType: "Cabellos teñidos de rojo, caoba, cobrizo o fantasía cálido",
    featuredInBento: true,
    bentoSpan: "col-span-12 md:col-span-6",
  },
  {
    id: "shampoo-neutro",
    name: "Shampoo Neutro Limpieza Suave",
    subtitle: "pH Neutro & Equilibrio Natural",
    category: "haircare",
    badge: "Clean Routine",
    tagline: "Limpieza profunda que respeta el cuero cabelludo",
    description:
      "Formulado con pH neutro equilibrado para remover impurezas, residuos de productos y exceso de oleosidad sin resecar la fibra capilar ni agredir el microbioma del cuero cabelludo.",
    image: "/products/gel-limpiador-facial.png",
    volume: "500 ml",
    price: 18000,
    highlightKey: "Fórmula Sin Sal ni Sulfatos",
    activeIngredients: ["Tensioactivos Vegetales Suaves", "Extracto Botánico de Manzanilla", "Pantenol"],
    benefits: [
      "Limpia en profundidad respetando los lípidos naturales",
      "Prepara el cabello para absorber tratamientos intensivos",
      "Apto para uso diario y cueros cabelludos sensibles",
      "Aporta ligereza, movimiento y soltura",
    ],
    usage: "Masajear sobre el cuero cabelludo húmedo hasta generar una espuma delicada. Enjuagar con agua templada.",
    skinHairType: "Todo tipo de cabello, ideal pre-tratamiento o para cuero cabelludo sensible",
    featuredInBento: false,
  },
];

export const BRAND_STATS = [
  { value: "100%", label: "Fórmulas Botánicas Puras", sub: "Libre de parabenos & sulfatos agresivos" },
  { value: "+18.500", label: "Pieles Transformadas", sub: "Comunidad Glow Girls en todo el país" },
  { value: "0%", label: "Crueldad Animal", sub: "Certificación 100% Cruelty-Free & Ética" },
  { value: "24-48h", label: "Envíos Express", sub: "Despachos protegidos a toda Argentina" },
];

export const MARQUEE_ITEMS = [
  "✦ FÓRMULAS BOTÁNICAS LIMPIAS",
  "✦ BIOTECNOLOGÍA DERMOESTÉTICA",
  "✦ CRUELTY FREE & VEGAN FORMULAS",
  "✦ EXTRACTOS VEGETALES DE ALTA PUREZA",
  "✦ SENSORIALIDAD Y LUJO CONTEMPORÁNEO",
  "✦ GLOW REAL PARA PIEL & CABELLO",
  "✦ DERMATOLÓGICAMENTE TESTEADO",
];

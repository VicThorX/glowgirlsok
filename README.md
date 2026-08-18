# ✨ Glow Girls — Flagship Web Experience

> **La alquimia de una piel radiante y eterna.**  
> Tienda insignia interactiva desarrollada con estándares de diseño galardonados (*Awwwards Tier*), rendimiento optimizado y estética *Dark Luxury*.

---

## 🌟 Visión del Proyecto

**Glow Girls (Glowgirlsok)** es una marca de cosmética botánica pura y biotecnología dermoestética orientada al cuidado facial y capilar de alta gama. Esta aplicación web representa su experiencia insignia de aterrizaje digital, combinando microinteracciones de alta fidelidad, animaciones aceleradas por GPU y un flujo directo de atención y compra mediante WhatsApp.

---

## 💎 Características Principales

1. **Interactive Ambient Background:**
   - Halos radiales *Rose Gold* y *Champagne* con inercia física de muelle (`framer-motion`) que reaccionan a la posición del cursor.
   - Capa de grano/ruido SVG en modo `mix-blend-overlay` para eliminar el *color banding* en pantallas de alto rango dinámico.

2. **Floating Editorial Navigation:**
   - Barra de navegación cápsula con `backdrop-blur-2xl` y borde tenue perla.
   - Indicador de stock en tiempo real y menú interactivo adaptado para dispositivos móviles.

3. **High-End Hero Section:**
   - Titular con revelación cinemática *Split-Text* y curvas no lineales de desaceleración `[0.16, 1, 0.3, 1]`.
   - Badge flotante con efecto *pulse* y microresplandor.
   - Showcase visual 3D interactivo con tilt giroscópico/sensible al mouse y reflejo especular en tiempo real.
   - Botón CTA principal con atracción magnética al cursor.

4. **Bento Grid de Colecciones:**
   - Tarjetas asimétricas de producto con efecto *spotlight* dinámico.
   - Filtros instantáneos entre **Skincare Facial** y **Hair Care Profesional**.
   - Integración de los activos visuales reales de la marca.

5. **Quick View & Pedido Directo:**
   - Ficha modal de producto con desglose de principios activos, beneficios clínicos y modo de aplicación.
   - Generación automática de enlace a WhatsApp con mensaje pre-cargado contextualizado.

6. **Filosofía & Ritual Glow en 4 Fases:**
   - Explicación guiada de rutina: *1. Preparar & Purificar*, *2. Tonificar & Equilibrar*, *3. Tratar & Transformar*, *4. Sellar & Proteger*.

---

## 🛠️ Stack Tecnológico

- **Framework:** [Next.js](https://nextjs.org/) (App Router, React 19, TypeScript).
- **Estilos & Diseño:** [Tailwind CSS](https://tailwindcss.com/) con paleta personalizada (*Obsidian 900/950, Rose Gold, Champagne Glow, Pearl White*).
- **Animaciones:** [Framer Motion](https://www.framer.com/motion/) & [GSAP](https://greensock.com/).
- **Iconografía:** [Lucide React](https://lucide.dev/).
- **Tipografía:** [Google Fonts](https://fonts.google.com/) (`Cormorant Garamond` para titulares editoriales y `Plus Jakarta Sans` para UI).

---

## 📂 Estructura del Repositorio

```
glowgirlsok/
├── public/
│   ├── brand/               # Logotipos y emblemas de marca
│   └── products/            # Activos fotográficos optimizados
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout con SEO, tipografía y Ambient Glow
│   │   ├── page.tsx         # Página principal orquestadora
│   │   └── globals.css      # Directivas de Tailwind, capas de ruido y GPU
│   ├── components/
│   │   ├── ui/
│   │   │   ├── ambient-glow.tsx     # Halos reactivos y capa de textura
│   │   │   ├── magnetic-button.tsx  # Botones con física magnética
│   │   │   ├── split-text.tsx       # Revelación de tipografía cinemática
│   │   │   ├── card-3d-tilt.tsx     # Tarjetas 3D con perspectiva y brillo
│   │   │   ├── spotlight-card.tsx   # Tarjetas con iluminación spotlight
│   │   │   └── product-modal.tsx    # Modal de detalle y pedido por WhatsApp
│   │   └── sections/
│   │       ├── navbar.tsx           # Navegación flotante
│   │       ├── hero.tsx             # Sección Hero con showcase 3D
│   │       ├── marquee-strip.tsx    # Cinta infinita de manifiesto Clean Beauty
│   │       ├── bento-grid.tsx       # Bento Grid de colecciones
│   │       ├── philosophy.tsx       # Filosofía botánica y ritual de 4 fases
│   │       └── footer.tsx           # Footer editorial
│   ├── data/
│   │   └── products.ts      # Catálogo de productos, ingredientes y precios
│   └── lib/
│       └── utils.ts         # Funciones helper cn() y formato de moneda
├── .gitignore
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🚀 Instalación y Uso Local

### 1. Clonar el repositorio
```bash
git clone https://github.com/VicThorX/glowgirlsok.git
cd glowgirlsok
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Iniciar el entorno de desarrollo
```bash
npm run dev
```
La aplicación estará disponible en `http://localhost:3000`.

### 4. Compilar para producción
```bash
npm run build
npm run start
```

---

## 📱 Canales Oficiales

- **WhatsApp Oficial:** [+54 9 11 2392-3931](https://wa.me/5491123923931)
- **Instagram:** [@glowgirlsok](https://instagram.com/glowgirlsok)

---

## 📄 Licencia

Desarrollado con dedicación para **Glow Girls**. Todos los derechos reservados.

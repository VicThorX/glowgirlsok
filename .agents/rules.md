# Guidelines de Desarrollo Creative Frontend (Awwwards / Agency Tier)

1. **Principios de Animación:**
   - Usar exclusivamente transformaciones aceleradas por GPU (`transform: translate3d/scale/rotate` y `opacity`).
   - Easing estándar no lineal: `[0.16, 1, 0.3, 1]` para movimientos con peso/inercia.
   - En GSAP o listeners nativos, siempre incluir función de retorno/cleanup para evitar memory leaks.

2. **Tokens y Acabado Visual:**
   - Tema oscuro refinado: fondo base `#07090E` o `#0B0F17`.
   - Bordes y superficies: `border border-white/[0.08]` y fondos semitransparentes `bg-white/[0.02] backdrop-blur-md`.
   - Tipografía: escalas fluidas con `clamp()`, tracking ajustado (`tracking-tight`).

3. **Arquitectura:**
   - Modularizar componentes en `src/components/ui/` (microcomponentes) y `src/components/sections/` (pantallas/secciones).
   - Manejo seguro de SSR: agregar `'use client'` en componentes que manejen eventos de cursor o hooks de viewport.
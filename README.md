# Kietel Revenue

Sitio web de la consultora hotelera **Kietel Revenue**, construido con **Next.js 15 (App Router) + React + TypeScript**, conservando el sistema de diseño original (blanco · negro cálido · azul, tipografía Playfair Display) y todos sus efectos.

## Arrancar en local

```bash
npm install
npm run dev          # http://localhost:3000  (usa otro puerto si está ocupado: PORT=3100 npm run dev)
```

Producción:

```bash
npm run build
npm start
```

## Estructura

```
app/
  layout.tsx        Metadata SEO, Open Graph, JSON-LD (ProfessionalService), fuente Playfair, <Interactions/>
  page.tsx          Composición de todas las secciones
  globals.css       Sistema de diseño completo (tokens, componentes, responsive)
components/
  Header.tsx        Cabecera fija + drawer móvil (client)
  Hero.tsx          Portada con next/image + Sparkles
  Sparkles.tsx      Partículas en canvas (client)
  Offers.tsx        "Lo que ofrecemos" (3 servicios)
  Metrics.tsx       Cifras con contador animado
  Logos.tsx         Tira de logos
  Method.tsx        Metodología (4 pasos)
  Segments.tsx      Segmentos de cliente
  Objections.tsx    "¿Por qué externalizar?"
  Collab.tsx        Modelos de colaboración
  Cases.tsx         Marquee infinito de casos de éxito
  Testimonials.tsx  Columnas verticales animadas
  Lamp.tsx          Sección CEO con efecto spotlight (se enciende al entrar en viewport)
  Blog.tsx          Artículos
  Faq.tsx           Acordeón de preguntas (client)
  FinalCta.tsx      Llamada final + formulario
  ContactForm.tsx   Formulario con validación (client)
  Footer.tsx        Pie de página
  Interactions.tsx  Isla cliente: scroll-reveal, contadores, spotlight, scroll suave (Lenis)
  icons.tsx         Iconos SVG reutilizables
public/images/      Imágenes (hero-sunset.jpg)
```

## Efectos preservados

- Partículas flotantes (canvas) en la portada
- Scroll reveals con retardos escalonados
- Contadores animados al entrar en viewport
- Marquee infinito de casos · columnas de testimonios animadas (pausan al pasar el ratón)
- Efecto "lamp/spotlight" en la sección del CEO
- Acordeón FAQ, validación de formulario, scroll suave (Lenis)
- Respeta `prefers-reduced-motion` en todos los casos

## Imágenes

Las tarjetas de hoteles, blog y la foto del CEO usan placeholders (o la imagen del hero) a la espera
de fotos reales. Para sustituirlas, coloca los archivos en `public/images/` y actualiza el `src`
del componente correspondiente.

## El prototipo original

Los archivos `Aurum Hotel Consulting*.html`, `assets/` y `uploads/` se conservan como referencia de
diseño y no forman parte de la app Next.js (puedes borrarlos cuando ya no los necesites).

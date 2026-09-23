# AIgentic Bolivianotech — Landing

Inteligencia con raíces.

Landing en Next.js + Tailwind con efectos de [Magic UI](https://magicui.design) (degradé animado, partículas, marquee de logos, blur-fade y shimmer button), siguiendo el estándar de marca monocromático.

**Sitio:** https://bolivianotech.github.io/aigentic-bolivianotech/

## Desarrollo local

```bash
npm install
npm run dev        # http://localhost:3000
```

## Despliegue

Cada push a `main` compila el sitio como HTML estático (`output: "export"`) y lo publica en GitHub Pages mediante `.github/workflows/deploy.yml`. No requiere servidor.

## Dónde editar

- Textos y secciones: `src/app/page.tsx`
- Enlace de contacto: constante `CONTACTO_URL` en `src/app/page.tsx`
- Logos del marquee: `src/components/landing/logo-marquee.tsx`
- Colores y animaciones: `src/app/globals.css`

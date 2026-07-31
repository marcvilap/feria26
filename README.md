# Feria de Málaga 2026 — COPE Málaga

Revista digital de la Feria de Málaga. Sitio estático hecho con Astro 4 + Tailwind.

## Comandos

```bash
npm install
npm run dev        # servidor local en :4321
npm run build      # compila a dist/
npm run preview    # sirve lo compilado
npm run check      # diagnósticos de TypeScript y Astro
npm run videos     # reencoda los vídeos y extrae sus portadas (requiere ffmpeg)
npm run format     # prettier
```

## Estructura

Cada sección es una página en `src/pages/`. El contenido editorial vive en
`src/utils/data-*.ts`, no dentro de las páginas. `src/layouts/Layout.astro` monta
la cabecera, la navegación, el pie, el menú y los scripts de terceros (Didomi,
GTM y comScore).

## Publicidad

Los 89 huecos publicitarios están numerados y documentados en
[PUBLICIDAD.md](PUBLICIDAD.md). Mientras `showAds` siga a `false` en
`src/utils/config.ts`, cada hueco se pinta en pantalla con su número para que el
equipo comercial pueda localizarlo.

## Antes de publicar

- Sustituir las creatividades de `src/assets/images/ads/` y `src/assets/videos/ads/`,
  que todavía son las de 2024, y poner `showAds = true`.
- Comprobar las reglas de Firestore de la colección `votos-2026`, que usa la
  página de votaciones de la Biznaga de Plata.
- Revisar el contenido pendiente de entrega por parte del cliente.

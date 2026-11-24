# Desarrollo de la web

Requisitos: Node 22.12+ y npm; Python 3 para verificar enlaces.

```sh
npm install
npm test
npm run dev
npm run build
npm run check:links
npx playwright install chromium
npm run test:web
```

La raíz de producción es /Java-Mastery-Notes/. Starlight aporta búsqueda Pagefind, navegación, modo claro/oscuro y resaltado de código. El índice de búsqueda se genera en la compilación.

## Añadir contenido

- Los Markdown de docs/ y ejercicios/ son fuentes del repositorio histórico.
- Los apuntes de cada clase viven en web-content/clases/apuntes/dia-NN.md; las fichas breves en web-content/clases/dia-NN.md.
- Añade ambos archivos al índice web-content/clases/README.md y relaciona los temas pertinentes. El generador enlaza cada ficha con su apunte completo si existe.
- Para páginas con interacción, usa MDX en web-content/ y componentes Astro reutilizables de src/components/. Los MDX ya incluyen frontmatter y usan enlaces web bajo /Java-Mastery-Notes/.
- No editar src/content/docs ni dist: se regeneran. La generación traduce enlaces Markdown a URLs web.
- Mantener Java y recursos originales. Las fuentes, advertencias y ampliaciones deben ser explícitas.

## Publicar

La rama web-migration permite revisar la migración sin cambiar main. GitHub Actions ejecuta pruebas unitarias, build, comprobación de rutas y pruebas en Chromium, y guarda dist como artefacto. La comprobación incluye enlaces internos y anclas. El entorno de navegador utiliza Ubuntu 24.04 para mantener compatibilidad con Playwright.

Tras aprobar y fusionar la rama, seleccionar Settings > Pages > Source: GitHub Actions. Ejecutar manualmente Publish Java Mastery Notes en main. Este workflow no publica desde ramas de desarrollo.

# Migración de Java Mastery Notes a web

**Objetivo:** convertir los Markdown existentes en páginas estáticas enlazadas sin perder el material original.

**Arquitectura:** Astro + Starlight, generación desde Markdown, CSS común, Pagefind integrado; sin servidor ni base de datos.

**Fases**
- [x] Inventariar el repositorio y crear rama web-migration.
- [ ] Configurar generación de contenidos y navegación; validar rutas y enlaces con pruebas.
- [ ] Incorporar índices de clases 2–10 y nuevas lecciones sobre colecciones, diferenciando procedencia.
- [ ] Consolidar los apuntes completos del proyecto y los ejercicios sin duplicarlos.
- [ ] Ejecutar pruebas, compilación y revisión de navegador; corregir errores.
- [ ] Preparar CI y despliegue de Pages; aprobar integración antes de publicar.

**Criterios:** rutas estables bajo /Java-Mastery-Notes/, páginas buscables, código existente intacto, diseño responsive, fuentes explícitas y mantenimiento documentado.

# Migración de Java Mastery Notes a web

**Objetivo:** convertir los Markdown existentes en páginas estáticas enlazadas sin perder el material original.

**Arquitectura:** Astro + Starlight, generación desde Markdown, CSS común, Pagefind integrado; sin servidor ni base de datos.

**Fases**
- [x] Inventariar el repositorio y crear rama web-migration.
- [x] Configurar generación de contenidos y navegación; pruebas unitarias de rutas y enlaces.
- [x] Incorporar índices de clases 2–10 y nuevas lecciones sobre colecciones, diferenciando procedencia.
- [x] Incorporar los nueve apuntes completos, la guía integrada y los ejercicios históricos. La guía se conserva como documento de referencia y se identifica su solapamiento.
- [ ] Ejecutar pruebas completas, compilación, verificador de rutas y navegador; corregir errores.
- [x] Preparar CI y workflow de despliegue manual limitado a main.
- [ ] Aprobar integración antes de publicar.

**Criterios:** rutas estables bajo /Java-Mastery-Notes/, páginas buscables, código existente intacto, diseño responsive, fuentes explícitas y mantenimiento documentado.

**Decisiones:** anonimizar identificadores conocidos de las notas; no publicar transcripciones o libros. Conservar guía integrada completa aunque se solape. El laboratorio usa componentes Astro y pruebas de navegador; el progreso persistente se reserva para una fase posterior.

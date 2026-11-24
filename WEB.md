# Desarrollo de la web

Requisitos: Node 22.12+ y npm.

```sh
npm install
npm test
npm run dev
npm run build
npm run preview
```

La raíz de producción será /Java-Mastery-Notes/. Starlight aporta búsqueda Pagefind, navegación, modo claro/oscuro y resaltado de código. El índice de búsqueda se genera en la compilación.

**Añadir contenido:** editar Markdown en docs/, ejercicios/ o web-content/; incluir un H1 y usar enlaces relativos a los archivos fuente. No editar src/content/docs ni dist. La generación traduce los enlaces Markdown internos a las URLs públicas. Los archivos Java y recursos originales siguen en GitHub.

**Estado:** primera fase de migración. La rama main no se cambia. Para publicar, primero verificar el build; configurar Settings > Pages > Source: GitHub Actions y añadir un flujo que despliegue dist únicamente desde main después de aprobación. 

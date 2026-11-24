import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { readdirSync } from 'node:fs';
const groups = [
  'Entorno y fundamentos','Variables y tipos','Entrada y salida',
  'Operadores','Cadenas y caracteres','Condicionales','Bucles',
  'Lógica de programación','Sistemas de numeración','Arrays',
  'Git y buenas prácticas','Mapas'
];
const directories = readdirSync(new URL('./docs/', import.meta.url), {withFileTypes:true})
  .filter(entry => entry.isDirectory() && /^\d{2}-/.test(entry.name))
  .map(entry => entry.name).sort();
export default defineConfig({
  site: 'https://angelmzdev.github.io',
  base: '/Java-Mastery-Notes/',
  integrations: [starlight({
    title: 'Java Mastery Notes',
    defaultLocale: 'root',
    locales: { root: { label: 'Español', lang: 'es' } },
    customCss: ['./src/styles/study.css'],
    components: { ThemeSelect: './src/components/ThemeSelect.astro' },
    head: [
      // Aplica la paleta guardada antes de pintar, para evitar parpadeos.
      { tag: 'script', content: "try{document.documentElement.dataset.palette=localStorage.getItem('palette')||'papel'}catch{}" },
      { tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' } },
      { tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' } },
      { tag: 'link', attrs: { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap' } },
    ],
    social: [{icon:'github',label:'GitHub',href:'https://github.com/AngelmzDev/Java-Mastery-Notes'}],
    sidebar: [
      {label:'Inicio',link:'/'},
      {label:'Temario',items:directories.map((directory,i)=>({
        label: groups[i] || directory.replace(/^\d+-/,'').replaceAll('-',' '),
        collapsed:true,autogenerate:{directory:'temario/'+directory}
      }))},
      {label:'Apuntes por clase',autogenerate:{directory:'clases'}},
      {label:'Laboratorio de lógica',autogenerate:{directory:'laboratorio'}},
      {label:'Mi progreso',slug:'progreso'},
      {label:'Colecciones y streams',autogenerate:{directory:'colecciones'}},
      {label:'Ejercicios',collapsed:true,autogenerate:{directory:'ejercicios'}},
      {label:'Referencia y procedencia',collapsed:true,autogenerate:{directory:'referencia'}},
      {label:'Material visual',collapsed:true,autogenerate:{directory:'material'}}
    ],
  })]
});

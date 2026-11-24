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
    social: [{icon:'github',label:'GitHub',href:'https://github.com/AngelmzDev/Java-Mastery-Notes'}],
    sidebar: [
      {label:'Inicio',link:'/'},
      {label:'Temario',items:directories.map((directory,i)=>({
        label: groups[i] || directory.replace(/^\d+-/,'').replaceAll('-',' '),
        collapsed:true,autogenerate:{directory:'temario/'+directory}
      }))},
      {label:'Apuntes por clase',autogenerate:{directory:'clases'}},
      {label:'Colecciones y streams',autogenerate:{directory:'colecciones'}},
      {label:'Ejercicios',collapsed:true,autogenerate:{directory:'ejercicios'}},
      {label:'Referencia y procedencia',collapsed:true,autogenerate:{directory:'referencia'}},
      {label:'Material visual',collapsed:true,autogenerate:{directory:'material'}}
    ],
  })]
});

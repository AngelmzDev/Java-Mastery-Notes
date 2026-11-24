import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkStringify from 'remark-stringify';
import remarkGfm from 'remark-gfm';
import { visit } from 'unist-util-visit';

const root = fileURLToPath(new URL('../', import.meta.url));
const base = '/Java-Mastery-Notes/';
const repository = 'https://github.com/AngelmzDev/Java-Mastery-Notes/blob/main/';
const processor = unified().use(remarkParse).use(remarkGfm).use(remarkStringify);
const posix = path.posix;
const markdown = /\.mdx?$/i;

export function routeFor(file) {
  const name = file.replace(/\\/g, '/');
  if (name === 'README.md' || name === 'web-content/inicio.mdx') return 'index';
  if (name === 'WEB.md') return 'referencia/desarrollo-web';
  let route = name
    .replace(/^docs\/(\d{2}-[^/]+)\//, 'temario/$1/')
    .replace(/^docs\//, 'referencia/')
    .replace(/^web-content\//, '')
    .replace(/^(00-Conceptos-Base|01-Control-de-Flujo)\//, 'material/$1/');
  route = route.replace(/(^|\/)readme\.md$/i, '$1index').replace(/\.mdx?$/i,'').toLowerCase();
  return route;
}

export function pageUrl(route) {
  return base + route.replace(/(^|\/)index$/, '$1').replace(/\/$/, '') + (route === 'index' ? '' : '/');
}

export function rewriteUrl(url, source, routes, image = false) {
  if (!url || /^(?:[a-z][a-z0-9+.-]*:|\/|#)/i.test(url)) return url;
  const match = url.match(/^([^?#]+)(.*)$/);
  if (!match) return url;
  let decoded;
  try { decoded = decodeURIComponent(match[1]); } catch { return url; }
  const target = posix.normalize(posix.join(posix.dirname(source), decoded));
  if (target.startsWith('../')) return url;
  if (routes.has(target)) return pageUrl(routes.get(target)) + match[2];
  const encoded = target.split('/').map(encodeURIComponent).join('/');
  if (image) return 'https://raw.githubusercontent.com/AngelmzDev/Java-Mastery-Notes/main/' + encoded + match[2];
  return repository + encoded + match[2];
}

async function walk(dir) {
  const entries = await fs.readdir(path.join(root,dir),{withFileTypes:true});
  const results = await Promise.all(entries.sort((a,b)=>a.name.localeCompare(b.name)).map(e =>
    e.isDirectory() ? walk(posix.join(dir,e.name)) : [posix.join(dir,e.name)]));
  return results.flat();
}
function titleText(node) {
  if (node.type==='text' || node.type==='inlineCode') return node.value;
  return (node.children || []).map(titleText).join('');
}
export function convert(source, text, routes) {
  const tree = processor.parse(text);
  const h1 = tree.children.find(n=>n.type==='heading' && n.depth===1);
  const title = h1 ? titleText(h1) : posix.basename(source,'.md');
  if (h1) tree.children.splice(tree.children.indexOf(h1),1);
  // Imported class notes use H1 for numbered sections. Starlight supplies the page H1.
  if (tree.children.some(n=>n.type==='heading' && n.depth===1)) {
    visit(tree,'heading',n=>{ n.depth=Math.min(6,n.depth+1); });
  }
  visit(tree,['link','image','definition'],node=>{
    node.url = rewriteUrl(node.url,source,routes,node.type==='image');
  });
  // Preserve existing explanations. The old repo's attribution remains intact.
  const provenance = source.startsWith('web-content/') ? '' :
    '\n> **Procedencia:** material del repositorio anterior. Consulta sus notas de alcance; no se atribuye automáticamente al profesor.\n';
  const day = source.match(/^web-content\/clases\/dia-(\d{2})\.md$/);
  const full = day && routes.get('web-content/clases/apuntes/dia-'+day[1]+'.md');
  const related = full ? '\n[Leer apuntes completos de esta clase]('+pageUrl(full)+')\n' : '';
  const home = source === 'README.md' ? '\n## Rutas de estudio por clase\n\n- [Apuntes de los días 2–10]('+base+'clases/)\n- [Colecciones y streams]('+base+'colecciones/)\n- [Laboratorio de lógica interactivo]('+base+'laboratorio/trazas/)\n' : ''; 
  return '---\ntitle: '+JSON.stringify(title)+'\n---\n'+home+related+provenance+'\n'+processor.stringify(tree);
}
async function main() {
  const inputs = ['README.md','WEB.md',...(await Promise.all(['docs','ejercicios','00-Conceptos-Base','01-Control-de-Flujo','web-content'].map(walk))).flat()]
    .filter(p=>markdown.test(p) && !p.startsWith('docs/superpowers/') && !p.startsWith('docs/branding/'));
  const routes=new Map(inputs.map(p=>[p,routeFor(p)]));
  const published=inputs.includes('web-content/inicio.mdx') ? inputs.filter(p=>p!=='README.md') : inputs;
  if(new Set(published.map(p=>routes.get(p))).size!==published.length) throw Error('Rutas duplicadas');
  const output=path.join(root,'src/content/docs');
  await fs.rm(output,{recursive:true,force:true});
  for(const source of published) {
    const route=routes.get(source);
    const extension=source.endsWith('.mdx') ? '.mdx' : '.md';
    const target=path.join(output,route+extension);
    await fs.mkdir(path.dirname(target),{recursive:true});
    const text=await fs.readFile(path.join(root,source),'utf8');
    await fs.writeFile(target,extension==='.mdx' ? text : convert(source,text,routes));
  }
  console.log('Páginas Markdown generadas:',published.length);
}
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await main();

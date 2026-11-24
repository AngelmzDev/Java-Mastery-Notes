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
const markdown = /\.md$/i;

export function routeFor(file) {
  const name = file.replace(/\\/g, '/');
  if (name === 'README.md') return 'index';
  let route = name
    .replace(/^docs\/(\d{2}-[^/]+)\//, 'temario/$1/')
    .replace(/^docs\//, 'referencia/')
    .replace(/^web-content\//, '')
    .replace(/^(00-Conceptos-Base|01-Control-de-Flujo)\//, 'material/$1/');
  route = route.replace(/(^|\/)readme\.md$/i, '$1index').replace(/\.md$/i,'').toLowerCase();
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
  visit(tree,['link','image','definition'],node=>{
    node.url = rewriteUrl(node.url,source,routes,node.type==='image');
  });
  // Preserve existing explanations. The old repo's attribution remains intact.
  const provenance = source.startsWith('web-content/') ? '' :
    '\n> **Procedencia:** material del repositorio anterior. Consulta sus notas de alcance; no se atribuye automáticamente al profesor.\n';
  return '---\ntitle: '+JSON.stringify(title)+'\n---\n'+provenance+'\n'+processor.stringify(tree);
}
async function main() {
  const inputs = ['README.md',...(await Promise.all(['docs','ejercicios','00-Conceptos-Base','01-Control-de-Flujo','web-content'].map(walk))).flat()]
    .filter(p=>markdown.test(p) && !p.startsWith('docs/superpowers/') && !p.startsWith('docs/branding/'));
  const routes=new Map(inputs.map(p=>[p,routeFor(p)]));
  if(new Set(routes.values()).size!==routes.size) throw Error('Rutas duplicadas');
  const output=path.join(root,'src/content/docs');
  await fs.rm(output,{recursive:true,force:true});
  for(const [source,route] of routes) {
    const target=path.join(output,route+'.md');
    await fs.mkdir(path.dirname(target),{recursive:true});
    const text=await fs.readFile(path.join(root,source),'utf8');
    await fs.writeFile(target,convert(source,text,routes));
  }
  console.log('Páginas Markdown generadas:',routes.size);
}
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await main();

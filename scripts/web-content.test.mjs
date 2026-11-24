import test from 'node:test';
import assert from 'node:assert/strict';
import {routeFor,pageUrl,rewriteUrl,convert} from './web-content.mjs';
const routes = new Map([['README.md','index'],['docs/07-bucles/README.md','temario/07-bucles/index'],['docs/07-bucles/for-y-recorridos.md','temario/07-bucles/for-y-recorridos']]);
test('rutas deterministas',()=>{
  assert.equal(routeFor('docs/07-bucles/README.md'),'temario/07-bucles/index');
  assert.equal(routeFor('web-content/clases/dia-09.md'),'clases/dia-09');
  assert.equal(pageUrl('index'),'/Java-Mastery-Notes/');
});
test('enlaces cruzados y anclas',()=>{
  assert.equal(rewriteUrl('for-y-recorridos.md#ejemplo','docs/07-bucles/README.md',routes),'/Java-Mastery-Notes/temario/07-bucles/for-y-recorridos/#ejemplo');
  assert.equal(rewriteUrl('../../README.md','docs/07-bucles/README.md',routes),'/Java-Mastery-Notes/');
  assert.equal(rewriteUrl('https://example.org','README.md',routes),'https://example.org');
  assert.match(rewriteUrl('src/Ejemplo.java','ejercicios/README.md',routes),/github\.com.*Ejemplo\.java$/);
});
test('frontmatter, código y procedencia',()=>{
 const output=convert('docs/07-bucles/README.md','# Bucles\n\n[for](for-y-recorridos.md)\n\n```java\nint n = 3;\n```\n',routes);
 assert.match(output,/title: "Bucles"/);
 assert.match(output,/int n = 3;/);
 assert.match(output,/Procedencia/);
 assert.match(output,/\/Java-Mastery-Notes\/temario\/07-bucles\/for-y-recorridos\//);
});

test('los apuntes importados no repiten el H1 y preservan el código',()=>{
 const output=convert('web-content/clases/apuntes/dia-02.md','# Apuntes\n\n# 1. Variables\n\n## 1.1. Tipos\n\n```java\nint n = 3;\n```',routes);
 assert.match(output,/^## 1\. Variables$/m);
 assert.match(output,/^### 1\.1\. Tipos$/m);
 assert.match(output,/int n = 3;/);
});
test('las fichas enlazan con sus apuntes y se admiten rutas MDX',()=>{
 const map=new Map([['web-content/clases/apuntes/dia-02.md','clases/apuntes/dia-02']]);
 const output=convert('web-content/clases/dia-02.md','# Clase 2\n\nContenido',map);
 assert.match(output,/\/Java-Mastery-Notes\/clases\/apuntes\/dia-02\//);
 assert.equal(routeFor('web-content/laboratorio/trazas.mdx'),'laboratorio/trazas');
});

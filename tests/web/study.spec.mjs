import { test, expect } from '@playwright/test';
test('simulator preserves state, supports backward steps, and handles negative maxima', async ({page})=>{
  await page.goto('laboratorio/trazas/');
  const lab=page.locator('trace-lab').first();
  await expect(lab.locator('[data-step]')).toHaveText('0 / 5');
  await lab.getByRole('button',{name:'Siguiente paso'}).click();
  await expect(lab.locator('[data-current]')).toHaveText('3');
  await lab.getByRole('button',{name:'Siguiente paso'}).click();
  await expect(lab.locator('[data-current]')).toHaveText('1');
  await lab.getByRole('button',{name:'Anterior'}).click();
  await expect(lab.locator('[data-current]')).toHaveText('3');
  await lab.locator('[data-mode]').selectOption('positive');
  await expect(lab.locator('[data-step]')).toHaveText('0 / 5');
  const neg=page.locator('trace-lab').nth(1);
  await neg.locator('[data-mode]').selectOption('max');
  await expect(neg.locator('[data-current]')).toHaveText('-7');
  await neg.getByRole('button',{name:'Siguiente paso'}).click();
  await expect(neg.locator('[data-current]')).toHaveText('-3');
  await neg.getByRole('button',{name:'Siguiente paso'}).click();
  await expect(neg.locator('[data-current]')).toHaveText('-3');
  await expect(neg.getByRole('button',{name:'Siguiente paso'})).toBeDisabled();
});
test('self-check cards respond independently', async ({page})=>{
  await page.goto('laboratorio/trazas/');
  const card=page.locator('practice-card').first();
  await card.getByRole('radio').nth(1).check();
  await card.getByRole('button').click();
  await expect(card.locator('[data-result]')).toContainText('Correcto.');
  const other=page.locator('practice-card').nth(1);
  await other.getByRole('radio').nth(1).check();
  await other.getByRole('button').click();
  await expect(other.locator('[data-result]')).toContainText('Todavía no.');
  await expect(card.getByRole('radio').nth(1)).toBeChecked();
});
test('chronological index links to a full note', async ({page})=>{
  await page.goto('clases/dia-07/');
  await page.getByRole('link',{name:'Leer apuntes completos de esta clase'}).click();
  await expect(page).toHaveURL(/clases\/apuntes\/dia-07\//);
  await expect(page.getByRole('heading',{level:1})).toContainText('Día 7');
});
test('site search index can return content', async ({page})=>{
  await page.goto('clases/');
  const count=await page.evaluate(async ()=>{
    const path='/Java-Mastery-Notes/pagefind/pagefind.js';
    const index=await import(path);
    await index.init();
    return (await index.search('acumulador')).results.length;
  });
  expect(count).toBeGreaterThan(0);
});
test('progressive exercise keeps solution hidden until opened', async ({page})=>{
  await page.goto('laboratorio/colocacion/');
  const detail=page.locator('details').filter({hasText:'Solución razonada'}).first();
  await expect(detail).not.toHaveAttribute('open','');
  await detail.locator('summary').click();
  await expect(detail).toHaveAttribute('open','');
});

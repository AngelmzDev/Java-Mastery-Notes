import test from 'node:test';
import assert from 'node:assert/strict';
import {buildTrace,initialValue} from '../src/lib/study-traces.mjs';
test('acumulador conserva el valor entre vueltas',()=>{
  assert.deepEqual(buildTrace('sum',[3,-2,4]).map(r=>r.after),[3,1,5]);
  assert.deepEqual(buildTrace('sum',[]),[]);
});
test('contador solo aumenta para valores positivos',()=>{
  assert.deepEqual(buildTrace('positive',[-1,0,2,3]).map(r=>r.after),[0,0,1,2]);
});
test('máximo no se inicializa a cero para una lista negativa',()=>{
  assert.equal(initialValue('max',[-7,-3,-9]),-7);
  assert.deepEqual(buildTrace('max',[-7,-3,-9]).map(r=>r.after),[-3,-3]);
  assert.deepEqual(buildTrace('max',[]),[]);
});
test('datos y modos incorrectos producen error explícito',()=>{
 assert.throws(()=>buildTrace('unknown',[1]),RangeError);
 assert.throws(()=>buildTrace('sum',[1.2]),TypeError);
});

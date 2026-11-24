/** Trazas didácticas: valores y estado antes/después de cada iteración. */
export function buildTrace(mode, values) {
  if (!Array.isArray(values) || values.some(v=>!Number.isSafeInteger(v))) throw new TypeError('Se necesitan enteros seguros');
  if (!['sum','positive','max'].includes(mode)) throw new RangeError('Patrón desconocido');
  if (mode==='max' && values.length===0) return [];
  let state=mode==='max' ? values[0] : 0;
  const rows=[];
  for (let i=mode==='max'?1:0; i<values.length; i++) {
    const value=values[i],before=state;
    if(mode==='sum') state+=value;
    if(mode==='positive' && value>0) state++;
    if(mode==='max' && value>state) state=value;
    rows.push({index:i,value,before,after:state,changed:state!==before});
  }
  return rows;
}
export function initialValue(mode, values) { return mode==='max' ? (values[0]??null) : 0; }

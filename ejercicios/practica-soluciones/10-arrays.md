# Soluciones orientativas: Arrays unidimensionales

Estas respuestas son propias y no correcciones del profesor. Úsalas después de intentar los ejercicios; puede haber más de una solución correcta.

## 1. Marcadores guardados

Usa for con i<datos.length y datos[i]++. El for-each copia cada valor primitivo a su variable local; cambiar esa variable no modifica la casilla original. length del array no lleva paréntesis.

**Resultado de referencia:** Tras modificar: 7,3,10,3. Los índices siguen siendo0,1,2,3.

## 2. Búsqueda y candidata

Recorre todo para contar; solo guarda primera si aún vale -1. El máximo comienza en índice0 y cambia cuando un valor es estrictamente mayor. Con >= quedaría la última posición del empate:3.

**Resultado de referencia:** Primera1, coincidencias2; máximo en posición1 con valor-2.

## 3. Agenda del grupo

Array y cantidad van antes del menú. Para añadir, valida y busca duplicados en0..cantidad-1, comprueba capacidad, guarda en nombres[cantidad] y luego incrementa. Para listar y buscar, no recorras los huecos null. La solución aplicada24 desarrolla el programa.

**Resultado de referencia:** El sexto no entra; cantidad sigue5; los duplicados no consumen hueco.

[Volver a los enunciados](../../docs/10-arrays/ejercicios.md) · [Índice de ejercicios](../README.md)

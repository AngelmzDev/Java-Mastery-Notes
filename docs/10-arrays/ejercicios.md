# Práctica: Arrays unidimensionales

Variantes didácticas propias: cambian los contextos y datos, conservando los objetivos de este bloque. El estado de corrección en clase no está confirmado.

**Cómo trabajar:** predice el resultado, escribe los pasos, resuelve, prueba los límites y explica una decisión del código. En las tareas de entorno o Git, documenta las acciones y lo que observas.

## 1. Marcadores guardados

**Objetivo:** Acceder, modificar y recorrer.

Crea un int[] con 6,2,9,2. Muestra posición y valor con for, aumenta cada elemento en uno y vuelve a listarlo con for-each. Explica por qué asignar valor++ al elemento local del for-each no actualiza el array de int.

**Comprueba:** Tras modificar: 7,3,10,3. Los índices siguen siendo0,1,2,3.

<details>
<summary>Pista</summary>

Para modificar elementos necesitas escribir array[i].

</details>

## 2. Búsqueda y candidata

**Objetivo:** Distinguir valor, posición y recuento.

Con int[] {-8,-2,-5,-2}, busca -2: muestra primera posición y cantidad de coincidencias. Después muestra posición y valor máximos conservando la primera posición si hay empate. Explica qué cambiaría con >= en vez de >.

**Comprueba:** Primera1, coincidencias2; máximo en posición1 con valor-2.

<details>
<summary>Pista</summary>

Usa -1 como no encontrado y el primer elemento como candidato.

</details>

## 3. Agenda del grupo

**Objetivo:** Gestionar ocupación parcial con menú.

Crea una agenda de cinco compañeros con añadir/listar/buscar/salir. Conserva nombres completos, rechaza vacíos y duplicados sin distinguir mayúsculas. Prueba llenarla y añadir un sexto nombre. No uses ArrayList ni colecciones.

**Comprueba:** El sexto no entra; cantidad sigue5; los duplicados no consumen hueco.

<details>
<summary>Pista</summary>

La variable cantidad indica la primera posición libre.

</details>

## Aplicaciones resueltas relacionadas

Consulta estas soluciones después de intentar tu variante:

- [Agenda de compañeros de taller](../../ejercicios/soluciones/24-agenda-de-taller.md)

[Soluciones de las tres actividades](../../ejercicios/practica-soluciones/10-arrays.md) · [Volver al tema](README.md) · [Índice de ejercicios](../../ejercicios/README.md)

# Práctica: Operadores y expresiones

Variantes didácticas propias: cambian los contextos y datos, conservando los objetivos de este bloque. El estado de corrección en clase no está confirmado.

**Cómo trabajar:** predice el resultado, escribe los pasos, resuelve, prueba los límites y explica una decisión del código. En las tareas de entorno o Git, documenta las acciones y lo que observas.

## 1. Cajas y sobrantes

**Objetivo:** Aplicar división y módulo.

Un almacén tiene 47 fichas y cada caja admite 6. Calcula cuántas cajas completas llena y cuántas fichas sobran. No uses bucles. Repite con 48 y con 0. Justifica el papel del cociente y del resto.

**Comprueba:** 47 → 7 cajas y 5 sobrantes; 48 → 8 y 0; 0 → 0 y 0.

<details>
<summary>Pista</summary>

cajas=fichas/capacidad; sobrantes=fichas%capacidad.

</details>

## 2. Acceso al taller

**Objetivo:** Construir y trazar expresiones booleanas.

Se permite acceder con reserva confirmada y edad de al menos 16 años, o con acreditación de docente. Escribe la expresión con paréntesis. Evalúa: edad15/reservaSí/docenteNo; edad16/reservaSí/docenteNo; edad15/reservaNo/docenteSí.

**Comprueba:** false, true, true.

<details>
<summary>Pista</summary>

La excepción de docente es una alternativa completa, no otra condición dentro de la reserva.

</details>

## 3. Ruleta de cinco números

**Objetivo:** Generar un rango entero inclusivo.

Genera un número de 10 a 14, ambos incluidos. Explica por qué hay cinco resultados posibles y por qué el casting debe aplicarse después de multiplicar. Ejecuta varias veces: que no aparezca un extremo en pocas pruebas no demuestra que sea imposible.

**Comprueba:** Siempre debe cumplirse 10<=resultado && resultado<=14.

<details>
<summary>Pista</summary>

Parte de un valor decimal en [0,1).

</details>

## Aplicaciones resueltas relacionadas

Consulta estas soluciones después de intentar tu variante:

- [Presupuesto de material](../../ejercicios/soluciones/01-presupuesto-de-material.md)
- [Duración de un pódcast](../../ejercicios/soluciones/02-duracion-de-un-podcast.md)
- [Cifras de un código de taquilla](../../ejercicios/soluciones/03-codigo-de-taquilla.md)
- [Grupos de piezas pares e impares](../../ejercicios/soluciones/07-grupos-de-piezas.md)
- [Dos dados de mesa](../../ejercicios/soluciones/14-dos-dados-de-mesa.md)
- [Sorteo de taquillas](../../ejercicios/soluciones/15-sorteo-de-taquillas.md)

[Soluciones de las tres actividades](../../ejercicios/practica-soluciones/04-operadores.md) · [Volver al tema](README.md) · [Índice de ejercicios](../../ejercicios/README.md)

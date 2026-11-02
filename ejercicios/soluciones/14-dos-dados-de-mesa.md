# Dos dados de mesa

**Estado:** resuelto didáctico propio; corrección en clase no confirmada.

## Enunciado

Simula una tirada de dos dados de seis caras. Muestra únicamente los dos resultados y su suma en una línea. No pidas datos. Cada dado necesita su propia llamada a Math.random.

## Objetivo y razonamiento

Generar resultados de 1 a 6 y sumar.

Multiplicar por 6 y truncar produce 0..5; sumar 1 desplaza a 1..6. Los dados se guardan por separado para comprobarlos y sumarlos; reutilizar una sola tirada para ambos no simularía dos sorteos independientes.

## Traza o comprobación manual

Ejemplo posible: dado1=2, dado2=5 → suma=7. No es una salida fija: en otra ejecución puede cambiar. Invariantes: cada dado está en 1..6 y suma=dado1+dado2.

## Código completo

Abre [E14DosDadosDeMesa.java](../src/ejercicios/E14DosDadosDeMesa.java). La clase tiene `main`, imports y paquete: no necesita completar fragmentos. Lee en orden: datos de entrada, preparación, decisiones o repeticiones y salida.

## Pruebas y límites

Las ejecuciones aleatorias se comprueban por sus condiciones de rango y relación entre valores, no exigiendo una salida fija. Varias pruebas no demuestran por sí solas la calidad estadística del sorteo.

Salvo que el enunciado indique otro comportamiento, las lecturas numéricas presuponen tokens con formato correcto y suficientes datos para completar la tarea. Los rangos se validan como indica cada ejercicio. La validación de formato y EOF se desarrolla en el [tema de entrada](../../docs/03-entrada-y-salida/validacion-y-errores.md); no se ocultan excepciones con manejo avanzado.

## Antes de mirar la solución otra vez

Cambia un dato de la prueba y predice la salida. Identifica qué variable conserva información, qué instrucción se repite y qué condición termina el proceso. Provoca un error lógico cambiando la posición de una inicialización y explica el resultado, sin conservar esa versión como solución.

[Tema y práctica](../../docs/04-operadores/README.md) · [Índice de ejercicios](../README.md)

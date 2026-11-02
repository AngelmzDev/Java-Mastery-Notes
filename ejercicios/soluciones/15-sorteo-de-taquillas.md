# Sorteo de taquillas

**Estado:** resuelto didáctico propio; corrección en clase no confirmada.

## Enunciado

Sortea diez números de taquilla entre 20 y 25 inclusive, uno por línea. Se permite repetir. No confundas este sorteo con una selección sin reemplazo.

## Objetivo y razonamiento

Generar enteros dentro de un intervalo inclusivo.

Hay seis valores posibles. El for determina diez sorteos; la llamada aleatoria va dentro para que haya una nueva en cada vuelta. Si sortearas antes, imprimirías el mismo número diez veces.

## Traza o comprobación manual

El valor previo al casting está en [0,6); después es 0..5; al sumar 20 queda 20..25. Deben salir diez líneas, no necesariamente los seis valores distintos.

## Código completo

Abre [E15SorteoDeTaquillas.java](../src/ejercicios/E15SorteoDeTaquillas.java). La clase tiene `main`, imports y paquete: no necesita completar fragmentos. Lee en orden: datos de entrada, preparación, decisiones o repeticiones y salida.

## Pruebas y límites

Las ejecuciones aleatorias se comprueban por sus condiciones de rango y relación entre valores, no exigiendo una salida fija. Varias pruebas no demuestran por sí solas la calidad estadística del sorteo.

Salvo que el enunciado indique otro comportamiento, las lecturas numéricas presuponen tokens con formato correcto y suficientes datos para completar la tarea. Los rangos se validan como indica cada ejercicio. La validación de formato y EOF se desarrolla en el [tema de entrada](../../docs/03-entrada-y-salida/validacion-y-errores.md); no se ocultan excepciones con manejo avanzado.

## Antes de mirar la solución otra vez

Cambia un dato de la prueba y predice la salida. Identifica qué variable conserva información, qué instrucción se repite y qué condición termina el proceso. Provoca un error lógico cambiando la posición de una inicialización y explica el resultado, sin conservar esa versión como solución.

[Tema y práctica](../../docs/04-operadores/README.md) · [Índice de ejercicios](../README.md)

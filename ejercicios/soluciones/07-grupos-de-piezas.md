# Grupos de piezas pares e impares

**Estado:** resuelto didáctico propio; corrección en clase no confirmada.

## Enunciado

Lee una cantidad entera de piezas, que puede ser cero pero no negativa. Indica si es Par o Impar. La finalidad es razonar con el resto de dividir entre dos.

## Objetivo y razonamiento

Comprobar divisibilidad con resto.

Validamos el dominio antes de clasificar. Un resto cero significa que pueden hacerse parejas completas. El cero también tiene resto cero y por ello es par; no debemos confundirlo con dato ausente.

## Traza o comprobación manual

0 % 2 = 0 → Par. 7 % 2 = 1 → Impar. -1 se rechaza antes de evaluar la clasificación.

## Código completo

Abre [E07GruposDePiezas.java](../src/ejercicios/E07GruposDePiezas.java). La clase tiene `main`, imports y paquete: no necesita completar fragmentos. Lee en orden: datos de entrada, preparación, decisiones o repeticiones y salida.

## Pruebas y límites

Entrada:

```text
0
```

Salida:

```text
Par
```

Entrada:

```text
7
```

Salida:

```text
Impar
```

Entrada:

```text
8
```

Salida:

```text
Par
```

Salvo que el enunciado indique otro comportamiento, las lecturas numéricas presuponen tokens con formato correcto y suficientes datos para completar la tarea. Los rangos se validan como indica cada ejercicio. La validación de formato y EOF se desarrolla en el [tema de entrada](../../docs/03-entrada-y-salida/validacion-y-errores.md); no se ocultan excepciones con manejo avanzado.

## Antes de mirar la solución otra vez

Cambia un dato de la prueba y predice la salida. Identifica qué variable conserva información, qué instrucción se repite y qué condición termina el proceso. Provoca un error lógico cambiando la posición de una inicialización y explica el resultado, sin conservar esa versión como solución.

[Tema y práctica](../../docs/04-operadores/README.md) · [Índice de ejercicios](../README.md)

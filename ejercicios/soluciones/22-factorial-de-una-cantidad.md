# Factorial de una cantidad

**Estado:** resuelto didáctico propio; corrección en clase no confirmada.

## Enunciado

Lee un entero n entre 0 y 20 y calcula n! multiplicando de forma iterativa. No uses recursividad. 0! vale 1; utiliza long y rechaza otros valores.

## Objetivo y razonamiento

Calcular factorial iterativo con límites que eviten desbordamiento.

El acumulador comienza en 1. Multiplicamos por los factores de 2 a n; para 0 y 1 no hace falta entrar. 20! cabe en long pero 21! no, por eso el límite de entrada no es arbitrario.

## Traza o comprobación manual

Para 5: producto inicial 1 → por 2:2 → por 3:6 → por 4:24 → por 5:120. La impresión final va fuera.

## Código completo

Abre [E22FactorialDeUnaCantidad.java](../src/ejercicios/E22FactorialDeUnaCantidad.java). La clase tiene `main`, imports y paquete: no necesita completar fragmentos. Lee en orden: datos de entrada, preparación, decisiones o repeticiones y salida.

## Pruebas y límites

Entrada:

```text
0
```

Salida:

```text
1
```

Entrada:

```text
1
```

Salida:

```text
1
```

Entrada:

```text
5
```

Salida:

```text
120
```

Salvo que el enunciado indique otro comportamiento, las lecturas numéricas presuponen tokens con formato correcto y suficientes datos para completar la tarea. Los rangos se validan como indica cada ejercicio. La validación de formato y EOF se desarrolla en el [tema de entrada](../../docs/03-entrada-y-salida/validacion-y-errores.md); no se ocultan excepciones con manejo avanzado.

## Antes de mirar la solución otra vez

Cambia un dato de la prueba y predice la salida. Identifica qué variable conserva información, qué instrucción se repite y qué condición termina el proceso. Provoca un error lógico cambiando la posición de una inicialización y explica el resultado, sin conservar esa versión como solución.

[Tema y práctica](../../docs/07-bucles/README.md) · [Índice de ejercicios](../README.md)

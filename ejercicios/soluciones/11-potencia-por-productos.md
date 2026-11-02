# Potencia por productos

**Estado:** resuelto didáctico propio; corrección en clase no confirmada.

## Enunciado

Lee base entera entre -10 y 10 y exponente entero entre 0 y 18. Calcula la potencia sin Math.pow. En este ejercicio se define base^0 como 1, incluido el caso 0^0, únicamente como convención del algoritmo.

## Objetivo y razonamiento

Acumular un producto mediante repetición.

El producto comienza en 1 porque es el elemento neutro de multiplicar. Cada vuelta incorpora una copia de la base. Un exponente cero ejecuta cero vueltas y conserva 1. El límite elegido mantiene el resultado dentro de long.

## Traza o comprobación manual

Base=3, exponente=4: resultado inicial 1; vueltas: 3, 9, 27, 81. Hay cuatro multiplicaciones, no cinco.

## Código completo

Abre [E11PotenciaPorProductos.java](../src/ejercicios/E11PotenciaPorProductos.java). La clase tiene `main`, imports y paquete: no necesita completar fragmentos. Lee en orden: datos de entrada, preparación, decisiones o repeticiones y salida.

## Pruebas y límites

Entrada:

```text
3 4
```

Salida:

```text
81
```

Entrada:

```text
7 0
```

Salida:

```text
1
```

Entrada:

```text
-2 3
```

Salida:

```text
-8
```

Salvo que el enunciado indique otro comportamiento, las lecturas numéricas presuponen tokens con formato correcto y suficientes datos para completar la tarea. Los rangos se validan como indica cada ejercicio. La validación de formato y EOF se desarrolla en el [tema de entrada](../../docs/03-entrada-y-salida/validacion-y-errores.md); no se ocultan excepciones con manejo avanzado.

## Antes de mirar la solución otra vez

Cambia un dato de la prueba y predice la salida. Identifica qué variable conserva información, qué instrucción se repite y qué condición termina el proceso. Provoca un error lógico cambiando la posición de una inicialización y explica el resultado, sin conservar esa versión como solución.

[Tema y práctica](../../docs/07-bucles/README.md) · [Índice de ejercicios](../README.md)

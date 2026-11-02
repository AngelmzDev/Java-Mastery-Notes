# Ordenar tres tiempos

**Estado:** resuelto didáctico propio; corrección en clase no confirmada.

## Enunciado

Lee tres tiempos enteros de carrera y muéstralos de menor a mayor. Para aislar la lógica de ordenación, se admiten enteros cualesquiera. No uses arrays ni funciones de ordenación.

## Objetivo y razonamiento

Comparar e intercambiar sin un algoritmo de ordenación de biblioteca.

Primero ordenamos a y b. Después comparamos b con c para llevar el mayor a c. Ese intercambio puede haber dejado a>b, así que repetimos esa comparación. Cada intercambio necesita una auxiliar para no destruir un valor.

## Traza o comprobación manual

| Paso | a | b | c |
| --- | --- | --- | --- |
| Inicio | 9 | 4 | 2 |
| Comparar a,b | 4 | 9 | 2 |
| Comparar b,c | 4 | 2 | 9 |
| Comparar a,b | 2 | 4 | 9 |

## Código completo

Abre [E08OrdenDeTresTiempos.java](../src/ejercicios/E08OrdenDeTresTiempos.java). La clase tiene `main`, imports y paquete: no necesita completar fragmentos. Lee en orden: datos de entrada, preparación, decisiones o repeticiones y salida.

## Pruebas y límites

Entrada:

```text
9 4 2
```

Salida:

```text
2 4 9
```

Entrada:

```text
1 2 3
```

Salida:

```text
1 2 3
```

Entrada:

```text
5 5 1
```

Salida:

```text
1 5 5
```

Salvo que el enunciado indique otro comportamiento, las lecturas numéricas presuponen tokens con formato correcto y suficientes datos para completar la tarea. Los rangos se validan como indica cada ejercicio. La validación de formato y EOF se desarrolla en el [tema de entrada](../../docs/03-entrada-y-salida/validacion-y-errores.md); no se ocultan excepciones con manejo avanzado.

## Antes de mirar la solución otra vez

Cambia un dato de la prueba y predice la salida. Identifica qué variable conserva información, qué instrucción se repite y qué condición termina el proceso. Provoca un error lógico cambiando la posición de una inicialización y explica el resultado, sin conservar esa versión como solución.

[Tema y práctica](../../docs/06-condicionales/README.md) · [Índice de ejercicios](../README.md)

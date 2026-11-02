# Dorsales de un intervalo

**Estado:** resuelto didáctico propio; corrección en clase no confirmada.

## Enunciado

Lee dos extremos enteros entre 0 y 10000. Rechaza inicio>fin. Muestra, uno por línea, solo los dorsales pares del intervalo inclusive; si no hay, muestra Sin pares.

## Objetivo y razonamiento

Recorrer un intervalo inclusivo y filtrar valores.

El for visita todos los candidatos; el if selecciona los pares. La bandera nace fuera para recordar si se imprimió alguno. El mensaje Sin pares se emite después de recorrer, no por cada número impar.

## Traza o comprobación manual

Inicio=3, fin=7: 3 no; 4 sí; 5 no; 6 sí; 7 no. La bandera termina true y no se muestra Sin pares.

## Código completo

Abre [E10DorsalesEnIntervalo.java](../src/ejercicios/E10DorsalesEnIntervalo.java). La clase tiene `main`, imports y paquete: no necesita completar fragmentos. Lee en orden: datos de entrada, preparación, decisiones o repeticiones y salida.

## Pruebas y límites

Entrada:

```text
3 7
```

Salida:

```text
4
6
```

Entrada:

```text
5 5
```

Salida:

```text
Sin pares
```

Entrada:

```text
0 0
```

Salida:

```text
0
```

Salvo que el enunciado indique otro comportamiento, las lecturas numéricas presuponen tokens con formato correcto y suficientes datos para completar la tarea. Los rangos se validan como indica cada ejercicio. La validación de formato y EOF se desarrolla en el [tema de entrada](../../docs/03-entrada-y-salida/validacion-y-errores.md); no se ocultan excepciones con manejo avanzado.

## Antes de mirar la solución otra vez

Cambia un dato de la prueba y predice la salida. Identifica qué variable conserva información, qué instrucción se repite y qué condición termina el proceso. Provoca un error lógico cambiando la posición de una inicialización y explica el resultado, sin conservar esa versión como solución.

[Tema y práctica](../../docs/07-bucles/README.md) · [Índice de ejercicios](../README.md)

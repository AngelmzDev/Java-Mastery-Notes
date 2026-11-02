# Panel de estrellas

**Estado:** resuelto didáctico propio; corrección en clase no confirmada.

## Enunciado

Lee un lado entre 1 y 8. Dibuja primero un cuadrado lleno de ese tamaño, después una línea con --- y finalmente un triángulo cuya fila i tenga i estrellas.

## Objetivo y razonamiento

Dibujar cuadrado y triángulo con bucles anidados.

La fila controla el bucle exterior. En el cuadrado cada fila tiene lado columnas; en el triángulo tiene tantas columnas como número de fila. El salto de línea se coloca después del bucle interior, una vez por fila.

## Traza o comprobación manual

Con lado=2: el cuadrado tiene 4 estrellas en 2 filas. El triángulo tiene 1+2=3 estrellas. La fila exterior se reinicia en el segundo dibujo.

## Código completo

Abre [E20PanelDeEstrellas.java](../src/ejercicios/E20PanelDeEstrellas.java). La clase tiene `main`, imports y paquete: no necesita completar fragmentos. Lee en orden: datos de entrada, preparación, decisiones o repeticiones y salida.

## Pruebas y límites

Entrada:

```text
2
```

Salida:

```text
**
**
---
*
**
```

Entrada:

```text
1
```

Salida:

```text
*
---
*
```

Entrada:

```text
0
```

Salida:

```text
Lado no válido
```

Salvo que el enunciado indique otro comportamiento, las lecturas numéricas presuponen tokens con formato correcto y suficientes datos para completar la tarea. Los rangos se validan como indica cada ejercicio. La validación de formato y EOF se desarrolla en el [tema de entrada](../../docs/03-entrada-y-salida/validacion-y-errores.md); no se ocultan excepciones con manejo avanzado.

## Antes de mirar la solución otra vez

Cambia un dato de la prueba y predice la salida. Identifica qué variable conserva información, qué instrucción se repite y qué condición termina el proceso. Provoca un error lógico cambiando la posición de una inicialización y explica el resultado, sin conservar esa versión como solución.

[Tema y práctica](../../docs/07-bucles/README.md) · [Índice de ejercicios](../README.md)

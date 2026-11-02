# Niveles de una prueba práctica

**Estado:** resuelto didáctico propio; corrección en clase no confirmada.

## Enunciado

Lee una puntuación entera de 0 a 10. Muestra En progreso para 0..4, Superado para 5..6, Destacado para 7..8 y Excelente para 9..10. Rechaza puntuaciones fuera del rango.

## Objetivo y razonamiento

Clasificar rangos sin condiciones redundantes.

Primero descartamos datos inválidos. Las ramas siguientes solo necesitan el límite superior porque las anteriores ya han descartado valores inferiores. El else final es el rango restante, no un permiso para aceptar cualquier entero.

## Traza o comprobación manual

Para 7: no está fuera de 0..10; no cumple <5; no cumple <7; sí cumple <9 → Destacado. Para -1 se termina en la rama de dato inválido.

## Código completo

Abre [E04NivelesDeUnaPrueba.java](../src/ejercicios/E04NivelesDeUnaPrueba.java). La clase tiene `main`, imports y paquete: no necesita completar fragmentos. Lee en orden: datos de entrada, preparación, decisiones o repeticiones y salida.

## Pruebas y límites

Entrada:

```text
-1
```

Salida:

```text
Puntuación no válida
```

Entrada:

```text
0
```

Salida:

```text
En progreso
```

Entrada:

```text
4
```

Salida:

```text
En progreso
```

Salvo que el enunciado indique otro comportamiento, las lecturas numéricas presuponen tokens con formato correcto y suficientes datos para completar la tarea. Los rangos se validan como indica cada ejercicio. La validación de formato y EOF se desarrolla en el [tema de entrada](../../docs/03-entrada-y-salida/validacion-y-errores.md); no se ocultan excepciones con manejo avanzado.

## Antes de mirar la solución otra vez

Cambia un dato de la prueba y predice la salida. Identifica qué variable conserva información, qué instrucción se repite y qué condición termina el proceso. Provoca un error lógico cambiando la posición de una inicialización y explica el resultado, sin conservar esa versión como solución.

[Tema y práctica](../../docs/06-condicionales/README.md) · [Índice de ejercicios](../README.md)

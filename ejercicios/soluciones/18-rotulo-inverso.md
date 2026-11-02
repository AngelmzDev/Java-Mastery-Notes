# Rótulo al revés

**Estado:** resuelto didáctico propio; corrección en clase no confirmada.

## Enunciado

Lee una línea de texto sencillo y muestra sus caracteres en orden inverso. Conserva espacios y mayúsculas. Se admiten líneas vacías; los ejemplos se limitan a caracteres de una unidad UTF-16.

## Objetivo y razonamiento

Recorrer una cadena en sentido descendente.

El primer índice es longitud menos uno. El límite incluye cero. El acumulador textual comienza vacío fuera del recorrido; anteponer o recorrer hacia atrás son dos estrategias diferentes, y aquí elegimos recorrer hacia atrás y añadir al final.

## Traza o comprobación manual

Para faro, i pasa por 3,2,1,0; resultado pasa por o, or, ora, oraf. Para vacío comienza en -1 y no entra.

## Código completo

Abre [E18RotuloInverso.java](../src/ejercicios/E18RotuloInverso.java). La clase tiene `main`, imports y paquete: no necesita completar fragmentos. Lee en orden: datos de entrada, preparación, decisiones o repeticiones y salida.

## Pruebas y límites

Entrada:

```text
faro
```

Salida:

```text
oraf
```

Entrada:

```text
A b
```

Salida:

```text
b A
```

Entrada:

```text
(sin datos)
```

Salida:

```text
(línea vacía)
```

Salvo que el enunciado indique otro comportamiento, las lecturas numéricas presuponen tokens con formato correcto y suficientes datos para completar la tarea. Los rangos se validan como indica cada ejercicio. La validación de formato y EOF se desarrolla en el [tema de entrada](../../docs/03-entrada-y-salida/validacion-y-errores.md); no se ocultan excepciones con manejo avanzado.

## Antes de mirar la solución otra vez

Cambia un dato de la prueba y predice la salida. Identifica qué variable conserva información, qué instrucción se repite y qué condición termina el proceso. Provoca un error lógico cambiando la posición de una inicialización y explica el resultado, sin conservar esa versión como solución.

[Tema y práctica](../../docs/05-strings/README.md) · [Índice de ejercicios](../README.md)

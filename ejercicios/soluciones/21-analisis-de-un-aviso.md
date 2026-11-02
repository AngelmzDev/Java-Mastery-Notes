# Análisis de un aviso

**Estado:** resuelto didáctico propio; corrección en clase no confirmada.

## Enunciado

Lee un aviso de una línea. Considera palabra cada grupo de caracteres separado por espacios en blanco; la puntuación permanece dentro de la palabra. Cuenta palabras, cuenta vocales a/e/i/o/u sin distinguir mayúsculas y muestra la primera palabra más larga. Si está vacío tras trim, muestra Sin texto. Esta variante no normaliza vocales acentuadas.

## Objetivo y razonamiento

Combinar limpieza, split, recorridos y contadores.

El vacío se comprueba antes de split para no contar una cadena vacía como palabra. La candidata más larga empieza con la primera palabra. El recuento de vocales recorre el texto normalizado; el de palabras utiliza la longitud del array. Con > se conserva la primera palabra de un empate.

## Traza o comprobación manual

Sol y luna → palabras [Sol,y,luna], cantidad 3; vocales o,u,a = 3; candidata Sol→Sol→luna. Resultado: Palabras 3 Vocales 3 Larga luna.

## Código completo

Abre [E21AnalisisDeUnAviso.java](../src/ejercicios/E21AnalisisDeUnAviso.java). La clase tiene `main`, imports y paquete: no necesita completar fragmentos. Lee en orden: datos de entrada, preparación, decisiones o repeticiones y salida.

## Pruebas y límites

Entrada:

```text
Sol y luna
```

Salida:

```text
Palabras 3 Vocales 3 Larga luna
```

Entrada:

```text
␠␠mar␠␠␠sol␠␠
```

Salida:

```text
Palabras 2 Vocales 2 Larga mar
```

Entrada:

```text
␠
```

Salida:

```text
Sin texto
```

En las entradas de arriba, `␠` representa un espacio: introduce espacios reales, no ese símbolo. Así se pueden ver los espacios exteriores que elimina `trim()`.

Salvo que el enunciado indique otro comportamiento, las lecturas numéricas presuponen tokens con formato correcto y suficientes datos para completar la tarea. Los rangos se validan como indica cada ejercicio. La validación de formato y EOF se desarrolla en el [tema de entrada](../../docs/03-entrada-y-salida/validacion-y-errores.md); no se ocultan excepciones con manejo avanzado.

## Antes de mirar la solución otra vez

Cambia un dato de la prueba y predice la salida. Identifica qué variable conserva información, qué instrucción se repite y qué condición termina el proceso. Provoca un error lógico cambiando la posición de una inicialización y explica el resultado, sin conservar esa versión como solución.

[Tema y práctica](../../docs/05-strings/README.md) · [Índice de ejercicios](../README.md)

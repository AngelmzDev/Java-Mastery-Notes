# Palabra simétrica

**Estado:** resuelto didáctico propio; corrección en clase no confirmada.

## Enunciado

Lee una palabra no vacía de letras latinas básicas y determina si es palíndroma ignorando mayúsculas. Para concretar esta variante, rechaza espacios, números, tildes y ñ. No construyas una segunda palabra invertida.

## Objetivo y razonamiento

Comparar extremos usando una bandera.

Primero validamos todos los caracteres y normalizamos mayúsculas. Dos índices avanzan hacia el centro. Una discrepancia cambia la bandera a false y detiene la comparación. El centro de una palabra impar no necesita compararse consigo mismo.

## Traza o comprobación manual

Radar → radar: posiciones (0,4) r=r; (1,3) a=a; índices se encuentran en 2 → Palíndromo. Casa falla en el primer par.

## Código completo

Abre [E19PalabraSimetrica.java](../src/ejercicios/E19PalabraSimetrica.java). La clase tiene `main`, imports y paquete: no necesita completar fragmentos. Lee en orden: datos de entrada, preparación, decisiones o repeticiones y salida.

## Pruebas y límites

Entrada:

```text
Radar
```

Salida:

```text
Palíndromo
```

Entrada:

```text
Casa
```

Salida:

```text
No es palíndromo
```

Entrada:

```text
a
```

Salida:

```text
Palíndromo
```

Salvo que el enunciado indique otro comportamiento, las lecturas numéricas presuponen tokens con formato correcto y suficientes datos para completar la tarea. Los rangos se validan como indica cada ejercicio. La validación de formato y EOF se desarrolla en el [tema de entrada](../../docs/03-entrada-y-salida/validacion-y-errores.md); no se ocultan excepciones con manejo avanzado.

## Antes de mirar la solución otra vez

Cambia un dato de la prueba y predice la salida. Identifica qué variable conserva información, qué instrucción se repite y qué condición termina el proceso. Provoca un error lógico cambiando la posición de una inicialización y explica el resultado, sin conservar esa versión como solución.

[Tema y práctica](../../docs/05-strings/README.md) · [Índice de ejercicios](../README.md)

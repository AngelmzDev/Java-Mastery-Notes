# Letra de un rótulo

**Estado:** resuelto didáctico propio; corrección en clase no confirmada.

## Enunciado

Lee una línea. Acepta exactamente una letra latina básica A..Z o a..z, sin tildes ni ñ en esta variante. Indica Vocal, Consonante o Carácter no válido. No aceptes un número ni una cadena de dos letras.

## Objetivo y razonamiento

Validar un carácter y clasificar vocal/consonante.

Primero comprobamos longitud y rango del carácter. Normalizamos solo después de tener una letra válida. Un default en el switch de vocales no significa que cualquier símbolo sea consonante: esa conclusión solo es segura tras validar.

## Traza o comprobación manual

Entrada E → longitud 1 → está en A..Z → normalizar a e → caso vocal. Entrada 7 → longitud 1 → fuera de los rangos de letras → inválida.

## Código completo

Abre [E06LetraDeUnRotulo.java](../src/ejercicios/E06LetraDeUnRotulo.java). La clase tiene `main`, imports y paquete: no necesita completar fragmentos. Lee en orden: datos de entrada, preparación, decisiones o repeticiones y salida.

## Pruebas y límites

Entrada:

```text
E
```

Salida:

```text
Vocal
```

Entrada:

```text
z
```

Salida:

```text
Consonante
```

Entrada:

```text
7
```

Salida:

```text
Carácter no válido
```

Salvo que el enunciado indique otro comportamiento, las lecturas numéricas presuponen tokens con formato correcto y suficientes datos para completar la tarea. Los rangos se validan como indica cada ejercicio. La validación de formato y EOF se desarrolla en el [tema de entrada](../../docs/03-entrada-y-salida/validacion-y-errores.md); no se ocultan excepciones con manejo avanzado.

## Antes de mirar la solución otra vez

Cambia un dato de la prueba y predice la salida. Identifica qué variable conserva información, qué instrucción se repite y qué condición termina el proceso. Provoca un error lógico cambiando la posición de una inicialización y explica el resultado, sin conservar esa versión como solución.

[Tema y práctica](../../docs/06-condicionales/README.md) · [Índice de ejercicios](../README.md)

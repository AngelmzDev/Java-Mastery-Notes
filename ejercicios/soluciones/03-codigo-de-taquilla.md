# Cifras de un código de taquilla

**Estado:** resuelto didáctico propio; corrección en clase no confirmada.

## Enunciado

Lee un código entero entre 100 y 999 y muestra sus tres cifras en el orden original. Rechaza otros valores. No conviertas el número a String para separar sus cifras.

## Objetivo y razonamiento

Separar centenas, decenas y unidades.

La división por 100 aísla centenas. Para decenas, primero quitamos centenas con %100 y dividimos entre 10. %10 da unidades. Las operaciones no cambian el número original, así que podemos reconstruirlo para verificar.

## Traza o comprobación manual

482 / 100 = 4; (482 % 100) / 10 = 8; 482 % 10 = 2. Comprobación: 4×100 + 8×10 + 2 = 482.

## Código completo

Abre [E03CodigoDeTaquilla.java](../src/ejercicios/E03CodigoDeTaquilla.java). La clase tiene `main`, imports y paquete: no necesita completar fragmentos. Lee en orden: datos de entrada, preparación, decisiones o repeticiones y salida.

## Pruebas y límites

Entrada:

```text
482
```

Salida:

```text
4 8 2
```

Entrada:

```text
100
```

Salida:

```text
1 0 0
```

Entrada:

```text
999
```

Salida:

```text
9 9 9
```

Salvo que el enunciado indique otro comportamiento, las lecturas numéricas presuponen tokens con formato correcto y suficientes datos para completar la tarea. Los rangos se validan como indica cada ejercicio. La validación de formato y EOF se desarrolla en el [tema de entrada](../../docs/03-entrada-y-salida/validacion-y-errores.md); no se ocultan excepciones con manejo avanzado.

## Antes de mirar la solución otra vez

Cambia un dato de la prueba y predice la salida. Identifica qué variable conserva información, qué instrucción se repite y qué condición termina el proceso. Provoca un error lógico cambiando la posición de una inicialización y explica el resultado, sin conservar esa versión como solución.

[Tema y práctica](../../docs/04-operadores/README.md) · [Índice de ejercicios](../README.md)

# Tabla de lotes

**Estado:** resuelto didáctico propio; corrección en clase no confirmada.

## Enunciado

Lee la cantidad de piezas por lote (entero entre 1 y 1000). Muestra el total de piezas para 1, 2, ... y 10 lotes con formato n x i = producto.

## Objetivo y razonamiento

Construir una tabla de multiplicar con cantidad conocida de repeticiones.

El tamaño del lote se lee una vez antes. El número de lotes varía dentro del for. El producto se calcula de nuevo en cada vuelta; no necesita acumularse porque no sumamos los diez resultados entre sí.

## Traza o comprobación manual

Con n=3: i=1 → 3; i=2 → 6; ...; i=10 → 30. Tras i++ el índice vale 11 y falla i<=10.

## Código completo

Abre [E09TablaDeLotes.java](../src/ejercicios/E09TablaDeLotes.java). La clase tiene `main`, imports y paquete: no necesita completar fragmentos. Lee en orden: datos de entrada, preparación, decisiones o repeticiones y salida.

## Pruebas y límites

Entrada:

```text
3
```

Salida:

```text
3 x 1 = 3
3 x 2 = 6
3 x 3 = 9
3 x 4 = 12
3 x 5 = 15
3 x 6 = 18
3 x 7 = 21
3 x 8 = 24
3 x 9 = 27
3 x 10 = 30
```

Entrada:

```text
0
```

Salida:

```text
Lote no válido
```

Salvo que el enunciado indique otro comportamiento, las lecturas numéricas presuponen tokens con formato correcto y suficientes datos para completar la tarea. Los rangos se validan como indica cada ejercicio. La validación de formato y EOF se desarrolla en el [tema de entrada](../../docs/03-entrada-y-salida/validacion-y-errores.md); no se ocultan excepciones con manejo avanzado.

## Antes de mirar la solución otra vez

Cambia un dato de la prueba y predice la salida. Identifica qué variable conserva información, qué instrucción se repite y qué condición termina el proceso. Provoca un error lógico cambiando la posición de una inicialización y explica el resultado, sin conservar esa versión como solución.

[Tema y práctica](../../docs/07-bucles/README.md) · [Índice de ejercicios](../README.md)

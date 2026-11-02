# Menú de consultas

**Estado:** resuelto didáctico propio; corrección en clase no confirmada.

## Enunciado

Repite el menú 1 Saludar, 2 Cuadrado, 0 Salir. La opción 2 lee un entero entre -1000 y 1000 y muestra su cuadrado. Una opción desconocida muestra Opción no válida. Supón entradas enteras.

## Objetivo y razonamiento

Repetir un menú y distinguir salida del switch y salida del bucle.

El menú y la lectura deben repetirse. La opción se declara fuera del bloque porque la condición final la consulta. El dato para el cuadrado pertenece solo a ese caso. Las flechas evitan fall-through y el do while se termina únicamente cuando opcion vale 0.

## Traza o comprobación manual

Opciones 1, 2 con valor -3, 0: saludar, volver a mostrar menú, mostrar 9, volver a mostrar menú y despedirse. El caso 2 no termina el bucle.

## Código completo

Abre [E23MenuDeConsultas.java](../src/ejercicios/E23MenuDeConsultas.java). La clase tiene `main`, imports y paquete: no necesita completar fragmentos. Lee en orden: datos de entrada, preparación, decisiones o repeticiones y salida.

## Pruebas y límites

Entrada:

```text
0
```

Salida:

```text
1 Saludar | 2 Cuadrado | 0 Salir
Fin
```

Entrada:

```text
1 2 -3 9 0
```

Salida:

```text
1 Saludar | 2 Cuadrado | 0 Salir
Hola
1 Saludar | 2 Cuadrado | 0 Salir
9
1 Saludar | 2 Cuadrado | 0 Salir
Opción no válida
1 Saludar | 2 Cuadrado | 0 Salir
Fin
```

Salvo que el enunciado indique otro comportamiento, las lecturas numéricas presuponen tokens con formato correcto y suficientes datos para completar la tarea. Los rangos se validan como indica cada ejercicio. La validación de formato y EOF se desarrolla en el [tema de entrada](../../docs/03-entrada-y-salida/validacion-y-errores.md); no se ocultan excepciones con manejo avanzado.

## Antes de mirar la solución otra vez

Cambia un dato de la prueba y predice la salida. Identifica qué variable conserva información, qué instrucción se repite y qué condición termina el proceso. Provoca un error lógico cambiando la posición de una inicialización y explica el resultado, sin conservar esa versión como solución.

[Tema y práctica](../../docs/08-logica-programacion/README.md) · [Índice de ejercicios](../README.md)

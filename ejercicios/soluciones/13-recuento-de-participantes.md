# Recuento de notas y sueldos

**Estado:** resuelto didáctico propio; corrección en clase no confirmada.

## Enunciado

Lee un número de fichas entre 1 y 50. Cada ficha contiene una nota entera de 0..10 y un sueldo de 0 a 1000000 con punto decimal. Cuenta notas aprobadas (>=5) y sueldos superiores a 1800. Si cualquiera de los datos de la ficha es inválido, rechaza la ficha completa y repite esa posición.

## Objetivo y razonamiento

Mantener contadores independientes para condiciones distintas.

Los dos contadores miden cosas independientes: una persona puede cumplir ambas condiciones. Se necesitan dos if, no if-else. El contador de fichas válidas solo aumenta al aceptar los dos datos; un sueldo inválido no debe incrementar aprobadas aunque la nota sea correcta.

## Traza o comprobación manual

Fichas (7,1900), (4,2200), (9,1500): aprobadas avanza 1,1,2 y sueldos altos avanza 1,2,2.

## Código completo

Abre [E13RecuentoDeParticipantes.java](../src/ejercicios/E13RecuentoDeParticipantes.java). La clase tiene `main`, imports y paquete: no necesita completar fragmentos. Lee en orden: datos de entrada, preparación, decisiones o repeticiones y salida.

## Pruebas y límites

Entrada:

```text
3 7 1900 4 2200 9 1500
```

Salida:

```text
Aprobadas 2 Sueldos altos 2
```

Entrada:

```text
1 5 1800
```

Salida:

```text
Aprobadas 1 Sueldos altos 0
```

Entrada:

```text
1 7 -2 3 1900
```

Salida:

```text
Ficha rechazada
Aprobadas 0 Sueldos altos 1
```

Salvo que el enunciado indique otro comportamiento, las lecturas numéricas presuponen tokens con formato correcto y suficientes datos para completar la tarea. Los rangos se validan como indica cada ejercicio. La validación de formato y EOF se desarrolla en el [tema de entrada](../../docs/03-entrada-y-salida/validacion-y-errores.md); no se ocultan excepciones con manejo avanzado.

## Antes de mirar la solución otra vez

Cambia un dato de la prueba y predice la salida. Identifica qué variable conserva información, qué instrucción se repite y qué condición termina el proceso. Provoca un error lógico cambiando la posición de una inicialización y explica el resultado, sin conservar esa versión como solución.

[Tema y práctica](../../docs/08-logica-programacion/README.md) · [Índice de ejercicios](../README.md)

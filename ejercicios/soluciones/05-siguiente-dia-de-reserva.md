# Siguiente día de una reserva

**Estado:** resuelto didáctico propio; corrección en clase no confirmada.

## Enunciado

Lee día, mes y año de una reserva. Admite años del 1 al 9998 y usa la regla gregoriana de bisiestos. Valida la fecha y, si existe, calcula el día siguiente sin usar bibliotecas de fechas. Muestra día/mes/año sin exigir ceros iniciales.

## Objetivo y razonamiento

Validar una fecha y resolver cambios de mes y año.

Antes de validar el día necesitamos saber el número de días del mes. Primero validamos mes y año, después calculamos febrero según bisiesto (divisible por 400 o divisible por 4 pero no por 100). Solo entonces comprobamos el día. Al avanzar, si supera el último día, reiniciamos a 1 y avanzamos el mes; si el mes pasa de 12, avanzamos el año. Limitar la entrada a 9998 mantiene el resultado en cuatro cifras.

## Traza o comprobación manual

| Fecha | Días del mes | Tras incrementar | Resultado |
| --- | --- | --- | --- |
| 28/2/2024 | 29 | día 29 | 29/2/2024 |
| 28/2/2025 | 28 | día 29 → mes siguiente | 1/3/2025 |
| 31/12/2025 | 31 | día 32 → mes 13 → año siguiente | 1/1/2026 |

## Código completo

Abre [E05SiguienteDiaDeReserva.java](../src/ejercicios/E05SiguienteDiaDeReserva.java). La clase tiene `main`, imports y paquete: no necesita completar fragmentos. Lee en orden: datos de entrada, preparación, decisiones o repeticiones y salida.

## Pruebas y límites

Entrada:

```text
28 2 2024
```

Salida:

```text
29/2/2024
```

Entrada:

```text
29 2 2024
```

Salida:

```text
1/3/2024
```

Entrada:

```text
29 2 1900
```

Salida:

```text
Fecha no válida
```

Salvo que el enunciado indique otro comportamiento, las lecturas numéricas presuponen tokens con formato correcto y suficientes datos para completar la tarea. Los rangos se validan como indica cada ejercicio. La validación de formato y EOF se desarrolla en el [tema de entrada](../../docs/03-entrada-y-salida/validacion-y-errores.md); no se ocultan excepciones con manejo avanzado.

## Antes de mirar la solución otra vez

Cambia un dato de la prueba y predice la salida. Identifica qué variable conserva información, qué instrucción se repite y qué condición termina el proceso. Provoca un error lógico cambiando la posición de una inicialización y explica el resultado, sin conservar esa versión como solución.

[Tema y práctica](../../docs/06-condicionales/README.md) · [Índice de ejercicios](../README.md)

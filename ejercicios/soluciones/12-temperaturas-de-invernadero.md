# Temperaturas de un invernadero

**Estado:** resuelto didáctico propio; corrección en clase no confirmada.

## Enunciado

Lee la cantidad de medidas (1..100) y después esa cantidad de temperaturas entre -50 y 60, con punto decimal. Una medida fuera de rango se rechaza y se vuelve a pedir sin contarla. Muestra media, máxima y mínima con dos decimales.

## Objetivo y razonamiento

Leer una cantidad conocida y calcular suma, media, máximo y mínimo.

Se usa la primera medida válida para inicializar ambos extremos. La suma y el número de aceptadas se conservan fuera del bucle. Los extremos se actualizan únicamente en el bloque de dato válido; una lectura inválida no consume una plaza. Al finalizar siempre hay al menos una aceptada.

## Traza o comprobación manual

| Medida válida | Suma | Máxima | Mínima |
| --- | --- | --- | --- |
| -4 | -4 | -4 | -4 |
| -7 | -11 | -4 | -7 |
| -2 | -13 | -2 | -7 |

Media=-13/3, mostrada como -4.33.

## Código completo

Abre [E12TemperaturasDeInvernadero.java](../src/ejercicios/E12TemperaturasDeInvernadero.java). La clase tiene `main`, imports y paquete: no necesita completar fragmentos. Lee en orden: datos de entrada, preparación, decisiones o repeticiones y salida.

## Pruebas y límites

Entrada:

```text
3 -4 -7 -2
```

Salida:

```text
Media -4.33 Máxima -2.00 Mínima -7.00
```

Entrada:

```text
1 0
```

Salida:

```text
Media 0.00 Máxima 0.00 Mínima 0.00
```

Entrada:

```text
2 -70 5 7
```

Salida:

```text
Medida rechazada
Media 6.00 Máxima 7.00 Mínima 5.00
```

Salvo que el enunciado indique otro comportamiento, las lecturas numéricas presuponen tokens con formato correcto y suficientes datos para completar la tarea. Los rangos se validan como indica cada ejercicio. La validación de formato y EOF se desarrolla en el [tema de entrada](../../docs/03-entrada-y-salida/validacion-y-errores.md); no se ocultan excepciones con manejo avanzado.

## Antes de mirar la solución otra vez

Cambia un dato de la prueba y predice la salida. Identifica qué variable conserva información, qué instrucción se repite y qué condición termina el proceso. Provoca un error lógico cambiando la posición de una inicialización y explica el resultado, sin conservar esa versión como solución.

[Tema y práctica](../../docs/08-logica-programacion/README.md) · [Índice de ejercicios](../README.md)

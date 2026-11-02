# Presupuesto de material

**Estado:** resuelto didáctico propio; corrección en clase no confirmada.

## Enunciado

Un taller compra cuadernos. Lee precio unitario no negativo y cantidad entera no negativa. Aplica un IVA didáctico fijo del 21 %. Muestra base, IVA y total con dos decimales. Usa punto decimal en la entrada. Es una práctica de cálculo aproximado con double, no un sistema contable.

## Objetivo y razonamiento

Calcular base, IVA y total con operaciones aritméticas.

La tasa es constante y se declara antes del cálculo. Primero calculamos la base multiplicando precio por cantidad; después el impuesto sobre esa base; finalmente sumamos ambos. Un precio negativo no debe entrar en el cálculo. El formato se aplica al mostrar, sin redondear cada operación intermedia.

## Traza o comprobación manual

| Dato / paso | Valor |
| --- | --- |
| Precio y cantidad | 2.50 y 4 |
| Base | 10.00 |
| IVA | 2.10 |
| Total | 12.10 |

## Código completo

Abre [E01PresupuestoDeMaterial.java](../src/ejercicios/E01PresupuestoDeMaterial.java). La clase tiene `main`, imports y paquete: no necesita completar fragmentos. Lee en orden: datos de entrada, preparación, decisiones o repeticiones y salida.

## Pruebas y límites

Entrada:

```text
2.5 4
```

Salida:

```text
Base 10.00 IVA 2.10 Total 12.10
```

Entrada:

```text
0 0
```

Salida:

```text
Base 0.00 IVA 0.00 Total 0.00
```

Entrada:

```text
-2 3
```

Salida:

```text
Datos no válidos
```

Salvo que el enunciado indique otro comportamiento, las lecturas numéricas presuponen tokens con formato correcto y suficientes datos para completar la tarea. Los rangos se validan como indica cada ejercicio. La validación de formato y EOF se desarrolla en el [tema de entrada](../../docs/03-entrada-y-salida/validacion-y-errores.md); no se ocultan excepciones con manejo avanzado.

## Antes de mirar la solución otra vez

Cambia un dato de la prueba y predice la salida. Identifica qué variable conserva información, qué instrucción se repite y qué condición termina el proceso. Provoca un error lógico cambiando la posición de una inicialización y explica el resultado, sin conservar esa versión como solución.

[Tema y práctica](../../docs/04-operadores/README.md) · [Índice de ejercicios](../README.md)

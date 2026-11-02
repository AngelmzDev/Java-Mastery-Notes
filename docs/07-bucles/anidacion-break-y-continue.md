# Bucles anidados, break y continue

> Apunte didáctico propio, preparado para el alcance básico indicado. No se atribuye a una corrección del profesor.

## Una repetición dentro de otra

En una figura por filas, el bucle exterior decide la fila y el interior imprime las columnas. Cada vez que cambia la fila, el bucle interior empieza de nuevo. El salto de línea va después del interior para que la fila se complete antes de bajar.

**Ejemplo didáctico propio; fragmento dentro de `main`:**

```java
for (int fila = 1; fila <= 3; fila++) {
    for (int columna = 1; columna <= 4; columna++) {
        System.out.print("*");
    }
    System.out.println();
}
```

El cuerpo interior imprime 12 estrellas: 3 filas por 4 columnas. Se ejecutan 3 saltos de línea. Si el `println()` estuviera dentro del segundo bucle, cada estrella ocuparía una línea. Si estuviera después de ambos, veríamos una fila de 12.

| Fila | Valores de columna | Acción al terminar |
| --- | --- | --- |
| 1 | 1, 2, 3, 4 | Salto de línea |
| 2 | 1, 2, 3, 4 | Salto de línea |
| 3 | 1, 2, 3, 4 | Salto de línea |

## Saltar una vuelta o terminar el recorrido

```java
for (int numero = 1; numero <= 8; numero++) {
    if (numero == 3) {
        continue;
    }
    if (numero == 6) {
        break;
    }
    System.out.print(numero + " ");
}
```

Se muestran `1 2 4 5`. `continue` evita el resto del cuerpo de la vuelta actual; en un `for` se pasa a la actualización. `break` sale del bucle más cercano; ya no hay vueltas con 7 u 8. Un `break` dentro de un `switch` anidado sale de ese `switch`, no automáticamente del bucle.

En un `while`, saltar con `continue` antes de actualizar la variable puede provocar un bucle infinito. Escribe primero una versión con una condición clara; añade estos saltos solo cuando simplifiquen la lógica. En bucles anidados, un `break` sin etiqueta termina únicamente el bucle interior. No necesitamos saltos etiquetados en este nivel.

## Practica

Dibuja un triángulo de cuatro filas: la fila 1 tiene una estrella y la fila 4, cuatro. Cambia solo el límite de columnas. Después recorre del 1 al 12 y omite los múltiplos de 4; explica si resulta más claro un `if` alrededor de la impresión o `continue`.

---

[Índice del tema](README.md) · [Ejercicios para practicar](ejercicios.md) · [Índice general](../../README.md)

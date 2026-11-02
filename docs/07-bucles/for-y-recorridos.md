# for, límites y número de iteraciones

> Apunte didáctico propio, preparado para el alcance básico indicado. No se atribuye a una corrección del profesor.

## Repetir una tarea conocida

Usa `for` cuando el recorrido y su actualización se pueden expresar claramente. Su encabezado contiene inicialización, condición y actualización. El cuerpo solo se ejecuta cuando la condición es verdadera. La condición se comprueba **antes** de cada vuelta.

**Ejemplo didáctico propio; fragmento dentro de `main`:**

```java
for (int numero = 2; numero <= 8; numero += 2) {
    System.out.println(numero);
}
```

Orden: inicializar a 2 una vez → comprobar `2 <= 8` → imprimir → sumar 2 → comprobar otra vez. Las salidas son 2, 4, 6, 8. Después se actualiza a 10, la condición falla y el bucle termina.

| Vuelta | Valor antes del cuerpo | Tras actualización |
| --- | --- | --- |
| 1 | 2 | 4 |
| 2 | 4 | 6 |
| 3 | 6 | 8 |
| 4 | 8 | 10 |

En un ascenso inclusivo con paso positivo, si `inicio <= fin`, hay `((fin - inicio) / paso) + 1` vueltas usando división entera. Si inicio supera fin, hay cero. La fórmula supone un rango pequeño sin desbordamiento y actualización constante. Para `2..9` de 2 en 2 siguen siendo cuatro vueltas: no se llega a 9.

## Exclusivos y descendentes

```java
for (int i = 0; i < 4; i++) {
    System.out.print(i + " ");
}
System.out.println();
for (int cuenta = 3; cuenta >= 1; cuenta--) {
    System.out.print(cuenta + " ");
}
```

El primer recorrido produce `0 1 2 3`: cuatro vueltas con límite superior exclusivo. El segundo produce `3 2 1`. En cadenas y arrays, el límite exclusivo `i < length` impide intentar la posición inexistente `length`.

## Qué va dentro y qué va fuera

La inicialización de un acumulador va antes para no perder el resultado. La operación repetida va dentro. El resumen final va después. En una tabla de multiplicar, la lectura del número de la tabla va antes y cada producto va dentro; pedir ese número dentro cambiaría la tarea.

Errores frecuentes: actualizar en dirección contraria (`i++` cuando quieres bajar), escribir `<= length`, poner un punto y coma después del `for`, o modificar a mano el índice varias veces sin seguir su traza. No uses la fórmula de vueltas si el cuerpo modifica la variable de control o ejecuta `break`.

## Practica

Muestra los múltiplos de 3 desde 6 hasta 21, ambos incluidos, y después en orden inverso. Predice las seis salidas antes de escribir Java. Relación: [recorridos de cadenas](../05-strings/recorridos-y-palindromos.md).

---

[Índice del tema](README.md) · [Ejercicios para practicar](ejercicios.md) · [Índice general](../../README.md)

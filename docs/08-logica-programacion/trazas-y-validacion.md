# Centinelas, trazas y errores lógicos

> Apunte didáctico propio, preparado para el alcance básico indicado. No se atribuye a una corrección del profesor.

## Un valor que termina la entrada

Un centinela es un valor reservado para terminar. No se procesa como un dato normal. Si -1 es el centinela, no puede representar también una temperatura válida negativa del mismo ejercicio: elige un dominio y una señal que no se confundan.

**Ejemplo didáctico propio; fragmento dentro de `main`:** leer cantidades no negativas hasta -1; otros negativos se rechazan.

```java
java.util.Scanner entrada = new java.util.Scanner(System.in);
int cantidad = entrada.nextInt();
int contador = 0;
long suma = 0;
while (cantidad != -1) {
    if (cantidad >= 0) {
        suma += cantidad;
        contador++;
    } else {
        System.out.println("Cantidad rechazada");
    }
    cantidad = entrada.nextInt();
}
if (contador > 0) {
    System.out.println((double) suma / contador);
} else {
    System.out.println("Sin datos");
}
```

La primera lectura va antes para poder recibir el centinela inmediatamente. La última lectura del cuerpo prepara la próxima condición. Si la colocamos solo en la rama válida, un negativo inválido se repetirá indefinidamente. La suma va después de comprobar el centinela y la validez: -1 y -3 no deben sumarse. El ejemplo presupone enteros y que la secuencia acabará con -1.

## Simulación manual

Con `4, -3, 8, -1`:

| Dato al comprobar el while | ¿Entra? | Suma después | Contador | Próxima lectura |
| --- | --- | --- | --- | --- |
| 4 | Sí | 4 | 1 | -3 |
| -3 | Sí, pero se rechaza | 4 | 1 | 8 |
| 8 | Sí | 12 | 2 | -1 |
| -1 | No | 12 | 2 | Ninguna |

La media es 6. Con -1 primero, se muestra `Sin datos`: no se divide por cero. Una traza debe mostrar el valor **antes** y/o **después** de la acción con una etiqueta clara; mezclar ambos momentos puede ocultar un error.

## Casos que revelan fallos

Prueba cero datos, un dato, varios iguales, el menor y mayor admitidos, un inválido entre válidos y un resultado con decimales. Para máximos y mínimos añade todos negativos; para cadenas, vacío y una letra; para arrays, un solo elemento y valor ausente.

Un error lógico típico consiste en reiniciar el contador dentro del bucle. Otro es hacer la media de las medias sin ponderar, o contar intentos en vez de datos válidos. El depurador ayuda a localizarlo, pero la especificación decide qué resultado es correcto.

## Practica

Un cajero registra importes positivos en céntimos y usa 0 para terminar. Diseña una traza con 350, -8, 120, 0. El total debe ser 470 y el recuento 2; explica por qué no puedes aceptar 0 como venta si también lo usas de centinela.

---

[Índice del tema](README.md) · [Ejercicios para practicar](ejercicios.md) · [Índice general](../../README.md)

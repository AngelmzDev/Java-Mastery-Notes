# Combinar condiciones, bucles y arrays

> Apunte didáctico propio, preparado para el alcance básico indicado. No se atribuye a una corrección del profesor.

## Pensar en niveles de responsabilidad

No hay que elegir una sola estructura para todo el programa. El bucle exterior puede repetir el servicio, un `switch` seleccionar una acción y un `for` recorrer un array. Una condición interior decide qué hacer con cada elemento. Cada nivel responde a una pregunta distinta.

**Ejemplo didáctico propio, clase completa:** menú de plazas disponibles en tres talleres. Introduce opciones enteras; la validación de formato se estudia por separado.

```java
import java.util.Scanner;

public class MenuTalleres {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        int[] plazas = {2, 0, 4};
        int opcion;
        do {
            System.out.println("1 Listar, 2 Contar talleres con plazas, 0 Salir");
            opcion = entrada.nextInt();
            switch (opcion) {
                case 1 -> {
                    for (int i = 0; i < plazas.length; i++) {
                        System.out.println("Taller " + (i + 1) + ": " + plazas[i]);
                    }
                }
                case 2 -> {
                    int disponibles = 0;
                    for (int cantidad : plazas) {
                        if (cantidad > 0) {
                            disponibles++;
                        }
                    }
                    System.out.println("Talleres con plazas: " + disponibles);
                }
                case 0 -> System.out.println("Hasta pronto");
                default -> System.out.println("Opción no válida");
            }
        } while (opcion != 0);
    }
}
```

El array y el lector van **antes** del menú para no recrearlos en cada vuelta. La lectura de la opción va **dentro**, o siempre se repetiría la misma. `disponibles` va dentro del caso 2 y antes de su `for`: cada consulta comienza a cero, pero el contador conserva el resultado entre elementos. El resumen va después de recorrer; si se imprime dentro, se verían parciales.

Con opciones `2, 2, 0` se obtiene 2 en ambas consultas, no 2 y 4. Con opción 1 se muestran los tres talleres, incluidos los de cero plazas. El caso 0 imprime la despedida, termina el `switch` y luego el `do while` comprueba la condición y finaliza.

## Una herramienta para decidir la ubicación

| Pregunta | Ubicación orientativa |
| --- | --- |
| ¿Se prepara una sola vez? | Antes del bucle exterior |
| ¿Cambia con cada dato? | Dentro del bucle de lectura |
| ¿Solo tiene sentido para datos válidos? | Dentro del `if` válido |
| ¿Resume todas las vueltas? | Después del bucle |
| ¿Debe reiniciarse en cada consulta del menú? | Dentro del caso, antes del recorrido |

No anides por apariencia. La validación de una opción no tiene por qué recorrer el array; son tareas independientes. Empieza con un menú que solo imprime opciones y añade una acción cada vez.

## Practica

Añade una opción 3 que sume todas las plazas. Antes de escribirla, distingue el número de talleres con disponibilidad del total de plazas: son preguntas distintas y necesitan actualizaciones distintas. Consulta ambas opciones dos veces para detectar reinicios incorrectos.

---

[Índice del tema](README.md) · [Ejercicios para practicar](ejercicios.md) · [Índice general](../../README.md)

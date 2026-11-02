# Validar datos y distinguir errores de lectura

> Apunte didáctico propio, preparado para el alcance básico indicado. No se atribuye a una corrección del profesor.

## Formato válido no significa dato permitido

`abc` no tiene formato de entero. `-5` sí es un entero, pero puede no ser una cantidad admitida. Separa ambos controles: primero comprobar si se puede leer; después si el dato cumple el rango. Aquí no desarrollamos manejo avanzado de excepciones.

`nextInt()` lanza `InputMismatchException` si el siguiente token no se puede convertir a entero. El token incorrecto permanece pendiente; hay que consumirlo antes de volver a intentarlo. `Integer.parseInt("abc")` lanza `NumberFormatException`: interpreta un texto ya leído y no utiliza el lector.

**Ejemplo didáctico propio, clase completa; requiere haber leído [while](../07-bucles/while-y-do-while.md):**

```java
import java.util.Scanner;

public class CantidadValida {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        int cantidad = 0;
        boolean valida = false;
        while (!valida && entrada.hasNext()) {
            if (entrada.hasNextInt()) {
                cantidad = entrada.nextInt();
                valida = cantidad >= 1 && cantidad <= 20;
                if (!valida) {
                    System.out.println("Fuera de rango");
                }
            } else {
                System.out.println("Escribe un entero");
                entrada.next();
            }
        }
        if (valida) {
            System.out.println("Aceptado: " + cantidad);
        } else {
            System.out.println("Entrada terminada sin cantidad válida");
        }
    }
}
```

`hasNextInt()` comprueba sin consumir el token. En la rama de error, `next()` lo descarta; sin ella el bucle inspeccionaría indefinidamente el mismo texto. `hasNext()` permite finalizar si se acaba la entrada (EOF), aunque en una consola interactiva puede esperar a que el usuario escriba. `valida` conserva el estado entre vueltas.

| Entrada | Es entero | En rango | Acción |
| --- | --- | --- | --- |
| `hola` | No | No se evalúa | Descartar token |
| `0` | Sí | No | Pedir otro |
| `12` | Sí | Sí | Salir y mostrar 12 |

No uses solamente `cantidad != 0` si el requisito real es `1..20`. Los mensajes deben explicar qué espera el programa. El código acepta tokens separados por espacios o saltos de línea; no comprueba que cada línea contenga exactamente un dato.

## Practica

Adapta el rango para un dorsal entre 10 y 99. Prueba texto, 9, 10, 99 y 100. Justifica por qué leer y actualizar `valida` deben estar dentro del bucle.

---

[Índice del tema](README.md) · [Ejercicios para practicar](ejercicios.md) · [Índice general](../../README.md)

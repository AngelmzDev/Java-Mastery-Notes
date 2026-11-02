# Leer con Scanner sin perder líneas

> Apunte didáctico propio, preparado para el alcance básico indicado. No se atribuye a una corrección del profesor.

## Un lector, varias lecturas

`System.in` representa la entrada estándar. `Scanner` puede leer sus datos y convertir tokens a tipos. Un token es una pieza separada por delimitadores; por defecto se usan espacios en blanco. `nextLine()` trabaja con el resto de la línea, no con un único token.

**Ejemplo didáctico propio, clase completa:**

```java
import java.util.Scanner;

public class Ficha {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        System.out.println("Edad:");
        int edad = entrada.nextInt();
        entrada.nextLine();
        System.out.println("Nombre completo:");
        String nombre = entrada.nextLine();
        System.out.println(nombre + ": " + edad);
    }
}
```

1. El `import` permite utilizar el nombre corto de la clase.
2. `new Scanner(System.in)` construye el lector una vez, fuera de las repeticiones.
3. `nextInt()` consume el entero, pero no necesariamente el fin de línea posterior.
4. El primer `nextLine()` consume lo que queda de esa línea (a menudo vacío), incluido su separador.
5. El segundo `nextLine()` puede leer `Ana María` completo.

Si el usuario escribiera texto adicional después de la edad en la misma línea, esa lectura de limpieza también lo descartaría. Por eso el programa pide cada dato en una línea independiente.

| Método | Devuelve | Ejemplo de entrada |
| --- | --- | --- |
| `next()` | Una pieza de texto | De `Ana María` lee `Ana` |
| `nextLine()` | Resto de la línea | `Ana María` completo |
| `nextInt()` | `int` | `18` |
| `nextDouble()` | `double` | Decimal según la configuración regional |
| `nextFloat()` | `float` | Decimal según la configuración regional |
| `nextBoolean()` | `boolean` | `true` o `false`, no `sí`/`no` |

Para fijar el punto decimal en un ejercicio se puede importar `java.util.Locale` y usar `entrada.useLocale(Locale.US);`. Avisa entonces al usuario de que escriba `2.5`. Sin eso, la coma puede ser el separador esperado.

## Otra estrategia: leer siempre líneas

```java
java.util.Scanner entrada = new java.util.Scanner(System.in);
String linea = entrada.nextLine().trim();
int unidades = Integer.parseInt(linea);
String descripcion = entrada.nextLine();
System.out.println(unidades + " " + descripcion);
```

Aquí no queda un fin de línea pendiente de una lectura numérica. Pero `parseInt` puede fallar: leer una línea no valida su contenido. Elige una estrategia consistente y conoce sus límites.

No construyas varios `Scanner` sobre `System.in`: sus lecturas pueden interferir. Cerrar el lector cierra también esa entrada; no lo cierres en mitad de un programa que seguirá leyendo. En estos ejemplos de consola se mantiene abierto hasta finalizar el proceso.

## Practica

Pide número de páginas y título de un libro en dos líneas. Prueba un título con espacios. Relación: [validación de entradas](validacion-y-errores.md).

---

[Índice del tema](README.md) · [Ejercicios para practicar](ejercicios.md) · [Índice general](../../README.md)

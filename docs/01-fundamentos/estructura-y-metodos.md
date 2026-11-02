# Leer una clase y llamar a un método

> Apunte didáctico propio, preparado para el alcance básico indicado. No se atribuye a una corrección del profesor.

## Un programa pequeño completo

**Ejemplo didáctico propio.** Archivo `src/aprendizaje/Saludo.java`:

```java
package aprendizaje;

public class Saludo {
    public static void main(String[] args) {
        saludar();
        System.out.println("Fin del programa");
    }

    static void saludar() {
        System.out.println("Hola, DAM");
    }
}
```

1. `package aprendizaje;` da un nombre de organización a la clase. Dentro de `src`, la ruta acompaña al paquete.
2. `public class Saludo` declara la clase. El archivo debe llamarse `Saludo.java`, respetando mayúsculas.
3. `public static void main(String[] args)` es el punto de entrada que empleamos. `public` permite acceder al método; `static` permite invocarlo sin crear un objeto `Saludo`; `void` indica que no devuelve un resultado; `args` es un array de argumentos de texto, que estudiaremos más adelante.
4. `saludar();` invoca otro método: la ejecución entra en su bloque, imprime y vuelve a la instrucción siguiente de `main`.
5. Las llaves delimitan bloques. El punto y coma termina instrucciones como una llamada o una asignación; no se añade después del encabezado de `if` o `for`.

Un método agrupa una tarea con nombre. Declararlo no equivale a ejecutarlo: la tarea se realiza cuando se llama. No se puede declarar un método dentro de `main`.

```text
main → saludar → imprime Hola, DAM → vuelve a main → imprime Fin → termina
```

## Clases, objetos y primitivas

Una clase define un tipo y su comportamiento. Un objeto es una instancia concreta, creada normalmente con `new`. Un tipo primitivo almacena un valor sencillo, como `int` o `boolean`. No se crean enteros con `new` en este nivel.

En `Scanner entrada = new Scanner(System.in);`, `Scanner` es la clase, `new Scanner(...)` construye el objeto y `entrada` guarda una referencia que permite utilizarlo. `entrada.nextLine()` invoca un método sobre ese objeto. En cambio, `Math.pow(2, 3)` es una llamada estática sobre la clase `Math`.

`import java.util.Scanner;` permite escribir `Scanner` en vez del nombre completo `java.util.Scanner`. Va después de `package`, antes de la clase. No crea el objeto ni lee datos. `String`, `System` y `Math` pertenecen a `java.lang`, importado implícitamente.

## Errores habituales

- `Public` y `public` son diferentes: Java distingue mayúsculas.
- Una llave de cierre prematura puede dejar una instrucción fuera del método.
- Cambiar el nombre de la clase pública sin cambiar el archivo provoca un error de compilación.
- Un punto y coma aislado tras `if (...)` crea una instrucción vacía y separa el bloque de la condición.

## Practica

Añade un método `despedir()` que imprima un mensaje. Llámalo dos veces desde `main`; dibuja el orden de las llamadas antes de ejecutar. No necesitas objetos propios ni programación orientada a objetos avanzada.

---

[Índice del tema](README.md) · [Ejercicios para practicar](ejercicios.md) · [Índice general](../../README.md)

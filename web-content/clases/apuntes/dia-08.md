# Apuntes completos — Día 8

> **Procedencia:** apuntes reconstruidos a partir de las clases, aportados al proyecto. Se conservan las advertencias de fidelidad y las ampliaciones que ya estaban etiquetadas. Se han anonimizado identificadores personales cuando procede.

[Volver a la ficha de estudio](../dia-08.md)

## Conversión de bases, cadenas, bucles, menús y arrays en Java

> **Objetivo:** apuntes autónomos para estudiar la clase 8 de Programación (DAM), con explicaciones ordenadas, razonamientos paso a paso y ejemplos ejecutables.
>
> **Procedencia del contenido:** los **temas y ejercicios** siguen la transcripción de la clase 8. He reconstruido y mejorado el razonamiento, corregido expresiones confundidas por el reconocimiento de voz y añadido ejemplos, validaciones y soluciones completas cuando ayudan a estudiar. Las partes que **van más allá de lo efectivamente desarrollado por el profesor** están identificadas como **Ampliación didáctica** o **Solución propuesta**. No deben interpretarse automáticamente como materia exigida por el profesor.
>
> **Nivel y estilo:** Java básico, principalmente `Scanner`, `String`, `if`, `switch`, `for`, `while`, `do while`, arrays y `Math.random()`, sin exigir programación orientada a objetos ni métodos auxiliares propios.

---

## Índice

1. [Qué se trabaja en la sesión](#1-qué-se-trabaja-en-la-sesión)
2. [Conversión de decimal a otras bases](#2-conversión-de-decimal-a-otras-bases)
3. [Recorrer una palabra al revés](#3-recorrer-una-palabra-al-revés)
4. [Comprobar si una palabra es palíndroma](#4-comprobar-si-una-palabra-es-palíndroma)
5. [`break` y `continue`](#5-break-y-continue)
6. [Dibujar cuadrados con `for` anidados](#6-dibujar-cuadrados-con-for-anidados)
7. [Analizar oraciones, palabras y caracteres](#7-analizar-oraciones-palabras-y-caracteres)
8. [Menús iterativos con `do while` y `switch`](#8-menús-iterativos-con-do-while-y-switch)
9. [Calcular el factorial con `for`](#9-calcular-el-factorial-con-for)
10. [Introducción a los arrays](#10-introducción-a-los-arrays)
11. [Crear e inicializar arrays](#11-crear-e-inicializar-arrays)
12. [Tamaño, acceso y modificación](#12-tamaño-acceso-y-modificación)
13. [Recorrer arrays con `for` y `for-each`](#13-recorrer-arrays-con-for-y-for-each)
14. [Ejercicio integrador: gestor de amigos](#14-ejercicio-integrador-gestor-de-amigos)
15. [Ampliaciones del gestor: buscar y evitar duplicados](#15-ampliaciones-del-gestor-buscar-y-evitar-duplicados)
16. [Criterios para elegir estructuras](#16-criterios-para-elegir-estructuras)
17. [Conceptos que debo saber explicar](#17-conceptos-que-debo-saber-explicar)
18. [Sintaxis que debo saber escribir](#18-sintaxis-que-debo-saber-escribir)
19. [Errores frecuentes y cómo corregirlos](#19-errores-frecuentes-y-cómo-corregirlos)
20. [Aspectos confusos o incompletos de la transcripción](#20-aspectos-confusos-o-incompletos-de-la-transcripción)
21. [Ejercicios de repaso](#21-ejercicios-de-repaso)

---

# 1. Qué se trabaja en la sesión

La clase comienza terminando un ejercicio de la sesión anterior: convertir un **número decimal a base 2, 8 o 16**. Después corrige varios ejercicios de `for` y de trabajo con `String`:

- escribir una palabra de atrás hacia delante;
- identificar palíndromos mediante comparación de caracteres;
- dibujar figuras con `for` anidados;
- analizar un texto usando `split` y sustituciones;
- construir un menú que se repite hasta elegir «salir»;
- calcular factoriales.

En la segunda mitad comienza el siguiente bloque: **estructuras de almacenamiento**, especialmente **arrays**. Se explica cómo crearlos, leer sus posiciones, modificarlos, recorrerlos con `for` y `for-each`, y se plantea un **gestor de amigos** para integrar todo lo anterior.

La idea común a los ejercicios es identificar **qué datos se almacenan, qué pasos se repiten, qué condición detiene el proceso y qué variable debe conservarse entre iteraciones**.

# 2. Conversión de decimal a otras bases

## 2.1. Qué representa una base numérica

Una base indica cuántos símbolos distintos se utilizan para representar números.

| Base | Nombre | Dígitos admitidos | Ejemplo |
|---|---|---|---|
| 2 | Binaria | `0`, `1` | `10000₂` |
| 8 | Octal | `0` a `7` | `20₈` |
| 10 | Decimal | `0` a `9` | `16₁₀` |
| 16 | Hexadecimal | `0` a `9` y `A` a `F` | `10₁₆` |

En todas estas representaciones, `10000₂`, `20₈`, `16₁₀` y `10₁₆` representan **la misma cantidad: dieciséis unidades**.

En hexadecimal se utilizan letras cuando un dígito debe representar un valor superior a 9:

| Valor decimal del dígito | 10 | 11 | 12 | 13 | 14 | 15 |
|---|---|---|---|---|---|---|
| Símbolo hexadecimal | A | B | C | D | E | F |

## 2.2. Algoritmo: dividir y conservar los restos

Para convertir un entero decimal positivo a una base `b`:

1. Calcular el **resto** de dividir el número entre la base: `numero % base`.
2. Calcular el **cociente entero**: `numero / base`.
3. Repetir con el cociente obtenido mientras siga siendo **mayor o igual que la base**.
4. Colocar cada resto **a la izquierda** de los restos anteriores.
5. Cuando el cociente restante sea menor que la base, colocarlo **a la izquierda del todo**.

> **Regla fundamental:** primero se calcula el resto del número actual; **después** se reemplaza el número por el cociente. Si cambias el número antes de calcular el módulo, puedes perder el resto que necesitabas.

## 2.3. Ejemplo resuelto: `16₁₀` a binario

| Vuelta | Número antes de dividir | División entera entre 2 | Resto `% 2` | Conversión parcial (resto por la izquierda) |
|---:|---:|---:|---:|---|
| 1 | 16 | 8 | 0 | `0` |
| 2 | 8 | 4 | 0 | `00` |
| 3 | 4 | 2 | 0 | `000` |
| 4 | 2 | 1 | 0 | `0000` |

Al quedar `1`, que es menor que la base `2`, el bucle se detiene y se coloca a la izquierda:

```text
1 + 0000 = 10000
```

Por tanto, `16₁₀ = 10000₂`.

**¿Por qué no concatenar los restos al final?** Si se almacenaran como `conversion = conversion + resto`, se estarían escribiendo en el orden en que se calculan, que es de derecha a izquierda en la representación final. Para obtener la representación correcta se utiliza:

```java
conversion = resto + conversion;
```

**No es lo mismo:**

```java
conversion += resto;          // añade por la DERECHA
conversion = resto + conversion; // añade por la IZQUIERDA
```

## 2.4. ¿Por qué aquí se utiliza `while`?

El profesor pregunta si es necesario realizar una división **siempre**. La respuesta es **no**: si el número es `1` y queremos pasarlo a base `2`, ya tenemos directamente la representación `1`.

Por eso se utiliza una comprobación previa:

```java
while (numero >= base) {
    // calcular resto y cociente
}
```

- **`while`**: primero comprueba; puede ejecutar el cuerpo **cero veces**.
- **`do while`**: ejecuta el cuerpo al menos **una vez**.

En este algoritmo concreto, `while` permite **evitar divisiones innecesarias** cuando el valor inicial ya es menor que la base. **Matiz técnico:** también puede diseñarse un conversor correcto con `do while`; el motivo de elegir `while` aquí es la organización propuesta en clase, no que `do while` sea intrínsecamente incorrecto.

## 2.5. Versión completa para bases 2, 8 y 16

**Reconstrucción y mejora del algoritmo explicado en clase.** Se ha añadido validación y se ha escrito el `switch` necesario para representar los restos `10` a `15` como letras. Es un programa completo y ejecutable:

```java
import java.util.Scanner;

public class ConvertirBases {
    public static void main(String[] args) {
        Scanner lector = new Scanner(System.in);

        System.out.print("Número decimal no negativo: ");
        int numero = lector.nextInt();

        System.out.print("Base de destino (2, 8 o 16): ");
        int base = lector.nextInt();
        lector.close();

        if (numero < 0 || (base != 2 && base != 8 && base != 16)) {
            System.out.println("Número o base no válidos.");
        } else {
            int original = numero;
            String conversion = "";

            while (numero >= base) {
                int resto = numero % base; // ANTES de cambiar numero
                numero = numero / base;

                String simbolo;
                switch (resto) {
                    case 10 -> simbolo = "A";
                    case 11 -> simbolo = "B";
                    case 12 -> simbolo = "C";
                    case 13 -> simbolo = "D";
                    case 14 -> simbolo = "E";
                    case 15 -> simbolo = "F";
                    default -> simbolo = String.valueOf(resto);
                }

                conversion = simbolo + conversion;
            }

            // Falta colocar el cociente final, que es menor que la base.
            String simboloFinal;
            switch (numero) {
                case 10 -> simboloFinal = "A";
                case 11 -> simboloFinal = "B";
                case 12 -> simboloFinal = "C";
                case 13 -> simboloFinal = "D";
                case 14 -> simboloFinal = "E";
                case 15 -> simboloFinal = "F";
                default -> simboloFinal = String.valueOf(numero);
            }

            conversion = simboloFinal + conversion;
            System.out.println(original + " en base " + base + ": " + conversion);
        }
    }
}
```

**Casos de prueba:**

| Entrada | Base | Salida esperada |
|---:|---:|---|
| 16 | 2 | `10000` |
| 16 | 8 | `20` |
| 16 | 16 | `10` |
| 254 | 16 | `FE` |
| 0 | 2 | `0` |
| 1 | 16 | `1` |

**Observaciones importantes:**

- `conversion` empieza como `""` (*cadena vacía*), no como `null`: representa un texto inicialmente sin caracteres.
- La suma `resto + conversion` produce una cadena porque uno de los operandos es un `String`.
- El último dígito también debe convertirse a `A`–`F` si vale entre 10 y 15.
- El algoritmo se plantea para **enteros no negativos**; tratar números negativos o partes decimales requeriría decisiones adicionales.
- No debe permitirse una base `0` (división por cero), una base `1` ni una base diferente de las soportadas.

### Ampliación didáctica: evitar repetir el `switch`

Se puede asociar cada valor de 0 a 15 a un carácter de una cadena fija. Esta variante es más compacta, pero no es la construcción con `switch` que se desarrolla durante la explicación:

```java
String digitos = "0123456789ABCDEF";
String conversion = "";
int numero = 254;
int base = 16;

do {
    int resto = numero % base;
    conversion = digitos.charAt(resto) + conversion;
    numero /= base;
} while (numero > 0);

System.out.println(conversion); // FE
```

En esta **variante diferente**, `do while` sí resulta natural: incluso `0` necesita producir un dígito. Observa que la condición es `numero > 0`, no `numero >= base`.

# 3. Recorrer una palabra al revés

## 3.1. `String`, `length()` y `charAt()`

Una cadena contiene caracteres accesibles por **índice**. Los índices comienzan en cero.

Ejemplo:

```text
Cadena:   J  A  V  A
Índice:   0  1  2  3
```

```java
String palabra = "JAVA";
int longitud = palabra.length();   // 4
char primera = palabra.charAt(0);  // 'J'
char ultima = palabra.charAt(3);   // 'A'
```

La última posición válida siempre es:

```java
palabra.length() - 1
```

**No confundas** el número de caracteres (`length()`) con el índice del último (`length() - 1`).

## 3.2. Recorrido descendente

Si queremos mostrar los caracteres desde el último hasta el primero, necesitamos:

- **Inicio:** `palabra.length() - 1`.
- **Condición:** `i >= 0`.
- **Actualización:** `i--`.

```java
import java.util.Scanner;

public class PalabraAlReves {
    public static void main(String[] args) {
        Scanner lector = new Scanner(System.in);
        System.out.print("Escribe una palabra: ");
        String palabra = lector.nextLine();
        lector.close();

        for (int i = palabra.length() - 1; i >= 0; i--) {
            char letra = palabra.charAt(i);
            System.out.print(letra);
        }

        System.out.println();
    }
}
```

Entrada: `JAVA` → salida: `AVAJ`.

Si se quiere separar cada letra con un guion, dentro del `for` se puede imprimir `System.out.print(letra + "-");`. Esto también deja un guion al final; si no lo queremos, hay que controlar cuándo insertar el separador.

### Ejecución del bucle

| Vuelta | `i` | Carácter | Texto acumulado visualmente |
|---:|---:|---|---|
| 1 | 3 | A | A |
| 2 | 2 | V | AV |
| 3 | 1 | A | AVA |
| 4 | 0 | J | AVAJ |
| Fin | -1 | No se ejecuta | AVAJ |

## 3.3. Errores vistos durante la corrección

**Error 1: empezar en `length()`**

```java
int i = palabra.length(); // ERROR si se usa inmediatamente con charAt(i)
```

Para `"JAVA"`, `length()` vale 4; `charAt(4)` no existe.

**Error 2: incrementar en un recorrido descendente**

```java
for (int i = palabra.length() - 1; i >= 0; i++) {
    System.out.println(palabra.charAt(i));
}
```

La primera posición puede ser válida, pero después `i` aumenta y se sale del rango por arriba. La condición `i >= 0` no frena ese crecimiento.

**Excepción asociada:** `StringIndexOutOfBoundsException` (en la transcripción aparece mal reconocida). Un mensaje parecido a `Index 4 out of bounds for length 4` significa que se está accediendo a un índice inexistente.

**Error 3: utilizar `split("")` sin necesitarlo.** Para sacar un carácter individual de una posición, `charAt(i)` es suficiente. No hace falta generar un array adicional.

# 4. Comprobar si una palabra es palíndroma

## 4.1. Definición

Un **palíndromo** es una palabra que se lee igual de izquierda a derecha y de derecha a izquierda.

Ejemplos: `reconocer`, `radar`, `oso`.

La estrategia explicada es **comparar posiciones simétricas**, no invertir obligatoriamente toda la palabra:

```text
r e c o n o c e r
0 1 2 3 4 5 6 7 8
|               |
  |           |
    |       |
      |   |
```

Comparaciones para `reconocer`:

| Iteración `i` | Izquierda | Derecha: `length() - 1 - i` | Letras |
|---:|---:|---:|---|
| 0 | 0 | 8 | r / r |
| 1 | 1 | 7 | e / e |
| 2 | 2 | 6 | c / c |
| 3 | 3 | 5 | o / o |

La posición central, `4`, no necesita compararse consigo misma.

## 4.2. ¿Por qué solo se recorre la mitad?

Si una palabra mide 8 caracteres, basta con **4 comparaciones**. Si mide 9, también bastan **4**, porque la letra central no tiene pareja distinta.

El límite del `for` es:

```java
i < palabra.length() / 2
```

La división entre enteros descarta la parte decimal. Así, `9 / 2` da `4` y el bucle con `i < 4` recorre `0, 1, 2, 3`.

**Importante:** no es necesario usar `i <= longitud / 2`, ni detectar previamente si la longitud es par o impar. El mismo bucle sirve para ambos casos.

## 4.3. Algoritmo con bandera booleana y `break`

1. Inicializar una variable booleana suponiendo que la palabra sí es palíndroma: `true`.
2. Comparar cada pareja simétrica.
3. **En cuanto una pareja sea diferente**, cambiar la variable a `false`.
4. Abandonar el bucle con `break`: ya no existe posibilidad de que sea palíndroma.
5. Mostrar el resultado después del recorrido.

```java
import java.util.Scanner;

public class ComprobarPalindromo {
    public static void main(String[] args) {
        Scanner lector = new Scanner(System.in);
        System.out.print("Palabra: ");
        String palabra = lector.nextLine();
        lector.close();

        boolean esPalindromo = true;

        for (int i = 0; i < palabra.length() / 2; i++) {
            char izquierda = palabra.charAt(i);
            char derecha = palabra.charAt(palabra.length() - 1 - i);

            if (izquierda != derecha) {
                esPalindromo = false;
                break;
            }
        }

        if (esPalindromo) {
            System.out.println("La palabra es palíndroma.");
        } else {
            System.out.println("La palabra no es palíndroma.");
        }
    }
}
```

## 4.4. Error lógico importante: volver a poner `true`

No debemos escribir:

```java
if (izquierda == derecha) {
    esPalindromo = true;
} else {
    esPalindromo = false;
}
```

Si una comparación temprana falla, `esPalindromo` pasa a `false`; pero **otra pareja posterior igual podría cambiarla de nuevo a `true`**, ocultando el fallo. La solución correcta es **solo cambiar a `false` cuando se encuentre una desigualdad**. El `break` evita comparaciones posteriores innecesarias.

## 4.5. `char` y `String` no se comparan igual

```java
char a = 'A';
char b = 'A';
System.out.println(a == b); // true
```

`char` es un tipo primitivo; sus valores pueden compararse con `==` y `!=`. En cambio, para comparar **contenido** de objetos `String` se utiliza `equals()`:

```java
String a = "Java";
String b = "Java";
System.out.println(a.equals(b)); // true
```

No se llama `equals()` sobre un `char` primitivo.

### Ampliación didáctica: ignorar mayúsculas y espacios

El algoritmo anterior compara **exactamente** los caracteres introducidos. Si se quiere considerar `Ana` y `ana` equivalentes, antes del bucle se puede hacer:

```java
palabra = palabra.toLowerCase();
```

Si se trata de una frase con espacios, signos de puntuación o tildes, será necesario decidir explícitamente qué se ignora y cómo se normaliza. **No es parte de la solución básica de clase**.

# 5. `break` y `continue`

La clase los repasa como sentencias que modifican el recorrido normal de una estructura.

| Sentencia | Efecto en un bucle |
|---|---|
| `break` | Termina **el bucle más cercano** inmediatamente. |
| `continue` | Abandona **solo la iteración actual** y pasa a la siguiente comprobación/actualización. |

## 5.1. `break`: dejar de buscar cuando ya sabemos el resultado

```java
for (int i = 1; i <= 10; i++) {
    if (i == 4) {
        break;
    }
    System.out.print(i + " ");
}
// Imprime: 1 2 3
```

En el palíndromo es útil porque basta encontrar **una sola pareja diferente**.

## 5.2. `continue`: ignorar una vuelta, no terminar todas

```java
for (int i = 1; i <= 5; i++) {
    if (i == 3) {
        continue;
    }
    System.out.print(i + " ");
}
// Imprime: 1 2 4 5
```

## 5.3. Bucles anidados

Si se escribe un `break` dentro del `for` interior, termina **solo ese `for` interior**. El `for` exterior puede seguir ejecutándose.

```java
for (int fila = 1; fila <= 2; fila++) {
    for (int columna = 1; columna <= 5; columna++) {
        if (columna == 3) {
            break;
        }
        System.out.print(columna);
    }
    System.out.println();
}
// Salida:
// 12
// 12
```

**No confundir:** en un `switch` clásico, `break` se utiliza para salir de ese `switch`; dentro de un bucle, se utiliza para terminar el bucle correspondiente.

---

# 6. Dibujar cuadrados con `for` anidados

## 6.1. Dos dimensiones: filas y columnas

Un cuadrado de 4 por 4 necesita **4 filas** y **4 columnas por cada fila**:

```text
* * * *
* * * *
* * * *
* * * *
```

Una solución que copie cuatro veces un mismo bloque podría funcionar para tamaño 4, pero **no sirve de forma general**. Necesitamos dos repeticiones:

- **`for` exterior:** cambia de fila.
- **`for` interior:** pinta todas las columnas de la fila actual.

Cuando termina el `for` interior se hace un salto de línea. **El salto se coloca fuera del `for` interior y dentro del exterior.**

```java
public class CuadradoRelleno {
    public static void main(String[] args) {
        int tamano = 4;

        for (int i = 0; i < tamano; i++) {       // filas
            for (int j = 0; j < tamano; j++) {   // columnas
                System.out.print("* ");
            }
            System.out.println(); // siguiente fila
        }
    }
}
```

Si `tamano = 6`, se construyen 6 filas con 6 asteriscos cada una **sin cambiar el código del bucle**.

## 6.2. Diferencia entre `print` y `println`

| Método | Qué hace |
|---|---|
| `System.out.print(...)` | Imprime sin saltar de línea automáticamente. |
| `System.out.println(...)` | Imprime y después salta de línea. |
| `System.out.println()` | Salta de línea sin imprimir texto adicional. |

Para hacer una fila, usamos `print`. Al terminarla, `println()`.

## 6.3. Cuadrado con borde de asteriscos e interior de guiones

Resultado deseado para tamaño 5:

```text
* * * * *
* - - - *
* - - - *
* - - - *
* * * * *
```

El objetivo es decidir para cada posición `(fila, columna)` si está en el **borde** o en el **interior**.

Una posición está en el borde si se cumple **al menos una** condición:

1. `i == 0`: primera fila.
2. `i == tamano - 1`: última fila.
3. `j == 0`: primera columna.
4. `j == tamano - 1`: última columna.

Por eso se unen con `||` (OR).

```java
public class CuadradoBorde {
    public static void main(String[] args) {
        int tamano = 5;

        for (int i = 0; i < tamano; i++) {
            for (int j = 0; j < tamano; j++) {
                if (i == 0 || i == tamano - 1 ||
                    j == 0 || j == tamano - 1) {
                    System.out.print("* ");
                } else {
                    System.out.print("- ");
                }
            }
            System.out.println();
        }
    }
}
```

### ¿Por qué no `i == tamano`?

Si `tamano = 5`, el `for` recorre las posiciones `0, 1, 2, 3, 4`. **Nunca vale 5**; por tanto, comparar la última fila con `tamano` siempre sería falso. La última es `tamano - 1`.

### ¿Por qué OR y no AND?

Una esquina puede estar a la vez en primera fila y primera columna, pero los puntos que están en el centro de un borde no tienen por qué cumplir ambas propiedades. Debe bastar con que la posición esté en **cualquiera** de los cuatro bordes.

**Idea general que el profesor pretende enseñar:** los dibujos con asteriscos son ejercicios para comprender rangos, índices, condiciones y bucles anidados. Se mencionan también triángulos, rombos y árboles de Navidad como variantes de práctica; **no se desarrolla en esta parte una solución completa de cada figura**.

### Ampliación didáctica: triángulo sencillo

Un ejemplo adicional para practicar cómo cambia el límite del bucle interior:

```java
int altura = 4;
for (int i = 1; i <= altura; i++) {
    for (int j = 0; j < i; j++) {
        System.out.print("*");
    }
    System.out.println();
}
```

Salida:

```text
*
**
***
****
```

Observa que ahora el límite de las columnas es `j < i`, no `j < altura`.

# 7. Analizar oraciones, palabras y caracteres

## 7.1. Enunciado reconstruido

El profesor corrige un ejercicio en el que se introduce un texto/frase y se deben obtener estadísticas, entre ellas:

- cuántas **oraciones** contiene;
- cuántos **caracteres** tiene;
- cuántas **palabras** contiene;
- cuántas **letras** hay sin contar espacios ni signos de puntuación.

En una parte oral se habla además del análisis **de cada oración**, pero la transcripción no conserva de forma inequívoca si todas las estadísticas se solicitaban por oración o globalmente. Los apuntes incluyen ambos niveles para poder estudiar.

## 7.2. `split(...)`: dividir una cadena en un array

El método `split` divide un `String` utilizando un **separador descrito como expresión regular** y devuelve un array de `String`.

```java
String texto = "Ana,Marta,Juan";
String[] nombres = texto.split(",");
```

El resultado contiene tres elementos:

| Posición | Contenido |
|---:|---|
| 0 | `"Ana"` |
| 1 | `"Marta"` |
| 2 | `"Juan"` |

Así podemos contar las partes mediante:

```java
System.out.println(nombres.length); // 3
```

**Atención:** el resultado es un **array**, no una única cadena.

## 7.3. Separar por puntos: `split("\\.")`

El punto `.` tiene un significado especial en las **expresiones regulares**: puede representar un carácter cualquiera. Por eso **no** es correcto usar `split(".")` para referirse a un punto literal.

Hay que escaparlo:

```java
String[] partes = texto.split("\\.");
```

En el código Java se escriben **dos barras invertidas** `\\` para producir la barra de escape de la expresión regular.

Ejemplo:

```java
String texto = "Hola. Aprendo Java. Fin.";
String[] partes = texto.split("\\.");
```

Aquí las partes con contenido son `"Hola"`, `" Aprendo Java"` y `" Fin"`.

### Precisión añadida: puntos finales y fragmentos vacíos

Por defecto, `String.split(...)` **descarta las cadenas vacías que queden al final**. Por tanto, terminar en un punto **no genera necesariamente** un elemento extra vacío. Esto matiza la explicación oral, que duda sobre el tratamiento del punto final.

Sin embargo, contar partes **no siempre equivale a contar oraciones reales**: puede haber puntos consecutivos, abreviaturas, exclamaciones, interrogaciones o texto vacío. Para ejercicios sencillos puede ser suficiente, pero debe conocerse esta limitación.

## 7.4. `replaceAll(...)`: sustituir coincidencias

`replaceAll` devuelve un **nuevo texto** en el que se sustituyen las coincidencias de una expresión regular.

```java
String frase = "Hola, mundo.";
String sinEspacios = frase.replaceAll(" ", "");
String sinComas = frase.replaceAll(",", "");
String sinPuntos = frase.replaceAll("\\.", "");
```

Para eliminar todos esos caracteres en varios pasos:

```java
String limpio = frase.replaceAll(" ", "")
                     .replaceAll(",", "")
                     .replaceAll("\\.", "");
```

**Importante:** `String` no se modifica automáticamente en su sitio. El resultado hay que guardarlo o utilizarlo:

```java
frase.replaceAll(" ", "");        // descarta el resultado
frase = frase.replaceAll(" ", ""); // conserva el nuevo texto
```

## 7.5. Contar caracteres no es contar letras

La expresión:

```java
frase.length()
```

cuenta la **longitud total de la cadena**: letras, espacios y signos incluidos.

Si solo queremos contar letras, debemos establecer qué se considera letra. Una solución didáctica clara es recorrer cada carácter y comprobarlo:

```java
int letras = 0;

for (int i = 0; i < frase.length(); i++) {
    char caracter = frase.charAt(i);
    if (Character.isLetter(caracter)) {
        letras++;
    }
}
```

> **Ampliación didáctica:** `Character.isLetter(...)` no es el método utilizado en la explicación oral, que recurre a quitar espacios y signos con `replaceAll`. La alternativa es útil porque no depende de enumerar manualmente todos los signos de puntuación y puede reconocer también letras acentuadas.

## 7.6. Contar palabras de forma más fiable

La propuesta elemental es dividir por espacios:

```java
String[] palabras = frase.split(" ");
```

Pero si hay **varios espacios seguidos** pueden obtenerse elementos vacíos. Una mejora es quitar espacios exteriores y dividir por uno o más espacios en blanco:

```java
String texto = frase.trim();
int numeroPalabras = 0;

if (!texto.isEmpty()) {
    String[] palabras = texto.split("\\s+");
    numeroPalabras = palabras.length;
}
```

`\\s+` es una expresión regular que significa «uno o más caracteres de espacio en blanco». Este criterio sirve para palabras separadas por espacios; una tokenización lingüística completa tendría más casos.

## 7.7. Solución propuesta: estadísticas globales y por oración

**Ampliación didáctica.** El siguiente programa integra lo trabajado y corrige situaciones habituales como texto vacío, espacios repetidos y signos `!` / `?` además de los puntos. No es una transcripción literal del código del profesor.

```java
import java.util.Scanner;

public class AnalizarTexto {
    public static void main(String[] args) {
        Scanner lector = new Scanner(System.in);
        System.out.println("Escribe un texto:");
        String texto = lector.nextLine();
        lector.close();

        int totalCaracteres = texto.length();
        int totalLetras = 0;

        for (int i = 0; i < texto.length(); i++) {
            if (Character.isLetter(texto.charAt(i))) {
                totalLetras++;
            }
        }

        String textoSinBordes = texto.trim();
        int totalPalabras = 0;
        if (!textoSinBordes.isEmpty()) {
            totalPalabras = textoSinBordes.split("\\s+").length;
        }

        // Dividir por uno o más signos de cierre habituales.
        String[] fragmentos = texto.split("[.!?]+");
        int numeroOraciones = 0;

        for (String fragmento : fragmentos) {
            if (!fragmento.trim().isEmpty()) {
                numeroOraciones++;
            }
        }

        System.out.println("Caracteres totales: " + totalCaracteres);
        System.out.println("Letras totales: " + totalLetras);
        System.out.println("Palabras totales: " + totalPalabras);
        System.out.println("Oraciones detectadas: " + numeroOraciones);

        int numero = 1;
        for (String fragmento : fragmentos) {
            String oracion = fragmento.trim();
            if (oracion.isEmpty()) {
                continue;
            }

            int letrasOracion = 0;
            for (int i = 0; i < oracion.length(); i++) {
                if (Character.isLetter(oracion.charAt(i))) {
                    letrasOracion++;
                }
            }

            int palabrasOracion = oracion.split("\\s+").length;
            System.out.println("Oración " + numero + ": " + oracion);
            System.out.println("  Palabras: " + palabrasOracion);
            System.out.println("  Letras: " + letrasOracion);
            numero++;
        }
    }
}
```

Ejemplo de entrada: `Hola, Ana. Aprendo Java. ¿Y tú?`.

- **Oraciones detectadas:** 3.
- **Palabras detectadas:** 6 (`Hola,`, `Ana.`, `Aprendo`, `Java.`, `¿Y`, `tú?`).
- **Caracteres y letras:** se calculan con las reglas indicadas, sin confundir la longitud con la cantidad de letras.

**Límite reconocido:** esta solución es adecuada como práctica introductoria, no como analizador lingüístico completo. Por ejemplo, no interpreta correctamente todos los usos de las abreviaturas o de los puntos decimales.

# 8. Menús iterativos con `do while` y `switch`

## 8.1. Qué es un menú iterativo

El usuario debe poder elegir repetidamente opciones hasta seleccionar la de **salir**:

```text
1. Opción 1
2. Opción 2
3. Opción 3
4. Opción 4
5. Salir
```

La estructura enseñada combina:

- **`do while`:** muestra el menú y lee una opción **al menos una vez**; repite hasta solicitar salir.
- **`switch`:** ejecuta el tratamiento de la opción seleccionada.
- **`default`:** muestra un mensaje si se introduce una opción no contemplada.

## 8.2. Ámbito de la variable de salida

El valor de la opción se lee dentro del `do`, pero también se usa en la condición final del `while`. Por tanto, la variable debe declararse **antes del `do`**.

```java
int opcion;
do {
    opcion = lector.nextInt();
} while (opcion != 5);
```

Si `opcion` se declara **dentro** de las llaves del `do`, dejará de estar accesible cuando haya que evaluar `while (opcion != 5)`.

## 8.3. Programa completo

```java
import java.util.Scanner;

public class MenuIterativo {
    public static void main(String[] args) {
        Scanner lector = new Scanner(System.in);
        int opcion;

        do {
            System.out.println("""
                    ===== MENÚ =====
                    1. Opción 1
                    2. Opción 2
                    3. Opción 3
                    4. Opción 4
                    5. Salir
                    """);

            System.out.print("Elige una opción: ");
            opcion = lector.nextInt();

            switch (opcion) {
                case 1 -> System.out.println("Has elegido la opción 1.");
                case 2 -> System.out.println("Has elegido la opción 2.");
                case 3 -> System.out.println("Has elegido la opción 3.");
                case 4 -> System.out.println("Has elegido la opción 4.");
                case 5 -> System.out.println("Saliendo...");
                default -> System.out.println("Opción no contemplada.");
            }
        } while (opcion != 5);

        lector.close();
    }
}
```

### Flujo lógico

```text
Mostrar menú
     ↓
Leer opción
     ↓
Ejecutar switch
     ↓
¿Opción distinta de 5?
  ├── SÍ → volver a mostrar el menú
  └── NO → terminar
```

**Error habitual:** si mostramos el menú **fuera** del `do`, aparecerá solo una vez. Si leemos `opcion` fuera del `do`, tampoco solicitaremos una nueva decisión en cada repetición.

**Atención a las entradas no numéricas:** si se utiliza `nextInt()` y el usuario introduce texto en vez de un entero, puede producirse `InputMismatchException`. El profesor trabaja aquí con entradas numéricas previstas; validar tipos se podría incorporar como ejercicio posterior.

# 9. Calcular el factorial con `for`

## 9.1. Definición y ejemplos

El factorial de un entero no negativo `n`, escrito `n!`, es el producto de los enteros desde `n` hasta `1`:

```text
4! = 4 × 3 × 2 × 1 = 24
5! = 5 × 4 × 3 × 2 × 1 = 120
```

Por definición:

```text
0! = 1
1! = 1
```

**Corrección de una expresión oral confusa:** no es cierto que «el factorial de cualquier número sea uno». Lo correcto es que **el acumulador de un cálculo de factorial comienza en `1`**, que `1! = 1` y que `0! = 1`.

## 9.2. Acumulador multiplicativo

En otros ejercicios se ha visto un acumulador de sumas:

```java
suma += numero;
```

En el factorial se utiliza uno de **productos**:

```java
factorial *= i;
```

La diferencia fundamental es el **valor inicial**:

- Para acumular sumas, el valor neutro es `0`.
- Para acumular multiplicaciones, el valor neutro es `1`.

Si comenzáramos el factorial en `0`, cualquier multiplicación posterior seguiría dando `0`.

## 9.3. Tabla de seguimiento: `4!`

| Vuelta | `i` | Factorial anterior | Nuevo factorial |
|---:|---:|---:|---:|
| Inicio | — | — | 1 |
| 1 | 2 | 1 | 2 |
| 2 | 3 | 2 | 6 |
| 3 | 4 | 6 | 24 |

El `for` debe alcanzar **también** el valor `4`, por eso se escribe `i <= numero`, no `i < numero`.

## 9.4. Programa completo con validación básica

```java
import java.util.Scanner;

public class Factorial {
    public static void main(String[] args) {
        Scanner lector = new Scanner(System.in);
        System.out.print("Introduce un entero entre 0 y 20: ");
        int numero = lector.nextInt();
        lector.close();

        if (numero < 0 || numero > 20) {
            System.out.println("Número fuera del rango admitido.");
        } else {
            long factorial = 1;

            for (int i = 2; i <= numero; i++) {
                factorial *= i;
            }

            System.out.println(numero + "! = " + factorial);
        }
    }
}
```

**Ampliación didáctica sobre tipos:** la demostración oral se hace con un `int` y números pequeños. Aquí se usa `long` porque los factoriales crecen rápidamente. Incluso `long` solo permite obtener sin desbordamiento los factoriales hasta `20!`; con `int` el límite exacto es `12!`.

También es válido recorrer de forma descendente:

```java
long factorial = 1;
for (int i = numero; i >= 2; i--) {
    factorial *= i;
}
```

En clase se menciona que **más adelante** podrá resolverse mediante recursividad; no se desarrolla esa solución aquí.

---

# 10. Introducción a los arrays

## 10.1. De variables individuales a una estructura de almacenamiento

Hasta ahora, si queríamos guardar varios nombres podíamos declarar variables separadas:

```java
String nombre1 = "Ana";
String nombre2 = "Lucas";
String nombre3 = "Marta";
String nombre4 = "Juan";
```

Este enfoque se vuelve incómodo cuando necesitamos guardar **80 nombres o 100 temperaturas**, porque tendríamos que declarar y gestionar una variable por cada dato.

La solución presentada es utilizar una **estructura de almacenamiento**. El profesor distingue dos grandes grupos:

- **Estructuras estáticas:** su tamaño queda fijado al crearlas. Se comienza estudiando los **arrays**.
- **Estructuras dinámicas:** se tratarán después; según lo dicho en clase, los arrays estáticos son los que entran en el examen más próximo.

## 10.2. Qué es un array

Un **array** es una estructura que permite guardar **varios elementos del mismo tipo** bajo un único nombre. Se representa didácticamente como un armario con huecos numerados.

Ejemplo:

```text
           array de String: nombres
          ┌─────────┬─────────┬─────────┬─────────┐
Valores   │  "Ana"  │ "Lucas" │ "Marta" │ "Juan"  │
          ├─────────┼─────────┼─────────┼─────────┤
Índices   │    0    │    1    │    2    │    3    │
          └─────────┴─────────┴─────────┴─────────┘
                      length = 4
```

De esta idea se derivan tres características fundamentales:

1. **Un solo nombre** (`nombres`) representa muchos elementos.
2. **Cada elemento tiene un índice**, comenzando en `0`.
3. **La longitud del array es fija**: no se pueden añadir nuevos huecos al mismo array ni eliminar posiciones para que tenga otra longitud.

**Matiz importante:** que la longitud sea fija **no significa que cada posición deba contener un valor significativo desde el principio**. Puede haber posiciones con `null`, cero, `false`, etc., según su tipo.

## 10.3. Un array tiene un tipo de elemento

| Declaración | Qué almacena cada posición |
|---|---|
| `String[] nombres` | referencias a cadenas de texto |
| `int[] numeros` | enteros |
| `double[] temperaturas` | decimales |
| `boolean[] respuestas` | valores `true` o `false` |
| `char[] letras` | caracteres |

Se presenta también `Object[]` como un array que puede contener referencias de distintos tipos compatibles con `Object`, pero no es la opción elegida para los ejercicios iniciales. **Para aprender, es preferible declarar el tipo concreto que realmente necesitas.**

# 11. Crear e inicializar arrays

## 11.1. Forma 1: reservar un número de posiciones

Se indica **cuántos huecos** se necesitan, pero todavía no se proporciona el contenido concreto:

```java
String[] nombres = new String[4];
int[] numeros = new int[6];
boolean[] respuestas = new boolean[3];
```

La sintaxis general es:

```java
Tipo[] nombre = new Tipo[cantidad];
```

Ejemplo:

```java
String[] nombres = new String[4];
```

El array tiene cuatro huecos numerados `0`, `1`, `2`, `3`. Su longitud es **4 desde el momento de su creación**.

## 11.2. Valores iniciales por defecto

Cuando se crea un array con `new Tipo[cantidad]`, Java inicializa automáticamente cada elemento con el valor por defecto de ese tipo.

| Array | Valor inicial de cada posición |
|---|---|
| `new String[4]` | `null` |
| `new int[4]` | `0` |
| `new double[4]` | `0.0` |
| `new boolean[4]` | `false` |
| `new char[4]` | `\u0000` (carácter nulo, distinto de `'0'`) |
| `new Object[4]` | `null` |

Es importante distinguir:

```java
String texto = null; // no hay una cadena asignada
String vacio = "";   // hay una cadena de longitud 0
String cero = "0";   // hay una cadena que contiene el carácter '0'
```

En un array `int[]`, un cero puede ser un dato introducido legítimamente por el usuario. Por tanto, **no conviene asumir automáticamente que un cero significa «posición sin rellenar»**.

La transcripción menciona `-1` como posible **valor centinela** en algunos problemas numéricos. Solo puede utilizarse como señal de «sin dato» cuando `-1` **no sea un valor válido** del problema, y es necesario asignarlo expresamente: Java no lo pone por defecto.

## 11.3. Forma 2: especificar los elementos al crear el array

En lugar de indicar cuántos huecos se reservan, se proporciona **qué valores** se guardarán. Java obtiene la longitud contando los elementos.

```java
String[] nombres = new String[]{"María", "Marta", "Juan", "Lucas"};
int[] numeros = new int[]{4, 7, 9, 20};
boolean[] respuestas = new boolean[]{true, false, true};
```

Estas variables tendrán, respectivamente, 4, 4 y 3 elementos.

### Error de sintaxis: mezclar tamaño y valores

**Incorrecto:**

```java
String[] nombres = new String[4]{"Ana", "Marta", "Juan", "Lucas"};
```

No se escribe simultáneamente el tamaño `[4]` y el inicializador `{...}` de esta forma. Se elige una de las dos estrategias:

```java
String[] nombres = new String[4];
```

**O bien:**

```java
String[] nombres = new String[]{"Ana", "Marta", "Juan", "Lucas"};
```

### Ampliación didáctica: sintaxis abreviada

Java también permite esta forma cuando **declaras e inicializas en la misma instrucción**:

```java
String[] nombres = {"Ana", "Marta", "Juan", "Lucas"};
```

Esta forma abreviada no debe confundirse con una reasignación posterior. Si ya existía la variable y quieres asignarle un nuevo array, puedes usar:

```java
nombres = new String[]{"Pedro", "Celia"};
```

Aquí se crea **otro array** de longitud 2. No significa que el array anterior haya cambiado su longitud.

## 11.4. Elegir la forma de inicialización

| Situación | Estrategia |
|---|---|
| Sabes que necesitas almacenar 15 datos que se pedirán más tarde | `new Tipo[15]` |
| Ya conoces exactamente los valores iniciales | `new Tipo[]{...}` o inicialización abreviada |
| El usuario decide cuántos elementos tendrá el array | Leer la cantidad y crear `new Tipo[cantidad]` |

Ejemplo de la última situación:

```java
System.out.print("¿Cuántos nombres quieres guardar? ");
int cantidad = lector.nextInt();
String[] nombres = new String[cantidad];
```

**Validación añadida:** antes de crear el array conviene comprobar que `cantidad` sea **mayor que cero** si el programa necesita al menos un elemento.

# 12. Tamaño, acceso y modificación

## 12.1. Tamaño: `array.length`

Una diferencia especialmente destacada por el profesor:

```java
String texto = "JAVA";
System.out.println(texto.length()); // String: MÉTODO, lleva ()

String[] nombres = new String[4];
System.out.println(nombres.length);  // array: CAMPO, sin ()
```

| Objeto/estructura | Sintaxis | Para qué sirve |
|---|---|---|
| `String` | `texto.length()` | Cantidad de unidades `char` de la cadena. |
| Array | `nombres.length` | Cantidad de posiciones reservadas. |

El punto importante es distinguir **métodos (con paréntesis de llamada)** de **campos o atributos (sin paréntesis)**. En el caso de los arrays, `length` es una propiedad que se consulta directamente.

## 12.2. Obtener un elemento: corchetes `[indice]`

Se escribe el nombre del array seguido de la posición entre corchetes:

```java
String[] nombres = {"Ana", "Marta", "Juan", "Lucas"};

System.out.println(nombres[0]); // Ana
System.out.println(nombres[1]); // Marta
System.out.println(nombres[3]); // Lucas
```

No se usa `nombres.charAt(...)` para acceder a una posición del array: **el array se indexa con corchetes**. Si el elemento obtenido es un `String`, ese **elemento concreto** sí permite después llamar a métodos de cadena:

```java
String nombre = nombres[1];
System.out.println(nombre.length()); // 5, por "Marta"
```

También puede escribirse:

```java
System.out.println(nombres[1].length());
```

## 12.3. Primera y última posición

Para cualquier array **no vacío**:

```java
int primera = 0;
int ultima = nombres.length - 1;

System.out.println(nombres[primera]);
System.out.println(nombres[ultima]);
```

Si el array tiene 4 elementos, los índices son `0, 1, 2, 3`. El índice `4` está fuera del array y produce `ArrayIndexOutOfBoundsException`.

> **Regla para memorizar:** si un array tiene longitud `n`, sus posiciones válidas van desde `0` hasta `n - 1`.

## 12.4. Modificar el valor de una posición

Se asigna directamente un valor compatible al elemento que interesa:

```java
String[] nombres = {"María", "Marta", "Juan", "Lucas"};

nombres[0] = "Celia";
nombres[2] = "Pedro";
```

El array queda así:

| Índice | Antes | Después |
|---:|---|---|
| 0 | María | Celia |
| 1 | Marta | Marta |
| 2 | Juan | Pedro |
| 3 | Lucas | Lucas |

El array sigue teniendo **4 posiciones**. Hemos cambiado los datos, no su tamaño.

Esto también se aplica a arrays numéricos:

```java
int[] valores = {10, 20, 30};
valores[1] = 99;
valores[2] += 5;
// Resultado: {10, 99, 35}
```

## 12.5. ¿Qué ocurre al imprimir directamente un array?

```java
String[] nombres = {"Ana", "Marta"};
System.out.println(nombres);
```

Eso **no imprime normalmente `Ana` y `Marta`**. En un array de objetos como `String[]`, Java puede mostrar una representación parecida a `[Ljava.lang.String;@...`.

La explicación oral la llama «dirección de memoria», pero **técnicamente no debe interpretarse como una dirección real de memoria**: es una representación de objeto derivada de su tipo y su identidad.

Para estudiar los elementos **individualmente**, el profesor recomienda recorrerlos con un bucle. Existe `Arrays.toString(nombres)` para obtener una representación conjunta (ampliación), pero no sustituye el aprendizaje del recorrido por índices cuando hay que procesar cada elemento.

# 13. Recorrer arrays con `for` y `for-each`

## 13.1. Recorrido con `for` convencional

Se utiliza cuando necesitamos controlar el **índice**.

```java
String[] nombres = {"Ana", "Marta", "Juan", "Lucas"};

for (int i = 0; i < nombres.length; i++) {
    String nombre = nombres[i];
    System.out.println("Posición " + i + ": " + nombre);
}
```

- `int i = 0`: empieza en el primer elemento.
- `i < nombres.length`: permite acceder solo a posiciones existentes.
- `i++`: avanza al siguiente índice.
- `nombres[i]`: recupera el elemento que toca.

Se puede recorrer solo una parte o con pasos diferentes:

```java
// Únicamente posiciones pares: 0, 2, 4, ...
for (int i = 0; i < nombres.length; i += 2) {
    System.out.println(nombres[i]);
}

// Recorrido descendente
for (int i = nombres.length - 1; i >= 0; i--) {
    System.out.println(nombres[i]);
}
```

## 13.2. Leer, analizar y modificar durante el recorrido

Como disponemos del índice, podemos consultar y **modificar elementos concretos**.

```java
String[] nombres = {"Ana", "Lucas", "Marta"};

for (int i = 0; i < nombres.length; i++) {
    if (nombres[i].equals("Lucas")) {
        nombres[i] = "Pedro";
    }
}
```

Después, el array contiene `"Ana"`, `"Pedro"`, `"Marta"`.

También podemos procesar cada valor con una condición:

```java
for (int i = 0; i < nombres.length; i++) {
    if (nombres[i].length() >= 5) {
        System.out.println(nombres[i]);
    }
}
```

La condición se evalúa **una vez por elemento**; no es lo mismo comprobar la longitud de cada nombre que la longitud del array (`nombres.length`).

## 13.3. `for-each`: recorrer cada elemento directamente

La forma especial introducida en clase es el **`for-each`** o *for mejorado*. No necesita que escribamos manualmente un índice inicial, un límite ni un incremento:

```java
for (Tipo elemento : array) {
    // usar el elemento actual
}
```

Ejemplo:

```java
String[] nombres = {"Ana", "Marta", "Juan", "Lucas"};

for (String nombre : nombres) {
    System.out.println(nombre);
}
```

Lectura de la cabecera:

```text
for (String nombre : nombres)
     └────┬────┘   └───┬───┘
  elemento actual    array completo
```

En cada vuelta, `nombre` toma el valor del elemento que corresponde al recorrido.

## 13.4. Diferencia esencial entre ambos recorridos

| Necesidad | `for` convencional | `for-each` |
|---|---|---|
| Leer todos los elementos | Sí | Sí |
| Analizar cada elemento | Sí | Sí |
| Obtener el índice actual directamente | Sí | No |
| Recorrer solo ciertos índices | Sí | No directamente |
| Recorrer al revés | Sí | No directamente |
| Reemplazar el elemento del array en su posición | Sí, con `array[i] = ...` | No, reasignar la variable local no lo reemplaza |
| Escribir un recorrido completo breve | Más código | Más sencillo |

El profesor recomienda `for-each` cuando solo interesa **mostrar o analizar todos los elementos**, y `for` con índice cuando interesa modificar posiciones.

## 13.5. ¿Por qué esta modificación no funciona?

```java
String[] nombres = {"Ana", "Marta", "Juan"};

for (String nombre : nombres) {
    nombre = "Nuevo";
}
```

Al terminar, **el array sigue conteniendo** `Ana`, `Marta` y `Juan`.

Motivo: `nombre` es una **variable local del recorrido**. Cuando le asignamos otro `String`, modificamos esa variable local, **no el hueco del array**.

La alternativa correcta para reemplazar cada elemento es:

```java
for (int i = 0; i < nombres.length; i++) {
    nombres[i] = "Nuevo";
}
```

### Corrección técnica importante sobre la explicación oral

A veces se describe la variable del `for-each` como «solo lectura». **No es literalmente `readonly` en Java:** el programa permite asignarle otro valor; lo que ocurre es que esa reasignación **no cambia el elemento original del array**. Tampoco es correcto afirmar que una reasignación como `nombre = "Nuevo"` cause automáticamente `StackOverflowError` u otra excepción. La restricción explicada en clase es una **regla práctica para sustituir elementos**, no una prohibición general del lenguaje.

**Ampliación:** si un array almacena objetos modificables, llamar a un método que cambia un objeto puede afectar al objeto compartido. Esto es distinto de sustituir la referencia del elemento y se verá mejor en programación orientada a objetos.

## 13.6. Problemas frecuentes con arrays de `String` sin rellenar

```java
String[] nombres = new String[3];
```

Los tres elementos son `null`. Si se intenta hacer esto antes de asignarles un texto:

```java
System.out.println(nombres[0].length());
```

aparecerá `NullPointerException`, porque `null` no contiene un objeto `String` sobre el que llamar a `length()`.

**Solución práctica:** primero rellenar el array o comprobar que el elemento no es `null`.

```java
if (nombres[0] != null) {
    System.out.println(nombres[0].length());
}
```

---

# 14. Ejercicio integrador: gestor de amigos

## 14.1. Enunciado desarrollado en clase

Se propone un programa con estas fases:

1. Preguntar **cuántos amigos** quiere guardar el usuario.
2. Crear un array de `String` con ese número de posiciones.
3. Pedir y guardar **cada nombre** en su posición.
4. Mostrar un menú que permita repetir acciones hasta salir.

Menú inicial:

```text
1. Mostrar todos los amigos
2. Mostrar un amigo aleatorio
3. Mostrar el amigo cuyo nombre tiene más letras
4. Salir
```

**La carga de nombres ocurre una sola vez, antes del menú.** El menú puede repetirse muchas veces sobre los mismos datos ya guardados.

## 14.2. Fase 1: crear un array del tamaño solicitado

```java
Scanner lector = new Scanner(System.in);

System.out.print("¿Cuántos amigos quieres guardar? ");
int cantidad = lector.nextInt();
lector.nextLine(); // Consumir el salto de línea pendiente.

String[] amigos = new String[cantidad];
```

En la corrección, el profesor utiliza la cantidad introducida como longitud del array y recuerda que las posiciones comienzan en `0`.

**Ampliación necesaria para mayor robustez:** si el ejercicio necesita al menos un amigo, `cantidad` debe ser **positiva**. En caso contrario no sería posible acceder a `amigos[0]` en la opción de nombre más largo.

## 14.3. Fase 2: guardar los nombres con `for`

El programa tiene que almacenar un nombre distinto **en cada posición**.

```java
for (int i = 0; i < amigos.length; i++) {
    System.out.print("Amigo " + (i + 1) + ": ");
    amigos[i] = lector.nextLine();
}
```

Aquí existen dos números diferentes:

- `i` es el **índice real** del array y comienza en `0`.
- `i + 1` es solo la **numeración que mostramos al usuario**, para que vea `Amigo 1`, `Amigo 2`, etc.

No debemos utilizar `amigos[i + 1]` por querer mostrar al usuario una numeración que comienza en 1: nos saltaríamos la posición cero y terminaríamos intentando usar un índice inexistente.

### ¿Por qué `for` en lugar de `for-each`?

Porque necesitamos modificar **cada posición**:

```java
amigos[i] = lector.nextLine();
```

Con `for-each` podríamos asignar un texto a la variable temporal del recorrido, pero eso **no rellenaría la posición del array**.

## 14.4. Fase 3: menú que se repite

Se coloca después de haber completado el array:

```java
int opcion;

do {
    // Mostrar menú y leer opción.
    // Ejecutar el case que corresponda.
} while (opcion != 4);
```

Si colocáramos la creación del array y la lectura de todos los nombres **dentro** del `do`, cada vez que se eligiera una opción volveríamos a preguntar la cantidad de amigos y a introducir todos los nombres. Ese no es el comportamiento pedido.

## 14.5. Opción 1: mostrar todos los amigos

El `for-each` es suficiente, porque solo queremos **leer y mostrar**:

```java
case 1 -> {
    for (String amigo : amigos) {
        System.out.println(amigo);
    }
}
```

El bloque se ejecuta cada vez que el usuario elige la opción 1. Los datos persisten porque el array se creó antes del `do while`.

## 14.6. Opción 2: amigo aleatorio

Necesitamos obtener primero un **índice válido**, y luego usarlo para leer el array.

```java
int indice = (int) (Math.random() * amigos.length);
String elegido = amigos[indice];
System.out.println("Amigo elegido: " + elegido);
```

`Math.random()` devuelve un `double` mayor o igual que `0.0` y estrictamente menor que `1.0`. Al multiplicarlo por `amigos.length` y convertir a `int`, obtenemos un entero entre `0` y `amigos.length - 1`.

**Ejemplo con 4 amigos:**

| `Math.random()` (ejemplo) | Producto por 4 | Índice tras `(int)` |
|---:|---:|---:|
| 0.03 | 0.12 | 0 |
| 0.26 | 1.04 | 1 |
| 0.60 | 2.40 | 2 |
| 0.96 | 3.84 | 3 |

**Error que se comenta en clase:** no añadir `+ 1` aquí.

```java
int indice = (int) (Math.random() * amigos.length) + 1; // MAL
```

Con cuatro amigos podríamos generar el índice `4`, que no existe, y además nunca saldría el índice `0`. La fórmula correcta para índices empieza en cero.

## 14.7. Opción 3: nombre con más letras

Necesitamos conservar el **mayor candidato encontrado hasta el momento**.

Estrategia:

1. Tomar inicialmente el primer nombre como «más largo».
2. Recorrer todos los nombres.
3. Comparar `amigo.length()` con `masLargo.length()`.
4. Si el nuevo nombre tiene más caracteres, sustituir el candidato guardado.
5. Imprimir el resultado al acabar el recorrido.

```java
String masLargo = amigos[0];

for (String amigo : amigos) {
    if (amigo.length() > masLargo.length()) {
        masLargo = amigo;
    }
}

System.out.println("Nombre más largo: " + masLargo);
```

No hace falta inventar un texto inicial de longitud muy pequeña ni utilizar `null`. **El primer elemento ya es un candidato real válido**, siempre que el array sea no vacío y se haya rellenado.

### Ejemplo de seguimiento

Array:

```text
["Ana", "Lucas", "María", "Alejandro"]
```

| Elemento examinado | Candidato anterior | Comparación | Candidato resultante |
|---|---|---|---|
| Ana | Ana | 3 > 3 → no | Ana |
| Lucas | Ana | 5 > 3 → sí | Lucas |
| María | Lucas | 5 > 5 → no | Lucas |
| Alejandro | Lucas | 9 > 5 → sí | Alejandro |

El criterio `>` conserva al **primero** de los nombres que empaten en longitud máxima. Si se utilizara `>=`, se quedaría con el **último** de los nombres empatados. Es una decisión que puede ser relevante si el enunciado habla de empates.

**Sobre el ámbito:** la variable `masLargo` debe conservar su valor a lo largo de las comparaciones. Si la reinicializáramos **en cada vuelta del `for`**, perderíamos el mejor resultado anterior.

## 14.8. Programa completo: versión de las cuatro opciones de clase

**Reconstrucción funcional:** reúne las operaciones explicadas y añade validación de cantidad positiva, lectura de líneas completas y comprobación de nombres vacíos. No incorpora todavía búsqueda ni prohibición de repetidos porque esas funcionalidades se dejan como trabajo posterior.

```java
import java.util.Scanner;

public class GestorAmigos {
    public static void main(String[] args) {
        Scanner lector = new Scanner(System.in);

        int cantidad;
        do {
            System.out.print("¿Cuántos amigos quieres guardar? ");
            cantidad = lector.nextInt();
            if (cantidad <= 0) {
                System.out.println("Debes indicar al menos un amigo.");
            }
        } while (cantidad <= 0);
        lector.nextLine(); // Eliminar el salto de línea de nextInt().

        String[] amigos = new String[cantidad];

        // Esta fase solo se ejecuta una vez.
        for (int i = 0; i < amigos.length; i++) {
            String nombre;
            do {
                System.out.print("Nombre del amigo " + (i + 1) + ": ");
                nombre = lector.nextLine().trim();
                if (nombre.isEmpty()) {
                    System.out.println("El nombre no puede estar vacío.");
                }
            } while (nombre.isEmpty());

            amigos[i] = nombre;
        }

        int opcion;
        do {
            System.out.println("""
                    ===== GESTOR DE AMIGOS =====
                    1. Listar amigos
                    2. Elegir un amigo aleatorio
                    3. Mostrar el nombre más largo
                    4. Salir
                    """);
            System.out.print("Elige una opción: ");
            opcion = lector.nextInt();
            lector.nextLine();

            switch (opcion) {
                case 1 -> {
                    System.out.println("Lista de amigos:");
                    for (String amigo : amigos) {
                        System.out.println(amigo);
                    }
                }
                case 2 -> {
                    int indice = (int) (Math.random() * amigos.length);
                    System.out.println("Amigo aleatorio: " + amigos[indice]);
                }
                case 3 -> {
                    String masLargo = amigos[0];
                    for (String amigo : amigos) {
                        if (amigo.length() > masLargo.length()) {
                            masLargo = amigo;
                        }
                    }
                    System.out.println("Nombre con más letras: " + masLargo);
                    System.out.println("Longitud: " + masLargo.length());
                }
                case 4 -> System.out.println("Saliendo...");
                default -> System.out.println("Opción no contemplada.");
            }
        } while (opcion != 4);

        lector.close();
    }
}
```

### Seguimiento del programa por fases

```text
INICIO
  ↓
Pedir cantidad (> 0)
  ↓
Crear String[] amigos
  ↓
FOR: pedir y guardar cada nombre
  ↓
DO
  ├─ Mostrar menú
  ├─ Leer opción
  └─ SWITCH
       ├─ 1 → recorrer e imprimir amigos
       ├─ 2 → generar índice y mostrar amigo
       ├─ 3 → buscar nombre más largo
       ├─ 4 → anunciar salida
       └─ otro → mostrar error
  ↓
¿Opción != 4?
  ├─ SÍ → volver al DO
  └─ NO → FIN
```

**Comprueba estos casos:** `cantidad = 1`, nombres con espacios, repetir la opción 2 varias veces, elegir primero una opción inexistente, y salir después de consultar los datos.

# 15. Ampliaciones del gestor: buscar y evitar duplicados

> **Estado en clase:** el profesor **propone estas funcionalidades como ejercicios para el lunes** y no queda registrada una resolución completa. Las implementaciones siguientes son **soluciones didácticas propuestas** porque has pedido unos apuntes que completen las partes pendientes. Son deliberadamente sencillas: usan las mismas estructuras trabajadas, sin crear métodos auxiliares ni recurrir a listas dinámicas.

## 15.1. Primera ampliación: buscar un amigo y contar apariciones

El usuario proporciona un nombre y el programa indica:

- si está presente;
- cuántas veces aparece en el array.

Para esta fase se permite que haya duplicados, porque precisamente queremos poder contar más de una aparición.

### Algoritmo

1. Leer el nombre que queremos buscar.
2. Crear un contador `apariciones = 0`.
3. Recorrer todo el array con `for-each`.
4. Si el elemento actual coincide con el buscado, incrementar el contador.
5. Mostrar el contador y deducir de él si el nombre está presente.

```java
System.out.print("Nombre a buscar: ");
String buscado = lector.nextLine().trim();

int apariciones = 0;

for (String amigo : amigos) {
    if (amigo.equals(buscado)) {
        apariciones++;
    }
}

if (apariciones > 0) {
    System.out.println("El nombre está presente.");
    System.out.println("Aparece " + apariciones + " veces.");
} else {
    System.out.println("El nombre no está presente.");
}
```

Con `amigos = {"Ana", "Lucas", "Ana", "Marta"}` y `buscado = "Ana"`, el resultado es **2 apariciones**.

**Importante:** para contar todas las apariciones **no debemos usar `break` al encontrar la primera**; tenemos que completar el recorrido.

## 15.2. Integrar la búsqueda en el menú

Para mantener una opción de salida, podemos cambiar el menú así:

```text
1. Listar amigos
2. Elegir un amigo aleatorio
3. Mostrar el nombre más largo
4. Buscar amigo
5. Salir
```

En el programa completo anterior haríamos tres cambios:

- Añadir `case 4 -> { ... }` con el código de búsqueda.
- Cambiar la salida a `case 5 -> System.out.println("Saliendo...");`.
- Cambiar la condición a `while (opcion != 5);`.

Este código de búsqueda funciona dentro de `case 4` porque la variable `lector` y el array `amigos` ya existen en el método `main`.

## 15.3. Segunda ampliación: no permitir nombres repetidos al rellenar

En el siguiente ejercicio el profesor pide que el sistema **no acepte nombres duplicados**. Si ya existe «Lucas», la siguiente introducción de «Lucas» debe ser rechazada y se debe seguir solicitando un nombre válido **sin pasar a la siguiente posición**.

Aquí es decisiva la diferencia entre:

- **Repetir un número fijo de posiciones**: `for` exterior.
- **Repetir la petición mientras el nombre no sea aceptable**: `do while` interior.

### Lógica paso a paso

Para cada posición `i`:

1. Solicitar un candidato.
2. Comprobar si está vacío.
3. Recorrer solo los nombres **ya guardados**, desde el índice `0` hasta `i - 1`.
4. Si alguno coincide, considerar al candidato duplicado.
5. Si está repetido o vacío, **volver a pedir el nombre sin avanzar de posición**.
6. Cuando sea válido, guardarlo en `amigos[i]` y permitir que el `for` continúe.

### Solución propuesta (sustituye el bloque de lectura inicial)

```java
for (int i = 0; i < amigos.length; i++) {
    String candidato;
    boolean repetido;

    do {
        System.out.print("Nombre del amigo " + (i + 1) + ": ");
        candidato = lector.nextLine().trim();
        repetido = candidato.isEmpty();

        if (candidato.isEmpty()) {
            System.out.println("No se permiten nombres vacíos.");
        } else {
            // Solo comprobar las posiciones que ya hemos rellenado.
            for (int j = 0; j < i; j++) {
                if (amigos[j].equals(candidato)) {
                    repetido = true;
                    System.out.println("Ese nombre ya existe. Introduce otro.");
                    break;
                }
            }
        }
    } while (repetido);

    // Solo llegamos aquí con un nombre válido y no repetido.
    amigos[i] = candidato;
}
```

Se usa `j < i` y no `j < amigos.length` porque las posiciones futuras todavía tienen valor `null`. Comparar directamente `amigos[j].equals(...)` en esas posiciones produciría `NullPointerException`.

### Seguimiento práctico

Supongamos que queremos almacenar tres nombres:

```text
Amigo 1: Ana       → aceptado; se guarda en índice 0.
Amigo 2: Ana       → rechazado; se sigue en índice 1.
Amigo 2: Lucas     → aceptado; se guarda en índice 1.
Amigo 3: Lucas     → rechazado; se sigue en índice 2.
Amigo 3: Marta     → aceptado; se guarda en índice 2.
```

Resultado final:

```text
["Ana", "Lucas", "Marta"]
```

## 15.4. Orden recomendado de los dos ejercicios

La clase establece una razón didáctica para este orden:

1. **Primero** implementar búsqueda y contar repeticiones.
2. **Después** impedir los duplicados.

Si bloqueamos todos los nombres repetidos desde la entrada, la búsqueda dentro de ese conjunto solo podrá encontrar cada nombre **cero o una vez**. Es mejor practicar primero el contador de coincidencias sobre un conjunto que sí pueda contener duplicados.

## 15.5. Detalles que debes decidir conscientemente

- **Igualdad exacta:** `"Ana".equals("ana")` es `false`. Esta es la comparación básica apropiada para «nombres exactamente iguales».
- **Ignorar mayúsculas:** `equalsIgnoreCase()` sería otra política, pero **no es idéntica** a la comparación exacta del enunciado.
- **Espacios:** `trim()` quita espacios exteriores; por eso `" Ana "` se trata aquí como `"Ana"`.
- **Número de amigos:** un array de tamaño fijo no permite sumar nuevos huecos sin crear otro array. El ejercicio de «añadir» aquí significa **validar la entrada mientras se rellenan las posiciones existentes**, no ampliar dinámicamente el array.
- **Uso de `break`:** en la comprobación de duplicados basta encontrar **una coincidencia**, pero en la búsqueda con recuento hay que analizar **todas**.

---

# 16. Criterios para elegir estructuras

La clave de estos ejercicios es **escoger la estructura según el problema**, no empezar a programar por intuición.

| Situación | Estructura especialmente adecuada | Motivo |
|---|---|---|
| Repetir una operación mientras se cumpla una condición, quizá cero veces | `while` | Comprueba antes de entrar. |
| Pedir un dato o mostrar un menú al menos una vez | `do while` | Ejecuta antes de comprobar. |
| Recorrer un rango conocido de índices | `for` | Control explícito de inicio, condición y actualización. |
| Recorrer todos los elementos sin necesitar sus índices | `for-each` | Sintaxis breve y directa. |
| Elegir una acción entre varios valores de un menú | `switch` | Un caso por opción. |
| Evaluar una o varias condiciones booleanas | `if` / `else` | Condiciones de verdadero o falso. |
| Abandonar una búsqueda al encontrar una coincidencia suficiente | `break` | Evita trabajo innecesario. |
| Saltarse solo un elemento del recorrido | `continue` | Continúa con las siguientes iteraciones. |
| Conservar un total, producto, cantidad o mejor candidato | Variable acumuladora, contador o candidata | Mantiene información entre vueltas. |

## 16.1. Pensar en términos de entrada, proceso y salida

Antes de escribir código, es útil responder:

1. **Entrada:** ¿qué pide el programa al usuario?
2. **Almacenamiento:** ¿qué datos debo conservar después de leerlos?
3. **Proceso:** ¿debo calcular, comparar, recorrer o repetir?
4. **Parada:** ¿cuándo sé que he terminado?
5. **Salida:** ¿qué resultado debo mostrar y cuándo?

Ejemplo del amigo aleatorio:

```text
Entrada inicial → número y nombres de amigos
Almacenamiento  → String[] amigos
Proceso         → generar índice aleatorio válido
Salida          → imprimir amigos[indice]
```

Ejemplo de nombre más largo:

```text
Entrada         → array ya relleno
Almacenamiento  → mejor candidato encontrado
Proceso         → recorrer y comparar longitudes
Parada          → al visitar todo el array
Salida          → nombre con mayor longitud
```

## 16.2. Variables fuera o dentro del bucle

Regla práctica importante de toda la clase:

- Si un dato debe conservarse **entre iteraciones** o consultarse **después del bucle**, debe declararse en un ámbito que siga siendo accesible.
- Si una variable solo sirve para procesar **la vuelta actual**, puede declararse dentro de esa vuelta.
- Si una inicialización se ejecuta de nuevo en cada iteración, puede **borrar el progreso acumulado**.

Por ejemplo, esto está mal si se pretende sumar todos los elementos:

```java
int[] numeros = {2, 4, 6};
for (int numero : numeros) {
    int suma = 0; // se reinicia en cada iteración
    suma += numero;
}
```

Correcto:

```java
int[] numeros = {2, 4, 6};
int suma = 0;
for (int numero : numeros) {
    suma += numero;
}
System.out.println(suma); // 12
```

---

# 17. Conceptos que debo saber explicar

Al terminar el estudio de esta clase deberías poder explicar, **sin mirar código**, lo siguiente:

1. **Conversión de bases:** por qué se utilizan división entera y módulo; por qué se guardan restos por la izquierda; qué cambia en hexadecimal.
2. **`while` frente a `do while`:** cuál comprueba la condición antes y cuál después, y en qué situaciones conviene cada uno.
3. **Índices de `String`:** por qué una cadena de longitud `n` termina en el índice `n - 1`.
4. **Recorrido inverso:** cómo se combinan inicio, condición y decremento en un `for` descendente.
5. **Palíndromos:** por qué se comparan posiciones simétricas, por qué basta recorrer la mitad y cuándo se usa `break`.
6. **`char` frente a `String`:** diferencia entre comparar caracteres con `==` y cadenas con `equals`.
7. **`break` y `continue`:** diferencia entre terminar todo el bucle y saltar solo una iteración.
8. **`for` anidados:** qué representa el bucle exterior, qué representa el interior y dónde se imprime un salto de línea.
9. **Cuadrado con borde:** por qué basta una condición con cuatro alternativas enlazadas por `||`.
10. **`split`:** qué devuelve, cómo se usa para separar texto y por qué el punto debe escaparse en expresiones regulares.
11. **`replaceAll`:** qué sustituye, por qué devuelve una nueva cadena y cuál es el papel de una expresión regular.
12. **Caracteres, letras, palabras y oraciones:** por qué no son necesariamente el mismo recuento.
13. **Menú iterativo:** cómo se combinan `do while` y `switch` y por qué la variable `opcion` se declara fuera del `do`.
14. **Factorial:** cómo funciona el acumulador multiplicativo y por qué comienza en `1`.
15. **Array:** qué es, por qué su longitud es fija y qué significa estar indexado.
16. **Inicialización de arrays:** diferencia entre reservar una cantidad de huecos y proporcionar los valores concretos.
17. **Valores por defecto:** qué contienen inicialmente arrays de `int`, `boolean` y `String`.
18. **`length` y `length()`:** diferencia entre la propiedad de un array y el método de `String`.
19. **Acceso y sustitución:** cómo se consulta o modifica una posición con corchetes.
20. **`for` frente a `for-each`:** cuándo interesa disponer del índice y por qué reasignar la variable del `for-each` no reemplaza un elemento del array.
21. **Búsqueda y recuento:** cuándo hay que recorrer todo el array y cuándo se puede detener el recorrido al encontrar una coincidencia.
22. **Máximo candidato:** cómo buscar el nombre más largo sin inventar valores artificiales.
23. **Ámbito:** por qué algunos contadores, acumuladores y opciones deben declararse fuera de un bloque.

# 18. Sintaxis que debo saber escribir

## Conversión de bases

```java
int resto = numero % base;
numero = numero / base;
conversion = resto + conversion;
```

## Cadenas y posiciones

```java
int longitud = palabra.length();
char primera = palabra.charAt(0);
char ultima = palabra.charAt(palabra.length() - 1);
```

## `for` descendente

```java
for (int i = palabra.length() - 1; i >= 0; i--) {
    System.out.print(palabra.charAt(i));
}
```

## Comparación simétrica para palíndromos

```java
for (int i = 0; i < palabra.length() / 2; i++) {
    if (palabra.charAt(i) != palabra.charAt(palabra.length() - 1 - i)) {
        esPalindromo = false;
        break;
    }
}
```

## `for` anidados

```java
for (int i = 0; i < tamano; i++) {
    for (int j = 0; j < tamano; j++) {
        System.out.print("* ");
    }
    System.out.println();
}
```

## Operaciones con texto

```java
String[] oraciones = texto.split("\\.");
String[] palabras = texto.trim().split("\\s+");
String sinEspacios = texto.replaceAll(" ", "");
```

La variante de palabras necesita tratar aparte la cadena vacía si se quiere que el recuento sea cero en vez de uno.

## Menú `do while` / `switch`

```java
int opcion;
do {
    opcion = lector.nextInt();
    switch (opcion) {
        case 1 -> System.out.println("Opción 1");
        case 2 -> System.out.println("Opción 2");
        case 3 -> System.out.println("Salir");
        default -> System.out.println("No contemplada");
    }
} while (opcion != 3);
```

## Factorial

```java
long factorial = 1;
for (int i = 2; i <= numero; i++) {
    factorial *= i;
}
```

## Arrays: creación y valores

```java
String[] nombres = new String[4];
int[] numeros = new int[]{2, 4, 6};
String[] amigos = {"Ana", "Marta", "Juan"};
```

## Arrays: tamaño e índices

```java
int cantidad = amigos.length;
String primero = amigos[0];
String ultimo = amigos[amigos.length - 1];
amigos[0] = "Lucas";
```

## Recorrer un array por índices

```java
for (int i = 0; i < amigos.length; i++) {
    System.out.println(amigos[i]);
}
```

## Recorrer un array con `for-each`

```java
for (String amigo : amigos) {
    System.out.println(amigo);
}
```

## Número aleatorio como índice

```java
int indice = (int) (Math.random() * amigos.length);
String amigo = amigos[indice];
```

Esta operación presupone que el array tiene **al menos una posición**.

## Buscar el nombre más largo

```java
String masLargo = amigos[0];
for (String amigo : amigos) {
    if (amigo.length() > masLargo.length()) {
        masLargo = amigo;
    }
}
```

---

# 19. Errores frecuentes y cómo corregirlos

| Error | Consecuencia | Corrección |
|---|---|---|
| Calcular `numero /= base` antes del módulo | Puede perderse el resto del número anterior. | Primero `%`, después `/`. |
| Acumular restos con `conversion += resto` | Se forma la representación en un orden equivocado. | `conversion = simbolo + conversion`. |
| Dejar un número final entre 10 y 15 sin convertir en hexadecimal | Aparece `10`, `11`, etc. en lugar de `A`–`F`. | Convertir también el dígito final. |
| Iniciar un `for` inverso en `palabra.length()` | `StringIndexOutOfBoundsException`. | Comenzar en `length() - 1`. |
| Usar `i++` cuando se debe retroceder | Se avanza en sentido contrario y puede accederse fuera de rango. | Utilizar `i--` y condición coherente. |
| Volver a asignar `true` en el palíndromo tras un fallo previo | Una coincidencia posterior oculta la desigualdad. | Solo asignar `false` cuando falle una pareja y salir con `break`. |
| Recorrer toda la palabra para comparar ambos extremos | Trabajo duplicado. | Recorrer hasta `< length() / 2`. |
| Comparar `char` mediante `.equals(...)` | Error de compilación: `char` no tiene ese método. | Usar `==` o `!=`. |
| Usar `==` para comparar contenido de `String` | Se comparan referencias y el resultado puede ser incorrecto. | Usar `equals(...)`. |
| Poner el `println()` de cambio de fila dentro del bucle interior | Cada asterisco aparece en una línea distinta. | Saltar de línea después del `for` interior. |
| Comprobar `i == tamano` como última fila | La condición nunca se cumple en un recorrido `i < tamano`. | `i == tamano - 1`. |
| Usar `&&` para exigir todas las condiciones del borde a la vez | Se descartan puntos que sí son borde. | Usar `||`. |
| Escribir `split(".")` para dividir por puntos literales | `.` se interpreta como expresión regular especial. | `split("\\.")`. |
| Suponer que `split(" ")` cuenta perfectamente todas las palabras | Los espacios repetidos pueden generar elementos vacíos. | Normalizar y utilizar `split("\\s+")`. |
| Confundir `texto.length()` con «número de letras» | Incluye espacios, números y signos. | Contar los caracteres que sean letras. |
| Declarar `opcion` dentro de `do` y usarla después en `while` | Variable fuera de ámbito. | Declararla antes del `do`. |
| Leer menú y opción fuera del `do` | El menú no se actualiza en cada repetición. | Incluir ambas operaciones en cada vuelta. |
| Inicializar el producto del factorial a `0` | El producto siempre termina en cero. | Empezar en `1`. |
| Usar `i < numero` para factorial | Falta multiplicar por el último valor. | `i <= numero`. |
| Mezclar `new Tipo[n]` con `{valores}` | Sintaxis inválida de creación del array. | Elegir una forma de inicialización. |
| Escribir `array.length()` | Error de compilación: no es método. | `array.length`. |
| Escribir `texto.length` | Error de compilación: el método requiere paréntesis. | `texto.length()`. |
| Usar `i <= array.length` | `ArrayIndexOutOfBoundsException`. | `i < array.length`. |
| Empezar un recorrido de array en `1` por costumbre | Se salta la posición `0`. | Empezar en `0`. |
| Reasignar la variable del `for-each` para «modificar» el array | La posición real no cambia. | `array[i] = valor` con `for`. |
| Llamar a `.length()` sobre un elemento que vale `null` | `NullPointerException`. | Rellenar antes o comprobar `!= null`. |
| Usar `(int)(Math.random() * array.length) + 1` como índice | Excluye el 0 y puede producir índice inexistente. | Quitar `+ 1`. |
| Reiniciar el mejor candidato dentro de cada comparación | Se pierde el máximo encontrado. | Inicializarlo una vez antes de recorrer. |
| Usar `break` en una búsqueda que debe contar todas las coincidencias | Se detiene el recuento prematuramente. | Recorrer todos los elementos. |
| Mezclar `nextInt()` con `nextLine()` sin gestionar el salto pendiente | `nextLine()` puede leer una línea vacía de forma inesperada. | Consumir el salto con `lector.nextLine()` tras `nextInt()`. |

## 19.1. Leer los mensajes de excepción

**`StringIndexOutOfBoundsException`**: se intentó acceder a una posición inexistente de un `String`.

**`ArrayIndexOutOfBoundsException`**: se intentó acceder a una posición inexistente de un array.

**`NullPointerException`**: se intentó usar una referencia nula como si apuntara a un objeto.

**`InputMismatchException`**: la entrada leída por `Scanner` no tenía el tipo o formato esperado.

No todas las excepciones tienen la misma causa; hay que leer **el tipo y el índice/posición** que aparecen en el mensaje y compararlos con el tamaño y las condiciones del programa.

# 20. Aspectos confusos o incompletos de la transcripción

Se señalan para no estudiar como si fueran afirmaciones definitivas de la clase:

1. **Conversión de bases:** al describir oralmente el diagrama, algunas ramas «sí/no» y las comparaciones entre número y base aparecen invertidas. La condición coherente con el algoritmo codificado es `numero >= base` para seguir dividiendo.
2. **Terminología y sintaxis mal reconocidas:** `for-each`, `while`, `do while`, `charAt`, `length`, `split`, `replaceAll`, `StringIndexOutOfBoundsException` y `ArrayIndexOutOfBoundsException` aparecen deformados en distintos momentos. Aquí se utiliza su forma correcta en Java.
3. **Hexadecimal:** el profesor explica que hay que convertir tanto los restos como el último cociente a letras cuando corresponda, pero la transcripción no conserva una versión completa y fiable del código que apareció en la pantalla. El programa de este documento está reconstruido y comprobado conceptualmente.
4. **Palíndromos:** parte del proceso de escribir `for`, índices y variables de caracteres es una demostración oral con rectificaciones. La solución definitiva se ha organizado a partir de la idea consolidada: `length() / 2`, comparación simétrica, bandera booleana y `break`.
5. **Figuras geométricas:** la transcripción pierde algunos caracteres del dibujo en la pizarra. Se conserva la lógica: cuadrados rellenos, bordes e interior diferentes, y `for` anidados. Los símbolos usados en los programas son ejemplos de presentación.
6. **Enunciado exacto del análisis de texto:** no queda inequívoco qué estadísticas se pedían por oración y cuáles para la frase completa. Por eso se muestra el análisis global y, como ampliación, el análisis por oración.
7. **`split` y el punto final:** se confunden oralmente posibles fragmentos vacíos. El comportamiento real de Java se ha explicado con precisión, incluida la eliminación de vacíos finales por defecto.
8. **Factorial:** algunas frases sobre el valor uno son imprecisas; se distingue correctamente entre `n!`, el caso base `0! = 1` y el **acumulador inicial** igual a `1`.
9. **`for-each`:** se describe de forma excesivamente restrictiva como «solo lectura» y se asocia erróneamente una modificación a determinadas excepciones. Se ha conservado la regla práctica enseñada —usar índices para reemplazar elementos—, aclarando el funcionamiento real de Java.
10. **Impresión directa de un array:** se habla de «dirección de memoria». Se aclara que la representación mostrada no tiene por qué ser una dirección real.
11. **Número aleatorio:** la explicación oscila entre multiplicar por la longitud y añadir una unidad. Para **índices de arrays**, la forma válida mostrada aquí es `(int) (Math.random() * array.length)`, sin `+ 1`.
12. **Ejercicio de amigos:** el profesor desarrolla la carga, el menú, el listado, el aleatorio y el candidato más largo. **La búsqueda y la prohibición de duplicados quedan planteadas como deberes**, por lo que sus soluciones aparecen diferenciadas de la explicación de clase.
13. **Algunas referencias a fechas de examen y materiales:** aparecen en conversaciones laterales y no se utilizan aquí para deducir requisitos actuales de evaluación. La única delimitación explícita conservada en esta sesión es la intención de evaluar arrays estáticos antes de introducir estructuras dinámicas.

# 21. Ejercicios de repaso

Estos ejercicios sirven para comprobar que puedes reconstruir la lógica sin copiar los programas completos. No son una lista de preguntas confirmadas de examen.

1. **Bases:** convierte manualmente `27₁₀` a binario y a octal, mostrando cada cociente y resto. Después programa ambas conversiones con la misma variable `base`.
2. **Hexadecimal:** convierte `255₁₀` a hexadecimal. Explica por qué aparecen letras y qué pasaría si no transformaras el resto `15`.
3. **Recorrido inverso:** escribe un `for` que muestre `PROGRAMAR` al revés. Explica la condición necesaria para llegar al índice `0`.
4. **Palíndromos:** analiza `reconocer`, `radar`, `casa` y `anilina`; indica cuáles son palíndromos y cuántas comparaciones hace como máximo el algoritmo de la mitad.
5. **Paridad de longitud:** explica por qué el mismo código con `length() / 2` funciona tanto con una palabra de 8 letras como con una de 9.
6. **Bucles anidados:** dibuja un cuadrado relleno de 7 × 7 y otro cuyo borde sea `#` y cuyo interior sea `.`.
7. **Texto:** cuenta las palabras de una línea con espacios repetidos. Explica por qué `split(" ")` y `split("\\s+")` pueden dar resultados diferentes.
8. **Menú:** crea uno con opciones «mostrar saludo», «mostrar fecha simulada» y «salir». Introduce un `default` y haz que se repita hasta elegir salir.
9. **Factorial:** calcula manualmente `6!`. Después escribe un `for` descendente que produzca el mismo resultado.
10. **Arrays:** declara un array para cinco notas y explica qué valor contiene cada posición antes de que el usuario introduzca datos.
11. **Acceso:** con un array de 8 elementos, explica cuáles son el primer índice, el último y la longitud, y qué ocurriría al acceder a `array[8]`.
12. **`for-each`:** escribe dos recorridos del mismo array, uno con `for` convencional y otro con `for-each`. Indica cuál usarías para reemplazar el segundo nombre.
13. **Aleatorio:** genera un índice válido para un array de 10 amigos. Demuestra matemáticamente por qué el índice 10 no puede salir con la fórmula correcta.
14. **Mayor candidato:** a partir de `{"Sol", "Alejandro", "Marta", "Ana"}`, obtiene el nombre más largo sin ordenar el array.
15. **Búsqueda:** dado `{"Ana", "Juan", "Ana", "Lucas", "Ana"}`, cuenta cuántas veces aparece `Ana` sin detenerte en la primera coincidencia.
16. **Sin duplicados:** al pedir cuatro nombres, obliga a repetir la entrada cada vez que se introduzca uno ya guardado; no avances de posición hasta que el nuevo nombre sea válido.

---

**Secuencia recomendada de estudio:** comprender primero la tabla de índices y la ejecución de un `for`; después dominar arrays, `for-each` y sus diferencias; finalmente resolver el gestor de amigos sin mirar los ejemplos. Para las conversiones y palíndromos, haz una **tabla de seguimiento** antes de escribir el código.

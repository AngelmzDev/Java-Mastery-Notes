# Apuntes completos — Día 4

> **Procedencia:** apuntes reconstruidos a partir de las clases, aportados al proyecto. Se conservan las advertencias de fidelidad y las ampliaciones que ya estaban etiquetadas. Se han anonimizado identificadores personales cuando procede.

[Volver a la ficha de estudio](../dia-04.md)

**Lenguaje:** Java  
**Tipo de documento:** Teoría con ejemplos  
**Base:** transcripción de la clase  

> **Criterio de esta versión.** Se han eliminado los ejercicios y sus resoluciones como bloques independientes. Se conserva la teoría explicada en clase y se usan únicamente ejemplos breves para mostrar cada concepto. La sección **Trabajo con letras, caracteres y posiciones** incluye además una ampliación didáctica solicitada expresamente, separada del contenido procedente de la transcripción.

---

## Índice

1. [Entrada de datos con `Scanner`](#1-entrada-de-datos-con-scanner)
2. [Variables, tipos y constantes](#2-variables-tipos-y-constantes)
3. [Operadores aritméticos](#3-operadores-aritméticos)
4. [División entera, división real y casteo](#4-división-entera-división-real-y-casteo)
5. [Módulo `%`](#5-módulo-)
6. [Operadores de asignación](#6-operadores-de-asignación)
7. [Salida formateada con `printf`](#7-salida-formateada-con-printf)
8. [Métodos y clase `Math`](#8-métodos-y-clase-math)
9. [Jerarquía de operaciones y paréntesis](#9-jerarquía-de-operaciones-y-paréntesis)
10. [Refactorización y utilidades de IntelliJ](#10-refactorización-y-utilidades-de-intellij)
11. [Operadores lógicos y expresiones booleanas](#11-operadores-lógicos-y-expresiones-booleanas)
12. [Trabajo con `String`](#12-trabajo-con-string)
13. [Trabajo con letras, caracteres y posiciones](#13-trabajo-con-letras-caracteres-y-posiciones)
14. [Resumen final](#14-resumen-final)
15. [Glosario](#15-glosario)
16. [Puntos a verificar](#16-puntos-a-verificar)

---

# 1. Entrada de datos con `Scanner`

Para leer datos escritos por el usuario desde la consola se utiliza la clase `Scanner`.

Primero se importa:

```java
import java.util.Scanner;
```

Después se crea un lector asociado a `System.in`:

```java
Scanner lector = new Scanner(System.in);
```

A partir de ese objeto se emplea un método distinto según el tipo de dato que se quiera leer.

| Tipo | Lectura habitual |
|---|---|
| `int` | `lector.nextInt()` |
| `double` | `lector.nextDouble()` |
| `String` | `lector.nextLine()` |

Ejemplos:

```java
int edad = lector.nextInt();
double precio = lector.nextDouble();
String frase = lector.nextLine();
```

## 1.1. `nextLine()` y los espacios

`nextLine()` permite leer una línea completa, incluidos los espacios.

```java
String frase = lector.nextLine();
```

En la clase se recomienda mantener un criterio consistente al leer cadenas y no alternar sin necesidad entre `next()` y `nextLine()`, porque pueden aparecer comportamientos no deseados relacionados con los saltos de línea pendientes.

## 1.2. Importación de `Scanner`

`Scanner` pertenece a `java.util`. Si no está importado, Java no sabe qué clase se está intentando utilizar.

```java
import java.util.Scanner;
```

En IntelliJ, si falta la importación, se puede utilizar la acción **Import Class** o **Alt + Enter** para que el IDE la añada.

> **Importante.** En el código Java, los literales decimales se escriben con punto: `2.5`, `1.25`, `273.15`.

---

# 2. Variables, tipos y constantes

Una variable se explica en clase como un espacio en memoria que guarda un dato para poder utilizarlo después.

Tipos utilizados durante la sesión:

| Tipo | Uso |
|---|---|
| `int` | números enteros |
| `double` | números con decimales |
| `boolean` | valores `true` o `false` |
| `String` | cadenas de texto |
| `char` | un único carácter |

Ejemplo:

```java
int numero = 8;
double precio = 2.50;
boolean correcto = true;
String saludo = "Hola";
char letra = 'H';
```

## 2.1. Reutilizar variables

La idea explicada es sencilla:

- si un resultado se va a utilizar más adelante, merece la pena guardarlo en una variable;
- si una operación solo se calcula para mostrarla una vez, puede escribirse directamente en la salida.

Ejemplo guardando el resultado porque se reutilizará:

```java
int suma = numero1 + numero2;
int dobleSuma = suma * 2;
```

Ejemplo calculándolo directamente porque solo se muestra:

```java
System.out.println(numero1 + numero2);
```

> **Consejo del profesor.** Evitar crear variables que no aporten nada, pero guardar los cálculos que vayan a reutilizarse.

## 2.2. Constantes con `final`

Cuando un valor no debe cambiar se puede declarar con `final`.

```java
final double PRECIO = 1.25;
```

La convención mostrada consiste en escribir las constantes en mayúsculas.

```java
final double PRECIO_BEBIDA = 1.25;
final double PRECIO_BOCATA = 2.05;
```

---

# 3. Operadores aritméticos

Los operadores aritméticos tratados son:

| Operación | Operador | Ejemplo |
|---|---|---|
| Suma | `+` | `a + b` |
| Resta | `-` | `a - b` |
| Multiplicación | `*` | `a * b` |
| División | `/` | `a / b` |
| Módulo | `%` | `a % b` |

Ejemplo:

```java
int a = 10;
int b = 3;

int suma = a + b;
int resta = a - b;
int multiplicacion = a * b;
int division = a / b;
int resto = a % b;
```

La división y el módulo requieren especial atención porque dependen del tipo de los operandos.

---

# 4. División entera, división real y casteo

## 4.1. División entre enteros

Si los dos operandos son `int`, Java realiza una división entera.

```java
int a = 5;
int b = 2;
int resultado = a / b;
```

La parte decimal no se conserva.

Un punto importante de la clase es que **guardar después ese resultado en un `double` no recupera los decimales perdidos**.

```java
int a = 5;
int b = 2;
double resultado = a / b;
```

La operación `a / b` se ha realizado ya como división entera antes de asignarse a `resultado`.

## 4.2. Llevar la operación a `double`

Para obtener una división real, al menos uno de los operandos debe participar como `double`.

```java
double resultado = (double) a / b;
```

Aquí `(double)` es un **casteo**: se fuerza el tratamiento de `a` como `double` para esa operación.

También puede conseguirse utilizando un literal decimal:

```java
double porcentaje = iva / 100.0;
```

Como `100.0` ya es `double`, la división se realiza en ámbito decimal.

> **Error común.** `double resultado = entero1 / entero2;` sigue siendo una división entera si ambos operandos son `int`.

## 4.3. Elegir bien el tipo desde el principio

Si una variable va a intervenir continuamente en cálculos decimales, declararla como `double` desde el principio puede evitar casteos repetidos.

```java
double valor = lector.nextDouble();
```

---

# 5. Módulo `%`

El operador `%` devuelve el **resto de una división**.

```java
int resto = 10 % 3;
```

La forma de entenderlo propuesta en clase es:

> **Módulo = lo que no entra en grupos completos del tamaño indicado.**

Esta interpretación sirve para descomponer cantidades en grupos y también para comprobar propiedades de números.

## 5.1. Comprobar si un número es par

Un número es par si al dividirlo entre 2 el resto es 0:

```java
boolean esPar = numero % 2 == 0;
```

Un número es impar si el resto es distinto de 0:

```java
boolean esImpar = numero % 2 != 0;
```

## 5.2. Separar grupos mediante división y módulo

La combinación habitual es:

1. división entera para saber cuántos grupos completos hay;
2. módulo para quedarse con lo que sobra.

Ejemplo conceptual:

```java
int grupos = cantidad / tamanoGrupo;
int sobrante = cantidad % tamanoGrupo;
```

La clase utiliza esta idea para separar unidades como horas, minutos y segundos y también para descomponer números por cifras.

---

# 6. Operadores de asignación

Además de `=`, se trabajan operadores que modifican una variable utilizando su valor actual.

| Forma abreviada | Equivale a |
|---|---|
| `x += 5` | `x = x + 5` |
| `x -= 3` | `x = x - 3` |
| `x *= 10` | `x = x * 10` |
| `x /= 2` | `x = x / 2` |

Ejemplo:

```java
int numero = 10;
numero += 5;
numero -= 3;
numero *= 10;
numero /= 2;
```

Con `String`, `+=` también puede utilizarse para concatenar:

```java
String frase = "Hola";
frase += " que tal";
```

---

# 7. Salida formateada con `printf`

`System.out.printf` permite controlar cómo se muestra cada valor.

## 7.1. Marcadores utilizados

| Marcador | Significado |
|---|---|
| `%d` | entero |
| `%f` | decimal |
| `%.2f` | decimal con dos cifras decimales |
| `%n` | salto de línea |
| `\n` | salto de línea |
| `\t` | tabulación |

Ejemplo:

```java
int edad = 34;
double precio = 12.4;

System.out.printf("Edad: %d%n", edad);
System.out.printf("Precio: %.2f%n", precio);
```

Con `%.2f`, un valor como `12.4` se presenta con dos posiciones decimales.

## 7.2. Sustitución de valores

Cada marcador se sustituye por los argumentos situados después del texto.

```java
System.out.printf(
        "La suma de %d y %d es %d%n",
        a,
        b,
        a + b
);
```

## 7.3. Concatenación y paréntesis

Cuando `+` aparece junto a texto, Java puede utilizarlo como concatenación.

Si se quiere realizar antes una suma, se utilizan paréntesis:

```java
System.out.println("Resultado: " + (a + b));
```

Sin los paréntesis, la expresión puede terminar concatenando valores en lugar de sumarlos en el orden esperado.

---

# 8. Métodos y clase `Math`

## 8.1. Qué es un método

En la explicación de clase, un método se presenta como un conjunto de instrucciones que se ejecutan para realizar una tarea.

El propio programa utiliza un método principal:

```java
public static void main(String[] args) {
    // instrucciones
}
```

También se usan continuamente métodos ya creados:

```java
lector.nextInt();
lector.nextDouble();
frase.length();
```

La idea destacada es **no reinventar funcionalidad que Java ya ofrece**.

## 8.2. Clase `Math`

La clase `Math` contiene constantes y métodos para operaciones matemáticas.

### `Math.PI`

En lugar de escribir manualmente muchos decimales de π:

```java
double valor = Math.PI;
```

### `Math.pow`

Permite elevar una base a un exponente.

```java
double potencia = Math.pow(base, exponente);
```

Ejemplo:

```java
double cuadrado = Math.pow(radio, 2);
```

Esto evita escribir manualmente multiplicaciones repetidas cuando se necesita una potencia.

> **Consejo del profesor.** Si una funcionalidad habitual ya existe en las librerías de Java, es preferible reutilizarla antes que volver a implementarla manualmente.

---

# 9. Jerarquía de operaciones y paréntesis

Java respeta la jerarquía habitual de las operaciones.

En la explicación se recuerda el orden general:

1. paréntesis;
2. multiplicación y división;
3. suma y resta.

Ejemplo:

```java
int resultado = 2 + 3 * 4;
```

La multiplicación se evalúa antes que la suma.

Si se quiere cambiar el orden:

```java
int resultado = (2 + 3) * 4;
```

Los paréntesis también se utilizan para hacer el código más claro aunque la precedencia ya produzca el resultado correcto.

## 9.1. Paréntesis en expresiones lógicas

También resultan útiles cuando una condición lógica se concatena con texto:

```java
System.out.println("Cumple ambas: " + (condicion1 && condicion2));
```

De este modo queda claro que primero se evalúa la condición y después se concatena el resultado.

---

# 10. Refactorización y utilidades de IntelliJ

## 10.1. Renombrar mediante refactorización

Cambiar manualmente el nombre de un fichero o identificador puede dejar referencias antiguas sin actualizar.

La acción indicada en clase es:

**Refactor -> Rename**

El objetivo es que IntelliJ cambie el nombre y actualice las referencias correspondientes.

## 10.2. Duplicar líneas

Atajo utilizado repetidamente:

**Ctrl + D**

Sirve para duplicar rápidamente una línea.

## 10.3. Rainbow Brackets

Se recomienda **Rainbow Brackets** para distinguir mediante colores los diferentes niveles de paréntesis.

Ruta indicada:

**File -> Settings -> Plugins -> Marketplace -> Rainbow Brackets**

Puede ser necesario reiniciar IntelliJ después de instalarlo.

---

# 11. Operadores lógicos y expresiones booleanas

Una expresión lógica produce uno de dos valores:

```text
true
false
```

Los operadores tratados son:

- AND: `&&`
- OR: `||`
- NOT o negación: `!`

La clase menciona también `&` y `|`, pero indica que de momento se utilizarán `&&` y `||`.

## 11.1. AND `&&`

Con AND, **todas las condiciones deben ser verdaderas**.

| Condición 1 | Condición 2 | Resultado |
|---|---|---|
| `true` | `true` | `true` |
| `true` | `false` | `false` |
| `false` | `true` | `false` |
| `false` | `false` | `false` |

Ejemplo:

```java
boolean resultado = numero > 0 && numero < 100;
```

`resultado` solo será `true` si las dos comparaciones se cumplen.

## 11.2. OR `||`

Con OR basta con que **una de las condiciones sea verdadera**.

| Condición 1 | Condición 2 | Resultado |
|---|---|---|
| `true` | `true` | `true` |
| `true` | `false` | `true` |
| `false` | `true` | `true` |
| `false` | `false` | `false` |

Ejemplo:

```java
boolean resultado = numero == 0 || numero == 10;
```

## 11.3. Negación `!`

`!` invierte un valor booleano.

```text
!true  -> false
!false -> true
```

Ejemplo:

```java
boolean esPar = numero % 2 == 0;
boolean noEsPar = !esPar;
```

## 11.4. Guardar condiciones en variables booleanas

Una comparación puede guardarse directamente:

```java
boolean mayorQue50 = numero > 50;
boolean esPar = numero % 2 == 0;
```

Después pueden combinarse:

```java
boolean cumpleTodo = mayorQue50 && esPar;
```

## 11.5. Reutilizar cálculos antes de comparar

Si un cálculo va a utilizarse varias veces, se recomienda calcularlo una vez y guardar el resultado.

Ejemplo conceptual:

```java
double factor = 1 + (double) porcentaje / 100;
double precioFinal = precio * factor;
boolean puedoPagar = precioFinal <= dineroDisponible;
```

La idea importante no es el ejemplo concreto, sino **separar cálculo y comparación cuando el cálculo se reutiliza**.

---

# 12. Trabajo con `String`

`String` representa una cadena de caracteres.

```java
String frase = "Hola que tal";
```

El profesor separa su tratamiento del de los tipos numéricos porque algunas operaciones funcionan de forma diferente.

## 12.1. Concatenación con `+`

Con cadenas, `+` une textos.

```java
String frase = "Hola";
frase = frase + " que tal";
```

También puede escribirse:

```java
frase += " que tal";
```

## 12.2. Comparar cadenas: `equals`

Para comparar el contenido de dos `String` se utiliza `equals`.

```java
boolean iguales = frase.equals("Hola que tal");
```

La comparación distingue entre mayúsculas y minúsculas.

```java
"Hola".equals("hola")
```

no produce el mismo resultado que comparar dos textos exactamente iguales.

> **Importante.** En clase se insiste en no utilizar `==` para comparar el contenido de cadenas.

## 12.3. Ignorar mayúsculas y minúsculas: `equalsIgnoreCase`

```java
boolean iguales = frase.equalsIgnoreCase("hola que tal");
```

Este método compara el contenido ignorando la diferencia entre mayúsculas y minúsculas.

## 12.4. Longitud: `length()`

`length()` devuelve el número de caracteres de una cadena.

```java
int longitud = frase.length();
```

La longitud incluye:

- letras;
- espacios;
- números;
- signos;
- cualquier otro carácter presente en la cadena.

Ejemplo:

```java
boolean primeraMasLarga = frase1.length() > frase2.length();
```

## 12.5. Comprobar si contiene texto: `contains`

```java
boolean contiene = frase.contains("Java");
```

Devuelve `true` si la secuencia indicada aparece dentro de la cadena.

La comprobación depende del texto exacto, incluidas mayúsculas y minúsculas.

## 12.6. Convertir a minúsculas o mayúsculas

```java
String minusculas = frase.toLowerCase();
String mayusculas = frase.toUpperCase();
```

Una aplicación explicada consiste en normalizar antes de hacer una comparación:

```java
boolean contiene = frase.toLowerCase().contains("java");
```

Así se evita comprobar manualmente varias combinaciones de mayúsculas y minúsculas.

## 12.7. Obtener un carácter: `charAt`

`charAt` devuelve el carácter situado en una posición de la cadena.

```java
char primeraLetra = frase.charAt(0);
```

Las posiciones empiezan en `0`.

El valor obtenido es un `char`, que es un tipo primitivo.

---

# 13. Trabajo con letras, caracteres y posiciones

> **AMPLIACIÓN DIDÁCTICA SOLICITADA.** Esta sección completa la parte final de la clase con conocimientos básicos de Java para poder estudiar correctamente comparación de letras, posiciones y conversiones entre `String` y `char`. No todo lo que aparece aquí fue explicado literalmente en la transcripción.

## 13.1. Diferencia entre `String` y `char`

Un `String` puede contener cero, uno o muchos caracteres:

```java
String palabra = "Hola";
```

Un `char` representa **un solo carácter**:

```java
char letra = 'H';
```

Fíjate en las comillas:

```java
String texto = "H"; // comillas dobles
char letra = 'H';    // comillas simples
```

## 13.2. Las posiciones empiezan en 0

Para la cadena:

```java
String palabra = "Hola";
```

las posiciones son:

| Posición | Carácter |
|---:|:---:|
| `0` | `H` |
| `1` | `o` |
| `2` | `l` |
| `3` | `a` |

Representación:

```text
Cadena:    H   o   l   a
Índice:    0   1   2   3
```

La longitud es 4:

```java
palabra.length();
```

pero la última posición válida es 3.

Regla general:

```text
primera posición = 0
última posición  = length() - 1
```

## 13.3. Saber qué letra hay en una posición: `charAt`

```java
String palabra = "Hola";

char letra0 = palabra.charAt(0); // H
char letra1 = palabra.charAt(1); // o
char letra2 = palabra.charAt(2); // l
char letra3 = palabra.charAt(3); // a
```

Para obtener la última letra sin conocer de antemano la longitud:

```java
char ultima = palabra.charAt(palabra.length() - 1);
```

### Error típico: utilizar `length()` como índice

Esto es incorrecto:

```java
palabra.charAt(palabra.length());
```

Si la palabra tiene 4 caracteres, `length()` vale 4, pero las posiciones válidas son `0`, `1`, `2` y `3`.

## 13.4. Comparar una letra concreta

Como `char` es un tipo primitivo, una letra individual sí puede compararse con `==`.

```java
char primera = palabra.charAt(0);
boolean empiezaPorH = primera == 'H';
```

También puede hacerse directamente:

```java
boolean empiezaPorH = palabra.charAt(0) == 'H';
```

### `String` y `char` no se comparan igual

Para texto completo:

```java
palabra.equals("Hola");
```

Para un carácter individual:

```java
palabra.charAt(0) == 'H';
```

Resumen:

| Quiero comparar... | Forma |
|---|---|
| dos `String` | `texto1.equals(texto2)` |
| dos `String` ignorando mayúsculas | `texto1.equalsIgnoreCase(texto2)` |
| dos `char` | `letra1 == letra2` |

## 13.5. Comparar una letra ignorando mayúsculas y minúsculas

Una forma sencilla, coherente con lo explicado en clase, es normalizar primero el `String`:

```java
String palabra = "Hola";
char primera = palabra.toLowerCase().charAt(0);
boolean esH = primera == 'h';
```

Otra posibilidad de Java es normalizar directamente el `char`:

```java
char primera = palabra.charAt(0);
boolean esH = Character.toLowerCase(primera) == 'h';
```

También se podría preguntar por las dos variantes:

```java
boolean esH = primera == 'h' || primera == 'H';
```

La normalización suele dejar la condición más limpia.

## 13.6. Saber en qué posición aparece una letra: `indexOf`

`indexOf` busca la **primera aparición** de un carácter o texto.

```java
String palabra = "programacion";
int posicion = palabra.indexOf('a');
```

También acepta un `String`:

```java
int posicion = palabra.indexOf("gra");
```

Si el carácter o texto no existe, devuelve:

```text
-1
```

Por tanto, puede comprobarse si aparece así:

```java
boolean existe = palabra.indexOf('a') != -1;
```

Para comprobar únicamente si existe una secuencia, `contains` suele ser más directo:

```java
boolean existe = palabra.contains("gra");
```

## 13.7. Primera y última aparición

`indexOf` devuelve la primera posición.

```java
String palabra = "banana";
int primeraA = palabra.indexOf('a');
```

`lastIndexOf` devuelve la última:

```java
int ultimaA = palabra.lastIndexOf('a');
```

Esto permite distinguir entre:

- dónde aparece por primera vez una letra;
- dónde aparece por última vez.

## 13.8. Buscar desde una posición concreta

`indexOf` puede recibir una posición desde la que empezar a buscar:

```java
String palabra = "banana";
int posicion = palabra.indexOf('a', 2);
```

La búsqueda comienza desde el índice indicado.

Esto resulta útil cuando una letra aparece varias veces.

## 13.9. Comprobar la primera o la última letra

Primera letra:

```java
boolean empiezaPorA = palabra.charAt(0) == 'A';
```

Última letra:

```java
boolean terminaEnA =
        palabra.charAt(palabra.length() - 1) == 'a';
```

Java también dispone de métodos específicos para `String`:

```java
boolean empieza = palabra.startsWith("Ho");
boolean termina = palabra.endsWith("la");
```

`startsWith` y `endsWith` trabajan con cadenas, no con `char`.

## 13.10. Extraer una parte del texto: `substring`

`substring` permite obtener una parte de una cadena.

```java
String palabra = "programacion";
String parte = palabra.substring(0, 4);
```

El primer índice se incluye y el segundo no.

```text
substring(inicio, fin)
          incluido  excluido
```

Ejemplo visual:

```text
Texto:     p r o g r a m a c i o n
Índice:    0 1 2 3 4 5 6 7 8 9 10 11

substring(0, 4) -> caracteres 0, 1, 2 y 3
```

## 13.11. Convertir de `char` a `String`

Si se tiene una letra como `char` y se necesita como cadena:

```java
char letra = 'A';
String texto = String.valueOf(letra);
```

También puede concatenarse con una cadena vacía:

```java
String texto = "" + letra;
```

La forma con `String.valueOf` deja más clara la intención.

## 13.12. Convertir de `String` a `char`

Si se tiene un `String` y se necesita un carácter concreto:

```java
String texto = "Hola";
char letra = texto.charAt(0);
```

No existe una conversión válida a un único `char` si se pretende conservar toda una palabra, porque un `char` solo puede contener un carácter.

## 13.13. Comparar dos letras obtenidas de dos palabras

```java
String palabra1 = "Casa";
String palabra2 = "Coche";

char primera1 = palabra1.charAt(0);
char primera2 = palabra2.charAt(0);

boolean mismaInicial = primera1 == primera2;
```

Ignorando mayúsculas y minúsculas:

```java
boolean mismaInicial =
        Character.toLowerCase(palabra1.charAt(0))
        == Character.toLowerCase(palabra2.charAt(0));
```

## 13.14. Comparar cadenas por orden

Java dispone de `compareTo` para comparar cadenas según su orden lexicográfico.

```java
int resultado = palabra1.compareTo(palabra2);
```

Interpretación básica:

| Resultado | Significado |
|---|---|
| `< 0` | `palabra1` va antes que `palabra2` |
| `0` | tienen el mismo contenido |
| `> 0` | `palabra1` va después que `palabra2` |

Si se quiere ignorar mayúsculas y minúsculas:

```java
int resultado = palabra1.compareToIgnoreCase(palabra2);
```

Para comprobar simplemente si dos cadenas son iguales, `equals` sigue siendo más claro.

## 13.15. Errores habituales con posiciones

### Índice fuera de rango

Si una cadena tiene longitud 4, no se puede acceder a la posición 4:

```java
String palabra = "Hola";
palabra.charAt(4); // posición no válida
```

Las posiciones válidas son `0` a `3`.

### Cadena vacía

En una cadena vacía no existe la posición 0:

```java
String texto = "";
texto.charAt(0); // no hay ningún carácter
```

Antes de acceder al primer carácter puede comprobarse la longitud:

```java
boolean tieneCaracteres = texto.length() > 0;
```

### Confundir posición con longitud

```text
"Hola" tiene longitud 4
pero su última posición es 3
```

Esta diferencia es fundamental al trabajar con `charAt`.

## 13.16. Tabla de referencia rápida

| Necesidad | Código |
|---|---|
| longitud | `texto.length()` |
| primer carácter | `texto.charAt(0)` |
| último carácter | `texto.charAt(texto.length() - 1)` |
| carácter en posición `n` | `texto.charAt(n)` |
| primera posición de una letra | `texto.indexOf('a')` |
| última posición de una letra | `texto.lastIndexOf('a')` |
| comprobar si contiene texto | `texto.contains("abc")` |
| empieza por texto | `texto.startsWith("abc")` |
| termina en texto | `texto.endsWith("abc")` |
| comparar dos cadenas | `a.equals(b)` |
| comparar ignorando mayúsculas | `a.equalsIgnoreCase(b)` |
| comparar dos caracteres | `c1 == c2` |
| pasar a minúsculas | `texto.toLowerCase()` |
| pasar a mayúsculas | `texto.toUpperCase()` |
| extraer una parte | `texto.substring(inicio, fin)` |
| `char` a `String` | `String.valueOf(letra)` |

---

# 14. Resumen final

- `Scanner` permite leer datos desde consola y necesita importar `java.util.Scanner`.
- `int` se utiliza para enteros y `double` para operaciones con decimales.
- `final` permite declarar valores que no deben cambiar.
- Si ambos operandos de una división son enteros, la división se realiza en ámbito entero.
- Para obtener decimales se puede castear uno de los operandos a `double` o utilizar un literal decimal.
- `%` obtiene el resto y puede entenderse como lo que no entra en grupos completos.
- Los operadores `+=`, `-=`, `*=`, `/=` modifican una variable utilizando su valor actual.
- `printf` permite controlar el formato con `%d`, `%.2f`, `%n` y `\t`.
- `Math.PI` y `Math.pow` reutilizan funcionalidad ya incorporada en Java.
- `&&` exige que todas las condiciones sean verdaderas; `||` exige al menos una; `!` niega el resultado.
- En `String`, `+` concatena.
- Para comparar el contenido de cadenas se utiliza `equals` o `equalsIgnoreCase`, no `==`.
- `length()` devuelve el número de caracteres.
- `contains()` comprueba si un texto contiene otro.
- `toLowerCase()` y `toUpperCase()` permiten normalizar texto.
- `charAt()` obtiene un carácter de una posición determinada.
- Las posiciones de un `String` empiezan en `0` y terminan en `length() - 1`.
- Los `char` pueden compararse con `==`.
- `indexOf()` devuelve la primera posición en la que aparece un carácter o texto; `lastIndexOf()` devuelve la última.
- Si `indexOf()` no encuentra el elemento, devuelve `-1`.
- `substring()` permite extraer una parte del texto utilizando índices.

---

# 15. Glosario

**Ámbito entero:** contexto en el que una operación se evalúa utilizando valores enteros.

**Booleano:** valor lógico que puede ser `true` o `false`.

**Casteo:** conversión explícita de un valor a otro tipo, por ejemplo `(double) numero`.

**`char`:** tipo primitivo que representa un único carácter.

**Concatenación:** unión de textos mediante `+`.

**Constante:** variable cuyo valor no debe cambiar, declarada con `final`.

**`contains`:** método de `String` que indica si una cadena contiene una secuencia.

**`equals`:** compara el contenido de dos cadenas respetando mayúsculas y minúsculas.

**`equalsIgnoreCase`:** compara cadenas ignorando mayúsculas y minúsculas.

**Índice:** posición de un carácter dentro de una cadena. El primer índice es `0`.

**`indexOf`:** devuelve la posición de la primera aparición de un carácter o texto; devuelve `-1` si no existe.

**`lastIndexOf`:** devuelve la posición de la última aparición de un carácter o texto.

**`length()`:** devuelve el número de caracteres de un `String`.

**Método:** conjunto de instrucciones ya definido que realiza una tarea.

**Módulo `%`:** resto de una división.

**Operador AND `&&`:** produce `true` cuando todas las condiciones son verdaderas.

**Operador OR `||`:** produce `true` cuando al menos una condición es verdadera.

**Negación `!`:** invierte un valor booleano.

**`Math.PI`:** constante de `Math` que representa π.

**`Math.pow`:** método que calcula una potencia.

**Refactorización:** modificación estructurada del código actualizando sus referencias.

**`Scanner`:** clase utilizada para leer datos desde `System.in`.

**`String`:** tipo utilizado para representar cadenas de caracteres.

**`substring`:** método que obtiene una parte de una cadena a partir de índices.

**`charAt`:** método de `String` que devuelve el carácter situado en un índice.

---

# 16. Puntos a verificar

1. **Fecha de la clase.** La transcripción no incluye una fecha inequívoca, por lo que no se ha añadido una fecha concreta.
2. **Segundo plugin visual de IntelliJ.** Tras Rainbow Brackets se menciona otro plugin para visualizar indentaciones con colores, pero su nombre no se entiende con suficiente fiabilidad y se ha omitido.
3. **Fragmento final de la grabación.** La explicación original sobre `charAt` y comparación de caracteres está parcialmente degradada. La parte inequívoca procedente de la clase se ha conservado; el resto se ha sustituido por una **ampliación didáctica claramente marcada** para que los apuntes sean estudiables.

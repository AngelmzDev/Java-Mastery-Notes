# Apuntes completos — Día 3

> **Procedencia:** apuntes reconstruidos a partir de las clases, aportados al proyecto. Se conservan las advertencias de fidelidad y las ampliaciones que ya estaban etiquetadas. Se han anonimizado identificadores personales cuando procede.

[Volver a la ficha de estudio](../dia-03.md)

## Apuntes completos reconstruidos a partir de la transcripción de clase

> **Criterio de estos apuntes.** Se conserva el contenido docente de la clase y se eliminan preguntas repetidas, interrupciones, conversaciones laterales, descansos y fragmentos que no aportan contenido. Se han normalizado únicamente errores evidentes de transcripción automática cuando el contexto permite identificar con seguridad términos como **IntelliJ, Scanner, `java.util`, Javadoc, Swagger, `System.out`, `printf`, `nextInt`, `nextDouble`, `NumberFormatException`, `InputMismatchException`, casting, parseo, etc.** No se ha añadido teoría externa para completar huecos. Cuando un símbolo, ejemplo o enunciado no queda registrado de forma fiable en la grabación, se indica expresamente.

---

# 1. Repaso inicial: salida formateada y comentarios

La sesión comienza resolviendo problemas de la clase anterior relacionados con la salida por consola, especialmente con `printf` y sus **banderas o marcadores de formato**.

La idea recordada es que, cuando se utiliza `printf`, el texto contiene marcadores que posteriormente se sustituyen por los valores proporcionados al método. Los valores tienen que corresponder en cantidad, orden y tipo con los marcadores utilizados.

Ejemplo conceptual trabajado en clases anteriores:

```java
System.out.printf("Me llamo %s", nombre);
```

La clase vuelve a insistir en que `printf` **no añade automáticamente un salto de línea**. Si se quiere terminar la impresión y continuar en otra línea hay que indicarlo dentro del formato.

Se recuerdan dos posibilidades:

```java
\n
```

como salto de línea, y dentro de un formato de `printf` también:

```text
%n
```

La idea práctica es:

> Si se utiliza `printf`, el salto de línea hay que introducirlo de forma explícita.

---

# 2. Comentarios de documentación

En la clase anterior se habían visto los comentarios normales del código, tanto de una línea como de varias líneas. En esta sesión se introduce otro tipo: los **comentarios de documentación**.

La finalidad explicada no es simplemente dejar una nota al lado de una instrucción, sino permitir que la documentación del código pueda utilizarse posteriormente para construir documentación más formal del proyecto.

El profesor muestra que este tipo de comentarios puede describir elementos del código, como:

- paquetes;
- clases;
- variables;
- métodos;
- finalidad o funcionamiento de determinadas partes del proyecto.

La grabación muestra la idea de pasar de comentarios internos del código a una documentación que posteriormente puede presentarse como una página web.

## 2.1. Generación de documentación

Se enseña que Java dispone de herramientas para generar documentación a partir de este tipo de comentarios. Durante la demostración se configura una ruta de salida y se genera una página web con la documentación resultante.

La clase no pretende profundizar todavía en esta herramienta. El profesor deja claro que **no será algo que se utilice intensamente en estas primeras prácticas**, sino una introducción a la importancia de documentar el código.

## 2.2. Utilidad profesional de los comentarios

El profesor insiste especialmente en la utilidad de los comentarios cuando un proyecto tiene una vida larga.

Dos situaciones explicadas:

1. Se escribe un código y varios meses después hay que volver a modificarlo. En ese tiempo se han hecho muchas otras cosas y es posible no recordar exactamente cómo funcionaba.
2. Se recibe un proyecto que está en mantenimiento y que fue desarrollado por otra persona hace uno o dos años. Si no hay documentación, hay que investigar todo el código desde cero.

Los comentarios no sustituyen completamente la lectura del código, pero permiten comprender más rápidamente:

- qué hace una parte;
- por qué existe;
- cómo se relacionan determinadas piezas;
- qué intención tenía la persona que lo escribió.

La idea transmitida es que **un proyecto bien comentado reduce considerablemente el tiempo necesario para volver a comprenderlo o para que otra persona empiece a mantenerlo**.

## 2.3. Herramientas externas de documentación

Se comenta que existen numerosas herramientas externas capaces de generar documentación a partir del código, incluso con distintos grados de automatización.

El profesor menciona **Swagger** como una herramienta que aparecerá más adelante y que se utiliza mucho para documentación en determinados contextos.

No se desarrolla Swagger en esta clase; únicamente se presenta como ejemplo de herramienta profesional relacionada con este ámbito.

---

# 3. Objetivo principal de la sesión

El día anterior se había trabajado con variables a las que se asignaban directamente valores escritos en el código, por ejemplo:

```java
int edad = 20;
```

En esta sesión se cambia el planteamiento.

El objetivo es que los datos **entren al programa durante su ejecución**, especialmente desde el teclado, y después:

- guardarlos en variables;
- utilizarlos;
- mostrarlos;
- realizar operaciones con ellos.

Los dos grandes bloques prácticos de la sesión son:

1. **Lectura de datos por teclado con `Scanner`.**
2. **Operadores y cambios de tipo.**

---

# 4. Flujo de entrada de datos

Hasta este momento, los valores se habían escrito directamente en el código. Sin embargo, una aplicación normal necesita recibir información durante su ejecución.

El profesor introduce esta idea como un **flujo de entrada de datos**: alguien o algo proporciona información al programa.

El ejemplo que se trabajará en esta clase es el más sencillo:

> El usuario escribe un dato utilizando el teclado y el programa lo lee.

Se comenta que existen otros tipos de entrada y otros sistemas para obtener datos, pero en esta fase se trabajará con la entrada por teclado.

---

# 5. Cómo reconocer una llamada a un método

Antes de explicar `Scanner`, se hace un repaso de los métodos.

La clase recuerda que una característica visual muy importante de una llamada a método son los **paréntesis**.

Ejemplo conceptual:

```java
algo.metodo()
```

La idea explicada es que, cuando aparece una expresión seguida de paréntesis, se está trabajando con una llamada a método.

Esto se relaciona con métodos que ya se llevan utilizando desde las primeras clases:

```java
System.out.println(...)
```

Aquí se está haciendo una llamada al método `println`.

El profesor insiste en aprender a **reconocer la sintaxis** y no limitarse a memorizar líneas completas.

---

# 6. Introducción a `Scanner`

Para leer datos introducidos por teclado se presenta la clase:

```java
Scanner
```

`Scanner` es una clase que Java ya proporciona. No hay que descargar una librería externa para utilizarla.

La clase se encuentra dentro de un paquete de Java que en la explicación aparece como:

```java
java.util
```

Por eso, para poder usarla desde una clase que no está en ese mismo paquete, hay que importarla.

La importación utilizada en clase es:

```java
import java.util.Scanner;
```

---

# 7. Importaciones y paquetes

La explicación de `Scanner` se utiliza para recordar cómo funcionan las importaciones.

Si una clase necesita utilizar otra clase que se encuentra en otro paquete, es necesario indicar dónde se encuentra mediante una importación.

La idea de la explicación es:

```text
package A
├── Clase1
└── Clase2

package B
└── Clase3
```

Si una clase necesita utilizar un elemento situado en otro paquete, tendrá que importarlo.

Cuando las clases se encuentran dentro del mismo paquete, esa importación específica no es necesaria.

Con `Scanner`, nuestra clase necesita acceder a una clase que está en `java.util`, por eso se importa.

IntelliJ normalmente puede ayudar a realizar esta importación automáticamente cuando detecta que estamos utilizando una clase que todavía no está importada.

---

# 8. Variables simples y variables complejas

`Scanner` se utiliza también para continuar la explicación sobre la diferencia inicial entre tipos simples/primitivos y tipos complejos.

## 8.1. Variables simples

Los tipos que se habían trabajado como tipos sencillos incluyen, entre otros:

- `int`;
- `boolean`;
- `double`;
- `float`;
- `char`.

En estos casos, la inicialización se había presentado de una forma directa:

```java
int edad = 20;
```

Es decir:

```text
TIPO + NOMBRE + = + VALOR
```

## 8.2. Variables complejas

Para una clase como `Scanner`, la construcción es diferente. Se necesita crear un objeto utilizando la palabra reservada:

```java
new
```

La idea general presentada en clase es:

```text
Tipo nombre = new Tipo(...);
```

En el caso de `Scanner`, el ejemplo trabajado es conceptualmente:

```java
Scanner lector = new Scanner(System.in);
```

El profesor quiere que se retenga especialmente esta diferencia:

```text
Variable simple  -> se inicializa directamente con un valor
Variable compleja -> normalmente se construye con new y la forma de construcción correspondiente
```

---

# 9. Qué significa inicializar una variable

La clase utiliza repetidamente la palabra **inicializar**.

Inicializar significa:

> Dar un valor inicial a una variable.

Ejemplo sencillo:

```java
int edad = 20;
```

Aquí se está declarando la variable y se le está dando su valor inicial.

Para una variable compleja, como `Scanner`, la inicialización se realiza creando el objeto:

```java
Scanner lector = new Scanner(System.in);
```

La explicación menciona también el valor `null` para representar que una referencia de tipo complejo no está apuntando a un objeto creado.

El profesor utiliza esta diferencia para introducir poco a poco el concepto de que los tipos complejos no se manejan exactamente igual que un número o un booleano.

---

# 10. `new`: creación de objetos complejos

Para crear una instancia de una clase se utiliza:

```java
new
```

La estructura que se trabaja es:

```java
Tipo nombre = new Tipo(...);
```

Después de `new` aparece el tipo que se quiere construir y unos paréntesis.

El profesor señala que dentro de esos paréntesis pueden aparecer distintas posibilidades dependiendo de cómo esté diseñada la clase.

IntelliJ ayuda mostrando las diferentes formas disponibles de construir el objeto. La idea transmitida es que **no hay que memorizar todas las posibilidades**, sino saber interpretar las ayudas que ofrece el IDE.

En `Scanner`, para leer del teclado se utiliza la entrada estándar:

```java
System.in
```

Por tanto, el objeto que se utiliza durante la clase queda conceptualmente así:

```java
Scanner lector = new Scanner(System.in);
```

---

# 11. Un objeto ofrece métodos

Después de crear el objeto `lector`, IntelliJ muestra una gran cantidad de métodos disponibles.

La clase lo utiliza para reforzar la diferencia entre un tipo simple y una clase compleja: un objeto no solo representa un dato, sino que también proporciona funcionalidad.

Con el objeto `lector`, por ejemplo, se pueden hacer llamadas del tipo:

```java
lector.next...
```

La notación con punto permite acceder a los métodos disponibles en ese objeto.

---

# 12. Leer un dato y guardar el valor devuelto

El profesor vuelve a utilizar la idea de **retorno de un método**.

Cuando un método de lectura recibe un dato del usuario, devuelve ese dato al programa. Una vez devuelto, el programador decide qué hacer con él.

Puede:

- guardarlo en una variable;
- imprimirlo;
- utilizarlo en una operación;
- utilizarlo posteriormente en cualquier parte del ámbito en el que esté disponible.

La analogía utilizada vuelve a ser la del bocadillo:

- Si alguien va al bar, realiza una acción y no trae nada, no devuelve un resultado útil.
- Si se le pide que vuelva con un bocadillo, entonces devuelve algo y con ese resultado se puede hacer lo que se quiera.

Con `Scanner`, el valor leído se guarda normalmente en una variable.

Ejemplo conceptual:

```java
String nombre = lector.next();
```

Aquí el método de lectura devuelve un texto y ese texto queda almacenado en `nombre`.

---

# 13. El programa se detiene esperando una entrada

Cuando se ejecuta una lectura por teclado, el programa puede parecer que se ha quedado parado.

En realidad sigue en ejecución, pero está esperando que el usuario introduzca un valor.

Secuencia explicada:

1. Java ejecuta las instrucciones anteriores.
2. Llega a la llamada de lectura.
3. El programa espera una entrada.
4. El usuario escribe un dato.
5. El usuario pulsa `Enter`.
6. El dato se devuelve al programa.
7. Se guarda en la variable correspondiente.
8. La ejecución continúa por la siguiente línea.

El profesor insiste en que esto no significa que el programa se haya bloqueado: simplemente está esperando datos.

---

# 14. Métodos de lectura según el tipo de dato

La idea general presentada es que `Scanner` dispone de métodos de lectura relacionados con el tipo de información que se quiere obtener.

Durante la clase se mencionan expresamente ejemplos como:

```java
lector.next()
lector.nextInt()
lector.nextDouble()
lector.nextBoolean()
lector.nextFloat()
```

La regla práctica es:

> El dato que se lee debe ser compatible con el tipo de variable en el que se pretende guardar.

Si el programa espera un número y el usuario introduce algo incompatible con ese número, se produce un error de entrada.

La grabación contiene también una referencia oral a la lectura de caracteres, pero el nombre exacto del método queda deformado en la transcripción y no se reconstruye aquí como sintaxis.

---

# 15. Lectura de texto y espacios

En el uso de `Scanner` que se muestra en clase, el profesor advierte de un problema al intentar leer textos que contienen espacios cuando se utiliza el método mostrado para una palabra.

La idea práctica del ejemplo es que una lectura como `next()` trabaja con un elemento separado y, para lecturas de texto más amplias, hay que utilizar otra estrategia.

Durante la explicación se menciona **BufferedReader** como otro mecanismo de lectura que se estudiará o utilizará en otros contextos.

No se desarrolla su sintaxis en esta sesión.

---

# 16. Un único `Scanner` puede reutilizarse

No es necesario crear un nuevo `Scanner` cada vez que se quiere pedir un dato.

El objeto creado una vez puede reutilizarse para realizar varias lecturas:

```text
crear lector
↓
leer nombre
↓
leer apellido
↓
leer segundo apellido
↓
leer edad
↓
leer altura
```

La idea que quiere fijar el profesor es:

> Se crea el objeto lector una vez y después se reutiliza tantas veces como sea necesario.

---

# 17. Pedir datos de uno en uno

El profesor recomienda que, al principio, se soliciten los datos al usuario de forma individual.

Por ejemplo:

```text
Introduce tu nombre:
[lectura]

Introduce tu primer apellido:
[lectura]

Introduce tu segundo apellido:
[lectura]

Introduce tu edad:
[lectura]
```

Esto tiene dos ventajas didácticas:

- el usuario sabe qué dato debe introducir en cada momento;
- el programador puede localizar con facilidad en qué lectura aparece un problema.

Después, todos los valores ya están almacenados en variables y se pueden utilizar para construir un mensaje final.

---

# 18. Una variable sigue existiendo después de usarla

Guardar un dato en una variable y utilizarlo una vez no destruye el valor.

Si se ha hecho una lectura y se ha almacenado en `nombre`, esa variable continúa disponible en las siguientes líneas de su ámbito.

Puede utilizarse varias veces:

```text
leer nombre
↓
guardarlo en variable
↓
imprimirlo
↓
volver a utilizarlo posteriormente
```

La clase insiste en diferenciar entre:

- **declarar una variable**;
- **reasignar un nuevo valor a una variable existente**.

---

# 19. No declarar dos veces la misma variable

No se debe volver a declarar una variable con el mismo nombre dentro del mismo ámbito.

Si ya existe una variable, para cambiar su valor se utiliza únicamente su nombre y una nueva asignación.

Idea trabajada:

```java
int numero = 10;
numero = 20;
```

La segunda línea no vuelve a escribir `int`, porque no se está creando otra variable: se está modificando el valor de la que ya existe.

Esto se repetirá más tarde al explicar operadores de asignación.

---

# 20. Formato y organización del código

El profesor dedica una parte de la sesión a insistir en que el código debe escribirse de forma ordenada.

Se señalan especialmente:

- tabulación;
- indentación;
- colocación correcta de las llaves;
- separación clara de bloques;
- nombres no duplicados;
- estructura visual coherente.

El motivo no es únicamente estético. A medida que aparezcan:

- más métodos;
- estructuras de control;
- bloques anidados;
- más variables;

un código mal organizado será mucho más difícil de entender y de depurar.

## 20.1. Formatear automáticamente en IntelliJ

Se muestra la opción de IntelliJ para **formatear/reformatear el código** desde el menú `Code`.

La grabación menciona también un atajo de teclado, pero no conserva con suficiente claridad la combinación exacta, por lo que no se reconstruye aquí.

La finalidad es que IntelliJ reorganice automáticamente la indentación y la presentación del código.

---

# 21. Estructura de llaves, clase y métodos

Se vuelve a repasar la estructura básica de un fichero Java.

Conceptualmente:

```java
public class NombreClase {

    public static void main(String[] args) {
        // instrucciones
    }
}
```

Las llaves siempre trabajan por parejas:

```text
{   abre bloque
}   cierra bloque
```

Hay que saber qué llave corresponde a cada bloque.

El profesor insiste en evitar añadir llaves sobrantes porque terminan modificando la estructura del programa.

## 21.1. Métodos dentro de la clase

Los métodos deben estar contenidos en la clase.

Conceptualmente:

```text
CLASE
├── método main
└── otro método
```

## 21.2. No crear un método dentro de otro método

La regla recalcada es que un método no se define dentro de otro método.

El `main` puede contener instrucciones y llamadas, pero no se crea otro método dentro de sus llaves.

## 21.3. Variables

Las variables que se estaban utilizando se estaban declarando principalmente dentro del método, aunque se recuerda que una clase también puede contener variables fuera de un método según la estructura que se estudie posteriormente.

## 21.4. Imports y `package`

La parte superior del fichero puede contener:

- declaración de `package` cuando corresponda;
- importaciones;
- después, la clase.

La idea es mantener claramente separadas estas partes de la estructura.

---

# 22. Guardado automático al ejecutar

Se comenta que al pulsar **Run/Play** en IntelliJ, el proyecto se guarda antes de ejecutar.

Por tanto, en el flujo mostrado en clase no es necesario realizar manualmente un guardado justo antes de cada ejecución.

---

# 23. Decimales escritos en código y decimales introducidos por teclado

El profesor hace una advertencia importante relacionada con los decimales.

Cuando se escribe directamente un literal decimal en el código Java, se utiliza el **punto**:

```java
double altura = 1.75;
```

Sin embargo, en el entorno utilizado durante la clase, al leer un `double` desde teclado con `Scanner`, el profesor muestra que la entrada utiliza **coma decimal**.

Ejemplo mostrado conceptualmente:

```text
1,75
```

Si se introduce el formato que no coincide con el esperado por la configuración de lectura del entorno, aparece:

```text
InputMismatchException
```

La idea que el profesor quiere que se recuerde en ese entorno es:

> Al escribir código, decimal con punto. Al introducir el decimal por teclado en la configuración utilizada en clase, decimal con coma.

También se insiste en que el tipo del dato leído debe coincidir con el tipo esperado.

---

# 24. `printf` después de leer datos

Una vez almacenados nombre, apellidos, edad, altura, etc., se pueden reutilizar para construir un mensaje final.

El profesor propone utilizar `printf` y sus marcadores para sustituir los datos almacenados.

Conceptualmente:

```text
Me llamo [nombre], mis apellidos son [apellido1] [apellido2], tengo [edad] años...
```

Los marcadores se sustituyen utilizando las variables que ya contienen los valores leídos.

También se recuerda de nuevo que `printf` no añade el salto de línea automáticamente y que puede añadirse mediante `\n` o `%n` dentro del formato.

La transcripción conserva la explicación de formatear un decimal con un número determinado de posiciones decimales, aunque algunos símbolos concretos de la bandera aparecen deformados por el reconocimiento de voz. La finalidad del ejemplo era mostrar la altura con una cantidad controlada de decimales.

---

# 25. Introducción a los operadores

Después de la lectura por teclado comienza el bloque de **operadores**.

La clase presenta cuatro grandes grupos:

1. **Operadores aritméticos.**
2. **Operadores de asignación.**
3. **Operadores de comparación.**
4. **Operadores lógicos.**

Además, antes de desarrollar estos operadores, el profesor introduce los **cambios de tipo**, utilizando los términos casteo/casting y parseo.

---

# 26. Cambio de tipos: casteo y parseo

La finalidad general de ambos conceptos, tal como se introduce en clase, es **cambiar un dato de un tipo a otro**.

El profesor diferencia dos situaciones didácticamente:

- cambios entre tipos compatibles o relacionados mediante **casting/casteo**;
- conversiones en las que hay que transformar una representación mediante **parseo**.

Se insiste en que son conceptos que se entenderán mejor con la práctica y que no es necesario dominarlos completamente el primer día.

---

# 27. Casting implícito y casting explícito

La clase distingue dos formas de casting.

## 27.1. Casting implícito

Es el cambio que puede realizarse automáticamente cuando Java puede asumir la conversión.

Ejemplo conceptual mostrado:

```java
double numero = 12;
```

Aunque `12` está escrito como entero, se puede almacenar en un `double` y se representará como valor decimal.

El profesor señala que escribir explícitamente una conversión innecesaria puede aparecer como **redundante** en IntelliJ, normalmente marcada visualmente en gris.

## 27.2. Casting explícito

En otros casos hay que indicar expresamente el tipo de destino.

Ejemplo trabajado conceptualmente:

```java
double decimal = 12.87;
int entero = (int) decimal;
```

La explicación recalca que al convertir ese número a entero se pierde la parte decimal.

Es decir, la conversión permite obtener el entero, pero determinada información queda fuera.

La sintaxis importante es poner el tipo deseado entre paréntesis delante del valor:

```text
(tipo) valor
```

---

# 28. Parseo a `String`: `String.valueOf`

Se trabaja un ejemplo en el que un número se convierte a texto.

La forma mostrada es:

```java
String.valueOf(...)
```

Ejemplo conceptual:

```java
int numero = 8;
String texto = String.valueOf(numero);
```

A partir de ese momento el valor almacenado en `texto` representa el carácter/texto `"8"`, no un número con el que se opere de la misma forma que con un `int`.

La clase lo relaciona con la concatenación: si se trata como texto y se une con otros valores, el comportamiento ya no es el de una suma numérica.

Se comenta que `String.valueOf(...)` puede recibir diferentes tipos de dato y devolver su representación como texto.

---

# 29. Parsear texto a entero: `Integer.parseInt`

Para la conversión contraria, desde una cadena que representa un número hacia un entero, se muestra:

```java
Integer.parseInt(...)
```

Ejemplo conceptual:

```java
String texto = "9";
int numero = Integer.parseInt(texto);
```

Una vez convertido correctamente, el dato ya se puede tratar como número en operaciones aritméticas.

---

# 30. El parseo puede fallar

El profesor insiste en que no cualquier texto puede transformarse en número.

Por ejemplo, intentar convertir:

```text
"ASD"
```

a un entero no tiene sentido numérico.

En el ejemplo se muestra un error:

```text
NumberFormatException
```

La idea práctica es:

> Al forzar un parseo, el contenido debe ser compatible con el tipo de destino.

Si el texto contiene una representación válida del número, la conversión puede funcionar. Si contiene una palabra que no representa ese número, se produce un error.

---

# 31. Ayudas visuales de parámetros en IntelliJ

Durante los ejemplos aparecen pequeños textos dentro del editor que parecen formar parte del código, por ejemplo nombres de parámetros que IntelliJ muestra visualmente.

El profesor advierte de que esas etiquetas pueden ser simplemente **ayudas del IDE** y no texto que el alumno haya escrito realmente.

Por tanto, no hay que copiar automáticamente todo lo que se ve visualmente en el editor.

Se menciona que el concepto de parámetros nominales o ayudas de parámetros se verá más adelante; en esta sesión basta con entender que algunos textos son ayudas de IntelliJ.

---

# 32. Conversión entre número y carácter

Se recupera la relación entre `char` y representaciones numéricas que ya se había mencionado al hablar de ASCII.

El profesor muestra un ejemplo en el que un valor numérico se utiliza para obtener un carácter asociado.

La idea que se quiere transmitir es que internamente existe una correspondencia numérica para los caracteres y que Java puede realizar determinadas conversiones entre estos valores.

La grabación no conserva con suficiente precisión toda la sintaxis exacta de los dos ejemplos, por lo que se mantiene el concepto sin reconstruir líneas que no aparecen completas.

---

# 33. División entre enteros y pérdida de decimales

Este es uno de los puntos más importantes de la sesión.

Si se realiza una división utilizando dos operandos enteros, la operación permanece en el ámbito entero.

Ejemplo conceptual:

```java
int operando1 = 5;
int operando2 = 2;
```

Una división realizada directamente entre estos valores no conserva la parte decimal de la forma que se esperaría en una división decimal.

El profesor explica dos posibilidades.

## 33.1. Declarar un operando como decimal

Una opción es que uno de los operandos tenga un tipo decimal.

## 33.2. Convertir temporalmente un operando

Si se quiere que las variables sigan siendo enteras para el resto del programa, puede hacerse un casting únicamente en la operación:

```java
(double) operando1
```

La idea es:

```text
La variable sigue siendo int.
Solo durante esa expresión se trata temporalmente como double.
```

Esto evita cambiar el tipo original de una variable que quizá se utiliza como entero en muchas otras partes del programa.

El profesor recalca que **el casting temporal afecta a esa expresión, no redefine permanentemente la variable original**.

---

# 34. Operadores aritméticos

Los operadores aritméticos permiten realizar operaciones matemáticas.

Se trabajan:

```text
+   suma
-   resta
*   multiplicación
/   división
%   módulo o resto de la división
```

El profesor recuerda que gran parte del trabajo de un ordenador termina expresándose mediante operaciones de este tipo.

---

# 35. Guardar o no guardar el resultado de una operación

No es obligatorio crear una variable para cada operación.

La decisión depende de si el resultado se va a necesitar posteriormente.

## Si se necesita después

Se guarda en una variable:

```text
resultado = operación
```

## Si solo se quiere mostrar

Puede calcularse directamente al imprimir.

La idea del profesor es:

> No crear variables innecesarias si el resultado solo se va a utilizar una vez, pero guardar el resultado cuando tenga que reutilizarse.

---

# 36. El operador `+`: suma y concatenación

El símbolo `+` puede aparecer en dos contextos diferentes.

## 36.1. Suma aritmética

Cuando trabaja con números:

```text
6 + 9
```

realiza una suma.

## 36.2. Concatenación

Cuando se utiliza para unir texto con otros valores:

```java
"El resultado es " + resultado
```

sirve para concatenar.

El profesor señala que hay que observar el contexto para saber qué está haciendo el símbolo `+`.

También se muestran ejemplos en los que Java realiza primero una operación numérica y después concatena el resultado con el texto, según la expresión escrita.

---

# 37. División entera

La división vuelve a utilizarse para reforzar el problema del tipo de datos.

Si ambos operandos son enteros, el resultado se obtiene en el ámbito entero y puede perderse la parte decimal.

Por eso, cuando sea necesario conservar decimales, se debe conseguir que la operación entre en el ámbito decimal, por ejemplo mediante un casting temporal de uno de los operandos.

Esta idea se considera especialmente importante porque puede provocar resultados que aparentemente parecen incorrectos aunque la instrucción esté escrita de forma válida.

---

# 38. Módulo `%`

El operador:

```text
%
```

se presenta como el **módulo** o **resto de una división**.

La idea es obtener lo que sobra después de realizar una división entera.

Conceptualmente:

```text
numero1 % numero2
```

El módulo será muy útil posteriormente para problemas en los que interesa conocer el resto de una división.

Uno de los ejercicios de la clase, la conversión de segundos, utiliza precisamente este concepto para separar horas, minutos y segundos restantes.

---

# 39. Operadores binarios

Los operadores aritméticos explicados se presentan como **operadores binarios** porque trabajan con dos operandos.

Conceptualmente:

```text
operando1 + operando2
operando1 - operando2
operando1 * operando2
operando1 / operando2
operando1 % operando2
```

La palabra binario, en este contexto, se utiliza porque la operación necesita dos operandos.

---

# 40. Operadores unarios: incremento y decremento

Frente a los anteriores, se introducen operadores que actúan sobre un solo operando.

Los dos trabajados son:

```java
operador++;
operador--;
```

## Incremento

```java
operador++;
```

incrementa el valor en uno.

Conceptualmente equivale a aumentar la variable en `1`.

## Decremento

```java
operador--;
```

disminuye el valor en uno.

La idea importante es que la variable **cambia de valor** a partir de esa línea.

Por eso, al seguir leyendo el programa, hay que tener en cuenta en qué momento se ha modificado cada variable.

---

# 41. El valor de una variable depende de la línea de ejecución

El profesor insiste en seguir el programa de arriba hacia abajo.

Si inicialmente:

```text
operador1 = 6
```

y más adelante se incrementa:

```text
operador1++
```

a partir de esa línea ya no vale `6`, sino el nuevo valor.

Esto afecta a todas las operaciones posteriores.

La idea que se quiere desarrollar es aprender a **trazar mentalmente la ejecución** del programa y saber qué valor tiene cada variable en cada punto.

---

# 42. Operadores de asignación

Los operadores de asignación permiten asignar un valor y, en algunos casos, realizar una operación y reasignar el resultado en una sola instrucción.

Se presentan:

```text
=    asigna
+=   suma y asigna
-=   resta y asigna
*=   multiplica y asigna
/=   divide y asigna
%=   calcula módulo y asigna
```

---

# 43. Operador `=`

El operador:

```text
=
```

sirve para asignar un valor.

Ejemplo conceptual:

```java
operador1 = 10;
```

No pregunta si dos elementos son iguales. Está modificando/asignando el valor de la variable.

El profesor insiste en no confundir:

```text
=
```

con:

```text
==
```

porque tienen funciones diferentes.

---

# 44. Reasignar sin volver a declarar

Si una variable ya existe, no se vuelve a escribir su tipo para cambiar su valor.

Ejemplo conceptual:

```java
int operador1 = 6;

// más adelante
operador1 = 10;
```

La segunda instrucción modifica la variable existente.

El profesor recalca que las líneas anteriores no cambian retroactivamente: antes de esa reasignación la variable tenía su valor antiguo y, a partir de la nueva línea, tiene el valor nuevo.

---

# 45. Operadores compuestos: `+=`, `-=`, `*=`, `/=`, `%=`

Estos operadores realizan dos acciones en una:

1. hacen una operación;
2. guardan el resultado nuevamente en la misma variable.

Ejemplo conceptual:

```java
operador1 += 10;
```

significa que al valor actual de `operador1` se le suma `10` y el resultado vuelve a almacenarse en `operador1`.

La misma lógica se aplica a:

```java
operador1 -= valor;
operador1 *= valor;
operador1 /= valor;
operador1 %= valor;
```

La clase lo presenta como un **dos en uno: operar y asignar**.

---

# 46. Relación entre `++` y `+= 1`

Se compara el incremento unario con la asignación compuesta.

Conceptualmente:

```java
operador1++;
```

y:

```java
operador1 += 1;
```

provocan el aumento del valor en una unidad.

Para incrementar exactamente en uno, el profesor señala que `++` es la forma habitual y directa.

La misma relación existe entre:

```java
operador2--;
```

y una reducción en uno mediante asignación compuesta.

---

# 47. Operadores de comparación

Los operadores de comparación tienen una diferencia fundamental respecto a las operaciones aritméticas.

Una operación aritmética suele producir un número.

Una comparación produce siempre un valor lógico:

```text
true
false
```

Por tanto, el resultado se puede almacenar en una variable:

```java
boolean comparacion;
```

La clase anticipa que estos valores booleanos se utilizarán en temas posteriores para tomar decisiones dentro de un programa.

---

# 48. Comparadores trabajados

Se presentan los siguientes operadores:

```text
>    mayor que
<    menor que
>=   mayor o igual que
<=   menor o igual que
==   igual a
!=   diferente de
```

## Ejemplo conceptual

Si:

```text
operador1 = 7
operador2 = 4
```

entonces expresiones como:

```text
operador1 > operador2
```

producen `true` o `false` según se cumpla la comparación.

---

# 49. Mayor o igual / menor o igual

Para las comparaciones:

```text
>=
<=
```

basta con que se cumpla una de las dos posibilidades incluidas en el operador.

Por ejemplo, en `<=`:

- puede ser menor;
- o puede ser igual.

El profesor recuerda también que el signo `=` se coloca después de `>` o `<` en estos operadores.

---

# 50. Igualdad `==` frente a asignación `=`

Este punto se recalca especialmente.

```text
=
```

**asigna** un valor.

```text
==
```

**pregunta/compara** si dos valores son iguales.

Por tanto:

```java
operador1 = 7;
```

es una asignación.

Mientras que conceptualmente:

```java
operador1 == operador2
```

es una pregunta que devuelve `true` o `false`.

El profesor advierte de que confundir ambos símbolos será un error frecuente al empezar.

---

# 51. Diferente `!=`

El operador:

```text
!=
```

comprueba si dos valores son diferentes.

Si lo son, el resultado de la comparación es `true`.

Si son iguales, el resultado es `false`.

---

# 52. Negación lógica `!`

Se muestra también la exclamación delante de un valor booleano.

Su función es invertirlo:

```text
true  -> false
false -> true
```

Conceptualmente:

```java
!comparacion
```

representa el valor lógico contrario al contenido de `comparacion`.

---

# 53. Operadores lógicos introducidos

Al presentar los grupos de operadores, el profesor menciona dos operadores lógicos que se utilizarán para combinar condiciones:

```text
&&
||
```

Se identifican oralmente como:

- doble ampersand;
- doble barra vertical o doble pipe.

La grabación conserva su introducción, pero **no registra una explicación práctica completa con ejemplos desarrollados de ambos durante esta sesión**. Por rigor, no se añade aquí una tabla de funcionamiento que no aparezca explicada en la fuente.

---

# 54. Resumen de los operadores vistos

## Aritméticos

```text
+   suma
-   resta
*   multiplicación
/   división
%   módulo/resto
```

## Unarios

```text
++  incrementa
--  decrementa
```

## Asignación

```text
=
+=
-=
*=
/=
%=
```

## Comparación

```text
>
<
>=
<=
==
!=
```

## Negación lógica

```text
!
```

## Lógicos introducidos

```text
&&
||
```

---

# 55. Ejercicios propuestos al final de la clase

La última parte de la grabación se dedica a leer una serie de ejercicios del material de la asignatura. La transcripción automática de algunos enunciados está deformada, así que se conserva únicamente lo que puede reconstruirse con seguridad.

## 55.1. Operaciones con dos números enteros

Se propone un programa que lea dos valores enteros y realice diferentes operaciones con ellos.

La explicación menciona trabajar con resultados como:

- operaciones aritméticas;
- división;
- resto/módulo;
- división en contexto real/decimal.

El objetivo es practicar conjuntamente:

- lectura con `Scanner`;
- operadores;
- tipos de datos;
- división entera y decimal;
- módulo.

El enunciado exacto de todas las operaciones no queda completo en la transcripción.

## 55.2. Compra en un bar

Se describe un ejercicio en el que un grupo de amigos entra en un bar.

Los precios indicados en la grabación son:

```text
Bebida: 1,25
Bocadillo: 2,05
```

El programa debe preguntar cuántas bebidas y cuántos bocadillos quieren y calcular sus costes.

La explicación menciona mostrar por separado el coste asociado a las bebidas y el coste asociado a los bocadillos.

Este ejercicio está orientado a practicar:

- entrada por teclado;
- multiplicación;
- variables;
- resultados decimales;
- salida por consola.

## 55.3. Conversión de segundos

Se propone introducir una cantidad total de segundos y convertirla en:

- horas;
- minutos;
- segundos restantes.

La explicación relaciona explícitamente este ejercicio con:

- la división;
- el resto/módulo.

El profesor recuerda las relaciones básicas de tiempo necesarias para resolverlo.

La grabación contiene ejemplos numéricos, pero algunos resultados quedan mezclados por la transcripción automática, por lo que no se reproducen como referencia exacta.

## 55.4. Cálculo de precio e IVA

Se propone introducir:

- el precio de una compra con IVA;
- el porcentaje de IVA aplicado.

El programa debe obtener información relacionada con:

- el valor de la compra sin IVA;
- la parte correspondiente al IVA.

La salida debe mostrarse redondeada a dos decimales según el enunciado leído en clase.

La transcripción contiene además referencias a límites de valores del ejercicio, pero no conserva de forma suficientemente limpia todas las cifras exactas.

## 55.5. Circunferencia y número PI

Se menciona un ejercicio que solicita el radio de una circunferencia y realiza un cálculo relacionado con su longitud.

El profesor utiliza el ejercicio para recordar que en programación existen valores y utilidades que ya están definidos y menciona el número **PI**.

También lo relaciona con la idea de una variable/valor constante que no se debe reasignar.

Los límites exactos del radio aparecen deformados en la transcripción y no se reconstruyen.

## 55.6. Conversión de temperaturas

Se propone un programa que realice conversiones entre:

- grados Celsius/centígrados;
- grados Fahrenheit;
- Kelvin.

Según la explicación, el usuario introduce una temperatura en una de las escalas y el programa calcula las equivalencias en las otras.

Los resultados deben mostrarse con dos decimales.

Las fórmulas aparecen verbalizadas de forma parcial en la grabación y no se reconstruyen aquí porque algunos términos y números no quedaron registrados de manera fiable.

## 55.7. Descomposición de un número de cinco cifras

Se menciona también un ejercicio con un número de cinco dígitos.

La finalidad es trabajar con sus distintas posiciones, como:

- decenas de millar;
- millares;
- centenas;
- decenas;
- unidades.

La clase plantea trabajar la composición/descomposición del número utilizando operaciones numéricas.

La numeración exacta del ejercicio y alguna parte concreta del enunciado no quedan conservadas con suficiente claridad.

---

# 56. Organización recomendada para realizar los ejercicios

El profesor permite distintas formas de organizar las prácticas de clase.

Puede utilizarse:

- un proyecto nuevo;
- una clase distinta para cada ejercicio;
- distintos métodos, siempre respetando correctamente su estructura.

La recomendación didáctica del profesor es evitar terminar con un fichero enorme lleno de comentarios y código mezclado, porque después resulta difícil saber qué parte corresponde a cada ejercicio.

Se insiste en mantener:

- clases separadas cuando sea útil;
- código limpio;
- métodos correctamente delimitados;
- nombres claros;
- llaves emparejadas.

---

# 57. Acceso a los ejercicios y al temario

Al final de la clase se recuerda que los ejercicios y contenidos están disponibles a través del material de la asignatura.

La ruta mencionada es, de forma general:

```text
Classroom de Programación
        ↓
Contenido de la asignatura
        ↓
Enlace a Notion
        ↓
Temario
        ↓
Tema correspondiente
```

La grabación termina mientras el profesor explica cómo acceder al contenido del Tema 2.

---

# 58. Mapa mental de la clase

```text
PROGRAMACIÓN — DÍA 3
|
+-- Documentación
|   +-- comentarios de documentación
|   +-- generación de documentación
|   +-- utilidad en mantenimiento
|   +-- Swagger (mención introductoria)
|
+-- Entrada de datos
|   +-- flujo de entrada
|   +-- Scanner
|   +-- import java.util.Scanner
|   +-- new Scanner(System.in)
|   +-- next...
|   +-- guardar retorno en variables
|   +-- esperar Enter
|   +-- reutilizar lector
|
+-- Estructura Java
|   +-- package
|   +-- imports
|   +-- class
|   +-- métodos
|   +-- variables
|   +-- llaves por parejas
|   +-- no métodos dentro de métodos
|
+-- Código limpio
|   +-- indentación
|   +-- formateo de IntelliJ
|   +-- nombres no duplicados
|
+-- Cambios de tipo
|   +-- casting
|   |   +-- implícito
|   |   +-- explícito
|   +-- parseo
|       +-- String.valueOf(...)
|       +-- Integer.parseInt(...)
|       +-- NumberFormatException
|
+-- Operadores
|   +-- aritméticos
|   |   +-- + - * / %
|   +-- binarios
|   +-- unarios
|   |   +-- ++ --
|   +-- asignación
|   |   +-- = += -= *= /= %=
|   +-- comparación
|   |   +-- > < >= <= == !=
|   +-- negación
|   |   +-- !
|   +-- lógicos introducidos
|       +-- && ||
|
+-- Ejercicios
    +-- operaciones con enteros
    +-- bar: bebidas y bocadillos
    +-- segundos -> horas/minutos/segundos
    +-- cálculo de IVA
    +-- circunferencia / PI
    +-- conversiones de temperatura
    +-- número de cinco cifras
```

---

# 59. Lo que deberías ser capaz de explicar después de esta clase

## Documentación

- Para qué sirven los comentarios en un proyecto que se mantiene durante meses o años.
- Qué idea tienen los comentarios de documentación.
- Que puede generarse documentación a partir del código.
- Por qué la documentación ayuda cuando se hereda código escrito por otra persona.
- Qué herramienta se menciona como ejemplo profesional: Swagger.

## Métodos

- Cómo reconocer visualmente una llamada a método mediante los paréntesis.
- Que `System.out.println(...)` implica una llamada a un método.
- Que un método puede devolver un valor y ese valor puede guardarse en una variable.

## `Scanner`

- Para qué se utiliza `Scanner` en esta clase.
- De qué paquete se importa.
- Por qué es necesario importarlo.
- Cómo se crea conceptualmente un lector mediante `new` y `System.in`.
- Qué significa que el programa esté esperando una entrada.
- Que el valor leído debe ser compatible con el tipo esperado.
- Que un mismo objeto `Scanner` puede reutilizarse.

## Variables

- Diferencia inicial entre inicializar una variable simple y construir una variable compleja.
- Qué significa inicializar.
- Qué significa reasignar.
- Por qué no se vuelve a escribir el tipo cuando simplemente se cambia el valor.
- Que una variable continúa disponible después de utilizar su valor, mientras siga dentro de su ámbito.

## Estructura del código

- Que las llaves funcionan por parejas.
- Que los métodos están dentro de la clase.
- Que no se define un método dentro de otro método.
- Dónde aparecen `package`, imports y clase.
- Por qué es importante mantener el código indentado y formateado.

## Cambios de tipo

- Idea de casting implícito.
- Idea de casting explícito.
- Uso conceptual de `(tipo)` para un cast explícito.
- Que convertir un decimal a entero puede perder la parte decimal.
- Uso de `String.valueOf(...)` para obtener una representación textual.
- Uso de `Integer.parseInt(...)` para intentar transformar texto numérico en entero.
- Por qué un parseo de una palabra como `"ASD"` a entero produce un error.
- Qué excepción se muestra en ese ejemplo: `NumberFormatException`.

## Operaciones

- Qué ocurre al dividir dos enteros.
- Cómo utilizar un casting temporal para que una operación entre en el ámbito decimal sin cambiar permanentemente la variable.
- Diferencia entre `+` como suma y como concatenación.
- Qué es el módulo `%`.
- Diferencia entre operadores binarios y unarios según la explicación de clase.

## Asignación

- Función de `=`.
- Función de `+=`, `-=`, `*=`, `/=`, `%=`.
- Relación entre `++` y sumar/asignar una unidad.
- Cómo va cambiando el valor de una variable según avanza la ejecución.

## Comparación

- Que una comparación devuelve un `boolean`.
- Significado de `>`, `<`, `>=`, `<=`, `==`, `!=`.
- Diferencia fundamental entre `=` y `==`.
- Qué hace `!` sobre un booleano.
- Reconocer `&&` y `||` como operadores lógicos introducidos en la sesión, aunque su funcionamiento detallado no queda desarrollado en la grabación.

---

# 60. Sintaxis que conviene saber reconocer o escribir

```java
import java.util.Scanner;
```

```java
Scanner lector = new Scanner(System.in);
```

```java
String nombre = lector.next();
```

```java
int numero = lector.nextInt();
```

```java
double numero = lector.nextDouble();
```

```java
boolean valor = lector.nextBoolean();
```

```java
float numero = lector.nextFloat();
```

```java
int entero = (int) decimal;
```

```java
double resultado = (double) operando1 / operando2;
```

```java
String texto = String.valueOf(numero);
```

```java
int numero = Integer.parseInt(texto);
```

```java
operador++;
operador--;
```

```java
operador += valor;
operador -= valor;
operador *= valor;
operador /= valor;
operador %= valor;
```

```java
boolean comparacion = operador1 > operador2;
```

```java
operador1 == operador2
operador1 != operador2
operador1 >= operador2
operador1 <= operador2
```

```java
!comparacion
```

```text
&&
||
```

---

# 61. Errores y advertencias importantes mencionados en clase

## `Scanner` no reconocido

Si se utiliza `Scanner` sin que la clase esté accesible/importada, IntelliJ/Java mostrará un error relacionado con que no encuentra el símbolo/clase.

Solución explicada: importar la clase correspondiente.

## Tipo de entrada incorrecto

Si el programa intenta leer un tipo y el usuario proporciona un dato incompatible, puede aparecer:

```text
InputMismatchException
```

## Parseo imposible

Intentar convertir una cadena no numérica a entero puede producir:

```text
NumberFormatException
```

## División de enteros

No es necesariamente un error de compilación, pero puede provocar pérdida de la parte decimal y dar un resultado distinto del esperado.

## Confundir `=` y `==`

Es un error conceptual que el profesor destaca como muy frecuente:

```text
=   asignación
==  comparación de igualdad
```

## Declarar dos veces la misma variable

Si la variable ya existe, se reasigna. No se vuelve a declarar con el mismo nombre en el mismo ámbito.

## Llaves sobrantes o mal colocadas

Una llave de más puede cambiar completamente la estructura de clases y métodos y provocar múltiples errores posteriores.

## Mala indentación

Aunque determinadas posiciones visuales puedan no impedir por sí solas la compilación, dificultan mucho la lectura y aumentan la probabilidad de cometer errores de estructura.

---

# 62. Puntos que la grabación no conserva completamente

Para no introducir contenido externo, quedan señalados los huecos reales de la transcripción:

1. **La sintaxis exacta del comentario de documentación** aparece deformada en la grabación. Se conserva su finalidad, pero no se reconstruye una plantilla completa que no quedó registrada con claridad.
2. **La herramienta exacta y algunos pasos de generación de la página de documentación** se oyen de forma incompleta. Se conserva que se genera documentación web y que se configura una ruta de salida.
3. **Algunos nombres de métodos de `Scanner`** están deformados por el reconocimiento de voz. Se mantienen únicamente los que aparecen de forma suficientemente identificable (`next`, `nextInt`, `nextDouble`, `nextBoolean`, `nextFloat`).
4. **La lectura de caracteres con Scanner** se menciona oralmente, pero el nombre exacto pronunciado no es fiable; no se reconstruye como método Java.
5. **La bandera exacta usada para limitar los decimales en un `printf`** aparece parcialmente deformada, aunque la explicación deja claro que se estaba controlando el número de decimales mostrados.
6. **El atajo exacto para reformatear código en IntelliJ** no queda conservado de forma fiable.
7. **Los ejemplos completos de conversión número ↔ carácter** están parcialmente perdidos.
8. **Los operadores lógicos `&&` y `||` se presentan, pero la grabación no conserva un desarrollo práctico completo de su funcionamiento.**
9. **Los enunciados y la numeración exacta de varios ejercicios finales** quedan parcialmente mezclados por la transcripción. Solo se han reconstruido las partes inequívocas.
10. **Las fórmulas exactas del ejercicio de temperaturas** se escuchan de forma incompleta y no se han rellenado con fórmulas externas.
11. **Algunos límites numéricos de los ejercicios de IVA y circunferencia** no quedan registrados con claridad y no se han inventado.

---

# 63. Secuencia recomendada para repasar este día

1. **Repasar la estructura Java:** clase, métodos, llaves, imports y `package`.
2. **Entender `Scanner`:** importación, creación con `new`, `System.in` y reutilización del lector.
3. **Practicar lecturas:** texto, enteros y decimales, guardando cada resultado en su variable.
4. **Entender qué significa esperar una entrada:** el programa continúa cuando recibe el dato y se pulsa `Enter`.
5. **Repasar reasignación:** declarar una vez y cambiar el valor después sin repetir el tipo.
6. **Repasar cambios de tipo:** casting implícito, explícito y parseo.
7. **Practicar `String.valueOf` e `Integer.parseInt`.**
8. **Comprender la división de enteros y el casting temporal a `double`.**
9. **Practicar operadores aritméticos:** `+`, `-`, `*`, `/`, `%`.
10. **Practicar operadores unarios:** `++`, `--`.
11. **Practicar asignaciones compuestas:** `+=`, `-=`, `*=`, `/=`, `%=`.
12. **Practicar comparaciones:** `>`, `<`, `>=`, `<=`, `==`, `!=`.
13. **Practicar la negación `!`.**
14. **Reconocer `&&` y `||` como operadores lógicos que se desarrollarán posteriormente.**
15. **Resolver los ejercicios propuestos utilizando entrada por teclado y operadores.**

---

## Fin de los apuntes — Programación, día 3

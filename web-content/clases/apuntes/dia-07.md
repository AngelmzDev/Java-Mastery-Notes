# Apuntes completos — Día 7

> **Procedencia:** apuntes reconstruidos a partir de las clases, aportados al proyecto. Se conservan las advertencias de fidelidad y las ampliaciones que ya estaban etiquetadas. Se han anonimizado identificadores personales cuando procede.

[Volver a la ficha de estudio](../dia-07.md)

## Corrección de ejercicios con `for`, cambios de base, introducción a `while` y `do while`, y ejercicios de repetición

> **Fuente docente:** transcripción de la clase 7. **Material de referencia:** listado de ejercicios entregado junto a la transcripción, usado para localizar los enunciados y nombres de los ejercicios a los que se refiere el profesor. El contenido explicativo procede de la clase; los enunciados identificados se señalan como tales. No se incorpora teoría del libro ni contenido externo. Cuando la transcripción no permite asegurar una línea de código, se expresa como reconstrucción conceptual y no como transcripción literal.

---

# 1. Organización de la sesión

La clase combina corrección de ejercicios anteriores, explicación de un problema de conversión de bases y presentación de dos nuevas estructuras de repetición.

Se trabaja, por este orden general:

1. Repaso de los `for` anidados usados para tablas de multiplicar.
2. Corrección del **ejercicio 7 de `for`: `Dado`**.
3. Corrección del **ejercicio 6 de `for`: `ParesEntreDosDados`**.
4. Corrección del **ejercicio 8 de `for`: `NumerosTipos`** y referencia al ejercicio de notas.
5. Desarrollo del **ejercicio Bases**, comenzando por las conversiones de bases 2, 8 y 16 a decimal.
6. Introducción y comparación de **`while`** y **`do while`**.
7. Presentación de los ejercicios de la nueva serie `while` / `do while`.
8. Corrección del **ejercicio 3: `MayorNumero`**.
9. Corrección del **ejercicio 5: `Adivina`** y desarrollo del **ejercicio 6: `AdivinaRecord`**.
10. Indicación de las prácticas que deben terminarse y de los temas que vendrán después.

El profesor reitera una idea transversal: primero debe comprenderse **qué proceso se repite, qué dato cambia y cuándo se detiene**. La elección de una estructura u otra depende de esas necesidades, no de utilizar una instrucción determinada por obligación.

---

# 2. Repaso: `for` anidados y tablas de multiplicar

Se retoma la corrección de las tablas de multiplicar comprendidas entre dos valores. El profesor distingue **dos responsabilidades distintas**:

- El **`for` exterior**, cuya variable suele ser `i`, determina **qué tabla** se está calculando: la del 4, la del 5, la del 6, etc.
- El **`for` interior**, cuya variable suele ser `j`, realiza **las operaciones dentro de cada tabla**, por ejemplo multiplicando desde 0 hasta 10.

La estructura explicada puede reconstruirse así:

```java
for (int i = menor; i <= mayor; i++) {
    System.out.println("Tabla del " + i);

    for (int j = 0; j <= 10; j++) {
        System.out.println("\t" + i + " x " + j + " = " + (i * j));
    }
}
```

**Ejemplo de clase:** si los límites son 4 y 9, el exterior va seleccionando sucesivamente las tablas de ese rango; para cada una, el interior calcula sus multiplicaciones.

## 2.1. Dónde colocar los mensajes

El mensaje `Tabla del ...` debe quedar **dentro del `for` exterior, pero fuera del interior**. De ese modo se imprime una vez por tabla.

Si se coloca dentro del `for` interior, aparecerá una vez por cada multiplicación y se repetirá innecesariamente.

La impresión de cada multiplicación sí debe estar dentro del `for` interior. Se menciona el tabulador `\t` para mejorar la presentación visual en consola.

## 2.2. Idea que debe quedar clara

Una instrucción se coloca en el bloque cuya frecuencia de ejecución corresponde a lo que se pretende:

- Una vez por **tabla** → en el exterior.
- Una vez por **operación** → en el interior.
- Una vez al **terminar todas las tablas** → después de ambos bucles.

---

# 3. Corrección del ejercicio `for` 7: `Dado`

## 3.1. Enunciado identificado

**Ejercicio 7 — `Dado`:** simular lanzamientos de un dado; pedir cuántas veces se lanzará y, si el número de lanzamientos no es positivo, utilizar 100. Mostrar finalmente cuántas veces ha aparecido cada cara, del 1 al 6.

## 3.2. Leer las veces que se lanzará

Como el usuario debe introducir un dato, el profesor utiliza `Scanner`:

```java
Scanner lector = new Scanner(System.in);
System.out.println("Indica cuántas veces vas a lanzar el dado");
int veces = lector.nextInt();
```

Si el dato no es positivo, se sustituye por 100:

```java
if (veces <= 0) {
    veces = 100;
}
```

También muestra la alternativa de utilizar un **operador ternario** para asignar el valor:

```java
veces = veces <= 0 ? 100 : veces;
```

En esta corrección primero utiliza el `if` por resultar más fácil de seguir. Señala que ambas formas son posibles.

## 3.3. Repetir tantos lanzamientos como se hayan solicitado

Si el usuario solicita 40 lanzamientos, hay que repetir la generación **40 veces**. La cantidad introducida controla el límite del `for`:

```java
for (int i = 0; i < veces; i++) {
    // Generar un resultado del dado
}
```

Al comenzar en 0 y utilizar `i < veces`, se realizan exactamente las iteraciones solicitadas.

## 3.4. Generar una cara del dado: `Math.random()`

La generación se explica mediante `Math.random()`, multiplicación, conversión a entero y desplazamiento del intervalo:

```java
int dado = (int) (Math.random() * 6) + 1;
```

La intención es obtener un valor entero **entre 1 y 6**.

Primero el profesor muestra cómo se podrían imprimir los resultados individuales, pero puntualiza que **no es eso lo que pide el ejercicio**. El enunciado solicita un **resumen por caras**.

## 3.5. Contadores para cada cara

Para conocer las apariciones de cada número se necesitan seis contadores:

```java
int numero1 = 0;
int numero2 = 0;
int numero3 = 0;
int numero4 = 0;
int numero5 = 0;
int numero6 = 0;
```

Se comenta que pueden declararse varias variables del mismo tipo en una misma instrucción. Todas deben empezar en **0**: antes del primer lanzamiento ninguna cara ha aparecido.

Estos contadores deben estar **fuera del `for`**, para que sus valores no se reinicien en cada vuelta y puedan leerse al terminar los lanzamientos.

## 3.6. Incrementar únicamente el contador correspondiente

En cada tirada se obtiene un número, y solo se incrementa el contador de esa cara.

**Posibilidad explicada: `if` encadenados.**

```java
if (dado == 1) {
    numero1++;
} else if (dado == 2) {
    numero2++;
} else if (dado == 3) {
    numero3++;
} else if (dado == 4) {
    numero4++;
} else if (dado == 5) {
    numero5++;
} else {
    numero6++;
}
```

**Otra posibilidad explicada: `switch`.**

```java
switch (dado) {
    case 1 -> numero1++;
    case 2 -> numero2++;
    case 3 -> numero3++;
    case 4 -> numero4++;
    case 5 -> numero5++;
    case 6 -> numero6++;
}
```

El profesor admite soluciones equivalentes con `if`, `switch` o asignaciones condicionales. Destaca que el `switch` permite ir al caso que corresponda, mientras que con varias condiciones independientes se realizan más preguntas de las necesarias.

La clase también menciona la posibilidad de actualizar contadores mediante **expresiones ternarias**. No establece que exista una única forma obligatoria de resolver este ejercicio.

## 3.7. Mostrar los resultados fuera del `for`

Al terminar todos los lanzamientos, se imprime el resumen:

```java
System.out.println("Veces que ha salido el 1: " + numero1);
System.out.println("Veces que ha salido el 2: " + numero2);
System.out.println("Veces que ha salido el 3: " + numero3);
System.out.println("Veces que ha salido el 4: " + numero4);
System.out.println("Veces que ha salido el 5: " + numero5);
System.out.println("Veces que ha salido el 6: " + numero6);
```

**No debe colocarse este resumen dentro del `for`**, porque entonces aparecería después de cada lanzamiento, en lugar de una sola vez al final.

### Esquema completo de la lógica

```text
Leer número de lanzamientos
    ↓
Si es <= 0, asignar 100
    ↓
Inicializar a 0 los seis contadores
    ↓
Repetir tantas veces como corresponda
    ├─ Generar cara entre 1 y 6
    └─ Incrementar el contador de esa cara
    ↓
Mostrar los seis contadores
```

---

# 4. Corrección del ejercicio `for` 6: `ParesEntreDosDados`

## 4.1. Enunciado identificado

**Ejercicio 6 — `ParesEntreDosDados`:** mostrar todos los números pares comprendidos entre dos enteros introducidos. Aunque el nombre facilitado contiene «Dados», el desarrollo de la corrección trata de **dos números que delimitan un rango**, no de simular un dado.

## 4.2. Ordenar los límites

Primero se leen ambos extremos. El problema es que el usuario puede escribirlos en cualquier orden: por ejemplo 5 y 9, o 9 y 5.

Por ello se determinan las variables `minimo` y `maximo` con una condición:

```java
int minimo;
int maximo;

if (numero1 > numero2) {
    maximo = numero1;
    minimo = numero2;
} else {
    maximo = numero2;
    minimo = numero1;
}
```

Durante la corrección se menciona que un alumno había investigado `Math.min` y `Math.max`. El profesor **no autoriza utilizarlos para resolver este ejercicio en el examen**, porque considera que precisamente se pretende construir la comparación y no llamar a una funcionalidad que ya realiza esa parte del algoritmo.

Lo importante, según este criterio de la asignatura, es saber **decidir cuál es el menor y cuál el mayor** mediante las estructuras vistas.

## 4.3. Recorrer el intervalo

Cuando ya se conocen los límites:

```java
for (int i = minimo; i <= maximo; i++) {
    if (i % 2 == 0) {
        System.out.println(i);
    }
}
```

En cada iteración se comprueba si el valor actual es par mediante su resto al dividir entre 2.

**Ejemplo comentado:** los pares entre 5 y 9 son **6 y 8**.

La idea es separar dos responsabilidades: decidir el rango antes del bucle y comprobar la paridad dentro de él.

---

# 5. Corrección del ejercicio `for` 8: `NumerosTipos`

## 5.1. Enunciado identificado

**Ejercicio 8 — `NumerosTipos`:** solicitar diez números por teclado e informar de:

- la media de los números positivos;
- la media de los números negativos;
- la cantidad de ceros introducidos.

El profesor desarrolla el ejemplo para explicar **acumuladores, contadores, medias, inicialización de variables y ámbito**.

## 5.2. Decidir qué datos necesita la aplicación

Para calcular una media no basta con conocer la suma: también hay que saber **cuántos valores participaron**.

De ahí que hagan falta, como mínimo, estas cantidades:

| Dato | Para qué sirve |
|---|---|
| Suma de positivos | Acumular los valores positivos |
| Cantidad de positivos | Dividir la suma entre el número de valores positivos |
| Suma de negativos | Acumular los valores negativos |
| Cantidad de negativos | Dividir la suma entre el número de valores negativos |
| Cantidad de ceros | Contar los valores que son exactamente cero |

Se explica que al principio pueden faltar variables cuando se diseña el programa, y que es correcto incorporarlas en cuanto se descubre que se necesitan.

## 5.3. Inicializar acumuladores y contadores

Todas estas variables numéricas locales empiezan en 0. Un esquema fiel al razonamiento es:

```java
int sumaPositivos = 0;
int sumaNegativos = 0;
int cantidadPositivos = 0;
int cantidadNegativos = 0;
int cantidadCeros = 0;
```

El profesor insiste en que **no se puede incrementar ni acumular sobre una variable local que no tenga un valor previo asignado**.

## 5.4. Solicitar los diez números

Se emplea un `for` de diez vueltas:

```java
for (int i = 0; i < 10; i++) {
    System.out.println("Introduce un número:");
    int numero = lector.nextInt();

    if (numero < 0) {
        sumaNegativos += numero;
        cantidadNegativos++;
    } else if (numero > 0) {
        sumaPositivos += numero;
        cantidadPositivos++;
    } else {
        cantidadCeros++;
    }
}
```

La clasificación se hace durante las lecturas, no después: cada nuevo número actualiza el acumulador o contador correspondiente.

**Diferencia conceptual:**

- **Acumulador:** guarda una suma progresiva (`sumaPositivos += numero`).
- **Contador:** aumenta de uno en uno (`cantidadPositivos++`).

El profesor señala que en el `else` restante no necesita volver a preguntar si el número es 0: tras descartar «menor que cero» y «mayor que cero», ese caso ya está determinado.

## 5.5. Calcular las medias después del bucle

Una vez leídos los diez datos:

```java
double mediaPositivos = (double) sumaPositivos / cantidadPositivos;
double mediaNegativos = (double) sumaNegativos / cantidadNegativos;
```

La conversión temporal a `double` aparece para evitar la pérdida de la parte decimal cuando se dividen enteros.

**Advertencia sobre la transcripción:** el profesor recibe preguntas acerca del caso en que no se introduzcan positivos o no se introduzcan negativos. Se menciona que puede contemplarse una condición adicional para esos casos, pero **no queda documentada una resolución final completa de esa validación** en el ejemplo oral. Por tanto, las dos expresiones anteriores representan el cálculo cuando existe al menos un número de cada clase; no constituyen una solución completa de todos los casos posibles.

El recuento de ceros se imprime directamente desde su contador. El profesor permite guardar las medias en variables o calcularlas cuando se van a mostrar, dependiendo de si interesa reutilizar el resultado.

## 5.6. Declarar una variable dentro o fuera del `for`

Se debate dónde declarar la variable que recibe cada nuevo número:

```java
for (int i = 0; i < 10; i++) {
    int numero = lector.nextInt();
    // ...
}
```

frente a declararla fuera para reasignarla dentro. El mensaje central es el **ámbito**:

- Si solo se utiliza en el cuerpo del bucle, puede declararse dentro.
- Si se necesita una vez acabado el bucle, deberá declararse en un ámbito exterior.
- Los acumuladores y contadores que se consultan después deben seguir siendo accesibles.

El profesor utiliza una explicación introductoria sobre memoria y «garbage collector» para ilustrar la conveniencia de limitar el ámbito de las variables. Los apuntes conservan esa **explicación didáctica de la clase** sin reconstruir reglas técnicas de gestión de memoria que no se desarrollan allí.

## 5.7. Ejercicio 10 de `for`: `NotasTipos`

El profesor lo menciona como **muy similar a `NumerosTipos`**: hay que solicitar seis notas y contar aprobados, condicionados (nota igual a 4) y suspensos. No realiza en esta parte una corrección detallada independiente.

---

# 6. Ejercicio Bases: convertir números a decimal

El profesor retoma el **ejercicio adicional «Bases»**, cuya primera parte solicita convertir números introducidos en **binario, octal y hexadecimal a decimal**. La segunda parte —partir de un decimal para mostrarlo en bases 2, 8 y 16— queda pendiente de desarrollo posterior.

## 6.1. Fundamento de la conversión

Para obtener el valor decimal se suma la contribución de cada cifra:

```text
cifra × base elevada a su posición
```

Las potencias comienzan en **0 para la cifra situada más a la derecha** y van aumentando hacia la izquierda.

El profesor repasa ejemplos conceptuales de números en base 2, 8 y 16: cada cifra se multiplica por una potencia de la base correspondiente, y finalmente se suman todas las aportaciones.

Se refiere a este procedimiento como **teorema fundamental de la numeración**.

## 6.2. Problema inicial: cómo separar las cifras de un entero

Al principio se propone leer un binario como `int`. Para sacar sus cifras individualmente se podría recurrir a divisiones y módulos por 10, operación que el profesor considera innecesariamente laboriosa para números con muchos dígitos.

Propone convertirlo en un `String` o leerlo directamente como cadena cuando convenga trabajar por posiciones:

```java
String binarioTexto = String.valueOf(numeroBinario);
```

Con el `String` se pueden utilizar los métodos:

- `length()` para conocer cuántos caracteres contiene;
- `charAt(posicion)` para recuperar un carácter concreto.

**Importante:** el profesor pasa de una lectura inicial de entero a la idea de leer como `String` por comodidad. No se deben confundir ambas alternativas como si fueran pasos siempre obligatorios.

## 6.3. Posiciones y sentido de las potencias

Si la cadena tiene longitud 6, sus índices van del **0 al 5**. Al recorrerla de izquierda a derecha:

| Índice `i` | Exponente que corresponde |
|---:|---:|
| 0 | 5 |
| 1 | 4 |
| 2 | 3 |
| 3 | 2 |
| 4 | 1 |
| 5 | 0 |

El profesor obtiene una expresión **válida para cualquier longitud**:

```java
binarioTexto.length() - 1 - i
```

Razonamiento:

- `length() - 1` da la última posición posible.
- Al restar `i`, el exponente disminuye conforme avanza el recorrido.
- No hay que escribir manualmente `5`, `4`, `3`, etc., porque la cantidad de dígitos puede cambiar.

## 6.4. Recorrer todos los caracteres

```java
for (int i = 0; i < binarioTexto.length(); i++) {
    char letra = binarioTexto.charAt(i);
    // Obtener el valor numérico de este carácter
}
```

**Error señalado:** usar `i <= binarioTexto.length()` intentaría consultar una posición inexistente al llegar a la longitud completa. El profesor menciona la excepción por acceso a índice fuera del rango.

## 6.5. Convertir `char` a un valor numérico

La llamada `charAt()` devuelve un **`char`**, no un `int` que contenga necesariamente la cifra tal como se espera para el cálculo.

Al tratar directamente el carácter `'1'` como número se observa un valor numérico asociado al carácter (el ejemplo de clase obtiene **49**), no la cifra 1 que se necesita.

El profesor construye una conversión intermedia:

```java
char letra = binarioTexto.charAt(i);
String textoCifra = String.valueOf(letra);
int cifra = Integer.parseInt(textoCifra);
```

Primero convierte el carácter a texto y después el texto que representa una cifra al número correspondiente. Se insiste en **no confundir el código numérico del carácter con el valor de la cifra**.

## 6.6. Potencias con `Math.pow()`

Cada cifra se multiplica por la base elevada al exponente que le corresponde:

```java
int contribucion = (int) (cifra * Math.pow(2, binarioTexto.length() - 1 - i));
```

En clase se recuerda que `Math.pow()` devuelve un `double`, motivo por el que aparece una conversión a `int` cuando se quiere conservar la operación en una variable entera.

Esta expresión es una **reconstrucción de la operación desarrollada oralmente**, no una copia literal de las líneas que aparecían en la pantalla.

## 6.7. Sumar las contribuciones

Se necesita un acumulador inicialmente a cero, declarado **antes del `for`**:

```java
int numeroDecimal = 0;

for (int i = 0; i < binarioTexto.length(); i++) {
    char letra = binarioTexto.charAt(i);
    int cifra = Integer.parseInt(String.valueOf(letra));

    int contribucion = (int) (cifra * Math.pow(2, binarioTexto.length() - 1 - i));
    numeroDecimal += contribucion;
}

System.out.println("El número pasado a decimal es " + numeroDecimal);
```

Se calcula una aportación por cifra y se añade al acumulador. El resultado definitivo se muestra **después del bucle**.

El profesor pregunta qué ocurriría si `numeroDecimal` se declarase dentro del `for`: no sería accesible desde la impresión posterior. Así refuerza nuevamente el concepto de **ámbito**.

## 6.8. Del binario al octal

La lógica general es la misma. Para una entrada en base 8 se cambia la base utilizada en las potencias:

```java
Math.pow(8, longitud - 1 - i)
```

Se presenta como una adaptación directa de la primera conversión. No se desarrolla en la transcripción otra corrección extensa e independiente para el octal.

## 6.9. Hexadecimal: diferencia esencial

El hexadecimal permite cifras numéricas y letras. Por eso el profesor indica que **conviene leer directamente la entrada como `String`**:

```java
String hexadecimal = lector.nextLine();
```

Cada posición se recupera con `charAt(i)`. Después se convierte el carácter a su valor numérico:

| Carácter hexadecimal | Valor |
|---|---:|
| `A` | 10 |
| `B` | 11 |
| `C` | 12 |
| `D` | 13 |
| `E` | 14 |
| `F` | 15 |
| `0` a `9` | Su valor numérico |

El profesor plantea un `switch` sobre la letra obtenida. Para las letras de `A` a `F` asigna el valor correspondiente. En el `default` convierte la cifra mediante `String.valueOf(...)` e `Integer.parseInt(...)`.

```java
int cifra;

switch (letra) {
    case 'A' -> cifra = 10;
    case 'B' -> cifra = 11;
    case 'C' -> cifra = 12;
    case 'D' -> cifra = 13;
    case 'E' -> cifra = 14;
    case 'F' -> cifra = 15;
    default -> cifra = Integer.parseInt(String.valueOf(letra));
}
```

La variable `cifra` se utiliza **después del `switch`**, así que debe estar declarada en un ámbito accesible para todos los casos y para la operación posterior.

## 6.10. Acumulación de una entrada hexadecimal

Una vez conocida la cifra se realiza exactamente el mismo tipo de cálculo, ahora en base 16:

```java
numeroDecimal += (int) (cifra * Math.pow(16, hexadecimal.length() - 1 - i));
```

El profesor explica este proceso en la pizarra mediante un diagrama de flujo:

```text
Pedir número hexadecimal
    ↓
Recorrer posiciones desde 0 hasta longitud - 1
    ↓
Extraer carácter de la posición i
    ↓
¿Es A, B, C, D, E o F?
    ├─ Sí: asignar valor 10 a 15
    └─ No: convertir la cifra de texto a entero
    ↓
Multiplicar valor × 16^(longitud - 1 - i)
    ↓
Acumular en el resultado decimal
    ↓
Continuar hasta terminar las posiciones
    ↓
Mostrar valor decimal
```

El profesor insiste en trasladar **el diagrama al código paso a paso**, en lugar de intentar improvisar toda la implementación de una vez.

### Precisión sobre los datos admitidos

Durante el ejemplo el profesor expresa que **se supone que el usuario introduce un hexadecimal válido** y afirma que, por ahora, no se realizan validaciones. Por tanto, el `default` se interpreta en clase como una cifra numérica, aunque esa suposición no valida por sí misma todos los caracteres posibles. No se añade aquí un sistema de validación no explicado.

## 6.11. Qué queda pendiente

Queda por completar la parte contraria del ejercicio: **introducir un número decimal y obtener su representación en bases 2, 8 y 16**. El profesor anuncia que se retomará en la siguiente sesión.

---
# 7. Introducción a `while` y `do while`

Después de los ejemplos con `for`, se estudian dos nuevas **estructuras de repetición**. El profesor las presenta mediante diagramas, comparando en qué momento se pregunta por la condición.

## 7.1. La condición de repetición

Al igual que en un `if`, la condición que se evalúa debe expresar algo que sea **verdadero o falso** (`boolean`). La diferencia es el comportamiento:

- En un `if`, la condición determina si se realiza una selección.
- En una repetición, la condición determina si el bloque debe volver a ejecutarse.

El profesor recalca que, dentro del bloque de repetición, debe ocurrir **algo que permita cambiar el resultado de la condición**. Si nunca cambia, puede producirse una repetición infinita.

## 7.2. `while`: primero comprobar, después ejecutar

La sintaxis presentada es:

```java
while (condicion) {
    // Instrucciones que se repiten
}
```

El orden de funcionamiento es:

```text
Llegar al while
      ↓
¿Se cumple la condición?
      ├─ NO → salir y continuar después del while
      └─ SÍ → ejecutar el bloque
                  ↓
             volver a comprobar
```

**La condición se comprueba antes de entrar en el bloque.** Por eso un `while` puede ejecutarse **cero veces**: si la condición inicial es falsa, el contenido no llega a ejecutarse.

No se sabe necesariamente cuántas vueltas tendrá; depende de cuándo deje de cumplirse la condición.

## 7.3. `do while`: primero ejecutar, después comprobar

La sintaxis presentada es:

```java
do {
    // Instrucciones que se repiten
} while (condicion);
```

Su orden es:

```text
Llegar al do
      ↓
Ejecutar el bloque
      ↓
¿Se cumple la condición?
      ├─ SÍ → volver al comienzo del bloque
      └─ NO → salir y continuar
```

**El bloque se ejecuta antes de comprobar.** Por eso tiene garantizada **al menos una ejecución**, incluso cuando la condición no permita una segunda vuelta.

El profesor insiste en escribir la estructura completa desde el principio, incluidas las llaves, el `while` final y el punto y coma que termina la sentencia.

## 7.4. Diferencia esencial

| Característica | `while` | `do while` |
|---|---|---|
| Momento de comprobar | Antes del bloque | Después del bloque |
| Mínimo de ejecuciones | 0 | 1 |
| Requiere condición booleana | Sí | Sí |
| Puede repetirse indefinidamente si la condición no cambia adecuadamente | Sí | Sí |
| Actualización automática como la cabecera de `for` | No | No |

**Matiz explicado en clase:** no debe concluirse que `do while` siempre ejecuta «una vuelta más» que `while`. La diferencia está en **cuándo se comprueba**, no en sumar una iteración obligatoriamente al total. Con determinadas condiciones ambos realizan la misma cantidad; con una condición inicial falsa, el `do while` realiza una y el `while` ninguna.

## 7.5. Un bucle infinito por no modificar la condición

Ejemplo conceptual:

```java
int i = 8;

while (i < 10) {
    System.out.println(i);
}
```

Como `i` no cambia, sigue cumpliendo `i < 10` en todas las vueltas.

También se muestra que **modificar la variable en el sentido equivocado** no arregla el problema:

```java
int i = 8;

while (i < 10) {
    i--;
}
```

Si se decrementa, el valor se aleja del límite 10 en lugar de aproximarse al momento de salida. El profesor utiliza esto para recordar que **condición y actualización deben ser coherentes**.

En cambio:

```java
int i = 8;

while (i < 10) {
    System.out.println(i);
    i++;
}
```

recorre los valores 8 y 9. Al llegar a 10 deja de cumplirse la condición.

La misma idea se prueba con `do while`, primero con condiciones que producen repetición y después con condiciones que hacen que solo se ejecute una vez.

## 7.6. Caso de una condición falsa desde el principio

El profesor compara dos situaciones con una variable inicialmente fuera del rango:

```java
int i = 10;

while (i < 10) {
    System.out.println("Ejecutando");
}
```

Aquí el cuerpo no se ejecuta.

```java
int i = 10;

do {
    System.out.println("Ejecutando");
} while (i < 10);
```

Aquí se ejecuta una vez y después se comprueba que no debe repetirse.

Este es el ejemplo que utiliza para fijar la diferencia sin depender de un cálculo de muchas iteraciones.

---

# 8. Leer números hasta introducir uno negativo

El profesor plantea una demostración práctica: **seguir leyendo números por consola hasta que el usuario escriba uno negativo**.

## 8.1. Solución explicada con `while`

Se necesita una primera lectura **antes** de comprobar el `while`. Después, dentro del bloque, se solicita el siguiente número:

```java
Scanner lector = new Scanner(System.in);

System.out.println("Introduce un número:");
int numero = lector.nextInt();

while (numero >= 0) {
    System.out.println("Continúa introduciendo números:");
    numero = lector.nextInt();
}

System.out.println("Se ha introducido un número negativo");
```

El profesor explica que si se alcanza la línea posterior al `while`, se sabe que se ha introducido un negativo: **es precisamente la condición que provoca la salida del bucle**. No hace falta volver a preguntar por un hecho que el flujo de ejecución ya garantiza.

También responde a una pregunta sobre anidación: es posible poner un `while` dentro de un `if`, por ejemplo para que cierta dinámica solo comience cuando se cumpla una condición previa.

## 8.2. Solución explicada con `do while`

Se puede evitar la lectura previa realizando la petición dentro del bloque:

```java
Scanner lector = new Scanner(System.in);
int numero;

do {
    System.out.println("Introduce un número:");
    numero = lector.nextInt();

    if (numero >= 0) {
        System.out.println("Número correcto. Repetimos.");
    }
} while (numero >= 0);

System.out.println("Se ha introducido un número negativo");
```

El `if` del interior se usa para evitar mostrar «Número correcto» cuando acaba de recibirse precisamente el número negativo que detiene el proceso.

## 8.3. Declarar fuera, asignar dentro

La variable `numero` debe existir cuando se evalúa la condición que cierra el bloque `do`:

```java
} while (numero >= 0);
```

Como la condición está **fuera de las llaves del `do`**, la variable no debe declararse exclusivamente dentro de ese bloque.

El profesor distingue:

```java
int numero;              // Declaración en un ámbito exterior

do {
    numero = lector.nextInt();  // Asignación dentro del bloque
} while (numero >= 0);
```

Señala además que aquí Java admite declarar `numero` inicialmente sin darle un valor porque se le asigna **obligatoriamente** uno en la ejecución inicial del `do` antes de llegar a la comprobación.

**Error que se quiere evitar:** si dentro del `do` se vuelve a escribir `int numero = ...`, se estaría creando otra variable distinta en un ámbito interior, en lugar de dar valor a la declarada fuera.

---

# 9. Elegir libremente las estructuras de control

El profesor indica que, a partir de este momento, los alumnos pueden combinar los elementos ya estudiados:

- `if`, `else` y `else if`;
- `switch`;
- `for`;
- `while`;
- `do while`;
- estructuras anidadas.

Ya no se trata de que cada ejercicio imponga una estructura única. Hay que analizar **qué necesita cada situación**.

Criterio presentado:

- `for` encaja cuando se conoce de antemano cuántas veces se realizará una tarea o se controla un recorrido.
- `while` y `do while` permiten repetir hasta que ocurra un hecho cuya vuelta concreta no se conoce de antemano.
- Si primero se necesita ejecutar o pedir un dato para poder evaluarlo, el `do while` resulta especialmente natural.

El profesor insiste en tener claras estas piezas antes de comenzar con estructuras de almacenamiento.

---

# 10. Ejercicios de `while` / `do while` presentados durante la clase

Se revisa el listado de ejercicios y se señalan cuáles ya se han practicado en ejemplos similares, cuáles se trabajarán y cuáles quedan pendientes. Los siguientes son **enunciados y comentarios de organización**, no correcciones completas de todos ellos.

| Ejercicio | Nombre del listado | Situación en esta clase |
|---|---|---|
| 1 | `SumarPositivos` | Leer enteros hasta introducir 0 y sumar los positivos. Se considera similar al ejemplo de detenerse con un negativo. |
| 2 | `MinimoComunMultiplo` | Calcular el MCM de dos números. El profesor permite dejarlo en segundo plano por su componente matemático. |
| 3 | `MayorNumero` | Generar enteros aleatorios entre 0 y 100 hasta obtener 0; mostrar los generados y el máximo. **Se trabaja y se corrige.** |
| 4 | `BinarioOctalHexadecimal` | Convertir un entero no negativo a bases 2, 8 y 16. Se relaciona con el ejercicio de bases; queda pendiente de completar. |
| 5 | `Adivina` | Adivinar un aleatorio entre 0 y 20 y contar intentos. **Se trabaja y se corrige.** |
| 6 | `AdivinaRecord` | Repetir el juego y mantener un récord de intentos. **Se trabaja y se corrige.** |
| 7 | `MenuSimple` | Menú repetitivo que termina al seleccionar «Salir». **Se plantea, sin corrección completa.** |
| 8 | `MenuCalculo` | Transformar el menú anterior en una calculadora. **Se plantea, sin corrección completa.** |
| 9 | `MenuBases` | Menú repetitivo de conversiones desde decimal a otras bases. **Queda pendiente.** |

El profesor comenta que los ejercicios de menú 7 y 8 están relacionados y que puede abordarse directamente el 8.

## 10.1. `MenuSimple` — ejercicio 7

El programa debe mostrar un menú de opciones y leer la seleccionada. Tras informar de la opción introducida, debe volver a mostrar el menú. Termina cuando se selecciona la opción de salida.

Si se escribe una opción no contemplada, se muestra un mensaje de opción no válida. La idea a practicar es **repetir todo el menú hasta elegir salir**.

## 10.2. `MenuCalculo` — ejercicio 8

El profesor describe una calculadora que:

1. Pide dos operandos.
2. Ofrece sumar, restar, multiplicar, dividir, módulo y salir.
3. Ejecuta la operación elegida y muestra el resultado.
4. Vuelve a solicitar números y a ofrecer las opciones.
5. Termina cuando se selecciona «Salir».

**No se conserva una resolución completa de `MenuCalculo` en esta clase**; se presenta como ejercicio para realizar. Por tanto, no debe confundirse este enunciado con una corrección efectuada por el profesor.

## 10.3. `MenuBases` — ejercicio 9

Se propone modificar la calculadora para que sea un menú de cambios de base. El profesor señala que depende de la parte pendiente sobre **convertir de decimal a binario, octal y hexadecimal**, que se trabajará más adelante.

---

# 11. Generación de enteros aleatorios en intervalos

Antes de corregir `MayorNumero`, se atiende a una duda sobre cómo generar números con `Math.random()`.

## 11.1. Números de 0 a 100, ambos incluidos

La expresión presentada es:

```java
int aleatorio = (int) (Math.random() * 101);
```

El profesor recalca que se debe multiplicar por **101** para contemplar los **101 valores enteros posibles** desde 0 hasta 100.

## 11.2. Números de 50 a 150, ambos incluidos

La explicación consiste en generar primero un entero desde 0 hasta la amplitud correspondiente y después desplazarlo sumando el valor mínimo:

```java
int aleatorio = (int) (Math.random() * 101) + 50;
```

Primero se obtiene un valor del intervalo 0–100 y, al sumarle 50, pasa al intervalo 50–150.

La clase relaciona esta construcción con la usada para el dado (1–6) y la que se utilizará en el juego de adivinación (0–20).

---

# 12. Corrección del ejercicio `while` 3: `MayorNumero`

## 12.1. Enunciado identificado

Generar números aleatorios enteros entre 0 y 100 **hasta obtener el 0**. Mostrar los números generados e identificar el **mayor de ellos**.

El profesor explica que no se conoce de antemano cuántos números hará falta generar. La condición de parada depende de cuándo aparezca el 0.

## 12.2. Por qué utiliza `do while`

El profesor escoge `do while` porque **necesita generar al menos un número** antes de poder comprobar si ese número es 0.

```java
int aleatorio;

do {
    aleatorio = (int) (Math.random() * 101);
} while (aleatorio != 0);
```

El número `aleatorio` se declara antes del `do` porque tiene que seguir siendo visible en la condición final.

## 12.3. Guardar el máximo

Se crea una variable para conservar el valor más alto encontrado:

```java
int maximo = -1;
```

En la explicación también aparece la posibilidad de partir de 0, dado que los valores generados no son negativos. El profesor comenta que **−1 puede representar que aún no se ha seleccionado ningún número válido** dentro de un conjunto de valores no negativos.

En cada vuelta se compara el número recién generado con el mayor registrado hasta entonces:

```java
if (aleatorio > maximo) {
    maximo = aleatorio;
}
```

Si el nuevo número es mayor, sustituye al máximo. En caso contrario, se mantiene el valor previo.

## 12.4. Una alternativa: el operador ternario

El profesor vuelve a mostrar la operación de asignación con un ternario:

```java
maximo = aleatorio > maximo ? aleatorio : maximo;
```

Explica que el ternario **no se usa aquí para ejecutar bloques diferentes**, sino para **elegir qué valor debe asignarse a una variable**.

| Parte | Significado |
|---|---|
| `aleatorio > maximo` | Condición que se evalúa |
| `? aleatorio` | Valor que se asignará si la condición es verdadera |
| `: maximo` | Valor que se asignará si es falsa |

IntelliJ puede sugerir `Math.max()`, pero el profesor presenta la comparación explícita como parte del aprendizaje de las estructuras y del propio ternario.

## 12.5. Contar los números generados

Durante la corrección también añade un **contador de generaciones**:

```java
int cantidad = 0;
```

Cada vez que se genera un número:

```java
cantidad++;
```

Aclara que este contador es una información adicional respecto al objetivo central de encontrar el máximo en la demostración.

## 12.6. Flujo reconstruido de la corrección

```java
int aleatorio;
int maximo = -1;
int cantidad = 0;

do {
    aleatorio = (int) (Math.random() * 101);
    cantidad++;

    if (aleatorio > maximo) {
        maximo = aleatorio;
    }

} while (aleatorio != 0);

System.out.println("El máximo de los generados es " + maximo);
```

Este bloque **reconstruye la estructura principal descrita en clase**; no pretende ser una transcripción línea por línea de la pantalla. El enunciado original también pide **mostrar cada valor generado**. La transcripción de la corrección se centra en la generación, el máximo y el contador y no deja perfectamente fijada la posición exacta de esa impresión en el código final del profesor.

## 12.7. Ideas importantes

- La generación debe estar **dentro de la repetición**: si se genera una sola vez fuera, las vueltas posteriores no crearán números nuevos.
- La variable cuyo valor se usa en el `while` final debe tener el **ámbito correcto**.
- El máximo debe conservarse **entre iteraciones**; no se reinicia dentro del `do`.
- La condición `aleatorio != 0` significa **seguir mientras todavía no haya salido el 0**.
- El contador se inicializa a cero y se incrementa una vez por generación.
- El `0` que detiene el proceso también se genera: es la vuelta que hace que la condición final resulte falsa.

---

# 13. Corrección del ejercicio `while` 5: `Adivina`

## 13.1. Enunciado identificado

La aplicación genera una sola vez un número aleatorio entre 0 y 20. El usuario debe introducir números hasta acertarlo. Por cada error aparece un mensaje equivalente a «Lo siento, inténtalo de nuevo». Al acertar se muestra el número de intentos empleados.

## 13.2. Generar el número una sola vez

```java
int aleatorio = (int) (Math.random() * 21);
```

El profesor recalca que la generación **no debe estar dentro del bucle de intentos**, porque entonces el número buscado cambiaría en cada vuelta. El juego debe conservar el mismo objetivo durante todos los intentos de una partida.

## 13.3. Por qué vuelve a elegir `do while`

El usuario tiene que introducir **al menos un intento** antes de saber si ha acertado. El esquema es:

```text
Generar el aleatorio una sola vez
    ↓
Pedir número al usuario
    ↓
Incrementar número de intentos
    ↓
¿Ha acertado?
    ├─ NO → informar y volver a pedir
    └─ SÍ → terminar la repetición
    ↓
Mostrar mensaje de acierto e intentos
```

La variable que guarda el número introducido debe declararse fuera del `do` porque se utiliza también en su condición.

## 13.4. Contar los intentos

El profesor considera que **cada entrada en el bloque del `do` representa un intento**. Por tanto:

```java
int intentos = 0;
```

Y, dentro de cada vuelta:

```java
intentos++;
```

El contador recoge también el intento con el que finalmente se acierta.

## 13.5. Estructura reconstruida de la corrección

```java
Scanner lector = new Scanner(System.in);

int aleatorio = (int) (Math.random() * 21);
int numeroUsuario;
int intentos = 0;

do {
    intentos++;

    System.out.println("Indica un número:");
    numeroUsuario = lector.nextInt();

    if (numeroUsuario != aleatorio) {
        System.out.println("Lo siento, inténtalo de nuevo");
    }
} while (numeroUsuario != aleatorio);

System.out.println("Enhorabuena, has acertado en " + intentos + " intentos");
```

La condición significa **seguir mientras el número introducido sea distinto del generado**.

No sería correcto imprimir incondicionalmente el mensaje de error dentro del `do`: también aparecería en la última vuelta, incluso cuando el usuario acierta.

El mensaje de éxito se coloca **después del `do while`**, ya que salir de ese bucle significa que se ha acertado.

## 13.6. Orden, llaves y formato

Durante esta corrección el profesor vuelve a insistir en:

- poner las llaves de apertura y cierre al escribir bloques;
- escribir la estructura completa del `do while`;
- mantener una indentación clara;
- utilizar **Reformat Code** en IntelliJ de manera habitual;
- comprobar que cada llave cierre el bloque correcto.

Muestra que un bloque mal indentado o una llave sobrante pueden hacer pensar que un `while` pertenece a una estructura diferente, provocando errores de organización y de funcionamiento.

---

# 14. Corrección del ejercicio `while` 6: `AdivinaRecord`

## 14.1. Enunciado identificado

Modificar el juego anterior para que, cuando el usuario acierte:

1. Se le pregunte si desea jugar de nuevo (`S/N`).
2. Si responde que sí, se inicie **otra partida con un nuevo aleatorio**.
3. Si responde que no, termine la aplicación.
4. Se compruebe si el número de intentos de la partida ha **mejorado el récord** de las anteriores.

Se trata de mantener dos niveles de repetición: **los intentos de una partida** y **la sucesión de partidas**.

## 14.2. Bucle interior: adivinar el número de una partida

La estructura del ejercicio anterior se conserva:

```text
Repetir:
    pedir un intento
    aumentar el contador
Hasta que acierte
```

Ese bloque solo debe terminar cuando el usuario acierte el aleatorio actual.

## 14.3. Bucle exterior: repetir partidas

El profesor introduce **otro `do while` que engloba una partida completa**:

```text
Repetir:
    generar un aleatorio nuevo
    reiniciar los intentos de esa partida
    jugar hasta acertar
    comprobar el récord
    preguntar si quiere volver a jugar
Mientras la respuesta sea sí
```

La generación debe quedar dentro del **bucle exterior** pero fuera del **bucle interior**. Así cambia al empezar una partida, pero permanece constante mientras se intenta adivinarlo.

## 14.4. Variables con distinta duración

El profesor diferencia dos grupos:

| Variable | Cuándo debe conservarse |
|---|---|
| Número aleatorio | Durante una partida; cambia en la siguiente |
| Número de intentos | Durante una partida; se reinicia al empezar otra |
| Respuesta para continuar | Debe servir para evaluar la condición del bucle exterior |
| Récord | **Entre partidas**; no debe reiniciarse al comienzo de cada una |

El récord se declara en un ámbito exterior al bucle de partidas. Si se declarara o reasignara al valor inicial al comienzo de cada partida, **se perdería la marca que había conseguido el jugador**.

## 14.5. Comparar y actualizar el récord

Cuando termina una partida se conoce su número final de intentos. Se compara con el mejor resultado anterior:

```java
if (intentos < record) {
    record = intentos;
    System.out.println("Has superado el récord");
}
```

La clase muestra ejemplos de reducción del récord: una partida de 10 intentos establece una marca y otra de 7 la mejora; otra de 3 vuelve a mejorarla. Una posterior de 6 no supera la marca de 3.

**La mejora consiste en utilizar menos intentos**, no más. El récord inicial debe elegirse de forma que la primera partida pueda establecer una marca. En una de las alternativas comentadas se utiliza un valor inicial muy alto.

## 14.6. Preguntar si se desea continuar

Tras resolver una partida:

```java
System.out.println("¿Quieres volver a jugar? (S/N)");
```

La respuesta controla el bucle exterior. El profesor muestra una lectura de texto y recuerda que la variable usada en la condición debe estar declarada en un ámbito accesible desde el `while` final.

Durante la demostración aparece un problema al combinar lecturas numéricas y una posterior lectura de texto con `Scanner`. El profesor interviene sobre la configuración/creación del lector para continuar. **La transcripción no conserva de forma suficientemente fiable la secuencia final de lecturas con la que se resuelve ese problema**, así que no se reconstruye aquí una solución técnica no expuesta claramente.

## 14.7. Ejemplo conceptual de ejecución

```text
Partida 1:
    Se acierta en 10 intentos.
    Récord: 10.
    ¿Volver a jugar? S

Partida 2:
    Se acierta en 7 intentos.
    Nuevo récord: 7.
    ¿Volver a jugar? S

Partida 3:
    Se acierta en 3 intentos.
    Nuevo récord: 3.
    ¿Volver a jugar? S

Partida 4:
    Se acierta en 6 intentos.
    No se supera el récord (sigue siendo 3).
    ¿Volver a jugar? N

Fin del programa.
```

El profesor revisa también una alternativa de un alumno que muestra el récord vigente al empezar otra partida. La acepta porque mantiene la lógica de conservación y actualización correcta.

## 14.8. Idea general de los bucles anidados

Es importante identificar **qué parte de la aplicación queremos repetir**:

- El `do while` interior repite **intentos**.
- El `do while` exterior repite **partidas**.
- El récord necesita vivir **fuera de ambos procesos de reinicio de la partida**.

No basta con colocar dos bucles; hay que situar dentro de cada uno **solo las instrucciones que deben repetirse con esa frecuencia**.

---

# 15. Consejos de programación reiterados durante la clase

## 15.1. Primero razonar el flujo

El profesor recurre a diagramas para plantear operaciones repetitivas y conversiones. La secuencia de trabajo defendida es:

```text
Comprender qué solicita el ejercicio
    ↓
Decidir qué variables hacen falta
    ↓
Decidir dónde deben estar declaradas
    ↓
Determinar qué se repite y cuál es la salida
    ↓
Escribir la estructura de control
    ↓
Completar los cálculos o decisiones
    ↓
Comprobar con ejemplos y depurar
```

## 15.2. Crear las variables necesarias

En la corrección de `NumerosTipos` el profesor señala que no hay que limitar artificialmente la cantidad de variables cuando el razonamiento exige varios valores (suma, contador, media, máximo, etc.). Al mismo tiempo recuerda que no tiene sentido crear variables que no se van a utilizar.

## 15.3. No reiniciar valores que deben acumularse

Un acumulador, contador o récord necesita conservar su estado. Inicializarlo **dentro de un bucle que debería actualizarlo** hace que se pierda lo conseguido en vueltas anteriores.

## 15.4. Alcance o ámbito

Se repite en varios ejercicios:

- una variable creada dentro de un bloque solo resulta accesible donde permite su ámbito;
- una condición situada fuera de ese bloque no puede utilizar una variable declarada únicamente dentro de él;
- si un resultado debe imprimirse después del bucle, deberá seguir estando accesible;
- si se declara una variable fuera, dentro del bucle normalmente se **reasigna** su valor sin volver a escribir su tipo.

## 15.5. El lugar del `println` importa

Se corrige continuamente la ubicación de los mensajes:

- Resumen del dado: después de los lanzamientos.
- Encabezado de una tabla: dentro del bucle de tablas y fuera del de multiplicaciones.
- Resultado decimal final: después de recorrer sus cifras.
- Acierto en el juego: después del bucle de intentos.
- Error de intento: solo si no ha acertado.

## 15.6. El ternario devuelve un valor

En la clase se utilizan asignaciones como:

```java
veces = veces <= 0 ? 100 : veces;
maximo = aleatorio > maximo ? aleatorio : maximo;
```

El profesor destaca que el ternario no es un `if` para escribir dos bloques completos de ejecución. Se emplea para **determinar cuál de dos valores se deja en una variable**.

## 15.7. Formatear y revisar las llaves

**Reformat Code** permite visualizar mejor los niveles anidados. El profesor recomienda utilizarlo continuamente y vigilar las llaves cuando los bloques empiezan a incluir condicionales y repeticiones unas dentro de otras.

---

# 16. Ejercicios pendientes y planificación comentada

Durante la última parte se aclaran tareas de la serie `for` y de la nueva serie de repetición.

## 16.1. Serie `for`

Se mencionan especialmente como importantes:

- **Ejercicio 14 — `CapicuaPalabra`:** comprobar si una palabra es palíndroma, como `ana`, `oro` o `radar`.
- **Ejercicio 17 — `Factorial`:** calcular el factorial de un número.

También se indica que hay ejercicios de **dibujar cuadrados por consola** que se revisarán después. El profesor cita oralmente los «12 y 13» como ejercicios de cuadrados; **en el listado facilitado corresponden al 11 (`CuadradoFor`) y 12 (`CuadradoFormato`)**, mientras que el 13 es `InversaPalabra`. La numeración de esa referencia oral es, por tanto, inconsistente y no debe corregirse silenciosamente.

El profesor comenta que el ejercicio 15, relativo al análisis de frases, ya se había trabajado, y relaciona otros ejercicios con la lógica de adivinación practicada.

## 16.2. Serie `while` / `do while`

Se recomienda realizar los ejercicios comentados para llegar con dudas concretas a la siguiente clase; se otorga menos prioridad al de **mínimo común múltiplo**.

La conversión desde decimal a bases 2, 8 y 16 queda pendiente para la siguiente sesión.

## 16.3. Temario próximo y examen

El profesor anuncia que se retomarán las dudas de `if`, `switch`, `for`, `while` y `do while` antes de continuar con **estructuras de almacenamiento** y, posteriormente, una variante de recorrido que denomina oralmente **`foreach`**. En esta clase solo se adelanta su existencia; **no se explica todavía su sintaxis ni su uso**.

Se habla de un examen sobre esta parte de la materia para el **26 o el 29 de octubre**, con el 29 como fecha aparentemente más probable durante la conversación. **La transcripción no permite tratar esa fecha como confirmación definitiva**.

---

# 17. Conceptos que debo saber explicar

1. La función del `for` exterior y del interior en las tablas de multiplicar.
2. Por qué el resumen de un proceso repetitivo se muestra al finalizar el bucle.
3. Cómo utilizar contadores inicializados a cero para contar las apariciones de cada cara de un dado.
4. Cómo generar enteros aleatorios dentro de un intervalo a partir de `Math.random()`.
5. Cómo determinar el menor y el mayor de dos números mediante `if` / `else`.
6. Cómo comprobar si un número es par mediante `% 2`.
7. Diferencia entre **acumulador** y **contador**.
8. Qué datos hacen falta para calcular la media de positivos y negativos.
9. Por qué puede ser necesario convertir temporalmente un entero a `double` antes de dividir.
10. Cómo distinguir las posiciones de los caracteres y los exponentes en una conversión de base.
11. Por qué el exponente de cada posición recorrida de izquierda a derecha es `longitud - 1 - i`.
12. Qué diferencia existe entre el carácter `'1'`, el texto `"1"` y el número `1`.
13. Cómo convertir un carácter que representa una cifra a entero pasando por `String.valueOf()` e `Integer.parseInt()`.
14. Cómo acumular las potencias de una base para obtener el valor decimal.
15. Qué representa cada letra de `A` a `F` en hexadecimal.
16. Diferencia de funcionamiento entre `while` y `do while`.
17. Por qué un `while` puede no ejecutarse ninguna vez y un `do while` realiza al menos una ejecución.
18. Por qué una condición de bucle puede producir una repetición infinita.
19. Cuándo resulta natural utilizar una repetición de número conocido (`for`) o una de final indeterminado (`while` / `do while`).
20. Qué variables deben permanecer disponibles fuera de un bucle por razones de ámbito.
21. Por qué un número aleatorio debe generarse en cada vuelta de `MayorNumero`, pero solo una vez por partida en `Adivina`.
22. Cómo funciona la asignación mediante el operador ternario.
23. Cómo organizar dos repeticiones anidadas para controlar intentos y partidas.
24. Por qué el contador de intentos se reinicia por partida y el récord no.
25. Qué diferencia hay entre un ejercicio **explicado y corregido** y otro cuyo **enunciado solo se plantea**.

---

# 18. Sintaxis que debo saber escribir

## Lectura por teclado

```java
import java.util.Scanner;

Scanner lector = new Scanner(System.in);
int numero = lector.nextInt();
String texto = lector.nextLine();
```

## Recorrido de número conocido

```java
for (int i = 0; i < veces; i++) {
    // Instrucciones repetidas
}
```

## `for` anidados

```java
for (int i = menor; i <= mayor; i++) {
    for (int j = 0; j <= 10; j++) {
        // Operación con i y j
    }
}
```

## Estructuras `while` y `do while`

```java
while (condicion) {
    // Instrucciones
}
```

```java
do {
    // Instrucciones
} while (condicion);
```

## Generación aleatoria

```java
int dado = (int) (Math.random() * 6) + 1;
int numeroEntre0y20 = (int) (Math.random() * 21);
int numeroEntre0y100 = (int) (Math.random() * 101);
int numeroEntre50y150 = (int) (Math.random() * 101) + 50;
```

## Contadores y acumuladores

```java
int contador = 0;
contador++;

int suma = 0;
suma += numero;
```

## Comparaciones y resto

```java
if (numero % 2 == 0) {
    // Es par
}

if (aleatorio > maximo) {
    maximo = aleatorio;
}
```

## Ternario

```java
variable = condicion ? valorSiVerdadero : valorSiFalso;
```

## Cadenas y cifras

```java
String texto = String.valueOf(numero);
int longitud = texto.length();
char letra = texto.charAt(i);
int cifra = Integer.parseInt(String.valueOf(letra));
```

## Conversión posicional a decimal

```java
int exponente = texto.length() - 1 - i;
int aportacion = (int) (cifra * Math.pow(base, exponente));
numeroDecimal += aportacion;
```

## Ejemplo de selección hexadecimal

```java
switch (letra) {
    case 'A' -> cifra = 10;
    case 'B' -> cifra = 11;
    case 'C' -> cifra = 12;
    case 'D' -> cifra = 13;
    case 'E' -> cifra = 14;
    case 'F' -> cifra = 15;
    default -> cifra = Integer.parseInt(String.valueOf(letra));
}
```

---

# 19. Errores frecuentes mencionados en clase

1. **Poner la cabecera de una tabla dentro del `for` interior**, haciendo que se repita por cada operación.
2. **Imprimir el resumen del dado dentro del `for`** en lugar de hacerlo al terminar todos los lanzamientos.
3. **No inicializar a cero contadores y acumuladores locales** antes de incrementarlos o sumarles valores.
4. **Olvidar contar cuántos datos positivos o negativos se introducen**, impidiendo calcular correctamente su media.
5. **Colocar una variable en un ámbito del que no puede leerse después**.
6. **Volver a declarar una variable donde se pretendía reasignar la que ya existía**.
7. **Confundir el valor numérico de un `char` con la cifra que representa**: el carácter `'1'` no equivale automáticamente al entero `1` en el ejemplo mostrado.
8. **Utilizar `<= texto.length()` para recorrer posiciones** y terminar accediendo a un índice inexistente.
9. **Olvidar el `-1` o el `-i`** al calcular los exponentes de las posiciones.
10. **Olvidar acumular los resultados individuales** de una conversión de base.
11. **Declarar el acumulador decimal dentro del `for`** y después intentar mostrarlo desde fuera.
12. **Escribir un `while` cuya condición nunca deja de ser verdadera**.
13. **Modificar la variable del bucle en dirección contraria al límite de salida**.
14. **Usar dentro del `while` final una variable declarada solo dentro del `do`**.
15. **Regenerar el número buscado en cada intento de `Adivina`** en vez de mantenerlo estable durante la partida.
16. **Imprimir el mensaje de intento incorrecto sin comprobar** si el usuario ha acertado.
17. **Poner el mensaje de éxito dentro de la repetición de intentos** sin respetar el momento de salida.
18. **Reiniciar el récord dentro del bucle de partidas** y perder la referencia anterior.
19. **No reiniciar el número de intentos al empezar una partida nueva**.
20. **Confundir el ternario con un `if` de bloques de instrucciones** en lugar de una expresión que selecciona un valor.
21. **Trabajar con llaves desordenadas y sin reformatear el código**, dificultando reconocer los bloques reales.

---

# 20. Puntos que la transcripción no conserva correctamente o que requieren cautela

1. **Código original completo en pantalla.** La transcripción procede de una explicación oral y no siempre conserva de forma literal cada línea, signo o llave. Los ejemplos mostrados en estos apuntes se han reconstruido a partir del razonamiento expresado por el profesor; no son copias certificadas del editor.
2. **Ejercicio `Dado`.** Se recogen claramente las alternativas con `if`, `switch` y ternario, pero no toda la sintaxis literal de cada variante desarrollada en pantalla.
3. **Ejercicio `NumerosTipos`.** La discusión sobre medias cuando no se introduce ningún positivo o ningún negativo no culmina en una implementación inequívoca que pueda reconstruirse como solución definitiva.
4. **Conversión de binario.** El profesor cambia durante la explicación entre leer inicialmente un entero y leer o trabajar directamente con una cadena. Se preservan ambas posibilidades sin convertirlas en una única secuencia obligatoria.
5. **Conversión de hexadecimal.** Se trabaja **suponiendo entrada válida** y con casos para letras mayúsculas `A` a `F`. No consta un mecanismo completo de validación de caracteres ni de normalización de minúsculas implementado en la corrección.
6. **Cálculos de potencias.** El reconocimiento de voz de `Math.pow`, `charAt`, `length`, `String.valueOf` e `Integer.parseInt` está deformado en diversos pasajes. Sus nombres se han normalizado porque la referencia contextual es clara, pero no se reproduce una línea original no verificable.
7. **Gestión de memoria.** La explicación sobre la duración en memoria de variables declaradas dentro o fuera de un bucle es una simplificación oral del profesor; los apuntes conservan la lección práctica sobre el ámbito sin convertir esa explicación en una descripción técnica completa.
8. **Ejercicio `MayorNumero`.** El enunciado requiere mostrar los números generados, pero la posición exacta del `println` en el código final de la corrección no queda registrada con nitidez.
9. **Ejercicio `AdivinaRecord`.** Aparece una incidencia al leer texto después de leer números con `Scanner`. La solución final del lector no queda registrada de forma suficientemente clara para establecerla como procedimiento.
10. **Numeración de ejercicios `for`.** En una intervención se mencionan «12 y 13» al hablar de cuadrados; el listado aportado identifica los cuadrados como ejercicios **11 y 12**. Esta diferencia se deja explícita.
11. **Ejercicios de menús.** `MenuSimple`, `MenuCalculo` y `MenuBases` se describen como trabajos a realizar, **no como soluciones completas ya corregidas** en esta clase.
12. **Fecha del examen.** Se habla del 26 o el 29 de octubre, aparentemente con preferencia por el 29, pero la conversación no ofrece una confirmación definitiva que permita fijarla sin reservas.
13. **Ruido de la transcripción.** Hay interrupciones, conversaciones sobre deportes, juegos y otros temas ajenos a la explicación que se han eliminado. No se reconstruyen a partir de ellas instrucciones de programación.

---

**Criterio de estudio de esta clase:** dominar la elección de una estructura de repetición y el ámbito de las variables; entender los recorridos por posiciones, la acumulación de valores y la diferencia entre repetir intentos y repetir partidas. Los ejercicios planteados pero no corregidos quedan identificados para poder reconocerlos en la siguiente transcripción.

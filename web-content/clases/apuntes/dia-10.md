# Apuntes completos — Día 10

> **Procedencia:** apuntes reconstruidos a partir de las clases, aportados al proyecto. Se conservan las advertencias de fidelidad y las ampliaciones que ya estaban etiquetadas. Se han anonimizado identificadores personales cuando procede.

[Volver a la ficha de estudio](../dia-10.md)

## Ordenación de listas, `Comparator`, predicados, streams y práctica del gestor de temperaturas

> **Fuente exclusiva:** segunda transcripción aportada (la grabación de clase). El número del día se asigna por continuidad con las clases anteriores; no hay una fecha verificable en el propio audio.
>
> **Reconstrucción del material:** se conserva la explicación docente, las decisiones de diseño, la corrección de problemas y los ejercicios propuestos. Se corrigen errores evidentes del reconocimiento automático, por ejemplo «short» → `sort`, «river» → `reverse`, «for is» → `for-each`, «remove it» → `removeIf`, «predicate» → `Predicate`, «strinder» → *stream* y «math to double» → `mapToDouble`. Los códigos son **reconstrucciones didácticas de lo descrito oralmente**, no una transcripción de la pantalla del profesor. No se incorporan desarrollos del libro ni contenidos externos.
>
> **Advertencia sobre el comienzo:** el archivo inicia **en mitad de una explicación sobre ordenación**. No se conserva cómo había empezado esa demostración ni el programa que estaba abierto. Cuando el audio pierde una línea o muestra resultados inconsistentes, se señala y no se atribuye una solución literal al profesor.

---

## Índice

1. [Ordenación natural y ordenación personalizada](#1-ordenación-natural-y-ordenación-personalizada)
2. [Ordenar listas: `Collections.sort` y `lista.sort`](#2-ordenar-listas-collectionssort-y-listasort)
3. [`Comparator`: decidir el orden comparando pares](#3-comparator-decidir-el-orden-comparando-pares)
4. [Qué significa ordenar por longitud de una palabra](#4-qué-significa-ordenar-por-longitud-de-una-palabra)
5. [Recordatorio: `for` indexado y `for-each` iterado](#5-recordatorio-for-indexado-y-for-each-iterado)
6. [Problema de eliminar mientras se recorre](#6-problema-de-eliminar-mientras-se-recorre)
7. [`removeIf` y `Predicate`](#7-removeif-y-predicate)
8. [Ejercicio central: gestor de temperaturas](#8-ejercicio-central-gestor-de-temperaturas)
9. [Organización del proyecto: `main` y métodos](#9-organización-del-proyecto-main-y-métodos)
10. [Opción 1: añadir una temperatura](#10-opción-1-añadir-una-temperatura)
11. [Opción 2: mostrar las temperaturas](#11-opción-2-mostrar-las-temperaturas)
12. [Opción 3: ordenar las temperaturas](#12-opción-3-ordenar-las-temperaturas)
13. [Opción 4: buscar y contar coincidencias](#13-opción-4-buscar-y-contar-coincidencias)
14. [Por qué la lambda de `forEach` dificulta modificar un contador local](#14-por-qué-la-lambda-de-foreach-dificulta-modificar-un-contador-local)
15. [Introducción práctica a los streams](#15-introducción-práctica-a-los-streams)
16. [Filtrar con `filter` y contar con `count`](#16-filtrar-con-filter-y-contar-con-count)
17. [Opción 5: mostrar el máximo y el mínimo](#17-opción-5-mostrar-el-máximo-y-el-mínimo)
18. [Opción 6: calcular la media](#18-opción-6-calcular-la-media)
19. [`mapToDouble` y `average`](#19-maptodouble-y-average)
20. [Opción 7: limpiar temperaturas negativas](#20-opción-7-limpiar-temperaturas-negativas)
21. [Opción 8: salir del programa](#21-opción-8-salir-del-programa)
22. [Código integrado del ejercicio de temperaturas](#22-código-integrado-del-ejercicio-de-temperaturas)
23. [Nuevo ejercicio propuesto: gestor de notas](#23-nuevo-ejercicio-propuesto-gestor-de-notas)
24. [Conceptos que debo saber explicar](#24-conceptos-que-debo-saber-explicar)
25. [Sintaxis que debo saber escribir](#25-sintaxis-que-debo-saber-escribir)
26. [Errores frecuentes mencionados en clase](#26-errores-frecuentes-mencionados-en-clase)
27. [Puntos que la transcripción no conserva correctamente](#27-puntos-que-la-transcripción-no-conserva-correctamente)

---

# 1. Ordenación natural y ordenación personalizada

La grabación comienza con una pregunta: **¿cómo se ordenan palabras cuando no se quiere seguir el orden alfabético, sino la longitud?**

El profesor distingue dos situaciones:

1. **Ordenación natural:** Java ya dispone de un criterio de ordenación para determinados elementos, como números y cadenas. En el ejemplo de clase, los números se ordenan por su valor y las palabras alfabéticamente.
2. **Ordenación personalizada o no natural:** el programador quiere un criterio distinto, por ejemplo ordenar las palabras de la más corta a la más larga, o al revés.

Ejemplo conceptual:

```text
Lista:       ["casa", "sol", "programacion", "pez"]

Alfabética:  ["casa", "pez", "programacion", "sol"]
Longitud:    ["sol", "pez", "casa", "programacion"]
```

La diferencia fundamental **no está en el tipo de lista**, sino en el criterio elegido para determinar qué elemento debe aparecer antes que otro.

El profesor anticipa que, cuando se creen objetos propios en programación orientada a objetos, habrá que decidir también **qué significa ordenar esos objetos**. En esta sesión se trabaja con tipos ya conocidos para comprender el concepto sin avanzar a esa parte del temario.

# 2. Ordenar listas: `Collections.sort` y `lista.sort`

## 2.1. Ordenación natural con `Collections.sort`

El profesor presenta la operación de ordenar mediante la clase `Collections`:

```java
Collections.sort(palabras);
```

Aquí `palabras` es la lista que se desea ordenar. En el caso de las cadenas, el criterio natural utilizado en el ejemplo es el alfabético.

La importación de esta utilidad es:

```java
import java.util.Collections;
```

## 2.2. Ordenación con un comparador

Cuando se necesita otro criterio, se puede proporcionar además **cómo comparar**:

```java
Collections.sort(palabras, comparador);
```

En el audio se presentan dos maneras de expresar la idea:

```java
Collections.sort(palabras, comparador);
```

O bien invocar la ordenación directamente sobre la lista:

```java
palabras.sort(comparador);
```

En la segunda forma la lista ya sabe que la operación se refiere a sí misma, de modo que solo se le indica el criterio.

## 2.3. Ordenar no significa recibir una lista nueva

Esta distinción se recalca expresamente:

> La llamada de ordenación **deja la lista ordenada**. No se utiliza como un método que devuelva otra lista con el nuevo orden.

Por ejemplo:

```java
Collections.sort(palabras);

// La lista palabras ha quedado ordenada.
for (String palabra : palabras) {
    System.out.println(palabra);
}
```

**Paso a paso:**

1. Se dispone de una lista con elementos desordenados.
2. Se llama al método de ordenación.
3. El método modifica el orden de esa lista.
4. Se recorre para comprobar su estado actual.

No hay que confundir **el efecto del método** con **su valor de retorno**.

# 3. `Comparator`: decidir el orden comparando pares

## 3.1. Qué recibe el método de ordenación

Cuando se pide una ordenación personalizada, IntelliJ indica que espera un dato de tipo **`Comparator`**.

El profesor insiste en aprender a leer lo que pide un método:

- A veces se solicita un número o un texto.
- En este caso se solicita **un comparador**.
- El programador debe proporcionar el comportamiento de ese comparador.

## 3.2. Método `compare`

La construcción que muestra en la explicación utiliza un método llamado `compare` que recibe **dos elementos** para decidir su orden relativo.

```java
new Comparator<String>() {
    @Override
    public int compare(String primero, String segundo) {
        // Decidir cómo se ordenan primero y segundo.
    }
}
```

Su función es analizar sucesivamente **pares de valores**. La transcripción relaciona esta idea con las comparaciones que se habían visto en algoritmos manuales de ordenación.

## 3.3. El número que devuelve la comparación

En la demostración oral aparecen estos resultados:

- `1` para indicar un sentido de ordenación.
- `-1` para indicar el sentido contrario.

El profesor cambia sus signos para invertir el criterio.

**Precisión indispensable para interpretar correctamente el comparador:** cuando ambos elementos son equivalentes según el criterio, la comparación debe poder producir `0`. El audio solo detalla los casos `1` y `-1`; no muestra una comprobación fiable del caso de igualdad. En los ejemplos reconstruidos se incluye ese caso para que el criterio quede coherente.

# 4. Qué significa ordenar por longitud de una palabra

Se toma una lista de cadenas y se pregunta por **cuántos caracteres tiene cada una**.

```java
ArrayList<String> palabras = new ArrayList<>();
palabras.add("sol");
palabras.add("programacion");
palabras.add("casa");
palabras.add("pez");
```

La información que se compara se obtiene mediante `length()`:

```java
primero.length()
segundo.length()
```

## 4.1. Ordenar de menor a mayor longitud

El siguiente código reproduce la idea de comparar longitudes y devolver un resultado que determine el orden:

```java
palabras.sort(new Comparator<String>() {
    @Override
    public int compare(String primero, String segundo) {
        if (primero.length() > segundo.length()) {
            return 1;
        } else if (primero.length() < segundo.length()) {
            return -1;
        } else {
            return 0;
        }
    }
});
```

**Interpretación detallada:**

1. Se reciben dos palabras.
2. Se compara la longitud de la primera con la segunda.
3. Si la primera es más larga, se indica que debe quedar después.
4. Si es más corta, se indica que debe quedar antes.
5. Si tienen la misma longitud, ambas son equivalentes para este criterio.
6. La operación de ordenación realiza las comparaciones necesarias para reorganizar la lista.

## 4.2. Ordenar de mayor a menor longitud

Para obtener el sentido contrario, se invierte la decisión:

```java
palabras.sort(new Comparator<String>() {
    @Override
    public int compare(String primero, String segundo) {
        if (primero.length() > segundo.length()) {
            return -1;
        } else if (primero.length() < segundo.length()) {
            return 1;
        } else {
            return 0;
        }
    }
});
```

**La lista sigue siendo una lista de `String`**: lo que cambia es el criterio con el que se comparan sus elementos.

## 4.3. Las llaves en un `if` con una instrucción

Un alumno pregunta por qué el profesor no había puesto llaves en un `if` o `else` que solo tenía una instrucción. El profesor contesta que, para **una sola sentencia**, las llaves pueden omitirse.

Ejemplo conceptual:

```java
if (condicion)
    return 1;
else
    return -1;
```

Las llaves también pueden utilizarse y no cambian esa decisión:

```java
if (condicion) {
    return 1;
} else {
    return -1;
}
```

**Importante:** el ejemplo oral con solo dos resultados no trata de forma explícita el caso de elementos iguales. Por eso no se presenta como un comparador completo, sino como la parte de la lógica que muestra la grabación.

# 5. Recordatorio: `for` indexado y `for-each` iterado

Durante la revisión de los ejercicios, el profesor vuelve a distinguir dos formas de recorrido:

## 5.1. `for`: hay un índice explícito

```java
for (int i = 0; i < temperaturas.size(); i++) {
    System.out.println(temperaturas.get(i));
}
```

Se conoce el número de la posición que se consulta en cada vuelta, porque la variable `i` forma parte de la cabecera.

## 5.2. `for-each`: se recibe el elemento directamente

```java
for (Double temperatura : temperaturas) {
    System.out.println(temperatura);
}
```

En esta forma, la variable `temperatura` toma el valor de cada elemento, pero **no proporciona automáticamente su índice**.

Si el enunciado pide informar también de la posición, el profesor explica que se podría mantener un **contador manual**:

```java
int posicion = 0;

for (Double temperatura : temperaturas) {
    System.out.println("Posición " + posicion + ": " + temperatura);
    posicion++;
}
```

**La pregunta que debe resolverse antes de elegir el recorrido es:** ¿necesito saber qué **posición** ocupa el elemento o basta con procesar su **valor**?

# 6. Problema de eliminar mientras se recorre

En la corrección de un ejercicio con temperaturas negativas, un alumno observa que **no se han eliminado todos los valores esperados**. El profesor identifica el origen: se están borrando elementos mientras se recorre la misma lista.

## 6.1. Por qué un `for` por índices puede saltarse valores

Supongamos una lista:

```text
Índice:    0    1    2    3
Valor:    -2   -5    7   -1
```

El `for` empieza por `i = 0` y elimina el primer elemento negativo.

La lista queda:

```text
Índice:    0    1    2
Valor:    -5    7   -1
```

Al pasar a `i = 1`, se examina `7`. **El `-5`, que se ha desplazado a la posición `0`, se ha saltado.**

Esa es la idea que explica el profesor al decir que la eliminación «falsea» el recorrido: el índice avanza, pero las posiciones de la colección han cambiado.

Un patrón como el siguiente puede fallar lógicamente:

```java
for (int i = 0; i < temperaturas.size(); i++) {
    if (temperaturas.get(i) < 0) {
        temperaturas.remove(i);
    }
}
```

## 6.2. Por qué el `for-each` tampoco es la solución para borrar de esa forma

Si se intenta quitar elementos directamente de la misma lista mientras se itera con `for-each`, el profesor advierte de que puede aparecer una **excepción**.

```java
// Ejemplo de patrón que NO debe copiarse como solución:
// for (Double temperatura : temperaturas) {
//     if (temperatura < 0) {
//         temperaturas.remove(temperatura);
//     }
// }
```

La clase no desarrolla aquí todas las técnicas posibles para modificar colecciones durante una iteración. En lugar de insistir en un borrado manual, introduce un método específico para el problema.

# 7. `removeIf` y `Predicate`

## 7.1. Qué hace `removeIf`

El profesor muestra que las listas disponen de `removeIf`, que se utiliza cuando se quiere **eliminar elementos que cumplen una condición**.

En el ejercicio, esa condición es:

```java
temperatura < 0
```

El método permite que **el propio recorrido y eliminación los gestione la colección**.

```java
temperaturas.removeIf(temperatura -> temperatura < 0);
```

## 7.2. Qué representa `Predicate`

IntelliJ pide un **`Predicate`**, es decir, una función que decide si un elemento cumple o no una condición.

El profesor lo explica preguntando qué debe devolver la prueba para cada elemento:

- `true`: el elemento cumple la condición y **se elimina**.
- `false`: no la cumple y **permanece**.

Ejemplo:

| Temperatura | ¿`temperatura < 0`? | Resultado de `removeIf` |
|---:|---|---|
| `-4` | `true` | Se elimina. |
| `6` | `false` | Se conserva. |
| `-1` | `true` | Se elimina. |
| `0` | `false` | Se conserva. |
| `2` | `false` | Se conserva. |

## 7.3. Forma extensa del predicado

La explicación pasa por la idea de escribir una función con una prueba. La forma extensa equivalente se reconstruye así:

```java
temperaturas.removeIf(new Predicate<Double>() {
    @Override
    public boolean test(Double temperatura) {
        if (temperatura < 0) {
            return true;
        } else {
            return false;
        }
    }
});
```

Requiere la importación:

```java
import java.util.function.Predicate;
```

El método se denomina `test` y devuelve un booleano. El profesor trabaja el mismo razonamiento que ya había introducido con `Consumer`: se proporciona una acción definida para cada elemento.

## 7.4. Simplificación de la condición

La pregunta `temperatura < 0` **ya produce por sí misma `true` o `false`**. No hace falta escribir siempre:

```java
if (temperatura < 0) {
    return true;
} else {
    return false;
}
```

En este contexto basta con:

```java
return temperatura < 0;
```

Y con una lambda de una sola expresión:

```java
temperaturas.removeIf(temperatura -> temperatura < 0);
```

Esto conecta directamente con la simplificación de las funciones lambda explicada en la clase anterior.

## 7.5. Por qué no se llama `Collections.removeIf`

El profesor intenta aclarar por qué esta operación se invoca **sobre la lista**:

```java
temperaturas.removeIf(...);
```

y no del mismo modo que algunas utilidades estáticas de ordenación:

```java
Collections.sort(temperaturas);
```

El objetivo del razonamiento es **distinguir los métodos disponibles en el propio objeto de las funciones generales de la clase de utilidad `Collections`**. No se introduce una implementación de colecciones distinta.

# 8. Ejercicio central: gestor de temperaturas

La mayor parte de la sesión se dedica a corregir y reconstruir un programa que guarda temperaturas en un `ArrayList<Double>` y permite operar con ellas desde un menú.

Las operaciones se identifican a lo largo de la transcripción:

| Opción | Función | Resultado esperado |
|---:|---|---|
| **1** | Añadir temperatura | Guardar un nuevo `double`. |
| **2** | Mostrar todas | Recorrer e imprimir la lista. |
| **3** | Ordenar | Dejar las temperaturas ordenadas, inicialmente de menor a mayor. |
| **4** | Buscar una temperatura | Contar cuántas veces aparece el valor indicado. |
| **5** | Mostrar extremos | Obtener la mínima y la máxima. |
| **6** | Calcular la media | Sumar todas y dividir entre la cantidad. |
| **7** | Limpiar | Eliminar temperaturas negativas. |
| **8** | Salir | Finalizar el programa. |

El profesor utiliza esta práctica para trabajar **dos aprendizajes paralelos**:

1. **Lógica del problema:** qué debe ocurrir en cada opción.
2. **Organización del código:** qué instrucciones se dejan en `main` y cuáles se trasladan a métodos separados.

También se muestran **soluciones tradicionales** con bucles y **soluciones más compactas** con operaciones sobre colecciones y streams.

# 9. Organización del proyecto: `main` y métodos

## 9.1. Lista compartida como variable estática

El profesor declara una variable a nivel de clase para que los distintos métodos estáticos utilizados en el ejercicio puedan operar sobre la misma lista:

```java
static ArrayList<Double> temperaturas = new ArrayList<>();
```

La idea es tener **una sola colección de temperaturas** para todas las opciones del menú.

Como el programa parte de `main`, que es un método `static`, el profesor también construye como `static` los métodos auxiliares de la corrección.

## 9.2. Diferencia entre la entrada de datos y la lógica

Una de las indicaciones más importantes de la clase es **separar la interacción con el usuario del procesamiento de los datos**.

El profesor plantea el siguiente reparto:

**En `main`:**

- Mostrar el menú.
- Leer la opción elegida.
- Solicitar al usuario una temperatura cuando sea necesario.
- Llamar al método que realiza la operación y pasarle los datos que ha introducido el usuario.

**En los métodos auxiliares:**

- Recibir parámetros cuando la operación los necesite.
- Añadir, buscar, calcular o modificar los datos de la lista.
- Desarrollar la lógica de la operación.

Se menciona que algunos alumnos habían creado un `Scanner` global para poder usarlo en cualquier método, pero el profesor **prefiere mantener la lectura de datos en `main`** como hábito de separación entre interfaz y lógica.

## 9.3. Ejemplo del flujo de añadir

```text
El usuario elige la opción 1
             ↓
main pregunta la temperatura
             ↓
main lee un double
             ↓
main llama a añadirTemperatura(valor)
             ↓
El método añade el dato a la colección
```

La ventaja que explica el profesor es que, si el día de mañana cambia la manera de pedir los datos, **la operación de guardar una temperatura no tiene por qué cambiar también**.

## 9.4. Cuándo crear un método auxiliar

El profesor no propone extraer indiscriminadamente cada línea. Su criterio práctico para este ejercicio es:

- Si la operación es muy sencilla y se resuelve en una línea, puede dejarse directamente en el `case`.
- Si requiere varias instrucciones o cálculos, conviene encapsularla en un método con un nombre que describa su función.

Esto se refleja en la corrección: para mostrar u ordenar se consideran soluciones directas; para buscar, hallar extremos o calcular la media se presentan métodos propios.

# 10. Opción 1: añadir una temperatura

## 10.1. Solicitar el dato en `main`

El usuario elige la opción 1 y se le pide una temperatura:

```java
System.out.println("Indica la temperatura a registrar:");
double temperatura = lector.nextDouble();
```

El profesor pasa de una primera versión con enteros a trabajar con **`double`**, porque las temperaturas pueden incluir decimales.

## 10.2. Pasar el dato al método

```java
anadirTemperatura(temperatura);
```

El nombre concreto del método puede variar; aquí se utiliza un nombre descriptivo en una reconstrucción didáctica.

## 10.3. Definir el método

```java
public static void anadirTemperatura(double temperatura) {
    temperaturas.add(temperatura);
    System.out.println("Temperatura agregada correctamente");
}
```

**Paso a paso:**

1. `main` recibe el valor de la entrada del usuario.
2. Ese valor se pasa como argumento.
3. El método dispone de un parámetro `double temperatura`.
4. `temperaturas.add(temperatura)` lo añade al final de la lista compartida.
5. Se muestra un mensaje de confirmación.

## 10.4. Para qué sirven los parámetros en este ejemplo

Un alumno pregunta por qué algunos métodos llevan un dato entre paréntesis y otros no.

La explicación del profesor es práctica: **un método debe recibir los datos que necesite para hacer su trabajo**.

El método de añadir requiere saber **qué temperatura** hay que registrar, por eso tiene un parámetro. El método para mostrar toda la lista no necesita que se le indique una temperatura concreta, porque ya dispone de la colección compartida.

# 11. Opción 2: mostrar las temperaturas

La segunda opción consiste en recorrer todos los datos y mostrarlos por consola.

El profesor utiliza el método `forEach` con una lambda:

```java
temperaturas.forEach(temperatura -> System.out.println(temperatura));
```

**Interpretación:**

- `temperaturas` es la lista.
- `.forEach(...)` realiza el recorrido.
- El parámetro de la lambda representa cada `Double`.
- `System.out.println(temperatura)` lo muestra.

La grabación deja claro que no es necesario construir un método auxiliar con una única línea de este tipo si no aporta claridad adicional.

## 11.1. Ejemplo de uso

Se introducen varias temperaturas, algunas positivas, otras negativas y al menos una decimal. Después se elige la opción **mostrar**.

```text
Temperaturas registradas:
4.0
-4.0
-7.0
5.5
```

Los valores anteriores son **una ilustración del funcionamiento**; la secuencia exacta de entradas de la demostración queda parcialmente deformada por el audio.

## 11.2. Relación con otras formas de recorrer

La operación también se había practicado en la clase anterior con `for` y `for-each`:

```java
for (Double temperatura : temperaturas) {
    System.out.println(temperatura);
}
```

El profesor quiere que se puedan **leer ambas formas**. En esta corrección prefiere hacer visible la nueva sintaxis del método con lambda.

# 12. Opción 3: ordenar las temperaturas

Como las temperaturas son números, la **ordenación natural** resulta suficiente para colocarlas de menor a mayor:

```java
Collections.sort(temperaturas);
```

Si la lista contiene:

```text
[-4.0, 6.0, -10.0, 2.0, -7.0]
```

después de ordenar y mostrar queda:

```text
[-10.0, -7.0, -4.0, 2.0, 6.0]
```

## 12.1. No es necesario construir un `Comparator` para este caso

El profesor muestra que **podría** proporcionar un criterio personalizado, pero insiste en que no hace falta para la ordenación numérica habitual. Una sola llamada a `Collections.sort` ya resuelve el requisito.

## 12.2. Ordenar de mayor a menor

Durante la explicación se comenta una variante: ordenar primero y después **dar la vuelta** al orden con `reverse`.

```java
Collections.sort(temperaturas);
Collections.reverse(temperaturas);
```

Se recalca que `sort` ya ha **modificado la propia lista**. El recorrido posterior permite comprobar el orden conseguido.

## 12.3. Un criterio distinto del natural

El profesor menciona situaciones imaginarias como:

- querer primero los números pares y después los impares;
- querer ordenar según algún múltiplo;
- establecer otro sentido o prioridad de comparación.

Estos ejemplos se utilizan para explicar por qué **no todos los criterios de ordenación son los naturales**. No se desarrolla en el audio un comparador completo para cada una de esas situaciones.

# 13. Opción 4: buscar y contar coincidencias

La opción de búsqueda no consiste únicamente en decir si una temperatura aparece **una vez**, sino en contar **todas sus apariciones**.

Ejemplo:

```text
Temperaturas registradas: [1.0, 2.0, -4.0, 1.0, 2.0]
Temperatura buscada:       1.0
Resultado:                 aparece 2 veces
```

Si no se encuentra ninguna coincidencia, el enunciado comentado en la corrección pide informar de que **no hay una temperatura registrada con ese valor**.

## 13.1. Primer paso: recibir el dato que se busca

En `main`:

```java
System.out.println("Indica la temperatura a buscar:");
double buscada = lector.nextDouble();
buscarTemperatura(buscada);
```

Se lleva el dato al método que implementa la lógica.

## 13.2. Segundo paso: preparar un contador

En el método:

```java
int veces = 0;
```

Se empieza en cero porque, antes de examinar la lista, **todavía no se ha encontrado ninguna coincidencia**.

## 13.3. Tercer paso: recorrer toda la lista

El profesor reconstruye la solución tradicional utilizando `for-each`:

```java
for (Double elemento : temperaturas) {
    if (elemento == buscada) {
        veces++;
    }
}
```

**Paso a paso:**

1. Se toma el primer elemento.
2. Se compara con la temperatura buscada.
3. Si coincide, se incrementa `veces`.
4. Si no coincide, se deja el contador como estaba.
5. Se pasa al siguiente elemento.
6. Se continúa hasta terminar la lista.

## 13.4. Por qué no utilizar `break`

Un alumno propone parar cuando se encuentre la coincidencia. El profesor recuerda que el objetivo es **contar cuántas veces aparece**, no detectar únicamente la primera aparición.

Si se ejecuta `break` después de una coincidencia, **se dejan de analizar los elementos restantes** y se pierde el número total de apariciones.

Este es un ejemplo claro de cómo **el enunciado determina dónde debe terminar el recorrido**.

## 13.5. Variante con operador ternario

El profesor muestra que el incremento condicional puede expresarse también mediante una asignación que utiliza el operador ternario:

```java
veces = elemento == buscada ? veces + 1 : veces;
```

Significa:

```text
Si coincide:      veces toma su valor anterior + 1
Si no coincide:   veces conserva su valor anterior
```

Se hace lo mismo que con el `if`, pero en una expresión más compacta.

## 13.6. Variante con `for` indexado

El mismo algoritmo puede escribirse con posiciones:

```java
for (int i = 0; i < temperaturas.size(); i++) {
    if (temperaturas.get(i) == buscada) {
        veces++;
    }
}
```

**No hay una diferencia en el resultado del ejercicio.** Lo que cambia es cómo se obtiene cada valor: directamente con `for-each` o mediante `get(i)`.

## 13.7. Mostrar el resultado

Una vez finalizado el recorrido:

```java
if (veces > 0) {
    System.out.println("La temperatura aparece " + veces + " veces");
} else {
    System.out.println("No hay una temperatura registrada con ese valor");
}
```

El profesor comenta dos posibles decisiones de diseño:

- **Imprimir dentro del método:** el método realiza la búsqueda y comunica el resultado.
- **Devolver el contador:** el método calcula cuántas veces aparece y `main` decide cómo mostrarlo.

Ambas alternativas se discuten; **la grabación no obliga a una única firma definitiva del método**. En la reconstrucción integrada se mantiene una de ellas de forma consistente.

# 14. Por qué la lambda de `forEach` dificulta modificar un contador local

Un alumno intenta escribir dentro de `temperaturas.forEach(...)` una lógica semejante a la anterior, incrementando `veces` cuando hay coincidencia.

La idea que intenta implementar es:

```java
int veces = 0;

// Este patrón NO funciona tal como está escrito:
// temperaturas.forEach(elemento -> {
//     if (elemento == buscada) {
//         veces++;
//     }
// });
```

IntelliJ muestra un aviso relacionado con la variable local capturada por la lambda.

## 14.1. Qué problema observa el profesor

- La variable `veces` se ha declarado **fuera** de la lambda.
- Se intenta **cambiar su valor dentro** de esa lambda.
- El entorno de Java pide que la variable local utilizada desde la lambda no cambie de esa forma.

Durante la explicación se utiliza la expresión «operación atómica» para describir el obstáculo. **Esa expresión es una simplificación oral imprecisa** para este caso; lo que permite identificar la demostración es el problema de **modificar una variable local capturada** por una lambda.

El profesor no desarrolla formalmente la solución mediante mecanismos de concurrencia o contadores especiales y **no quiere que el alumnado los utilice aquí**.

## 14.2. Decisión pedagógica de la clase

La recomendación inmediata es:

1. Resolver el recuento tradicionalmente con `for` o `for-each`, que ya se domina.
2. Aprender a leer otra solución utilizando un **stream**.

No se exige reescribir forzosamente todo el programa utilizando lambdas.

# 15. Introducción práctica a los streams

Esta es la primera explicación práctica extensa de **streams** que se conserva en los dos archivos nuevos.

## 15.1. La imagen que utiliza el profesor

El profesor imagina una colección de números, por ejemplo:

```text
[4, 9, 10, 8, -4, 5]
```

Para explicar `stream()`, representa la idea como si se trabajase con **una copia de los elementos**, sobre la que se aplican operaciones sin cambiar directamente el contenido original.

```text
Colección original
[4, 9, 10, 8, -4, 5]
         |
         | stream()
         v
Secuencia de elementos para operar
         |
         | filter(...)
         v
Elementos que cumplen la condición
         |
         | count()
         v
Cantidad de coincidencias
```

**Matiz de fidelidad:** «hacer una copia» es la analogía que utiliza en clase para introducir el flujo. La grabación **no explica el funcionamiento interno** ni demuestra que se cree una segunda lista materializada por cada operación. El sentido práctico del ejemplo es **procesar los elementos y encadenar operaciones**.

## 15.2. Obtener un stream

```java
temperaturas.stream()
```

El profesor muestra que sobre el resultado empiezan a aparecer otros métodos.

## 15.3. Operaciones mencionadas

En el desplegable de IntelliJ se alude a varias capacidades, entre ellas:

- filtrar elementos con `filter`;
- contar con `count`;
- localizar coincidencias;
- consultar el primero;
- ordenar;
- transformar elementos;
- obtener una lista a partir de los resultados;
- analizar propiedades como máximo, mínimo y media después de las conversiones correspondientes.

**No se desarrolla el funcionamiento detallado de todas ellas.** La explicación se centra en `filter`, `count` y, después, `mapToDouble` y `average`.

# 16. Filtrar con `filter` y contar con `count`

El objetivo es calcular cuántas temperaturas son iguales a una temperatura buscada.

## 16.1. Primer método: `filter`

```java
temperaturas.stream().filter(elemento -> elemento == buscada)
```

**Qué hace la condición:** examina cada valor y decide si se conserva en el resultado del filtrado.

- Si la condición da `true`, ese elemento pasa el filtro.
- Si da `false`, no pasa el filtro.

**No se debe confundir con `removeIf`:**

- `filter` **selecciona** elementos en el procesamiento del stream.
- `removeIf` **borra** elementos de la lista original que cumplen la condición.

## 16.2. `Predicate` y método `test`

El profesor vuelve a mostrar cómo un método puede solicitar un predicado. En el caso de `filter`, la lógica del predicado responde a otra finalidad: **conservar en el resultado los elementos que satisfacen la condición**.

Forma conceptual extensa:

```java
temperaturas.stream().filter(new Predicate<Double>() {
    @Override
    public boolean test(Double elemento) {
        return elemento == buscada;
    }
});
```

Forma abreviada:

```java
temperaturas.stream().filter(elemento -> elemento == buscada);
```

La lambda resulta especialmente breve porque la comparación ya produce un booleano y, al haber una única expresión, no es necesario escribir llaves ni `return`.

## 16.3. Añadir `count()`

El profesor quiere **el número de coincidencias**, no una nueva lista para mostrar.

Se encadenan las operaciones:

```java
long veces = temperaturas.stream()
        .filter(elemento -> elemento == buscada)
        .count();
```

**Paso a paso:**

1. `temperaturas.stream()` proporciona una secuencia para procesar.
2. `filter(...)` selecciona los valores que coinciden con `buscada`.
3. `count()` indica cuántos elementos cumplen esa condición.
4. El resultado se guarda en `veces`.

La clase compara este procedimiento con el recuento manual mediante un bucle y un contador.

## 16.4. Ejemplo completo de búsqueda con stream

```java
public static void buscarTemperatura(double buscada) {
    long veces = temperaturas.stream()
            .filter(elemento -> elemento == buscada)
            .count();

    if (veces > 0) {
        System.out.println("La temperatura " + buscada
                + " aparece " + veces + " veces");
    } else {
        System.out.println("No hay temperatura registrada con valor " + buscada);
    }
}
```

La lógica final responde al mismo enunciado que la versión tradicional.

## 16.5. Por qué el profesor muestra ambas formas

El profesor afirma que en el trabajo profesional se encontrarán expresiones compactas con operaciones encadenadas. Sin embargo, indica que **en este momento es normal que resulten difíciles** y que el objetivo es acostumbrarse a leerlas gradualmente.

**No sustituye la obligación de comprender el algoritmo manual.** Se muestran dos escrituras para el mismo problema, una más explícita y otra más compacta.

# 17. Opción 5: mostrar el máximo y el mínimo

El ejercicio requiere mostrar **los extremos de las temperaturas registradas**.

El profesor propone una estrategia directa:

1. **Ordenar** la lista.
2. Consultar el **primer** elemento.
3. Consultar el **último** elemento.

## 17.1. Por qué se ordena dentro de la opción

No hay que exigir al usuario que haya elegido antes la opción 3. Si el usuario solicita los extremos directamente, **el programa debe realizar los pasos que necesite por sí mismo**.

Este punto se recalca durante la corrección.

## 17.2. Reconstrucción del método

```java
public static void mostrarExtremos() {
    Collections.sort(temperaturas);

    System.out.println("Mínima: " + temperaturas.getFirst());
    System.out.println("Máxima: " + temperaturas.getLast());
}
```

El nombre exacto del método varía en el discurso entre «ordenar», «máximo y mínimo» y «extremos». El comportamiento que sí queda claro es **ordenar y consultar ambos extremos**.

## 17.3. Comprobación conceptual

Si la lista contiene:

```text
[4.0, -7.0, 12.0, 3.0]
```

Después de ordenarla:

```text
[-7.0, 3.0, 4.0, 12.0]
```

Por tanto:

```text
Primera temperatura: -7.0
Última temperatura:  12.0
```

## 17.4. Caso no resuelto expresamente en la grabación

El método anterior supone **que hay al menos una temperatura**. No se registra cómo se controló la opción cuando la lista está vacía. No se atribuye al profesor una validación de ese caso que no aparece en el audio.

# 18. Opción 6: calcular la media

El profesor comienza con el procedimiento tradicional para que se vea el proceso matemático antes de la versión mediante stream.

## 18.1. Qué datos se necesitan

Para calcular una media de varias temperaturas:

```text
Media = suma de las temperaturas / cantidad de temperaturas
```

Por tanto, se necesita:

- Un **acumulador** para la suma.
- Una forma de **recorrer** todos los valores.
- El **tamaño** de la lista para saber entre cuántos valores se divide.

## 18.2. Inicializar el acumulador

```java
double suma = 0;
```

Empieza en cero porque todavía no se ha sumado ninguna temperatura.

## 18.3. Recorrer y acumular

```java
for (Double temperatura : temperaturas) {
    suma += temperatura;
}
```

En cada vuelta se agrega al total la temperatura actual.

Ejemplo:

```text
Temperaturas: [4.0, 8.0, -3.0]

Inicio: suma = 0
Vuelta 1: suma = 0 + 4 = 4
Vuelta 2: suma = 4 + 8 = 12
Vuelta 3: suma = 12 + (-3) = 9
```

## 18.4. Dividir entre la cantidad de elementos

```java
double media = suma / temperaturas.size();
```

Con el ejemplo anterior:

```text
Suma = 9
Cantidad = 3
Media = 9 / 3 = 3
```

## 18.5. Método completo en la forma tradicional

```java
public static void calcularMedia() {
    double suma = 0;

    for (Double temperatura : temperaturas) {
        suma += temperatura;
    }

    double media = suma / temperaturas.size();
    System.out.println("La media es: " + media);
}
```

**Esta es la resolución que la transcripción permite reconstruir de manera completa.** Se corresponde con el contenido del `for-each`, el acumulador y la división que desarrolla el profesor.

**Caso pendiente:** si la lista está vacía, la grabación no documenta una validación previa a la división entre la cantidad de elementos. Conviene reconocer ese límite al estudiar el ejemplo.

# 19. `mapToDouble` y `average`

Después del procedimiento manual, el profesor introduce una manera compacta mediante streams.

## 19.1. Por qué transformar a una secuencia numérica

En el audio se compara una secuencia de objetos con una secuencia preparada para operar con números.

El profesor imagina que, en lugar de un simple conjunto de temperaturas numéricas, se estuviera trabajando con otros tipos de elementos. Para poder realizar sumas, medias o cálculos de extremos, interesa obtener **los valores numéricos relevantes**.

La operación que muestra es:

```java
mapToDouble(...)
```

## 19.2. Aplicación sobre la lista de temperaturas

Una reconstrucción de lo mostrado es:

```java
temperaturas.stream()
        .mapToDouble(temperatura -> temperatura)
```

**Paso a paso:**

1. `temperaturas.stream()` inicia el procesamiento de los elementos.
2. `mapToDouble(...)` indica qué valor numérico se obtiene de cada elemento.
3. En este caso cada elemento ya representa una temperatura, por lo que se devuelve su propio valor.

El profesor señala que en este ejemplo la transformación puede parecer redundante porque **la lista ya contiene números**; la presenta para enseñar el funcionamiento de esa fase del procesamiento.

## 19.3. Obtener la media con `average`

A continuación se introduce:

```java
temperaturas.stream()
        .mapToDouble(temperatura -> temperatura)
        .average()
```

El significado de `average` es calcular la media de los valores numéricos que han llegado a esa fase.

## 19.4. Qué no queda completo en la grabación

El docente afirma que con esa cadena se obtiene la media en muy pocas instrucciones, pero **el audio no conserva claramente cómo extrae o presenta el valor retornado por `average()`**.

Para estudiar esta clase, lo que hay que fijar sin inventar una línea adicional es:

```text
Colección de temperaturas
         ↓ stream()
Procesamiento de elementos
         ↓ mapToDouble(...)
Secuencia de valores double
         ↓ average()
Resultado del cálculo de la media
```

La sintaxis del resultado concreto no se atribuye literalmente al profesor. En Java, `average()` no devuelve directamente un `double` simple, sino un resultado que puede representar una media presente o ausente; ese detalle **no se desarrolla en el fragmento conservado**. Por tanto, la forma tradicional del apartado anterior es la versión completa y directamente interpretable para el estudio de esta sesión.

# 20. Opción 7: limpiar temperaturas negativas

La opción de limpieza consiste en **eliminar de la colección todas las temperaturas inferiores a cero**.

El profesor compara varias estrategias, precisamente porque en la corrección previa se había detectado un fallo al borrar mientras se recorría.

## 20.1. Primera idea: `for` con `remove`

Un planteamiento inicial sería comprobar cada posición y borrarla si contiene un número negativo:

```java
for (int i = 0; i < temperaturas.size(); i++) {
    if (temperaturas.get(i) < 0) {
        temperaturas.remove(i);
    }
}
```

El profesor advierte que se puede **saltar valores** como consecuencia del cambio de tamaño y de los desplazamientos de índices.

## 20.2. Segunda idea: `for-each` con `remove`

Tampoco conviene utilizar directamente el borrado estructural de la misma lista dentro del `for-each`, porque se modifica mientras se está iterando.

La grabación nombra una excepción de manera inconsistente. El problema que se identifica con seguridad es **modificar estructuralmente la colección que está siendo recorrida**.

## 20.3. Solución que desarrolla: `removeIf`

```java
temperaturas.removeIf(temperatura -> temperatura < 0);
```

**Interpretación de la condición:**

- Si la temperatura actual es negativa, `temperatura < 0` devuelve `true` y se elimina.
- Si es cero o positiva, devuelve `false` y permanece en la lista.

Ejemplo:

```text
Antes:    [-4.0, 6.0, -10.0, 2.0, 0.0]
Después:  [6.0, 2.0, 0.0]
```

La simplicidad de esta solución es uno de los objetivos de la explicación: **no escribir el recorrido manual cuando la operación que necesitamos ya existe**.

## 20.4. Variante explicativa con streams

El profesor también plantea **filtrar los valores que se quieren conservar**, en lugar de eliminarlos uno a uno de la lista.

La estructura conceptual es:

```java
temperaturas.stream()
        .filter(temperatura -> temperatura >= 0)
```

Con el criterio «eliminar negativos», los valores que se conservan son **los mayores o iguales que cero**.

**Importante:** el audio utiliza oralmente en un momento «mayor que cero» para la variante con stream. Eso excluiría también el `0`, aunque el enunciado consiste en eliminar **negativos**. Esta diferencia no se debe ocultar: `> 0` conserva solo positivos estrictos; `>= 0` conserva positivos y cero. La segunda condición es la que corresponde literalmente al objetivo de borrar únicamente negativos.

## 20.5. Transformar el filtrado en una colección

El docente menciona que un stream puede convertirse en una lista, pero aparece una discusión de tipos entre `List` y `ArrayList` y **el audio no conserva de forma segura la asignación completa utilizada**.

Lo esencial que se explica es:

- **`removeIf` actúa sobre la lista original** eliminando elementos.
- **`filter` selecciona elementos** dentro del procesamiento del stream.
- Para sustituir la colección original por el resultado filtrado, haría falta **guardar o asignar ese resultado** mediante una construcción adecuada.

La sesión recomienda `removeIf` como resolución sencilla de la opción 7. No se inventa aquí un cast ni una reasignación cuya corrección no puede verificarse con la transcripción.

# 21. Opción 8: salir del programa

La última opción es **salir**.

El profesor pregunta expresamente si tiene sentido crear un método auxiliar para esa acción tan sencilla y concluye que **no hace falta crear un método específico** solo por completar el mismo esquema del resto de opciones.

Se muestra un mensaje de despedida:

```java
System.out.println("Saliendo");
```

El método de repetición del menú no se conserva completo en el audio, pero el `switch` de ocho opciones y la necesidad de salir quedan claros. En el ejemplo integrado del apartado siguiente se utiliza un `do while` de menú coherente con las estructuras ya estudiadas.

# 22. Código integrado del ejercicio de temperaturas

Este programa es una **reconstrucción docente integradora**, no un volcado literal del código que se visualizaba en IntelliJ. Reúne las ocho operaciones, mantiene la lista estática, realiza las lecturas desde `main` y utiliza métodos auxiliares para los procesos de varias instrucciones.

La solución principal se expresa con `for-each`, `Collections.sort` y `removeIf`, es decir, las operaciones cuyo comportamiento se puede reconstruir completamente de la transcripción. La solución con streams para contar coincidencias se ha desarrollado por separado en el apartado 16.

```java
import java.util.ArrayList;
import java.util.Collections;
import java.util.Scanner;

public class GestorTemperaturas {

    static ArrayList<Double> temperaturas = new ArrayList<>();

    public static void main(String[] args) {
        Scanner lector = new Scanner(System.in);
        int opcion;

        do {
            System.out.println("\nGESTOR DE TEMPERATURAS");
            System.out.println("1. Añadir temperatura");
            System.out.println("2. Mostrar temperaturas");
            System.out.println("3. Ordenar temperaturas");
            System.out.println("4. Buscar temperatura");
            System.out.println("5. Mostrar máxima y mínima");
            System.out.println("6. Calcular media");
            System.out.println("7. Eliminar negativas");
            System.out.println("8. Salir");
            System.out.print("Elige una opción: ");
            opcion = lector.nextInt();

            switch (opcion) {
                case 1 -> {
                    System.out.print("Temperatura a registrar: ");
                    double temperatura = lector.nextDouble();
                    anadirTemperatura(temperatura);
                }
                case 2 -> temperaturas.forEach(
                        temperatura -> System.out.println(temperatura));
                case 3 -> {
                    Collections.sort(temperaturas);
                    System.out.println("Temperaturas ordenadas");
                }
                case 4 -> {
                    System.out.print("Temperatura que buscas: ");
                    double buscada = lector.nextDouble();
                    buscarTemperatura(buscada);
                }
                case 5 -> mostrarExtremos();
                case 6 -> calcularMedia();
                case 7 -> {
                    temperaturas.removeIf(temperatura -> temperatura < 0);
                    System.out.println("Temperaturas negativas eliminadas");
                }
                case 8 -> System.out.println("Saliendo");
                default -> System.out.println("Opción no válida");
            }
        } while (opcion != 8);

        lector.close();
    }

    public static void anadirTemperatura(double temperatura) {
        temperaturas.add(temperatura);
        System.out.println("Temperatura agregada correctamente");
    }

    public static void buscarTemperatura(double buscada) {
        int veces = 0;

        for (Double temperatura : temperaturas) {
            if (temperatura == buscada) {
                veces++;
            }
        }

        if (veces > 0) {
            System.out.println("La temperatura " + buscada
                    + " aparece " + veces + " veces");
        } else {
            System.out.println("No hay temperatura registrada con ese valor");
        }
    }

    public static void mostrarExtremos() {
        Collections.sort(temperaturas);
        System.out.println("Mínima: " + temperaturas.getFirst());
        System.out.println("Máxima: " + temperaturas.getLast());
    }

    public static void calcularMedia() {
        double suma = 0;

        for (Double temperatura : temperaturas) {
            suma += temperatura;
        }

        double media = suma / temperaturas.size();
        System.out.println("La media es: " + media);
    }
}
```

## 22.1. Cómo se distribuyen las responsabilidades

| Parte del programa | Responsabilidad |
|---|---|
| Variable estática `temperaturas` | Mantener los valores accesibles a los métodos de la clase. |
| `main` | Mostrar opciones, leer datos y decidir qué operación ejecutar. |
| `anadirTemperatura` | Añadir el valor recibido. |
| `buscarTemperatura` | Contar coincidencias y presentar el resultado. |
| `mostrarExtremos` | Ordenar y consultar mínimo y máximo. |
| `calcularMedia` | Acumular y dividir entre el tamaño. |
| `removeIf` en el `case 7` | Borrar los valores negativos sin escribir el recorrido manual. |

## 22.2. Ejecución razonada

Ejemplo de secuencia:

```text
1 -> añadir 4
1 -> añadir -3
1 -> añadir 4
1 -> añadir 9

2 -> mostrar: 4, -3, 4, 9
4 -> buscar 4: 2 coincidencias
6 -> media: (4 - 3 + 4 + 9) / 4 = 3.5
5 -> mínimo -3; máximo 9
7 -> elimina -3
2 -> mostrar: 4, 4, 9
```

La secuencia permite comprobar que las operaciones comparten **la misma lista** y que las opciones posteriores trabajan con el estado que han dejado las anteriores.

## 22.3. Límites que no se resuelven en la grabación

El ejemplo integrado responde al flujo **normal** descrito durante la corrección. No conviene interpretarlo como una solución validada para todas las entradas posibles:

- Si se elige **mostrar extremos** antes de añadir ningún dato, no se ha documentado en la clase cómo evitar acceder al primero o último de una lista vacía.
- Si se elige **calcular media** sobre una lista vacía, falta definir cómo se desea informar de una media sin datos.
- Si el usuario introduce texto donde se espera `nextInt()` o `nextDouble()`, no se ha descrito aquí la gestión del error.
- El código utiliza `getFirst()` y `getLast()`, métodos vistos por el profesor en el entorno de Java empleado en clase.

**Estas situaciones se registran como puntos de comprobación; no se atribuye a la transcripción una validación inexistente.**

# 23. Nuevo ejercicio propuesto: gestor de notas

Al terminar la corrección, el profesor plantea **un nuevo ejercicio para realizar de cara al jueves**: construir un **gestor de notas**.

La transcripción conserva el objetivo general, las operaciones y varios ejemplos de uso. No incluye su resolución.

## 23.1. Qué debe guardar el programa

No basta con almacenar una nota suelta: cada calificación debe estar asociada a **la asignatura a la que pertenece**.

Ejemplos comentados:

```text
Programación       -> 7
Sistemas           -> 4
Lenguaje de Marcas -> 3
Bases de Datos     -> 6
```

Cada registro necesita, por tanto, **dos datos**:

1. La asignatura.
2. La nota.

El profesor propone pensar en un **`ArrayList` cuyos elementos sean arrays de dos posiciones**, una para la asignatura y otra para la nota, sin desarrollar todavía el código de implementación de esa estructura.

```text
ArrayList de registros
    |
    +-- [Asignatura 1, Nota 1]
    +-- [Asignatura 2, Nota 2]
    +-- [Asignatura 3, Nota 3]
    +-- ...
```

**Advertencia:** la transcripción no deja claro **qué tipo Java exacto** se utilizará para guardar ambos valores dentro de cada array, que son de naturaleza distinta. No se inventa una declaración definitiva ni se presenta como resuelto ese diseño.

## 23.2. Operaciones solicitadas

Las funciones mencionadas son:

| Función | Qué debe hacer |
|---|---|
| **Añadir nota** | Pedir asignatura y calificación, y guardar ambas asociadas. |
| **Ver todas las notas** | Mostrar cada asignatura con su nota. |
| **Consultar una asignatura** | Solicitar su nombre y presentar la nota correspondiente. |
| **Calcular la media** | Obtener la media de las notas registradas. |
| **Ver suspensos** | Mostrar las asignaturas cuyas notas son suspensas. |
| **Aplicar factor de corrección** | Modificar las notas suspensas sumándoles un punto, según el ejemplo. |
| **Modificar una nota** | Localizar la asignatura e introducir una nueva calificación. |

La enumeración oral del menú aparece deformada, por lo que **no se fija aquí una numeración completa y cerrada de todas las opciones**.

## 23.3. Ejemplo: añadir nota

El usuario elige añadir e introduce:

```text
Asignatura: Programación
Nota: 7
```

El sistema debe guardar ambos datos relacionados. La clave lógica del ejercicio es **no perder la correspondencia entre asignatura y calificación**.

## 23.4. Ejemplo: mostrar todas las notas

Si se registran las cuatro asignaturas anteriores, el programa debe poder mostrar:

```text
Programación: 7
Sistemas: 4
Lenguaje de Marcas: 3
Bases de Datos: 6
```

Esto exige recorrer la colección y consultar las dos partes de cada registro.

## 23.5. Ejemplo: consultar por asignatura

El usuario escribe `Programación` y el sistema localiza la nota que se había guardado junto a esa asignatura:

```text
La nota de Programación es 7
```

La clase no desarrolla un algoritmo definitivo de búsqueda ni la comparación exacta de nombres; el ejercicio queda propuesto.

## 23.6. Ejemplo: media general

El programa también debe ser capaz de mostrar una media de las calificaciones registradas.

En la exposición se oye una media de ejemplo, pero el valor pronunciado **no se corresponde con claridad con las cuatro notas citadas a continuación**, de modo que no se atribuye ese resultado como cálculo comprobado.

La idea exigida es la misma lógica ya practicada con temperaturas:

```text
Suma de todas las notas / cantidad de notas
```

## 23.7. Ejemplo: mostrar suspensos

Con las notas de ejemplo:

```text
Programación: 7
Sistemas: 4
Lenguaje de Marcas: 3
Bases de Datos: 6
```

las asignaturas suspensas que menciona el profesor son **Sistemas** y **Lenguaje de Marcas**.

## 23.8. Ejemplo: aplicar un factor de corrección

En el ejemplo oral, la corrección consiste en **sumar un punto a las notas suspensas**.

```text
Sistemas:           4 -> 5
Lenguaje de Marcas:  3 -> 4
```

El audio contiene una frase que parece afirmar que la nota `3` seguiría siendo `3` después de sumar un punto. Es una **inconsistencia aritmética del fragmento**, por lo que se conserva la regla expresada («sumar uno») y se indica aquí su resultado coherente.

No se especifica en la transcripción una política general para notas cercanas al límite superior ni otras reglas de corrección.

## 23.9. Ejemplo: modificar una nota

El usuario puede solicitar modificar una asignatura concreta:

```text
Asignatura: Programación
Nota anterior: 7
Nota nueva: 6
```

Al finalizar, la nota asociada a Programación debe pasar a ser `6`, sustituyendo el valor anterior.

## 23.10. Qué razonamiento exige el nuevo ejercicio

La propuesta combina contenidos ya introducidos:

- `ArrayList` como estructura dinámica.
- Arrays de dos posiciones como idea para representar cada registro.
- Recorridos para mostrar y buscar información.
- Condiciones para identificar suspensos.
- Cálculo de medias mediante acumulador y cantidad.
- Modificación de valores existentes.
- Organización de un menú con varias acciones.

**El profesor no resuelve el gestor de notas durante esta grabación.** Los apuntes conservan el enunciado y sus ejemplos sin inventar una solución completa.

---

# 24. Conceptos que debo saber explicar

1. **Ordenación natural:** qué se entiende por orden numérico o alfabético en los ejemplos de clase.
2. **Ordenación personalizada:** por qué ordenar cadenas por longitud necesita un criterio diferente del alfabético.
3. **`Collections.sort` y `lista.sort`:** qué recibe cada forma y que la lista queda ordenada.
4. **`Comparator`:** qué papel desempeña, qué son los dos elementos comparados y qué representa el signo del resultado.
5. **Comparación por longitud:** cómo utilizar `length()` para decidir qué palabra se coloca antes.
6. **`for` frente a `for-each`:** diferencia entre obtener una posición y recibir directamente el valor.
7. **Borrado durante un recorrido:** por qué la reducción del tamaño puede desplazar índices y omitir elementos.
8. **`removeIf`:** cómo decide qué elementos elimina y por qué recibe un predicado.
9. **`Predicate` y `test`:** interpretación del resultado booleano de una prueba.
10. **`main` como zona de entrada:** por qué el profesor prefiere pedir los datos en `main` y pasarlos a los métodos.
11. **Variable estática de la lista:** cómo permite que los distintos métodos estáticos operen sobre el mismo conjunto de temperaturas.
12. **Parámetros de un método:** por qué añadir o buscar necesitan recibir un valor, mientras otras acciones operan sobre la lista completa.
13. **Contar coincidencias:** por qué se inicializa un contador a cero y no se hace `break` tras la primera coincidencia.
14. **Contador y lambda:** qué problema aparece al intentar incrementar una variable local externa desde `.forEach(...)`.
15. **Stream:** comprender la secuencia conceptual «colección → operación → resultado» utilizada en clase.
16. **`filter`:** qué significa conservar solo los elementos cuya condición es verdadera.
17. **`count`:** cómo obtener la cantidad de elementos seleccionados por un filtro.
18. **Diferencia entre `filter` y `removeIf`:** seleccionar resultados frente a eliminar de la colección original.
19. **Máximo y mínimo:** por qué la opción debe ordenar si necesita consultar extremos, aunque el usuario no haya ordenado antes.
20. **Media:** explicar paso a paso la suma de todos los valores y la división entre su cantidad.
21. **`mapToDouble` y `average`:** reconocer qué operación representa cada etapa de la cadena.
22. **Limpieza de negativos:** elegir correctamente `temperatura < 0` y distinguirla de `temperatura <= 0`.
23. **Gestor de notas:** entender qué información se almacena y qué exige cada operación, sin confundir la propuesta con una solución explicada por el profesor.

# 25. Sintaxis que debo saber escribir

| Objetivo | Sintaxis Java |
|---|---|
| Lista de temperaturas | `ArrayList<Double> temperaturas = new ArrayList<>();` |
| Importar `Collections` | `import java.util.Collections;` |
| Orden natural | `Collections.sort(temperaturas);` |
| Invertir orden | `Collections.reverse(temperaturas);` |
| Ordenar con criterio | `lista.sort(comparador);` |
| Método del comparador | `public int compare(String a, String b)` |
| Longitud de `String` | `palabra.length()` |
| Leer temperatura | `double t = lector.nextDouble();` |
| Añadir temperatura | `temperaturas.add(t);` |
| Mostrar elementos | `temperaturas.forEach(t -> System.out.println(t));` |
| Recorrer por posiciones | `for (int i = 0; i < temperaturas.size(); i++)` |
| Recorrer por valores | `for (Double t : temperaturas)` |
| Consultar una posición | `temperaturas.get(i)` |
| Consultar primero | `temperaturas.getFirst()` |
| Consultar último | `temperaturas.getLast()` |
| Acumular valores | `suma += t;` |
| Contar coincidencia | `if (t == buscada) { veces++; }` |
| Eliminar negativos | `temperaturas.removeIf(t -> t < 0);` |
| Crear stream | `temperaturas.stream()` |
| Filtrar | `.filter(t -> t == buscada)` |
| Contar filtrados | `.count()` |
| Contar en una expresión | `temperaturas.stream().filter(t -> t == buscada).count()` |
| Transformar a numéricos | `.mapToDouble(t -> t)` |
| Solicitar cálculo de media de stream | `.average()` |

## 25.1. Esquema de predicado con varias instrucciones

```java
temperaturas.removeIf(t -> {
    boolean negativa = t < 0;
    return negativa;
});
```

El profesor destaca que al utilizar llaves y un cuerpo con varias instrucciones se hace explícito el `return` del predicado. Para una única expresión booleana basta:

```java
temperaturas.removeIf(t -> t < 0);
```

## 25.2. Método que recibe el dato como parámetro

```java
public static void anadirTemperatura(double temperatura) {
    temperaturas.add(temperatura);
}
```

La cabecera sirve de recordatorio de que el tipo y nombre del parámetro van **entre paréntesis**, y de que `main` debe pasar el valor al llamar al método.

# 26. Errores frecuentes mencionados en clase

| Error o confusión | Causa explicada | Forma correcta de razonarlo |
|---|---|---|
| Ordenar cadenas alfabéticamente cuando se pedía por longitud | Se utiliza la ordenación natural para un criterio distinto. | Proporcionar un `Comparator` con la comparación requerida. |
| Pensar que `sort` devuelve otra lista ya ordenada | Se confunde el efecto del método con su retorno. | Ordenar la lista y después mostrar la misma lista. |
| Olvidar el caso de igualdad al comparar | Solo se piensa en «mayor» o «menor». | La comparación debe poder tratar también elementos equivalentes. |
| Salirse de los índices de la lista | El recorrido continúa más allá del tamaño. | Utilizar `i < lista.size()` y acceder con `get(i)`. |
| Esperar que el `for-each` entregue índices | Se confunde iteración con indexación explícita. | Si se necesita una posición, usar `for` indexado o un contador manual. |
| Borrar dentro de un `for` y saltarse negativos | La lista se desplaza y la variable `i` continúa avanzando. | Reconocer el desplazamiento y utilizar la operación de borrado adecuada. |
| Borrar directamente dentro del `for-each` | Se modifica estructuralmente la colección que se está recorriendo. | Utilizar `removeIf` para el borrado condicionado mostrado. |
| Pensar que `removeIf` borra cuando devuelve `false` | Se invierte el significado del predicado. | `true` identifica los elementos que se eliminan. |
| Pensar que `filter` borra los elementos originales | Se confunde filtrar resultados con modificar la lista. | `filter` selecciona; `removeIf` elimina. |
| Poner `break` al encontrar la primera temperatura buscada | Se resuelve «existe» en vez de «cuántas veces aparece». | Recorrer toda la lista y contar todas las coincidencias. |
| Incrementar `veces` desde una lambda sobre una variable local externa | La captura de esa variable impide reasignarla así. | Usar un bucle tradicional o una operación de recuento como `count()`. |
| Crear un método para una instrucción trivial sin necesidad | Se fragmenta el programa sin ganar claridad. | Extraer métodos cuando aporten una responsabilidad útil. |
| Pedir datos del usuario dentro de todos los métodos | Se mezcla interacción con usuario y procesamiento. | Leer en `main` y pasar los parámetros a la lógica. |
| Mostrar extremos suponiendo que ya se ordenó antes | Se depende de una opción previa del menú. | La opción de extremos debe preparar los datos que necesita. |
| Calcular media sin contar elementos | Solo se dispone de la suma. | Dividir por el tamaño de la lista. |
| Utilizar `> 0` para «eliminar negativos» | Se excluye también el cero. | Para conservar el cero usar `>= 0`, o eliminar con `< 0`. |
| Confundir el enunciado del gestor de notas con la solución | La grabación presenta el ejercicio, no su resolución. | Conservar requisitos y ejemplos sin inventar implementación. |

# 27. Puntos que la transcripción no conserva correctamente

1. **Inicio de la clase perdido.** La grabación arranca directamente con la comparación de longitudes y no permite conocer cómo se había construido la lista de palabras ni la explicación inmediatamente anterior.
2. **Código visual no disponible.** Se escucha al profesor modificar código en IntelliJ, pero no se conserva la pantalla. Por ello las firmas y programas escritos aquí son reconstrucciones y no citas literales de cada pulsación.
3. **Comparador con retornos `1` y `-1`.** No se registra cómo maneja las comparaciones iguales. Se incorpora el caso `0` en los ejemplos para no presentar como completo un criterio que el audio deja incompleto.
4. **Comentarios desordenados durante la revisión de ejercicios.** Hay repeticiones, correcciones de alumnos y referencias a variables o pantallas que no se pueden reconstruir con seguridad. Se conserva la conclusión docente: los problemas de índices y de eliminación durante recorridos.
5. **Excepción al modificar una lista durante una iteración.** El profesor pronuncia distintas denominaciones (incluida una semejante a «Stack Overflow») que no corresponden de forma fiable con la situación demostrada. El concepto verificable es que modificar una colección durante cierto tipo de iteración puede provocar una excepción; no se atribuye un diagnóstico exacto de consola inexistente en el audio.
6. **«Operaciones atómicas» y lambdas.** La explicación oral relaciona el aviso de IntelliJ con «atomicidad». El ejemplo permite identificar con mayor precisión la restricción relativa a **cambiar una variable local capturada por la lambda**. No se añade un tema nuevo de atomicidad o concurrencia.
7. **Streams descritos como copias.** El profesor utiliza una analogía para facilitar su comprensión. No se desarrolla una descripción completa de la implementación de streams; los apuntes la mantienen como imagen conceptual, no como regla sobre listas duplicadas.
8. **`count()` y tipos numéricos.** La grabación contiene frases confusas sobre castear el resultado del recuento a `int` o `double`. Lo que sí queda claro es la operación **filtrar y contar coincidencias**. Los ejemplos usan `long` para representar el resultado de `count()`.
9. **`average()` no queda completo.** Se explica el encadenamiento `stream` → `mapToDouble` → `average`, pero no cómo se extrae ni cómo se imprime correctamente el valor retornado. No se atribuye al profesor una resolución exacta del caso sin elementos.
10. **Reasignación tras filtrar con stream.** El audio menciona una conversión o cast entre `List` y `ArrayList`, pero no permite reconstruir una línea de código segura. Se deja como planteamiento conceptual, sin inventar una operación final.
11. **Contradicción sobre conservar ceros.** La finalidad de la limpieza es eliminar negativos; en la variante con stream se oye también «quedarse con mayores que cero». Se señala la diferencia de comportamiento (`> 0` frente a `>= 0`) para no hacer desaparecer el cero sin advertirlo.
12. **Menú reconstruido.** Se identifican claramente las ocho opciones del gestor de temperaturas, pero no se conserva un bloque completo de `main`. El `do while` y el `switch` del ejemplo integrado recrean el funcionamiento descrito con estructuras ya trabajadas.
13. **Variable estática y nombres de métodos.** Se comprende la idea de usar una colección compartida y métodos estáticos, pero el nombre exacto de algunas funciones cambia durante la explicación. Se utilizan nombres descriptivos consistentes.
14. **Casos de lista vacía o entradas inválidas.** No se documenta cómo se resolvieron; no se presentan como validados por el profesor.
15. **Media numérica del gestor de notas.** La cifra oral de ejemplo no queda asociada con seguridad a las notas citadas. No se fija un resultado erróneo como referencia.
16. **Corrección de suspensos con un punto adicional.** Se escucha que una nota `3` continuaría en `3`, a pesar de afirmar que se suma un punto. Se registra la regla y se señala que la consecuencia coherente es `3 → 4`.
17. **Estructura del gestor de notas.** Se propone `ArrayList` con arrays de dos posiciones para asignatura y nota; no se conserva el tipo concreto de esos arrays ni una solución ejecutable. Ese diseño **queda como ejercicio**.
18. **Conversaciones no docentes del final.** Se excluyen por no aportar teoría, sintaxis ni requisitos del ejercicio.

---

**Eje de estudio de esta sesión:** antes de escribir código, identificar la operación exacta que se necesita: **ordenar con un criterio, contar coincidencias, obtener extremos, calcular una media o eliminar según una condición**. Después decidir si es más claro escribir el algoritmo con las estructuras de control conocidas o utilizar el método de colección que realiza esa operación. Las versiones con streams se introducen aquí para comprender su lectura, sin sustituir la explicación paso a paso de las soluciones tradicionales.

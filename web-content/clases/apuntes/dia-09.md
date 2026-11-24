# Apuntes completos — Día 9

> **Procedencia:** apuntes reconstruidos a partir de las clases, aportados al proyecto. Se conservan las advertencias de fidelidad y las ampliaciones que ya estaban etiquetadas. Se han anonimizado identificadores personales cuando procede.

[Volver a la ficha de estudio](../dia-09.md)

## Arrays, `ArrayList`, `HashMap`, genéricos y primeras funciones lambda

> **Fuente exclusiva:** primera transcripción aportada (la grabación de clase). El número de día se asigna por continuidad con los apuntes del día 8; la grabación no incorpora una fecha identificable.
>
> **Criterio de reconstrucción:** se recoge el contenido docente en el orden lógico de la explicación, con pasos y ejemplos Java reconstruidos a partir de las operaciones descritas. **Los fragmentos de código no son copias literales de la pantalla del profesor**, que no se conserva en el audio. Se corrigen nombres reconocibles como `ArrayList`, `HashMap`, `get`, `set`, `add`, `remove`, `size`, `isEmpty`, `Consumer`, `forEach` y `System.out.println`. No se incorpora teoría del libro ni contenido nuevo. Cuando hay una contradicción oral o un detalle que no puede verificarse en la grabación, se indica.
>
> **Alcance real:** la explicación docente termina con una pausa después de presentar la referencia `System.out::println`. El resto del archivo de audio contiene principalmente conversaciones ajenas al temario; se excluyen de estos apuntes.

---

## Índice

1. [Punto de partida: los arrays](#1-punto-de-partida-los-arrays)
2. [Qué significa que una estructura sea indexada](#2-qué-significa-que-una-estructura-sea-indexada)
3. [`final` aplicado a arrays y colecciones](#3-final-aplicado-a-arrays-y-colecciones)
4. [De los arrays a las colecciones dinámicas](#4-de-los-arrays-a-las-colecciones-dinámicas)
5. [Características y sintaxis de `ArrayList`](#5-características-y-sintaxis-de-arraylist)
6. [Genéricos y tipos envolventes](#6-genéricos-y-tipos-envolventes)
7. [Comparación entre array, `ArrayList` y `HashMap`](#7-comparación-entre-array-arraylist-y-hashmap)
8. [Funcionamiento de `HashMap`: clave y valor](#8-funcionamiento-de-hashmap-clave-y-valor)
9. [Recorrer las claves o los valores de un `HashMap`](#9-recorrer-las-claves-o-los-valores-de-un-hashmap)
10. [Práctica en IntelliJ: proyecto «Colecciones»](#10-práctica-en-intellij-proyecto-colecciones)
11. [Añadir, consultar y eliminar elementos de una lista](#11-añadir-consultar-y-eliminar-elementos-de-una-lista)
12. [Cómo se desplazan los índices al borrar](#12-cómo-se-desplazan-los-índices-al-borrar)
13. [Tamaño, búsqueda y vaciado de listas](#13-tamaño-búsqueda-y-vaciado-de-listas)
14. [Recorrido con `for` y con `for-each`](#14-recorrido-con-for-y-con-for-each)
15. [Diferencia entre estructura `for-each` y método `forEach`](#15-diferencia-entre-estructura-for-each-y-método-foreach)
16. [Primera explicación de las funciones lambda](#16-primera-explicación-de-las-funciones-lambda)
17. [`Consumer`, funciones anónimas y callbacks](#17-consumer-funciones-anónimas-y-callbacks)
18. [Recorrido con `forEach` y lambda](#18-recorrido-con-foreach-y-lambda)
19. [Referencias a métodos con `::`](#19-referencias-a-métodos-con-)
20. [Otras operaciones mencionadas y contenidos aplazados](#20-otras-operaciones-mencionadas-y-contenidos-aplazados)
21. [Ejemplo de conjunto de operaciones de clase](#21-ejemplo-de-conjunto-de-operaciones-de-clase)
22. [Conceptos que debo saber explicar](#22-conceptos-que-debo-saber-explicar)
23. [Sintaxis que debo saber escribir](#23-sintaxis-que-debo-saber-escribir)
24. [Errores frecuentes y advertencias](#24-errores-frecuentes-y-advertencias)
25. [Fragmentos incompletos o imprecisos de la transcripción](#25-fragmentos-incompletos-o-imprecisos-de-la-transcripción)

---

# 1. Punto de partida: los arrays

La clase empieza repasando los **arrays** que ya se habían trabajado. La finalidad del repaso es establecer una comparación con las dos estructuras que se introducen a continuación: `ArrayList` y `HashMap`.

De un array interesa recordar dos propiedades principales:

- **Tamaño fijo.** Después de crear el array, su cantidad de posiciones no aumenta o disminuye mediante una operación de añadir o eliminar. Se pueden cambiar los valores almacenados en esas posiciones.
- **Acceso indexado.** Cada elemento ocupa una posición identificable mediante un índice, que comienza en `0`.

El profesor comenta que estas ideas sirven tanto para arrays unidimensionales como para los multidimensionales ya vistos, aunque en esta sesión la comparación se hace principalmente con estructuras de una dimensión.

Ejemplo ilustrativo del repaso:

```java
int[] numeros = {10, 20, 30};
```

Aquí el array contiene **tres posiciones**. Sus índices son `0`, `1` y `2`.

| Índice | Valor inicial |
|---:|---:|
| `0` | `10` |
| `1` | `20` |
| `2` | `30` |

Para leer un elemento:

```java
System.out.println(numeros[0]);  // 10
```

Para cambiar el valor guardado en una posición existente:

```java
numeros[0] = 99;
```

Esto **modifica el contenido**, pero **no añade una cuarta posición**.

Para conocer el tamaño:

```java
System.out.println(numeros.length);  // 3
```

El profesor contrapone posteriormente `length` con `size()`: el primero es la propiedad que se utiliza en los arrays; el segundo es el método que se utiliza para consultar cuántos elementos tiene un `ArrayList`.

# 2. Qué significa que una estructura sea indexada

Una estructura **indexada** permite hablar de posiciones concretas. El índice constituye la manera de localizar un elemento dentro de la colección.

```text
Valores:     A      B      C      D
Índices:     0      1      2      3
```

Es importante distinguir dos datos:

- **Cantidad de elementos:** en el ejemplo hay cuatro.
- **Último índice:** en el ejemplo es `3`, porque se empieza a contar desde cero.

Para recorrer esas posiciones con un `for`, el esquema es:

```java
for (int i = 0; i < numeros.length; i++) {
    System.out.println(numeros[i]);
}
```

**Paso a paso:**

1. `i` empieza en `0`: se lee el primer elemento.
2. `i` pasa a `1`: se lee el segundo.
3. `i` pasa a `2`: se lee el tercero.
4. `i` pasa a `3`, que ya no cumple `i < 3`: termina la repetición.

También se recuerda el recorrido mediante `for-each`, que no requiere escribir manualmente los índices:

```java
for (int numero : numeros) {
    System.out.println(numero);
}
```

El objetivo de este segundo recorrido es **trabajar con cada valor**. Más adelante el profesor volverá a diferenciar «acceder por índice» de «iterar elemento por elemento».

# 3. `final` aplicado a arrays y colecciones

El profesor plantea una pregunta de repaso: **¿qué sucede si se declara un array con `final`?**

La respuesta que quiere fijar es que `final` impide **reasignar la variable a otro array**, pero no impide modificar valores dentro del array que ya existe.

```java
final int[] datos = {3, 6, 9};

datos[1] = 25;  // Permitido: cambia el valor de una posición.
```

En cambio:

```java
// datos = new int[5];  // No permitido: reasigna una variable final.
```

La diferencia es fundamental:

```text
Modificar un elemento del objeto existente  -> sí
Cambiar la referencia de la variable final  -> no
```

Más adelante se repite exactamente la misma pregunta con `ArrayList`:

```java
final ArrayList<Integer> numeros = new ArrayList<>();
numeros.add(4);  // Permitido: modifica el contenido de la lista.

// numeros = new ArrayList<>(); // No permitido: intenta reasignar la variable.
```

Aquí **no se está convirtiendo todo el objeto en inmutable**. La variable sigue refiriéndose al mismo objeto, que puede cambiar internamente.

# 4. De los arrays a las colecciones dinámicas

La explicación introduce dos estructuras nuevas:

1. **`ArrayList`**: se parece al array porque permite acceder por posición, pero puede crecer o reducirse.
2. **`HashMap`**: también permite añadir y eliminar elementos, pero cada valor está asociado a una **clave**, no a una posición numérica consecutiva.

El profesor recalca que lo decisivo no es memorizar el nombre `ArrayList`: es entender **qué implica trabajar con una estructura dinámica**.

Un array creado con tres posiciones sigue teniendo tres posiciones. Una lista dinámica, en cambio, puede empezar vacía:

```text
[]
```

Añadir un elemento:

```text
[A]
```

Añadir otros dos:

```text
[A, B, C]
```

Eliminar uno:

```text
[A, C]
```

La cantidad de elementos se adapta a las operaciones realizadas.

# 5. Características y sintaxis de `ArrayList`

## 5.1. Es dinámico

Un `ArrayList` permite ir agregando o eliminando elementos durante la ejecución. Habitualmente, en los ejemplos de clase, se crea vacío y se llena posteriormente.

```java
ArrayList<String> datos = new ArrayList<>();
```

Al comenzar:

```java
datos.size();  // 0
```

Si se insertan tres valores:

```java
datos.add("Elemento 1");
datos.add("Elemento 2");
datos.add("Elemento 3");
```

la lista pasa a tener tres elementos.

## 5.2. Sigue siendo indexado

El primer elemento se encuentra en el índice `0`, el segundo en `1`, etc. La diferencia con el array está en **la notación de acceso**:

```java
// Array convencional:
numeros[0];

// ArrayList:
datos.get(0);
```

En `ArrayList` se utilizan **métodos** para muchas de las operaciones que antes se realizaban mediante corchetes.

## 5.3. Operaciones fundamentales

| Necesidad | `ArrayList` | Qué hace |
|---|---|---|
| Añadir un elemento | `datos.add(valor)` | Lo añade a la lista, normalmente al final. |
| Leer una posición | `datos.get(indice)` | Devuelve el elemento almacenado en ese índice. |
| Sustituir el contenido de una posición | `datos.set(indice, valor)` | Reemplaza un valor existente. |
| Eliminar por índice | `datos.remove(indice)` | Elimina el elemento de esa posición. |
| Conocer el número de elementos | `datos.size()` | Devuelve el tamaño actual. |
| Saber si está vacía | `datos.isEmpty()` | Devuelve `true` o `false`. |
| Buscar un valor | `datos.contains(valor)` | Indica si aparece el elemento. |
| Vaciar la lista | `datos.clear()` | Elimina todos sus elementos. |

**Comparación esencial:** en arrays se consulta `length` **sin paréntesis** y en listas se consulta `size()` **con paréntesis**.

# 6. Genéricos y tipos envolventes

## 6.1. ¿Qué son los genéricos en esta explicación?

El profesor muestra los símbolos `< >` que aparecen junto a `ArrayList` y los utiliza para explicar **qué tipo de elementos se permite almacenar**.

```java
ArrayList<String> palabras = new ArrayList<>();
```

Entre los signos `< >` se indica `String`: la lista está preparada para almacenar cadenas.

```java
palabras.add("Hola");
palabras.add("Adiós");
```

Si el tipo es `String`, el método `add` espera un `String`, no cualquier clase de elemento. IntelliJ permite visualizar este cambio en la ayuda del método: al definir el genérico, las operaciones aparecen tipadas con ese dato.

## 6.2. Lista sin un tipo concreto

El profesor empieza su demostración con una lista amplia, relacionada con `Object`, para señalar que se pueden introducir elementos de distintas clases. Explica `Object` como una clase base de la jerarquía de objetos.

```java
ArrayList<Object> variados = new ArrayList<>();
variados.add("Texto");
variados.add(25);
variados.add(true);
```

**Consecuencia de esa flexibilidad:** al consultar un valor, el tipo declarado es `Object`. Para operar después con él como si fuera un número o un texto concreto hace falta saber qué tipo se ha guardado. Por eso el profesor prefiere que la práctica pase después a una lista de `String`.

## 6.3. Los genéricos no utilizan tipos primitivos

El profesor insiste en la diferencia entre los tipos primitivos y sus **clases envolventes** (*wrapper*). Si se quieren enteros dentro de un `ArrayList`, no se escribe `int` entre `< >`.

| Tipo primitivo | Tipo envolvente para un genérico |
|---|---|
| `int` | `Integer` |
| `boolean` | `Boolean` |
| `double` | `Double` |
| `char` | `Character` |

Ejemplos:

```java
ArrayList<Integer> enteros = new ArrayList<>();
ArrayList<Double> temperaturas = new ArrayList<>();
ArrayList<Boolean> respuestas = new ArrayList<>();
ArrayList<Character> letras = new ArrayList<>();
```

No se debe confundir:

```java
// ArrayList<int> datos = new ArrayList<>();  // No válido como genérico.
ArrayList<Integer> datos = new ArrayList<>();
```

La clase **no desarrolla cómo se crean los genéricos propios**: eso queda para programación orientada a objetos más avanzada.

## 6.4. La inicialización con `new`

Como se trabaja con un objeto, se usa una construcción similar a las que ya se conocen para tipos complejos:

```java
ArrayList<String> datos = new ArrayList<>();
```

El profesor explica que normalmente basta escribir los parámetros de tipo en la izquierda y `<>` en la derecha. Volver a escribir `String` en la construcción es redundante en el ejemplo que se está enseñando.

# 7. Comparación entre array, `ArrayList` y `HashMap`

Esta comparación estructura la primera parte de la clase.

| Propiedad | Array | `ArrayList` | `HashMap` |
|---|---|---|---|
| ¿Tamaño fijo? | Sí | No; es dinámico | No; es dinámico |
| ¿Identifica elementos por posición `0`, `1`, `2`...? | Sí | Sí | No |
| ¿Cómo se obtiene un elemento? | `array[i]` | `lista.get(i)` | `mapa.get(clave)` |
| ¿Cómo se inserta un elemento nuevo? | No amplía directamente su tamaño | `lista.add(valor)` | `mapa.put(clave, valor)` |
| ¿Cómo se elimina? | No reduce directamente la longitud | `lista.remove(...)` | `mapa.remove(clave)` |
| ¿Cómo se conoce el tamaño? | `array.length` | `lista.size()` | `mapa.size()` |
| ¿Se puede recorrer por índice? | Sí | Sí | No de esa manera |

**Criterio de elección derivado de la explicación:**

- Si ya se conocen las posiciones y su cantidad es fija, se está trabajando con el concepto de **array**.
- Si interesa mantener una secuencia por posiciones pero añadir o eliminar elementos, se introduce **`ArrayList`**.
- Si se necesita encontrar un dato mediante una clave identificadora, se introduce **`HashMap`**.

# 8. Funcionamiento de `HashMap`: clave y valor

## 8.1. No se trabaja con posiciones consecutivas

La estructura `HashMap` se presenta como una colección dinámica organizada en **pares clave-valor** (*key-value*).

```text
CLAVE            VALOR
"1234-ABC"   ->  coche A
"5678-DEF"   ->  coche B
"9012-GHI"   ->  coche C
```

El profesor compara el mapa con un **diccionario**: se solicita una clave y se obtiene el valor asociado.

Una diferencia importante respecto a `ArrayList` es que las claves **no son índices que cambien cuando se elimina un elemento**.

## 8.2. Crear un mapa

La sintaxis siguiente es una reconstrucción ilustrativa de los dos tipos de datos que intervienen:

```java
HashMap<String, String> coches = new HashMap<>();
```

En la forma `HashMap<K, V>`:

- `K` representa el tipo de la **clave**.
- `V` representa el tipo del **valor**.

## 8.3. Guardar un dato con `put`

```java
coches.put("1234-ABC", "Coche rojo");
coches.put("5678-DEF", "Coche azul");
```

**Paso a paso:**

1. Se indica una clave, por ejemplo una matrícula.
2. Se indica el valor asociado a esa clave.
3. El mapa conserva esa asociación para poder recuperarla posteriormente.

El ejemplo de la matrícula y el número de bastidor aparece expresamente en la explicación como una manera de identificar vehículos.

## 8.4. Consultar con `get`

```java
String coche = coches.get("1234-ABC");
```

Aquí no se está pidiendo «el valor en la posición cero». Se está pidiendo **el valor asociado a la clave `"1234-ABC"`**.

## 8.5. Eliminar con `remove`

```java
coches.remove("1234-ABC");
```

El profesor plantea la pregunta: **¿desaparece el par o queda una posición vacía?** La respuesta de la clase es que se elimina la asociación de clave y valor.

Si hay otra clave, por ejemplo `"5678-DEF"`, **no cambia de nombre ni pasa a ocupar una supuesta posición anterior**. No existe esa renumeración de claves.

## 8.6. Claves y valores no son posiciones

El orden de inserción y el índice son ideas distintas de la relación clave-valor. En la clase se quiere evitar que se imagine un `HashMap` como una lista normal con un número pegado a cada casilla.

Un ejemplo de la distinción:

```text
ArrayList:   valor en la posición 0
HashMap:     valor asociado a la clave "1234-ABC"
```

Por tanto, para un mapa no se escribiría un recorrido convencional de `0` hasta `size() - 1` tratando esos números como claves, salvo que **realmente** esas fueran las claves definidas.

# 9. Recorrer las claves o los valores de un `HashMap`

El profesor señala que no es correcto intentar aplicar a un `HashMap` el mismo `for` por posiciones que se utiliza con un array o un `ArrayList`.

No se debe interpretar:

```java
// Conceptualmente incorrecto para recorrer cualquier HashMap:
// for (int i = 0; i < coches.size(); i++) {
//     coches.get(i);  // i sería una clave, no una posición.
// }
```

En la clase se proponen dos posibilidades:

## 9.1. Recorrer las claves

Obtener las claves permite iterar sobre ellas y consultar el valor de cada una.

```java
for (String matricula : coches.keySet()) {
    System.out.println(matricula);
    System.out.println(coches.get(matricula));
}
```

**Paso a paso:**

1. `keySet()` proporciona las claves del mapa.
2. El `for-each` entrega una clave en cada vuelta.
3. `coches.get(matricula)` obtiene el valor relacionado con esa clave.

Esta forma de trabajar es útil cuando interesa analizar **también las claves**, como en el ejemplo de las matrículas.

## 9.2. Recorrer directamente los valores

Si no se necesitan las claves, el profesor menciona `values()`:

```java
for (String coche : coches.values()) {
    System.out.println(coche);
}
```

De ese modo se recorren los valores proporcionados por el mapa.

**Distinción importante:** el profesor dice inicialmente que un `HashMap` no se puede recorrer «con `for-each`», pero inmediatamente enseña que **sí se puede utilizar `for-each` sobre sus claves o sus valores**. La lectura coherente de la clase es: **no se recorre directamente como una lista indexada; se recorren las colecciones iterables obtenidas del mapa**.

# 10. Práctica en IntelliJ: proyecto «Colecciones»

La parte práctica comienza creando un proyecto llamado **`Colecciones`** dentro del **tema 4**. El profesor crea un `main` y declara una lista llamada `datos`.

Se utiliza `ArrayList` de `java.util`, por lo que aparece la importación:

```java
import java.util.ArrayList;
```

La primera versión de la práctica sirve para observar que, si la lista se declara sin un genérico concreto, los métodos se muestran en IntelliJ con tipos muy generales como `Object`.

Después se restringe a cadenas:

```java
ArrayList<String> datos = new ArrayList<>();
```

Este cambio resulta esencial para la demostración: ahora los métodos de la lista esperan o devuelven **`String`** cuando corresponde.

## 10.1. Leer las sugerencias de IntelliJ

El profesor recorre los métodos que ofrece el IDE al escribir:

```java
datos.
```

Al seleccionar un método se puede inspeccionar:

- Su nombre.
- Los parámetros solicitados.
- El tipo que devuelve.
- Las posibles **sobrecargas**: varias formas de invocar un método con parámetros diferentes.

No se pide memorizar todo lo que aparece en el desplegable, sino entender el sentido de las operaciones que se utilizan en clase.

## 10.2. Diferenciar hacer algo y devolver algo

El profesor destaca la importancia del **tipo de retorno**. Una operación puede modificar una colección y, al mismo tiempo, devolver información.

Ejemplo que desarrollará después:

```java
String eliminado = datos.remove(0);
```

La lista pierde un elemento y la variable `eliminado` recibe **el elemento que se quitó**. No son dos operaciones separadas: son dos efectos de una misma llamada.

# 11. Añadir, consultar y eliminar elementos de una lista

## 11.1. Añadir con `add`

La lista empieza vacía:

```java
ArrayList<String> datos = new ArrayList<>();
```

Se introducen tres elementos:

```java
datos.add("Elemento 1");
datos.add("Elemento 2");
datos.add("Elemento 3");
```

Resultado:

```text
Índice:       0             1             2
Contenido:  Elemento 1    Elemento 2    Elemento 3
```

El método `add(valor)` coloca el valor al final de la lista en la forma que se está utilizando.

El profesor menciona que también existen formas para añadir al principio, al final, en una posición determinada o añadir todos los elementos de otra colección, aunque en el ejemplo decide utilizar la forma sencilla.

## 11.2. Consultar con `get`

Para obtener la segunda cadena:

```java
String dato = datos.get(1);
System.out.println(dato);  // Elemento 2
```

**Razonamiento:**

1. Hay tres elementos.
2. El primero ocupa la posición `0`.
3. El segundo ocupa la posición `1`.
4. `get(1)` devuelve `"Elemento 2"`.

También puede utilizarse el retorno directamente:

```java
System.out.println(datos.get(1));
```

El profesor hace hincapié en que **no es obligatorio guardar en una variable el resultado de cada método** si solo se necesita imprimirlo.

## 11.3. Eliminar por índice

Con la lista anterior:

```java
String eliminado = datos.remove(0);
```

Se elimina `"Elemento 1"` y la variable `eliminado` almacena ese texto.

Lo mismo puede expresarse directamente en una impresión:

```java
System.out.println("Elemento eliminado: " + datos.remove(0));
```

**Atención:** esta llamada también realiza la eliminación. No es simplemente consultar qué valor habría en esa posición.

## 11.4. Eliminar por objeto

`remove` admite otra forma de uso:

```java
datos.remove("Elemento 2");
```

En este caso se identifica el **valor que se desea eliminar**, no su índice.

La diferencia se aprecia en los parámetros y retornos:

| Llamada | Busca qué | Retorno explicado |
|---|---|---|
| `remove(0)` | Elemento en índice `0` | El elemento eliminado |
| `remove("Elemento 2")` | Valor `"Elemento 2"` | Un booleano que indica si se eliminó |

**Caso especialmente delicado mencionado en clase:** al trabajar con `Integer`, un número entero escrito como argumento puede interpretarse como **índice** de la sobrecarga `remove(int)`. El profesor advierte que hay que fijarse en **qué forma del método se está seleccionando**.

## 11.5. Sustituir con `set`

La clase presenta la modificación de una posición existente:

```java
datos.set(1, "Otro elemento");
```

Esto **sustituye** el contenido de la posición `1` y no tiene el mismo efecto sobre los índices que eliminar una posición. El profesor centra el ejercicio en `add` y `remove`, y deja `set` como operación conocida para cambios posteriores.

# 12. Cómo se desplazan los índices al borrar

La eliminación en un `ArrayList` es una de las explicaciones más relevantes para evitar fallos posteriores.

Estado inicial:

```text
Índice:       0           1           2
Valor:        A           B           C
```

Se ejecuta:

```java
lista.remove(0);
```

Estado posterior:

```text
Índice:       0           1
Valor:        B           C
```

**¿Qué ha ocurrido?**

1. Se ha eliminado el elemento que ocupaba la posición `0`.
2. El antiguo elemento de la posición `1` pasa a ocupar la posición `0`.
3. El antiguo elemento de la posición `2` pasa a ocupar la posición `1`.
4. El tamaño disminuye de `3` a `2`.

Por eso, después de borrar la posición `0`:

```java
lista.get(1);
```

ya no devuelve el valor que estaba originalmente en la posición `1`, sino **el que ha pasado a ocupar esa posición tras el desplazamiento**.

El profesor anticipa que este cambio de índices tiene importancia cuando se quiere **recorrer y eliminar elementos al mismo tiempo**; el problema se trabajará en el ejercicio siguiente.

# 13. Tamaño, búsqueda y vaciado de listas

## 13.1. `size()`

Devuelve la cantidad de elementos que tiene la lista **en el momento de la llamada**:

```java
System.out.println(datos.size());
```

Después de añadir tres elementos, el resultado es `3`. Después de eliminar uno, es `2`.

## 13.2. `isEmpty()`

Permite comprobar directamente si la lista está vacía:

```java
boolean vacia = datos.isEmpty();
```

El resultado es:

- `true` si no contiene elementos.
- `false` si contiene alguno.

El profesor pregunta cómo se podría expresar lo mismo utilizando el tamaño:

```java
boolean vacia = datos.size() == 0;
```

Ambas comprobaciones responden a la misma pregunta. IntelliJ puede sugerir `isEmpty()` cuando se detecta un uso de `size() == 0`.

## 13.3. `contains()`

Comprueba si un valor está contenido en la lista:

```java
boolean existe = datos.contains("Elemento 1");
```

El ejemplo del profesor recuerda que `"Elemento 1"` había sido eliminado. Por tanto, preguntar después si sigue contenido produce `false`. Si se pregunta por un elemento que permanece en la lista, se obtiene `true`.

**No confundir:**

```java
datos.contains("Elemento 2"); // Pregunta por el VALOR.
datos.get(1);                  // Pregunta por una POSICIÓN.
```

## 13.4. `clear()`

Para vaciar toda la colección:

```java
datos.clear();
```

Después:

```java
System.out.println(datos.size());    // 0
System.out.println(datos.isEmpty()); // true
```

`clear()` no necesita que se le indique qué posición borrar: elimina **todos los elementos**.

# 14. Recorrido con `for` y con `for-each`

Con el ejemplo de dos elementos restantes:

```text
Índice 0: Elemento 2
Índice 1: Elemento 3
```

## 14.1. Primera opción: `for` por índices

```java
for (int i = 0; i < datos.size(); i++) {
    System.out.println(datos.get(i));
}
```

**Paso a paso:**

1. Se crea `i = 0`.
2. Se comprueba si `i < datos.size()`.
3. Se obtiene el valor de `get(i)`.
4. Se incrementa `i`.
5. Se repite hasta alcanzar el tamaño actual.

La indexación está escrita **expresamente**: se decide qué posición consultar.

## 14.2. Segunda opción: `for-each` de Java

```java
for (String elemento : datos) {
    System.out.println(elemento);
}
```

**Paso a paso:**

1. Se indica el tipo de elemento que contiene la colección: `String`.
2. Se elige un nombre temporal para el elemento actual: `elemento`.
3. Se indica la colección: `datos`.
4. En cada iteración, `elemento` representa el valor que toca.
5. Se imprime ese valor.

En este recorrido no se ha creado manualmente `i`; se trabaja con el elemento directamente.

## 14.3. ¿Cuándo usar uno u otro?

La clase quiere que se distinga entre:

- **Recorrer por posición:** útil cuando se necesita conocer o manipular el índice.
- **Recorrer por elemento:** útil cuando solo hace falta trabajar con los valores.

El profesor advierte de un riesgo importante cuando se altera el tamaño de un `ArrayList` durante un recorrido: puede cambiar el significado de las posiciones o producirse una excepción. Esta cuestión se retoma y se ejemplifica con más detalle en la siguiente transcripción.

# 15. Diferencia entre estructura `for-each` y método `forEach`

El profesor insiste en una distinción que puede pasar desapercibida porque los nombres son prácticamente idénticos.

**Una cosa es la estructura de control:**

```java
for (String elemento : datos) {
    System.out.println(elemento);
}
```

**Otra cosa es llamar al método de la colección:**

```java
datos.forEach(elemento -> System.out.println(elemento));
```

Los dos ejemplos imprimen cada elemento de la lista, pero se escriben de manera diferente.

| `for-each` como estructura | `forEach` como método |
|---|---|
| Se escribe con la palabra reservada `for`. | Se invoca con `datos.forEach(...)`. |
| Usa `tipo elemento : colección`. | Recibe una acción que indica qué hacer con cada elemento. |
| Dentro de las llaves se escriben instrucciones. | La acción puede proporcionarse mediante una lambda. |
| Forma parte del flujo de control del lenguaje. | Es una llamada a un método disponible en la colección. |

**Idea central:** el método `forEach` **ya implementa el recorrido**, pero necesita recibir **qué acción realizar en cada vuelta**.

# 16. Primera explicación de las funciones lambda

## 16.1. De un método tradicional a una función anónima

El profesor compara una función escrita de la manera habitual con una **función lambda**.

La estructura de un método tradicional incluye elementos que ya se conocen:

```java
public static void mostrar(String dato) {
    System.out.println(dato);
}
```

En una lambda no se declara un método completo con nombre del mismo modo. Se proporciona una acción mediante una expresión abreviada:

```java
dato -> System.out.println(dato)
```

La explicación visual de la pizarra muestra una forma general:

```java
(parametros) -> {
    // Cuerpo de la función
}
```

El símbolo central es `->`.

## 16.2. Partes de una lambda

```text
(parametros)  ->  { instrucciones }
     |                 |
 Datos recibidos   Qué hace con ellos
```

La lambda **recibe los datos** que necesita y **ejecuta una acción**. En determinados casos el cuerpo devuelve un resultado; el profesor menciona que, si hay un cuerpo con varias instrucciones, puede ser necesario escribir `return`.

## 16.3. Lambdas de una sola instrucción

Cuando la operación es muy sencilla, puede escribirse sin llaves:

```java
elemento -> System.out.println(elemento)
```

Si se quieren varias instrucciones:

```java
elemento -> {
    System.out.println("Procesando elemento");
    System.out.println(elemento);
}
```

Aquí sí se utilizan llaves para delimitar el cuerpo, y las sentencias de su interior llevan su punto y coma correspondiente.

## 16.4. Tipo del parámetro inferido

El profesor observa que en la lambda se escribe simplemente `elemento`, sin `String` delante:

```java
datos.forEach(elemento -> System.out.println(elemento));
```

¿Por qué puede hacerse? Porque **la lista se ha definido como `ArrayList<String>`** y el método sabe que el elemento que se recorre es de ese tipo. La explicación relaciona esta inferencia con el genérico definido al crear la lista.

# 17. `Consumer`, funciones anónimas y callbacks

## 17.1. ¿Por qué `forEach` necesita un `Consumer`?

Al mirar la firma del método en IntelliJ, el profesor muestra que `forEach` espera un elemento de tipo **`Consumer`**. Lo describe como una acción que se ejecutará cada vez que el recorrido entregue un elemento.

El método de `Consumer` que se desarrolla oralmente corresponde a **`accept`**: acepta cada dato y ejecuta la acción programada. La transcripción registra el nombre de forma deformada como «hacer», pero la función mostrada se corresponde con la operación del consumidor.

## 17.2. Forma tradicional: clase anónima

El profesor muestra una implementación extensa como paso intermedio antes de escribir la lambda. La forma coherente con esa explicación es:

```java
import java.util.function.Consumer;

datos.forEach(new Consumer<String>() {
    @Override
    public void accept(String elemento) {
        System.out.println(elemento);
    }
});
```

**Interpretación:**

1. `forEach` necesita recibir un `Consumer`.
2. Se proporciona una implementación anónima de ese tipo.
3. Se indica qué debe hacer `accept` con cada `String`.
4. `forEach` llama a esa acción una vez por cada elemento de la lista.

Este código se incluye para entender **qué se está abreviando**, no porque el profesor quiera que se copie siempre así.

## 17.3. `@Override`

Durante la construcción anterior aparece `@Override`. El profesor explica que señala que el método está **sobrescribiendo una operación ya declarada**: la acción existe como contrato, pero todavía hay que especificar qué debe hacer en este caso concreto.

No desarrolla en profundidad las interfaces ni la herencia; las señala como contenidos que se comprenderán mejor en programación orientada a objetos.

## 17.4. Introducción a los callbacks

El profesor utiliza un ejemplo conceptual: un método puede necesitar ejecutar una función, pero **no siempre la misma**.

En lugar de definir una única acción fija dentro del método, puede **recibir la función que se ejecutará**. Se introduce oralmente el término *callback* para esa idea.

Aplicado a `forEach`:

```text
La colección conoce cómo recorrer sus elementos.
                      ↓
El programador proporciona la acción que desea.
                      ↓
La colección ejecuta esa acción para cada elemento.
```

Esto prepara la comprensión de los métodos que reciben comportamiento como parámetro.

# 18. Recorrido con `forEach` y lambda

## 18.1. Simplificar el `Consumer` anterior

Se pasa de:

```java
datos.forEach(new Consumer<String>() {
    @Override
    public void accept(String elemento) {
        System.out.println(elemento);
    }
});
```

a:

```java
datos.forEach(elemento -> System.out.println(elemento));
```

**Las dos formas realizan la misma tarea del ejemplo:** imprimir los elementos uno por uno. La segunda expresa la acción en menos código.

## 18.2. Entender cada parte

```java
datos.forEach(elemento -> System.out.println(elemento));
```

- `datos`: la lista que se desea recorrer.
- `.forEach(...)`: el método encargado de iterar.
- `elemento`: el dato que recibe la función en cada vuelta.
- `->`: separa el dato recibido de la acción.
- `System.out.println(elemento)`: lo que se hace con ese dato.

**La operación que está entre paréntesis no se ejecuta una sola vez para toda la lista:** se aplica a cada elemento.

## 18.3. La acción se puede cambiar

El valor del método es que no obliga a imprimir siempre de la misma manera. Por ejemplo, en la explicación se menciona que el cuerpo puede tener instrucciones adicionales:

```java
datos.forEach(elemento -> {
    System.out.println("Ejecutando impresión");
    System.out.println(elemento);
});
```

El recorrido sigue siendo responsabilidad del método; la operación concreta la decide el programador.

## 18.4. Tres maneras de conseguir una salida semejante

```java
// A. for con índice
for (int i = 0; i < datos.size(); i++) {
    System.out.println(datos.get(i));
}

// B. for-each como estructura de control
for (String elemento : datos) {
    System.out.println(elemento);
}

// C. forEach como método con lambda
datos.forEach(elemento -> System.out.println(elemento));
```

Este es uno de los resultados didácticos principales de la sesión: **reconocer qué representa cada forma y comprender que pueden producir el mismo resultado para esta tarea**.

# 19. Referencias a métodos con `::`

Al llegar al final de la demostración, IntelliJ sugiere transformar una lambda sencilla en una **referencia a método**.

Forma con lambda:

```java
datos.forEach(elemento -> System.out.println(elemento));
```

Forma mediante referencia:

```java
datos.forEach(System.out::println);
```

El profesor enseña los símbolos `::` y señala que permiten referirse directamente a una operación que ya existe, en este caso `println`, en lugar de escribir una lambda cuyo único trabajo es llamarla.

## 19.1. Qué debe reconocerse ahora

No se exige desarrollar todavía todos los usos de `::`. El objetivo inmediato es **reconocer que las dos expresiones anteriores representan el mismo comportamiento en el ejemplo**.

```text
Recorrer los elementos de datos
             ↓
Entregar cada elemento a println
```

La sesión termina indicando que este estilo aparecerá con frecuencia al trabajar más adelante con **lambdas y streams**.

# 20. Otras operaciones mencionadas y contenidos aplazados

Durante la exploración del desplegable de IntelliJ aparecen bastantes métodos. No todos se practican en profundidad, pero conviene conservar los que el profesor menciona:

| Método o concepto mencionado | Idea indicada en clase | Grado de desarrollo |
|---|---|---|
| `addAll(...)` | Incorporar de golpe elementos de otra colección. | Mencionado. |
| `set(...)` | Reemplazar el contenido de una posición. | Introducido. |
| `indexOf(...)` | Consultar el índice de un elemento. | Mencionado. |
| `lastIndexOf(...)` | Consultar su última aparición cuando hay repetidos. | Mencionado. |
| `getFirst()` / `getLast()` | Acceder al primer o último valor. | Mencionados en el IDE. |
| `removeFirst()` / `removeLast()` | Eliminar los extremos. | Mencionados. |
| `addFirst()` / `addLast()` | Insertar en uno de los extremos. | Mencionados. |
| `removeIf(...)` | Borrar según una condición o predicado. | Adelantado, sin práctica desarrollada aquí. |
| `subList(...)` | Trabajar con un tramo de posiciones. | Mencionado. |
| `toArray(...)` | Obtener un array a partir de una lista. | Mencionado. |
| `sort(...)` | Ordenar según un criterio. | Adelantado. |
| `stream()` | Encadenar operaciones sobre elementos de una colección. | Introducción conceptual, pendiente de explicación posterior. |

El profesor comenta como ejemplo práctico que, para encontrar el máximo y el mínimo, **se podría ordenar** una lista y consultar sus extremos. También señala que algunas operaciones que antes exigían bastantes líneas de código pueden simplificarse utilizando métodos que Java ya proporciona.

## 20.1. Qué se dice de `stream()`

La explicación lo presenta mediante la imagen de **trabajar con una copia**, para diferenciar la colección de origen de las transformaciones que se hacen sobre sus elementos. Se adelanta que habrá filtros y operaciones compactas que sustituirán recorridos escritos manualmente.

**No se desarrolla una implementación de streams en esta transcripción.** El propio profesor lo reserva para después por su complejidad. En particular, la expresión «copia» es la **analogía docente de esta sesión**, no una descripción detallada de cómo se materializan internamente todas las operaciones.

## 20.2. Advertencia sobre la lista y su modificación durante el recorrido

Se avisa de que **añadir o eliminar elementos mientras se está recorriendo una lista puede provocar problemas**. En el discurso oral se pronuncian nombres de excepciones de manera inconsistente, de modo que esta clase no conserva una demostración fiable del nombre exacto. La advertencia que sí queda clara es **no modificar el tamaño de la misma colección mientras se está iterando sin controlar ese efecto**.

# 21. Ejemplo de conjunto de operaciones de clase

El siguiente bloque **reúne** en un solo programa las operaciones que el profesor va probando por separado. Es un **ejemplo reconstruido de repaso**, no una copia literal de su proyecto de IntelliJ. Mantiene el tipo `String` y la secuencia de añadir, leer, borrar, recorrer, buscar y vaciar.

```java
import java.util.ArrayList;

public class Colecciones {
    public static void main(String[] args) {
        ArrayList<String> datos = new ArrayList<>();

        // 1. La lista comienza vacía.
        System.out.println("Tamaño inicial: " + datos.size());
        System.out.println("¿Vacía?: " + datos.isEmpty());

        // 2. Añadir tres elementos.
        datos.add("Elemento 1");
        datos.add("Elemento 2");
        datos.add("Elemento 3");
        System.out.println("Tamaño después de añadir: " + datos.size());

        // 3. Consultar por posición.
        System.out.println("Índice 1: " + datos.get(1));

        // 4. Eliminar la primera posición.
        String eliminado = datos.remove(0);
        System.out.println("Eliminado: " + eliminado);

        // 5. Comprobar cómo han cambiado los índices.
        System.out.println("Nuevo índice 0: " + datos.get(0));

        // 6. Recorrer con un for por índices.
        for (int i = 0; i < datos.size(); i++) {
            System.out.println(datos.get(i));
        }

        // 7. Recorrer con for-each.
        for (String elemento : datos) {
            System.out.println(elemento);
        }

        // 8. Recorrer con el método forEach y lambda.
        datos.forEach(elemento -> System.out.println(elemento));

        // 9. Referencia directa al método println.
        datos.forEach(System.out::println);

        // 10. Buscar si un elemento está contenido.
        System.out.println("¿Está Elemento 1?: "
                + datos.contains("Elemento 1"));

        // 11. Eliminar todos los elementos.
        datos.clear();
        System.out.println("Tamaño final: " + datos.size());
    }
}
```

## 21.1. Evolución de la lista

| Momento | Contenido | Tamaño |
|---|---|---:|
| Creación | `[]` | `0` |
| Después de tres `add` | `[Elemento 1, Elemento 2, Elemento 3]` | `3` |
| Después de `remove(0)` | `[Elemento 2, Elemento 3]` | `2` |
| Después de `clear()` | `[]` | `0` |

**Observación:** las cuatro variantes de recorrido no se necesitan simultáneamente en un programa real. Se muestran juntas para comparar su sintaxis y comprobar que procesan los mismos elementos.

---

# 22. Conceptos que debo saber explicar

1. **Tamaño fijo frente a tamaño dinámico:** por qué un array no se amplía con `add` y un `ArrayList` sí puede crecer o disminuir.
2. **Indexación desde cero:** diferencia entre tamaño y último índice.
3. **Acceso a posiciones:** `array[i]` frente a `lista.get(i)`.
4. **`final` en una referencia:** por qué permite modificar el objeto ya creado, pero impide reasignarlo.
5. **Genérico:** qué representa `String` en `ArrayList<String>` y qué cambia en las operaciones disponibles.
6. **Tipos envolventes:** por qué se escribe `Integer`, `Double`, `Boolean` o `Character` en los genéricos.
7. **`Object`:** por qué una lista general permite almacenar diferentes objetos, pero exige prestar atención al tipo al recuperarlos.
8. **`add`, `get`, `set`, `remove`:** distinguir añadir, leer, reemplazar y borrar.
9. **Desplazamiento de índices:** qué les ocurre a los elementos situados después de una posición eliminada.
10. **Sobrecargas de `remove`:** distinguir la eliminación por índice de la eliminación por valor y sus retornos.
11. **`size()`, `isEmpty()`, `contains()` y `clear()`:** comprender qué pregunta o hace cada método.
12. **`HashMap`:** por qué almacena pares clave-valor y no se recorre como un array por posiciones.
13. **`keySet()` y `values()`:** qué se puede recorrer en cada caso.
14. **`for` indexado, `for-each` y `forEach`:** qué diferencias hay entre las tres formas.
15. **Lambda:** interpretar `parametro -> acción` y diferenciar una expresión sencilla de un cuerpo entre llaves.
16. **`Consumer`:** comprender que una operación puede recibir una función que se ejecuta para cada elemento.
17. **Referencia a método:** reconocer `System.out::println` como alternativa a la lambda de impresión.
18. **Streams:** saber que se introducen como concepto, pero que su funcionamiento detallado queda aplazado.

# 23. Sintaxis que debo saber escribir

| Objetivo | Sintaxis Java |
|---|---|
| Crear un array | `int[] numeros = new int[3];` |
| Leer/modificar una posición de array | `numeros[0]` / `numeros[0] = 5;` |
| Tamaño de array | `numeros.length` |
| Crear lista de cadenas | `ArrayList<String> datos = new ArrayList<>();` |
| Crear lista de enteros | `ArrayList<Integer> numeros = new ArrayList<>();` |
| Añadir a lista | `datos.add("Texto");` |
| Leer elemento | `datos.get(0)` |
| Reemplazar | `datos.set(0, "Nuevo");` |
| Eliminar por índice | `datos.remove(0)` |
| Eliminar por objeto | `datos.remove("Texto")` |
| Contar elementos | `datos.size()` |
| Comprobar vacío | `datos.isEmpty()` |
| Comprobar contenido | `datos.contains("Texto")` |
| Vaciar lista | `datos.clear();` |
| Recorrer por índice | `for (int i = 0; i < datos.size(); i++)` |
| Recorrer por elemento | `for (String elemento : datos)` |
| Recorrer con método y lambda | `datos.forEach(e -> System.out.println(e));` |
| Recorrer mediante referencia | `datos.forEach(System.out::println);` |
| Crear un mapa | `HashMap<String, String> mapa = new HashMap<>();` |
| Guardar par clave-valor | `mapa.put("clave", "valor");` |
| Obtener valor por clave | `mapa.get("clave")` |
| Eliminar por clave | `mapa.remove("clave")` |
| Recorrer claves | `for (String clave : mapa.keySet())` |
| Recorrer valores | `for (String valor : mapa.values())` |

Las importaciones mencionadas o necesarias para estos ejemplos son:

```java
import java.util.ArrayList;
import java.util.HashMap;
```

# 24. Errores frecuentes y advertencias

| Situación | Problema | Qué recordar |
|---|---|---|
| Pensar que la primera posición es `1` | Se consulta o modifica otro elemento. | Los índices empiezan en `0`. |
| Escribir `array.size()` | Mezcla sintaxis de array con lista. | Arrays: `length`; listas: `size()`. |
| Escribir `lista[0]` | Se utiliza sintaxis de array para `ArrayList`. | En `ArrayList` se utiliza `get(0)`. |
| Escribir `ArrayList<int>` | El genérico no admite el primitivo. | Utilizar `ArrayList<Integer>`. |
| Pensar que `final` impide `add` | Se confunde reasignación de referencia con modificación interna. | `final` impide asignar otro objeto a la variable. |
| Borrar `remove(0)` y seguir utilizando los índices antiguos | Los elementos se desplazan. | Después de borrar, revisar las posiciones vigentes. |
| Confundir `remove(0)` y `remove("Elemento 1")` | Se mezcla índice con valor. | Fijarse en el tipo del argumento y la sobrecarga. |
| Preguntar por la «posición cero» de un `HashMap` | Un mapa trabaja por claves, no por índices de lista. | Utilizar la clave definida. |
| Intentar recorrer el mapa con `get(i)` suponiendo índices consecutivos | Las claves no son un rango de `0` a `size() - 1`. | Utilizar `keySet()` o `values()`. |
| Confundir `for-each` y `.forEach(...)` | Se mezclan una estructura del lenguaje y una llamada a método. | La segunda necesita recibir una acción. |
| Modificar el tamaño de la lista durante un recorrido | Puede alterar el recorrido o dar lugar a una excepción. | Tener en cuenta que la colección está cambiando mientras se itera. |
| Tratar `stream()` como tema ya dominado | La clase solamente lo anticipa. | No confundir la introducción con el desarrollo completo. |

# 25. Fragmentos incompletos o imprecisos de la transcripción

1. **Inicio cortado.** El audio arranca en mitad del repaso sobre arrays. No se conserva la parte anterior de la comparación ni la pizarra.
2. **Referencia a base de datos y clave primaria.** Se usa una analogía oral para explicar «indexado», pero no se desarrolla formalmente ni debe estudiarse como equivalencia entre índices de un array y claves primarias de una base de datos.
3. **`ArrayList.set` frente a eliminar y volver a añadir.** La explicación oral contiene una frase confusa sobre cuál de esas operaciones mantiene los índices. La definición operativa reconstruida es: `set` reemplaza una posición existente; `remove` reduce el tamaño y desplaza los elementos posteriores.
4. **`remove(indice)` cuando el índice no existe.** En un momento se sugiere oralmente que podría devolver `null`. **Eso no constituye una regla válida de Java:** un índice fuera del rango de la lista produce un error de índice, no un resultado `null` normal. Se conserva la explicación del retorno para índices válidos.
5. **`HashMap` y `for-each`.** La expresión «no se puede recorrer con `for-each`» se contradice en la misma clase al proponer `keySet()` y `values()`. La distinción válida para estos apuntes es entre recorrer directamente como lista indexada y recorrer sus claves o valores.
6. **Nombres técnicos deformados.** El reconocimiento de voz alterna formas como «HubsLambles», «hasmap», «grupper», «ley», «short», «rebove», «cler», «isento» y «forich». Por el contexto se normalizan a `HashMap`, *wrapper*, `length`, `sort`, `remove`, `clear`, `isEmpty` y `for-each`/`forEach` según corresponda.
7. **Excepción al modificar durante `for-each`.** El profesor nombra una excepción de manera poco fiable. Se conserva la advertencia sobre modificar una colección durante el recorrido, sin atribuir a esa prueba concreta un nombre de excepción observado con seguridad.
8. **`Consumer` y genéricos.** Parte de la explicación sobre «extender de `String`» y el nombre del método del consumidor está mal reconocida. Se reconstruye únicamente la llamada que el profesor utiliza para explicar el `forEach`, y se reserva el desarrollo de interfaces y genéricos para más adelante.
9. **Métodos mostrados en el autocompletado.** La transcripción conserva descripciones rápidas de muchos métodos, pero no siempre sus firmas exactas ni una ejecución. Se separan de las operaciones practicadas.
10. **Streams:** la comparación con una «copia» es una imagen introductoria; **no se muestra todavía el procesamiento completo** de un stream, por lo que no se inventa una práctica de filtros ni de transformaciones.
11. **Grabación sin imagen.** No se dispone de lo escrito en la pizarra ni de la pantalla de IntelliJ. Los ejemplos Java se han reconstruido para expresar la operación identificable con seguridad, no para atribuir líneas exactas al profesor.
12. **La actividad anunciada para después del descanso no aparece desarrollada** en el fragmento docente conservado. No se incluye una resolución inexistente.

---

**Para estudiar esta sesión:** dominar primero qué operación necesita el programa (añadir, acceder, modificar, eliminar o recorrer), después reconocer si el dato se localiza **por índice** o **por clave**, y por último elegir la sintaxis correcta de la estructura. La introducción a lambdas se trabaja aquí al nivel de reconocer y escribir acciones sencillas pasadas a `forEach`.

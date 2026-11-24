# Cuaderno integrado de colecciones — Días 9 y 10

> **Procedencia:** guía integrada de estudio aportada al proyecto. Incluye contenido repetido de los apuntes de los días 9 y 10, además del análisis del código facilitado y las precisiones didácticas. Se han anonimizado nombres de ejemplo e identificadores de grabaciones.

[Volver al índice de colecciones](README.md).

**Arrays, `ArrayList`, `List`, `HashMap`, recorridos, lambdas, ordenación, predicados y streams**  
**Versión integrada de estudio — 19 de noviembre de 2026**

> **Base docente y trazabilidad.** El bloque I procede de la grabación de clase (equivale a los apuntes ya identificados como **día 9**); el bloque II procede de la grabación de clase (equivale a los apuntes ya identificados como **día 10**). Se han contrastado con `PROG_DIA_9_APUNTES.md` y `PROG_DIA_10_APUNTES.md`. El bloque III procede exclusivamente del **código de `HashMap` entregado por el alumno, atribuido al profesor**; ese código no forma parte de las dos transcripciones. El bloque IV contiene **precisiones técnicas señaladas expresamente** y una hoja de ruta didáctica hacia el banco. No se atribuyen esos añadidos a la explicación grabada.
>
> **Fidelidad:** se conservan conceptos, demostraciones, razonamientos y ejercicios de clase. Se eliminan repeticiones, pausas y conversaciones ajenas a Programación. Si una transcripción no conserva la pantalla o una línea exacta, el código se etiqueta como **reconstrucción didáctica**, no como copia literal del profesor.

## Guía de lectura

| Bloque | Contenido | Procedencia |
|---|---|---|
| I | Repaso de arrays; listas dinámicas; introducción de mapas; genéricos; lambdas y `forEach` | Primera transcripción (día 9) |
| II | Ordenación, `Comparator`, `removeIf`, `Predicate`, streams, temperaturas y enunciado del gestor de notas | Segunda transcripción (día 10) |
| III | Demostración real de `HashMap<Integer, String>`; lectura completa de sus operaciones | Código facilitado del profesor |
| IV | Diferencia exacta entre `List` y `ArrayList`, precisiones de Java, requisitos y ambigüedades del banco, plan de estudio | **Apoyo didáctico**, no acreditado como contenido del profesor |

### Ideas que hay que distinguir antes de estudiar

- **Array:** tamaño fijo, acceso mediante índices (`numeros[0]`).
- **`ArrayList`:** tamaño dinámico, acceso mediante índices (`numeros.get(0)`).
- **`HashMap`:** tamaño dinámico, acceso mediante **claves** (`alumnos.get(1234)`).
- **Recorrer** no equivale a **consultar una posición**. La estructura `for-each` trabaja con elementos; el `for` convencional puede trabajar con índices.
- **`for-each`** (estructura de control), **`forEach(...)`** (método) y **`stream()`** no son la misma construcción.
- **`List`** aparece hacia el final del segundo audio, asociado a `toList()`. Su distinción formal con `ArrayList` se trabaja en el bloque IV, **no** se presenta como una lección desarrollada por el profesor.

---

## BLOQUE I — Clase sobre arrays, `ArrayList`, `HashMap` y primeras lambdas

**Procedencia de lo que sigue:** reconstrucción de la **primera transcripción**. Se han conservado también los ejemplos y advertencias de los apuntes del día 9, revisados contra el audio.

### 1. Punto de partida: los arrays

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

### 2. Qué significa que una estructura sea indexada

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

### 3. `final` aplicado a arrays y colecciones

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

### 4. De los arrays a las colecciones dinámicas

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

### 5. Características y sintaxis de `ArrayList`

#### 5.1. Es dinámico

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

#### 5.2. Sigue siendo indexado

El primer elemento se encuentra en el índice `0`, el segundo en `1`, etc. La diferencia con el array está en **la notación de acceso**:

```java
// Array convencional:
numeros[0];

// ArrayList:
datos.get(0);
```

En `ArrayList` se utilizan **métodos** para muchas de las operaciones que antes se realizaban mediante corchetes.

#### 5.3. Operaciones fundamentales

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

### 6. Genéricos y tipos envolventes

#### 6.1. ¿Qué son los genéricos en esta explicación?

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

#### 6.2. Lista sin un tipo concreto

El profesor empieza su demostración con una lista amplia, relacionada con `Object`, para señalar que se pueden introducir elementos de distintas clases. Explica `Object` como una clase base de la jerarquía de objetos.

```java
ArrayList<Object> variados = new ArrayList<>();
variados.add("Texto");
variados.add(25);
variados.add(true);
```

**Consecuencia de esa flexibilidad:** al consultar un valor, el tipo declarado es `Object`. Para operar después con él como si fuera un número o un texto concreto hace falta saber qué tipo se ha guardado. Por eso el profesor prefiere que la práctica pase después a una lista de `String`.

#### 6.3. Los genéricos no utilizan tipos primitivos

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

#### 6.4. La inicialización con `new`

Como se trabaja con un objeto, se usa una construcción similar a las que ya se conocen para tipos complejos:

```java
ArrayList<String> datos = new ArrayList<>();
```

El profesor explica que normalmente basta escribir los parámetros de tipo en la izquierda y `<>` en la derecha. Volver a escribir `String` en la construcción es redundante en el ejemplo que se está enseñando.

### 7. Comparación entre array, `ArrayList` y `HashMap`

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

### 8. Funcionamiento de `HashMap`: clave y valor

#### 8.1. No se trabaja con posiciones consecutivas

La estructura `HashMap` se presenta como una colección dinámica organizada en **pares clave-valor** (*key-value*).

```text
CLAVE            VALOR
"1234-ABC"   ->  coche A
"5678-DEF"   ->  coche B
"9012-GHI"   ->  coche C
```

El profesor compara el mapa con un **diccionario**: se solicita una clave y se obtiene el valor asociado.

Una diferencia importante respecto a `ArrayList` es que las claves **no son índices que cambien cuando se elimina un elemento**.

#### 8.2. Crear un mapa

La sintaxis siguiente es una reconstrucción ilustrativa de los dos tipos de datos que intervienen:

```java
HashMap<String, String> coches = new HashMap<>();
```

En la forma `HashMap<K, V>`:

- `K` representa el tipo de la **clave**.
- `V` representa el tipo del **valor**.

#### 8.3. Guardar un dato con `put`

```java
coches.put("1234-ABC", "Coche rojo");
coches.put("5678-DEF", "Coche azul");
```

**Paso a paso:**

1. Se indica una clave, por ejemplo una matrícula.
2. Se indica el valor asociado a esa clave.
3. El mapa conserva esa asociación para poder recuperarla posteriormente.

El ejemplo de la matrícula y el número de bastidor aparece expresamente en la explicación como una manera de identificar vehículos.

#### 8.4. Consultar con `get`

```java
String coche = coches.get("1234-ABC");
```

Aquí no se está pidiendo «el valor en la posición cero». Se está pidiendo **el valor asociado a la clave `"1234-ABC"`**.

#### 8.5. Eliminar con `remove`

```java
coches.remove("1234-ABC");
```

El profesor plantea la pregunta: **¿desaparece el par o queda una posición vacía?** La respuesta de la clase es que se elimina la asociación de clave y valor.

Si hay otra clave, por ejemplo `"5678-DEF"`, **no cambia de nombre ni pasa a ocupar una supuesta posición anterior**. No existe esa renumeración de claves.

#### 8.6. Claves y valores no son posiciones

El orden de inserción y el índice son ideas distintas de la relación clave-valor. En la clase se quiere evitar que se imagine un `HashMap` como una lista normal con un número pegado a cada casilla.

Un ejemplo de la distinción:

```text
ArrayList:   valor en la posición 0
HashMap:     valor asociado a la clave "1234-ABC"
```

Por tanto, para un mapa no se escribiría un recorrido convencional de `0` hasta `size() - 1` tratando esos números como claves, salvo que **realmente** esas fueran las claves definidas.

### 9. Recorrer las claves o los valores de un `HashMap`

El profesor señala que no es correcto intentar aplicar a un `HashMap` el mismo `for` por posiciones que se utiliza con un array o un `ArrayList`.

No se debe interpretar:

```java
// Conceptualmente incorrecto para recorrer cualquier HashMap:
// for (int i = 0; i < coches.size(); i++) {
//     coches.get(i);  // i sería una clave, no una posición.
// }
```

En la clase se proponen dos posibilidades:

#### 9.1. Recorrer las claves

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

#### 9.2. Recorrer directamente los valores

Si no se necesitan las claves, el profesor menciona `values()`:

```java
for (String coche : coches.values()) {
    System.out.println(coche);
}
```

De ese modo se recorren los valores proporcionados por el mapa.

**Distinción importante:** el profesor dice inicialmente que un `HashMap` no se puede recorrer «con `for-each`», pero inmediatamente enseña que **sí se puede utilizar `for-each` sobre sus claves o sus valores**. La lectura coherente de la clase es: **no se recorre directamente como una lista indexada; se recorren las colecciones iterables obtenidas del mapa**.

### 10. Práctica en IntelliJ: proyecto «Colecciones»

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

#### 10.1. Leer las sugerencias de IntelliJ

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

#### 10.2. Diferenciar hacer algo y devolver algo

El profesor destaca la importancia del **tipo de retorno**. Una operación puede modificar una colección y, al mismo tiempo, devolver información.

Ejemplo que desarrollará después:

```java
String eliminado = datos.remove(0);
```

La lista pierde un elemento y la variable `eliminado` recibe **el elemento que se quitó**. No son dos operaciones separadas: son dos efectos de una misma llamada.

### 11. Añadir, consultar y eliminar elementos de una lista

#### 11.1. Añadir con `add`

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

#### 11.2. Consultar con `get`

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

#### 11.3. Eliminar por índice

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

#### 11.4. Eliminar por objeto

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

#### 11.5. Sustituir con `set`

La clase presenta la modificación de una posición existente:

```java
datos.set(1, "Otro elemento");
```

Esto **sustituye** el contenido de la posición `1` y no tiene el mismo efecto sobre los índices que eliminar una posición. El profesor centra el ejercicio en `add` y `remove`, y deja `set` como operación conocida para cambios posteriores.

### 12. Cómo se desplazan los índices al borrar

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

### 13. Tamaño, búsqueda y vaciado de listas

#### 13.1. `size()`

Devuelve la cantidad de elementos que tiene la lista **en el momento de la llamada**:

```java
System.out.println(datos.size());
```

Después de añadir tres elementos, el resultado es `3`. Después de eliminar uno, es `2`.

#### 13.2. `isEmpty()`

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

#### 13.3. `contains()`

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

#### 13.4. `clear()`

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

### 14. Recorrido con `for` y con `for-each`

Con el ejemplo de dos elementos restantes:

```text
Índice 0: Elemento 2
Índice 1: Elemento 3
```

#### 14.1. Primera opción: `for` por índices

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

#### 14.2. Segunda opción: `for-each` de Java

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

#### 14.3. ¿Cuándo usar uno u otro?

La clase quiere que se distinga entre:

- **Recorrer por posición:** útil cuando se necesita conocer o manipular el índice.
- **Recorrer por elemento:** útil cuando solo hace falta trabajar con los valores.

El profesor advierte de un riesgo importante cuando se altera el tamaño de un `ArrayList` durante un recorrido: puede cambiar el significado de las posiciones o producirse una excepción. Esta cuestión se retoma y se ejemplifica con más detalle en la siguiente transcripción.

### 15. Diferencia entre estructura `for-each` y método `forEach`

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

### 16. Primera explicación de las funciones lambda

#### 16.1. De un método tradicional a una función anónima

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

#### 16.2. Partes de una lambda

```text
(parametros)  ->  { instrucciones }
     |                 |
 Datos recibidos   Qué hace con ellos
```

La lambda **recibe los datos** que necesita y **ejecuta una acción**. En determinados casos el cuerpo devuelve un resultado; el profesor menciona que, si hay un cuerpo con varias instrucciones, puede ser necesario escribir `return`.

#### 16.3. Lambdas de una sola instrucción

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

#### 16.4. Tipo del parámetro inferido

El profesor observa que en la lambda se escribe simplemente `elemento`, sin `String` delante:

```java
datos.forEach(elemento -> System.out.println(elemento));
```

¿Por qué puede hacerse? Porque **la lista se ha definido como `ArrayList<String>`** y el método sabe que el elemento que se recorre es de ese tipo. La explicación relaciona esta inferencia con el genérico definido al crear la lista.

### 17. `Consumer`, funciones anónimas y callbacks

#### 17.1. ¿Por qué `forEach` necesita un `Consumer`?

Al mirar la firma del método en IntelliJ, el profesor muestra que `forEach` espera un elemento de tipo **`Consumer`**. Lo describe como una acción que se ejecutará cada vez que el recorrido entregue un elemento.

El método de `Consumer` que se desarrolla oralmente corresponde a **`accept`**: acepta cada dato y ejecuta la acción programada. La transcripción registra el nombre de forma deformada como «hacer», pero la función mostrada se corresponde con la operación del consumidor.

#### 17.2. Forma tradicional: clase anónima

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

#### 17.3. `@Override`

Durante la construcción anterior aparece `@Override`. El profesor explica que señala que el método está **sobrescribiendo una operación ya declarada**: la acción existe como contrato, pero todavía hay que especificar qué debe hacer en este caso concreto.

No desarrolla en profundidad las interfaces ni la herencia; las señala como contenidos que se comprenderán mejor en programación orientada a objetos.

#### 17.4. Introducción a los callbacks

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

### 18. Recorrido con `forEach` y lambda

#### 18.1. Simplificar el `Consumer` anterior

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

#### 18.2. Entender cada parte

```java
datos.forEach(elemento -> System.out.println(elemento));
```

- `datos`: la lista que se desea recorrer.
- `.forEach(...)`: el método encargado de iterar.
- `elemento`: el dato que recibe la función en cada vuelta.
- `->`: separa el dato recibido de la acción.
- `System.out.println(elemento)`: lo que se hace con ese dato.

**La operación que está entre paréntesis no se ejecuta una sola vez para toda la lista:** se aplica a cada elemento.

#### 18.3. La acción se puede cambiar

El valor del método es que no obliga a imprimir siempre de la misma manera. Por ejemplo, en la explicación se menciona que el cuerpo puede tener instrucciones adicionales:

```java
datos.forEach(elemento -> {
    System.out.println("Ejecutando impresión");
    System.out.println(elemento);
});
```

El recorrido sigue siendo responsabilidad del método; la operación concreta la decide el programador.

#### 18.4. Tres maneras de conseguir una salida semejante

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

### 19. Referencias a métodos con `::`

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

#### 19.1. Qué debe reconocerse ahora

No se exige desarrollar todavía todos los usos de `::`. El objetivo inmediato es **reconocer que las dos expresiones anteriores representan el mismo comportamiento en el ejemplo**.

```text
Recorrer los elementos de datos
             ↓
Entregar cada elemento a println
```

La sesión termina indicando que este estilo aparecerá con frecuencia al trabajar más adelante con **lambdas y streams**.

### 20. Otras operaciones mencionadas y contenidos aplazados

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

#### 20.1. Qué se dice de `stream()`

La explicación lo presenta mediante la imagen de **trabajar con una copia**, para diferenciar la colección de origen de las transformaciones que se hacen sobre sus elementos. Se adelanta que habrá filtros y operaciones compactas que sustituirán recorridos escritos manualmente.

**No se desarrolla una implementación de streams en esta transcripción.** El propio profesor lo reserva para después por su complejidad. En particular, la expresión «copia» es la **analogía docente de esta sesión**, no una descripción detallada de cómo se materializan internamente todas las operaciones.

#### 20.2. Advertencia sobre la lista y su modificación durante el recorrido

Se avisa de que **añadir o eliminar elementos mientras se está recorriendo una lista puede provocar problemas**. En el discurso oral se pronuncian nombres de excepciones de manera inconsistente, de modo que esta clase no conserva una demostración fiable del nombre exacto. La advertencia que sí queda clara es **no modificar el tamaño de la misma colección mientras se está iterando sin controlar ese efecto**.

### 21. Ejemplo de conjunto de operaciones de clase

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

#### 21.1. Evolución de la lista

| Momento | Contenido | Tamaño |
|---|---|---:|
| Creación | `[]` | `0` |
| Después de tres `add` | `[Elemento 1, Elemento 2, Elemento 3]` | `3` |
| Después de `remove(0)` | `[Elemento 2, Elemento 3]` | `2` |
| Después de `clear()` | `[]` | `0` |

**Observación:** las cuatro variantes de recorrido no se necesitan simultáneamente en un programa real. Se muestran juntas para comparar su sintaxis y comprobar que procesan los mismos elementos.

---

### 22. Conceptos que debo saber explicar

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

### 23. Sintaxis que debo saber escribir

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

### 24. Errores frecuentes y advertencias

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

### 25. Fragmentos incompletos o imprecisos de la transcripción

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



---

## BLOQUE II — Clase sobre ordenación, `Predicate`, streams y temperaturas

**Procedencia de lo que sigue:** reconstrucción de la **segunda transcripción**. Incluye el ejercicio propuesto del gestor de notas. Los códigos reconstruidos se distinguen de las líneas que el audio no permite recuperar literalmente.

### 1. Ordenación natural y ordenación personalizada

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

### 2. Ordenar listas: `Collections.sort` y `lista.sort`

#### 2.1. Ordenación natural con `Collections.sort`

El profesor presenta la operación de ordenar mediante la clase `Collections`:

```java
Collections.sort(palabras);
```

Aquí `palabras` es la lista que se desea ordenar. En el caso de las cadenas, el criterio natural utilizado en el ejemplo es el alfabético.

La importación de esta utilidad es:

```java
import java.util.Collections;
```

#### 2.2. Ordenación con un comparador

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

#### 2.3. Ordenar no significa recibir una lista nueva

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

### 3. `Comparator`: decidir el orden comparando pares

#### 3.1. Qué recibe el método de ordenación

Cuando se pide una ordenación personalizada, IntelliJ indica que espera un dato de tipo **`Comparator`**.

El profesor insiste en aprender a leer lo que pide un método:

- A veces se solicita un número o un texto.
- En este caso se solicita **un comparador**.
- El programador debe proporcionar el comportamiento de ese comparador.

#### 3.2. Método `compare`

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

#### 3.3. El número que devuelve la comparación

En la demostración oral aparecen estos resultados:

- `1` para indicar un sentido de ordenación.
- `-1` para indicar el sentido contrario.

El profesor cambia sus signos para invertir el criterio.

**Precisión indispensable para interpretar correctamente el comparador:** cuando ambos elementos son equivalentes según el criterio, la comparación debe poder producir `0`. El audio solo detalla los casos `1` y `-1`; no muestra una comprobación fiable del caso de igualdad. En los ejemplos reconstruidos se incluye ese caso para que el criterio quede coherente.

### 4. Qué significa ordenar por longitud de una palabra

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

#### 4.1. Ordenar de menor a mayor longitud

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

#### 4.2. Ordenar de mayor a menor longitud

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

#### 4.3. Las llaves en un `if` con una instrucción

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

### 5. Recordatorio: `for` indexado y `for-each` iterado

Durante la revisión de los ejercicios, el profesor vuelve a distinguir dos formas de recorrido:

#### 5.1. `for`: hay un índice explícito

```java
for (int i = 0; i < temperaturas.size(); i++) {
    System.out.println(temperaturas.get(i));
}
```

Se conoce el número de la posición que se consulta en cada vuelta, porque la variable `i` forma parte de la cabecera.

#### 5.2. `for-each`: se recibe el elemento directamente

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

### 6. Problema de eliminar mientras se recorre

En la corrección de un ejercicio con temperaturas negativas, un alumno observa que **no se han eliminado todos los valores esperados**. El profesor identifica el origen: se están borrando elementos mientras se recorre la misma lista.

#### 6.1. Por qué un `for` por índices puede saltarse valores

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

#### 6.2. Por qué el `for-each` tampoco es la solución para borrar de esa forma

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

### 7. `removeIf` y `Predicate`

#### 7.1. Qué hace `removeIf`

El profesor muestra que las listas disponen de `removeIf`, que se utiliza cuando se quiere **eliminar elementos que cumplen una condición**.

En el ejercicio, esa condición es:

```java
temperatura < 0
```

El método permite que **el propio recorrido y eliminación los gestione la colección**.

```java
temperaturas.removeIf(temperatura -> temperatura < 0);
```

#### 7.2. Qué representa `Predicate`

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

#### 7.3. Forma extensa del predicado

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

#### 7.4. Simplificación de la condición

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

#### 7.5. Por qué no se llama `Collections.removeIf`

El profesor intenta aclarar por qué esta operación se invoca **sobre la lista**:

```java
temperaturas.removeIf(...);
```

y no del mismo modo que algunas utilidades estáticas de ordenación:

```java
Collections.sort(temperaturas);
```

El objetivo del razonamiento es **distinguir los métodos disponibles en el propio objeto de las funciones generales de la clase de utilidad `Collections`**. No se introduce una implementación de colecciones distinta.

### 8. Ejercicio central: gestor de temperaturas

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

### 9. Organización del proyecto: `main` y métodos

#### 9.1. Lista compartida como variable estática

El profesor declara una variable a nivel de clase para que los distintos métodos estáticos utilizados en el ejercicio puedan operar sobre la misma lista:

```java
static ArrayList<Double> temperaturas = new ArrayList<>();
```

La idea es tener **una sola colección de temperaturas** para todas las opciones del menú.

Como el programa parte de `main`, que es un método `static`, el profesor también construye como `static` los métodos auxiliares de la corrección.

#### 9.2. Diferencia entre la entrada de datos y la lógica

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

#### 9.3. Ejemplo del flujo de añadir

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

#### 9.4. Cuándo crear un método auxiliar

El profesor no propone extraer indiscriminadamente cada línea. Su criterio práctico para este ejercicio es:

- Si la operación es muy sencilla y se resuelve en una línea, puede dejarse directamente en el `case`.
- Si requiere varias instrucciones o cálculos, conviene encapsularla en un método con un nombre que describa su función.

Esto se refleja en la corrección: para mostrar u ordenar se consideran soluciones directas; para buscar, hallar extremos o calcular la media se presentan métodos propios.

### 10. Opción 1: añadir una temperatura

#### 10.1. Solicitar el dato en `main`

El usuario elige la opción 1 y se le pide una temperatura:

```java
System.out.println("Indica la temperatura a registrar:");
double temperatura = lector.nextDouble();
```

El profesor pasa de una primera versión con enteros a trabajar con **`double`**, porque las temperaturas pueden incluir decimales.

#### 10.2. Pasar el dato al método

```java
anadirTemperatura(temperatura);
```

El nombre concreto del método puede variar; aquí se utiliza un nombre descriptivo en una reconstrucción didáctica.

#### 10.3. Definir el método

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

#### 10.4. Para qué sirven los parámetros en este ejemplo

Un alumno pregunta por qué algunos métodos llevan un dato entre paréntesis y otros no.

La explicación del profesor es práctica: **un método debe recibir los datos que necesite para hacer su trabajo**.

El método de añadir requiere saber **qué temperatura** hay que registrar, por eso tiene un parámetro. El método para mostrar toda la lista no necesita que se le indique una temperatura concreta, porque ya dispone de la colección compartida.

### 11. Opción 2: mostrar las temperaturas

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

#### 11.1. Ejemplo de uso

Se introducen varias temperaturas, algunas positivas, otras negativas y al menos una decimal. Después se elige la opción **mostrar**.

```text
Temperaturas registradas:
4.0
-4.0
-7.0
5.5
```

Los valores anteriores son **una ilustración del funcionamiento**; la secuencia exacta de entradas de la demostración queda parcialmente deformada por el audio.

#### 11.2. Relación con otras formas de recorrer

La operación también se había practicado en la clase anterior con `for` y `for-each`:

```java
for (Double temperatura : temperaturas) {
    System.out.println(temperatura);
}
```

El profesor quiere que se puedan **leer ambas formas**. En esta corrección prefiere hacer visible la nueva sintaxis del método con lambda.

### 12. Opción 3: ordenar las temperaturas

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

#### 12.1. No es necesario construir un `Comparator` para este caso

El profesor muestra que **podría** proporcionar un criterio personalizado, pero insiste en que no hace falta para la ordenación numérica habitual. Una sola llamada a `Collections.sort` ya resuelve el requisito.

#### 12.2. Ordenar de mayor a menor

Durante la explicación se comenta una variante: ordenar primero y después **dar la vuelta** al orden con `reverse`.

```java
Collections.sort(temperaturas);
Collections.reverse(temperaturas);
```

Se recalca que `sort` ya ha **modificado la propia lista**. El recorrido posterior permite comprobar el orden conseguido.

#### 12.3. Un criterio distinto del natural

El profesor menciona situaciones imaginarias como:

- querer primero los números pares y después los impares;
- querer ordenar según algún múltiplo;
- establecer otro sentido o prioridad de comparación.

Estos ejemplos se utilizan para explicar por qué **no todos los criterios de ordenación son los naturales**. No se desarrolla en el audio un comparador completo para cada una de esas situaciones.

### 13. Opción 4: buscar y contar coincidencias

La opción de búsqueda no consiste únicamente en decir si una temperatura aparece **una vez**, sino en contar **todas sus apariciones**.

Ejemplo:

```text
Temperaturas registradas: [1.0, 2.0, -4.0, 1.0, 2.0]
Temperatura buscada:       1.0
Resultado:                 aparece 2 veces
```

Si no se encuentra ninguna coincidencia, el enunciado comentado en la corrección pide informar de que **no hay una temperatura registrada con ese valor**.

#### 13.1. Primer paso: recibir el dato que se busca

En `main`:

```java
System.out.println("Indica la temperatura a buscar:");
double buscada = lector.nextDouble();
buscarTemperatura(buscada);
```

Se lleva el dato al método que implementa la lógica.

#### 13.2. Segundo paso: preparar un contador

En el método:

```java
int veces = 0;
```

Se empieza en cero porque, antes de examinar la lista, **todavía no se ha encontrado ninguna coincidencia**.

#### 13.3. Tercer paso: recorrer toda la lista

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

#### 13.4. Por qué no utilizar `break`

Un alumno propone parar cuando se encuentre la coincidencia. El profesor recuerda que el objetivo es **contar cuántas veces aparece**, no detectar únicamente la primera aparición.

Si se ejecuta `break` después de una coincidencia, **se dejan de analizar los elementos restantes** y se pierde el número total de apariciones.

Este es un ejemplo claro de cómo **el enunciado determina dónde debe terminar el recorrido**.

#### 13.5. Variante con operador ternario

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

#### 13.6. Variante con `for` indexado

El mismo algoritmo puede escribirse con posiciones:

```java
for (int i = 0; i < temperaturas.size(); i++) {
    if (temperaturas.get(i) == buscada) {
        veces++;
    }
}
```

**No hay una diferencia en el resultado del ejercicio.** Lo que cambia es cómo se obtiene cada valor: directamente con `for-each` o mediante `get(i)`.

#### 13.7. Mostrar el resultado

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

### 14. Por qué la lambda de `forEach` dificulta modificar un contador local

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

#### 14.1. Qué problema observa el profesor

- La variable `veces` se ha declarado **fuera** de la lambda.
- Se intenta **cambiar su valor dentro** de esa lambda.
- El entorno de Java pide que la variable local utilizada desde la lambda no cambie de esa forma.

Durante la explicación se utiliza la expresión «operación atómica» para describir el obstáculo. **Esa expresión es una simplificación oral imprecisa** para este caso; lo que permite identificar la demostración es el problema de **modificar una variable local capturada** por una lambda.

El profesor no desarrolla formalmente la solución mediante mecanismos de concurrencia o contadores especiales y **no quiere que el alumnado los utilice aquí**.

#### 14.2. Decisión pedagógica de la clase

La recomendación inmediata es:

1. Resolver el recuento tradicionalmente con `for` o `for-each`, que ya se domina.
2. Aprender a leer otra solución utilizando un **stream**.

No se exige reescribir forzosamente todo el programa utilizando lambdas.

### 15. Introducción práctica a los streams

Esta es la primera explicación práctica extensa de **streams** que se conserva en los dos archivos nuevos.

#### 15.1. La imagen que utiliza el profesor

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

#### 15.2. Obtener un stream

```java
temperaturas.stream()
```

El profesor muestra que sobre el resultado empiezan a aparecer otros métodos.

#### 15.3. Operaciones mencionadas

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

### 16. Filtrar con `filter` y contar con `count`

El objetivo es calcular cuántas temperaturas son iguales a una temperatura buscada.

#### 16.1. Primer método: `filter`

```java
temperaturas.stream().filter(elemento -> elemento == buscada)
```

**Qué hace la condición:** examina cada valor y decide si se conserva en el resultado del filtrado.

- Si la condición da `true`, ese elemento pasa el filtro.
- Si da `false`, no pasa el filtro.

**No se debe confundir con `removeIf`:**

- `filter` **selecciona** elementos en el procesamiento del stream.
- `removeIf` **borra** elementos de la lista original que cumplen la condición.

#### 16.2. `Predicate` y método `test`

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

#### 16.3. Añadir `count()`

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

#### 16.4. Ejemplo completo de búsqueda con stream

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

#### 16.5. Por qué el profesor muestra ambas formas

El profesor afirma que en el trabajo profesional se encontrarán expresiones compactas con operaciones encadenadas. Sin embargo, indica que **en este momento es normal que resulten difíciles** y que el objetivo es acostumbrarse a leerlas gradualmente.

**No sustituye la obligación de comprender el algoritmo manual.** Se muestran dos escrituras para el mismo problema, una más explícita y otra más compacta.

### 17. Opción 5: mostrar el máximo y el mínimo

El ejercicio requiere mostrar **los extremos de las temperaturas registradas**.

El profesor propone una estrategia directa:

1. **Ordenar** la lista.
2. Consultar el **primer** elemento.
3. Consultar el **último** elemento.

#### 17.1. Por qué se ordena dentro de la opción

No hay que exigir al usuario que haya elegido antes la opción 3. Si el usuario solicita los extremos directamente, **el programa debe realizar los pasos que necesite por sí mismo**.

Este punto se recalca durante la corrección.

#### 17.2. Reconstrucción del método

```java
public static void mostrarExtremos() {
    Collections.sort(temperaturas);

    System.out.println("Mínima: " + temperaturas.getFirst());
    System.out.println("Máxima: " + temperaturas.getLast());
}
```

El nombre exacto del método varía en el discurso entre «ordenar», «máximo y mínimo» y «extremos». El comportamiento que sí queda claro es **ordenar y consultar ambos extremos**.

#### 17.3. Comprobación conceptual

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

#### 17.4. Caso no resuelto expresamente en la grabación

El método anterior supone **que hay al menos una temperatura**. No se registra cómo se controló la opción cuando la lista está vacía. No se atribuye al profesor una validación de ese caso que no aparece en el audio.

### 18. Opción 6: calcular la media

El profesor comienza con el procedimiento tradicional para que se vea el proceso matemático antes de la versión mediante stream.

#### 18.1. Qué datos se necesitan

Para calcular una media de varias temperaturas:

```text
Media = suma de las temperaturas / cantidad de temperaturas
```

Por tanto, se necesita:

- Un **acumulador** para la suma.
- Una forma de **recorrer** todos los valores.
- El **tamaño** de la lista para saber entre cuántos valores se divide.

#### 18.2. Inicializar el acumulador

```java
double suma = 0;
```

Empieza en cero porque todavía no se ha sumado ninguna temperatura.

#### 18.3. Recorrer y acumular

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

#### 18.4. Dividir entre la cantidad de elementos

```java
double media = suma / temperaturas.size();
```

Con el ejemplo anterior:

```text
Suma = 9
Cantidad = 3
Media = 9 / 3 = 3
```

#### 18.5. Método completo en la forma tradicional

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

### 19. `mapToDouble` y `average`

Después del procedimiento manual, el profesor introduce una manera compacta mediante streams.

#### 19.1. Por qué transformar a una secuencia numérica

En el audio se compara una secuencia de objetos con una secuencia preparada para operar con números.

El profesor imagina que, en lugar de un simple conjunto de temperaturas numéricas, se estuviera trabajando con otros tipos de elementos. Para poder realizar sumas, medias o cálculos de extremos, interesa obtener **los valores numéricos relevantes**.

La operación que muestra es:

```java
mapToDouble(...)
```

#### 19.2. Aplicación sobre la lista de temperaturas

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

#### 19.3. Obtener la media con `average`

A continuación se introduce:

```java
temperaturas.stream()
        .mapToDouble(temperatura -> temperatura)
        .average()
```

El significado de `average` es calcular la media de los valores numéricos que han llegado a esa fase.

#### 19.4. Qué no queda completo en la grabación

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

### 20. Opción 7: limpiar temperaturas negativas

La opción de limpieza consiste en **eliminar de la colección todas las temperaturas inferiores a cero**.

El profesor compara varias estrategias, precisamente porque en la corrección previa se había detectado un fallo al borrar mientras se recorría.

#### 20.1. Primera idea: `for` con `remove`

Un planteamiento inicial sería comprobar cada posición y borrarla si contiene un número negativo:

```java
for (int i = 0; i < temperaturas.size(); i++) {
    if (temperaturas.get(i) < 0) {
        temperaturas.remove(i);
    }
}
```

El profesor advierte que se puede **saltar valores** como consecuencia del cambio de tamaño y de los desplazamientos de índices.

#### 20.2. Segunda idea: `for-each` con `remove`

Tampoco conviene utilizar directamente el borrado estructural de la misma lista dentro del `for-each`, porque se modifica mientras se está iterando.

La grabación nombra una excepción de manera inconsistente. El problema que se identifica con seguridad es **modificar estructuralmente la colección que está siendo recorrida**.

#### 20.3. Solución que desarrolla: `removeIf`

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

#### 20.4. Variante explicativa con streams

El profesor también plantea **filtrar los valores que se quieren conservar**, en lugar de eliminarlos uno a uno de la lista.

La estructura conceptual es:

```java
temperaturas.stream()
        .filter(temperatura -> temperatura >= 0)
```

Con el criterio «eliminar negativos», los valores que se conservan son **los mayores o iguales que cero**.

**Importante:** el audio utiliza oralmente en un momento «mayor que cero» para la variante con stream. Eso excluiría también el `0`, aunque el enunciado consiste en eliminar **negativos**. Esta diferencia no se debe ocultar: `> 0` conserva solo positivos estrictos; `>= 0` conserva positivos y cero. La segunda condición es la que corresponde literalmente al objetivo de borrar únicamente negativos.

#### 20.5. Transformar el filtrado en una colección

El docente menciona que un stream puede convertirse en una lista, pero aparece una discusión de tipos entre `List` y `ArrayList` y **el audio no conserva de forma segura la asignación completa utilizada**.

Lo esencial que se explica es:

- **`removeIf` actúa sobre la lista original** eliminando elementos.
- **`filter` selecciona elementos** dentro del procesamiento del stream.
- Para sustituir la colección original por el resultado filtrado, haría falta **guardar o asignar ese resultado** mediante una construcción adecuada.

La sesión recomienda `removeIf` como resolución sencilla de la opción 7. No se inventa aquí un cast ni una reasignación cuya corrección no puede verificarse con la transcripción.

### 21. Opción 8: salir del programa

La última opción es **salir**.

El profesor pregunta expresamente si tiene sentido crear un método auxiliar para esa acción tan sencilla y concluye que **no hace falta crear un método específico** solo por completar el mismo esquema del resto de opciones.

Se muestra un mensaje de despedida:

```java
System.out.println("Saliendo");
```

El método de repetición del menú no se conserva completo en el audio, pero el `switch` de ocho opciones y la necesidad de salir quedan claros. En el ejemplo integrado del apartado siguiente se utiliza un `do while` de menú coherente con las estructuras ya estudiadas.

### 22. Código integrado del ejercicio de temperaturas

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

#### 22.1. Cómo se distribuyen las responsabilidades

| Parte del programa | Responsabilidad |
|---|---|
| Variable estática `temperaturas` | Mantener los valores accesibles a los métodos de la clase. |
| `main` | Mostrar opciones, leer datos y decidir qué operación ejecutar. |
| `anadirTemperatura` | Añadir el valor recibido. |
| `buscarTemperatura` | Contar coincidencias y presentar el resultado. |
| `mostrarExtremos` | Ordenar y consultar mínimo y máximo. |
| `calcularMedia` | Acumular y dividir entre el tamaño. |
| `removeIf` en el `case 7` | Borrar los valores negativos sin escribir el recorrido manual. |

#### 22.2. Ejecución razonada

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

#### 22.3. Límites que no se resuelven en la grabación

El ejemplo integrado responde al flujo **normal** descrito durante la corrección. No conviene interpretarlo como una solución validada para todas las entradas posibles:

- Si se elige **mostrar extremos** antes de añadir ningún dato, no se ha documentado en la clase cómo evitar acceder al primero o último de una lista vacía.
- Si se elige **calcular media** sobre una lista vacía, falta definir cómo se desea informar de una media sin datos.
- Si el usuario introduce texto donde se espera `nextInt()` o `nextDouble()`, no se ha descrito aquí la gestión del error.
- El código utiliza `getFirst()` y `getLast()`, métodos vistos por el profesor en el entorno de Java empleado en clase.

**Estas situaciones se registran como puntos de comprobación; no se atribuye a la transcripción una validación inexistente.**

### 23. Nuevo ejercicio propuesto: gestor de notas

Al terminar la corrección, el profesor plantea **un nuevo ejercicio para realizar de cara al jueves**: construir un **gestor de notas**.

La transcripción conserva el objetivo general, las operaciones y varios ejemplos de uso. No incluye su resolución.

#### 23.1. Qué debe guardar el programa

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

#### 23.2. Operaciones solicitadas

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

#### 23.3. Ejemplo: añadir nota

El usuario elige añadir e introduce:

```text
Asignatura: Programación
Nota: 7
```

El sistema debe guardar ambos datos relacionados. La clave lógica del ejercicio es **no perder la correspondencia entre asignatura y calificación**.

#### 23.4. Ejemplo: mostrar todas las notas

Si se registran las cuatro asignaturas anteriores, el programa debe poder mostrar:

```text
Programación: 7
Sistemas: 4
Lenguaje de Marcas: 3
Bases de Datos: 6
```

Esto exige recorrer la colección y consultar las dos partes de cada registro.

#### 23.5. Ejemplo: consultar por asignatura

El usuario escribe `Programación` y el sistema localiza la nota que se había guardado junto a esa asignatura:

```text
La nota de Programación es 7
```

La clase no desarrolla un algoritmo definitivo de búsqueda ni la comparación exacta de nombres; el ejercicio queda propuesto.

#### 23.6. Ejemplo: media general

El programa también debe ser capaz de mostrar una media de las calificaciones registradas.

En la exposición se oye una media de ejemplo, pero el valor pronunciado **no se corresponde con claridad con las cuatro notas citadas a continuación**, de modo que no se atribuye ese resultado como cálculo comprobado.

La idea exigida es la misma lógica ya practicada con temperaturas:

```text
Suma de todas las notas / cantidad de notas
```

#### 23.7. Ejemplo: mostrar suspensos

Con las notas de ejemplo:

```text
Programación: 7
Sistemas: 4
Lenguaje de Marcas: 3
Bases de Datos: 6
```

las asignaturas suspensas que menciona el profesor son **Sistemas** y **Lenguaje de Marcas**.

#### 23.8. Ejemplo: aplicar un factor de corrección

En el ejemplo oral, la corrección consiste en **sumar un punto a las notas suspensas**.

```text
Sistemas:           4 -> 5
Lenguaje de Marcas:  3 -> 4
```

El audio contiene una frase que parece afirmar que la nota `3` seguiría siendo `3` después de sumar un punto. Es una **inconsistencia aritmética del fragmento**, por lo que se conserva la regla expresada («sumar uno») y se indica aquí su resultado coherente.

No se especifica en la transcripción una política general para notas cercanas al límite superior ni otras reglas de corrección.

#### 23.9. Ejemplo: modificar una nota

El usuario puede solicitar modificar una asignatura concreta:

```text
Asignatura: Programación
Nota anterior: 7
Nota nueva: 6
```

Al finalizar, la nota asociada a Programación debe pasar a ser `6`, sustituyendo el valor anterior.

#### 23.10. Qué razonamiento exige el nuevo ejercicio

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

### 24. Conceptos que debo saber explicar

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

### 25. Sintaxis que debo saber escribir

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

#### 25.1. Esquema de predicado con varias instrucciones

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

#### 25.2. Método que recibe el dato como parámetro

```java
public static void anadirTemperatura(double temperatura) {
    temperaturas.add(temperatura);
}
```

La cabecera sirve de recordatorio de que el tipo y nombre del parámetro van **entre paréntesis**, y de que `main` debe pasar el valor al llamar al método.

### 26. Errores frecuentes mencionados en clase

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

### 27. Puntos que la transcripción no conserva correctamente

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



---

## BLOQUE III — Análisis del código `HashMap` facilitado por el profesor

**Fuente:** código Java pegado por el alumno en esta conversación, identificado como ejemplo utilizado por el profesor. **No consta en estas dos grabaciones la secuencia de explicación de este código**, por lo que el análisis se hace del programa entregado y no se presenta como una transcripción de lo que dijo durante su ejecución.

### III.1. Programa del profesor, normalizado únicamente en formato

Los bloques comentados se conservan porque muestran métodos que el profesor dejó como posibilidades. Solo las instrucciones no comentadas se ejecutan.

```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        HashMap<Integer, String> alumnos = new HashMap<>();

        alumnos.put(1234, "Alex");
        alumnos.put(2345, "Juan");
        alumnos.put(3456, "Maria");
        alumnos.put(4567, "Lucia");
        alumnos.replace(4567, "Celia");

        /*
        for (int i = 0; i < alumnos.size(); i++) {
            alumnos.get(i);
        }
        */

        /*
        Iterator<String> values = alumnos.values().iterator();
        while (values.hasNext()) {
            String nombre = values.next();
            System.out.println(nombre);
        }
        */

        Set<Integer> keys = alumnos.keySet();
        for (Integer item : keys) {
            String nombre = alumnos.get(item);
            System.out.println(nombre);
        }

        // System.out.println("Borrado " + alumnos.remove(1234, "Alex"));
        // System.out.println("Borrado " + alumnos.remove(1234));
        // alumnos.containsValue("Alex");
        // int key = 1234;
        // System.out.println(alumnos.containsKey(key) ? alumnos.get(key) : "no esta");

        /*
        if (alumnos.containsKey(key)) {
            System.out.println(alumnos.get(key));
        } else {
            System.out.println("No esta");
        }
        */

        // String alumno = alumnos.getOrDefault(3456, "no esta");
        // System.out.println(alumno);

        /*
        String nombre = alumnos.get(1234);
        if (nombre != null) {
            System.out.println("El nombre correspondiente es " + nombre);
        } else {
            System.out.println("El alumno no esta en la lista");
        }
        */

        // alumnos.put(1234, "Juan");  // Sustituye el valor asociado a la clave 1234.
        System.out.println("El tamaño de la lista es " + alumnos.size());
    }
}
```

### III.2. Estado exacto del mapa después de las instrucciones activas

| Clave (`Integer`) | Valor (`String`) | Motivo |
|---:|---|---|
| `1234` | `Alex` | Primer `put` |
| `2345` | `Juan` | Segundo `put` |
| `3456` | `Maria` | Tercer `put` |
| `4567` | `Celia` | `Lucia` se sustituye por `Celia` con `replace` |

- El mapa conserva **cuatro asociaciones**: `alumnos.size()` devuelve `4`.
- El bucle activo muestra **Alex, Juan, Maria y Celia**, pero **no se debe deducir un orden concreto de impresión** de un `HashMap`.
- `get(i)` con `i` desde `0` hasta `3` no consulta las cuatro posiciones: esas cifras se interpretan como **claves** `0`, `1`, `2`, `3`. En el ejemplo no existen. Además, el bucle comentado ni siquiera imprimía sus resultados.

### III.3. Tabla de métodos presentes en el código

| Código | Operación | Resultado o efecto |
|---|---|---|
| `put(clave, valor)` | Insertar asociación | Si la clave ya existe, sustituye el valor anterior. |
| `get(clave)` | Consultar por clave | Devuelve el valor o `null` si no hay asociación con esa clave. |
| `replace(clave, valor)` | Sustituir valor existente | No inserta una clave inexistente con esta sobrecarga. |
| `size()` | Contar asociaciones | Devuelve un `int`. |
| `keySet()` | Obtener claves | Devuelve un `Set<Integer>` recorrible. |
| `values()` | Obtener valores | Devuelve una colección recorrible de `String`. |
| `containsKey(clave)` | Comprobar si hay clave | Devuelve `boolean`. |
| `containsValue(valor)` | Comprobar si hay valor | Devuelve `boolean`. |
| `getOrDefault(clave, defecto)` | Consulta con alternativa | Devuelve el valor de la clave o el valor de reserva si no existe. |
| `remove(clave)` | Eliminar asociación por clave | Devuelve el valor eliminado, o `null` si no existía. |
| `remove(clave, valor)` | Eliminar solo cuando coinciden ambos | Devuelve `true` o `false`. |

**Advertencia de interpretación:** los métodos comentados no se ejecutan en el programa tal y como está entregado. Si se activan, el estado y la salida pueden cambiar.

### III.4. Por qué `keySet()` sí permite un `for-each`

```java
Set<Integer> keys = alumnos.keySet();

for (Integer clave : keys) {
    String nombre = alumnos.get(clave);
    System.out.println(nombre);
}
```

El `for-each` no recorre directamente el mapa como si fuese un array: recorre el **conjunto de claves** que se obtiene del mapa. En cada vuelta, el método `get(clave)` busca el nombre asociado.

**Seguimiento conceptual, sin asumir orden de iteración:**

| Clave recibida | Consulta | Resultado |
|---:|---|---|
| `1234` | `alumnos.get(1234)` | `Alex` |
| `2345` | `alumnos.get(2345)` | `Juan` |
| `3456` | `alumnos.get(3456)` | `Maria` |
| `4567` | `alumnos.get(4567)` | `Celia` |

### III.5. Segundo recorrido que aparece comentado: `Iterator`

```java
Iterator<String> valores = alumnos.values().iterator();
while (valores.hasNext()) {
    String nombre = valores.next();
    System.out.println(nombre);
}
```

- `values()` proporciona los valores asociados, sin necesitar consultar cada clave.
- `iterator()` crea un iterador sobre esa colección.
- `hasNext()` pregunta si queda un elemento por recorrer.
- `next()` obtiene el siguiente valor.
- Se recorren los **valores**; no se obtiene en ese mismo bucle la clave correspondiente.

### III.6. Operaciones comentadas: predicción de su comportamiento

**Situación de referencia:** mapa con cuatro claves y con `4567 → Celia`.

| Si se ejecutase esta instrucción de forma aislada | Comportamiento esperado |
|---|---|
| `alumnos.getOrDefault(3456, "no esta")` | Devuelve `Maria`. |
| `alumnos.getOrDefault(9999, "no esta")` | Devuelve `no esta`. |
| `alumnos.containsKey(1234)` | `true`. |
| `alumnos.containsKey(0)` | `false`. |
| `alumnos.containsValue("Lucia")` | `false`: fue sustituida. |
| `alumnos.remove(1234, "Alex")` | `true`: elimina la asociación exacta. |
| `alumnos.remove(1234, "Celia")` | `false`: no coinciden clave y valor. |
| `alumnos.remove(1234)` | Devuelve `Alex` si esa clave todavía existe. |
| `alumnos.put(1234, "Juan")` | Cambia el nombre de la clave `1234`; el tamaño sigue siendo cuatro. |

**Importante:** cada predicción presupone que se vuelve a partir del estado de referencia. Ejecutarlas sucesivamente, especialmente las eliminaciones, altera resultados posteriores.

### III.7. Qué debes dominar después de estudiar el código

1. Elegir una **clave** que identifique lo que se desea consultar.
2. Saber que dos inserciones con la **misma clave** no crean dos posiciones independientes.
3. Determinar cuándo un método **devuelve un resultado** y cuándo también **modifica la colección**.
4. Distinguir `alumnos.get(1234)` de `datos.get(0)` en una lista.
5. Recorrer un mapa mediante claves o valores sin depender del orden.
6. Predecir exactamente el estado del mapa tras una secuencia de `put`, `replace` y `remove`.

---

## BLOQUE IV — Precisiones técnicas y puente hacia el ejercicio del banco

> **Esta parte NO es una reconstrucción de la explicación del profesor.** Introduce únicamente las precisiones necesarias para trabajar con Java de forma correcta y organiza el estudio solicitado. Cuando se remite al banco, el punto de partida es el **enunciado y el intento inicial facilitados por el alumno**, no una solución atribuida al profesor.

### IV.1. `List` frente a `ArrayList`: distinción necesaria

En el segundo audio se menciona que una operación sobre un stream puede devolver una `List` en lugar de una `ArrayList` y se presenta `List` de forma informal como más genérica. La precisión de Java es:

- `List` es una **interfaz**: define operaciones comunes de listas y el contrato de comportamiento.
- `ArrayList` es una **clase concreta** que implementa `List`.
- Por eso esta declaración es correcta:

```java
import java.util.List;
import java.util.ArrayList;

List<String> nombres = new ArrayList<>();
nombres.add("Ana");
System.out.println(nombres.get(0));
```

La variable está declarada como `List<String>` y el objeto concreto creado es un `ArrayList<String>`. Este matiz se introduce aquí para entender la nomenclatura que aparece en clase; el profesor **no desarrolla la teoría de interfaces en estas dos transcripciones**.

### IV.2. Aclaraciones imprescindibles donde el audio puede inducir a error

| Formulación aproximada del audio | Precisión para estudiar correctamente Java |
|---|---|
| «Un `HashMap` no se puede recorrer con `for-each`». | No se recorre *directamente* como una lista, pero **sí** mediante `keySet()`, `values()` o `entrySet()`, que proporcionan vistas recorribles. El código del profesor lo demuestra con `keySet()`. |
| «Un stream es una copia del array/lista». | Es una **secuencia de procesamiento de datos**. Las operaciones como `filter` no modifican por sí mismas la lista de origen; no deben interpretarse siempre como crear de inmediato una copia física completa. |
| «Si `remove(indice)` no puede borrar, devuelve `null`». | Si el índice está fuera de rango en una `ArrayList`, se produce una excepción de índice; no es una comprobación de existencia segura. |
| «Borrar durante `for-each` provoca desbordamiento de pila». | La modificación estructural no permitida durante un recorrido de `ArrayList` suele dar lugar a `ConcurrentModificationException`; el borrado manual por índices puede también saltarse valores. |
| «Crear una lista con capacidad inicial reserva posiciones accesibles». | La **capacidad** de un `ArrayList` no equivale a su **tamaño**: aunque se indique una capacidad inicial, `size()` puede seguir siendo `0` hasta añadir elementos. |
| «`List` es el padre de `ArrayList`». | Es una explicación orientativa de generalidad; formalmente es una **interfaz** que `ArrayList` implementa. |

Estas observaciones no convierten tales detalles en contenidos exigibles por el profesor; únicamente evitan estudiar un comportamiento erróneo del lenguaje.

### IV.3. Comparativa de sintaxis para no confundirte

| Objetivo | Array | `ArrayList` o `List` | `HashMap` |
|---|---|---|---|
| Declarar | `int[] a = {2, 4};` | `List<Integer> a = new ArrayList<>();` | `HashMap<Integer, String> m = new HashMap<>();` |
| Obtener un valor | `a[0]` | `a.get(0)` | `m.get(1234)` |
| Añadir | No tiene `add` | `a.add(6)` | `m.put(1234, "Ana")` |
| Modificar | `a[0] = 6` | `a.set(0, 6)` | `m.replace(1234, "Eva")` |
| Borrar | No hay `remove` directo | `a.remove(0)` | `m.remove(1234)` |
| Tamaño | `a.length` | `a.size()` | `m.size()` |
| Recorrer | `for` / `for-each` | `for` / `for-each` | `for-each` sobre `keySet()`/`values()` |

### IV.4. Cómo interpretar `HashMap<Integer, Object[]>` sin resolver el banco

El esqueleto del ejercicio para casa declara:

```java
static HashMap<Integer, Object[]> cuentas = new HashMap<>();
```

Lee la declaración **de dentro hacia fuera**:

- `Integer`: cada registro estará asociado a una **clave entera**.
- `Object[]`: cada valor es un **array**, y las posiciones de ese array pueden contener objetos de tipos distintos.
- `HashMap<...>`: permite localizar el array asociado a una clave sin utilizar índices consecutivos.

Este es un **salto respecto al ejemplo del profesor**, donde el valor era solamente un `String` (`HashMap<Integer, String>`). Para resolverlo, necesitaremos practicar antes la lectura y modificación de un `Object[]`, especialmente qué dato se guarda en cada posición y cómo recuperar su tipo.

**No confundir**: la clave del `HashMap`, el identificador incremental de una cuenta y el número de cuenta aleatorio pueden ser **conceptos distintos**. El enunciado no fija por sí solo cuál debe utilizarse como clave del mapa.

### IV.5. Enunciado del banco: requisitos reorganizados (sin solución)

Esta tabla expresa las operaciones solicitadas por el código aportado, sin decidir todavía una implementación:

| Opción | Datos de entrada o condición | Resultado esperado del programa |
|---|---|---|
| 1. Abrir cuenta | Titular, PIN de cuatro dígitos, saldo inicial | Crear cuenta, ID incremental, número de cuenta aleatorio entre 1000 y 10000 y mostrar datos. |
| 2. Consultar | Número de cuenta, titular y PIN | Mostrar saldo cuando coinciden los tres; si no, mensaje de error. |
| 3. Ingresar | Identificación con PIN, titular y número de cuenta, además del importe | Admitir o rechazar operación y confirmar el resultado. |
| 4. Retirar | Identificación, importe y regla relativa a un saldo de `-1000 €` | Retirar si procede; contemplar bloqueo según el criterio del enunciado. |
| 5. Ver descubiertos | Cuentas cuyo saldo es negativo | Mostrar las cuentas que cumplen la condición. |
| 6. Eliminar bloqueadas | Estado de bloqueo | Eliminar las cuentas bloqueadas. |
| 7. Salir | Elección del menú | Finalizar el bucle principal. |

**Ambigüedades de la entrega que no se deben resolver inventando requisitos:**

- «Si tienes -1000 € y quiere sacar se bloquea la cuenta» puede significar bloqueo **al llegar** a `-1000 €`, **al intentar retirar estando ya** en ese saldo o **al intentar sobrepasarlo**. Habrá que concretarlo según la corrección o las instrucciones del profesor.
- No se establece si el intervalo aleatorio incluye ambos extremos; ni cómo actuar ante números de cuenta duplicados.
- La expresión «PIN de cuatro dígitos» necesita decidir cómo se admitiría un PIN como `0123`, que no conserva el cero inicial si se almacena directamente como `int`.
- El borrador inicial solo almacena `{nombre, pin, saldo}` en `Object[]` y no representa aún explícitamente el **número de cuenta** ni el **estado bloqueado**.
- No se define completamente la validación de importes, los límites del saldo inicial ni el tratamiento de nombres con espacios.

**Observaciones sobre el intento aportado:**

1. El método `abrirCuenta` construye un array, pero **todavía no lo guarda en `cuentas`**; por tanto, no crea un registro consultable en el mapa.
2. El `main` lee `pin` y `saldo` como `String`, mientras que el método declarado espera `int` y `double`. Antes de conectarlos debe existir una decisión consistente de tipos o una conversión.
3. El método tiene un contador `id` que se incrementa, pero falta decidir claramente **cuándo** se asigna el ID al nuevo registro.
4. Los casos 2–7 todavía no implementan las operaciones del enunciado; eso es correcto para un borrador, pero no constituye aún una solución.
5. La propuesta de empezar desde cero es razonable para practicar el diseño antes de escribir código, y **no exige aprender técnicas nuevas** ajenas a las colecciones ya trabajadas.

### IV.6. Método de resolución que usaremos al practicar

Antes de escribir **cada caso** del `switch`, se rellenarán estas cuatro preguntas:

1. **Entrada:** ¿qué datos necesito leer?
2. **Almacenamiento:** ¿en qué variable, índice o clave se encuentran?
3. **Operación:** ¿debo añadir, consultar, modificar, recorrer o borrar?
4. **Salida y comprobación:** ¿qué debería mostrar o cambiar, y cómo lo voy a verificar?

Así se evita intentar recordar un `for`, un `if` o un `switch` *por intuición*: cada estructura se elige por la operación que exige el problema.

### IV.7. Ruta de estudio gradual con criterios de dominio

| Fase | Objeto de aprendizaje | Ejercicios prácticos | Criterio para avanzar |
|---|---|---|---|
| 1 | Arrays: índices, tamaño fijo, `for` y `for-each` | Leer, modificar, contar y buscar en arrays | Predecir resultados y escribir un recorrido sin consultar apuntes. |
| 2 | `ArrayList`: `add`, `get`, `set`, `remove`, `size` | Lista de tareas o notas, con inserción y borrado | Explicar los desplazamientos de índice y evitar errores de rango. |
| 3 | `List` frente a `ArrayList` | Declarar variables usando `List` y crear objetos `ArrayList` | Distinguir tipo declarado e implementación sin confundirlos. |
| 4 | `HashMap<Integer, String>` | Alumnos por matrícula: crear, consultar, sustituir, borrar y recorrer | Reconocer la clave correcta y razonar sobre valores que faltan. |
| 5 | Arrays de tipo `Object[]` y mapas con valores compuestos | Registro ficticio sencillo con campos de diferente tipo | Documentar qué significa cada posición y recuperar los datos correctamente. |
| 6 | Integración: menús, métodos, validación y mapas | Diseñar el banco opción a opción | Describir antes la lógica; implementar cada caso; probar aciertos y errores. |
| 7 | Repaso del día 10: ordenaciones, predicados, streams | Rehacer temperaturas en versión tradicional; interpretar versión con streams | Dominar primero los bucles y después leer la variante abreviada. |

**Regla de aprendizaje:** no pasaremos a la siguiente fase solo porque reconozcas la sintaxis. Tendrás que **predecir, escribir, ejecutar y explicar** un ejemplo nuevo. En la conversación se revisará cada ejercicio antes de avanzar.

### IV.8. Primera práctica — solo enunciado; no contiene la solución

```java
int[] edades = {18, 25, 19, 30};
```

Sin ejecutar código ni consultar resultados:

1. ¿Cuántos elementos hay y cuáles son sus índices válidos?
2. ¿Qué valor contiene `edades[2]`?
3. Después de `edades[1] = 40;`, ¿cómo queda el array?
4. Si quieres imprimir **todos** los elementos con un `for`, escribe el código y explica por qué la condición de parada no se pasa del tamaño.

Este ejercicio es el punto de entrada de la clase guiada. **La solución se corregirá después de que el alumno responda.**

---

## Anexo final — Lista de control solicitada para los apuntes de clase

### Conceptos que debes saber explicar

- Qué significa tamaño fijo, tamaño dinámico, índice, clave y valor.
- Diferencia funcional entre array, `ArrayList` y `HashMap`.
- Qué ocurre al añadir o borrar un elemento de una lista indexada.
- Qué es un tipo genérico y por qué se usa `Integer` en lugar de `int` dentro de `< >`.
- Qué hacen `add`, `get`, `set`, `remove`, `size`, `isEmpty`, `contains`, `clear`, `put`, `replace`, `keySet`, `values`.
- Diferencia entre `for`, `for-each` y el método `forEach`.
- Qué recibe un `Consumer`, un `Predicate` y un `Comparator` en los ejemplos explicados.
- Diferencia entre ordenación natural y ordenación por criterio propio.
- Por qué es arriesgado borrar mientras se recorre una lista.
- Qué permite expresar `stream().filter(...).count()` y por qué el profesor insiste en entender primero los bucles tradicionales.

### Sintaxis que debes saber escribir

```java
int[] array = {1, 2, 3};
array[0] = 9;
int largo = array.length;

ArrayList<Integer> lista = new ArrayList<>();
lista.add(10);
int x = lista.get(0);
lista.set(0, 20);
lista.remove(0);
int cantidad = lista.size();

HashMap<Integer, String> mapa = new HashMap<>();
mapa.put(1234, "Ana");
String persona = mapa.get(1234);
boolean existe = mapa.containsKey(1234);
mapa.replace(1234, "Eva");

for (Integer clave : mapa.keySet()) {
    System.out.println(mapa.get(clave));
}

lista.removeIf(numero -> numero < 0);
```

### Errores frecuentes que deben evitarse

- Usar `length` en una lista o `size()` en un array.
- Creer que el tamaño y el último índice son iguales.
- Confundir una clave entera con el índice de un elemento.
- Interpretar `remove` como una operación que nunca devuelve nada.
- No tener en cuenta el desplazamiento de índices tras borrar.
- Confundir `for-each` con `forEach`.
- Modificar el tamaño de un `ArrayList` mientras se recorre de forma inadecuada.
- Pensar que una lista debe estar ya ordenada para poder calcular mínimo y máximo: el método encargado de esa opción debe garantizar sus propios requisitos.
- Calcular la media sin comprobar antes si la colección está vacía.
- Dar por ejecutados fragmentos que el profesor dejó comentados.

### Puntos que las transcripciones no conservan de forma fiable

- Las **líneas exactas mostradas en IntelliJ**, incluidos nombres de variables y algunos tipos de retorno: solo se conserva el audio.
- El segundo audio empieza **a mitad de la explicación de ordenación**.
- Varias expresiones de reconocimiento de voz confunden métodos Java (`sort`, `removeIf`, `for-each`, `Predicate`, `mapToDouble`). Se normalizaron cuando el contexto era inequívoco.
- Algunas operaciones sobre streams se explican mediante la metáfora de «copia», sin una descripción formal de la implementación.
- El caso de listas vacías en mínimo, máximo y media no queda resuelto de forma completa.
- La corrección de las notas tiene **un ejemplo oral inconsistente**: se dice sumar uno a las asignaturas suspensas, pero una de las cifras de ejemplo no cambia como correspondería.
- La transcripción no conserva una explicación completa del nuevo banco. **El enunciado del banco procede del código pegado por el alumno** y se recoge por separado.

**Fin del cuaderno integrado.**

# Apuntes completos — Día 5

> **Procedencia:** apuntes reconstruidos a partir de las clases, aportados al proyecto. Se conservan las advertencias de fidelidad y las ampliaciones que ya estaban etiquetadas. Se han anonimizado identificadores personales cuando procede.

[Volver a la ficha de estudio](../dia-05.md)

## Estructuras de control: `if`, `switch`, flujo de ejecución y ámbito de variables

> **Criterio de estos apuntes.** Se han reconstruido únicamente a partir de la transcripción de la clase 5. La grabación contiene bastantes errores de reconocimiento de voz, por lo que se han corregido solamente términos evidentes por contexto (`if`, `else`, `else if`, `switch`, `case`, `default`, `break`, `continue`, `while`, `do while`, `for`, `foreach`, `String`, `char`, `Reformat Code`, `Refactor Rename`, etc.). No se ha añadido teoría externa para completar partes perdidas. Cuando la sintaxis, un valor o un ejemplo no quedan registrados con suficiente fiabilidad, se indica expresamente.

---

# 1. De la ejecución secuencial a las estructuras de control

Hasta ahora, los programas se habían planteado principalmente como una sucesión de instrucciones dentro de `main`:

```java
public static void main(String[] args) {
    // línea 1
    // línea 2
    // línea 3
    // línea 4
}
```

En este modelo básico, las instrucciones se ejecutan **secuencialmente**, es decir, una detrás de otra.

La clase introduce ahora una idea fundamental: un programa real no se limita a ejecutar siempre todas sus líneas en el mismo orden. Según los datos y las situaciones, será necesario:

- ejecutar unos bloques y saltarse otros;
- elegir entre varias alternativas;
- repetir determinadas instrucciones;
- abandonar o saltar iteraciones concretas.

Para gestionar ese flujo aparecen las **estructuras de control**.

El profesor las presenta inicialmente en grandes bloques:

1. **Estructuras condicionales o de selección**.
2. **Estructuras de repetición**.
3. Sentencias como **`break` y `continue`**, que modifican el flujo dentro de otras estructuras.

En esta clase el desarrollo principal se centra en las estructuras condicionales `if` y `switch`.

---

# 2. Estructuras condicionales

Las estructuras condicionales permiten decidir **qué bloque de código se ejecuta**.

Se trabajan dos familias principales:

- `if`, con sus variantes `if`, `if-else` e `if-else if-else`;
- `switch`, basado en distintos `case`.

La diferencia conceptual explicada es:

- con `if` se evalúan **condiciones** cuyo resultado es verdadero o falso;
- con `switch` se evalúa **un valor** y se busca qué caso coincide con él.

---

# 3. Introducción a las estructuras de repetición

Aunque no se desarrollan todavía en profundidad, el profesor presenta las estructuras que se estudiarán posteriormente.

## 3.1. `for`

Se presenta como una repetición controlada mediante:

- un valor inicial;
- un final o condición;
- un incremento.

Ejemplo conceptual comentado: recorrer valores desde un inicio hasta un final con incremento de `1`, `2`, etc.

La idea es que el bloque asociado al `for` se repita mientras se mantenga la lógica establecida.

## 3.2. `foreach`

Se menciona como una forma especial relacionada con `for` que servirá para recorrer **estructuras de datos**, contenido que se verá más adelante.

No se desarrolla su sintaxis en esta clase.

## 3.3. `while`

La idea explicada es:

> Mientras se cumpla una condición, el bloque se sigue repitiendo.

Por tanto, primero se comprueba la condición y, si permite continuar, se ejecuta la repetición.

## 3.4. `do while`

Se presenta como una variante en la que primero se ejecuta el bloque y después se comprueba si debe repetirse.

La diferencia que quiere destacar el profesor es el orden:

```text
while    -> comprueba y después ejecuta

do while -> ejecuta y después comprueba si repite
```

## 3.5. Riesgo de bucles infinitos

Una advertencia importante es que las condiciones de repetición deben estar correctamente construidas.

Si una condición nunca permite salir del ciclo, el programa puede quedar atrapado en un **bucle infinito**:

```text
repite -> repite -> repite -> repite -> ...
```

El profesor señala que al principio suele costar detectar este tipo de condiciones.

---

# 4. `continue`, `break` y relación con `return`

Se introducen dos sentencias que alteran el flujo normal de una repetición.

## 4.1. `continue`

`continue` hace que la iteración actual deje de procesarse y se pase directamente a la siguiente vuelta.

Idea conceptual:

```text
vuelta actual
    ↓
continue
    ↓
se omite lo que quede de esa vuelta
    ↓
siguiente iteración
```

## 4.2. `break`

`break` rompe la ejecución de la estructura en la que se está utilizando.

En una repetición, la idea explicada es:

```text
estoy repitiendo
    ↓
aparece break
    ↓
se termina la repetición
```

Más adelante en esta misma clase `break` se vuelve esencial al estudiar el `switch` clásico.

## 4.3. Comparación conceptual con `return`

El profesor comenta que `break` puede recordar a `return`, aunque **no son lo mismo**.

La comparación utilizada en clase es que ambos pueden provocar una salida anticipada, pero `return` se relaciona con finalizar/devolver desde un método completo, mientras que `break` rompe la estructura correspondiente.

No se desarrolla todavía el uso completo de `return`.

---

# 5. Planificar antes de codificar

Antes de comenzar a escribir las estructuras condicionales, el profesor vuelve a insistir en el proceso de desarrollo.

La idea es:

```text
1. Entender el problema
2. Planificar
3. Diseñar
4. Codificar
```

El mensaje principal es **no empezar a escribir código directamente** sin haber pensado antes cómo debe funcionar el programa.

La planificación consiste en decidir cómo se puede resolver la situación.

El diseño permite representar el flujo antes de escribir Java.

---

# 6. Diagramas de flujo utilizados en clase

El profesor utiliza diagramas para representar el flujo de ejecución y los presenta oralmente dentro del contexto de UML.

> **Nota de fidelidad:** la transcripción conserva expresiones como “diagrama UML”, “diagrama de flujo” y en otro momento “WML”. Se mantiene la terminología de la clase sin completar ni corregir con teoría externa.

Para la explicación se utilizan principalmente dos símbolos:

## 6.1. Rectángulo: ejecución

Representa una o varias instrucciones que el programa debe ejecutar.

```text
┌───────────────────┐
│   instrucciones   │
└───────────────────┘
```

## 6.2. Rombo: decisión

Representa una decisión cuya respuesta conduce por caminos distintos.

```text
        ◇ condición ◇
         /       \
       sí         no
```

La idea es que la condición produce una respuesta equivalente a **sí/no**, es decir, verdadero/falso.

Los diagramas sirven para visualizar por qué camino continúa el programa antes de traducirlo a código.

---

# 7. Primera variante: `if`

La estructura `if` se utiliza cuando solo se quiere actuar **si una condición se cumple**.

Flujo conceptual:

```text
líneas anteriores
      ↓
¿condición?
  /     \
sí       no
↓         \
ejecuta    └──────┐
bloque            │
  \                │
   └──────→ continúa el programa
```

Si la condición es verdadera, entra en el bloque.

Si la condición es falsa, se salta el bloque y el programa continúa después del `if`.

## 7.1. Sintaxis trabajada

```java
if (condicion) {
    // instrucciones
}
```

El contenido entre llaves se ejecuta solamente cuando la condición es verdadera.

Ejemplo reconstruido a partir del ejemplo oral:

```java
int numero1 = 10;
int numero2 = 20;

if (numero1 * 2 >= numero2) {
    System.out.println("Se cumple la condición");
}
```

Lo importante del ejemplo no es el mensaje concreto, sino entender que la expresión del `if` debe poder responder con un resultado lógico.

## 7.2. Cuándo utilizar un `if` simple

Según la explicación:

> Se utiliza cuando solo interesa actuar ante un caso concreto y no se necesita hacer nada especial ante el caso contrario.

Por ejemplo:

```text
si se cumple -> hago algo
si no se cumple -> no hago ese bloque y continúo
```

## 7.3. `if` anidados

Dentro del bloque de un `if` se puede escribir otro `if`.

El profesor recuerda que ya habían utilizado algo similar en una corrección anterior.

Conceptualmente:

```java
if (condicion1) {
    if (condicion2) {
        // instrucciones
    }
}
```

Eso representa una decisión dentro de otra decisión.

---

# 8. Segunda variante: `if - else`

`if-else` se utiliza cuando se quiere ejecutar **una alternativa u otra**.

Solo se realiza **una pregunta**, pero existen dos salidas posibles.

```text
             ¿condición?
              /      \
            sí        no
            ↓          ↓
       estructura 1 estructura 2
            \          /
             \        /
             continúa
```

El profesor insiste en una idea importante:

> `if-else` no significa hacer dos preguntas. Hay una sola condición y dos posibles respuestas.

Si la condición es verdadera, se ejecuta el bloque del `if`.

Si es falsa, se ejecuta el bloque del `else`.

Después, ambos caminos vuelven al flujo normal del programa.

## 8.1. Sintaxis

```java
if (condicion) {
    // bloque si es true
} else {
    // bloque si es false
}
```

## 8.2. El `else` no lleva condición

Este punto se recalca explícitamente:

```java
else {
    // ...
}
```

El `else` representa directamente el caso contrario a la condición del `if`.

No hace falta volver a preguntar por la negación de la condición.

## 8.3. `else` es opcional

No todos los `if` necesitan un `else`.

Se utiliza únicamente cuando interesa definir qué debe suceder también en el caso contrario.

---

# 9. Tercera variante: `if - else if - else`

Cuando existen varias condiciones diferentes, se pueden encadenar preguntas mediante `else if`.

La lógica es:

```text
¿condición 1?
   │
   ├─ sí -> estructura 1 -> continuar después del bloque completo
   │
   └─ no -> ¿condición 2?
              │
              ├─ sí -> estructura 2 -> continuar
              │
              └─ no -> ¿condición 3?
                         │
                         ├─ sí -> estructura 3 -> continuar
                         │
                         └─ no -> else -> estructura final
```

## 9.1. Sintaxis general

```java
if (condicion1) {
    // instrucciones
} else if (condicion2) {
    // instrucciones
} else if (condicion3) {
    // instrucciones
} else {
    // caso restante
}
```

## 9.2. Cantidad de `else if`

El profesor explica que pueden utilizarse tantos `else if` como sean necesarios.

También son posibles combinaciones como:

```java
if (...) {
    ...
} else if (...) {
    ...
}
```

sin `else` final, o con `else` si se quiere cubrir el caso restante.

## 9.3. Solo se ejecuta una rama del encadenamiento

La idea fundamental es que, cuando una condición se cumple, se ejecuta su bloque y se sale de la cadena condicional para continuar después de ella.

No se pretende ejecutar todos los bloques del encadenamiento.

## 9.4. El `else` final como salida restante

Si ninguna de las condiciones anteriores se cumple y existe un `else`, ese bloque se ejecuta directamente.

No hace una pregunta nueva: representa lo que queda después de descartar los casos anteriores.

---

# 10. Elegir entre `if`, `if-else` y `else if`

El profesor no da una regla única porque depende del problema.

La idea práctica es escoger la estructura que mejor represente la decisión:

- **una condición y solo actuar si se cumple** -> `if`;
- **una condición con dos alternativas** -> `if-else`;
- **varias preguntas encadenadas** -> `if-else if-...`;
- **caso restante** -> `else` cuando sea necesario.

No se deben añadir condiciones simplemente por escribir más código.

---

# 11. Recomendación sobre llaves `{ }`

La transcripción contiene un fragmento deformado sobre cuándo son estrictamente necesarias las llaves, pero la recomendación del profesor sí queda clara:

> **Acostumbrarse a poner siempre las llaves en los bloques para evitar errores y confusiones.**

Ejemplo recomendado:

```java
if (condicion) {
    instruccion;
}
```

También insiste en escribir desde el principio la pareja de símbolos correspondiente para evitar que las llaves “empiecen a bailar” cuando el código tenga varios niveles.

## 11.1. No poner un `;` que cierre la condición por error

El profesor advierte también de no terminar indebidamente la cabecera de la estructura con un punto y coma, porque se estaría cerrando la sentencia en un lugar incorrecto.

---

# 12. Ejercicio: clasificar una nota con `if`

El primer ejercicio práctico consiste en pedir al usuario la nota obtenida y mostrar una clasificación.

La transcripción conserva las categorías siguientes:

| Nota | Mensaje |
|---|---|
| `0` a `3` | `Muy suspenso` |
| `4` | `Suspenso` |
| `5` a `6` | **El texto concreto de esta categoría se pierde en la transcripción** |
| `7` a `8` | `Notable` |
| `9` | se oye algo equivalente a `Sobresaliente`, aunque el reconocimiento aparece deformado |
| `10` | `Perfecto` |
| cualquier otro valor | `Nota no válida` |

> **Pérdida de audio importante:** la categoría exacta asociada al rango `5-6` no queda registrada con fiabilidad. No se completa desde conocimiento externo.

Ejemplos que sí quedan claros:

```text
entrada: 8
salida esperada: Tu examen tiene una nota de notable

entrada: 2
salida esperada: Muy suspenso

entrada: 10
salida esperada: Perfecto

entrada: 11
salida esperada: Nota no válida
```

---

# 13. Optimizar las condiciones: no volver a preguntar lo que ya se sabe

La corrección del ejercicio de la nota contiene una de las ideas más importantes de la clase.

El profesor pide:

> Intentar hacer **el menor número de preguntas posible** y no repetir condiciones que ya están implícitamente resueltas por el camino seguido.

## 13.1. Primera comprobación: validar el rango general

La explicación parte de que, una vez descartadas las notas que no están entre los límites válidos, al entrar en la rama correspondiente ya se sabe que la nota pertenece al rango válido.

Por tanto, dentro de ese bloque **no hace falta volver a preguntar** por el límite que ya se conoce.

Ejemplo conceptual de razonamiento:

```text
Si ya sé que la nota está entre 0 y 10...
```

entonces para detectar `0-3` basta con comprobar el límite superior correspondiente; no hay que repetir otra vez que sea `>= 0`.

## 13.2. Cada `else if` hereda información de las preguntas anteriores

Supongamos que ya se descartó `0-3`.

Si el programa llega al siguiente `else if`, se sabe que la nota está por encima de ese rango.

Por eso, para detectar el `4`, no es necesario escribir una condición completa que vuelva a comprobar límites inferiores ya descartados.

Después, si tampoco era `4`, al llegar al siguiente bloque ya se sabe que el valor pertenece a un rango todavía más alto.

El razonamiento se repite sucesivamente.

## 13.3. Idea general

```text
Cada condición anterior descarta valores.
        ↓
Cuando llego a la siguiente pregunta,
ya tengo información acumulada.
        ↓
No debo volver a comprobar lo que ya sé.
```

Esta técnica hace el código más limpio y evita condiciones redundantes.

> **Nota de fidelidad:** en la explicación oral de los últimos límites (`9` y `10`) hay varias frases deformadas y no se conserva con total seguridad el operador exacto que el profesor estaba escribiendo en pantalla. El concepto que sí queda inequívoco es aprovechar los descartes anteriores para reducir comparaciones.

---

# 14. IntelliJ: plegado de bloques y legibilidad

Al empezar a utilizar estructuras de control aparecen más niveles de código.

El profesor muestra que IntelliJ permite **plegar/cerrar visualmente bloques** para ocultar temporalmente su contenido y ver el programa de forma más limpia.

Esto no elimina el código: simplemente ayuda a visualizarlo.

La transcripción no conserva con fiabilidad el atajo exacto para plegar todos los bloques.

---

# 15. `Reformat Code`: muy importante

El profesor insiste especialmente en aprender el atajo de **Reformat Code**.

La finalidad es que IntelliJ reorganice automáticamente la indentación y la disposición del código.

Esto será cada vez más importante cuando aparezcan estructuras anidadas, por ejemplo:

```text
switch dentro de while
while dentro de switch
if dentro de switch
switch dentro de case
...
```

Un código sin formato puede volverse prácticamente ilegible.

La transcripción registra claramente para Mac:

```text
Option + Command + L
```

La combinación mencionada para Windows queda cortada/deformada en la grabación y no se reconstruye aquí.

---

# 16. Refactorizar nombres con `Refactor Rename`

Al cambiar el nombre de una clase, el profesor muestra la opción de refactorización:

```text
Refactor -> Rename
```

La utilidad es que IntelliJ cambie el nombre y actualice las referencias correspondientes, en lugar de realizar sustituciones manuales que podrían dejar referencias antiguas.

Durante el ejemplo crea/separa clases de trabajo equivalentes a:

```text
EntradaIf
EntradaSwitch
```

---

# 17. Introducción a `switch`

`switch` se utiliza cuando se quiere evaluar **un valor concreto** y actuar según el caso que coincida.

La estructura conceptual es:

```text
valor a evaluar
     ↓
  switch
   ├─ case 1 -> bloque 1
   ├─ case 2 -> bloque 2
   ├─ case 3 -> bloque 3
   └─ default -> caso restante
```

El profesor contrasta esta idea con `if`:

- `if` trabaja con una condición que responde verdadero/falso;
- `switch` compara el valor con distintos casos.

## 17.1. Tipos mencionados durante la explicación

La transcripción menciona `String`, `char`, enteros y otros posibles valores; también aparecen palabras deformadas que parecen referirse a otros tipos.

Los ejemplos que sí quedan claramente desarrollados en clase son:

- enteros;
- `String`;
- `char`.

> **Punto no fiable:** la enumeración oral completa de tipos admitidos por `switch` está degradada y contiene referencias contradictorias/deformadas. No se reconstruye una lista cerrada.

---

# 18. `case` y `default`

Cada `case` representa un valor contemplado.

Ejemplo conceptual:

```text
si valor == 1 -> case 1
si valor == 2 -> case 2
si valor == 3 -> case 3
```

Si el valor no coincide con ninguno de los casos contemplados, se puede utilizar:

```java
default
```

El profesor lo compara conceptualmente con una especie de `else` para el `switch`.

`default` permite definir qué ocurre con los valores restantes.

---

# 19. `switch` clásico: sintaxis con `:` y `break`

La primera forma explicada es la tradicional, utilizando dos puntos después de cada `case`.

```java
switch (valor) {
    case 1:
        // líneas de código
        break;

    case 2:
        // líneas de código
        break;

    default:
        // líneas de código
}
```

## 19.1. Función de `break`

`break` indica que, después de ejecutar el código del caso correspondiente, se debe abandonar el `switch`.

```text
entra en case
    ↓
ejecuta sus líneas
    ↓
break
    ↓
sale del switch
```

## 19.2. Qué ocurre si se elimina `break`

Este comportamiento se explica con bastante detalle.

Si un `case` coincide pero no aparece un `break`, la ejecución continúa hacia los casos que vienen después.

Conceptualmente:

```java
switch (valor) {
    case 1:
        // entra aquí si valor es 1
        // sin break -> sigue hacia abajo

    case 2:
        // también continúa por aquí

    default:
        // puede terminar llegando aquí
}
```

El profesor resume la idea como: si nadie “rompe” la ejecución, esta sigue avanzando.

Esto después se aprovecha deliberadamente en el ejercicio de los meses.

## 19.3. `break` después del último caso

Se comenta que puede escribirse, pero si ya se ha llegado al final del `switch` no tiene el mismo valor práctico porque no hay otro caso posterior al que continuar.

---

# 20. Literales de los `case`

Los valores escritos en los casos deben corresponder al tipo de dato evaluado.

## 20.1. Con `String`

Ejemplo conceptual:

```java
String palabra = "hola";

switch (palabra) {
    case "hola":
        // ...
        break;
}
```

Los textos se representan con comillas dobles.

## 20.2. Con `char`

Ejemplo conceptual:

```java
char letra = 'A';

switch (letra) {
    case 'A':
        // ...
        break;
}
```

Los caracteres individuales se escriben con comillas simples.

---

# 21. `switch` moderno: sintaxis con flecha `->`

El profesor presenta una segunda forma de escribir `switch`, a la que llama forma moderna.

La estructura mostrada utiliza una flecha:

```java
switch (valor) {
    case 1 -> {
        // instrucciones
    }

    case 2 -> {
        // instrucciones
    }

    default -> {
        // instrucciones
    }
}
```

## 21.1. Ya no se escribe `break` del mismo modo

La explicación del profesor es que cada caso queda delimitado por su propia estructura y no “cae” automáticamente al siguiente caso como en la forma clásica.

Por eso no necesita el `break` utilizado en el modelo tradicional para cortar el paso al siguiente caso.

## 21.2. Llaves cuando hay varias instrucciones

En la explicación posterior se muestra que, si el caso tiene varias líneas, se utilizan las llaves para agruparlas.

Ejemplo:

```java
case "mayo" -> {
    System.out.println("Verano");
    System.out.println("Es tu estación");
}
```

Cuando únicamente existe una instrucción, el profesor muestra que IntelliJ puede indicar que determinadas llaves resultan redundantes.

## 21.3. Elegir la forma que se entienda mejor

El profesor permite trabajar con la forma clásica o la moderna según cuál resulte más clara al alumno, aunque después muestra diferencias relacionadas con el ámbito de las variables.

---

# 22. Se pueden anidar estructuras

Durante una pregunta de clase se confirma que dentro de un `case` se puede incluir:

- un `if`;
- otro `switch`.

Y, en general, las estructuras de control pueden aparecer anidadas unas dentro de otras según la lógica necesaria.

Esto refuerza la importancia de:

- planificar;
- mantener una buena indentación;
- reformatear el código;
- controlar bien las llaves.

---

# 23. Ejercicio con `switch`: mes y estación del año

El ejercicio propone:

1. pedir al usuario el mes en el que se encuentra;
2. determinar la estación correspondiente;
3. mostrarla por consola;
4. contemplar un caso para un mes no válido.

El profesor vuelve a repetir antes de corregirlo:

> **Planificar, diseñar y después codificar. No empezar a escribir directamente.**

La grabación utiliza nombres de meses como valores `String` y muestra primero la versión clásica y después la moderna.

> **Nota de fidelidad:** la agrupación concreta de meses que se escucha en varios fragmentos está parcialmente deformada y contiene solapamientos al copiar/modificar el ejemplo en directo. Estos apuntes conservan la técnica de agrupación y no reconstruyen una tabla completa de estaciones que no quedó grabada limpiamente.

---

# 24. Normalizar el texto antes de evaluarlo

En el ejercicio aparece un problema:

```text
"Enero" != "enero" en la comparación utilizada por los case
```

El usuario puede escribir el mismo mes con diferentes combinaciones de mayúsculas y minúsculas.

El profesor propone convertir el texto a minúsculas para evaluarlo de manera uniforme.

La explicación distingue dos ideas:

## 24.1. Guardar directamente el texto normalizado

Conceptualmente:

```java
String mes = lector.nextLine().toLowerCase();
```

En este enfoque, la variable queda ya guardada en minúsculas.

## 24.2. Conservar el valor original y normalizar solo al evaluar

La otra opción explicada es mantener la cadena original y transformar únicamente el valor utilizado en el `switch`.

Conceptualmente:

```java
String mes = lector.nextLine();

switch (mes.toLowerCase()) {
    // cases en minúscula
}
```

La elección depende de si interesa conservar el texto original o no.

La idea general es:

> El usuario puede escribir con mayúsculas o minúsculas, pero el programa puede normalizar el dato antes de compararlo.

---

# 25. Agrupar varios valores en `switch` clásico aprovechando la ausencia de `break`

El profesor utiliza deliberadamente el comportamiento del `switch` clásico sin `break` para agrupar varios meses que deben producir la misma salida.

Ejemplo conceptual reconstruido sin fijar los meses concretos:

```java
switch (mes) {
    case "mes1":
    case "mes2":
    case "mes3":
        System.out.println("Misma estación");
        break;
}
```

La lógica es:

- si entra por `mes1`, como no hay `break`, continúa;
- pasa por `mes2`;
- continúa hasta el bloque que contiene la salida común;
- allí se ejecuta el mensaje;
- `break` termina el `switch`.

Esto evita duplicar el mismo `println` en cada caso.

El profesor lo descubre/explica a partir de observar que, al quitar los `break`, la ejecución seguía por los casos posteriores.

---

# 26. Agrupar varios casos en el `switch` moderno

En la forma moderna, el profesor muestra que varios valores que comparten comportamiento pueden aparecer agrupados en un mismo `case`.

La transcripción conserva una forma equivalente a:

```java
switch (mes) {
    case "mes1", "mes2", "mes3" -> {
        System.out.println("Misma estación");
    }
}
```

En este modelo no se utiliza el mismo mecanismo de caída entre casos del `switch` clásico.

Los valores se agrupan explícitamente en el propio `case`.

---

# 27. Ámbito de variables: concepto fundamental

La segunda gran parte de la clase introduce con detalle el **ámbito** de una variable.

Definición de trabajo transmitida por el profesor:

> El ámbito indica **dónde está definida una variable y desde qué zonas puede utilizarse**.

La regla práctica repetida es:

> **Las llaves marcan los bloques y esos bloques determinan el ámbito.**

---

# 28. Variable declarada en `main`

Si una variable se declara directamente dentro del bloque de `main`, antes de los condicionales, puede utilizarse en los bloques internos porque estos están contenidos dentro del ámbito exterior.

Ejemplo conceptual:

```java
public static void main(String[] args) {
    String nombre = "Alex";

    if (condicion) {
        System.out.println(nombre);
    } else {
        System.out.println(nombre);
    }

    System.out.println(nombre);
}
```

La idea visual es:

```text
main {
    nombre  <- existe dentro de todo este bloque

    if {
        puede utilizar nombre
    }

    else {
        puede utilizar nombre
    }

    también puede utilizar nombre aquí
}
```

---

# 29. Variable declarada dentro de un bloque

Si una variable se crea dentro de las llaves de un bloque concreto, su ámbito queda limitado a ese bloque.

Ejemplo conceptual:

```java
if (condicion) {
    String apellido = "Martin";
    System.out.println(apellido); // dentro de su ámbito
}

// aquí apellido ya no pertenece a este ámbito
```

El profesor utiliza varios ejemplos para mostrar que una variable creada dentro de un bloque más específico no puede utilizarse fuera de él.

## 29.1. Bloques anidados

Si existe un bloque dentro de otro, una variable del bloque exterior puede ser accesible desde el bloque interior.

Pero una variable creada en el bloque interior no se extiende automáticamente al bloque exterior.

```text
bloque exterior {
    variable A

    bloque interior {
        puede usar A
        variable B
    }

    B ya no pertenece a este ámbito
}
```

La indentación ayuda visualmente a reconocer estos niveles.

---

# 30. No declarar dos variables con el mismo nombre en ámbitos que se solapan

Durante el ejemplo, el profesor intenta volver a declarar una variable con el mismo nombre dentro de una zona que comparte el ámbito de la anterior.

IntelliJ no lo permite porque ambas declaraciones entrarían en conflicto en un ámbito compartido.

La enseñanza es observar siempre:

- dónde se declaró la variable;
- hasta dónde llega su bloque;
- si el nuevo identificador entraría en conflicto con otro ya existente.

---

# 31. Ámbito en `switch` clásico

El profesor explica una particularidad del `switch` tradicional.

En la forma clásica, los `case` pertenecen al bloque general del `switch` y el ámbito puede quedar compartido de una forma que obliga a prestar especial atención a la inicialización.

Ejemplo conceptual inspirado en la explicación:

```java
switch (mes) {
    case "mayo":
        String nombre = "Alex";
        System.out.println(nombre);
        break;

    case "junio":
        // aquí aparece el problema explicado:
        // la variable pertenece al ámbito del switch,
        // pero puede no haber recibido valor por este camino
        break;
}
```

La clave del profesor no es solo “si el nombre existe”, sino preguntar:

> **¿Está inicializada esa variable en todos los caminos por los que puedo llegar hasta aquí?**

Si se entra directamente por un caso que no ejecutó la asignación anterior, la variable no dispone del valor esperado.

---

# 32. Declarar una variable común antes del `switch`

Si varios casos necesitan modificar o consultar la misma variable, la recomendación del ejemplo es declararla en un ámbito superior al `switch`.

Conceptualmente:

```java
String nombre = null;

switch (mes) {
    case "mayo":
        nombre = "valor para mayo";
        break;

    case "junio":
        nombre = "valor para junio";
        break;
}
```

La intención explicada es:

1. crear la variable en un ámbito accesible para todos los casos;
2. darle un valor inicial mínimo cuando sea necesario;
3. asignar después el valor concreto según el caso ejecutado.

En el ejemplo se utiliza `null` como valor inicial para una referencia `String`.

---

# 33. Diferencia de ámbito en `switch` moderno

El profesor muestra que con la sintaxis moderna cada caso con su bloque queda más claramente aislado.

Ejemplo conceptual:

```java
switch (mes) {
    case "mayo" -> {
        String estacion = "verano";
        System.out.println(estacion);
    }

    case "junio" -> {
        // la estacion creada en el bloque anterior
        // no pertenece a este bloque
    }
}
```

La idea que recalca es que cada caso funciona como un ámbito propio cuando se delimita en bloques.

Si una variable debe utilizarse después del `switch`, conviene declararla fuera y asignarla dentro de los distintos casos.

Conceptualmente:

```java
String estacion = null;

switch (mes) {
    case "mes1" -> estacion = "...";
    case "mes2" -> estacion = "...";
    case "mes3" -> estacion = "...";
}

System.out.println(estacion);
```

---

# 34. Variables posiblemente no inicializadas

El profesor muestra cómo IntelliJ puede advertir que una variable **podría no haber sido inicializada**.

El problema aparece cuando existe algún camino de ejecución por el que no se realiza ninguna asignación antes de utilizarla.

Razonamiento:

```text
caso A -> asigna variable
caso B -> no asigna variable

si entro directamente por B...
¿qué valor tiene la variable?
```

La pregunta correcta es seguir el flujo real, no asumir que una asignación escrita en otra rama se ha ejecutado.

---

# 35. `null` y posible `NullPointerException`

En el ejemplo de la estación se utiliza `null` como inicialización mínima.

Después el profesor recuerda un riesgo ya visto anteriormente: si la variable sigue siendo `null` y se intenta llamar a un método sobre ella, puede aparecer una `NullPointerException`.

Ejemplo conceptual relacionado con lo mostrado:

```java
String estacion = null;

// si ningún caso asigna un texto válido...
estacion.length();
```

IntelliJ puede advertir de ese posible problema.

La enseñanza es que inicializar con `null` evita un problema de variable sin inicializar, pero **no garantiza que exista un objeto válido** para usar después.

Por eso hay que pensar también qué ocurre si el valor introducido no coincide con ninguno de los casos.

---

# 36. Ejercicio propuesto: calculadora con estructuras de control

Al final de la transcripción el profesor plantea un ejercicio más completo para combinar lo aprendido.

El sistema debe pedir:

```text
Operando 1
Operando 2
```

Después debe mostrar un menú de operaciones.

La transcripción conserva claramente:

```text
1. Sumar
2. Restar
3. Multiplicar
4. Dividir
5. Módulo
```

> El número `5` y la palabra “módulo” aparecen con reconocimiento de voz deformado, pero el ejemplo oral posterior permite identificar que se refiere al módulo.

Una vez elegida la operación, el programa debe realizarla y mostrar el resultado.

## 36.1. Ejemplo de resta

Con:

```text
operando 1 = 7
operando 2 = 3
opción = 2
```

la lógica esperada es indicar que se va a realizar la resta y mostrar el resultado correspondiente.

## 36.2. Caso especial: división entre cero

Si se selecciona división y el segundo operando vale `0`, no se debe realizar directamente la operación.

El programa debe informar de que el segundo operando tiene que ser distinto de cero y pedir un nuevo valor.

Flujo conceptual:

```text
selecciona división
      ↓
¿operando2 == 0?
   /          \
 sí            no
 ↓              ↓
pedir nuevo      dividir
operando2
```

El profesor relaciona la división entre cero con una `ArithmeticException`.

## 36.3. División entera o decimal

Si la operación elegida es división, el programa debe preguntar también si el usuario quiere:

- división sin decimales;
- división con decimales.

Ejemplo planteado:

```text
operando 1 = 7
operando 2 = 3
operación = dividir
```

Después el sistema pregunta qué tipo de resultado quiere el usuario y debe realizar la variante correspondiente.

> **Nota de fidelidad:** la transcripción dice oralmente un resultado “dos con cinco” en este ejemplo, pero no queda fiable como cálculo numérico exacto. Se conserva únicamente la finalidad didáctica: distinguir entre división entera y división con decimales.

## 36.4. Qué pretende practicar el ejercicio

El ejercicio obliga a combinar:

- lectura de datos;
- menú de opciones;
- `switch` para elegir una operación;
- `if` dentro de un caso cuando existe una condición especial;
- validación de división por cero;
- diferentes caminos dentro de la división;
- operaciones aritméticas ya estudiadas.

El profesor había comentado previamente que un `case` puede contener un `if` u otro `switch`, por lo que este ejercicio está pensado para empezar a combinar estructuras.

La transcripción termina después de explicar el enunciado; **no contiene la resolución completa del ejercicio**.

---

# 37. Ideas de programación que el profesor repite durante la clase

## 37.1. Seguir el flujo, no solo leer líneas aisladas

Para entender estructuras de control hay que preguntarse constantemente:

```text
¿Por qué camino he llegado hasta aquí?
¿Qué casos ya he descartado?
¿Qué variables existen en este punto?
¿Qué variables han recibido valor realmente?
¿Qué bloque se ejecuta después?
```

## 37.2. No repetir condiciones innecesarias

Una rama de un `else` o un `else if` ya contiene información derivada de las condiciones anteriores.

Aprovechar esa información evita comprobaciones redundantes.

## 37.3. Pensar antes de escribir

El flujo recomendado vuelve a aparecer varias veces:

```text
planificar -> diseñar -> codificar
```

## 37.4. Mantener el código legible

A medida que las estructuras se anidan, son fundamentales:

- indentación;
- llaves bien colocadas;
- bloques visualmente claros;
- `Reformat Code`;
- plegado de bloques del IDE.

## 37.5. El ámbito se entiende mirando las llaves

Al ver una variable, hay que localizar primero las llaves del bloque donde fue declarada.

Eso permite saber en qué zonas está disponible.

---

# 38. Tabla comparativa rápida

| Estructura | Qué decide | Idea principal |
|---|---|---|
| `if` | una condición | ejecuta un bloque solo si se cumple |
| `if-else` | una condición | elige entre dos bloques |
| `if-else if-...` | varias condiciones encadenadas | prueba alternativas en orden |
| `switch` | un valor | ejecuta el `case` correspondiente |
| `default` | ningún `case` coincide | caso restante del `switch` |
| `for` | repetición controlada | inicio, condición/final e incremento |
| `while` | condición de repetición | comprueba antes de repetir |
| `do while` | condición de repetición | ejecuta antes de comprobar |
| `continue` | iteración actual | salta a la siguiente vuelta |
| `break` | estructura actual | rompe la ejecución de la estructura |

---

# 39. Sintaxis principal de la clase

## 39.1. `if`

```java
if (condicion) {
    // instrucciones
}
```

## 39.2. `if-else`

```java
if (condicion) {
    // instrucciones si true
} else {
    // instrucciones si false
}
```

## 39.3. `if-else if-else`

```java
if (condicion1) {
    // caso 1
} else if (condicion2) {
    // caso 2
} else if (condicion3) {
    // caso 3
} else {
    // caso restante
}
```

## 39.4. `switch` clásico

```java
switch (valor) {
    case valor1:
        // instrucciones
        break;

    case valor2:
        // instrucciones
        break;

    default:
        // caso restante
}
```

## 39.5. Agrupar comportamiento en `switch` clásico

```java
switch (valor) {
    case valor1:
    case valor2:
    case valor3:
        // instrucciones comunes
        break;
}
```

## 39.6. `switch` moderno

```java
switch (valor) {
    case valor1 -> {
        // instrucciones
    }

    case valor2 -> {
        // instrucciones
    }

    default -> {
        // instrucciones
    }
}
```

## 39.7. Varios valores en un `case` moderno

```java
switch (valor) {
    case valor1, valor2, valor3 -> {
        // instrucciones comunes
    }
}
```

## 39.8. Normalizar un `String` antes del `switch`

Forma explicada conceptualmente:

```java
String mes = lector.nextLine();

switch (mes.toLowerCase()) {
    // cases escritos en minúscula
}
```

---

# 40. Conceptos que debo saber explicar

1. Qué significa que el código se ejecute secuencialmente.
2. Para qué sirven las estructuras de control.
3. Diferencia conceptual entre estructuras condicionales y de repetición.
4. Qué hace un `if` simple.
5. Qué diferencia existe entre `if` e `if-else`.
6. Por qué un `if-else` hace una sola pregunta aunque tenga dos salidas.
7. Para qué sirve `else if`.
8. Por qué `else` no necesita condición.
9. Cómo funciona una cadena `if-else if-else`.
10. Qué es un `if` anidado.
11. Por qué después de ejecutarse una rama el programa continúa tras el bloque condicional.
12. Por qué conviene evitar condiciones redundantes.
13. Cómo utilizar la información que ya se conoce por haber llegado a un `else` o `else if`.
14. Qué representan rectángulos y rombos en el diagrama utilizado en clase.
15. Diferencia conceptual entre `if` y `switch`.
16. Qué son `case` y `default`.
17. Para qué sirve `break` en el `switch` clásico.
18. Qué ocurre cuando falta un `break` en el `switch` clásico.
19. Cómo se puede aprovechar ese comportamiento para agrupar varios casos.
20. Diferencia visual entre `switch` clásico (`:`) y moderno (`->`).
21. Cómo agrupar varios valores en un mismo caso del `switch` moderno.
22. Por qué puede ser útil normalizar un texto con minúsculas antes de compararlo.
23. Qué significa el ámbito de una variable.
24. Cómo determinan las llaves el ámbito.
25. Diferencia entre declarar una variable fuera de una estructura y dentro de uno de sus bloques.
26. Por qué una variable puede existir en un ámbito pero no estar inicializada en todos los caminos.
27. Para qué se utiliza `null` en el ejemplo de clase y qué riesgo se recuerda después.
28. Qué hace `for` a nivel introductorio.
29. Qué hace `while`.
30. Qué diferencia conceptual se explicó para `do while`.
31. Qué es un bucle infinito.
32. Qué hace `continue`.
33. Qué hace `break` en una repetición.
34. Por qué hay que planificar y diseñar antes de codificar.
35. Para qué sirven `Reformat Code` y `Refactor Rename`.

---

# 41. Sintaxis que debo saber escribir

Debo ser capaz de escribir sin copiar:

```java
if (condicion) {

}
```

```java
if (condicion) {

} else {

}
```

```java
if (condicion1) {

} else if (condicion2) {

} else {

}
```

```java
switch (valor) {
    case valor1:
        break;

    case valor2:
        break;

    default:
}
```

```java
switch (valor) {
    case valor1 -> {

    }

    case valor2 -> {

    }

    default -> {

    }
}
```

También debo reconocer y saber utilizar en el contexto explicado:

```java
break;
continue;
```

Y comprender expresiones como:

```java
texto.toLowerCase()
```

para normalizar el texto antes de evaluarlo.

---

# 42. Errores frecuentes mencionados o mostrados en clase

## 42.1. Escribir código sin planificar

Empezar directamente a codificar hace más fácil construir condiciones innecesarias o una estructura peor organizada.

## 42.2. Repetir comprobaciones que ya se conocen

Ejemplo conceptual:

```text
si ya sé por el bloque anterior que el número es >= 4,
no necesito volver a preguntar >= 4 en cada condición siguiente.
```

## 42.3. Pensar que `else` lleva otra condición

`else` representa directamente el caso contrario/restante de la condición anterior.

## 42.4. Colocar mal llaves o perder la estructura del bloque

Con varios niveles anidados es fácil no saber qué llave cierra cada estructura.

Por eso el profesor recomienda escribir los bloques con cuidado y utilizar el reformateo del IDE.

## 42.5. Añadir un punto y coma donde termina indebidamente la cabecera de la estructura

Puede provocar que el bloque no quede asociado de la forma pretendida.

## 42.6. Olvidar `break` en un `switch` clásico cuando no se desea continuar al caso siguiente

Sin `break`, la ejecución sigue avanzando por los casos posteriores.

## 42.7. Escribir un `case` con un literal incompatible con el valor evaluado

Si se evalúa un `String`, los casos correspondientes deben estar escritos como textos; si se trabaja con `char`, como caracteres.

## 42.8. No contemplar `default`

Cuando interesa gestionar valores no previstos, hay que reservar un caso restante.

## 42.9. Comparar meses respetando accidentalmente mayúsculas/minúsculas

Un usuario puede escribir el mes con otra capitalización y no coincidir con el `case` esperado. La solución trabajada es normalizar el texto.

## 42.10. Intentar utilizar una variable fuera de su ámbito

Una variable declarada dentro de unas llaves no puede utilizarse libremente fuera de ese bloque.

## 42.11. Confundir “estar declarada” con “tener un valor asignado en este camino”

Una variable puede pertenecer al ámbito pero no haber sido inicializada si el flujo no pasó por la rama que le asignaba valor.

## 42.12. Inicializar con `null` y después utilizar un método sin garantizar una asignación válida

Puede acabar provocando el problema de `NullPointerException` recordado por el profesor.

## 42.13. Permitir una división entre cero

El ejercicio final pide comprobar el segundo operando antes de dividir y solicitar otro valor cuando sea `0`.

## 42.14. Código sin formato

Al anidar `if`, `switch`, `while`, etc., un código mal indentado se vuelve muy difícil de seguir.

---

# 43. Puntos que la transcripción no conserva correctamente

1. **Categoría de la nota entre `5` y `6`.** El audio/transcripción salta directamente del rango `5-6` al rango `7-8`, pero no conserva el texto que debe imprimirse para `5-6`.
2. **Palabra para la nota `9`.** El reconocimiento produce algo parecido a “resaliente”; por contexto parece ser el nombre de una calificación, pero no se fuerza una reconstrucción literal más allá de señalar que está degradado.
3. **Límites exactos en la parte final de la optimización del ejercicio de notas.** La explicación de `9` y `10` contiene frases contradictorias (“más pequeño que 10”, etc.) causadas por la transcripción. La técnica de eliminar condiciones redundantes sí queda clara.
4. **Lista exacta de tipos aceptados por `switch`.** El reconocimiento mezcla términos como `String`, `char`, entero, “google”, decimal y booleano. Solo son inequívocos los ejemplos de entero, `String` y `char` desarrollados en la clase.
5. **Nombre de la sintaxis moderna.** Al principio se oye “función lambda”; después la explicación usa claramente `case ... ->`. Se conserva la forma mostrada, sin atribuir una terminología técnica adicional que no quede clara.
6. **Atajo para plegar todos los bloques de IntelliJ.** El profesor intenta recordarlo, pero la combinación no queda grabada con seguridad.
7. **Atajo de Reformat Code en Windows.** La versión de Mac (`Option + Command + L`) sí se entiende; la de Windows queda cortada/deformada.
8. **Algunas llamadas a `Scanner`.** En el ejercicio de meses se oye `next`, `next line`, etc. mezclado por reconocimiento de voz; se conserva la idea de leer un `String`, no una línea literal dudosa.
9. **Distribución exacta de meses por estaciones en el ejemplo escrito.** Al copiar y modificar casos en directo, la transcripción registra meses repetidos o desplazados. Se conserva el objetivo y la técnica de agrupar casos, no una tabla que la grabación no permite reconstruir con fiabilidad.
10. **Ejemplo numérico de división decimal de la calculadora.** Se escucha un resultado que no queda fiable como cálculo exacto. Lo importante en clase es diferenciar división entera y división con decimales.
11. **Resolución de la calculadora.** La transcripción termina después del enunciado y de explicar los casos especiales; no contiene la corrección completa.
12. **Expresiones como “UML/WML”.** El reconocimiento varía entre ambos términos. El contenido inequívoco es que el profesor dibuja un diagrama de flujo para representar ejecuciones y decisiones.

---

# 44. Resumen de estudio de la clase

La clase 5 marca el paso desde programas que ejecutan líneas de arriba abajo a programas capaces de **tomar decisiones**.

El núcleo que hay que dominar es:

```text
IF
- condición booleana
- if simple
- if / else
- else if
- ramas excluyentes
- no repetir condiciones ya descartadas

SWITCH
- evaluar un valor
- case
- default
- forma clásica con : y break
- efecto de quitar break
- forma moderna con ->
- agrupar varios valores

ÁMBITO
- lo determinan los bloques de llaves
- una variable exterior puede usarse en bloques interiores
- una variable interior no existe fuera de su bloque
- una variable puede existir pero no estar inicializada en todos los caminos

BUCLES (introducción)
- for
- foreach
- while
- do while
- riesgo de bucle infinito
- continue
- break

FORMA DE TRABAJO
- planificar
- diseñar
- codificar
- mantener el código formateado y legible
```

La idea transversal de toda la sesión es aprender a **seguir el camino real de ejecución**: cada condición descarta alternativas, cada bloque tiene su ámbito y cada variable solo dispone de los valores que realmente hayan sido asignados por el camino recorrido.

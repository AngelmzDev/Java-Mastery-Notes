# Apuntes completos — Día 6

> **Procedencia:** apuntes reconstruidos a partir de las clases, aportados al proyecto. Se conservan las advertencias de fidelidad y las ampliaciones que ya estaban etiquetadas. Se han anonimizado identificadores personales cuando procede.

[Volver a la ficha de estudio](../dia-06.md)

## Repaso de `switch` e `if`, estructuras de repetición y bucle `for`

> **Criterio de estos apuntes.** Se han reconstruido únicamente a partir de la transcripción de la clase 6. Se conserva el contenido docente, los ejemplos y el razonamiento utilizado por el profesor, eliminando repeticiones, conversaciones laterales y fragmentos ajenos a Programación. Se han normalizado solamente errores evidentes de transcripción automática cuando el contexto permite reconocer con seguridad términos como `switch`, `case`, `break`, `if`, `else`, `for`, `while`, `do while`, `Scanner`, `System.out`, `printf`, `debugger`, `breakpoint`, `Math.pow`, etc. No se ha añadido teoría externa para completar huecos. Cuando la sintaxis o un detalle no quedan registrados con suficiente claridad, se indica expresamente.

---

# 1. Repaso de `switch`: cuándo utilizar `break`

La clase comienza retomando el `switch` clásico y, en concreto, la función de `break`.

La idea explicada es que un `case` no termina automáticamente al llegar a su última instrucción. Si no aparece ningún `break`, la ejecución continúa hacia los `case` que están escritos después.

Conceptualmente:

```java
switch (codigo) {
    case "1A":
        // asignaciones del caso 1A
        // sin break -> continúa en el siguiente case

    case "1B":
        // también se ejecutaría
        // y continuaría si tampoco hay break

    case "1C":
        // ...
}
```

El profesor insiste en la pregunta práctica:

> **¿Cuándo pongo `break`?** Cuando, después de terminar las instrucciones del caso actual, quiero abandonar por completo el `switch`.

Por tanto:

```java
switch (codigo) {
    case "1A":
        // instrucciones de 1A
        break;

    case "1B":
        // instrucciones de 1B
        break;
}
```

La función del `break` es evitar que, después de resolver un caso, el programa continúe ejecutando los casos inferiores.

## 1.1. Ejecución sin `break`

El razonamiento utilizado en clase es:

```text
entra en un case
    ↓
ejecuta sus instrucciones
    ↓
no encuentra break
    ↓
continúa hacia abajo
    ↓
ejecuta el siguiente case
```

Por eso, si cada opción del `switch` debe ser independiente, normalmente cada caso debe terminar con `break` en la forma clásica.

---

# 2. Ejercicio con `switch`: vocal, consonante o carácter no válido

Se comenta un ejercicio en el que el usuario introduce un carácter y el programa debe determinar si se trata de:

- una vocal;
- una consonante;
- un carácter no válido para esa clasificación.

Un alumno plantea que había colocado las vocales en un `case` y utilizado `default` para todo lo demás. El problema es que así un valor como un número también acabaría clasificado como consonante.

La corrección conceptual del profesor es que deben distinguirse **tres situaciones**:

1. vocal;
2. consonante;
3. `default` para un carácter que no sea válido dentro de las letras contempladas.

También se comenta que pueden agruparse varios elementos en un mismo tratamiento para no tener que repetir exactamente el mismo código muchas veces.

> **Nota de fidelidad:** la transcripción no conserva de forma suficientemente clara la sintaxis concreta que se estaba proponiendo para agrupar todas las consonantes. Se conserva únicamente la idea explicada.

---

# 3. Ejercicio con `switch`: número par o impar

Se corrige un ejercicio que pide introducir un número y determinar si es par o impar utilizando `switch`.

La condición lógica habitual sería:

```java
numero % 2 == 0
```

El profesor comenta primero la posibilidad de evaluar directamente un valor booleano con un `switch`, pero en el proyecto utilizado aparece una incompatibilidad con el **Language Level 23** configurado.

La conclusión práctica de la clase es que, para este ejercicio, no interesa cambiar el nivel del lenguaje únicamente para poder escribirlo de esa forma.

En su lugar se propone evaluar directamente el resto de dividir el número entre `2`:

```java
int resto = numero % 2;

switch (resto) {
    case 0:
        // número par
        break;

    case 1:
        // número impar
        break;
}
```

La idea que se quiere fijar es:

```text
numero % 2
    ↓
solo interesan los posibles restos
    ↓
0 -> par
1 -> impar
```

> **Nota de fidelidad:** la explicación oral sobre qué versión exacta de Java habilita el `switch` sobre determinados tipos aparece deformada. Lo que sí queda claro es que con el Language Level utilizado en clase esa forma no estaba disponible y que el profesor no recomienda cambiarlo para este ejercicio.

---

# 4. Ejercicio con `if`: calcular la fecha del día siguiente

Se corrige un ejercicio que pide:

1. introducir un día;
2. introducir un mes;
3. introducir un año;
4. mostrar la fecha correspondiente al día siguiente.

Para simplificar, el enunciado trabajado supone:

- febrero tiene `28` días;
- el resto de meses utilizados en esa simplificación tiene `30` días.

El profesor utiliza el ejercicio para practicar `if`, `else if`, `else`, incrementos y orden de condiciones.

## 4.1. Caso de febrero

Primero se pregunta si el mes es febrero:

```text
¿mes == 2?
```

Si estamos en febrero hay dos posibilidades principales.

### Día 28

Si el día es `28`:

```text
día -> 1
mes -> mes + 1
```

Es decir, después del último día de febrero se pasa al día `1` del mes siguiente.

### Cualquier día anterior

Si todavía no se ha llegado al último día:

```text
día -> día + 1
```

El mes y el año no tienen que modificarse.

## 4.2. Resto de meses del ejercicio

Para los meses considerados de `30` días:

- si el día es `30`, el día pasa a `1` y el mes se incrementa;
- si no es `30`, basta con incrementar el día.

Conceptualmente:

```java
if (dia == 30) {
    dia = 1;
    mes++;
} else {
    dia++;
}
```

## 4.3. Cambio de año

Existe un caso más específico:

```text
30 de diciembre
```

En esa situación la fecha siguiente debe ser:

```text
1 de enero del año siguiente
```

Por tanto deben modificarse tres valores:

```text
día  -> 1
mes  -> 1
año  -> año + 1
```

---

# 5. Ordenar las condiciones: de lo más específico a lo más general

El ejercicio de la fecha se utiliza para recalcar una regla de razonamiento muy importante.

Cuando varias condiciones pueden solaparse, el profesor recomienda comenzar por el caso **más específico** y después pasar a casos más generales.

Ejemplo conceptual:

```text
caso muy específico
    ↓
caso menos específico
    ↓
caso general restante
```

La razón es que, si se coloca primero una condición demasiado amplia, un valor perteneciente a un caso especial puede entrar antes por la condición general y nunca llegar a la condición que realmente le correspondía.

La analogía utilizada es la de un **embudo**:

> Si arriba se deja un embudo demasiado abierto, entran demasiados casos. Si primero se hace una comprobación muy concreta, únicamente pasan por ella los casos realmente específicos.

En el ejemplo de diciembre, preguntar primero únicamente por `dia == 30` sería demasiado general si después se pretende distinguir el `30` de diciembre del resto de finales de mes.

---

# 6. Cuándo merece la pena crear una variable auxiliar

Durante el ejercicio aparece una propuesta de crear una variable similar a:

```text
ultimoDia
```

El profesor analiza si realmente es necesaria.

La idea transmitida es:

> No hay que crear una variable únicamente por crearla. Tiene sentido guardarla cuando la información vaya a reutilizarse, cuando tenga valor propio dentro del programa o cuando interese poder modificarla/parametrizarla.

Si `ultimoDia` solamente se utiliza para sustituir literalmente un `28` o un `30` en una única comparación, puede no aportar nada.

Por ejemplo, si se tiene:

```java
if (dia == 28) {
    // ...
}
```

crear antes:

```java
int ultimoDia = 28;
```

solo para escribir:

```java
if (dia == ultimoDia) {
    // ...
}
```

no necesariamente mejora el programa si ese valor no se aprovecha en ningún otro sitio.

En cambio, una variable sí puede tener sentido cuando:

- se va a reutilizar varias veces;
- el valor se necesita más adelante;
- representa información que puede cambiar;
- permite evitar repetir un cálculo;
- hace posible utilizar posteriormente un resultado que de otra manera se perdería.

El profesor insiste en que esta decisión se aprende con práctica y que, al principio, es normal complicar una solución más de lo necesario.

---

# 7. Ejercicio: comprobar si una fecha es válida

Otro ejercicio pide introducir:

- día;
- mes;
- año;

para comprobar si la fecha es correcta.

Se trabaja sin considerar años bisiestos.

La clase agrupa los meses según su número máximo de días:

- febrero: `28` días;
- abril, junio, septiembre y noviembre: `30` días;
- enero, marzo, mayo, julio, agosto, octubre y diciembre: `31` días.

## 7.1. No basta con preguntar por el día exacto

En una primera construcción aparecen condiciones como:

```text
día == 28
día == 30
día == 31
```

Después se detecta un problema importante: una fecha como el `21 de febrero` también debe considerarse válida.

Por tanto, el profesor corrige el razonamiento hacia límites máximos:

```text
febrero -> día <= 28
mes de 30 días -> día <= 30
mes de 31 días -> día <= 31
```

La comprobación del mes debe acompañar a la comprobación del día.

## 7.2. Combinar condiciones

Para los meses de 30 días aparece una condición conceptual de este estilo:

```java
dia <= 30 &&
(mes == 4 || mes == 6 || mes == 9 || mes == 11)
```

La idea es:

- `&&`: se deben cumplir simultáneamente las dos partes principales;
- `||`: dentro del grupo de meses basta con que coincida uno.

La misma lógica se aplica a los meses de 31 días.

## 7.3. Orden de los casos

En este ejercicio el profesor señala que el orden entre varias ramas muy específicas importa menos que en el ejemplo de la fecha siguiente, porque cada condición está construida para identificar un conjunto muy concreto.

La idea no es memorizar un orden fijo, sino comprobar si las condiciones pueden solaparse.

---

# 8. Ejercicio: ordenar tres números

Se corrige un ejercicio que pide introducir tres números y ordenarlos en sentido ascendente o descendente.

La dirección de ordenación se introduce mediante un valor booleano.

El profesor explica que, con las herramientas disponibles en este momento de la asignatura, la solución resulta **muy manual**.

Hay que comparar los valores entre sí para saber qué número ocupa cada posición.

Ejemplo conceptual para localizar el mayor:

```java
if (numero1 > numero2 && numero1 > numero3) {
    // numero1 es el mayor
}
```

Después hay que determinar el orden entre los dos restantes.

La misma idea se repite tomando como posible mayor a `numero2` y después a `numero3`.

## 8.1. Por qué resulta tan largo

Los tres números se encuentran en variables independientes:

```text
numero1
numero2
numero3
```

No están agrupados en una estructura que se pueda recorrer u ordenar automáticamente.

Por eso hay que comparar manualmente:

```text
número 1 con número 2
número 1 con número 3
número 2 con número 3
```

El profesor adelanta que, cuando se estudien estructuras como **arrays**, este tipo de problema podrá resolverse de una forma mucho más cómoda.

También se menciona la existencia de operaciones de ordenación ya preparadas, pero no se desarrolla todavía su uso.

> **Nota de fidelidad:** la transcripción menciona también `HashMap` durante esta explicación, pero el desarrollo del ejercicio se centra únicamente en la idea de que todavía no se dispone de una estructura común que contenga todos los valores.

---

# 9. De las estructuras de selección a las estructuras de repetición

Hasta este momento se habían trabajado principalmente estructuras que permiten **elegir caminos**:

- `if` evalúa una condición lógica;
- `switch` evalúa un valor y selecciona un caso.

La clase introduce ahora otro problema:

> Hay situaciones en las que no basta con elegir un camino; es necesario repetir instrucciones.

Ejemplo recordado de la calculadora:

- se pide un divisor;
- el usuario introduce `0`;
- se vuelve a pedir;
- si vuelve a introducir `0`, habría que volver a pedirlo otra vez.

Hacer esto manualmente con muchos `if` no es una solución adecuada. Para eso se introducen las **estructuras de repetición**.

---

# 10. Estructuras de repetición presentadas

El profesor menciona tres estructuras principales:

1. `for`;
2. `while`;
3. `do while`.

También menciona una variante asociada al `for` para recorrer estructuras de datos, denominada oralmente como **foreach**.

En esta sesión el desarrollo detallado se centra en **`for`**.

## 10.1. `while`

Se presenta únicamente a nivel conceptual:

> Mientras se cumpla una condición, el bloque se sigue ejecutando.

## 10.2. `do while`

También se presenta de forma introductoria:

> Primero se ejecuta el bloque y después se comprueba si debe repetirse.

## 10.3. `foreach`

Se adelanta como una forma relacionada con `for` que servirá para recorrer estructuras de datos.

No se desarrolla todavía su sintaxis en esta transcripción.

---

# 11. Idea fundamental del `for`: repetir dentro de un rango

El `for` se explica mediante un rango controlado por tres elementos:

1. dónde empieza;
2. hasta dónde puede continuar;
3. cómo cambia el valor en cada vuelta.

Representación conceptual:

```text
inicio
  ↓
¿sigue dentro del rango?
  ├─ sí -> ejecutar bloque
  │          ↓
  │      incrementar
  │          ↓
  └──────── volver a comprobar

  └─ no -> salir del for
```

Ejemplo conceptual:

```text
inicio: 0
final: 5
incremento: +1
```

El programa va comprobando sucesivamente valores del recorrido y ejecuta el bloque mientras la condición permita continuar.

---

# 12. Sintaxis básica de `for`

La estructura enseñada es:

```java
for (inicio; condicion; incremento) {
    // instrucciones que se repiten
}
```

Ejemplo habitual trabajado:

```java
for (int i = 0; i < 5; i++) {
    System.out.println(i);
}
```

Las tres partes son:

```text
int i = 0   -> inicio

i < 5       -> condición de permanencia

i++         -> actualización/incremento
```

---

# 13. La variable de recorrido

El profesor utiliza normalmente una variable como:

```java
i
```

La variable puede declararse fuera del `for`, pero explica que lo habitual en estos ejercicios es declararla directamente en la cabecera:

```java
for (int i = 0; i < 5; i++) {
    // ...
}
```

En lugar de:

```java
int i = 0;

for (i = 0; i < 5; i++) {
    // ...
}
```

Ambas posibilidades se comentan, pero la recomendación práctica es definirla en el propio `for` cuando solo sirve para controlar ese recorrido.

## 13.1. Nombre de la variable

Se comenta que pueden utilizarse nombres distintos, aunque en recorridos cortos es habitual encontrar letras como:

```text
i
j
x
```

---

# 14. Ámbito de la variable del `for`

Si `i` se declara dentro de la cabecera:

```java
for (int i = 0; i < 5; i++) {
    System.out.println(i);
}
```

puede utilizarse dentro del bloque porque pertenece a ese ámbito.

Después del `for`, esa variable ya no pertenece al ámbito exterior.

Conceptualmente:

```text
for (int i = ...) {
    aquí existe i
}

aquí ya no existe i
```

Si se necesitara utilizar después, tendría que haberse declarado en un ámbito superior.

La clase vuelve así a conectar los bucles con el concepto de **ámbito de variables** visto anteriormente.

---

# 15. Contar correctamente las iteraciones

Uno de los puntos que más se trabaja es aprender a calcular cuántas veces se ejecutará un `for`.

Ejemplo:

```java
for (int i = 0; i < 10; i++) {
    // ...
}
```

Los valores de `i` son:

```text
0, 1, 2, 3, 4, 5, 6, 7, 8, 9
```

Son **10 iteraciones**.

Por eso:

```text
i < 10
```

y:

```text
i <= 9
```

representan, en este caso, el mismo conjunto de valores.

## 15.1. Empezar en 0 o en 1

El profesor señala que también puede plantearse:

```java
for (int i = 1; i <= 10; i++) {
    // 10 iteraciones
}
```

pero insiste en acostumbrarse a que en informática el `0` aparece continuamente como primera posición o primer valor de recorrido.

---

# 16. Error: utilizar igualdad como condición final

Se advierte de no utilizar una condición del tipo:

```java
i == 9
```

como sustituto de una condición de rango.

El profesor insiste en que la parte central del `for` debe expresar cuándo se permite continuar, por ejemplo:

```java
i < 10
```

o:

```java
i <= 9
```

Una igualdad solo comprueba un valor exacto y no representa el recorrido completo que se pretende realizar.

---

# 17. Cuándo se incrementa la variable

El incremento se ejecuta después de terminar el bloque del `for` y antes de volver a comprobar la condición.

Secuencia:

```text
1. comprobar condición
2. ejecutar bloque
3. incrementar
4. volver a comprobar condición
```

Ejemplo:

```java
for (int i = 0; i < 4; i++) {
    System.out.println(i);
}
```

Recorrido conceptual:

```text
i = 0 -> cumple -> ejecuta
incremento -> i = 1

i = 1 -> cumple -> ejecuta
incremento -> i = 2

i = 2 -> cumple -> ejecuta
incremento -> i = 3

i = 3 -> cumple -> ejecuta
incremento -> i = 4

i = 4 -> no cumple -> termina
```

---

# 18. `i + 1` no es lo mismo que `i++`

La clase utiliza un ejemplo importante para distinguir entre **mostrar un valor modificado** y **modificar realmente la variable**.

Si se escribe:

```java
System.out.println(i + 1);
```

se imprime el valor de `i` más uno, pero `i` no queda incrementada por esa expresión.

En cambio:

```java
i++;
```

sí modifica la variable.

Esto es especialmente importante dentro de un `for`, porque la cabecera ya puede contener un incremento.

Ejemplo peligroso:

```java
for (int i = 0; i < 15; i++) {
    i++;
}
```

Aquí `i` se incrementa:

1. explícitamente dentro del bloque;
2. de nuevo mediante el incremento de la cabecera.

Por eso el recorrido avanzará de dos en dos y no como probablemente se pretendía.

---

# 19. Incrementos distintos de 1

La parte de actualización del `for` no tiene por qué ser siempre:

```java
i++
```

Puede utilizarse, por ejemplo:

```java
i += 3
```

Conceptualmente:

```java
for (int i = 0; i < 15; i += 3) {
    System.out.println(i);
}
```

produce un recorrido equivalente a:

```text
0
3
6
9
12
```

Después se intenta `15`, pero como `15 < 15` es falso, ya no entra.

Si la condición fuese:

```java
i <= 15
```

entonces `15` también formaría parte del recorrido.

---

# 20. Recorridos descendentes

También se puede recorrer un rango de mayor a menor.

Para ello deben ser coherentes:

- valor inicial;
- condición;
- decremento.

Ejemplo conceptual:

```java
for (int i = 10; i > 0; i--) {
    // ...
}
```

El profesor utiliza este ejemplo para mostrar que no basta con cambiar `i++` por `i--`: también debe cambiarse el resto de la lógica del rango.

---

# 21. Bucle infinito

Uno de los riesgos principales explicados es construir una condición que nunca llegue a ser falsa.

Ejemplo conceptual problemático:

```java
for (int i = 0; i < 10; i--) {
    // ...
}
```

El recorrido comienza en `0` y va tomando valores:

```text
0
-1
-2
-3
-4
...
```

Todos ellos siguen cumpliendo:

```text
i < 10
```

Por tanto, la condición nunca permite salir.

Resultado:

> **bucle infinito**.

El profesor insiste en comprobar siempre la relación entre:

```text
inicio + condición + actualización
```

porque las tres partes deben empujar el recorrido hacia la salida.

---

# 22. Ayuda de IntelliJ para escribir un `for`

Durante la demostración se utiliza una plantilla/autocompletado de IntelliJ que escribe una estructura `for` de forma automática.

La transcripción parece recoger algo equivalente a **`fori`**, aunque el reconocimiento de voz lo deforma repetidamente.

La recomendación general del profesor es:

- utilizar la plantilla del IDE si se conoce;
- o escribir desde el principio todas las parejas de símbolos:

```text
( )
{ }
```

antes de rellenar el contenido.

El objetivo es evitar perder llaves o paréntesis cuando el código empiece a contener muchas estructuras anidadas.

> **Punto dudoso:** el texto exacto del atajo/plantilla de IntelliJ no queda registrado limpiamente en la transcripción.

---

# 23. Ejercicio: tabla de multiplicar de un número

Se plantea:

1. pedir un número al usuario;
2. si el dato es válido, mostrar su tabla de multiplicar;
3. realizar las multiplicaciones desde `0` hasta `10`.

Ejemplo esperado para `8`:

```text
8 x 0 = 0
8 x 1 = 8
8 x 2 = 16
...
8 x 10 = 80
```

## 23.1. Validación inicial

Durante la corrección se comprueba primero si el número es válido.

La demostración utiliza conceptualmente:

```java
if (numero < 0) {
    System.out.println("Dato inválido");
} else {
    // calcular tabla
}
```

> **Nota de fidelidad:** oralmente se habla también de “número positivo”, pero en el código explicado se invalida únicamente el valor menor que `0`. Por tanto, la transcripción no deja completamente uniforme si el `0` debía considerarse válido o no en el enunciado original.

## 23.2. Repetir la misma operación

El profesor muestra primero lo absurdo que sería escribir manualmente:

```text
numero * 0
numero * 1
numero * 2
numero * 3
...
```

Todas esas líneas tienen la misma estructura; solo cambia un valor.

Ese es precisamente el caso para el que sirve un `for`.

```java
for (int i = 0; i <= 10; i++) {
    int resultado = numero * i;
    // imprimir resultado
}
```

También se comenta que no es obligatorio guardar `resultado` en una variable si únicamente se va a utilizar para imprimirlo una vez.

Puede calcularse directamente en la salida.

---

# 24. Salida formateada dentro del `for`

Para mostrar la tabla, el profesor utiliza `printf`.

Ejemplo conceptual:

```java
System.out.printf(
        "%d multiplicado por %d es igual a %d%n",
        numero,
        i,
        numero * i
);
```

La idea es que en cada vuelta cambie `i`, de modo que la misma línea de código produzca resultados distintos.

---

# 25. Utilizar el debugger para entender un `for`

La corrección de la tabla de multiplicar se utiliza para repasar el **debugger**.

Se colocan **breakpoints** en puntos concretos del programa y se ejecuta paso a paso.

El profesor muestra que el debugger permite observar:

- en qué línea está detenida la ejecución;
- qué valor tiene `numero`;
- qué valor tiene `i`;
- qué valor toma `resultado`;
- cuándo se realiza el incremento;
- cuándo se vuelve a comprobar la condición.

Ejemplo con una tabla del `5`:

```text
primera vuelta:
numero = 5
i = 0
resultado = 0

segunda vuelta:
numero = 5
i = 1
resultado = 5

tercera vuelta:
numero = 5
i = 2
resultado = 10
...
```

El profesor utiliza esta herramienta para insistir en que el funcionamiento del código se puede **observar**, no hay que creerlo de memoria.

---

# 26. Idea central del `for`

La síntesis utilizada por el profesor es que un `for` permite repetir una línea o un bloque muchas veces cuando:

- la estructura general es la misma;
- cambian determinados valores;
- esos cambios se pueden controlar mediante la variable de recorrido.

Conceptualmente:

> Una misma instrucción puede ejecutarse muchas veces cambiando únicamente los valores controlados por el recorrido.

---

# 27. Ejercicio: mostrar todas las tablas de multiplicar

La siguiente modificación elimina la entrada del usuario.

Ahora el programa debe mostrar:

```text
Tabla del 0
0 x 0 = ...
0 x 1 = ...
...

Tabla del 1
1 x 0 = ...
1 x 1 = ...
...

Tabla del 2
...
```

hasta completar las tablas del rango trabajado en clase.

El objetivo es **no escribir diez `for` diferentes**.

---

# 28. `for` anidado

La solución introduce un `for` dentro de otro.

El `for` exterior controla **qué tabla** se está calculando.

El `for` interior controla **por qué número se multiplica** dentro de esa tabla.

Estructura conceptual:

```java
for (int i = 0; i <= 10; i++) {
    System.out.println("Tabla del " + i);

    for (int j = 0; j <= 10; j++) {
        System.out.printf(
                "%d x %d = %d%n",
                i,
                j,
                i * j
        );
    }
}
```

## 28.1. Función de cada variable

```text
i -> número de la tabla
j -> multiplicador dentro de esa tabla
```

Cuando:

```text
i = 0
```

el `for` interior recorre:

```text
j = 0, 1, 2, ..., 10
```

Cuando el recorrido interior termina, el programa vuelve al `for` exterior, incrementa `i` y repite todo el recorrido interior para la siguiente tabla.

---

# 29. No utilizar la misma variable de recorrido en bucles anidados

El profesor recalca que el `for` interior debe utilizar otra variable, por ejemplo:

```text
i -> exterior
j -> interior
```

No debe reutilizarse la misma variable para controlar ambos recorridos.

Si el `for` interior modificara `i`, estaría alterando también el recorrido exterior y el resultado dejaría de representar correctamente las tablas.

La idea fundamental es:

> Cada recorrido debe tener su propia variable de control cuando ambos bucles están activos al mismo tiempo.

---

# 30. Ejercicio: tablas de multiplicar dentro de un rango indicado por el usuario

Se plantea una modificación más compleja.

El usuario introduce dos números.

Ejemplo:

```text
5 y 10
```

El programa debe mostrar las tablas desde `5` hasta `10`.

Pero el usuario también puede introducirlos al revés:

```text
10 y 5
```

El resultado debe seguir siendo el mismo rango:

```text
5, 6, 7, 8, 9, 10
```

Por tanto, antes de recorrer el rango hay que saber:

```text
cuál es el menor
cuál es el mayor
```

---

# 31. Primera solución posible: duplicar el `for`

Se comenta una solución en la que se pregunta cuál es mayor y se escribe un `for` diferente en cada rama.

Conceptualmente:

```java
if (numero1 > numero2) {
    // for desde numero2 hasta numero1
} else {
    // for desde numero1 hasta numero2
}
```

Esta solución puede funcionar, pero repite prácticamente el mismo código dos veces.

El profesor utiliza el ejercicio para introducir una mejora:

> Utilizar el `if` únicamente para decidir los datos que cambian, y escribir una sola vez el código común.

---

# 32. Evitar duplicar código con `minimo` y `maximo`

Se crean dos variables auxiliares:

```java
int minimo;
int maximo;
```

Después se determina qué valor corresponde a cada una.

Ejemplo conceptual:

```java
if (numero1 > numero2) {
    maximo = numero1;
    minimo = numero2;
} else if (numero2 > numero1) {
    maximo = numero2;
    minimo = numero1;
} else {
    maximo = numero1;
    minimo = numero1;
}
```

Una vez conocidas esas variables, el resto del programa ya no necesita saber en qué orden escribió el usuario los números.

```java
for (int i = minimo; i <= maximo; i++) {
    // calcular tabla i
}
```

Dentro se utiliza otro `for` para recorrer los multiplicadores.

## 32.1. Qué se consigue

Antes:

```text
preguntar cuál es mayor
    ↓
repetir todo el código en cada rama
```

Después:

```text
preguntar cuál es mayor
    ↓
guardar mínimo y máximo
    ↓
ejecutar una única versión del código común
```

Esta parte de la clase enlaza directamente con la pregunta anterior sobre cuándo interesa crear una variable auxiliar.

Aquí sí tiene sentido porque `minimo` y `maximo` contienen información que se necesita después para definir el recorrido.

---

# 33. Caso en el que los dos límites son iguales

Si el usuario introduce dos valores iguales:

```text
5 y 5
```

entonces:

```text
minimo = 5
maximo = 5
```

El rango contiene únicamente esa tabla.

El profesor muestra además que la inicialización puede refactorizarse para reducir ramas y asignaciones repetidas.

> **Nota didáctica de la propia clase:** el profesor reconoce que esta versión más compacta puede resultar menos evidente al principio y que, en esta fase, es más importante comprender correctamente el razonamiento que escribir la variante más optimizada posible.

---

# 34. Introducción a acumuladores y ejercicios de práctica con `for`

Después de los ejemplos de tablas se proponen varios ejercicios para practicar `for`.

Los ejercicios que se describen con suficiente claridad en la transcripción son los siguientes.

---

# 35. Ejercicio de temperaturas: cantidad variable y media

El programa debe preguntar cuántas temperaturas va a introducir el usuario.

Regla especial:

```text
si introduce 0 o un número negativo -> se utilizarán 10 temperaturas
```

Si introduce, por ejemplo:

```text
8
```

el programa debe pedir exactamente ocho temperaturas:

```text
Temperatura 1
Temperatura 2
...
Temperatura 8
```

Después debe calcular la **media** de todas las temperaturas introducidas.

## 35.1. El `Scanner` se crea una sola vez

El profesor responde a una duda importante:

> No hay que crear un nuevo `Scanner` en cada vuelta.

Se crea una vez, fuera del `for`:

```java
Scanner lector = new Scanner(System.in);
```

Y dentro del bucle se reutiliza:

```java
double temperatura = lector.nextDouble();
```

---

# 36. Diseñar el ejercicio antes de escribir código

El profesor vuelve a representar el ejercicio mediante un esquema de flujo.

Secuencia:

```text
leer número de temperaturas
        ↓
¿número <= 0?
   /          \
sí             no
↓               \
asignar 10       \
   \             /
    continuar
        ↓
repetir tantas veces como temperaturas
        ↓
pedir temperatura
        ↓
acumularla
        ↓
fin del recorrido
        ↓
calcular y mostrar media
```

La finalidad es mostrar que, una vez pensado el flujo, convertirlo a código resulta mucho más directo.

El profesor recomienda hacer este tipo de esquema —aunque sea simplemente con papel y lápiz— antes de lanzarse a codificar un ejercicio complejo.

---

# 37. Valor por defecto si el usuario introduce `0` o un negativo

La forma explícita trabajada es:

```java
if (numeroTemperaturas <= 0) {
    numeroTemperaturas = 10;
}
```

Si el número es positivo, no hace falta modificarlo.

## 37.1. Operador ternario

Durante la corrección el profesor recuerda una forma abreviada que identifica como un `if` ternario.

Conceptualmente:

```java
numeroTemperaturas =
        numeroTemperaturas <= 0
        ? 10
        : numeroTemperaturas;
```

La explicación es:

```text
si la condición es true  -> asigna 10
si la condición es false -> conserva el valor existente
```

El profesor aclara que la versión con `if` y la versión ternaria representan, en este ejemplo, la misma decisión.

---

# 38. Acumulador: sumar todas las temperaturas sin guardarlas una a una

Para calcular la media no es necesario crear una variable diferente para cada temperatura.

No se necesita:

```text
temperatura1
temperatura2
temperatura3
...
```

Lo que realmente se necesita al final es la **suma de todas**.

Por eso se crea una variable acumuladora:

```java
double sumatorio = 0.0;
```

Dentro de cada iteración:

```java
double temperatura = lector.nextDouble();
sumatorio += temperatura;
```

Esto equivale conceptualmente a:

```java
sumatorio = sumatorio + temperatura;
```

## 38.1. Cómo crece el acumulador

Ejemplo:

```text
sumatorio inicial = 0

entrada 1 = 4
sumatorio = 0 + 4 = 4

entrada 2 = 10
sumatorio = 4 + 10 = 14

entrada 3 = 7
sumatorio = 14 + 7 = 21
```

Cada nueva temperatura se añade a lo que ya estaba almacenado.

---

# 39. Calcular la media después del `for`

La media es:

```text
suma de temperaturas / número de temperaturas
```

Por tanto, una vez terminado el recorrido:

```java
double media = sumatorio / numeroTemperaturas;
```

También puede calcularse directamente dentro de la impresión si no hace falta reutilizar el resultado.

## 39.1. Error: calcular la media en cada iteración

El profesor advierte de un error frecuente:

```java
for (...) {
    // leer temperatura
    // actualizar sumatorio
    media = sumatorio / numeroTemperaturas;
}
```

Eso recalcula la media una y otra vez cuando todavía no se han introducido todos los datos.

La operación final solo se necesita **una vez**, después de haber recopilado todas las temperaturas.

La regla práctica es:

> Lo que depende de cada entrada se hace dentro del `for`. Lo que solo debe hacerse cuando el recorrido ya ha terminado se coloca fuera.

---

# 40. Formatear la media con dos decimales

El ejercicio pide mostrar la media con dos posiciones decimales.

La clase utiliza `printf` y un marcador equivalente a:

```java
%.2f
```

Ejemplo conceptual:

```java
System.out.printf(
        "La media de las temperaturas introducidas es %.2f%n",
        sumatorio / numeroTemperaturas
);
```

---

# 41. Ampliación del ejercicio: temperatura máxima y mínima

Se añade una modificación:

Además de la media, el programa debe mostrar:

- temperatura más alta introducida;
- temperatura más baja introducida.

Para ello se necesitan dos variables adicionales:

```text
maximo
minimo
```

Estas variables deben declararse fuera del `for`, porque tienen que conservar la información entre una vuelta y la siguiente y seguir existiendo después de terminar el recorrido.

---

# 42. Inicialización provisional del máximo y del mínimo

El profesor utiliza un **apaño temporal** para poder resolver el ejercicio antes de estudiar arrays.

Inicializa conceptualmente:

```java
double maximo = -10000;
double minimo = 10000;
```

La idea es:

- el máximo empieza con un valor muy pequeño;
- el mínimo empieza con un valor muy grande.

Así, la primera temperatura real puede sustituirlos correctamente.

El profesor deja claro que este mecanismo es provisional y que en un tema posterior se aprenderá una forma mejor de resolverlo utilizando estructuras de datos.

---

# 43. Por qué no inicializar máximo y mínimo a `0`

Si se escribiera:

```java
double maximo = 0;
double minimo = 0;
```

podrían aparecer resultados incorrectos.

Ejemplo conceptual mencionado:

- si todas las temperaturas son negativas, ninguna podría superar correctamente un máximo inicial mal elegido;
- si se invierten los extremos, pueden existir valores que nunca lleguen a sustituirlos.

Por eso el profesor propone temporalmente usar extremos suficientemente alejados.

---

# 44. Actualizar el máximo

Después de leer cada temperatura:

```java
if (temperatura > maximo) {
    maximo = temperatura;
}
```

La pregunta es:

```text
¿la nueva temperatura es mayor que el mayor valor encontrado hasta ahora?
```

Si la respuesta es sí, se sustituye el máximo.

Ejemplo:

```text
máximo inicial = -10000
entrada = 20
20 > -10000 -> máximo = 20

entrada = 40
40 > 20 -> máximo = 40

entrada = 13
13 > 40 -> false -> máximo sigue siendo 40
```

---

# 45. Actualizar el mínimo

De forma independiente:

```java
if (temperatura < minimo) {
    minimo = temperatura;
}
```

La pregunta es:

```text
¿la nueva temperatura es menor que el menor valor encontrado hasta ahora?
```

Ejemplo:

```text
mínimo inicial = 10000
entrada = 20
20 < 10000 -> mínimo = 20

entrada = 40
40 < 20 -> false

entrada = 13
13 < 20 -> mínimo = 13
```

---

# 46. Por qué se utilizan dos `if` y no necesariamente `if-else`

La primera temperatura introducida puede ser simultáneamente:

- la mayor temperatura conocida;
- la menor temperatura conocida.

Por tanto, las dos comprobaciones deben poder ejecutarse de forma independiente.

Conceptualmente:

```java
if (temperatura > maximo) {
    maximo = temperatura;
}

if (temperatura < minimo) {
    minimo = temperatura;
}
```

Si se unieran de forma incorrecta con un `else`, una de las dos actualizaciones podría quedar anulada cuando en realidad ambas fueran necesarias.

---

# 47. Errores detectados al calcular máximo y mínimo

Durante la práctica aparecen varios fallos útiles para estudiar.

## 47.1. Invertir los valores iniciales

Incorrecto conceptualmente:

```text
máximo = valor enorme
mínimo = valor muy pequeño
```

En ese caso casi ninguna entrada conseguiría sustituirlos.

La idea correcta del apaño utilizado es justamente la contraria:

```text
máximo -> empieza muy pequeño
mínimo -> empieza muy grande
```

## 47.2. Reinicializar dentro del `for`

Si se escriben las inicializaciones dentro del bucle:

```java
for (...) {
    double maximo = -10000;
    double minimo = 10000;
    // ...
}
```

se pierden en cada iteración los valores encontrados anteriormente.

Deben inicializarse **antes** del recorrido.

## 47.3. Comparar el `sumatorio` en lugar de la temperatura actual

El sumatorio representa la suma de todas las entradas procesadas hasta ese momento.

No representa la temperatura individual que se acaba de introducir.

Por tanto, para máximo y mínimo hay que comparar:

```text
temperatura actual
```

no:

```text
sumatorio acumulado
```

## 47.4. Utilizar una misma variable para dos funciones distintas

El profesor insiste en distinguir:

```text
temperatura -> dato individual de la iteración actual
sumatorio   -> suma acumulada de todas las temperaturas
```

Son informaciones diferentes y no deben mezclarse.

---

# 48. Ejercicio: potencia sin utilizar `Math.pow`

Se plantea un ejercicio con dos números enteros dentro del rango indicado por el enunciado.

Se pide calcular:

```text
base^exponente
```

sin utilizar el método `Math.pow`.

Ejemplo:

```text
base = 3
exponente = 5
```

Debe resolverse como:

```text
3 * 3 * 3 * 3 * 3
```

El objetivo es practicar una multiplicación repetida mediante `for`.

## 48.1. Casos especiales mencionados

- Si el exponente es `0`, el resultado tratado en clase es `1`.
- Si la base es `0`, el profesor indica trabajar el resultado como `0` dentro del ejercicio y no tratarlo como un error.

> **Nota de fidelidad:** la conversación sobre combinaciones concretas con base y exponente cero es breve. Se conserva únicamente la regla aplicada por el profesor al ejercicio.

---

# 49. Ejercicio: simular lanzamientos de un dado

El ejercicio pide:

1. indicar cuántas tiradas se quieren realizar;
2. generar en cada tirada un valor correspondiente a un dado de seis caras;
3. mostrar al final cuántas veces ha aparecido cada cara.

La salida final debe tener una estructura equivalente a:

```text
El 1 ha salido ... veces
El 2 ha salido ... veces
El 3 ha salido ... veces
El 4 ha salido ... veces
El 5 ha salido ... veces
El 6 ha salido ... veces
```

El profesor identifica el valor de cada tirada como un dato **aleatorio**.

Durante la conversación se plantea utilizar contadores independientes para recordar cuántas veces aparece cada cara.

> **Nota de fidelidad:** en esta sesión se describe el ejercicio, pero la transcripción no conserva una corrección completa ni la sintaxis utilizada para generar el número aleatorio.

---

# 50. Ejercicio: diez sueldos

Otro ejercicio pide introducir diez sueldos.

Después se debe obtener:

- suma total;
- media;
- cantidad de sueldos superiores a `1000`.

El objetivo vuelve a combinar:

- un `for` para repetir las lecturas;
- un acumulador para la suma;
- un contador para registrar cuántos datos cumplen una condición.

---

# 51. Ejercicio: seis notas

Se pide introducir seis notas y contar cuántas pertenecen a distintas categorías.

La transcripción conserva expresamente:

```text
aprobados
suspensos
condicionados
```

El profesor aclara que un **condicionado** corresponde a una nota de `4` dentro de ese ejercicio.

El propósito es practicar varios contadores actualizados dentro de un `for` según el valor introducido.

---

# 52. Ejercicios de dibujo con bucles

Los ejercicios `11` y `12` descritos al final de la clase se basan en dibujar figuras por consola.

## 52.1. Cuadrado

El usuario indica el tamaño del lado.

Si introduce, por ejemplo:

```text
4
```

el programa debe dibujar un cuadrado de cuatro posiciones por cuatro posiciones utilizando el carácter elegido.

Ejemplo conceptual:

```text
****
****
****
****
```

## 52.2. Variante con interior diferente

El ejercicio siguiente mantiene la forma exterior pero pide tratar de forma distinta la parte interior.

El profesor señala que parece más complicado de lo que realmente es.

La clave será analizar:

> **en qué posición estoy y si en esa posición me toca imprimir un carácter u otro.**

La transcripción no contiene la resolución completa de estos dos ejercicios.

---

# 53. Planificación antes de programar

Uno de los mensajes recurrentes de toda la sesión es no comenzar a escribir código sin tener claro el flujo.

El profesor recomienda:

```text
leer el enunciado
    ↓
identificar datos de entrada
    ↓
identificar decisiones
    ↓
identificar repeticiones
    ↓
identificar información que hay que conservar
    ↓
convertirlo en código
```

El ejercicio de temperaturas se utiliza como ejemplo claro de este proceso.

Antes de escribir Java se puede representar:

```text
leer cantidad
validar cantidad
repetir lecturas
acumular
calcular resultado
mostrar resultado
```

La idea es que detectar un error en ese esquema antes de codificar resulta mucho más sencillo que descubrirlo dentro de un programa ya grande.

---

# 54. Cuándo necesito conservar información en una variable

Al final de la clase vuelve a aparecer una duda muy importante: cómo saber si hace falta una variable adicional.

La respuesta práctica del profesor es:

> Si una información se va a necesitar más adelante, tiene que quedar guardada en algún sitio.

Ejemplos de esta clase:

```text
sumatorio
```

se necesita porque al finalizar el `for` hay que conocer la suma de todas las temperaturas.

```text
maximo y minimo
```

se necesitan porque hay que recordar los mejores extremos encontrados durante todas las iteraciones.

```text
minimo y maximo del rango de tablas
```

se necesitan porque, después del `if`, el `for` debe saber dónde comenzar y dónde terminar.

En cambio, si un cálculo solo se utiliza una vez para imprimirlo inmediatamente, puede no ser necesario almacenarlo en una variable.

---

# 55. Reutilizar estructuras ya aprendidas

El profesor recuerda que aprender una estructura nueva no significa dejar de utilizar las anteriores.

Un ejercicio puede combinar:

```text
if
switch
for
```

según lo que necesite.

Por ejemplo, en la tabla de multiplicar:

- `if` valida el número;
- `for` repite las multiplicaciones.

La idea es que las herramientas se van acumulando y cada problema puede necesitar varias de ellas.

---

# 56. Contenido anunciado pero no desarrollado todavía

Durante la clase se mencionan varios contenidos que se estudiarán después:

- `while`;
- `do while`;
- `foreach`;
- arrays;
- formas de ordenar estructuras de datos;
- una solución mejor para inicializar máximo y mínimo a partir de los datos reales.

Estos contenidos se mencionan para contextualizar las limitaciones actuales, pero **no se desarrollan todavía de forma suficiente como para considerarlos materia explicada en detalle en esta sesión**.

---

# 57. Ejercicios indicados para practicar

Al final se comenta que pueden realizarse los ejercicios de la sección trabajada hasta aproximadamente el ejercicio `12`, con una excepción relacionada con un ejercicio de “base” que todavía no se había explicado suficientemente.

También se indica expresamente que los ejercicios `11` y `12` tienen más dificultad y que interesa intentar resolverlos sin copiar una solución externa.

> **Nota de fidelidad:** la numeración y denominación exacta de todos los ejercicios aparece fragmentada por conversaciones de clase. Se conservan únicamente los ejercicios cuyo enunciado puede reconstruirse con suficiente seguridad.

---

# 58. Resumen de la lógica trabajada en la sesión

La progresión principal de la clase puede resumirse así:

```text
switch clásico
    ↓
controlar caída entre case con break
    ↓
corregir ejercicios de if y switch
    ↓
ordenar condiciones de específico a general
    ↓
introducir estructuras de repetición
    ↓
for = inicio + condición + actualización
    ↓
controlar número de iteraciones
    ↓
evitar bucles infinitos
    ↓
for anidados
    ↓
acumuladores y contadores
    ↓
conservar información entre iteraciones
    ↓
calcular resultados al terminar el recorrido
```

---

# 59. Conceptos que debo saber explicar

1. Para qué sirve `break` dentro de un `switch` clásico.
2. Qué ocurre si un `case` no termina con `break`.
3. Cómo puede utilizarse `numero % 2` para distinguir par e impar.
4. Por qué una condición más específica debe colocarse antes que una más general cuando ambas pueden solaparse.
5. Qué significa evitar condiciones o código redundante.
6. Cuándo tiene sentido crear una variable auxiliar.
7. Cómo combinar `&&` y `||` para validar una fecha.
8. Por qué ordenar tres números resulta manual mientras se encuentren en variables independientes.
9. Qué diferencia existe entre una estructura de selección y una estructura de repetición.
10. Qué representan las tres partes de un `for`: inicio, condición y actualización.
11. En qué orden se ejecutan condición, cuerpo e incremento en un `for`.
12. Cómo calcular cuántas iteraciones producirá un rango.
13. Por qué `i + 1` no modifica `i` y `i++` sí.
14. Cómo realizar incrementos distintos de uno.
15. Cómo realizar un recorrido descendente.
16. Qué es un bucle infinito y cómo puede provocarse con una condición y un incremento incompatibles.
17. Qué ámbito tiene una variable declarada en la cabecera del `for`.
18. Qué es un `for` anidado.
19. Por qué los bucles anidados deben utilizar variables de recorrido distintas.
20. Cómo utilizar el bucle exterior y el interior para generar tablas de multiplicar.
21. Cómo evitar duplicar código calculando primero un mínimo y un máximo.
22. Qué es un acumulador.
23. Por qué un acumulador debe conservar su valor entre iteraciones.
24. Por qué la media debe calcularse después de terminar las lecturas.
25. Cómo mantener un máximo y un mínimo durante un recorrido.
26. Por qué máximo y mínimo se actualizan mediante comprobaciones independientes.
27. Por qué no conviene inicializar máximo y mínimo arbitrariamente a `0`.
28. Por qué no se debe reinicializar un acumulador, máximo o mínimo dentro del propio `for`.
29. Cuándo un `Scanner` debe crearse una sola vez y reutilizarse.
30. Por qué una información que se va a necesitar más tarde debe quedar almacenada en una variable.
31. Cómo combinar `if` y `for` dentro del mismo ejercicio.
32. Para qué sirve el debugger al estudiar el comportamiento de un bucle.

---

# 60. Sintaxis que debo saber escribir

## `break` en `switch`

```java
switch (valor) {
    case 1:
        // instrucciones
        break;

    case 2:
        // instrucciones
        break;

    default:
        // instrucciones
}
```

## Paridad mediante módulo

```java
int resto = numero % 2;
```

## Condiciones combinadas

```java
if (condicion1 && condicion2) {
    // ...
}
```

```java
if (condicion1 || condicion2) {
    // ...
}
```

## `for` básico

```java
for (int i = 0; i < limite; i++) {
    // instrucciones
}
```

## `for` incluyendo el límite

```java
for (int i = 0; i <= limite; i++) {
    // instrucciones
}
```

## Incremento distinto de uno

```java
for (int i = 0; i < limite; i += 3) {
    // instrucciones
}
```

## Recorrido descendente

```java
for (int i = 10; i > 0; i--) {
    // instrucciones
}
```

## `for` anidados

```java
for (int i = 0; i <= 10; i++) {
    for (int j = 0; j <= 10; j++) {
        // instrucciones
    }
}
```

## Acumulador

```java
double sumatorio = 0.0;

for (...) {
    double valor = lector.nextDouble();
    sumatorio += valor;
}
```

## Cálculo de media después del bucle

```java
double media = sumatorio / numeroValores;
```

## Máximo y mínimo con el método provisional de la clase

```java
double maximo = -10000;
double minimo = 10000;

for (...) {
    double valor = lector.nextDouble();

    if (valor > maximo) {
        maximo = valor;
    }

    if (valor < minimo) {
        minimo = valor;
    }
}
```

## Salida formateada

```java
System.out.printf("%.2f%n", valor);
```

## Operador ternario mostrado en clase

```java
variable = condicion ? valorSiTrue : valorSiFalse;
```

---

# 61. Errores frecuentes mencionados en clase

1. **Olvidar `break` en un `switch` clásico** y ejecutar también los casos siguientes.
2. Utilizar `default` como “consonante” y terminar clasificando números u otros caracteres como letras.
3. Cambiar el Language Level del proyecto únicamente para resolver de una forma innecesariamente complicada un ejercicio sencillo.
4. Colocar antes una condición demasiado general y hacer que un caso específico nunca llegue a evaluarse.
5. Crear variables auxiliares que no se reutilizan ni aportan información necesaria.
6. Olvidar que una validación de fechas debe aceptar también días inferiores al máximo, no solo el último día exacto.
7. Duplicar código completo en varias ramas cuando lo único que cambia son unos valores iniciales.
8. Confundir cuántas iteraciones se producen al empezar en `0`.
9. Utilizar una igualdad como `i == limite` pensando que representa un rango.
10. Escribir un incremento incompatible con la condición y producir un bucle infinito.
11. Incrementar la variable dentro del cuerpo cuando el propio `for` ya la incrementa, provocando saltos dobles.
12. Confundir `i + 1` con `i++`.
13. Intentar utilizar fuera del `for` una variable declarada en su cabecera.
14. Utilizar la misma variable de recorrido para dos `for` anidados.
15. Crear un `Scanner` nuevo en cada iteración en lugar de reutilizar el existente.
16. Guardar cada temperatura en una variable diferente cuando solo se necesita el sumatorio.
17. Calcular la media dentro del `for` en todas las iteraciones cuando solo se necesita al final.
18. Reinicializar el sumatorio dentro del bucle.
19. Inicializar máximo y mínimo con valores que impiden que las entradas reales los sustituyan.
20. Reinicializar máximo y mínimo en cada iteración.
21. Comparar el `sumatorio` para obtener máximo/mínimo en lugar de comparar la entrada individual.
22. Utilizar la misma variable para representar simultáneamente la temperatura actual y la suma acumulada.
23. Escribir muchas veces el mismo bloque de código en lugar de buscar qué parte cambia y controlarla mediante el bucle.
24. Empezar a programar sin planificar primero el flujo del ejercicio.

---

# 62. Puntos que la transcripción no conserva correctamente

1. **Atajo/plantilla exacta de IntelliJ para generar el `for`.** El audio parece referirse a `fori`, pero el reconocimiento no es suficientemente limpio para asegurarlo al cien por cien.
2. **`switch` con valores booleanos y Language Level.** Se entiende el problema general y la decisión del profesor de no utilizar esa solución, pero la explicación exacta sobre qué versiones del lenguaje admiten cada forma aparece deformada.
3. **Agrupación de consonantes en el ejercicio de vocal/consonante.** Se explica que puede utilizarse un conjunto de valores, pero no queda una línea de código suficientemente fiable para reconstruir la sintaxis exacta.
4. **Ordenación de tres números.** La transcripción recoge el razonamiento general y varias comparaciones, pero parte de la construcción concreta se mezcla con conversaciones de alumnos y no permite reconstruir una solución completa literal.
5. **Ejercicio del dado.** Se entiende el enunciado y que requiere números aleatorios y contadores, pero no se registra la sintaxis completa para generar el valor aleatorio.
6. **Numeración completa de la hoja de ejercicios.** Se mencionan varios números (`1`, `5`, `7`, `9`, `10`, `11`, `12`, etc.), pero algunas referencias se corrigen oralmente y no siempre queda inequívoco qué número corresponde a cada enunciado.
7. **Ejercicio de potencia con base/exponente cero.** La regla práctica aplicada por el profesor queda clara, pero la conversación matemática alrededor de algunas combinaciones es parcial.
8. **Límite exacto de las tablas de multiplicar en algunos ejemplos intermedios.** Durante las pruebas se alternan condiciones como `< 11` y `<= 10`, que son equivalentes para el recorrido mostrado, y aparecen varias pruebas fallidas antes de la corrección definitiva.
9. **Fragmentos finales sobre arrays.** Se menciona que se utilizarán más adelante y que permitirán mejorar varias soluciones, pero todavía no se desarrolla su sintaxis en esta clase.
10. **Conversaciones sobre otra asignatura, huelgas y examen de sistemas.** Se han eliminado de estos apuntes porque no forman parte del contenido docente de Programación.

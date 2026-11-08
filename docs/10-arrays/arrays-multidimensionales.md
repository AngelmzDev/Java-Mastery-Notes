# Arrays multidimensionales: filas, columnas y recorridos

> Ampliación didáctica a partir de los apuntes aportados por el propietario. Ejemplos y explicaciones reformulados; no se atribuyen a una corrección del profesor.

Antes de empezar, conviene dominar [los arrays unidimensionales](crear-y-recorrer.md) y [los bucles anidados](../07-bucles/anidacion-break-y-continue.md).

## Un array que contiene otros arrays

Un array permite agrupar valores bajo un nombre. En Java, un array bidimensional contiene referencias a otros arrays: cada elemento del array exterior puede ser una fila. Es útil para representar un tablero, las plazas de varias sesiones o las notas de varios alumnos.

La notación `int[][]` indica dos niveles de arrays. Los datos finales son enteros; no todos los elementos de un array tienen que ser objetos. También existen más dimensiones, como `int[][][]`, pero aquí trabajaremos con dos.

**Ejemplo propio; fragmento dentro de `main`:**

```java
int[][] plazas = {
    {6, 2, 9},
    {4, 8, 3}
};
System.out.println(plazas[1][1]); // 8
```

Podemos dibujarlo así. Los números de fila y columna son índices:

| | Columna 0 | Columna 1 | Columna 2 |
| --- | --- | --- | --- |
| Fila 0 | 6 | 2 | 9 |
| Fila 1 | 4 | 8 | 3 |

`plazas[1]` obtiene el array de la segunda fila. Después, `plazas[1][1]` obtiene su segundo elemento. **Ambos índices empiezan en cero.**

## Crear con valores o reservar espacio

```java
int[][] ocupacion = {
    {6, 2, 9},
    {4, 8, 3}
};
int[][] pendientes = new int[2][3];

System.out.println(ocupacion.length);    // 2 filas
System.out.println(ocupacion[0].length); // 3 elementos en la primera fila
System.out.println(pendientes[1][2]);    // 0
```

Ambas variables tienen tipo `int[][]` y, en este ejemplo, dos filas de tres elementos. Su contenido es diferente: el inicializador proporciona valores; `new int[2][3]` crea los arrays con enteros a cero.

En una creación rectangular, los tamaños indican cuántas filas y cuántas columnas tendrá cada fila. En un acceso, los índices indican qué elemento elegir. **Tamaño e índice no significan lo mismo**: tres columnas tienen índices 0, 1 y 2.

Los valores iniciales siguen las reglas de los arrays unidimensionales: `0` para enteros, `0.0` para decimales, `false` para booleanos y `null` para referencias.

```java
String[][] sesiones = {
    {"Java", "Mañana"},
    {"Git", "Tarde"},
    {"Práctica", "Noche"}
};
String[][] reservas = new String[3][2];
System.out.println(sesiones[2][0]); // Práctica
System.out.println(reservas[0][0]); // null
```

El inicializador anterior tiene **tres filas y dos columnas**: su forma corresponde a `new String[3][2]`, aunque esta creación deja los elementos a `null`.

### ¿Y si hay valores de tipos diferentes?

```java
Object[][] registros = {
    {"Java", 12},
    {"Git", true}
};
System.out.println(registros[0][0]); // Java
```

`Object[][]` puede almacenar referencias de tipos distintos; `12` y `true` se convierten automáticamente en objetos envoltorio. Al leer una posición, el tipo declarado del resultado es `Object`: no puedes usar directamente los métodos de `String` sin comprobar y convertir el tipo. Para estos ejercicios, prefiere un tipo concreto cuando todos los datos representan lo mismo.

## Acceder y modificar una posición

```java
int[][] plazas = {
    {6, 2, 9},
    {4, 8, 3}
};
System.out.println(plazas[0][0]); // 6
plazas[0][0] = 20;
System.out.println(plazas[0][0]); // 20
System.out.println(plazas[1][0]); // 4
```

La asignación cambia un elemento de la primera fila. No añade una fila ni aumenta el tamaño.

Para acceder de forma válida, la fila debe estar entre `0` y `plazas.length - 1`, y la columna entre `0` y `plazas[fila].length - 1`. Además, tanto el array exterior como la fila deben existir, es decir, no ser `null`.

## Recorrer con índices: conocer la posición

El bucle exterior elige una fila; el interior visita sus elementos. El interior empieza de nuevo en cero para cada fila.

```java
int[][] plazas = {
    {6, 2, 9},
    {4, 8, 3}
};
for (int fila = 0; fila < plazas.length; fila++) {
    for (int columna = 0; columna < plazas[fila].length; columna++) {
        System.out.printf("[%d][%d] = %d%n",
                fila, columna, plazas[fila][columna]);
    }
}
```

Las primeras líneas son `[0][0] = 6`, `[0][1] = 2` y `[0][2] = 9`. Después se visita la fila 1.

Usa índices cuando necesites mostrar coordenadas, modificar elementos o recordar dónde aparece un valor. Para aumentar cada posición, puedes escribir `plazas[fila][columna]++;` dentro del bucle interior.

## Recorrer con for-each: trabajar con los valores

```java
int[][] plazas = {
    {6, 2, 9},
    {4, 8, 3}
};
int total = 0;
for (int[] fila : plazas) {
    for (int cantidad : fila) {
        total += cantidad;
        System.out.print(cantidad + " ");
    }
    System.out.println();
}
System.out.println("Total: " + total); // Total: 32
```

El primer `for-each` obtiene un `int[]`, la fila completa. El segundo obtiene un `int`, cada cantidad de esa fila. No proporciona directamente los índices.

Asignar `cantidad = 0;` solo cambia la variable local, no la posición del array. En cambio, `fila[0] = 0;` sí modifica el primer elemento de la fila, porque `fila` referencia el mismo array interior. Esta última operación exige que la fila tenga al menos un elemento.

### Mostrar una fila completa

`fila.toString()` no muestra sus elementos de forma legible. Para inspeccionar el contenido puedes utilizar `Arrays.toString` en una fila y `Arrays.deepToString` en la estructura completa:

```java
int[][] plazas = {{6, 2, 9}, {4, 8, 3}};
System.out.println(java.util.Arrays.toString(plazas[0]));
// [6, 2, 9]
System.out.println(java.util.Arrays.deepToString(plazas));
// [[6, 2, 9], [4, 8, 3]]
```

## Las filas pueden tener longitudes diferentes

Java no obliga a que un array bidimensional sea una tabla rectangular. Cada fila es un array independiente:

```java
int[][] grupos = {
    {7, 4},
    {9},
    {},
    {2, 5, 8}
};
for (int fila = 0; fila < grupos.length; fila++) {
    System.out.println("Fila " + fila + ": " + grupos[fila].length + " elementos");
    for (int columna = 0; columna < grupos[fila].length; columna++) {
        System.out.println(grupos[fila][columna]);
    }
}
```

Las longitudes son 2, 1, 0 y 3. La fila vacía existe, pero no tiene posición 0. Por eso el límite interior utiliza `grupos[fila].length`, no la longitud de la primera fila ni el número de filas.

También se puede crear solo el array exterior y asignar las filas después:

```java
int[][] grupos = new int[2][];
grupos[0] = new int[] {7, 4};
System.out.println(grupos[1] == null); // true
grupos[1] = new int[] {9};
System.out.println(grupos[1][0]); // 9
```

Antes de asignar la segunda fila, acceder a `grupos[1].length` o `grupos[1][0]` causaría `NullPointerException`. Una fila `null` y una fila vacía son casos distintos. Los recorridos anteriores suponen filas inicializadas; si tu estructura admite filas `null`, debes tratarlas antes de recorrerlas.

## Buscar un valor y guardar sus coordenadas

La búsqueda visita cada elemento y compara su valor con el objetivo. Este ejemplo conserva la **primera coincidencia en orden de filas**, incluso si hay valores repetidos:

```java
int[][] plazas = {
    {6, 2, 9},
    {4, 8, 3}
};
int buscado = 8;
int filaEncontrada = -1;
int columnaEncontrada = -1;

for (int fila = 0; fila < plazas.length && filaEncontrada == -1; fila++) {
    for (int columna = 0; columna < plazas[fila].length; columna++) {
        if (plazas[fila][columna] == buscado) {
            filaEncontrada = fila;
            columnaEncontrada = columna;
            break;
        }
    }
}

if (filaEncontrada == -1) {
    System.out.println("No encontrado");
} else {
    System.out.printf("Encontrado en [%d][%d]%n",
            filaEncontrada, columnaEncontrada); // Encontrado en [1][1]
}
```

`-1` representa una posición todavía no encontrada porque no es un índice válido. El `break` termina el bucle interior; la condición `filaEncontrada == -1` evita visitar más filas tras encontrar el dato. Si no aparece, se recorren todos los elementos.

Para buscar texto, compara el contenido con `.equals`, como en el tema de [cadenas](../05-strings/comparar-buscar-y-transformar.md). Por ejemplo, `"Java".equals(sesiones[fila][columna])` permite que esa posición sea `null` sin lanzar una excepción.

## Errores frecuentes

| Error | Qué ocurre o cómo corregirlo |
| --- | --- |
| Confundir `[1][0]` con `[1][1]` | Son la primera y segunda columna de la segunda fila. |
| Escribir `<= array.length` | Intenta acceder a una posición que no existe; utiliza `<`. |
| Usar `array.length` como límite de columnas | Cuenta filas; consulta la longitud de la fila actual. |
| Suponer que todas las filas son iguales | Un array irregular puede tener filas cortas o vacías. |
| Recorrer una fila `null` | Inicialízala o comprueba ese caso antes de usarla. |
| Usar `toString()` para mostrar elementos | Utiliza un recorrido o los métodos de `Arrays`. |
| Esperar que `break` termine ambos bucles | Solo termina el bucle más cercano; controla también el exterior. |

## Practica antes de mirar las respuestas

1. Para `int[][] datos = {{3, 7}, {2, 5, 9}};`, predice `datos.length`, `datos[1].length` y `datos[1][0]`. Cambia el 5 por 12.
2. Recorre esa estructura con índices para mostrar cada coordenada y su valor. Después calcula la suma con `for-each`.
3. Adapta la búsqueda para localizar el 9 y luego el 20. Prueba también con un array exterior vacío y con filas vacías.

<details>
<summary>Comprobar el razonamiento</summary>

1. Hay 2 filas; la segunda tiene 3 elementos y su primer valor es 2. La asignación es `datos[1][1] = 12;`.
2. Antes de modificarlo, la suma es 26; después, 33. Cada bucle interior debe usar la longitud de su propia fila.
3. El 9 está en `[1][2]`. El 20 no aparece. Con un array exterior vacío o solo filas vacías, no se visita ningún elemento y las coordenadas permanecen en `-1`. Estos casos no equivalen a filas `null`.

</details>

## Referencias para contrastar

- [Arrays en el tutorial oficial de Java](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/arrays.html): arrays de arrays y longitudes de filas.
- [Arrays, API de Java 23](https://docs.oracle.com/en/java/javase/23/docs/api/java.base/java/util/Arrays.html): `toString` y `deepToString`.

---

[Índice del tema](README.md) · [Arrays unidimensionales](crear-y-recorrer.md) · [Índice general](../../README.md)

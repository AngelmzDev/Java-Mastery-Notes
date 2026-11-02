# Variables, tipos, referencias y null

> Apunte didáctico propio, preparado para el alcance básico indicado. No se atribuye a una corrección del profesor.

## Guardar un dato para utilizarlo después

Declarar una variable fija su tipo y nombre. Inicializarla le da su primer valor; asignar con `=` copia un nuevo valor compatible. Una variable local debe recibir un valor antes de leerse.

**Ejemplo didáctico propio; fragmento dentro de `main`:**

```java
int plazas;                  // declaración
plazas = 8;                  // primera asignación
int ocupadas = 3;            // declaración e inicialización
plazas = plazas - ocupadas;  // reasignación: primero se calcula la derecha
System.out.println(plazas); // 5
```

No es una ecuación matemática: `plazas = plazas - ocupadas` lee los valores antiguos y guarda el resultado. `ocupadas` permanece en `3`. Utiliza nombres que expresen la unidad: `segundosTotales` evita confundir segundos con minutos.

| Tipo | Contenido | Ejemplo de literal |
| --- | --- | --- |
| `byte` | Entero de -128 a 127 | `12` |
| `short` | Entero de -32768 a 32767 | `2500` |
| `int` | Entero de 32 bits (-2147483648 a 2147483647) | `120000` |
| `long` | Entero de 64 bits | `3000000000L` |
| `float` | Número binario aproximado de 32 bits | `2.5F` |
| `double` | Número binario aproximado de 64 bits | `2.5` |
| `char` | Una unidad UTF-16 de 16 bits | `'A'` |
| `boolean` | Valor lógico | `true`, `false` |

`long` llega desde -9223372036854775808 hasta 9223372036854775807. `float` y `double` no representan exactamente todos los decimales. No son una representación contable exacta del dinero. Para ejercicios de precios simples podemos ilustrar con `double`; para importes exactos iniciales, también podemos trabajar en céntimos enteros.

`String` no es primitivo: es una clase que representa texto. `"A"` es un `String`; `'A'` es un `char`. `''` y `'hola'` no son literales válidos de `char`; `""` sí es una cadena vacía. Algunos símbolos, como muchos emojis, ocupan dos posiciones UTF-16: los ejercicios de recorrido básico usarán letras sencillas.

## Copiar valores y copiar referencias

```java
int original = 4;
int copia = original;
copia = 9;
String nombre = null;
System.out.println(original); // 4: es una variable distinta
System.out.println(nombre == null); // true
```

Al asignar una referencia se copia la referencia, no se duplica automáticamente el objeto. `null` significa que no se referencia ningún objeto; no es `"null"` ni una cadena vacía. Invocar `nombre.length()` cuando `nombre` es `null` causa `NullPointerException`. Los tipos primitivos no admiten `null`. Con arrays veremos cómo dos referencias pueden apuntar al mismo array.

## Practica

Elige tipos para una inicial, número de intentos, precio aproximado, nombre completo y si una puerta está abierta. Justifica cada elección. Explica qué diferencia hay entre `0`, `'0'` y `"0"` sin ejecutar.

---

[Índice del tema](README.md) · [Ejercicios para practicar](ejercicios.md) · [Índice general](../../README.md)

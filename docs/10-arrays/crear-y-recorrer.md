# Crear, acceder y recorrer arrays

> Apunte didáctico propio, preparado para el alcance básico indicado. No se atribuye a una corrección del profesor.

## Un mismo nombre para varios datos del mismo tipo

Un array agrupa un número fijo de elementos de un tipo. Es útil cuando necesitas conservar varios datos, volver a visitarlos o elegirlos por posición. Cinco variables independientes obligarían a repetir instrucciones; un array permite usar un índice y un bucle. Si solo necesitas una suma final, quizá no sea necesario almacenar todos los valores.

**Ejemplo didáctico propio; fragmento dentro de `main`:**

```java
int[] plazas = new int[3];
plazas[0] = 6;
plazas[1] = 2;
plazas[2] = 9;
for (int i = 0; i < plazas.length; i++) {
    System.out.println("Posición " + i + ": " + plazas[i]);
}
```

`int[] plazas` declara una referencia a un array; `new int[3]` crea tres elementos. Sus índices son 0, 1 y 2. `plazas[1] = 2` modifica un elemento, no el tamaño. También se puede inicializar con valores: `int[] plazas = {6, 2, 9};`.

| Tipo del elemento | Valor inicial al usar `new` |
| --- | --- |
| Enteros | 0 |
| `float`, `double` | 0.0 |
| `boolean` | false |
| `char` | `\u0000`, que no es el carácter `'0'` |
| Referencias, como `String` | null |

Los valores por defecto se aplican a los elementos del array creado. Una variable local `int[] datos;` sin asignar sigue sin poder utilizarse. `new int[0]` es válido, pero no tiene una posición 0; un tamaño negativo causa una excepción.

## `length` no es `length()`

Un array tiene la propiedad `plazas.length`, sin paréntesis. Un `String` usa el método `texto.length()`. Para acceder a un array se escribe `plazas[i]`; para un carácter, `texto.charAt(i)`. `i <= plazas.length` intentaría una posición de más y causaría `ArrayIndexOutOfBoundsException`.

## for-each para leer valores

```java
int[] puntos = {3, 8, 5};
for (int punto : puntos) {
    System.out.println(punto);
}
for (int i = 0; i < puntos.length; i++) {
    puntos[i] += 1;
}
System.out.println(puntos[0]); // 4
```

El `for-each` visita cada valor sin exponer el índice. Es cómodo para sumar o mostrar. Para modificar posiciones, recorrer al revés o guardar dónde se encontró algo, utiliza `for` con índice. Asignar `punto = 99` dentro del `for-each` de un `int[]` solo cambia la variable local de esa vuelta, no el elemento del array.

## Dos referencias al mismo array

`int[] otro = puntos;` no copia elementos: ambas variables apuntan al mismo array. Si haces `otro[0] = 100`, `puntos[0]` también se ve como 100. La longitud del objeto no cambia aunque la variable pueda apuntar después a un array diferente.

## Practica

Guarda cuatro tiempos de vuelta. Muestra posición y valor, aumenta todos los tiempos en dos unidades y vuelve a listarlos. Justifica por qué necesitas índices en la actualización.

---

[Índice del tema](README.md) · [Ejercicios para practicar](ejercicios.md) · [Índice general](../../README.md)

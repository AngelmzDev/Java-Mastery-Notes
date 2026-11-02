# Mostrar datos y documentar el código

> Apunte didáctico propio, preparado para el alcance básico indicado. No se atribuye a una corrección del profesor.

## Tres formas de escribir en consola

`print` escribe sin añadir un salto de línea. `println` añade un salto al final. `printf` utiliza una cadena de formato y valores que se colocan en sus marcadores. El formato cambia la presentación, no el valor guardado en la variable.

**Ejemplo didáctico propio; fragmento dentro de `main`:**

```java
String articulo = "Cuaderno";
int cantidad = 3;
double precio = 2.456;
System.out.print("Compra: ");
System.out.println(articulo);
System.out.printf("%s\t%d unidades\t%.2f euros%n", articulo, cantidad, precio);
System.out.println("Suma: " + (2 + 3));
```

Las dos primeras llamadas imprimen una misma línea: `Compra: Cuaderno`. La tercera escribe el nombre, una tabulación, la cantidad y el precio con dos decimales. Según la configuración regional, el separador decimal será punto o coma. `precio` sigue valiendo aproximadamente `2.456`, aunque se vea redondeado a `2.46` o `2,46`.

| Elemento | Significado |
| --- | --- |
| `%s` | Texto o representación del argumento |
| `%d` | Entero decimal |
| `%f` | Número de coma flotante, normalmente seis decimales por defecto |
| `%.2f` | Coma flotante con dos decimales mostrados |
| `%n` | Salto de línea de la plataforma, solo en una cadena de formato |
| `\n` | Carácter de salto de línea dentro de un literal Java |
| `\t` | Tabulación; su anchura visual depende de la consola |
| `%%` | Símbolo de porcentaje en `printf` |

`"Total " + 2 + 3` da `Total 23`: después del texto, `+` concatena. Con paréntesis, `"Total " + (2 + 3)` da `Total 5`. `%d` no admite un `double`; un formato incompatible provoca una excepción al ejecutar. `println("%n")` imprime esos dos caracteres: no interpreta formatos.

## Comentarios con propósito

`//` comenta hasta el final de la línea. `/* ... */` delimita varias líneas y no se anida. `/** ... */` es un comentario de documentación que puede procesar Javadoc. Un comentario útil explica una decisión, por ejemplo, «la suma se conserva entre vueltas». Repetir «incrementa i» junto a `i++` aporta poco.

Ejemplo de documentación de un método, dentro de una clase:

```java
/**
 * Devuelve el doble de una cantidad entera pequeña.
 * @param numero cantidad que se desea duplicar
 * @return numero multiplicado por dos
 */
static int duplicar(int numero) {
    return numero * 2;
}
```

`@param` describe una entrada; `@return`, el resultado. No son instrucciones ejecutables. Este método devuelve un valor, a diferencia de `void`; se invoca con `int resultado = duplicar(4);` desde otro método de la misma clase.

## Practica

Muestra una ficha de un juego con título, unidades y precio a dos decimales. Añade un comentario que explique la elección del tipo del precio, no cada símbolo de Java.

---

[Índice del tema](README.md) · [Ejercicios para practicar](ejercicios.md) · [Índice general](../../README.md)

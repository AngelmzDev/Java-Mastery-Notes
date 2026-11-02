# Convertir bases con bucles y validación

> Apunte didáctico propio, preparado para el alcance básico indicado. No se atribuye a una corrección del profesor.

## De una base a decimal: acumular de izquierda a derecha

Si ya has leído una parte del número y llega otra cifra, multiplicas lo acumulado por la base y sumas la cifra. Así `2F` pasa por `0×16+2=2` y `2×16+15=47`. No hace falta calcular todas las potencias por separado.

**Ejemplo didáctico propio; fragmento dentro de `main`.** Para mantener `int` dentro de rango, este ejemplo admite como máximo siete cifras hexadecimales, sin signo ni prefijo:

```java
String texto = "2F".toUpperCase(java.util.Locale.ROOT);
String cifras = "0123456789ABCDEF";
int base = 16;
int valor = 0;
boolean valido = !texto.isEmpty() && texto.length() <= 7;
for (int i = 0; i < texto.length() && valido; i++) {
    int cifra = cifras.indexOf(texto.charAt(i));
    if (cifra < 0 || cifra >= base) {
        valido = false;
    } else {
        valor = valor * base + cifra;
    }
}
if (valido) {
    System.out.println(valor); // 47
} else {
    System.out.println("Número no válido");
}
```

La tabla permite traducir A..F sin convertirlas a `int` con un casting. `indexOf` devuelve -1 si no reconoce el carácter; antes de acumular comprobamos también que la cifra pertenezca a la base. El resultado parcial no debe mostrarse si alguna cifra falla. El límite de siete cifras en base 16 evita exceder `int` positivo; no afirmamos que cualquier longitud sea segura.

## De decimal a otra base: divisiones y restos

Para 26 en binario:

| Cociente antes | Resto al dividir entre 2 | Cociente después |
| --- | --- | --- |
| 26 | 0 | 13 |
| 13 | 1 | 6 |
| 6 | 0 | 3 |
| 3 | 1 | 1 |
| 1 | 1 | 0 |

Los restos se obtienen del menos significativo al más significativo: hay que leerlos en orden inverso. En una cadena pequeña podemos anteponer cada cifra.

```java
int numero = 26;
int base = 2;
String cifras = "0123456789ABCDEF";
String resultado = "";
int pendiente = numero;
do {
    int resto = pendiente % base;
    resultado = cifras.charAt(resto) + resultado;
    pendiente /= base;
} while (pendiente > 0);
System.out.println(resultado); // 11010
```

Este segundo ejemplo presupone `numero >= 0` y base 2, 8 o 16. El `do while` representa correctamente cero como `"0"`: con un `while` sin caso especial se obtendría una cadena vacía. `pendiente` cambia; `numero` conserva la entrada original para mostrarla o comprobarla después.

## Practica

Repite la conversión de 94 a base 8 y 16. Verifica el resultado volviendo a decimal. No uses parseos incorporados como solución principal: la meta es entender divisiones, restos, índices y orden de construcción.

---

[Índice del tema](README.md) · [Ejercicios para practicar](ejercicios.md) · [Índice general](../../README.md)

# Bases y valor posicional

> Apunte didáctico propio, preparado para el alcance básico indicado. No se atribuye a una corrección del profesor.

## El valor depende de la posición

En base 10, `352` significa `3 × 10² + 5 × 10¹ + 2 × 10⁰`. En otra base se conserva esa idea y cambia la base de las potencias. Las posiciones se cuentan desde la derecha empezando en cero. Una cifra debe ser menor que la base.

| Sistema | Base | Cifras admitidas | Ejemplo equivalente a 26 decimal |
| --- | --- | --- | --- |
| Binario | 2 | 0, 1 | 11010 |
| Octal | 8 | 0 a 7 | 32 |
| Decimal | 10 | 0 a 9 | 26 |
| Hexadecimal | 16 | 0 a 9, A a F | 1A |

En hexadecimal, A=10, B=11, C=12, D=13, E=14 y F=15. `1A` vale `1 × 16 + 10`. `128` no es un octal válido: el 8 no puede aparecer como cifra en base 8.

## Hacer una conversión a mano

`10110₂ = 1×2⁴ + 0×2³ + 1×2² + 1×2¹ + 0×2⁰ = 22₁₀`.

`347₈ = 3×8² + 4×8 + 7 = 231₁₀`.

`2F₁₆ = 2×16 + 15 = 47₁₀`.

Puedes comprobar cada potencia con `Math.pow`, que devuelve un `double`. Para magnitudes pequeñas ilustra bien la fórmula; para calcular enteros en un algoritmo es más sencillo acumular con multiplicación entera y controlar el tamaño.

**Ejemplo didáctico propio; fragmento dentro de `main`:**

```java
String binario = "10110";
int decimal = 0;
for (int i = 0; i < binario.length(); i++) {
    int cifra = binario.charAt(i) - '0';
    int exponente = binario.length() - 1 - i;
    decimal += (int) (cifra * Math.pow(2, exponente));
}
System.out.println(decimal); // 22
```

`charAt(i)` devuelve un carácter, no su valor numérico; restar `'0'` funciona para las cifras `'0'..'9'`. La primera cifra corresponde a la potencia 4, no a la potencia 0. La suma empieza a cero antes del bucle y conserva las contribuciones 16, 0, 4, 2 y 0. El ejemplo supone una cadena binaria válida y corta; no valida letras ni evita desbordamientos generales.

Java permite literales `0b11010`, `032` y `0x1A`. Los tres representan el entero decimal 26. Evita ceros iniciales en un literal decimal: `010` vale 8 por ser octal. Un número guardado como `int` no conserva su formato original; las bases son formas de escribir o mostrar el mismo valor.

## Practica

Convierte `10101₂`, `45₈` y `3C₁₆` a decimal y explica cada posición. Después decide cuáles de `102₂`, `78₈` y `FA₁₆` son válidos antes de intentar convertirlos.

---

[Índice del tema](README.md) · [Ejercicios para practicar](ejercicios.md) · [Índice general](../../README.md)

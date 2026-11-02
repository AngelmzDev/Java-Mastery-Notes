# Lógica booleana, ternario y Math

> Apunte didáctico propio, preparado para el alcance básico indicado. No se atribuye a una corrección del profesor.

## Combinar condiciones

Un `boolean` vale `true` o `false`. `&&` exige ambas condiciones; `||` admite una o ambas; `!` niega. Las comparaciones producen booleanos que podemos guardar o utilizar en `if` y bucles.

| A | B | A && B | A \|\| B |
| --- | --- | --- | --- |
| false | false | false | false |
| false | true | false | true |
| true | false | false | true |
| true | true | true | true |

| A | !A |
| --- | --- |
| false | true |
| true | false |

**Ejemplo didáctico propio; fragmento dentro de `main`:**

```java
int edad = 16;
boolean permiso = true;
boolean puedeEntrar = edad >= 18 || (edad >= 16 && permiso);
String mensaje = puedeEntrar ? "Acceso permitido" : "Acceso denegado";
System.out.println(mensaje);
```

La condición compara primero la edad y luego combina resultados. El ternario `condicion ? valorSiCierta : valorSiFalsa` selecciona un valor; no es un sustituto cómodo de cualquier bloque. Si cada camino tiene varias acciones, utiliza `if-else`. En este ejemplo los dos valores son cadenas, para evitar conversiones de tipos innecesarias.

`&&` y `||` tienen cortocircuito: no evalúan la derecha cuando la izquierda determina el resultado. `texto != null && texto.length() > 0` evita llamar a un método sobre `null`. Si inviertes el orden, puedes provocar la excepción antes de comprobarlo. `0 <= edad <= 120` no es válido en Java: escribe `edad >= 0 && edad <= 120`.

## Constantes, potencias y azar

`Math.PI` es una constante aproximada de π. `Math.pow(base, exponente)` devuelve un `double`. `Math.random()` devuelve un `double` desde 0 incluido hasta 1 excluido. No representa un generador de seguridad para contraseñas.

```java
double radio = 2.0;
double area = Math.PI * Math.pow(radio, 2);
int minimo = 3;
int maximo = 8;
int azar = minimo + (int) (Math.random() * (maximo - minimo + 1));
System.out.println(area);
System.out.println(azar >= minimo && azar <= maximo);
```

Para un rango entero pequeño e inclusivo: primero multiplicamos por su cantidad de valores (`8 - 3 + 1 = 6`), después truncamos a `0..5` y al final sumamos 3. `(int) Math.random() * 6` siempre da 0: el casting se ha hecho demasiado pronto. Exigimos `minimo <= maximo` y un ancho que no desborde `int`; no es una fórmula general para cualquier extremo posible.

## Practica

Escribe una condición para admitir pesos de 2 a 15 kg inclusive, salvo si el paquete es frágil. Después simula una ruleta con resultados enteros de 10 a 14; explica cada extremo del rango antes de ejecutarla.

---

[Índice del tema](README.md) · [Ejercicios para practicar](ejercicios.md) · [Índice general](../../README.md)

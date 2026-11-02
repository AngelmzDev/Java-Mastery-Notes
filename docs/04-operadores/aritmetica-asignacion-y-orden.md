# Operadores, expresiones y precedencia

> Apunte didáctico propio, preparado para el alcance básico indicado. No se atribuye a una corrección del profesor.

## De los valores a una expresión

Una expresión combina valores, variables y operaciones y produce un valor. `precio * unidades` es una expresión; `total = precio * unidades;` es una instrucción que además guarda el resultado. `=` asigna; `==` compara.

| Operadores | Acción | Ejemplo |
| --- | --- | --- |
| `+ - * / %` | Suma, resta, producto, cociente, resto | `17 % 5` da 2 |
| `= += -= *= /= %=` | Asignación y actualización | `saldo += 3` suma 3 al saldo |
| `++ --` | Añadir o quitar uno | `intentos++` |
| `== != > < >= <=` | Comparar valores | `edad >= 18` produce `boolean` |

El resto `%` sirve para comprobar divisibilidad (`numero % 2 == 0`) y descomponer unidades. Con enteros negativos puede dar un resto negativo; en los ejercicios de cifras y tiempo trabajamos con datos no negativos.

**Ejemplo didáctico propio; fragmento dentro de `main`:**

```java
int segundos = 7384;
int horas = segundos / 3600;
int resto = segundos % 3600;
int minutos = resto / 60;
int segundosFinales = resto % 60;
System.out.println(horas + ":" + minutos + ":" + segundosFinales);
```

Primero extraemos horas completas (2). Conservamos los 184 segundos restantes, de donde salen 3 minutos y 4 segundos. No dividimos siempre el dato original: el resto evita contar dos veces las horas.

## Qué se calcula antes

Orden práctico, de mayor a menor prioridad: paréntesis; unarios como `!` y signo; `* / %`; `+ -`; `< <= > >=`; `== !=`; `&&`; `||`; ternario; asignaciones. Dentro de un mismo nivel habitual de aritmética se evalúa de izquierda a derecha. Utiliza paréntesis para expresar la intención, no para adivinar prioridades.

`2 + 3 * 4` da 14; `(2 + 3) * 4` da 20. `10 / 3 * 3` da 9 porque la primera división es entera. Para más detalle: [conversiones](../02-variables-y-tipos/conversiones-y-precision.md).

```java
int turno = 2;
int anterior = turno++;
int siguiente = ++turno;
System.out.println(anterior + " " + turno + " " + siguiente); // 2 4 4
```

El postincremento entrega el valor previo y después incrementa. El preincremento incrementa y entrega el nuevo. Como instrucciones aisladas, ambos incrementan uno. Evita mezclarlos con más actualizaciones en una expresión: separar pasos facilita razonar.

## Errores y práctica

No uses `^` para potencias: en Java no significa elevar. La división entera por cero causa `ArithmeticException`. No compruebes igualdad de contenido de cadenas con `==`.

Descompón 482 en centenas, decenas y unidades usando división y resto. Haz una traza y comprueba que puedes reconstruir el número como `centenas * 100 + decenas * 10 + unidades`.

---

[Índice del tema](README.md) · [Ejercicios para practicar](ejercicios.md) · [Índice general](../../README.md)

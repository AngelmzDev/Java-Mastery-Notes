# Conversiones, casting, parseo y precisión

> Apunte didáctico propio, preparado para el alcance básico indicado. No se atribuye a una corrección del profesor.

## No todas las conversiones hacen lo mismo

Una conversión numérica cambia la representación de un valor. El **casting** explícito se escribe con el tipo entre paréntesis. El **parseo** interpreta los caracteres de un texto como un número. Convertir un número a texto es una tercera operación.

**Ejemplo didáctico propio; fragmento dentro de `main`:**

```java
int unidades = 7;
double ampliado = unidades;
double medida = 7.9;
int parteEntera = (int) medida;
int leido = Integer.parseInt("42");
String etiqueta = String.valueOf(leido);
System.out.println(ampliado);    // 7.0
System.out.println(parteEntera); // 7
System.out.println(etiqueta);    // 42 como texto
```

`int` a `double` se permite implícitamente. `(int) medida` elimina la parte decimal hacia cero: `(int) -7.9` da `-7`, no `-8`. No redondea. Ampliar un tipo no siempre mantiene toda la precisión: por ejemplo, un `long` grande puede no ser exacto en un `double`, y `int` a `float` también puede perder precisión.

`Integer.parseInt("42")` produce el entero 42. `Integer.parseInt("4.2")`, un texto vacío o un valor fuera del rango de `int` causan `NumberFormatException`. No se puede convertir `"42"` a entero con `(int)`; primero hay que interpretarlo. En entrada de consola podremos aplicar `.trim()` para eliminar espacios exteriores antes del parseo.

## El tipo de la operación importa

```java
int aprobados = 7;
int alumnos = 2;
double incorrecta = aprobados / alumnos;
double correcta = (double) aprobados / alumnos;
System.out.println(incorrecta); // 3.0: la división entera ya perdió .5
System.out.println(correcta);   // 3.5
```

La operación `int / int` produce un entero. Guardar ese resultado en un `double` no recupera lo perdido. `(double) (aprobados / alumnos)` tampoco lo recupera: el casting debe realizarse **antes** de dividir. Nunca dividas por una cantidad cero: verifica primero si hay datos.

Al operar con enteros también puede haber desbordamiento: un resultado fuera de su rango no se vuelve grande automáticamente. Usar una variable `long` al final no basta si la multiplicación ya se hizo con `int`; usa, por ejemplo, `100000L * 100000`.

## Practica

Predice `9 / 4`, `9 / 4.0`, `(int) 3.99` y `"9" + 4`. Después calcula la media de 5 y 8 sin perder decimales. Explica por qué `String.valueOf(15)` y `Integer.parseInt("15")` van en direcciones opuestas.

---

[Índice del tema](README.md) · [Ejercicios para practicar](ejercicios.md) · [Índice general](../../README.md)

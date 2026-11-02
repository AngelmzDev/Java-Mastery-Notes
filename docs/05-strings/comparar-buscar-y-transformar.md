# Comparar, buscar y transformar cadenas

> Apunte didáctico propio, preparado para el alcance básico indicado. No se atribuye a una corrección del profesor.

## Texto, caracteres e índices

Un `String` es texto; un `char`, una unidad UTF-16. En `"luna"`, las posiciones son 0, 1, 2 y 3. `length()` vale 4 y el último índice es `length() - 1`. Las cadenas son inmutables: los métodos de transformación devuelven otra cadena, no alteran la original.

**Ejemplo didáctico propio; fragmento dentro de `main`:**

```java
String nombre = "  Luna  ";
String limpio = nombre.trim();
boolean mismo = limpio.equalsIgnoreCase("LUNA");
char inicial = limpio.charAt(0);
System.out.println(limpio.length()); // 4
System.out.println(mismo);           // true
System.out.println(inicial == 'L');  // true
```

La primera línea guarda espacios reales. `trim()` crea un resultado sin espacios exteriores básicos; no borra espacios interiores y no cubre todos los espacios Unicode. `equalsIgnoreCase` compara texto sin distinguir mayúsculas; `==` compara directamente los caracteres. Con cadenas, `==` compara referencias, no el contenido: dos objetos distintos pueden representar la misma palabra.

| Operación sobre `String s = "casa-casa"` | Resultado / utilidad |
| --- | --- |
| `s.length()` | 9 posiciones UTF-16 |
| `s.charAt(4)` | `'-'` |
| `s.contains("asa")` | `true` |
| `s.indexOf("casa")` | 0; devuelve -1 si no encuentra |
| `s.lastIndexOf("casa")` | 5, última aparición |
| `s.substring(0, 4)` | `"casa"`; inicio incluido, final excluido |
| `s.toUpperCase()` / `s.toLowerCase()` | Otra cadena transformada |
| `s.startsWith("ca")` / `s.endsWith("sa")` | Comprobar prefijo / sufijo |
| `s.equals("casa-casa")` | Comparar contenido exacto |

`compareTo` devuelve un número negativo, cero o positivo según el orden lexicográfico de los valores de caracteres; no debes esperar exactamente -1 o 1. `compareToIgnoreCase` ignora diferencias de mayúsculas para esa comparación. No son métodos para ordenar palabras según todas las reglas de un diccionario español; los acentos y la configuración lingüística necesitan más cuidado.

## Limpieza y separación básicas

```java
String linea = "  rojo,verde,azul  ";
String[] colores = linea.trim().split(",");
String compacto = "a   b".replaceAll("\\s+", " ");
System.out.println(colores[1]); // verde
System.out.println(compacto);  // a b
```

`split` devuelve un array: retoma este fragmento después de [arrays](../10-arrays/crear-y-recorrer.md). Su separador es una expresión regular, no siempre un texto literal: `split(".")` no significa separar por un punto; para eso escribe `split("\\.")`. `replaceAll` también usa expresiones regulares. En el literal Java `"\\s+"`, la doble barra permite pasar `\s+` al motor: uno o más espacios en blanco. Por defecto `split` omite campos vacíos finales; estos ejemplos no son un lector CSV general.

## Errores y práctica

`charAt(length())` falla por índice fuera de rango; antes de `charAt(0)` comprueba que la cadena no está vacía. Antes de `substring`, verifica que el índice hallado con `indexOf` no sea -1. No invoques métodos sobre `null`.

Pide un nombre de archivo, elimina espacios exteriores y comprueba si termina en `.java` ignorando mayúsculas. Muestra el nombre sin extensión solo después de verificar que existe ese sufijo.

---

[Índice del tema](README.md) · [Ejercicios para practicar](ejercicios.md) · [Índice general](../../README.md)

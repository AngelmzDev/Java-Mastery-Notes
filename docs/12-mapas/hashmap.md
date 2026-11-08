# HashMap: un mapa para trabajar por claves

## La misma idea de asociación

`HashMap` también guarda pares clave-valor. Comparte las operaciones principales de `Map`, pero no todos los métodos específicos de `Hashtable`. Por ejemplo, no tiene `keys()`, `elements()` ni el histórico `contains(valor)`.

En código nuevo sin acceso concurrente, empieza normalmente por `HashMap`. Puedes declarar la variable como `Map<K, V>` para expresar las operaciones que necesitas y crear una instancia de `HashMap`.

```java
java.util.Map<String, Integer> pedidos = new java.util.HashMap<>();
pedidos.put("Entrega local", 7);
pedidos.put("Recogida", 4);

Integer anterior = pedidos.put("Recogida", 6);
System.out.println(anterior); // 4
System.out.println(pedidos.get("Recogida")); // 6
System.out.println(pedidos.size()); // 2

for (java.util.Map.Entry<String, Integer> modalidad : pedidos.entrySet()) {
    System.out.println(modalidad.getKey() + ": " + modalidad.getValue());
}
```

`Map` es una interfaz: describe operaciones comunes. `HashMap` es una implementación concreta. No hace falta desarrollar interfaces propias para utilizar esta declaración.

## Diferencias que sí importan

| Aspecto | Hashtable | HashMap |
| --- | --- | --- |
| Sincronización incorporada | Operaciones sincronizadas | No sincronizado |
| Claves `null` | No admite | Admite una clave `null` |
| Valores `null` | No admite | Admite valores `null` |
| Orden de recorrido garantizado | No | No |
| Recorrido habitual | `entrySet()`; también `Enumeration` histórica | `entrySet()`, `keySet()`, `values()` |
| Uso inicial | Entender y mantener código que ya la utilice | Trabajo general sin concurrencia |

Una clave `null` sigue siendo única: escribirla otra vez reemplaza su valor. Que `HashMap` permita `null` no obliga a utilizarlo; evitarlo suele simplificar los ejercicios.

Para conservar orden de inserción existe `LinkedHashMap`; para otros requisitos de orden o concurrencia hay otras implementaciones. No elijas una estructura por un orden que casualmente observaste en una ejecución.

## Distinguir ausencia de un valor null

```java
java.util.Map<String, String> responsables = new java.util.HashMap<>();
responsables.put("Impresión", null);

System.out.println(responsables.get("Impresión")); // null
System.out.println(responsables.get("Corte")); // null
System.out.println(responsables.containsKey("Impresión")); // true
System.out.println(responsables.containsKey("Corte")); // false
```

Las dos consultas devuelven `null`, pero solo una clave existe. Si permites valores `null`, utiliza `containsKey` para comprobar presencia. También el `null` devuelto por `put` o `remove` puede representar un valor anterior que era `null`, no necesariamente una clave ausente.

## Un contador por categoría

Supón que llegan inscripciones para varios talleres y necesitas contar cuántas hay de cada uno:

```java
String[] inscripciones = {"Grabado", "Cerámica", "Grabado", "Fotografía", "Grabado"};
java.util.Map<String, Integer> recuento = new java.util.HashMap<>();

for (String taller : inscripciones) {
    int acumuladas = recuento.getOrDefault(taller, 0);
    recuento.put(taller, acumuladas + 1);
}

System.out.println(recuento.get("Grabado")); // 3
System.out.println(recuento.get("Cerámica")); // 1
System.out.println(recuento.getOrDefault("Teatro", 0)); // 0
System.out.println(recuento.size()); // 3 categorías
```

`getOrDefault` devuelve el valor asociado o el valor alternativo si no existe la clave. El ejemplo mantiene siempre cantidades no nulas: si una clave estuviera asociada expresamente a `null`, no se sustituiría por cero y el unboxing fallaría.

Paso a paso: la primera inscripción de Grabado parte de cero y guarda uno; las siguientes recuperan el contador anterior y lo incrementan. El número de categorías distintas no es el número total de inscripciones.

## Eliminar mientras recorres

El patrón con `Iterator` de la lección de `Hashtable` también sirve en `HashMap`. No llames a `mapa.remove(clave)` dentro de un `for-each` de sus entradas para seguir recorriendo: puede provocar `ConcurrentModificationException`. Ese mecanismo detecta errores con el mejor esfuerzo posible; no es una técnica de sincronización.

```java
java.util.Map<String, Integer> pendientes = new java.util.HashMap<>();
pendientes.put("Carteles", 0);
pendientes.put("Folletos", 8);
pendientes.put("Pegatinas", 0);

java.util.Iterator<java.util.Map.Entry<String, Integer>> recorrido =
        pendientes.entrySet().iterator();
while (recorrido.hasNext()) {
    java.util.Map.Entry<String, Integer> encargo = recorrido.next();
    if (encargo.getValue() == 0) {
        recorrido.remove();
    }
}
System.out.println(pendientes.size()); // 1
System.out.println(pendientes.containsKey("Folletos")); // true
```

Aquí los valores siempre son enteros no nulos. La comparación con el literal `0` compara cantidades gracias al unboxing.

## Concurrencia: no cambiar una clase sin revisar el uso

`HashMap` no ofrece sincronización propia. Si se comparte con escrituras concurrentes, necesita una estrategia adecuada. Para mapas con alta concurrencia, la documentación remite a `ConcurrentHashMap`; las secuencias de operaciones siguen necesitando un diseño correcto.

Estos ejemplos trabajan en un solo hilo. Aprender `Hashtable` no exige crear hilos, y sustituirla por `HashMap` en un programa existente requiere comprobar antes cómo se comparte el mapa.

[API oficial de HashMap, Java 23](https://docs.oracle.com/en/java/javase/23/docs/api/java.base/java/util/HashMap.html).

[Índice del bloque](README.md) · [Practicar](ejercicios.md)

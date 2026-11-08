# Hashtable: operaciones y recorridos

## Qué es y cómo se crea

La clase se llama **`Hashtable`**, con `t` minúscula. Implementa el contrato `Map` y existe desde las primeras versiones de Java. No admite claves ni valores `null`. Sus operaciones están sincronizadas; veremos el límite de esa garantía al final.

```java
java.util.Hashtable<String, Integer> taquillas = new java.util.Hashtable<>();
taquillas.put("Zona Norte", 24);
taquillas.put("Zona Patio", 11);
System.out.println(taquillas.size()); // 2
```

La forma `<>` evita repetir los tipos del lado izquierdo. En un archivo normal puedes escribir `import java.util.Hashtable;` y usar el nombre corto.

Además del constructor vacío, existen constructores con capacidad inicial, con capacidad y factor de carga, y a partir de otro mapa:

```java
java.util.Hashtable<String, Integer> inicial = new java.util.Hashtable<>();
inicial.put("Sala Coral", 16);

java.util.Hashtable<String, Integer> prevista = new java.util.Hashtable<>(30);
java.util.Hashtable<String, Integer> ajustada = new java.util.Hashtable<>(30, 0.75f);
java.util.Hashtable<String, Integer> copia = new java.util.Hashtable<>(inicial);

System.out.println(prevista.size()); // 0: capacidad no significa entradas
System.out.println(ajustada.isEmpty()); // true
System.out.println(copia.get("Sala Coral")); // 16
```

Para empezar, el constructor vacío es suficiente. El factor de carga influye en cuándo se amplía la tabla; no hace falta ajustarlo en estos ejercicios. La copia crea otro mapa con las mismas asociaciones, pero no clona los objetos usados como claves y valores.

## Operaciones que conviene dominar

| Operación | Resultado | Uso |
| --- | --- | --- |
| `put(clave, valor)` | Valor anterior, o `null` si no existía | Añadir o actualizar una asociación |
| `get(clave)` | Valor asociado, o `null` si no aparece | Consultar por clave |
| `containsKey(clave)` | `boolean` | Comprobar si está la clave |
| `containsValue(valor)` | `boolean` | Comprobar si hay alguna entrada con ese valor |
| `remove(clave)` | Valor eliminado, o `null` si no existía | Borrar por clave |
| `size()` | `int` | Contar asociaciones |
| `isEmpty()` | `boolean` | Comprobar si no hay entradas |
| `clear()` | No devuelve valor | Eliminar todas las asociaciones |

`Hashtable.contains(valor)` es un nombre histórico para buscar por **valor**. Prefiere `containsValue`: expresa la intención y también existe en `HashMap`.

### Seguir los cambios paso a paso

```java
java.util.Hashtable<String, Integer> aforo = new java.util.Hashtable<>();

Integer anterior = aforo.put("Sala Coral", 16);
System.out.println(anterior); // null: clave nueva

anterior = aforo.put("Sala Coral", 13);
System.out.println(anterior); // 16: valor sustituido
System.out.println(aforo.size()); // 1
System.out.println(aforo.containsKey("Sala Coral")); // true
System.out.println(aforo.containsValue(13)); // true

Integer retirado = aforo.remove("Sala Coral");
System.out.println(retirado); // 13
System.out.println(aforo.remove("Sala Coral")); // null
System.out.println(aforo.isEmpty()); // true
aforo.clear(); // también es válido si ya está vacío
```

Actualizar el valor no cambia la clave. `put` devuelve lo que había **antes**, mientras que `get` consulta lo que hay **ahora**.

### Una clave ausente no equivale a cero

```java
java.util.Hashtable<String, Integer> aforo = new java.util.Hashtable<>();
aforo.put("Sala Coral", 0);

Integer disponibles = aforo.get("Sala Azul");
if (disponibles == null) {
    System.out.println("Sala no registrada");
} else {
    System.out.println("Plazas: " + disponibles);
}
System.out.println(aforo.get("Sala Coral")); // 0: sí está registrada
```

No asignes directamente una consulta posiblemente ausente a un `int`: al convertir un `Integer` que vale `null` a un primitivo se produce `NullPointerException`.

## Recorrer con Enumeration

`elements()` proporciona los **valores**, con tipo `Enumeration<V>`. `keys()` proporciona las **claves**, con tipo `Enumeration<K>`. El tipo de valores no tiene por qué coincidir con el de claves.

```java
java.util.Hashtable<String, Integer> minutos = new java.util.Hashtable<>();
minutos.put("Diseño", 35);
minutos.put("Montaje", 50);

java.util.Enumeration<Integer> duraciones = minutos.elements();
int total = 0;
while (duraciones.hasMoreElements()) {
    int duracion = duraciones.nextElement();
    total += duracion;
}
System.out.println("Total: " + total); // Total: 85

java.util.Enumeration<String> tareas = minutos.keys();
while (tareas.hasMoreElements()) {
    String tarea = tareas.nextElement();
    System.out.println(tarea + ": " + minutos.get(tarea));
}
```

`hasMoreElements()` pregunta si quedan datos. `nextElement()` obtiene el siguiente y avanza. Guarda el resultado en una variable si lo necesitas varias veces: llamar dos veces a `nextElement()` consume dos elementos.

Una `Enumeration` no se usa directamente en el `for-each` habitual. Eso no impide recorrer una `Hashtable` con `for-each`: sus vistas `entrySet()`, `keySet()` y `values()` sí lo permiten.

## Recorrer claves y valores juntos

```java
java.util.Hashtable<String, Integer> minutos = new java.util.Hashtable<>();
minutos.put("Diseño", 35);
minutos.put("Montaje", 50);

for (java.util.Map.Entry<String, Integer> tarea : minutos.entrySet()) {
    System.out.println(tarea.getKey() + ": " + tarea.getValue());
}
```

Cada `Map.Entry` representa una asociación. `getKey()` lee la clave y `getValue()` lee el valor. **No supongas orden de inserción ni orden alfabético**; las líneas pueden aparecer en distinto orden.

## Buscar y eliminar según una condición

Si conoces la clave, usa `get` o `remove`. Si buscas «tareas de menos de 20 minutos», la condición se refiere a valores: tendrás que recorrer entradas.

No borres directamente del mapa mientras lo enumeras. En `Hashtable`, modificar estructuralmente la tabla durante una `Enumeration` deja los resultados del recorrido sin definir. Que no aparezca una excepción no significa que sea correcto.

Para eliminar durante un recorrido, utiliza el propio iterador de `entrySet()`:

```java
java.util.Hashtable<String, Integer> minutos = new java.util.Hashtable<>();
minutos.put("Etiquetado", 12);
minutos.put("Embalaje", 28);
minutos.put("Revisión", 15);

java.util.Iterator<java.util.Map.Entry<String, Integer>> recorrido =
        minutos.entrySet().iterator();

while (recorrido.hasNext()) {
    java.util.Map.Entry<String, Integer> tarea = recorrido.next();
    if (tarea.getValue() < 20) {
        recorrido.remove();
    }
}
System.out.println(minutos.size()); // 1
System.out.println(minutos.get("Embalaje")); // 28
```

Aquí `remove()` pertenece al **iterador**, por eso no recibe una clave: elimina la última entrada obtenida con `next()`. Se llama una sola vez por entrada. El ejemplo supone que ningún otro hilo modifica el mapa mientras se recorre.

Si comparas valores `Integer` con otros `Integer`, utiliza `.equals` para comparar contenido; `==` puede comparar referencias. En el ejemplo, `< 20` provoca la conversión a un entero y compara cantidades.

## Qué garantiza la sincronización

`Hashtable` sincroniza sus operaciones individuales: el acceso protegido por su bloqueo se coordina entre hilos. Eso no significa que dos hilos ejecuten a la vez esas secciones protegidas, ni que cualquier algoritmo que use la tabla quede protegido.

Por ejemplo, «consultar plazas y después guardar una plaza menos» son dos llamadas. Otro hilo podría intervenir entre ellas. Un recorrido completo tampoco queda protegido automáticamente durante toda su duración.

En un programa compartido entre hilos, hay que diseñar la coordinación de las operaciones compuestas y de los recorridos. Este bloque no desarrolla concurrencia; la presencia de métodos sincronizados no permite ignorarla.

[API oficial de Hashtable, Java 23](https://docs.oracle.com/en/java/javase/23/docs/api/java.base/java/util/Hashtable.html).

[Índice del bloque](README.md) · [Siguiente: HashMap](hashmap.md)

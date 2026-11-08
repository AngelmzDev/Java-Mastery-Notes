# Claves, valores y tablas hash

## Elegir una clave en vez de una posición

Un array responde a preguntas como «¿qué hay en la posición 2?». Un mapa responde a «¿cuántas unidades quedan del artículo identificado como `CU-42`?».

| Clave: código del artículo | Valor: unidades disponibles |
| --- | --- |
| CU-42 | 18 |
| LA-17 | 6 |
| PI-08 | 18 |

La clave identifica una entrada y es única dentro del mapa. Los valores sí pueden repetirse: dos artículos distintos pueden tener 18 unidades. El código no es un índice ni necesita seguir una secuencia numérica.

Si guardas de nuevo la clave `CU-42`, actualizas su asociación. No se crea una segunda entrada para esa misma clave. Elegir una clave estable evita ambigüedades: un nombre comercial puede repetirse, mientras que un código de catálogo debe identificar el artículo.

## Qué significa «hash»

Una tabla hash organiza sus entradas usando información calculada a partir de la clave. Como idea de trabajo:

1. `hashCode()` ayuda a localizar una zona de búsqueda.
2. Puede haber varias claves candidatas en esa zona: una colisión no significa que las claves sean iguales.
3. `equals()` permite distinguir las claves y localizar la asociación correcta.

No necesitas implementar esa organización para utilizar `Hashtable` o `HashMap`. Empieza con claves como `String` e `Integer`, que ya definen su comparación. Si más adelante creas tus propias claves, tendrás que respetar el contrato entre `equals` y `hashCode`: claves iguales deben tener el mismo hash. Evita modificar los datos que determinan la igualdad y el hash de una clave mientras esté almacenada.

## Tipo de clave y tipo de valor

En `Hashtable<String, Integer>`, el primer tipo corresponde a la clave y el segundo al valor. Usa genéricos para que el compilador detecte mezclas incorrectas.

Los genéricos trabajan con referencias: se escribe `Integer`, no `int`. Java convierte automáticamente entre muchos valores primitivos y sus envoltorios; este mecanismo se llama boxing/unboxing.

```java
java.util.Hashtable<String, Integer> existencias = new java.util.Hashtable<>();
existencias.put("CU-42", 18);
Integer unidades = existencias.get("CU-42");
System.out.println(unidades); // 18
```

No declares el mapa sin tipos: perderías comprobaciones útiles al compilar.

## Número de entradas y capacidad

`size()` cuenta asociaciones, no celdas reservadas internamente. Al añadir una clave nueva aumenta el número de entradas; al actualizar una clave existente se mantiene; al eliminarla disminuye.

La capacidad es un detalle distinto: la implementación puede ampliar su almacenamiento al necesitarlo. **Eliminar una entrada no implica reducir automáticamente la capacidad interna.** Por ello, «tamaño modificable» describe las asociaciones que puedes guardar, no una promesa de que la memoria crezca y se reduzca con cada llamada.

## Comprueba que lo has entendido

Si dos productos tienen 18 unidades, ¿pueden compartir valor? Sí. Si tienen el mismo código y haces dos llamadas a `put`, ¿habrá dos entradas? No: la segunda llamada cambia el valor asociado a esa clave.

[Índice del bloque](README.md) · [Siguiente: Hashtable](hashtable.md)

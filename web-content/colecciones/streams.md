# Ordenación, predicados y streams

**Fuente de estudio:** apuntes del día 10. Las muestras son didácticas, no una reproducción literal del profesor.

La ordenación natural modifica la lista:

```java
Collections.sort(temperaturas);
```

Un Comparator determina la posición relativa de dos elementos; debe contemplar también la igualdad. Un Predicate responde true o false.

```java
temperaturas.removeIf(t -> t < 0);
long coincidencias = temperaturas.stream().filter(t -> t == 10.0).count();
```

Para calcular la media:

```java
double media = temperaturas.stream().mapToDouble(t -> t).average().orElse(0);
```

El valor alternativo 0 es una decisión del ejemplo didáctico para una lista vacía; un gestor real puede preferir informar de que no hay datos.

## Práctica de razonamiento

En un menú de temperaturas, distingue la repetición del menú, la selección de la opción y el procesamiento de la lista. Antes de calcular máximos, mínimos o medias decide qué debe ocurrir si está vacía.

[Combinar estructuras](../../docs/08-logica-programacion/combinar-estructuras.md) · [Ejercicios](../../ejercicios/README.md).

# Recorridos y lambdas

**Fuente de estudio:** apuntes de los días 9 y 10. Ejemplo reconstruido.

```java
for (int i = 0; i < nombres.size(); i++) {
    System.out.println(nombres.get(i));
}

for (String nombre : nombres) {
    System.out.println(nombre);
}

nombres.forEach(nombre -> System.out.println(nombre));
nombres.forEach(System.out::println);
```

Usa el for indexado cuando necesites la posición. El for-each entrega cada elemento. El método forEach recibe un comportamiento, un Consumer, para cada valor. La lambda y la referencia a método son dos maneras de expresar ese comportamiento.

Evita confundir las posiciones con los valores, o eliminar de una lista mientras avanzas por sus índices sin controlar los desplazamientos.

[Siguiente: ordenación y streams](streams.md).

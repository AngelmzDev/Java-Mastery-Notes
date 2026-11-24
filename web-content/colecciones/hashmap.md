# HashMap: claves, valores y recorridos

**Procedencia:** apuntes del día 9 y guía integrada de los días 9–10. Esta página sintetiza la idea; el código breve es didáctico.

```java
HashMap<Integer, String> alumnos = new HashMap<>();
alumnos.put(1234, "Ana");
alumnos.put(5678, "Luis");
System.out.println(alumnos.get(1234));
```

A diferencia de un array o ArrayList, el mapa no identifica valores por una posición consecutiva. La clave determina qué valor se consulta o modifica.

```java
for (Integer clave : alumnos.keySet()) {
    System.out.println(clave + ": " + alumnos.get(clave));
}
for (String nombre : alumnos.values()) {
    System.out.println(nombre);
}
```

[Mapa de conceptos de clase](../clases/dia-09.md) · [Lección de mapas del repositorio](../../docs/12-mapas/hashmap.md).

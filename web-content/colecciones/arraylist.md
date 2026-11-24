# ArrayList y genéricos

**Fuente de estudio:** apuntes del día 9. Ejemplos breves reconstruidos.

A diferencia de un array, una lista dinámica puede crecer y reducirse.

```java
ArrayList<String> nombres = new ArrayList<>();
nombres.add("Ana");
nombres.add("Luis");
nombres.set(0, "Eva");
System.out.println(nombres.get(0));
nombres.remove(1);
```

| Operación | Método |
|---|---|
| Añadir | add |
| Consultar | get |
| Sustituir | set |
| Eliminar | remove |
| Tamaño | size() |
| Vacía | isEmpty() |
| Buscar | contains |
| Vaciar | clear |

Los genéricos usan tipos de referencia, por ejemplo Integer en lugar de int. final impide reasignar la referencia, no modificar el contenido del objeto.

[Repasar arrays](../../docs/10-arrays/crear-y-recorrer.md) · [Recorridos](recorridos.md).

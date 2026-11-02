# Un gestor sencillo con capacidad fija

> Apunte didáctico propio, preparado para el alcance básico indicado. No se atribuye a una corrección del profesor.

## Capacidad y cantidad no son lo mismo

Un array de cinco huecos no significa que ya haya cinco amigos guardados. `nombres.length` es la capacidad. `cantidad` indica cuántos huecos se han utilizado. Mantendremos este acuerdo: los datos válidos ocupan desde 0 hasta `cantidad - 1`; los demás huecos están libres.

**Ejemplo didáctico propio; fragmento dentro de `main`:**

```java
String[] nombres = new String[3];
int cantidad = 0;
String nuevo = "Vega";
if (cantidad < nombres.length && !nuevo.trim().isEmpty()) {
    nombres[cantidad] = nuevo.trim();
    cantidad++;
}
for (int i = 0; i < cantidad; i++) {
    System.out.println(nombres[i]);
}
```

Primero comprobamos capacidad y dato. Después guardamos en el primer hueco libre (`cantidad`), y finalmente incrementamos. Si incrementaras antes de guardar, dejarías el hueco 0 vacío y podrías salirte del array. El programa muestra solo datos ocupados, evitando imprimir `null` de los huecos libres. El ejemplo supone que `nuevo` no es `null`.

## Integrarlo en un menú

Coloca el array y `cantidad` antes del `do while`; si los creas dentro, se borraría la agenda en cada elección. Dentro de `switch`, una opción pide el nombre, otra lista y otra busca. La búsqueda recorre solo las posiciones ocupadas. Una política posible es impedir duplicados con `equalsIgnoreCase`; hay que decidirla antes de programar.

```text
Estado inicial: [null, null, null], cantidad=0
Añadir Vega:    [Vega, null, null], cantidad=1
Añadir Leo:     [Vega, Leo, null], cantidad=2
Buscar Sol:    revisar 0 y 1 → no encontrado
Listar:        mostrar 0 y 1; no visitar el hueco 2
```

Si más adelante deseas borrar un elemento sin dejar huecos intermedios, puedes desplazar a la izquierda los que vienen después, reducir `cantidad` y poner a `null` el hueco final que quedó libre. Ese desplazamiento utiliza otro recorrido con índices; no hace falta una colección dinámica. El ejercicio básico de este repositorio se limita a añadir, listar y buscar.

## Errores habituales

- Comprobar `cantidad <= nombres.length`: con igualdad el array ya está lleno.
- Usar `nombres[i].equals(...)` en todos los huecos: los libres contienen `null`.
- Permitir un nombre vacío sin decidirlo.
- Leer una opción numérica y el nombre con `nextLine` sin gestionar el salto pendiente.
- No probar la capacidad completa: el error puede aparecer solo al intentar añadir una cuarta persona.

## Practica

Diseña una agenda de compañeros de taller con cinco plazas, opciones añadir/listar/buscar/salir y rechazo de duplicados. Antes del código, dibuja el array tras dos altas, una alta repetida y una búsqueda fallida. Consulta la [solución aplicada](../../ejercicios/soluciones/24-agenda-de-taller.md) solo después de intentarlo.

---

[Índice del tema](README.md) · [Ejercicios para practicar](ejercicios.md) · [Índice general](../../README.md)

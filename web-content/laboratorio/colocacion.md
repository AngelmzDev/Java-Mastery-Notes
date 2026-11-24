# Dónde colocar cada instrucción

**Apoyo didáctico propio**, basado en los patrones de las clases 6–8 y el gestor de temperaturas de la clase 10.

La pregunta clave no es qué sintaxis escribir, sino **cuántas veces debe ejecutarse cada acción**.

| Frecuencia | Posición habitual |
|---|---|
| Una vez antes de repetir | Antes del bucle |
| Una vez por elemento | Dentro del bucle |
| Solo si el elemento cumple una condición | Dentro del if, en el bucle |
| Una vez después de procesar todos los elementos | Después del bucle |
| Una vez por opción de menú elegida | En el case correspondiente |

## Ejercicio 1 — Contar pares

Lee cinco enteros y muestra cuántos son pares. Decide dónde van la inicialización del contador, la lectura, la condición y la impresión.

<details>
<summary>Pista 1</summary>

El número actual cambia en cada vuelta; la cantidad de pares tiene que conservarse.

</details>

<details>
<summary>Pista 2</summary>

Utiliza el módulo para comprobar si el resto de dividir entre 2 es cero. Incrementa el contador solo cuando se cumple.

</details>

<details>
<summary>Solución razonada</summary>

```java
int cantidadPares = 0;
for (int i = 0; i < 5; i++) {
    int numero = lector.nextInt();
    if (numero % 2 == 0) {
        cantidadPares++;
    }
}
System.out.println(cantidadPares);
```

El contador está fuera porque acumula el estado de todo el recorrido. La lectura y la decisión están dentro porque se repiten con cada entero. La salida es posterior porque solo interesa el total final.

Casos: 2, 4, 7, 9, 0 → 3; todos impares → 0.

</details>

## Ejercicio 2 — Tablas de multiplicar

Muestra las tablas del 3 al 5, con factores del 1 al 4. Cada tabla debe tener una sola cabecera.

<details>
<summary>Pista</summary>

El bucle exterior determina la tabla. El interior determina cada multiplicación. La cabecera ocurre una vez por tabla, no una vez por producto.

</details>

<details>
<summary>Solución razonada</summary>

```java
for (int tabla = 3; tabla <= 5; tabla++) {
    System.out.println("Tabla del " + tabla);
    for (int factor = 1; factor <= 4; factor++) {
        System.out.println(tabla * factor);
    }
}
```

Se imprimen 3 cabeceras y 12 productos.

</details>

## Ejercicio 3 — Menú de temperaturas

Plantea un menú que permite añadir, mostrar y eliminar temperaturas negativas hasta elegir salir. Escribe primero el algoritmo, no el código.

<details>
<summary>Pista</summary>

El menú es la repetición exterior, el switch selecciona qué operación ejecutar y el recorrido de los datos pertenece solo a la opción que lo necesita.

</details>

<details>
<summary>Esqueleto de razonamiento</summary>

1. Crear la colección antes de repetir el menú.
2. Mostrar las opciones y leer la elegida en cada vuelta.
3. Seleccionar la acción mediante switch.
4. Añadir o recorrer dentro del caso correspondiente; para borrar por condición, usar removeIf si procede.
5. Comprobar la opción de salida al final del do while.

La colección no se reinicializa en cada vuelta. Las operaciones no se ejecutan todas cada vez: depende de la opción seleccionada.

</details>

[Volver al laboratorio interactivo](trazas.mdx) · [Bucles](../../docs/07-bucles/README.md) · [Clase 10](../clases/apuntes/dia-10.md).

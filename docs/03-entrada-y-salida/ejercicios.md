# Práctica: Entrada, salida y documentación

Variantes didácticas propias: cambian los contextos y datos, conservando los objetivos de este bloque. El estado de corrección en clase no está confirmado.

**Cómo trabajar:** predice el resultado, escribe los pasos, resuelve, prueba los límites y explica una decisión del código. En las tareas de entorno o Git, documenta las acciones y lo que observas.

## 1. Ficha de lectura

**Objetivo:** Practicar nextInt y nextLine.

Pide primero el número entero de páginas de un libro y después su título completo, cada dato en una línea. Muestra Título: ... y Páginas: ... en líneas distintas. No pierdas la primera palabra ni dejes el título vacío por un salto pendiente.

**Comprueba:** Con 240 y La isla del tesoro se conserva el título completo.

<details>
<summary>Pista</summary>

Tras nextInt queda el resto de la línea pendiente.

</details>

## 2. Ticket con formato

**Objetivo:** Distinguir concatenación, formato y valor.

Lee nombre de artículo, cantidad entera y precio decimal con punto. Muestra una línea con nombre, cantidad y total usando %s, %d y %.2f. Fija Locale.US en lector y printf para que la prueba sea reproducible. Usa el nombre en la primera línea para evitar mezclar líneas pendientes.

**Comprueba:** Con Carpeta, 3 y 2.4: Carpeta | 3 | 7.20.

<details>
<summary>Pista</summary>

El total es precio*cantidad; %.2f solo decide cómo se muestra.

</details>

## 3. Dorsal válido

**Objetivo:** Validar formato y rango sin atascarse.

Pide un dorsal entero entre 10 y 99 hasta recibir uno válido o llegar al final de la entrada. Con un token no numérico, descártalo y vuelve a pedir. Distingue Formato incorrecto de Fuera de rango. Reutiliza el mismo lector.

**Comprueba:** Para hola, 9, 42: se rechazan los dos primeros y se acepta 42.

<details>
<summary>Pista</summary>

hasNextInt no consume el token incorrecto.

</details>

[Soluciones de las tres actividades](../../ejercicios/practica-soluciones/03-entrada-y-salida.md) · [Volver al tema](README.md) · [Índice de ejercicios](../../ejercicios/README.md)

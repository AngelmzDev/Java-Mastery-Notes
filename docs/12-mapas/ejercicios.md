# Práctica: mapas con claves y valores

Intenta resolver cada actividad antes de abrir [las soluciones](soluciones.md). Son tres actividades nuevas de esta ampliación y no forman parte del recuento original de 33.

## 1. Material de un laboratorio — Hashtable

Crea una `Hashtable<String, Integer>` para guardar estas existencias:

| Código | Cantidad |
| --- | --- |
| MI-21 | 14 |
| TU-63 | 5 |
| PL-04 | 14 |

1. Actualiza TU-63 a 9 y muestra el valor que devuelve `put`.
2. Comprueba si existe la clave MI-21 y si aparece el valor 14.
3. Consulta ZZ-00 y muestra un mensaje si no existe, sin provocar unboxing de `null`.
4. Suma las cantidades con `elements()`.
5. Elimina PL-04 y comprueba el tamaño final.

**Resultados de control:** valor anterior 5; las dos comprobaciones son verdaderas; suma antes de eliminar 37; quedan 2 entradas. No dependas del orden de recorrido.

## 2. Registro de préstamos — HashMap

Un registro contiene estos nombres de material:

`"Trípode", "Foco", "Trípode", "Micrófono", "Foco", "Trípode"`.

Construye un `Map<String, Integer>` con `HashMap` y cuenta cuántas veces aparece cada nombre. Muestra los pares usando `entrySet()`. Consulta después el contador de `"Reflector"` con resultado alternativo cero.

**Resultados de control:** Trípode 3, Foco 2, Micrófono 1; Reflector 0; tres claves. El orden de las líneas puede variar.

**Casos límite:** entrada vacía y un único nombre repetido cuatro veces. Decide que el array de entrada no contenga nombres `null`.

## 3. Retirar tareas breves — Iterator

Guarda en una `Hashtable<String, Integer>` las duraciones:

| Tarea | Minutos |
| --- | --- |
| Preparar sobres | 8 |
| Diseñar portada | 34 |
| Revisar títulos | 12 |
| Imprimir pruebas | 20 |

Elimina las tareas de menos de 15 minutos usando un iterador de `entrySet()`. Muestra cuántas se han eliminado y cuántas permanecen. Explica por qué no utilizas `Enumeration` para borrar durante el recorrido.

**Resultados de control:** dos eliminadas y dos conservadas. «Imprimir pruebas» permanece. Repite con un mapa vacío, con todas las tareas por debajo del límite y con ninguna por debajo. Prueba una tarea de exactamente 15 minutos: debe permanecer.

[Índice del bloque](README.md) · [Soluciones razonadas](soluciones.md)

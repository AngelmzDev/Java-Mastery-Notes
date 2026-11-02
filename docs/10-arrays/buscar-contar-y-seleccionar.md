# Buscar, contar, hallar extremos y elegir posiciones

> Apunte didáctico propio, preparado para el alcance básico indicado. No se atribuye a una corrección del profesor.

## No todas las búsquedas preguntan lo mismo

«¿Existe?», «¿dónde está la primera coincidencia?» y «¿cuántas hay?» necesitan resultados diferentes. Para existencia basta una bandera; para una posición usamos un índice y un valor especial como -1; para recuento hay que visitar todas las posiciones.

**Ejemplo didáctico propio; fragmento dentro de `main`:**

```java
int[] codigos = {4, 8, 4, 9};
int buscado = 4;
int primera = -1;
int coincidencias = 0;
for (int i = 0; i < codigos.length; i++) {
    if (codigos[i] == buscado) {
        coincidencias++;
        if (primera == -1) primera = i;
    }
}
System.out.println(primera + " " + coincidencias); // 0 2
```

| Índice | Valor | ¿Coincide? | Primera | Recuento |
| --- | --- | --- | --- | --- |
| 0 | 4 | Sí | 0 | 1 |
| 1 | 8 | No | 0 | 1 |
| 2 | 4 | Sí | 0 | 2 |
| 3 | 9 | No | 0 | 2 |

La posición 0 es válida; por eso no significa «no encontrado». Si solo quisieras la primera posición, podrías guardar `i` y hacer `break`; para contar todas las coincidencias, ese `break` sería incorrecto. No uses un índice -1 para acceder al array.

## Elegir un candidato máximo

```java
int[] puntos = {-8, -2, -5};
if (puntos.length > 0) {
    int mejorPosicion = 0;
    for (int i = 1; i < puntos.length; i++) {
        if (puntos[i] > puntos[mejorPosicion]) {
            mejorPosicion = i;
        }
    }
    System.out.println(mejorPosicion + " " + puntos[mejorPosicion]); // 1 -2
} else {
    System.out.println("Sin elementos");
}
```

Guardamos una posición, no solo el valor, para poder mostrar ambos. Empezamos en 1 porque el primer candidato ya es 0. Con `>` mantenemos la primera posición en un empate; con `>=` nos quedaríamos con la última. Esa decisión es parte del requisito, no un detalle accidental.

## Posición aleatoria

Para un array no vacío, `int posicion = (int) (Math.random() * datos.length);` obtiene un índice desde 0 hasta `length - 1`. El valor seleccionado es `datos[posicion]`. No confundas índice con elemento. Comprueba primero `datos.length > 0`; con un array vacío acabarías intentando acceder a 0 sin existir.

En un `String[]`, compara contenidos con `equals`, no con `==`. Si algunos elementos pueden ser `null`, comprueba antes de invocar métodos. En un gestor con ocupación parcial, recorre solo `0..cantidad-1`, no los huecos libres.

## Practica

Busca un nombre en un array de seis nombres ignorando mayúsculas. Informa de la primera posición y del número de coincidencias. Prueba un nombre ausente y uno repetido; no uses colecciones.

---

[Índice del tema](README.md) · [Ejercicios para practicar](ejercicios.md) · [Índice general](../../README.md)

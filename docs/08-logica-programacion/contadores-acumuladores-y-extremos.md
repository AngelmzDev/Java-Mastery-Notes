# Contadores, acumuladores, banderas y extremos

> Apunte didáctico propio, preparado para el alcance básico indicado. No se atribuye a una corrección del profesor.

## Cada variable tiene un papel

Un **contador** registra cuántas veces ocurre algo; suele empezar a cero y aumentar de uno en uno. Un **acumulador** combina valores: para sumar empieza en 0; para multiplicar, en 1. Una **bandera** recuerda una condición mediante un booleano. Una **auxiliar** conserva temporalmente un valor para no perderlo al sobrescribir otra variable.

**Ejemplo didáctico propio; fragmento dentro de `main`:**

```java
double[] temperaturas = {-4.0, -7.0, -2.0};
double suma = 0;
double maxima = temperaturas[0];
double minima = temperaturas[0];
int bajoCero = 0;
boolean hayHelada = false;
for (double temperatura : temperaturas) {
    suma += temperatura;
    if (temperatura > maxima) maxima = temperatura;
    if (temperatura < minima) minima = temperatura;
    if (temperatura < 0) {
        bajoCero++;
        hayHelada = true;
    }
}
double media = suma / temperaturas.length;
System.out.println(media + " " + maxima + " " + minima + " " + bajoCero + " " + hayHelada);
```

Este ejemplo adelanta un array de tres elementos para que los datos puedan reproducirse; vuelve a él tras el [tema de arrays](../10-arrays/crear-y-recorrer.md). Sin array, la misma lógica puede aplicarse a lecturas de teclado en un bucle. El array se supone no vacío.

| Dato | Suma después | Máxima | Mínima | Bajo cero | Hay helada |
| --- | --- | --- | --- | --- | --- |
| -4 | -4 | -4 | -4 | 1 | true |
| -7 | -11 | -4 | -7 | 2 | true |
| -2 | -13 | -2 | -7 | 3 | true |

La media es aproximadamente -4.3333. Inicializar `maxima` a cero sería erróneo: ningún dato supera cero, y terminaríamos anunciando una temperatura que nunca se registró. Usar el primer dato válido como candidato evita ese sesgo. Si pueden no existir datos, primero verifica que hay alguno o utiliza una bandera que indique cuándo se ha recibido el primero.

Una vez detectada una helada, la bandera permanece cierta. No escribas `hayHelada = temperatura < 0` en cada vuelta si tu pregunta es «¿hubo alguna?»: la última temperatura borraría la historia. Para «¿son todas?», se empieza en `true` y se pasa a `false` ante el primer incumplimiento.

## Intercambiar sin perder datos

```java
int izquierda = 9;
int derecha = 4;
int auxiliar = izquierda;
izquierda = derecha;
derecha = auxiliar;
System.out.println(izquierda + " " + derecha); // 4 9
```

Si asignaras primero `izquierda = derecha` y después `derecha = izquierda`, ambas acabarían valiendo 4. La auxiliar conserva el 9 original.

## Practica

Registra cinco puntuaciones, suma todas y cuenta solo las aprobadas. Explica por qué la media general usa el total de puntuaciones y la media de aprobadas necesita su propia suma y su propio contador. Comprueba el caso sin aprobadas antes de dividir.

---

[Índice del tema](README.md) · [Ejercicios para practicar](ejercicios.md) · [Índice general](../../README.md)

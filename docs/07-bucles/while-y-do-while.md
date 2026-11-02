# while, do while y condiciones de parada

> Apunte didáctico propio, preparado para el alcance básico indicado. No se atribuye a una corrección del profesor.

## ¿Puede haber cero vueltas?

`while` comprueba primero y puede no ejecutar su cuerpo. `do while` ejecuta el cuerpo y comprueba al final: tiene al menos una vuelta. Ambos sirven cuando el número de repeticiones depende de los datos. No se elige por costumbre: se elige según cuándo se conoce la condición.

**Ejemplo didáctico propio; fragmento dentro de `main`:**

```java
int pendientes = 3;
while (pendientes > 0) {
    System.out.println("Quedan " + pendientes);
    pendientes--;
}
System.out.println("Terminado");
```

La variable de control se inicializa fuera; el cuerpo la actualiza. Pasa por 3, 2 y 1. Con 0 inicial no imprime ningún aviso. Si olvidamos `pendientes--`, la condición no cambia y se produce un bucle infinito.

```java
java.util.Scanner entrada = new java.util.Scanner(System.in);
int dorsal;
do {
    System.out.println("Dorsal de 10 a 99:");
    dorsal = entrada.nextInt();
} while (dorsal < 10 || dorsal > 99);
System.out.println("Dorsal aceptado");
```

Aquí hay que pedir al menos un dato. `dorsal` se declara fuera del bloque porque la condición final también lo necesita; se asigna antes de comprobarla. El punto y coma final de `do while` sí es obligatorio. El ejemplo supone entrada con formato entero; para texto no numérico aplica la [validación de Scanner](../03-entrada-y-salida/validacion-y-errores.md).

| Dato introducido | Condición de repetición | Qué ocurre |
| --- | --- | --- |
| 7 | true | Se vuelve a pedir |
| 105 | true | Se vuelve a pedir |
| 42 | false | Se acepta y se sale |

## Elegir según el problema

| Necesidad | Elección habitual | Motivo |
| --- | --- | --- |
| Procesar exactamente 5 lecturas | `for` | Cantidad conocida |
| Leer hasta un centinela que puede llegar primero | `while` | Puede no haber datos |
| Mostrar un menú y leer opción al menos una vez | `do while` | Primera ejecución necesaria |

En todos los casos hay que identificar qué dato cambia y cómo se alcanzará la parada. `while (true)` con una salida puede funcionar, pero al empezar suele ser más comprensible una condición explícita.

## Practica

Pide una clave textual hasta que coincida con `"JAVA"` usando `equals`, contando intentos. Decide si `do while` encaja y explica qué instrucciones deben repetirse. Usa solo una clave didáctica, no un sistema de autenticación real.

---

[Índice del tema](README.md) · [Ejercicios para practicar](ejercicios.md) · [Índice general](../../README.md)

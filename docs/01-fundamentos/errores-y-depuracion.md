# Compilar, ejecutar y depurar

> Apunte didáctico propio, preparado para el alcance básico indicado. No se atribuye a una corrección del profesor.

## Tres problemas diferentes

| Tipo | Cuándo se detecta | Ejemplo | Qué revisar |
| --- | --- | --- | --- |
| Compilación | Antes de ejecutar | `int n = "tres";` | Tipos, símbolos y sintaxis |
| Ejecución | Al pasar por una instrucción | `charAt(9)` en `"sol"` | Valores e índices reales |
| Lógico | El programa termina con resultado equivocado | Media hecha con división entera | Razonamiento y casos de prueba |

Lee primero el primer error del compilador: los siguientes pueden ser consecuencia de una llave o un punto y coma anterior. Una excepción muestra una pila de llamadas y una línea; empieza por la línea de tu propio código. No se trata de ocultar el error, sino de entender sus condiciones.

## Sesión de depuración guiada

**Ejemplo didáctico propio; fragmento dentro de `main`:**

```java
int total = 0;
for (int paso = 1; paso <= 3; paso++) {
    total += paso;
}
System.out.println(total);
```

1. Pon un breakpoint en `total += paso;` haciendo clic en el margen.
2. Ejecuta con **Debug**, no solamente **Run**. El breakpoint detiene el programa **antes** de ejecutar la instrucción marcada.
3. Mira `paso` y `total`. En la primera parada valen `1` y `0`.
4. Usa **Step Over** para avanzar una instrucción. Tras sumar, `total` vale `1`.
5. Continúa hasta salir del bucle. **Step Into** entra en un método llamado; **Step Out** sale de él. No necesitas entrar en el código interno de `println`.

| Iteración | `paso` | `total` antes | `total` después |
| --- | --- | --- | --- |
| 1 | 1 | 0 | 1 |
| 2 | 2 | 1 | 3 |
| 3 | 3 | 3 | 6 |

La salida se coloca **después** del bucle porque queremos un resultado final. Si estuviera dentro, veríamos los parciales `1`, `3`, `6`. Si reinicializamos `total` dentro del bucle, se perdería la suma anterior.

## Estrategia útil

Antes de cambiar código, escribe la salida esperada para un caso pequeño. Compara tu traza con el depurador y localiza la primera divergencia. Revisa límites y actualizaciones: una condición aparentemente correcta puede ejecutar una vuelta de más.

## Practica

Cambia `paso <= 3` por `paso < 3`. Predice la nueva salida y comprueba cuántas veces se detiene el breakpoint. Relación: [trazas y errores lógicos](../08-logica-programacion/trazas-y-validacion.md).

---

[Índice del tema](README.md) · [Ejercicios para practicar](ejercicios.md) · [Índice general](../../README.md)

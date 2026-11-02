# switch clásico, flechas y casos agrupados

> Apunte didáctico propio, preparado para el alcance básico indicado. No se atribuye a una corrección del profesor.

## Seleccionar por un valor concreto

`switch` resulta cómodo cuando una misma variable se compara con varias alternativas discretas. `if` suele ser más claro para intervalos, combinaciones de variables o desigualdades. En este nivel utilizamos selectores como `int`, `char` y `String`, sin patrones ni características preview de Java 23.

**Ejemplo didáctico propio; fragmento dentro de `main`:**

```java
int opcion = 2;
switch (opcion) {
    case 1:
        System.out.println("Abrir ficha");
        break;
    case 2:
        System.out.println("Guardar ficha");
        break;
    default:
        System.out.println("Opción desconocida");
}
```

El selector se evalúa, se busca el caso coincidente y se ejecutan instrucciones desde allí. `break` sale del `switch`. En el formato clásico, si falta, la ejecución continúa por los casos siguientes, incluso aunque sus etiquetas no coincidan: se llama caída entre casos o *fall-through*.

Con la opción 1 y sin su `break`, se imprimirían `Abrir ficha` y `Guardar ficha`. No ocurriría una nueva comprobación de `opcion == 2`. Se puede agrupar intencionalmente varias etiquetas sin instrucciones intermedias, pero hay que hacerlo explícito y legible.

## Sintaxis con flechas

```java
char letra = 'a';
switch (letra) {
    case 'a', 'e', 'i', 'o', 'u' -> System.out.println("Vocal");
    default -> {
        System.out.println("No es una vocal minúscula sin tilde");
        System.out.println("Comprueba si es consonante o dato no válido");
    }
}
```

Cada caso con flecha ejecuta solo su regla; no necesita `break` para impedir la caída al siguiente. Para varias instrucciones se usan llaves. Este ejemplo no afirma que cualquier otro carácter sea consonante: `3` tampoco es una vocal. La validación se hace antes o después según los requisitos.

No mezcles sin motivo los dos estilos. Los casos clásicos comparten el bloque del `switch` si no pones bloques propios; declarar el mismo nombre en varios casos puede producir conflictos. Con llaves por caso puedes limitar el ámbito. Una variable local creada dentro de un caso no está disponible fuera de sus llaves.

## `break` no siempre termina el programa

Si el `switch` está dentro de un `do while`, un `break` del caso sale del `switch`, no del bucle exterior. Para salir de un menú, actualiza la variable de la condición de repetición. Relación: [menús y combinación de estructuras](../08-logica-programacion/combinar-estructuras.md).

## Practica

Agrupa los códigos 1 y 2 como `Laboratorio A`, el 3 como `Laboratorio B` y cualquier otro como error. Resuélvelo primero con casos clásicos agrupados y después con flechas. Ejecuta 1, 2, 3 y 9 y compara resultados.

---

[Índice del tema](README.md) · [Ejercicios para practicar](ejercicios.md) · [Índice general](../../README.md)

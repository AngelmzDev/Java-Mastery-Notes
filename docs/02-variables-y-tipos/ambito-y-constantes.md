# Ámbito, vida de una variable y constantes

> Apunte didáctico propio, preparado para el alcance básico indicado. No se atribuye a una corrección del profesor.

## Dónde puede utilizarse un nombre

El ámbito es la región del código desde la que se puede referenciar una variable por su nombre. Las llaves de un bloque importan tanto como su indentación. Una variable local declarada dentro de un `if` no puede utilizarse fuera; una declarada en el encabezado de `for` pertenece al bucle.

**Ejemplo didáctico propio, clase completa:**

```java
public class Ambito {
    static final int LIMITE = 3;

    public static void main(String[] args) {
        int total = 0;
        for (int turno = 1; turno <= LIMITE; turno++) {
            int puntos = turno * 2;
            total += puntos;
        }
        System.out.println(total);
    }
}
```

1. `LIMITE` es un campo de clase compartido, accesible desde nuestros métodos estáticos. `final` impide reasignarlo después de su inicialización.
2. `total` se declara en el método porque debe conservar su valor entre vueltas y utilizarse después.
3. `turno` solo es necesario en el bucle; fuera no se reconoce.
4. `puntos` es un dato de la vuelta actual. Se calcula de nuevo en cada paso: `2`, `4`, `6`.
5. Al salir, `total` contiene `12`. No necesitamos conservar los tres valores individuales para sumarlos.

Un campo pertenece a la clase o a un objeto; los campos tienen valores iniciales por defecto. Una variable local no recibe un valor utilizable automáticamente. No conviertas todo en campos para evitar errores de ámbito: coloca cada variable en el bloque más pequeño que permita su tarea.

## Nombres que explican el papel

Clases: `RegistroTemperaturas` (PascalCase). Variables y métodos: `numeroIntentos`, `calcularMedia` (camelCase). Constantes convencionales: `MAX_INTENTOS`. Paquetes: minúsculas, como `aprendizaje.bucles`. Usa nombres sin espacios y evita palabras reservadas. No es buena práctica llamar `a`, `b`, `c` a todos los datos; en un intercambio de tres números pueden usarse con una explicación local.

`final double IVA = 0.21;` impide escribir después `IVA = 0.10;`. Una referencia `final` no vuelve inmutable al objeto al que apunta: en un array se podrán cambiar elementos, aunque no reasignar la referencia a otro array. No confundas una constante con un dato leído por teclado que debe poder variar.

## Fallo para razonar, no para copiar

```text
for (int i = 0; i < 2; i++) { ... }
System.out.println(i); // no compila: i no está en este ámbito
```

## Practica

Decide dónde declarar `suma`, `temperaturaActual` y `mediaFinal` en un programa que lee cuatro temperaturas. Debes justificar cada ubicación. Relación: [contadores y acumuladores](../08-logica-programacion/contadores-acumuladores-y-extremos.md).

---

[Índice del tema](README.md) · [Ejercicios para practicar](ejercicios.md) · [Índice general](../../README.md)

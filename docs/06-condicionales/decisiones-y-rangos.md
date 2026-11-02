# Decisiones, rangos y condiciones anidadas

> Apunte didáctico propio, preparado para el alcance básico indicado. No se atribuye a una corrección del profesor.

## Elegir un camino del programa

La ejecución normal sigue el orden de las instrucciones. `if` permite ejecutar un bloque solo si una expresión booleana es cierta. `if-else` selecciona exactamente una de dos ramas. Una cadena `if-else if-else` prueba de arriba abajo y ejecuta solo el primer bloque que encaja.

**Ejemplo didáctico propio; fragmento dentro de `main`:**

```java
double nota = 7.5;
String nivel;
if (nota < 0 || nota > 10) {
    nivel = "Dato no válido";
} else if (nota < 5) {
    nivel = "En progreso";
} else if (nota < 7) {
    nivel = "Superado";
} else if (nota < 9) {
    nivel = "Destacado";
} else {
    nivel = "Excelente";
}
System.out.println(nivel);
```

El ejemplo supone una nota finita. Primero se descartan valores fuera de 0..10. Para llegar al segundo rango ya sabemos que la nota es al menos 5: no hace falta repetir `nota >= 5`. Al evaluar 7.5, se descartan las ramas anteriores y se muestra `Destacado`. Prueba los límites 0, 5, 7, 9 y 10; no basta con una nota interior.

| Valor | Primera condición cierta | Resultado |
| --- | --- | --- |
| -1 | Fuera del rango | Dato no válido |
| 4.9 | `< 5` | En progreso |
| 5 | `< 7` | Superado |
| 9 | Ninguna rama anterior | Excelente |

Si escribimos varios `if` independientes, pueden ejecutarse varios. Eso sirve para avisos que pueden coexistir, pero no para categorías excluyentes. Si colocamos `nota >= 5` antes que `nota >= 9`, la rama general captura también las notas excelentes.

## Cuándo anidar

Una condición va dentro de otra cuando solo tiene sentido después de cumplir un requisito. Por ejemplo, después de verificar que un día pertenece al mes elegido, puede calcularse el siguiente día. No tiene sentido calcularlo con un mes 15.

```java
int plazas = 2;
boolean reservaConfirmada = true;
if (plazas > 0) {
    if (reservaConfirmada) {
        System.out.println("Puedes entrar");
    } else {
        System.out.println("Confirma la reserva");
    }
} else {
    System.out.println("Aforo completo");
}
```

Primero se decide si hay plazas; únicamente entonces importa la reserva. Si solo interesa una respuesta sí/no, se puede combinar con `&&`, pero aquí cada fallo necesita un mensaje diferente.

## Errores y práctica

No escribas `if (condicion);`: el punto y coma vacía el condicional. Las llaves evitan dudas sobre qué instrucciones pertenecen a cada rama. Un `else` se asocia con el `if` pendiente más cercano, no con la indentación que parezca más bonita.

Diseña tres tramos de tarifa para paquetes: hasta 2 kg, más de 2 y hasta 5, más de 5 y hasta 10. Rechaza pesos no positivos o mayores de 10 antes de clasificar. Justifica el orden.

---

[Índice del tema](README.md) · [Ejercicios para practicar](ejercicios.md) · [Índice general](../../README.md)

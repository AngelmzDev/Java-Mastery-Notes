# Organización, formato y nombres

> Apunte didáctico propio, preparado para el alcance básico indicado. No se atribuye a una corrección del profesor.

## Hacer visible el razonamiento

El código se lee más veces de las que se escribe. Una indentación consistente permite ver qué bloque contiene una instrucción; no cambia la ejecución de Java, pero evita interpretar mal unas llaves. Usa cuatro espacios por nivel y separa tareas con líneas en blanco.

Organiza clases por temas o paquetes, no mediante nombres ambiguos como `pruebaFinalBuena2`. Una clase pública por archivo con el mismo nombre facilita compilar. Mantén los resultados compilados fuera de `src` y no mezcles apuntes con archivos temporales del IDE.

**Ejemplo didáctico propio; fragmento dentro de `main`:**

```java
int lecturasValidas = 0;
double sumaTemperaturas = 0;
double temperaturaActual = 18.5;
// Solo se incorporan medidas dentro del rango admitido por el sensor.
if (temperaturaActual >= -40 && temperaturaActual <= 60) {
    sumaTemperaturas += temperaturaActual;
    lecturasValidas++;
}
System.out.println(sumaTemperaturas + " " + lecturasValidas);
```

Los nombres explican cantidad, unidad y papel. El comentario explica la política del sensor, no repite la suma. El contador cambia en el mismo bloque que el acumulador porque ambos deben registrar exactamente las mismas medidas válidas.

## Refactorizar sin cambiar el comportamiento

Si `x` significa cantidad de lecturas, renómbralo con **Refactor → Rename** en IntelliJ (habitualmente `Shift+F6`). El IDE actualiza los usos reconocidos; revisa la vista previa. No uses reemplazo global indiscriminado: podría cambiar texto o nombres parecidos que no corresponden.

El formato automático ayuda a alinear llaves, pero no decide dónde deben estar. Tras renombrar o reformatear, compila y ejecuta los mismos casos de prueba; cambiar el nombre no debería cambiar el resultado.

## Una revisión corta antes de entregar

1. ¿Las variables describen datos y unidades? ¿Se inicializan antes de leerse?
2. ¿Cada bucle tiene una razón de parada y una actualización alcanzable?
3. ¿Los límites de cadena y array son válidos?
4. ¿La entrada inválida altera la suma o el contador por accidente?
5. ¿La salida final está después del recorrido que resume?
6. ¿Se conservan archivos existentes y se preparan solo los cambios deseados en Git?

Evita comentarios que contradigan el código, números repetidos sin significado y bloques enteros comentados de versiones antiguas. Git ya conserva versiones; los apuntes deben mostrar la versión que se está explicando.

## Practica

Renombra tres variables ambiguas de un ejercicio tuyo. Añade un comentario sobre una decisión de validación, aplica formato y compara el resultado de antes y después con el mismo conjunto de entradas. Relación: [errores y depuración](../01-fundamentos/errores-y-depuracion.md).

---

[Índice del tema](README.md) · [Ejercicios para practicar](ejercicios.md) · [Índice general](../../README.md)

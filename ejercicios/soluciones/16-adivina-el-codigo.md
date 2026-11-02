# Adivina el código

**Estado:** resuelto didáctico propio; corrección en clase no confirmada.

## Enunciado

Sortea un entero de 1 a 20. Lee propuestas hasta acertar o introducir 0 para abandonar. Los valores fuera de 1..20 (salvo el 0) se rechazan sin contar intento. Indica Mayor si el secreto es mayor y Menor si es menor. Al acertar muestra el número de intentos válidos.

## Objetivo y razonamiento

Combinar azar, validación, comparación y recuento de intentos.

El secreto se sortea una sola vez antes del bucle. Las propuestas se leen dentro. Un centinela 0 termina sin contarse. El contador aumenta solo con propuestas admitidas y antes de comprobar el acierto, porque el intento acertado también cuenta.

## Traza o comprobación manual

Si el secreto fuera 8 y se proponen -2, 5, 8: rechazo (0 intentos), Mayor (1), Acertaste en 2. El secreto real varía; la traza fija sirve para razonar.

## Código completo

Abre [E16AdivinaElCodigo.java](../src/ejercicios/E16AdivinaElCodigo.java). La clase tiene `main`, imports y paquete: no necesita completar fragmentos. Lee en orden: datos de entrada, preparación, decisiones o repeticiones y salida.

## Pruebas y límites

Entrada:

```text
0
```

Salida:

```text
Abandono
```

Entrada:

```text
-2 0
```

Salida:

```text
Propuesta no válida
Abandono
```

Las ejecuciones aleatorias se comprueban por sus condiciones de rango y relación entre valores, no exigiendo una salida fija. Varias pruebas no demuestran por sí solas la calidad estadística del sorteo.

Salvo que el enunciado indique otro comportamiento, las lecturas numéricas presuponen tokens con formato correcto y suficientes datos para completar la tarea. Los rangos se validan como indica cada ejercicio. La validación de formato y EOF se desarrolla en el [tema de entrada](../../docs/03-entrada-y-salida/validacion-y-errores.md); no se ocultan excepciones con manejo avanzado.

## Antes de mirar la solución otra vez

Cambia un dato de la prueba y predice la salida. Identifica qué variable conserva información, qué instrucción se repite y qué condición termina el proceso. Provoca un error lógico cambiando la posición de una inicialización y explica el resultado, sin conservar esa versión como solución.

[Tema y práctica](../../docs/07-bucles/README.md) · [Índice de ejercicios](../README.md)

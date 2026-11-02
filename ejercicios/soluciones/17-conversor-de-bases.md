# Conversor de bases

**Estado:** resuelto didáctico propio; corrección en clase no confirmada.

## Enunciado

Lee base de origen, base de destino y un número sin signo ni prefijos. Las bases admitidas son 2, 8, 10 y 16. Admite de una a siete cifras, en mayúsculas o minúsculas. Valida sus cifras y muestra el valor equivalente en la base de destino. Siete cifras en las bases admitidas caben en int positivo.

## Objetivo y razonamiento

Aplicar valor posicional, charAt y divisiones sucesivas.

La conversión tiene dos etapas: acumular el valor decimal de izquierda a derecha y luego construir el resultado por restos antepuestos. Validamos antes de acumular cada cifra. El do while de la salida garantiza una cifra para el cero. El resultado no conserva ceros iniciales.

## Traza o comprobación manual

Origen 16, destino 2, texto 1A: decimal pasa 0→1→26. Restos de 26 entre 2: 0,1,0,1,1; antepuestos producen 11010.

## Código completo

Abre [E17ConversorDeBases.java](../src/ejercicios/E17ConversorDeBases.java). La clase tiene `main`, imports y paquete: no necesita completar fragmentos. Lee en orden: datos de entrada, preparación, decisiones o repeticiones y salida.

## Pruebas y límites

Entrada:

```text
16 2 1a
```

Salida:

```text
11010
```

Entrada:

```text
2 10 10110
```

Salida:

```text
22
```

Entrada:

```text
8 10 347
```

Salida:

```text
231
```

Salvo que el enunciado indique otro comportamiento, las lecturas numéricas presuponen tokens con formato correcto y suficientes datos para completar la tarea. Los rangos se validan como indica cada ejercicio. La validación de formato y EOF se desarrolla en el [tema de entrada](../../docs/03-entrada-y-salida/validacion-y-errores.md); no se ocultan excepciones con manejo avanzado.

## Antes de mirar la solución otra vez

Cambia un dato de la prueba y predice la salida. Identifica qué variable conserva información, qué instrucción se repite y qué condición termina el proceso. Provoca un error lógico cambiando la posición de una inicialización y explica el resultado, sin conservar esa versión como solución.

[Tema y práctica](../../docs/09-sistemas-numeracion/README.md) · [Índice de ejercicios](../README.md)

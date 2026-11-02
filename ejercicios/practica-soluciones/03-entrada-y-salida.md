# Soluciones orientativas: Entrada, salida y documentación

Estas respuestas son propias y no correcciones del profesor. Úsalas después de intentar los ejercicios; puede haber más de una solución correcta.

## 1. Ficha de lectura

Construye un único Scanner. Lee páginas con nextInt, consume el resto de la línea con nextLine y lee el título con otro nextLine. Alternativamente lee ambas líneas y parsea la primera.

**Resultado de referencia:** Con 240 y La isla del tesoro se conserva el título completo.

## 2. Ticket con formato

Lee nombre con nextLine antes de las lecturas numéricas. Calcula double total y usa System.out.printf(Locale.US, "%s | %d | %.2f%n", nombre, cantidad, total). Formatear no modifica total.

**Resultado de referencia:** Con Carpeta, 3 y 2.4: Carpeta | 3 | 7.20.

## 3. Dorsal válido

Usa una bandera valida y while con hasNext. Si hasNextInt, lee y evalúa 10<=dorsal && dorsal<=99. Si no, muestra error de formato y consume con next. Sin ese consumo se inspeccionaría siempre hola.

**Resultado de referencia:** Para hola, 9, 42: se rechazan los dos primeros y se acepta 42.

[Volver a los enunciados](../../docs/03-entrada-y-salida/ejercicios.md) · [Índice de ejercicios](../README.md)

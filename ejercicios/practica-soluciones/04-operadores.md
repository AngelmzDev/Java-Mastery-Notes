# Soluciones orientativas: Operadores y expresiones

Estas respuestas son propias y no correcciones del profesor. Úsalas después de intentar los ejercicios; puede haber más de una solución correcta.

## 1. Cajas y sobrantes

La división entera cuenta grupos completos. El resto representa lo que no forma otro grupo. La capacidad debe ser positiva antes de dividir; no es válido usar cero como divisor.

**Resultado de referencia:** 47 → 7 cajas y 5 sobrantes; 48 → 8 y 0; 0 → 0 y 0.

## 2. Acceso al taller

(reserva && edad >= 16) || docente. && exige reserva y edad; || admite la acreditación por sí sola. La expresión no necesita comparar un booleano con true.

**Resultado de referencia:** false, true, true.

## 3. Ruleta de cinco números

10 + (int)(Math.random()*5). Antes del casting está en [0,5); después en 0..4. (int)Math.random() siempre es cero. Esta prueba comprueba el rango, no certifica la distribución estadística.

**Resultado de referencia:** Siempre debe cumplirse 10<=resultado && resultado<=14.

[Volver a los enunciados](../../docs/04-operadores/ejercicios.md) · [Índice de ejercicios](../README.md)

# Soluciones orientativas: Sistemas de numeración

Estas respuestas son propias y no correcciones del profesor. Úsalas después de intentar los ejercicios; puede haber más de una solución correcta.

## 1. Lectura posicional

10101₂=16+4+1=21. 45₈=4×8+5=37. 3C₁₆=3×16+12=60. En base2 no existe la cifra2 y en base8 no existe8.

**Resultado de referencia:** 21,37,60; los dos últimos son inválidos.

## 2. Código por restos

Base8: restos6,3,1 →136. Base16: restos14(E),5 →5E. Anteponer la cifra a la cadena invierte el orden de obtención. Usa do while o un caso especial para que cero no produzca vacío.

**Resultado de referencia:** 94 decimal →136 octal y5E hexadecimal; cero →0.

## 3. Traductor con validación

indexOf devuelve el valor0..15 o -1. Si devuelve -1, marca inválido y no muestres el parcial como resultado final. La longitud máxima de siete cifras evita exceder int positivo en esta variante.

**Resultado de referencia:** 2f →47; G1 es inválido; 0 →0.

[Volver a los enunciados](../../docs/09-sistemas-numeracion/ejercicios.md) · [Índice de ejercicios](../README.md)

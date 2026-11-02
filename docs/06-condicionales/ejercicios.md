# Práctica: Condicionales

Variantes didácticas propias: cambian los contextos y datos, conservando los objetivos de este bloque. El estado de corrección en clase no está confirmado.

**Cómo trabajar:** predice el resultado, escribe los pasos, resuelve, prueba los límites y explica una decisión del código. En las tareas de entorno o Git, documenta las acciones y lo que observas.

## 1. Tarifa de paquetes

**Objetivo:** Clasificar rangos excluyentes.

Un servicio admite pesos enteros de 1 a 10 kg. Hasta 2 kg cobra 4 euros; de 3 a 5, 7 euros; de 6 a 10, 11 euros. Rechaza el resto. Escribe la cadena if-else if sin repetir límites inferiores que ya se deducen.

**Comprueba:** Pesos 0,2,3,5,6,10,11 → error,4,7,7,11,11,error.

<details>
<summary>Pista</summary>

Valida el dominio antes de clasificar.

</details>

## 2. Sectores del edificio

**Objetivo:** Agrupar casos con switch.

Los códigos 1 y 2 corresponden a Sector Norte; el 3 a Sector Sur; el 0 a Recepción; el resto es error. Escribe una versión con switch clásico y otra con flechas. Explica qué sucedería al omitir break tras Sector Norte en la clásica.

**Comprueba:** 1 y 2 producen Norte; 3, Sur; 0, Recepción; 9, error.

<details>
<summary>Pista</summary>

En la versión clásica puedes agrupar dos etiquetas consecutivas.

</details>

## 3. Fecha del préstamo

**Objetivo:** Validar antes de calcular.

Lee día, mes y año del 1 al 9998. Valida la fecha y calcula el día siguiente sin librerías de fechas. Prueba febrero de 1900 y 2000 además de finales de mes. Usa calendario gregoriano como regla del ejercicio.

**Comprueba:** 28/2/1900 → 1/3/1900; 28/2/2000 → 29/2/2000; 31/4/2026 es inválida.

<details>
<summary>Pista</summary>

Determina días del mes antes de validar el día.

</details>

## Aplicaciones resueltas relacionadas

Consulta estas soluciones después de intentar tu variante:

- [Niveles de una prueba práctica](../../ejercicios/soluciones/04-niveles-de-una-prueba.md)
- [Siguiente día de una reserva](../../ejercicios/soluciones/05-siguiente-dia-de-reserva.md)
- [Letra de un rótulo](../../ejercicios/soluciones/06-letra-de-un-rotulo.md)
- [Ordenar tres tiempos](../../ejercicios/soluciones/08-orden-de-tres-tiempos.md)

[Soluciones de las tres actividades](../../ejercicios/practica-soluciones/06-condicionales.md) · [Volver al tema](README.md) · [Índice de ejercicios](../../ejercicios/README.md)

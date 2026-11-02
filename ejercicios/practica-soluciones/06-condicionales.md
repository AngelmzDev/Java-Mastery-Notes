# Soluciones orientativas: Condicionales

Estas respuestas son propias y no correcciones del profesor. Úsalas después de intentar los ejercicios; puede haber más de una solución correcta.

## 1. Tarifa de paquetes

Si peso<1 o peso>10, error; si peso<=2, 4; si peso<=5, 7; else, 11. El último else solo es seguro después de rechazar pesos inválidos.

**Resultado de referencia:** Pesos 0,2,3,5,6,10,11 → error,4,7,7,11,11,error.

## 2. Sectores del edificio

Usa case 1: case 2: imprimir Norte; break;. En flechas: case 1, 2 ->. Sin break en la clásica, se seguiría ejecutando desde el caso elegido hacia los siguientes; en flechas no hay esa caída.

**Resultado de referencia:** 1 y 2 producen Norte; 3, Sur; 0, Recepción; 9, error.

## 3. Fecha del préstamo

Bisiesto: divisible por 400 o por 4 y no por 100. Valida mes/año, fija díasMes, valida día y después incrementa. Si excede díasMes, reinicia a 1 y avanza mes; si mes pasa de 12, reinicia y avanza año. Consulta la solución aplicada 05 para el programa completo.

**Resultado de referencia:** 28/2/1900 → 1/3/1900; 28/2/2000 → 29/2/2000; 31/4/2026 es inválida.

[Volver a los enunciados](../../docs/06-condicionales/ejercicios.md) · [Índice de ejercicios](../README.md)

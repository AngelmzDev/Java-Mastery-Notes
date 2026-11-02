# Soluciones orientativas: Bucles

Estas respuestas son propias y no correcciones del profesor. Úsalas después de intentar los ejercicios; puede haber más de una solución correcta.

## 1. Serie de mantenimiento

Ascenso i=6; i<=21; i+=3. Descenso i=21; i>=6; i-=3. El cuerpo se ejecuta para cada término, no para el primer valor que hace falsa la condición.

**Resultado de referencia:** Seis vueltas en cada bucle.

## 2. Clave de laboratorio

Inicializa contador=0 y acertada=false; mientras !acertada y hasNextLine, lee, incrementa y compara. do while encaja si siempre hay al menos una entrada garantizada, pero necesita una comprobación extra para un EOF inicial.

**Resultado de referencia:** Con java, DAM, JAVA se aceptará en 3 intentos; un EOF inicial produce cero propuestas.

## 3. Triángulo y salto

Bucle exterior fila=1..4 e interior columna=1..fila. Para el filtro, imprime si n%4!=0. En la otra versión, continue cuando n%4==0 y deja la impresión después. El for conserva su actualización incluso al hacer continue.

**Resultado de referencia:** Filas con 1,2,3,4 estrellas; números 1,2,3,5,6,7,9,10,11.

[Volver a los enunciados](../../docs/07-bucles/ejercicios.md) · [Índice de ejercicios](../README.md)

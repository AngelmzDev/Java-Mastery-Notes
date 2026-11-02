# Soluciones orientativas: Lógica de programación

Estas respuestas son propias y no correcciones del profesor. Úsalas después de intentar los ejercicios; puede haber más de una solución correcta.

## 1. Tiempos de preparación

Antes: suma=0, validos=0, lentos=0. Dentro: leer; si válido sumar e incrementar validos; si además >15 incrementar lentos. Después de cuatro válidos: media=suma/validos. No uses el contador lentos como divisor de la media general.

**Resultado de referencia:** Con 10,20,15,35: media20, dos superiores a15. Si entre ellos aparece -2 se rechaza sin cambiar el resultado.

## 2. Ventas hasta el cierre

La primera lectura permite terminar de inmediato. Mientras dato!=0, procesa solo positivos y lee el siguiente dato en todas las ramas. Guarda suma en long y contador en int; divide con casting solo si contador>0.

**Resultado de referencia:** Total470, ventas2, media235.0. Con 0 primero: Sin ventas.

## 3. Candidata más baja

Inicializa el mínimo con la primera medida válida, no con un cero inventado. Actualízalo ante dato<minima. La bandera comienza false y pasa a true si aparece un negativo; no se devuelve a false por datos posteriores.

**Resultado de referencia:** Mínima -7 y hubo helada true. Con -3,5,8 sigue habiendo helada.

[Volver a los enunciados](../../docs/08-logica-programacion/ejercicios.md) · [Índice de ejercicios](../README.md)

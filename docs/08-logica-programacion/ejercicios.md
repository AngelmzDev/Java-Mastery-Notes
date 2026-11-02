# Práctica: Lógica de programación

Variantes didácticas propias: cambian los contextos y datos, conservando los objetivos de este bloque. El estado de corrección en clase no está confirmado.

**Cómo trabajar:** predice el resultado, escribe los pasos, resuelve, prueba los límites y explica una decisión del código. En las tareas de entorno o Git, documenta las acciones y lo que observas.

## 1. Tiempos de preparación

**Objetivo:** Diseñar entradas, proceso y salidas.

Registra cuatro tiempos no negativos; un negativo debe rechazarse sin consumir una lectura. Calcula media y cuántos superan 15 minutos. Entrega primero entradas/proceso/salidas y posición de cada variable, y después el programa.

**Comprueba:** Con 10,20,15,35: media20, dos superiores a15. Si entre ellos aparece -2 se rechaza sin cambiar el resultado.

<details>
<summary>Pista</summary>

Necesitas un contador de válidos y otro para la condición.

</details>

## 2. Ventas hasta el cierre

**Objetivo:** Usar centinela y evitar división por cero.

Lee ventas positivas en céntimos hasta recibir 0. Rechaza negativos. Muestra total, número de ventas y media decimal en céntimos; si no hay ventas, muestra Sin ventas en lugar de dividir. Haz una traza de 350,-8,120,0.

**Comprueba:** Total470, ventas2, media235.0. Con 0 primero: Sin ventas.

<details>
<summary>Pista</summary>

El centinela no forma parte de los datos.

</details>

## 3. Candidata más baja

**Objetivo:** Elegir una inicialización correcta.

Recibe tres temperaturas válidas y calcula la mínima y si hubo alguna bajo cero. Traza -4,-7,-2. Explica por qué mínima=0 y bandera=(dato<0) en cada vuelta no son estrategias generales correctas.

**Comprueba:** Mínima -7 y hubo helada true. Con -3,5,8 sigue habiendo helada.

<details>
<summary>Pista</summary>

Una bandera histórica no debe borrarse con el último dato.

</details>

## Aplicaciones resueltas relacionadas

Consulta estas soluciones después de intentar tu variante:

- [Temperaturas de un invernadero](../../ejercicios/soluciones/12-temperaturas-de-invernadero.md)
- [Recuento de notas y sueldos](../../ejercicios/soluciones/13-recuento-de-participantes.md)
- [Menú de consultas](../../ejercicios/soluciones/23-menu-de-consultas.md)

[Soluciones de las tres actividades](../../ejercicios/practica-soluciones/08-logica-programacion.md) · [Volver al tema](README.md) · [Índice de ejercicios](../../ejercicios/README.md)

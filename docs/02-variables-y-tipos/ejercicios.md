# Práctica: Variables, tipos y constantes

Variantes didácticas propias: cambian los contextos y datos, conservando los objetivos de este bloque. El estado de corrección en clase no está confirmado.

**Cómo trabajar:** predice el resultado, escribe los pasos, resuelve, prueba los límites y explica una decisión del código. En las tareas de entorno o Git, documenta las acciones y lo que observas.

## 1. Ficha de inventario

**Objetivo:** Elegir tipos y declarar constantes.

Representa nombre de una pieza, inicial de su categoría, unidades, peso aproximado y disponibilidad. Usa String, char, int, double y boolean. Declara final int CAPACIDAD = 40. Muestra los datos y explica cuál puede cambiar y cuál no puede reasignarse.

**Comprueba:** Una ficha con valores coherentes y una explicación de por qué nombre e inicial no tienen el mismo tipo.

<details>
<summary>Pista</summary>

Las comillas simples y dobles no son intercambiables.

</details>

## 2. Dos medias parecidas

**Objetivo:** Predecir división y casting.

Sin ejecutar, calcula qué guardan double a = 11 / 4; double b = 11 / 4.0; y double c = (double) (11 / 4);. Luego cambia solo un operando en la primera expresión para obtener 2.75. Explica la pérdida de información.

**Comprueba:** a=2.0, b=2.75, c=2.0.

<details>
<summary>Pista</summary>

El tipo de la variable destino no decide el tipo de la división ya realizada.

</details>

## 3. Etiqueta numérica

**Objetivo:** Diferenciar texto, parseo y valor.

Parte del texto " 28 ". Elimina sus espacios exteriores, conviértelo a int, súmale 7 y vuelve a convertir el resultado a String para formar la etiqueta Caja-35. Identifica dónde se usa parseo y dónde conversión a texto; explica qué pasaría con "veintiocho".

**Comprueba:** Caja-35; el texto no numérico causa NumberFormatException al parsear.

<details>
<summary>Pista</summary>

Usa Integer.parseInt y String.valueOf en direcciones opuestas.

</details>

[Soluciones de las tres actividades](../../ejercicios/practica-soluciones/02-variables-y-tipos.md) · [Volver al tema](README.md) · [Índice de ejercicios](../../ejercicios/README.md)

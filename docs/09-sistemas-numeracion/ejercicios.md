# Práctica: Sistemas de numeración

Variantes didácticas propias: cambian los contextos y datos, conservando los objetivos de este bloque. El estado de corrección en clase no está confirmado.

**Cómo trabajar:** predice el resultado, escribe los pasos, resuelve, prueba los límites y explica una decisión del código. En las tareas de entorno o Git, documenta las acciones y lo que observas.

## 1. Lectura posicional

**Objetivo:** Comprender cifras y potencias.

Convierte a decimal 10101 en base2, 45 en base8 y 3C en base16, descomponiendo cada posición. Decide después si 102 en base2 y 78 en base8 son válidos y explica por qué.

**Comprueba:** 21,37,60; los dos últimos son inválidos.

<details>
<summary>Pista</summary>

Toda cifra debe ser menor que la base.

</details>

## 2. Código por restos

**Objetivo:** Construir el resultado en orden correcto.

Convierte 94 decimal a octal y hexadecimal con divisiones sucesivas. Programa ambos usando el mismo algoritmo y una variable base. Traza cociente y resto de cada división; incluye una prueba con cero.

**Comprueba:** 94 decimal →136 octal y5E hexadecimal; cero →0.

<details>
<summary>Pista</summary>

Los restos salen de derecha a izquierda.

</details>

## 3. Traductor con validación

**Objetivo:** Comprobar antes de acumular.

Lee un texto de hasta siete cifras de base16 y conviértelo a decimal recorriendo de izquierda a derecha. Admite minúsculas, rechaza prefijos, signos y caracteres ajenos. No uses Integer.parseInt(texto,16) como solución: implementa valor=valor*16+cifra.

**Comprueba:** 2f →47; G1 es inválido; 0 →0.

<details>
<summary>Pista</summary>

Busca cada carácter en 0123456789ABCDEF después de normalizar.

</details>

## Aplicaciones resueltas relacionadas

Consulta estas soluciones después de intentar tu variante:

- [Conversor de bases](../../ejercicios/soluciones/17-conversor-de-bases.md)

[Soluciones de las tres actividades](../../ejercicios/practica-soluciones/09-sistemas-numeracion.md) · [Volver al tema](README.md) · [Índice de ejercicios](../../ejercicios/README.md)

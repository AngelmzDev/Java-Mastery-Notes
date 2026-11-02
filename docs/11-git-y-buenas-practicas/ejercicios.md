# Práctica: Git y buenas prácticas

Variantes didácticas propias: cambian los contextos y datos, conservando los objetivos de este bloque. El estado de corrección en clase no está confirmado.

**Cómo trabajar:** predice el resultado, escribe los pasos, resuelve, prueba los límites y explica una decisión del código. En las tareas de entorno o Git, documenta las acciones y lo que observas.

## 1. Cuatro estados

**Objetivo:** Distinguir edición, preparación, commit y remoto.

En una copia de prácticas, modifica una frase de un Markdown, guarda, consulta status y diff, prepara solo ese archivo y consulta diff --cached. Haz un commit local con mensaje descriptivo. Explica en qué momento lo vería otra persona en GitHub; no es necesario hacer push para completar la práctica.

**Comprueba:** El commit es local hasta publicarlo con push en un remoto autorizado.

<details>
<summary>Pista</summary>

Guardar un archivo no es lo mismo que prepararlo.

</details>

## 2. Nombres que explican

**Objetivo:** Refactorizar conservando comportamiento.

Toma un ejercicio con variables s, c y t que significan suma de tiempos, cantidad de lecturas y tiempo actual. Renómbralas con la herramienta Rename de IntelliJ, aplica formato y añade un comentario que explique por qué la suma va fuera del bucle. Comprueba las mismas entradas antes y después.

**Comprueba:** Mismo resultado antes y después; nombres descriptivos y ámbitos claros.

<details>
<summary>Pista</summary>

Una refactorización conserva comportamiento.

</details>

## 3. Auditoría de carpeta

**Objetivo:** Evitar archivos innecesarios y repositorios anidados.

Dibuja una estructura con src, docs, ejercicios, out y .idea. Decide qué publicar y qué ignorar en una copia de prácticas. Explica por qué ejecutar git init dentro de ejercicios puede causar confusión y por qué un archivo ya seguido no desaparece de Git al añadirlo a .gitignore.

**Comprueba:** Se publican fuentes y documentación; normalmente se ignoran compilados y ajustes locales.

<details>
<summary>Pista</summary>

Un repositorio debe tener un límite claro.

</details>

[Soluciones de las tres actividades](../../ejercicios/practica-soluciones/11-git-y-buenas-practicas.md) · [Volver al tema](README.md) · [Índice de ejercicios](../../ejercicios/README.md)

# Práctica: Entorno y fundamentos

Variantes didácticas propias: cambian los contextos y datos, conservando los objetivos de este bloque. El estado de corrección en clase no está confirmado.

**Cómo trabajar:** predice el resultado, escribe los pasos, resuelve, prueba los límites y explica una decisión del código. En las tareas de entorno o Git, documenta las acciones y lo que observas.

## 1. Mapa del proyecto

**Objetivo:** Identificar JDK, JVM, fuentes y clases.

Crea en IntelliJ un proyecto PracticaBiblioteca, paquete biblioteca y clase Presentacion con main. Debe imprimir Bienvenido a la biblioteca. Anota qué contiene src, qué guarda .idea y dónde aparece el .class al compilar con -d out. No uses Scanner todavía.

**Comprueba:** La consola muestra una línea: Bienvenido a la biblioteca. La clase completa es biblioteca.Presentacion.

<details>
<summary>Pista</summary>

Separa la ubicación del fuente del nombre completo de la clase que se ejecuta.

</details>

## 2. Orden de llamadas

**Objetivo:** Seguir el flujo entre métodos.

Diseña dos métodos static void: abrir() imprime Abierto y cerrar() imprime Cerrado. main llama abrir(), imprime Preparando y llama cerrar(). Dibuja la secuencia de ejecución y después compruébala con Step Into. Explica si definir cerrar antes de abrir cambia el orden de salida.

**Comprueba:** Abierto, Preparando y Cerrado, en tres líneas, en ese orden.

<details>
<summary>Pista</summary>

El orden de declaración de métodos no es su orden de ejecución.

</details>

## 3. Detective de errores

**Objetivo:** Distinguir compilación, ejecución y lógica.

Clasifica estos problemas y describe cómo localizar cada uno: falta un punto y coma; charAt(8) sobre sol; un programa que debería sumar 2 y 3 imprime 23 porque concatena texto. Corrige los tres en copias separadas y conserva la salida esperada.

**Comprueba:** Compilación; excepción por índice; error lógico. La suma corregida muestra 5.

<details>
<summary>Pista</summary>

No todos los errores aparecen al compilar.

</details>

[Soluciones de las tres actividades](../../ejercicios/practica-soluciones/01-fundamentos.md) · [Volver al tema](README.md) · [Índice de ejercicios](../../ejercicios/README.md)

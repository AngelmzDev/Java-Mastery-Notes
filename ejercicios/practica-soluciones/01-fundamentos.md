# Soluciones orientativas: Entorno y fundamentos

Estas respuestas son propias y no correcciones del profesor. Úsalas después de intentar los ejercicios; puede haber más de una solución correcta.

## 1. Mapa del proyecto

src/biblioteca/Presentacion.java declara package biblioteca. El JDK compila; la JVM ejecuta el bytecode. .idea contiene ajustes del IDE. Con -d out, la clase queda en out/biblioteca/Presentacion.class.

**Resultado de referencia:** La consola muestra una línea: Bienvenido a la biblioteca. La clase completa es biblioteca.Presentacion.

## 2. Orden de llamadas

main entra en abrir, vuelve y muestra Preparando, entra en cerrar y termina. Cambiar el orden de las definiciones no cambia las llamadas. Un breakpoint se detiene antes de la instrucción marcada.

**Resultado de referencia:** Abierto, Preparando y Cerrado, en tres líneas, en ese orden.

## 3. Detective de errores

Añadir el punto y coma corrige sintaxis; sol solo admite índices 0..2, por lo que hay que revisar qué carácter se pretendía leer; para la suma se evalúa 2+3 antes de concatenar, por ejemplo usando paréntesis.

**Resultado de referencia:** Compilación; excepción por índice; error lógico. La suma corregida muestra 5.

[Volver a los enunciados](../../docs/01-fundamentos/ejercicios.md) · [Índice de ejercicios](../README.md)

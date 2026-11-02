# Preparar Java e IntelliJ IDEA

> Apunte didáctico propio, preparado para el alcance básico indicado. No se atribuye a una corrección del profesor.

## Qué ejecuta realmente un programa

Java es un lenguaje con tipos: antes de operar con un dato, el compilador necesita conocer qué clase de valor puede contener. Escribimos archivos `.java`. El compilador `javac` comprueba el código y genera bytecode en archivos `.class`; la JVM (máquina virtual de Java) carga y ejecuta ese bytecode. Un programa puede compilar correctamente y aun así calcular algo incorrecto.

El JDK es el conjunto de herramientas para desarrollar: incluye compilador y un entorno capaz de ejecutar Java. La JVM es una parte de ese entorno; no es el editor ni traduce nuestro enunciado a un algoritmo. IntelliJ IDEA es el IDE: ayuda a editar, compilar, ejecutar y depurar, pero necesita un JDK configurado.

## Crear el proyecto de prácticas

1. En IntelliJ, abre **New Project**, elige **Java** y un nombre como `PracticaDAM`.
2. Selecciona **JDK 23**, la versión indicada para clase. Si está instalado, usa **Add JDK from Disk**; en otro caso, selecciona la descarga de esa versión disponible en el IDE. Comprueba que la carpeta elegida contiene `bin/javac`.
3. Para empezar selecciona **IntelliJ** como sistema de construcción. Crea una clase Java normal; no uses archivos compactos ni funciones experimentales.
4. En `src`, crea el paquete `aprendizaje` y dentro la clase `Saludo`.
5. Comprueba en **Project Structure** que el SDK y el nivel del lenguaje corresponden a Java 23 sin preview. Los nombres exactos de los menús pueden variar entre versiones.
6. Ejecuta el método `main` con el triángulo junto a su declaración. Lee la salida en la consola, no en el editor.

```text
PracticaDAM/
├── .idea/                 configuración del IDE
└── src/                   código fuente
    └── aprendizaje/       paquete
        └── Saludo.java    clase pública Saludo
```

Un **proyecto** agrupa el trabajo en el IDE. Puede contener uno o varios **módulos de IntelliJ**, cada uno con sus fuentes y dependencias. Un paquete organiza clases por nombre; no es un proyecto. Un módulo del IDE tampoco debe confundirse con el sistema de módulos de Java (`module-info.java`), que no necesitamos aquí.

## Construir sin depender del IDE

Guarda el ejemplo de [estructura y métodos](estructura-y-metodos.md) en `src/aprendizaje/Saludo.java`. Desde la raíz del proyecto:

```shell
java -version
javac -version
javac -encoding UTF-8 -d out src/aprendizaje/Saludo.java
java -cp out aprendizaje.Saludo
```

`-d out` indica dónde guardar los `.class`; `-cp out` permite encontrarlos. Se ejecuta el nombre completo de la clase, sin `.java`. Si `java` no se encuentra, revisa la instalación y el `PATH`; si la JVM es más antigua que el bytecode, alinea las versiones.

Maven y Gradle son herramientas de construcción que describen tareas y dependencias en archivos de configuración. No son lenguajes de programación ni sustituyen al JDK. Podemos conocer su propósito sin incorporarlos a estos ejercicios.

## Comprueba que lo entiendes

Crea otro proyecto con paquete `repaso` y clase `Presentacion`. Antes de ejecutar, predice dónde estarán el fuente y el archivo compilado. Cambia únicamente el mensaje y explica por qué no necesitas cambiar el paquete.

---

[Índice del tema](README.md) · [Ejercicios para practicar](ejercicios.md) · [Índice general](../../README.md)

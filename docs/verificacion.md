# Verificar los apuntes y programas

## Qué se comprueba

El script `scripts/verificar.py` revisa los enlaces locales de la nueva ruta de aprendizaje, los delimitadores de bloques de código y la compilación de todos sus fragmentos Java y de los 24 programas de ejercicios. Después ejecuta los casos de referencia de `ejercicios/pruebas.json` y casos adicionales para ordenación, capacidad de agenda y sorteos.

Los fragmentos de instrucciones se colocan dentro de un `main` temporal; los fragmentos de método se colocan como miembros de una clase. Las clases completas se mantienen, aisladas en paquetes de comprobación. Esto comprueba sintaxis y tipos sin exigir al principiante que pueda ejecutar un fragmento sin su contexto.

Los programas de ejercicios sí son clases completas y se ejecutan con sus entradas de referencia. Las tiradas aleatorias se comprueban por rangos y relaciones; no se exige una secuencia concreta ni se afirma demostrar estadísticamente el azar. Los bloques de errores intencionados se muestran como texto, no como Java válido.

## Ejecutar la comprobación

Requiere Python 3.10 o posterior y un JDK que admita compilar para Java 23. Desde la raíz del repositorio:

```shell
python scripts/verificar.py
```

Si el JDK no está en el PATH, indica su carpeta (la que contiene `bin`):

```shell
python scripts/verificar.py --jdk "C:/ruta/al/jdk-23"
```

El script trabaja con archivos temporales y no sobrescribe las fuentes. Si algo falla, muestra el enlace o la entrada que lo provocó. Una comprobación automática no sustituye a explicar el razonamiento ni confirma qué se corrigió en clase.

## Compatibilidad y límites

La versión de clase de referencia es JDK 23 sin preview. En la preparación se utiliza el JDK disponible en el entorno y la opción `--release 23`, que comprueba el lenguaje y las API de ese destino. Ejecutar bytecode así compilado en una JVM posterior no equivale a una prueba nativa con una JVM 23; la salida del script identifica las versiones usadas.

Las entradas numéricas de las soluciones presuponen formato correcto, salvo validaciones explícitas en el enunciado. Se prueban rangos y casos límite de cada aplicación; no se pretende aceptar cualquier secuencia de texto o entrada truncada en todos los programas.

## Resultado de la revisión de publicación

- 91 documentos Markdown de la ruta nueva y 522 enlaces locales comprobados.
- 44 fragmentos Java y 24 programas completos compilados con `javac 27 --release 23`.
- 131 ejecuciones de referencia completadas, incluidas fronteras de notas, fechas bisiestas, temperaturas negativas, ausencia de datos, cifras inválidas, factoriales, agenda llena y propiedades de los sorteos.
- Ejecución en OpenJDK 27; no se ha realizado una ejecución nativa con JVM 23.

La comprobación incluye una revisión de coherencia entre enunciados, entradas y resultados esperados. Los PDF e imágenes existentes no forman parte de esta compilación ni se han modificado.

[Índice principal](../README.md) · [Índice de ejercicios](../ejercicios/README.md)

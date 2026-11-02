# Soluciones orientativas: Git y buenas prácticas

Estas respuestas son propias y no correcciones del profesor. Úsalas después de intentar los ejercicios; puede haber más de una solución correcta.

## 1. Cuatro estados

Guardar cambia el árbol de trabajo; add copia el contenido al área de preparación; commit crea una versión local; push transmite commits. Si se edita después de add hay que preparar otra vez esa edición para incluirla.

**Resultado de referencia:** El commit es local hasta publicarlo con push en un remoto autorizado.

## 2. Nombres que explican

Nombres posibles: sumaTiempos, lecturasValidas y tiempoActual. La suma se inicializa antes para conservar parciales. El formato alinea bloques pero no mueve la lógica; la herramienta de renombrado evita sustituciones accidentales en otros nombres.

**Resultado de referencia:** Mismo resultado antes y después; nombres descriptivos y ámbitos claros.

## 3. Auditoría de carpeta

Publica .java y .md; ignora out/, *.class y ajustes locales según la política del proyecto. Un .git dentro de ejercicios crea otra historia. .gitignore afecta archivos no seguidos; no borra versiones existentes ni secretos que ya se hayan publicado.

**Resultado de referencia:** Se publican fuentes y documentación; normalmente se ignoran compilados y ajustes locales.

[Volver a los enunciados](../../docs/11-git-y-buenas-practicas/ejercicios.md) · [Índice de ejercicios](../README.md)

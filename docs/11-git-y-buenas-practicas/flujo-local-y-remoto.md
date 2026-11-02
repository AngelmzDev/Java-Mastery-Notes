# Git local, GitHub y publicación de cambios

> Apunte didáctico propio, preparado para el alcance básico indicado. No se atribuye a una corrección del profesor.

## Dos lugares distintos

Git guarda versiones en un repositorio, normalmente identificado por una carpeta oculta `.git`. GitHub aloja una copia remota y permite compartirla. Guardar un archivo en el editor no crea un commit; hacer un commit no lo sube; `push` publica los commits locales en el remoto correspondiente.

Para empezar con un repositorio ya existente, clónalo en una carpeta donde todavía no exista otra copia:

```shell
git clone https://github.com/AngelmzDev/Java-Mastery-Notes.git
cd Java-Mastery-Notes
git status
git remote -v
```

`clone` crea la copia y configura normalmente el remoto `origin`. No ejecutes luego `git init` dentro de cada carpeta de ejercicios: crearías repositorios anidados que complican lo que se guarda. Comprueba dónde estás antes de cada comando.

## Ciclo de una modificación

```shell
git pull --ff-only
git status
git diff
git add docs/02-variables-y-tipos/conversiones-y-precision.md
git diff --cached
git commit -m "Aclara la diferencia entre casting y parseo"
git push
git status
```

1. `pull --ff-only` trae avances sin crear una fusión automática si las historias se separaron. Con cambios locales o divergencia puede fallar: lee el mensaje y no fuerces.
2. `status` indica qué cambió y qué está preparado.
3. `diff` revisa diferencias no preparadas.
4. `add` prepara el contenido actual de un archivo concreto; no publica nada.
5. `diff --cached` permite revisar lo que entrará al commit.
6. `commit` crea una versión local con un mensaje descriptivo.
7. `push` necesita autorización y un destino configurado; no concede permisos por sí mismo.

Si editas después de `add`, la nueva edición no entra automáticamente: vuelve a prepararla. No uses `push --force` para arreglar un rechazo por cambios remotos; primero entiende qué cambió. Un `pull` puede pedir resolver conflictos: no borres los cambios de otra persona sin revisarlos.

## Qué no debe versionarse

Un `.gitignore` puede excluir `.class`, `out/`, `build/` y configuraciones locales. No excluyas los `.java` o Markdown que quieres compartir. Ignorar un archivo ya seguido por Git no lo retira del historial automáticamente. Nunca guardes contraseñas o tokens.

En este repositorio existe una colisión histórica: `Tipos de datos.png` y `tipos de datos.png` solo se diferencian en mayúsculas. En Windows pueden representar una única ruta local. La nueva documentación no modifica esas imágenes; prepara rutas concretas, evitando `git add .` si aparecen diferencias ajenas al ejercicio.

## Practica

En una copia de prácticas, cambia una frase, revisa `diff`, prepara solo ese archivo y comprueba `diff --cached`. Describe la diferencia entre archivo guardado, cambio preparado, commit local y commit remoto. No necesitas publicar nada para entender esos cuatro estados.

---

[Índice del tema](README.md) · [Ejercicios para practicar](ejercicios.md) · [Índice general](../../README.md)

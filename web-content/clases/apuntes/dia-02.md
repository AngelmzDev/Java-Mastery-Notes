# Apuntes completos — Día 2

> **Procedencia:** apuntes reconstruidos a partir de las clases, aportados al proyecto. Se conservan las advertencias de fidelidad y las ampliaciones que ya estaban etiquetadas. Se han anonimizado identificadores personales cuando procede.

[Volver a la ficha de estudio](../dia-02.md)

## Apuntes completos reconstruidos a partir de las tres transcripciones

> **Criterio de estos apuntes.** Se ha conservado el contenido docente de la clase y se han eliminado repeticiones, interrupciones, conversaciones laterales y preguntas que solo repetían algo ya explicado. Se han normalizado errores evidentes de transcripción automática en nombres como **IntelliJ, Git, GitHub, JDK, Maven, Gradle, String, Object, NullPointerException, ArithmeticException, `main`, `printf`, etc.** No se ha añadido teoría externa para rellenar huecos. Cuando la transcripción pierde un símbolo o una parte concreta, se indica expresamente.

---

# 1. Contexto de trabajo del curso

La clase parte de un repositorio de GitHub que ya se había creado y clonado en local. La idea general del profesor es utilizar Git de forma continua durante el curso para ir practicando mientras se aprende programación.

## 1.1. Organización recomendada del repositorio de clase

El profesor plantea organizar el repositorio por temas y, dentro de cada tema, por proyectos. Por ejemplo:

```text
Repositorio de clase/
├── Tema 1/
│   ├── Inicio/
│   ├── Variables/
│   └── Comentarios/
├── Tema 2/
│   ├── Componentes/
│   ├── Operadores logicos/
│   └── Operadores aritmeticos/
└── ...
```

No es una estructura obligatoria para los apuntes personales, pero se recomienda utilizar un repositorio y subir cambios con frecuencia para practicar Git.

## 1.2. Repositorio específico para prácticas

Para las prácticas evaluables habrá que utilizar un repositorio específico. La estructura explicada es similar a:

```text
practicas_iniciales/
├── practica_formula_1/
├── practica_blackjack/
└── ...
```

Requisitos indicados en clase:

- El repositorio de prácticas debe ser **privado**.
- Hay que añadir al profesor como **colaborador** desde la configuración del repositorio.
- Utiliza el nombre de usuario facilitado por el profesor en los canales de clase.
- Para cada entrega se pedirá:
  - el proyecto completo comprimido en `.zip`;
  - la URL del repositorio.

Para cambiar la visibilidad del repositorio se mencionó la ruta de GitHub **Settings -> Change visibility**. Para añadir un colaborador se indicó **Settings -> Collaborators -> Add people**.

## 1.3. Recursos disponibles en la asignatura

El profesor dispone de:

- repositorio con los códigos de la asignatura;
- contenido/temario en Notion;
- material accesible desde Classroom.

Se comentó que en los exámenes se podrá consultar el **Notion de la asignatura**, pero no los códigos personales del alumno. Por eso interesa entender la estructura y los conceptos, no depender de copiar un programa ya hecho.

---

# 2. Tema 2: estructura de un programa informático

El objetivo del tema es empezar a entender:

- cómo se crea un proyecto Java real;
- qué elementos aparecen dentro de un proyecto;
- dónde se escribe el código;
- qué son las clases, variables y métodos;
- cuál es el punto de entrada de un programa;
- cómo se compila y se ejecuta;
- cómo interpretar errores;
- cómo se representan y utilizan distintos tipos de datos.

---

# 3. Creación de un proyecto Java en IntelliJ IDEA

El IDE utilizado en clase es **IntelliJ IDEA**. El profesor lo elige porque considera que resulta sencillo para trabajar con Java y Kotlin durante el aprendizaje, aunque deja libertad para usar otros IDE.

Al crear un proyecto nuevo se selecciona **Java** como lenguaje.

## 3.1. Nombre y ubicación del proyecto

El ejemplo utilizado en clase se llama **Componentes**.

La ubicación es especialmente importante si el proyecto va a formar parte de un repositorio Git que ya está clonado. El proyecto debe crearse **dentro de la carpeta correcta del repositorio local**.

Ejemplo conceptual:

```text
Repositorio clonado/
└── Tema 2/
    └── Componentes/
```

IntelliJ puede crear automáticamente la carpeta correspondiente al nombre del proyecto según la versión y la pantalla utilizada. El profesor remarca que hay que fijarse en la ruta final y no asumir cómo va a comportarse el IDE.

---

# 4. Opción "Create Git Repository": cuándo marcarla y cuándo no

Este fue uno de los avisos más importantes de la clase.

## 4.1. Caso: ya existe un repositorio clonado

Si se ha hecho previamente:

1. crear repositorio en GitHub;
2. clonar el repositorio en el equipo;
3. crear dentro de ese repositorio una carpeta/proyecto nuevo;

**NO se debe marcar `Create Git Repository` en el proyecto interior.**

El repositorio principal ya tiene su propio `.git`, que es el que relaciona el repositorio local con su configuración Git y con el remoto correspondiente.

Si se crea otro repositorio Git dentro de una subcarpeta, se genera un segundo `.git` y se produce una separación entre ambos controles de versiones.

Esquema del problema:

```text
Repositorio principal clonado/
├── .git/                 <- Git del repositorio principal
└── Tema 2/
    └── Componentes/
        └── .git/         <- segundo Git creado por error
```

La consecuencia explicada es que los cambios del proyecto interior pueden no aparecer cuando se trabaja desde el repositorio exterior. Desde el punto de vista de Git son dos repositorios diferentes.

Esto puede provocar situaciones como:

- no ver cambios que se acaban de realizar;
- intentar hacer `commit` desde el repositorio equivocado;
- no poder hacer `push` desde el repositorio interior porque no está enlazado con ningún remoto;
- confusión al utilizar GitHub Desktop o las herramientas Git del IDE.

## 4.2. Cuándo sí puede interesar crear un repositorio Git local

Puede tener sentido marcar `Create Git Repository` cuando:

- se está creando un proyecto completamente independiente en local;
- no está dentro de otro repositorio Git;
- se quiere utilizar control de versiones aunque todavía no exista un repositorio remoto.

En ese caso se pueden registrar cambios mediante commits locales. Sin un remoto configurado no se podrá hacer `push` a GitHub.

## 4.3. Regla práctica de la clase

> **Si estás creando un proyecto dentro de un repositorio que ya has clonado, no crees otro repositorio Git dentro.**

Flujo recomendado por el profesor cuando Git da problemas:

1. Crear el repositorio vacío en GitHub.
2. Clonarlo en local.
3. Guardar/recordar la ruta del repositorio clonado.
4. Crear el proyecto de IntelliJ **en esa ruta**.
5. Crear el proyecto **sin `Create Git Repository`**.
6. Si ya existen códigos, copiarlos después dentro de `src`.

---

# 5. Build System: IntelliJ frente a Maven/Gradle

Al crear el proyecto aparece el apartado **Build System**.

La clase diferencia, a nivel introductorio, dos formas de trabajar:

- proyecto gestionado directamente por IntelliJ;
- proyecto gestionado mediante herramientas como **Maven** o **Gradle**.

## 5.1. Proyecto con Build System IntelliJ

Es el sistema que se utilizará inicialmente porque resulta más sencillo para empezar.

Las configuraciones y librerías adicionales se gestionan de forma más local dentro del proyecto/IDE.

Si se necesita una librería externa, por ejemplo una librería hipotética para conectarse a un servicio, se puede descargar un archivo `.jar` e incorporarlo al proyecto.

Problema señalado: esa dependencia puede quedar asociada a una **ruta local** del ordenador.

Ejemplo conceptual:

```text
C:\Usuarios\Alex\Proyectos\Componentes\librerias\libreria.jar
```

Si el proyecto se pasa a otra persona y esa ruta no existe en su equipo, tendrá que descargar la librería y configurar de nuevo la referencia.

## 5.2. Maven y Gradle

Con Maven o Gradle las dependencias se describen en ficheros de configuración.

En la explicación se mencionan:

- `pom.xml` para Maven;
- un fichero `build...` para Gradle.

En esos ficheros se especifican las dependencias y configuraciones generales del proyecto. Después, al actualizar el proyecto, las dependencias se descargan automáticamente.

Ventaja principal explicada:

> La configuración deja de depender de una ruta concreta del ordenador de una persona y queda centralizada en un fichero del proyecto.

Según la planificación comentada, durante los primeros temas se trabajará con el Build System de IntelliJ y más adelante se empezará a utilizar Maven/Gradle.

---

# 6. JDK del proyecto

Al crear el proyecto hay que seleccionar un **JDK**.

Durante la clase se decide trabajar principalmente con **JDK 23** como versión didáctica. La razón dada es que versiones posteriores simplifican determinadas estructuras y el profesor quiere que primero se escriban de forma explícita elementos como la clase y la firma completa de `main`, para comprender qué significa cada parte.

La idea didáctica es:

> primero aprender la forma explícita y comprender los componentes; después utilizar las simplificaciones disponibles en versiones posteriores.

También se comenta que código escrito de la forma tradicional seguirá siendo válido aunque el IDE pueda señalar algunas partes como redundantes en versiones más nuevas.

## 6.1. `Add sample code`

El profesor no marca **Add sample code** porque no quiere que IntelliJ genere automáticamente una clase con código ya escrito. El objetivo es construir el programa manualmente para entender cada elemento.

## 6.2. Solucionar un JDK no detectado

Puede ocurrir al descargar un proyecto configurado con un JDK que no está instalado en el equipo.

Ruta explicada:

```text
File -> Project Structure -> Project
```

Desde ahí se puede seleccionar el SDK/JDK disponible.

También se menciona **Language Level**, que inicialmente debería mantenerse siguiendo el SDK por defecto del proyecto.

---

# 7. Módulos

En los ajustes avanzados del proyecto aparece el concepto de **módulo**.

Definición de trabajo utilizada en clase:

> Un módulo puede entenderse como un subproyecto dentro del proyecto.

Un proyecto puede contener uno o varios módulos. En los ejemplos iniciales normalmente habrá uno.

En:

```text
File -> Project Structure -> Modules
```

se puede consultar la configuración de los módulos y las carpetas asociadas.

---

# 8. Abrir correctamente un proyecto en IntelliJ

Para abrir un proyecto se debe seleccionar **la carpeta raíz del proyecto**, no directamente la carpeta donde se encuentra el código.

La carpeta raíz contiene los ficheros de configuración que permiten a IntelliJ reconocerla como proyecto.

El profesor insiste en que no se debe entrar hasta `src` para abrir el proyecto; hay que abrir la carpeta que representa al proyecto completo.

## 8.1. Abrir varios proyectos

Desde `File -> Open` o `Recent Projects` IntelliJ puede preguntar:

- **This Window**: sustituye el proyecto que está abierto en esa ventana.
- **New Window**: abre el nuevo proyecto en otra ventana/instancia.

Recomendación del profesor: durante el aprendizaje es preferible tener **un proyecto por ventana** y evitar mezclar visualmente muchos proyectos y ficheros.

---

# 9. Vista Project y estructura del proyecto

La vista principal que se utilizará es **Project**.

Otras vistas pueden mostrar solo determinados tipos de elementos, como pruebas, pero durante estas primeras clases se trabajará casi siempre desde Project.

Dentro de un proyecto IntelliJ aparecen varios elementos importantes.

## 9.1. Carpeta `.idea`

Es una carpeta de configuración de IntelliJ.

El profesor la trata como un elemento que no interesa manipular durante estas primeras clases. Se explica que muchos elementos cuyo nombre comienza por punto son ocultos/configuraciones internas.

## 9.2. `.gitignore`

El fichero `.gitignore` define qué ficheros o rutas **no deben subirse al repositorio Git**.

Idea esencial:

> Git puede seguir el proyecto en general, pero las rutas incluidas en `.gitignore` se excluyen.

Se mencionan como ejemplo carpetas generadas por IDE, sistemas operativos o compilación.

## 9.3. Rutas absolutas y relativas

Se explica la diferencia:

**Ruta absoluta:** describe la ubicación completa desde el inicio del sistema de ficheros.

Ejemplo conceptual en Windows:

```text
C:\Users\usuario\Documents\proyecto\src\Ejemplo.java
```

**Ruta relativa:** se expresa con respecto a la ubicación actual.

Ejemplo:

```text
./src/Ejemplo.java
```

Las rutas que se utilizan habitualmente en configuraciones como `.gitignore` pueden ser relativas al proyecto.

---

# 10. External Libraries

La zona **External Libraries** contiene las librerías disponibles para el proyecto, incluido el JDK seleccionado.

El profesor muestra que dentro del JDK existen muchos paquetes, clases, interfaces y métodos ya implementados.

Idea importante:

> Programar no significa escribir desde cero todo lo que se utiliza. Java proporciona una gran cantidad de funcionalidad que ya existe y que se invoca cuando es necesaria.

También se explica que:

- no es necesario memorizar todos los métodos existentes;
- algunos métodos recurrentes se terminan aprendiendo por uso;
- si hace falta funcionalidad adicional, se incorporan librerías externas.

Con Build System IntelliJ se pueden incorporar localmente; con Maven/Gradle se pueden declarar en el fichero de dependencias y descargarse automáticamente.

---

# 11. Carpeta `src`: Source Folder

El código fuente se escribirá dentro de **`src`**.

IntelliJ suele mostrarla en azul porque está marcada como **Source Folder**.

En:

```text
File -> Project Structure -> Modules
```

se puede indicar el uso de una carpeta, por ejemplo:

- Source;
- Test;
- Resources;
- Test Resources.

Si `src` no aparece correctamente configurada como carpeta de código fuente, se puede seleccionar y marcar como **Source**.

En proyectos Maven pueden aparecer de forma más explícita otras carpetas destinadas a recursos y pruebas.

---

# 12. Herramientas principales de IntelliJ vistas en clase

## 12.1. Integración con Git

Desde IntelliJ se pueden realizar muchas acciones que también se harían desde GitHub Desktop:

- consultar cambios;
- añadir cambios;
- hacer commits;
- hacer push;
- actualizar;
- trabajar con ramas.

La interfaz también utiliza colores para indicar estados de los ficheros dentro del control de versiones. Un fichero en rojo, verde, naranja, etc. no significa necesariamente que el código esté mal: puede representar su estado respecto a Git.

## 12.2. Run y Debug

**Run** ejecuta el programa normalmente.

**Debug** permite ejecutar el programa deteniéndolo en puntos concretos para observar qué ocurre paso a paso o línea a línea. Servirá para investigar por qué una variable toma un valor determinado o en qué punto aparece un comportamiento incorrecto.

## 12.3. IA de JetBrains

El profesor recomienda desactivar temporalmente la asistencia de IA/autocompletado generativo mientras se aprende a programar.

Motivo didáctico expuesto:

- si la herramienta completa continuamente el código, se puede obtener un resultado sin aprender a construirlo;
- en examen deberá estar desactivada;
- una IA puede utilizarse como ayuda, pero no debería sustituir la comprensión del código.

## 12.4. Trabajo compartido

IntelliJ permite compartir una sesión de trabajo para que varias personas editen. El profesor lo considera útil en determinados contextos docentes, pero advierte del riesgo de que muchas personas modifiquen simultáneamente el mismo fichero.

En un equipo profesional se intenta organizar el trabajo para evitar que varias personas modifiquen exactamente la misma parte al mismo tiempo sin coordinación.

---

# 13. Git: comandos básicos recordados durante la clase

Al final de la primera parte se repasan los comandos básicos utilizados desde consola:

```bash
git status
```

Muestra el estado del repositorio y los cambios detectados.

```bash
git add .
```

Añade al área de preparación todos los cambios del directorio/repositorio correspondiente. El punto representa, en este contexto, incluirlo todo desde la ubicación de trabajo.

```bash
git commit -m "mensaje"
```

Registra un commit con un mensaje descriptivo.

```bash
git push
```

Sube los commits al repositorio remoto configurado.

También se recuerda:

```bash
git pull
```

para traer/actualizar cambios desde el remoto.

Para moverse hasta la ubicación en la que se quiere trabajar se utiliza `cd`.

---

# 14. Configurar GitHub dentro de IntelliJ

Al final de la clase se explica que, si no aparece la integración esperada, puede ser necesario configurar el plugin/cuenta de GitHub.

Ruta general comentada:

```text
Settings -> Plugins -> Version Control -> GitHub
```

La ubicación exacta de Settings cambia ligeramente según el sistema operativo.

Después se inicia sesión mediante GitHub.com, se autoriza la conexión y, si corresponde, se completa la autenticación de doble factor.

A partir de ahí la cuenta queda vinculada y se pueden utilizar desde IntelliJ las funciones Git/GitHub disponibles.

---

# 15. ¿Qué puede haber dentro de `src`?

Dentro de `src` no solo habrá ficheros sueltos. Se pueden encontrar diferentes elementos.

Los primeros que se presentan son:

1. **Paquetes (`package`)**.
2. **Clases**.
3. Otros tipos que se verán más adelante: interfaces, records, enums, anotaciones, excepciones, etc.

---

# 16. Paquetes (`package`)

Un paquete se presenta inicialmente como una forma de **organizar el código**, similar a una carpeta.

Ejemplos mencionados:

```text
model
database
controller
view
```

A medida que el proyecto crece, separar las clases por responsabilidad evita tener todos los ficheros mezclados.

Además de la organización visual, los paquetes también influyen en la organización interna y en el acceso entre elementos del programa. Esto se relacionará más adelante con los modificadores de acceso.

## 16.1. Crear un paquete

En IntelliJ:

```text
Botón derecho sobre src -> New -> Package
```

Si se escribe un nombre/ruta que incluye otro paquete delante, puede crearse un paquete dentro de otro. Por eso hay que observar dónde se está creando y qué nombre aparece.

---

# 17. Tipos de fichero/elemento Java disponibles

Al seleccionar **New -> Java Class**, IntelliJ ofrece diferentes tipos de estructuras, entre ellas:

- Class;
- Interface;
- Record;
- Enum;
- Annotation;
- Exception.

La clase empieza trabajando con **Class**.

El profesor señala que IntelliJ puede generar una estructura inicial según la opción seleccionada, pero finalmente lo que determina qué es el fichero es el código que contiene.

También se comenta que los iconos/colores del IDE ayudan a reconocer visualmente qué tipo de elemento es cada fichero.

---

# 18. Clases

Una clase se guarda en un fichero `.java`.

Durante estas primeras clases, dentro de una clase se trabajará principalmente con:

- **variables**;
- **métodos**.

Cuando se llegue a programación orientada a objetos, las clases se utilizarán para representar la estructura de futuros objetos.

---

# 19. Convenciones para nombrar clases

El nombrado es importante porque el código debe poder entenderse con rapidez, especialmente cuando trabajan varias personas.

Reglas explicadas:

## 19.1. Nombre representativo

El nombre debe indicar qué representa la clase.

Malo:

```text
Clase1
```

Mejor:

```text
Usuario
Persona
TaskManager
```

## 19.2. Singular

Si la clase representa la estructura de un usuario, se utilizaría `Usuario`, no `Usuarios`.

## 19.3. Primera letra en mayúscula

En Java las clases se nombran empezando por mayúscula.

```text
Persona
Usuario
Entrada
```

## 19.4. Varias palabras: estilo tipo CamelCase/PascalCase

Si hay más de una palabra, cada palabra comienza con mayúscula.

Ejemplo conceptual:

```text
GestorTareas
TaskManager
```

## 19.5. Evitar nombres demasiado largos

El profesor recomienda nombres breves y representativos, preferentemente de una o dos palabras cuando sea posible.

## 19.6. Sin espacios ni caracteres especiales

Se desaconsejan espacios, guiones y caracteres especiales. Se insiste especialmente en evitar caracteres dependientes del idioma, como `ñ`, para favorecer la portabilidad del código.

## 19.7. Inglés

Al principio se permitirá trabajar en español para reducir dificultad, pero se anticipa que posteriormente se pedirá utilizar nombres en inglés porque es habitual en entornos profesionales.

---

# 20. Relación entre el fichero y la clase pública

Se crea como ejemplo una clase llamada **Entrada**.

Regla explicada:

> El nombre de la clase pública principal debe coincidir con el nombre del fichero.

Por ejemplo:

```text
Entrada.java
```

contendrá:

```java
public class Entrada {
}
```

El profesor comenta que técnicamente puede haber más de una clase en un fichero, pero solo una pública con ese nombre. Para el aprendizaje se trabajará con la regla práctica:

> **un fichero, una clase**.

Más adelante se podrán ver estructuras más avanzadas, como clases anidadas.

---

# 21. Llaves y ámbito de una clase

La estructura básica es:

```java
public class Entrada {
    // contenido de la clase
}
```

Todo el código perteneciente a la clase debe estar dentro de sus llaves.

En la forma de Java que se está enseñando, no se escriben instrucciones sueltas fuera de la clase.

---

# 22. Variables: concepto inicial

Definición dada en clase:

> Una variable es un espacio en memoria al que se asigna un valor.

Ejemplos conceptuales:

```text
nombre = "Alex"
edad = 41
altura = 1.80
```

Una variable permite guardar información y, si es modificable, cambiar su valor posteriormente.

Al llegar a orientación a objetos, se relacionarán las variables con las características que describen a un objeto: nombre, apellido, DNI, altura, peso, dirección, teléfono, correo, etc.

---

# 23. Métodos: concepto inicial

Definición de trabajo:

> Un método representa una función o acción que puede ejecutarse.

Ejemplos humanos utilizados en clase:

- saltar;
- correr;
- andar;
- escribir;
- cantar;
- jugar.

Mientras las variables guardan/describen datos, los métodos representan acciones o comportamientos.

---

# 24. Una clase no es por sí sola el punto de entrada

Crear una clase no significa que el programa ya pueda arrancar.

Aunque una clase contenga otros métodos, Java necesita un **punto de entrada** para iniciar la ejecución.

Ese punto de entrada es el método especial **`main`**.

---

# 25. Firma de un método

La **firma** identifica al método. Durante la explicación se construye un método a partir de varios componentes.

Estructura conceptual enseñada:

```text
[modificador de acceso] [static si corresponde] [retorno] [nombre] ([argumentos]) {
    instrucciones
}
```

Los elementos que se explican son:

1. modificador de acceso;
2. `static` cuando corresponda;
3. tipo de retorno;
4. nombre del método;
5. argumentos/parámetros entre paréntesis;
6. cuerpo entre llaves.

---

# 26. Modificadores de acceso

Se introducen tres:

## `public`

Se utiliza cuando el elemento debe ser accesible ampliamente desde fuera según las reglas de Java.

## `protected`

Se presenta inicialmente como un acceso limitado a determinados contextos.

## `private`

Se utiliza para restringir el acceso desde fuera del contexto permitido.

La explicación es introductoria; se retomará con más precisión al estudiar orientación a objetos.

---

# 27. Retorno de un método

Un método puede realizar una acción y:

- no devolver ningún resultado;
- devolver un dato.

Ejemplo utilizado:

- "ve al bar, cómete un bocadillo y vuelve": se ejecuta una acción pero no se devuelve un resultado útil al llamador;
- "ve al bar y tráeme un bocadillo": además de ejecutar la acción, se devuelve algo.

En Java, cuando un método no devuelve ningún valor se utiliza:

```java
void
```

Si devolviera un dato, el tipo de retorno tendría que corresponder con el dato devuelto, por ejemplo un número, texto, etc.

---

# 28. Nombre de los métodos

Reglas dadas:

- debe ser representativo;
- suele representar una **acción**, por lo que conceptualmente encaja con un verbo;
- empieza por minúscula;
- si contiene varias palabras, las siguientes comienzan por mayúscula.

Ejemplo conceptual:

```text
calcularSuma
mostrarMensaje
accionPrincipal
```

Esto permite diferenciar visualmente un método de una clase, ya que las clases empiezan por mayúscula.

---

# 29. Argumentos de un método

Los argumentos son los datos de entrada que necesita el método para realizar su trabajo.

Analogía utilizada:

> Si se pide a alguien que compre algo y se le entregan 10 euros, esos 10 euros son un dato de entrada necesario para realizar la acción.

Un método puede recibir:

- cero argumentos;
- uno;
- varios.

Los argumentos se escriben dentro de los paréntesis del método.

---

# 30. `static`: explicación inicial usada en clase

El profesor introduce `static` con una explicación deliberadamente sencilla/provisional:

> algo estático está asociado de forma fija y puede utilizarse sin depender de una instancia concreta.

La analogía usada es una puerta que siempre está en el mismo lugar y sirve como acceso conocido.

Se advierte que `static` se explicará mejor al llegar a orientación a objetos y que al principio aparecerá con frecuencia.

---

# 31. El método `main`

`main` es el punto de entrada del programa que se utilizará en las primeras prácticas.

La forma enseñada es:

```java
public static void main(String[] args) {

}
```

Significado explicado en clase:

- `public`: debe ser accesible como punto de entrada;
- `static`: puede utilizarse a través de la clase sin crear previamente una instancia;
- `void`: no devuelve un valor;
- `main`: es el nombre especial que Java reconoce como punto de entrada;
- `String[] args`: argumento del método, un array/conjunto de cadenas;
- `{ }`: contienen las instrucciones que se ejecutarán.

## 31.1. Qué partes pueden cambiar

Según lo explicado, la estructura especial de `main` debe respetarse. El nombre del parámetro `args` puede cambiar porque es el nombre local de esa variable/parámetro, aunque la convención habitual es utilizar `args`.

## 31.2. Escribir en bloques

El profesor recomienda acostumbrarse a escribir primero parejas de símbolos:

```text
( )
{ }
```

antes de rellenar el contenido, para reducir errores cuando el código tenga muchos niveles anidados.

## 31.3. Varios métodos `main`

Se comenta que un proyecto puede contener varios `main` en distintas clases para pruebas, pero una ejecución concreta debe arrancar desde uno determinado.

En esta fase se utiliza la configuración **Current File**: para ejecutar hay que estar en un fichero que contenga un `main` válido.

---

# 32. Sobrecarga: concepto adelantado

Se comenta brevemente que no puede haber dos métodos completamente indistinguibles con la misma firma.

Sí puede haber métodos con el mismo nombre si cambian los argumentos. A esto se le llama **sobrecarga**.

No se desarrolla todavía; queda como concepto adelantado.

---

# 33. Qué ocurre al pulsar Run: del `.java` al `.class`

La ejecución se explica como un proceso con varias comprobaciones.

## 33.1. Código fuente

Se parte de un fichero:

```text
Entrada.java
```

## 33.2. Comprobaciones previas

Si el código está mal escrito/sintácticamente incorrecto, el proceso no puede continuar correctamente.

El IDE señala la ubicación del problema, por ejemplo línea y carácter.

## 33.3. Compilación

El compilador de Java toma el código fuente y comprueba que pueda transformarse a la representación compilada que utilizará la máquina virtual.

Si puede hacerlo, genera un fichero:

```text
Entrada.class
```

## 33.4. Carpeta `out`

En el proyecto IntelliJ mostrado, el `.class` generado aparece dentro de una carpeta de salida como `out`.

Esta carpeta contiene resultados generados por compilación y normalmente no forma parte del código fuente que se quiere versionar de la misma forma que `src`.

## 33.5. JVM

Una vez generado el código compilado, la JVM puede ejecutarlo.

Idea global de la clase:

```text
Entrada.java -> compilación -> Entrada.class -> ejecución en la JVM
```

---

# 34. Tipos de errores introducidos

El profesor insiste en aprender a **leer los errores** en lugar de copiar automáticamente el mensaje a una IA.

La consola suele indicar:

- tipo de error/excepción;
- mensaje explicativo;
- fichero;
- línea donde se produce.

Pulsando sobre la referencia del error, IntelliJ puede llevar directamente a la línea afectada.

## 34.1. Error de escritura/sintaxis

Si se escribe una instrucción que Java no reconoce, el programa no puede compilar correctamente.

Ejemplo: omitir símbolos obligatorios o escribir algo que no es una sentencia válida.

## 34.2. `NullPointerException`: ejemplo de clase

Se muestra un caso en el que una variable tiene valor `null` y después se intenta utilizar un método sobre ella, como obtener su longitud.

El mensaje indica que no puede invocarse el método porque la variable es nula.

Lección práctica:

> El mensaje de error suele contener información suficiente para localizar el problema; hay que leerlo antes de buscar una solución externa.

**Nota de fidelidad:** durante la explicación oral se mezclan las etiquetas "compilación" y "ejecución" al hablar de este ejemplo. Estos apuntes conservan el ejemplo y su finalidad didáctica sin reescribir esa clasificación con teoría externa.

## 34.3. Error durante la ejecución: división entre cero

Ejemplo explicado:

1. el programa solicita dos números;
2. el usuario introduce `4`;
3. después introduce `0`;
4. se intenta dividir entre cero;
5. aparece una `ArithmeticException`.

El código puede haber empezado a ejecutarse correctamente, pero una combinación concreta de datos provoca el fallo durante la ejecución.

## 34.4. Control de excepciones

Más adelante se aprenderá a controlar errores para evitar que una situación prevista rompa completamente el programa.

Ejemplo conceptual:

> Si el usuario intenta dividir entre cero, mostrar un mensaje indicando que no está permitido y mantener el programa bajo control.

El profesor relaciona esto con el principio de **disponibilidad**: un programa debe intentar seguir ofreciendo su servicio y gestionar correctamente situaciones de error previsibles.

---

# 35. Variables dentro de un método

Dentro de `main` se empiezan a declarar variables.

Estructura inicial:

```java
Tipo nombre = valor;
```

Ejemplo trabajado:

```java
String nombre = "Alex";
```

Elementos:

- `String`: tipo;
- `nombre`: identificador de la variable;
- `=`: asignación;
- `"Alex"`: valor;
- `;`: final de la sentencia.

---

# 36. Convenciones para nombres de variables

- nombre representativo;
- primera letra en minúscula;
- si hay varias palabras, usar minúscula inicial y mayúscula en las palabras siguientes;
- evitar nombres que no indiquen qué dato guardan.

Si la variable guarda un apellido, debería llamarse de forma relacionada con el apellido; si guarda una edad, un nombre relacionado con edad.

---

# 37. Punto y coma `;`

En Java, las declaraciones de variables y muchas instrucciones terminan en:

```text
;
```

Si falta, IntelliJ marca error y el código no compila correctamente.

El mensaje puede indicar que esperaba un punto y coma (`semicolon expected`).

---

# 38. Declarar antes de utilizar

Una variable debe estar definida antes del punto del código en el que se intenta utilizar.

Si se intenta imprimir `nombre` y la declaración aparece después, IntelliJ marca error porque en ese momento la referencia todavía no está disponible.

Regla práctica inicial:

> declarar primero las variables que se van a necesitar y después utilizarlas.

---

# 39. Salida por consola

Se trabajan varias formas de imprimir.

## 39.1. `System.out.println`

Imprime un contenido y después añade un salto de línea.

Ejemplo:

```java
System.out.println(nombre);
```

## 39.2. `System.out.print`

Imprime sin añadir automáticamente el salto de línea final.

Por eso dos `print` consecutivos pueden aparecer en la misma línea.

## 39.3. Concatenación con `+`

Se pueden unir textos y valores mediante `+`.

Ejemplo conceptual reconstruido directamente de la explicación:

```java
System.out.println("Otra " + "cosa " + "diferente");
```

La colocación de espacios dentro de las cadenas es importante para que las palabras no aparezcan pegadas.

---

# 40. `printf` y texto formateado

La tercera grabación comienza en mitad de un ejemplo de `printf`.

La idea explicada es utilizar un mensaje con **marcadores/banderas** y proporcionar después los valores que deben sustituirlos en el mismo orden.

Ejemplo conceptual de la explicación:

- primer marcador -> nombre;
- segundo -> primer apellido;
- tercero -> segundo apellido;
- cuarto -> edad.

Los valores pueden proceder de variables o escribirse directamente como literales.

Reglas importantes explicadas:

1. Los valores se asignan a los marcadores **en orden**.
2. Debe proporcionarse una cantidad coherente de valores respecto a los marcadores utilizados.
3. El tipo del valor debe ser compatible con la bandera utilizada.
4. Si se utiliza una bandera numérica con un texto se produce un error de formato.

Se muestra una excepción:

```text
IllegalFormatConversionException
```

La transcripción conserva explícitamente una referencia a la **bandera `d` para un número**, pero no registra de forma fiable todos los símbolos/letras exactos del resto de banderas mostradas en pantalla. Por rigor, no se reconstruyen aquí los símbolos que no quedaron grabados con claridad.

También se aclara que una palabra escrita directamente como dato debe ir entre comillas. Si se escribe sin comillas, Java intenta interpretarla como una referencia/variable existente.

---

# 41. Tipos de datos básicos vistos en clase

Se presentan varios tipos.

## 41.1. `String`

Representa texto: palabras o frases.

Ejemplo:

```java
String nombre = "Alex";
```

Regla:

> El texto `String` se escribe entre **comillas dobles**.

Una cadena vacía sí puede representarse:

```java
String texto = "";
```

## 41.2. `char`

Representa un único carácter.

Ejemplo:

```java
char letra = 'A';
```

Regla:

> Un `char` utiliza **comillas simples**.

En la explicación se señala que un carácter está relacionado internamente con una representación numérica. Se menciona la tabla ASCII como introducción a esa idea y se anticipa que las representaciones numéricas/binarias/hexadecimales se estudiarán más adelante.

También se comenta que, a diferencia de una cadena vacía, no se plantea un `char` vacío de la misma forma.

## 41.3. Tipos enteros

Se mencionan:

- `byte`;
- `short`;
- `int`;
- `long`.

La diferencia introducida es la cantidad/rango de información numérica que pueden representar.

Durante la clase se usan las potencias aproximadas como referencia didáctica:

- byte: alrededor de `2^7` para magnitud con signo;
- short: alrededor de `2^15`;
- int: alrededor de `2^31`;
- long: alrededor de `2^63`.

No se exige memorizar todavía todos los rangos exactos; lo importante es entender que cada tipo dispone de una capacidad diferente.

Para el trabajo habitual de estas primeras prácticas se utilizará principalmente:

```java
int
```

## 41.4. Números decimales: `float` y `double`

Ambos permiten representar números con parte decimal.

Ejemplo:

```java
double altura = 1.79;
```

Para un literal `float` se explica que se añade `F`:

```java
float altura = 1.79F;
```

La explicación de clase relaciona `float` y `double` con distinta capacidad/precisión, y se decide utilizar normalmente `double` durante estas primeras prácticas para simplificar.

También se explica la idea de que un valor que cabe en un tipo más pequeño puede almacenarse en uno de mayor capacidad en determinados casos; el sentido inverso puede requerir conversión o producir problemas.

## 41.5. `boolean`

Solo admite los valores lógicos:

```java
true
false
```

No son textos, por lo que no deben confundirse con:

```java
"true"
"false"
```

Los booleanos servirán para condiciones y lógica:

- si algo es verdadero, ejecutar una acción;
- si es falso, ejecutar otra;
- repetir mientras se cumpla una condición, etc.

Se anticipa que se utilizarán con operadores y sentencias lógicas.

---

# 42. Tipos primitivos y tipos complejos: modelo introductorio de la clase

La clase establece una distinción inicial entre:

- tipos simples/primitivos, escritos con nombres como `int`, `double`, `boolean`, `char`;
- tipos basados en clases, como `String`, que empieza por mayúscula.

La idea didáctica es que un tipo basado en una clase no solo contiene un dato, sino que ofrece **métodos/funcionalidad asociada**.

Por ejemplo, una variable `String` permite acceder a muchas operaciones sobre texto.

Un `int`, presentado como primitivo, se entiende inicialmente como un valor almacenado sin esa colección directa de métodos sobre la variable.

---

# 43. Clases envoltorio de tipos primitivos

Se adelanta que Java proporciona versiones basadas en clase asociadas a tipos primitivos.

Ejemplos mostrados:

```text
int     -> Integer
double  -> Double
```

La versión de clase ofrece funcionalidad/métodos adicionales, pero también representa una estructura más compleja.

Idea de eficiencia indicada:

> Si solo se necesita almacenar un valor sencillo, no siempre interesa utilizar una estructura más compleja sin necesidad.

Se plantea como equilibrio entre funcionalidad y coste/uso de recursos.

---

# 44. `Object`: tipo general de Java, introducción

Se menciona `Object` como una clase muy general situada en la parte superior de la jerarquía de clases de Java.

Se utiliza para introducir una idea que se estudiará más adelante: un dato puede tratarse de una forma más general, pero al hacerlo solo se dispone directamente de la funcionalidad visible desde ese tipo general.

Analogía de clase:

- presentarse con una identidad muy específica permite acceder a servicios específicos;
- presentarse con una identidad más general permite lo común a ese nivel, pero no necesariamente toda la funcionalidad específica.

Esto sirve como adelanto de conceptos de orientación a objetos y polimorfismo.

No se propone utilizar `Object` indiscriminadamente; se presenta como concepto para entender la jerarquía de tipos.

---

# 45. Conversión de tipos: casteo y parseo

Se adelantan dos conceptos que se estudiarán más adelante.

## 45.1. Casteo

Se muestra la idea de convertir entre tipos numéricos relacionados, por ejemplo pasar un valor decimal a entero mediante una conversión explícita.

## 45.2. Parseo

Se presenta como la transformación de una representación, por ejemplo intentar convertir una cadena de texto en un número.

La conversión solo podrá tener sentido si el contenido es compatible con el tipo objetivo. Una cadena que no representa un número no puede convertirse correctamente en entero solo por pedirlo.

La clase no desarrolla todavía la sintaxis completa; se utiliza como introducción al concepto de cambio de tipos.

---

# 46. Variables modificables

Una variable normal puede recibir un nuevo valor.

Ejemplo conceptual:

```java
int edad = 41;
edad = edad + 1;
```

Después de la reasignación, `edad` contiene el nuevo resultado.

Importante: al modificar una variable existente **no se vuelve a escribir el tipo** como si se estuviera declarando otra vez.

Incorrecto conceptualmente:

```java
int edad = 41;
int edad = 42;   // se intentaría declarar otra variable con el mismo nombre en el mismo ámbito
```

Reasignación:

```java
int edad = 41;
edad = 42;
```

---

# 47. Constantes con `final`

Para impedir que una variable vuelva a recibir otro valor se utiliza `final`.

Estructura:

```java
final Tipo NOMBRE = valor;
```

Ejemplo basado en la clase:

```java
final String DNI = "...";
```

Si después se intenta reasignar, IntelliJ muestra un error indicando que no se puede asignar un nuevo valor a una variable `final`.

## 47.1. Convención de nombres de constantes

Aunque técnicamente funcionaría con otro nombre, la convención presentada es escribir las constantes en **MAYÚSCULAS**.

Esto permite reconocer inmediatamente que un identificador representa un valor que no debería modificarse.

La clase insiste en que las convenciones no solo sirven para que el compilador acepte el código, sino para que otros programadores puedan entenderlo rápidamente.

---

# 48. Comentarios

Los comentarios son texto dentro del código destinado a las personas, no a la ejecución del programa.

Se utilizan para documentar y recordar la intención de una parte del código.

## 48.1. Comentario de una línea

```java
// Comentario
```

Solo afecta a esa línea.

## 48.2. Comentario de varias líneas

Se introduce:

```java
/*
   Comentario de varias líneas
*/
```

Permite escribir un bloque más largo.

## 48.3. Comentarios breves y útiles

Recomendación del profesor:

> Los comentarios no deben convertirse en un texto enorme. Deben ser cortos y permitir entender rápidamente qué hace algo o por qué existe.

Su objetivo es ayudar tanto a otras personas como al propio autor cuando vuelva al código días después.

## 48.4. Comentarios de documentación

Se menciona que existen comentarios específicos de documentación, pero se pospone su explicación para no añadir demasiados conceptos en esta sesión.

---

# 49. Comentarios `TODO`

Un `TODO` sirve para dejar marcada una tarea pendiente en el código.

Ejemplo:

```java
// TODO: mejorar este codigo
```

IntelliJ reconoce la palabra `TODO` y puede reunir todas las tareas pendientes del proyecto.

Ruta mostrada:

```text
View -> Tool Windows -> TODO
```

Esto es especialmente útil en proyectos grandes, porque evita tener que buscar manualmente entre cientos o miles de líneas dónde quedaron tareas pendientes.

---

# 50. Colores y ayudas visuales de IntelliJ

Durante la clase aparecen diferentes colores y avisos.

Hay que distinguir:

- errores reales de código;
- advertencias;
- código no utilizado;
- estado de un fichero respecto a Git;
- sugerencias del IDE.

Por ejemplo, un método o variable puede aparecer atenuado porque todavía no se utiliza. Eso no significa necesariamente que su sintaxis sea incorrecta.

La idea es aprender a interpretar qué está indicando IntelliJ en cada caso y no asumir que cualquier color diferente significa "el programa está mal".

---

# 51. Forma de trabajo recomendada por el profesor

La sesión insiste en practicar creando y modificando código sencillo:

- declarar variables;
- cambiar sus valores;
- imprimirlas;
- combinar mensajes;
- probar distintos tipos;
- introducir comentarios;
- hacer commits y subir cambios;
- observar qué errores aparecen al modificar deliberadamente el código.

La intención no es memorizar de golpe cada palabra, sino repetir los conceptos hasta reconocer la estructura.

También se recomienda intentar interpretar los mensajes de error antes de pedir a una IA que los solucione. La IA puede ayudar, pero el objetivo del curso es aprender a comprender el problema.

---

# 52. Ejemplo integrado con lo explicado en clase

Este ejemplo reúne únicamente estructuras tratadas durante la sesión:

```java
public class Entrada {

    public static void main(String[] args) {

        // Variables
        String nombre = "Alex";
        int edad = 41;
        double altura = 1.79;
        char letra = 'A';
        boolean activo = true;

        // Salida por consola
        System.out.println(nombre);
        System.out.print("Edad: ");
        System.out.println(edad);

        // Reasignacion
        edad = edad + 1;

        // Constante
        final String DNI = "dato";

        // TODO: seguir practicando con variables y mensajes
    }
}
```

Qué se puede identificar:

- fichero/clase `Entrada`;
- clase pública;
- llaves de la clase;
- método `main`;
- firma `public static void main(String[] args)`;
- variables de distintos tipos;
- comillas dobles en `String`;
- comillas simples en `char`;
- `true` como booleano;
- punto y coma al finalizar sentencias;
- `println` y `print`;
- reasignación de una variable;
- constante con `final`;
- comentario y `TODO`.

---

# 53. Mapa mental del contenido de la clase

```text
PROYECTO JAVA
|
+-- Git / GitHub
|   +-- repo remoto
|   +-- clone
|   +-- .git
|   +-- .gitignore
|   +-- status -> add -> commit -> push
|
+-- IntelliJ
|   +-- JDK
|   +-- Build System
|   |   +-- IntelliJ
|   |   +-- Maven / Gradle
|   +-- Project Structure
|   +-- Run / Debug
|   +-- Git integrado
|
+-- src
    +-- packages
    +-- clases .java
        +-- variables
        +-- metodos
            +-- main = punto de entrada
            +-- instrucciones
                +-- variables
                +-- salida por consola
                +-- comentarios
```

---

# 54. Lo que deberías ser capaz de explicar después de esta clase

## Proyecto y Git

- Qué ocurre si creas un repositorio Git dentro de otro repositorio ya clonado.
- Cuándo marcar y cuándo no `Create Git Repository`.
- Qué función cumple `.gitignore`.
- Diferencia conceptual entre una ruta absoluta y una relativa.
- Secuencia básica `status -> add -> commit -> push`.
- Para qué sirve `pull`.

## IntelliJ

- Dónde elegir/cambiar el JDK.
- Qué es el Build System.
- Diferencia inicial entre gestionar librerías localmente y usar Maven/Gradle.
- Qué es `src` y por qué está marcada como Source Folder.
- Qué hace Run y qué aporta Debug.

## Estructura Java

- Qué es un paquete.
- Qué es una clase.
- Cómo se nombra una clase.
- Por qué el nombre de la clase pública coincide con el fichero.
- Qué contienen las llaves de una clase.
- Diferencia conceptual entre variable y método.

## Métodos

- Qué significa la firma de un método.
- Qué son modificador de acceso, retorno, nombre y argumentos.
- Qué significa inicialmente `static`.
- Para qué sirve `void`.
- Qué es la sobrecarga a nivel introductorio.

## `main`

Ser capaz de reconocer y escribir:

```java
public static void main(String[] args) {
}
```

Y explicar qué representa cada parte.

## Ejecución

- Diferencia entre `.java` y `.class` según la explicación de clase.
- Papel del compilador y de la JVM.
- Por qué conviene leer el mensaje de error.
- Ejemplos de `NullPointerException` y `ArithmeticException` vistos en clase.

## Variables

- Estructura `Tipo nombre = valor;`.
- Declarar antes de utilizar.
- Para qué sirve `;`.
- `String`, `char`, `int`, `double`, `float`, `boolean`.
- Idea de `byte`, `short` y `long`.
- Comillas dobles frente a simples.
- Diferencia entre `true` y `"true"`.
- Concepto introductorio de tipos primitivos y tipos basados en clases.
- Idea de `Integer`, `Double` y `Object`.
- Conceptos adelantados de casteo y parseo.
- Reasignación de una variable.
- Constante con `final` y nombre en mayúsculas.

## Consola y documentación

- Diferencia entre `print` y `println`.
- Concatenar con `+`.
- Idea de `printf`: marcadores ordenados y compatibilidad de tipos.
- Comentario `//`.
- Comentario `/* ... */`.
- Uso de `TODO` y ventana TODO de IntelliJ.

---

# 55. Puntos que la grabación no conserva completamente

Para evitar inventar información se dejan identificados los huecos reales de las transcripciones:

1. **El final exacto del ejercicio propuesto al terminar la parte 2.** La grabación termina en "Define tu variable..." y la parte 3 comienza ya en medio de la explicación de `printf`.
2. **Todas las banderas exactas mostradas para `printf`.** La voz conserva la lógica del ejercicio y menciona explícitamente la bandera `d`, pero no registra de forma fiable todas las letras/símbolos que estaban visibles en pantalla.
3. Hay nombres de menús, usuarios y tecnologías deformados por la transcripción automática; se han normalizado únicamente cuando el contexto los identifica inequívocamente.

Estos huecos no se han rellenado con contenido inventado.

---

# 56. Secuencia recomendada para repasar este día

1. **Git y creación del proyecto:** entiende primero dónde debe existir `.git` y por qué no crear repositorios anidados sin querer.
2. **Estructura IntelliJ:** proyecto, módulo, `src`, External Libraries, JDK y Build System.
3. **Clase:** fichero `.java`, nombre, llaves y contenido.
4. **Método:** firma, acceso, `static`, retorno, nombre y argumentos.
5. **`main`:** memoriza la forma solo después de saber explicar cada parte.
6. **Compilación:** `.java -> .class -> JVM` según el esquema trabajado.
7. **Variables:** sintaxis, nombres, tipos y reasignación.
8. **Salida:** `print`, `println`, concatenación y concepto de `printf`.
9. **Tipos de datos:** texto, carácter, enteros, decimales y booleanos.
10. **Constantes y comentarios:** `final`, mayúsculas, `//`, `/* */`, `TODO`.
11. **Práctica:** crea un proyecto desde cero y reproduce estos elementos sin copiar el ejemplo.

---

## Fin de los apuntes - Programación, día 2

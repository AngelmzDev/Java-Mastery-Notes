# Ejercicios de Java básico

## Procedencia y estado

Los enunciados de esta sección son **variantes didácticas propias** de los tipos de aplicación indicados en el encargo. Cambian escenario, nombres y datos; mantienen la operación que se practica. No se ha podido comparar su redacción con los originales de clase porque no están disponibles.

- **Resuelto propio:** tiene razonamiento, código y pruebas de referencia en este repositorio.
- **Propuesto propio:** actividad para practicar con pistas y respuesta separada.
- **Corregido en clase / planteado o pendiente en clase:** estado **no confirmado** para todos los ejercicios; no se infiere de que aquí exista una solución.

## Práctica por bloque: 33 actividades

- [Entorno y fundamentos: tres actividades](../docs/01-fundamentos/ejercicios.md)
- [Variables, tipos y constantes: tres actividades](../docs/02-variables-y-tipos/ejercicios.md)
- [Entrada, salida y documentación: tres actividades](../docs/03-entrada-y-salida/ejercicios.md)
- [Operadores y expresiones: tres actividades](../docs/04-operadores/ejercicios.md)
- [Cadenas y caracteres: tres actividades](../docs/05-strings/ejercicios.md)
- [Condicionales: tres actividades](../docs/06-condicionales/ejercicios.md)
- [Bucles: tres actividades](../docs/07-bucles/ejercicios.md)
- [Lógica de programación: tres actividades](../docs/08-logica-programacion/ejercicios.md)
- [Sistemas de numeración: tres actividades](../docs/09-sistemas-numeracion/ejercicios.md)
- [Arrays unidimensionales: tres actividades](../docs/10-arrays/ejercicios.md)
- [Git y buenas prácticas: tres actividades](../docs/11-git-y-buenas-practicas/ejercicios.md)

## Aplicaciones: 24 variantes resueltas propias

Primero lee el enunciado; deja el código y la explicación para después de tu intento. Los programas son de consola, sin colecciones ni funciones preview. Las entradas decimales de estas prácticas son números finitos; se usa punto decimal cuando lo indica el enunciado. La validación de texto no numérico se estudia específicamente en el bloque de entrada y salida.

### 01. Presupuesto de material

**Objetivo:** Calcular base, IVA y total con operaciones aritméticas.

Un taller compra cuadernos. Lee precio unitario no negativo y cantidad entera no negativa. Aplica un IVA didáctico fijo del 21 %. Muestra base, IVA y total con dos decimales. Usa punto decimal en la entrada. Es una práctica de cálculo aproximado con double, no un sistema contable.

[Solución razonada](soluciones/01-presupuesto-de-material.md) · [Código](src/ejercicios/E01PresupuestoDeMaterial.java) · [Tema](../docs/04-operadores/README.md)

### 02. Duración de un pódcast

**Objetivo:** Descomponer segundos mediante cociente y resto.

Lee la duración entera no negativa de un pódcast en segundos. Muestra horas completas, minutos restantes y segundos restantes. No utilices clases de fecha o tiempo.

[Solución razonada](soluciones/02-duracion-de-un-podcast.md) · [Código](src/ejercicios/E02DuracionDeUnPodcast.java) · [Tema](../docs/04-operadores/README.md)

### 03. Cifras de un código de taquilla

**Objetivo:** Separar centenas, decenas y unidades.

Lee un código entero entre 100 y 999 y muestra sus tres cifras en el orden original. Rechaza otros valores. No conviertas el número a String para separar sus cifras.

[Solución razonada](soluciones/03-codigo-de-taquilla.md) · [Código](src/ejercicios/E03CodigoDeTaquilla.java) · [Tema](../docs/04-operadores/README.md)

### 04. Niveles de una prueba práctica

**Objetivo:** Clasificar rangos sin condiciones redundantes.

Lee una puntuación entera de 0 a 10. Muestra En progreso para 0..4, Superado para 5..6, Destacado para 7..8 y Excelente para 9..10. Rechaza puntuaciones fuera del rango.

[Solución razonada](soluciones/04-niveles-de-una-prueba.md) · [Código](src/ejercicios/E04NivelesDeUnaPrueba.java) · [Tema](../docs/06-condicionales/README.md)

### 05. Siguiente día de una reserva

**Objetivo:** Validar una fecha y resolver cambios de mes y año.

Lee día, mes y año de una reserva. Admite años del 1 al 9998 y usa la regla gregoriana de bisiestos. Valida la fecha y, si existe, calcula el día siguiente sin usar bibliotecas de fechas. Muestra día/mes/año sin exigir ceros iniciales.

[Solución razonada](soluciones/05-siguiente-dia-de-reserva.md) · [Código](src/ejercicios/E05SiguienteDiaDeReserva.java) · [Tema](../docs/06-condicionales/README.md)

### 06. Letra de un rótulo

**Objetivo:** Validar un carácter y clasificar vocal/consonante.

Lee una línea. Acepta exactamente una letra latina básica A..Z o a..z, sin tildes ni ñ en esta variante. Indica Vocal, Consonante o Carácter no válido. No aceptes un número ni una cadena de dos letras.

[Solución razonada](soluciones/06-letra-de-un-rotulo.md) · [Código](src/ejercicios/E06LetraDeUnRotulo.java) · [Tema](../docs/06-condicionales/README.md)

### 07. Grupos de piezas pares e impares

**Objetivo:** Comprobar divisibilidad con resto.

Lee una cantidad entera de piezas, que puede ser cero pero no negativa. Indica si es Par o Impar. La finalidad es razonar con el resto de dividir entre dos.

[Solución razonada](soluciones/07-grupos-de-piezas.md) · [Código](src/ejercicios/E07GruposDePiezas.java) · [Tema](../docs/04-operadores/README.md)

### 08. Ordenar tres tiempos

**Objetivo:** Comparar e intercambiar sin un algoritmo de ordenación de biblioteca.

Lee tres tiempos enteros de carrera y muéstralos de menor a mayor. Para aislar la lógica de ordenación, se admiten enteros cualesquiera. No uses arrays ni funciones de ordenación.

[Solución razonada](soluciones/08-orden-de-tres-tiempos.md) · [Código](src/ejercicios/E08OrdenDeTresTiempos.java) · [Tema](../docs/06-condicionales/README.md)

### 09. Tabla de lotes

**Objetivo:** Construir una tabla de multiplicar con cantidad conocida de repeticiones.

Lee la cantidad de piezas por lote (entero entre 1 y 1000). Muestra el total de piezas para 1, 2, ... y 10 lotes con formato n x i = producto.

[Solución razonada](soluciones/09-tabla-de-lotes.md) · [Código](src/ejercicios/E09TablaDeLotes.java) · [Tema](../docs/07-bucles/README.md)

### 10. Dorsales de un intervalo

**Objetivo:** Recorrer un intervalo inclusivo y filtrar valores.

Lee dos extremos enteros entre 0 y 10000. Rechaza inicio>fin. Muestra, uno por línea, solo los dorsales pares del intervalo inclusive; si no hay, muestra Sin pares.

[Solución razonada](soluciones/10-dorsales-en-intervalo.md) · [Código](src/ejercicios/E10DorsalesEnIntervalo.java) · [Tema](../docs/07-bucles/README.md)

### 11. Potencia por productos

**Objetivo:** Acumular un producto mediante repetición.

Lee base entera entre -10 y 10 y exponente entero entre 0 y 18. Calcula la potencia sin Math.pow. En este ejercicio se define base^0 como 1, incluido el caso 0^0, únicamente como convención del algoritmo.

[Solución razonada](soluciones/11-potencia-por-productos.md) · [Código](src/ejercicios/E11PotenciaPorProductos.java) · [Tema](../docs/07-bucles/README.md)

### 12. Temperaturas de un invernadero

**Objetivo:** Leer una cantidad conocida y calcular suma, media, máximo y mínimo.

Lee la cantidad de medidas (1..100) y después esa cantidad de temperaturas entre -50 y 60, con punto decimal. Una medida fuera de rango se rechaza y se vuelve a pedir sin contarla. Muestra media, máxima y mínima con dos decimales.

[Solución razonada](soluciones/12-temperaturas-de-invernadero.md) · [Código](src/ejercicios/E12TemperaturasDeInvernadero.java) · [Tema](../docs/08-logica-programacion/README.md)

### 13. Recuento de notas y sueldos

**Objetivo:** Mantener contadores independientes para condiciones distintas.

Lee un número de fichas entre 1 y 50. Cada ficha contiene una nota entera de 0..10 y un sueldo de 0 a 1000000 con punto decimal. Cuenta notas aprobadas (>=5) y sueldos superiores a 1800. Si cualquiera de los datos de la ficha es inválido, rechaza la ficha completa y repite esa posición.

[Solución razonada](soluciones/13-recuento-de-participantes.md) · [Código](src/ejercicios/E13RecuentoDeParticipantes.java) · [Tema](../docs/08-logica-programacion/README.md)

### 14. Dos dados de mesa

**Objetivo:** Generar resultados de 1 a 6 y sumar.

Simula una tirada de dos dados de seis caras. Muestra únicamente los dos resultados y su suma en una línea. No pidas datos. Cada dado necesita su propia llamada a Math.random.

[Solución razonada](soluciones/14-dos-dados-de-mesa.md) · [Código](src/ejercicios/E14DosDadosDeMesa.java) · [Tema](../docs/04-operadores/README.md)

### 15. Sorteo de taquillas

**Objetivo:** Generar enteros dentro de un intervalo inclusivo.

Sortea diez números de taquilla entre 20 y 25 inclusive, uno por línea. Se permite repetir. No confundas este sorteo con una selección sin reemplazo.

[Solución razonada](soluciones/15-sorteo-de-taquillas.md) · [Código](src/ejercicios/E15SorteoDeTaquillas.java) · [Tema](../docs/04-operadores/README.md)

### 16. Adivina el código

**Objetivo:** Combinar azar, validación, comparación y recuento de intentos.

Sortea un entero de 1 a 20. Lee propuestas hasta acertar o introducir 0 para abandonar. Los valores fuera de 1..20 (salvo el 0) se rechazan sin contar intento. Indica Mayor si el secreto es mayor y Menor si es menor. Al acertar muestra el número de intentos válidos.

[Solución razonada](soluciones/16-adivina-el-codigo.md) · [Código](src/ejercicios/E16AdivinaElCodigo.java) · [Tema](../docs/07-bucles/README.md)

### 17. Conversor de bases

**Objetivo:** Aplicar valor posicional, charAt y divisiones sucesivas.

Lee base de origen, base de destino y un número sin signo ni prefijos. Las bases admitidas son 2, 8, 10 y 16. Admite de una a siete cifras, en mayúsculas o minúsculas. Valida sus cifras y muestra el valor equivalente en la base de destino. Siete cifras en las bases admitidas caben en int positivo.

[Solución razonada](soluciones/17-conversor-de-bases.md) · [Código](src/ejercicios/E17ConversorDeBases.java) · [Tema](../docs/09-sistemas-numeracion/README.md)

### 18. Rótulo al revés

**Objetivo:** Recorrer una cadena en sentido descendente.

Lee una línea de texto sencillo y muestra sus caracteres en orden inverso. Conserva espacios y mayúsculas. Se admiten líneas vacías; los ejemplos se limitan a caracteres de una unidad UTF-16.

[Solución razonada](soluciones/18-rotulo-inverso.md) · [Código](src/ejercicios/E18RotuloInverso.java) · [Tema](../docs/05-strings/README.md)

### 19. Palabra simétrica

**Objetivo:** Comparar extremos usando una bandera.

Lee una palabra no vacía de letras latinas básicas y determina si es palíndroma ignorando mayúsculas. Para concretar esta variante, rechaza espacios, números, tildes y ñ. No construyas una segunda palabra invertida.

[Solución razonada](soluciones/19-palabra-simetrica.md) · [Código](src/ejercicios/E19PalabraSimetrica.java) · [Tema](../docs/05-strings/README.md)

### 20. Panel de estrellas

**Objetivo:** Dibujar cuadrado y triángulo con bucles anidados.

Lee un lado entre 1 y 8. Dibuja primero un cuadrado lleno de ese tamaño, después una línea con --- y finalmente un triángulo cuya fila i tenga i estrellas.

[Solución razonada](soluciones/20-panel-de-estrellas.md) · [Código](src/ejercicios/E20PanelDeEstrellas.java) · [Tema](../docs/07-bucles/README.md)

### 21. Análisis de un aviso

**Objetivo:** Combinar limpieza, split, recorridos y contadores.

Lee un aviso de una línea. Considera palabra cada grupo de caracteres separado por espacios en blanco; la puntuación permanece dentro de la palabra. Cuenta palabras, cuenta vocales a/e/i/o/u sin distinguir mayúsculas y muestra la primera palabra más larga. Si está vacío tras trim, muestra Sin texto. Esta variante no normaliza vocales acentuadas.

[Solución razonada](soluciones/21-analisis-de-un-aviso.md) · [Código](src/ejercicios/E21AnalisisDeUnAviso.java) · [Tema](../docs/05-strings/README.md)

### 22. Factorial de una cantidad

**Objetivo:** Calcular factorial iterativo con límites que eviten desbordamiento.

Lee un entero n entre 0 y 20 y calcula n! multiplicando de forma iterativa. No uses recursividad. 0! vale 1; utiliza long y rechaza otros valores.

[Solución razonada](soluciones/22-factorial-de-una-cantidad.md) · [Código](src/ejercicios/E22FactorialDeUnaCantidad.java) · [Tema](../docs/07-bucles/README.md)

### 23. Menú de consultas

**Objetivo:** Repetir un menú y distinguir salida del switch y salida del bucle.

Repite el menú 1 Saludar, 2 Cuadrado, 0 Salir. La opción 2 lee un entero entre -1000 y 1000 y muestra su cuadrado. Una opción desconocida muestra Opción no válida. Supón entradas enteras.

[Solución razonada](soluciones/23-menu-de-consultas.md) · [Código](src/ejercicios/E23MenuDeConsultas.java) · [Tema](../docs/08-logica-programacion/README.md)

### 24. Agenda de compañeros de taller

**Objetivo:** Gestionar amigos o compañeros con un array de capacidad fija.

Crea una agenda de cinco nombres con menú: 1 Añadir, 2 Listar, 3 Buscar, 0 Salir. Lee nombres completos en líneas separadas, elimina espacios exteriores, rechaza vacíos y duplicados ignorando mayúsculas. Informa si está llena. Al buscar, indica la primera posición (base cero), o No encontrado. Se admiten opciones enteras.

[Solución razonada](soluciones/24-agenda-de-taller.md) · [Código](src/ejercicios/E24AgendaDeTaller.java) · [Tema](../docs/10-arrays/README.md)

## Ejecutar una solución

Desde la raíz del repositorio, con el JDK configurado:

```shell
javac -encoding UTF-8 --release 23 -d out ejercicios/src/ejercicios/*.java
java -cp out ejercicios.E02DuracionDeUnPodcast
```

En IntelliJ puedes abrir la carpeta y marcar `ejercicios/src` como **Sources Root**. Selecciona JDK 23 sin preview y ejecuta el `main` de la clase elegida. El paquete `ejercicios` corresponde a la subcarpeta dentro de `src`. No crees un repositorio Git dentro de esa carpeta.

Para comprobar todos los programas y los fragmentos de los apuntes, consulta [las instrucciones de verificación](../docs/verificacion.md).

## Cómo revisar tu intento

No basta con que compile: compara con una traza manual y prueba fronteras, datos inválidos y casos sin resultados. La solución es una referencia para razonar; cambia los nombres y datos y explica el algoritmo con tus propias palabras. No hace falta añadir tecnologías fuera del nivel del tema.

[Volver al índice principal](../README.md)

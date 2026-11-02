# Duración de un pódcast

**Estado:** resuelto didáctico propio; corrección en clase no confirmada.

## Enunciado

Lee la duración entera no negativa de un pódcast en segundos. Muestra horas completas, minutos restantes y segundos restantes. No utilices clases de fecha o tiempo.

## Objetivo y razonamiento

Descomponer segundos mediante cociente y resto.

Extraemos horas del total. El resto de esa división contiene únicamente la parte pendiente, de donde salen minutos y segundos. Calcular minutos como total/60 sin quitar las horas mostraría minutos acumulados, no el componente de un reloj.

## Traza o comprobación manual

| Paso con 7384 s | Cociente | Resto |
| --- | --- | --- |
| Dividir entre 3600 | 2 horas | 184 s |
| Dividir 184 entre 60 | 3 minutos | 4 s |

## Código completo

Abre [E02DuracionDeUnPodcast.java](../src/ejercicios/E02DuracionDeUnPodcast.java). La clase tiene `main`, imports y paquete: no necesita completar fragmentos. Lee en orden: datos de entrada, preparación, decisiones o repeticiones y salida.

## Pruebas y límites

Entrada:

```text
7384
```

Salida:

```text
2h 3m 4s
```

Entrada:

```text
0
```

Salida:

```text
0h 0m 0s
```

Entrada:

```text
3600
```

Salida:

```text
1h 0m 0s
```

Salvo que el enunciado indique otro comportamiento, las lecturas numéricas presuponen tokens con formato correcto y suficientes datos para completar la tarea. Los rangos se validan como indica cada ejercicio. La validación de formato y EOF se desarrolla en el [tema de entrada](../../docs/03-entrada-y-salida/validacion-y-errores.md); no se ocultan excepciones con manejo avanzado.

## Antes de mirar la solución otra vez

Cambia un dato de la prueba y predice la salida. Identifica qué variable conserva información, qué instrucción se repite y qué condición termina el proceso. Provoca un error lógico cambiando la posición de una inicialización y explica el resultado, sin conservar esa versión como solución.

[Tema y práctica](../../docs/04-operadores/README.md) · [Índice de ejercicios](../README.md)

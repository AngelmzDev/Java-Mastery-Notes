# Agenda de compañeros de taller

**Estado:** resuelto didáctico propio; corrección en clase no confirmada.

## Enunciado

Crea una agenda de cinco nombres con menú: 1 Añadir, 2 Listar, 3 Buscar, 0 Salir. Lee nombres completos en líneas separadas, elimina espacios exteriores, rechaza vacíos y duplicados ignorando mayúsculas. Informa si está llena. Al buscar, indica la primera posición (base cero), o No encontrado. Se admiten opciones enteras.

## Objetivo y razonamiento

Gestionar amigos o compañeros con un array de capacidad fija.

El array y cantidad se crean una vez fuera del menú. cantidad separa ocupación de capacidad. Tras leer opcion con nextInt consumimos el resto de línea para poder leer un nombre completo. Antes de añadir, buscamos duplicados solo en posiciones ocupadas. Después de guardar se aumenta cantidad. El caso listar no modifica la agenda.

## Traza o comprobación manual

| Operación | Array ocupado | cantidad | Resultado |
| --- | --- | --- | --- |
| Añadir Vega | Vega | 1 | Añadido |
| Añadir Leo | Vega, Leo | 2 | Añadido |
| Añadir vega | Vega, Leo | 2 | Duplicado |
| Buscar LEO | Vega, Leo | 2 | Posición 1 |
| Buscar Sol | Vega, Leo | 2 | No encontrado |

## Código completo

Abre [E24AgendaDeTaller.java](../src/ejercicios/E24AgendaDeTaller.java). La clase tiene `main`, imports y paquete: no necesita completar fragmentos. Lee en orden: datos de entrada, preparación, decisiones o repeticiones y salida.

## Pruebas y límites

Entrada:

```text
2
0
```

Salida:

```text
1 Añadir | 2 Listar | 3 Buscar | 0 Salir
Agenda vacía
1 Añadir | 2 Listar | 3 Buscar | 0 Salir
Fin
```

Entrada:

```text
1
Vega
1
vega
3
VEGA
0
```

Salida:

```text
1 Añadir | 2 Listar | 3 Buscar | 0 Salir
Añadido
1 Añadir | 2 Listar | 3 Buscar | 0 Salir
Duplicado
1 Añadir | 2 Listar | 3 Buscar | 0 Salir
Posición 0
1 Añadir | 2 Listar | 3 Buscar | 0 Salir
Fin
```

Salvo que el enunciado indique otro comportamiento, las lecturas numéricas presuponen tokens con formato correcto y suficientes datos para completar la tarea. Los rangos se validan como indica cada ejercicio. La validación de formato y EOF se desarrolla en el [tema de entrada](../../docs/03-entrada-y-salida/validacion-y-errores.md); no se ocultan excepciones con manejo avanzado.

## Antes de mirar la solución otra vez

Cambia un dato de la prueba y predice la salida. Identifica qué variable conserva información, qué instrucción se repite y qué condición termina el proceso. Provoca un error lógico cambiando la posición de una inicialización y explica el resultado, sin conservar esa versión como solución.

[Tema y práctica](../../docs/10-arrays/README.md) · [Índice de ejercicios](../README.md)

# Soluciones orientativas: Variables, tipos y constantes

Estas respuestas son propias y no correcciones del profesor. Úsalas después de intentar los ejercicios; puede haber más de una solución correcta.

## 1. Ficha de inventario

Una elección posible es nombre="Tornillo", categoria='T', unidades=12, peso=0.025 y disponible=true. CAPACIDAD no puede reasignarse; el resto sí con valores compatibles. El peso se declara aproximado.

**Resultado de referencia:** Una ficha con valores coherentes y una explicación de por qué nombre e inicial no tienen el mismo tipo.

## 2. Dos medias parecidas

11/4 se evalúa como división entera y produce 2 antes de convertirse a double. 11/4.0 fuerza división decimal. (double)11/4 o 11/(double)4 conserva la parte fraccionaria.

**Resultado de referencia:** a=2.0, b=2.75, c=2.0.

## 3. Etiqueta numérica

int numero = Integer.parseInt(texto.trim()); numero += 7; String etiqueta = "Caja-" + String.valueOf(numero);. Un casting no puede interpretar el texto "28" como entero.

**Resultado de referencia:** Caja-35; el texto no numérico causa NumberFormatException al parsear.

[Volver a los enunciados](../../docs/02-variables-y-tipos/ejercicios.md) · [Índice de ejercicios](../README.md)

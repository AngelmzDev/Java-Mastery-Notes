# Recorrer texto y comprobar palíndromos

> Apunte didáctico propio, preparado para el alcance básico indicado. No se atribuye a una corrección del profesor.

## Una cadena como secuencia de posiciones

Recorrer significa visitar posiciones sistemáticamente. En un recorrido directo empezamos en 0 y seguimos mientras `i < texto.length()`. En el inverso empezamos en `length() - 1` y continuamos mientras `i >= 0`. Una cadena vacía tiene longitud 0: su recorrido inverso comienza en -1 y no entra.

**Ejemplo didáctico propio; fragmento dentro de `main`:**

```java
String palabra = "luz";
String invertida = "";
for (int i = palabra.length() - 1; i >= 0; i--) {
    invertida += palabra.charAt(i);
}
System.out.println(invertida); // zul
```

`invertida` nace fuera del bucle para conservar lo construido. En cada vuelta se añade un carácter: índice 2 → `z`; 1 → `zu`; 0 → `zul`. Al pasar a -1 la condición es falsa. Si inicializamos `invertida` dentro, solo conservaríamos la última letra. La concatenación repetida es adecuada para estos textos pequeños; no pretendemos optimizar textos enormes.

## Comparar extremos sin construir otra cadena

```java
String palabra = "radar";
boolean palindromo = true;
int izquierda = 0;
int derecha = palabra.length() - 1;
while (izquierda < derecha && palindromo) {
    if (palabra.charAt(izquierda) != palabra.charAt(derecha)) {
        palindromo = false;
    }
    izquierda++;
    derecha--;
}
System.out.println(palindromo);
```

| Vuelta | Izquierda | Derecha | Comparación | Bandera |
| --- | --- | --- | --- | --- |
| 1 | 0 | 4 | r = r | true |
| 2 | 1 | 3 | a = a | true |
| Fin | 2 | 2 | No hace falta comparar el centro | true |

Para `ramar`, la bandera pasa a falsa en la segunda comparación y se termina. Una comparación correcta posterior nunca debe devolver la bandera a verdadera: basta una discrepancia para descartar el palíndromo. La condición utiliza `&&` para exigir posiciones pendientes y ausencia de fallo.

## Definir las reglas antes de programar

¿Importan mayúsculas? ¿Quitamos espacios? ¿Aceptamos una cadena vacía? Para estos ejemplos, el texto se compara exactamente y la cadena vacía se considera palíndroma por no tener discrepancias. Si el ejercicio pide palabras no vacías, hay que rechazarlas antes. Para frases sencillas podemos normalizar antes del recorrido, pero no eliminamos acentos de forma implícita ni tratamos todos los caracteres Unicode.

## Practica

Cuenta cuántas veces aparece una letra en una palabra. Declara un contador fuera del bucle y compáralo dentro con cada `charAt(i)`. Prueba que la letra no aparezca, aparezca una vez y aparezca varias. Relación: [contadores y banderas](../08-logica-programacion/contadores-acumuladores-y-extremos.md).

---

[Índice del tema](README.md) · [Ejercicios para practicar](ejercicios.md) · [Índice general](../../README.md)

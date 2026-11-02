package ejercicios;

import java.util.Scanner;
import java.util.Locale;

/** Ejemplo didáctico propio; ver enunciado y límites en el solucionario. */
public class E19PalabraSimetrica {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        String palabra = entrada.nextLine().toLowerCase(Locale.ROOT);
        boolean valida = !palabra.isEmpty();
        for (int i = 0; i < palabra.length(); i++) {
            char letra = palabra.charAt(i);
            if (letra < 'a' || letra > 'z') valida = false;
        }
        if (!valida) {
            System.out.println("Palabra no válida");
        } else {
            boolean palindromo = true;
            int izquierda = 0, derecha = palabra.length() - 1;
            while (izquierda < derecha && palindromo) {
                if (palabra.charAt(izquierda) != palabra.charAt(derecha)) palindromo = false;
                izquierda++;
                derecha--;
            }
            System.out.println(palindromo ? "Palíndromo" : "No es palíndromo");
        }
    }
}

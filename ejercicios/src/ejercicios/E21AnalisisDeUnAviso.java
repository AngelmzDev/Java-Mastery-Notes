package ejercicios;

import java.util.Scanner;
import java.util.Locale;

/** Ejemplo didáctico propio; ver enunciado y límites en el solucionario. */
public class E21AnalisisDeUnAviso {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        String texto = entrada.nextLine().trim();
        if (texto.isEmpty()) System.out.println("Sin texto");
        else {
            String[] palabras = texto.split("\\s+");
            String larga = palabras[0];
            for (String palabra : palabras) {
                if (palabra.length() > larga.length()) larga = palabra;
            }
            int vocales = 0;
            String minusculas = texto.toLowerCase(Locale.ROOT);
            for (int i = 0; i < minusculas.length(); i++) {
                if ("aeiou".indexOf(minusculas.charAt(i)) >= 0) vocales++;
            }
            System.out.println("Palabras " + palabras.length + " Vocales " + vocales + " Larga " + larga);
        }
    }
}

package ejercicios;

import java.util.Scanner;
import java.util.Locale;

/** Ejemplo didáctico propio; ver enunciado y límites en el solucionario. */
public class E06LetraDeUnRotulo {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        String texto = entrada.nextLine();
        boolean valida = texto.length() == 1;
        if (valida) {
            char letra = texto.charAt(0);
            valida = (letra >= 'a' && letra <= 'z') || (letra >= 'A' && letra <= 'Z');
        }
        if (!valida) {
            System.out.println("Carácter no válido");
        } else {
            char letra = texto.toLowerCase(Locale.ROOT).charAt(0);
            switch (letra) {
                case 'a', 'e', 'i', 'o', 'u' -> System.out.println("Vocal");
                default -> System.out.println("Consonante");
            }
        }
    }
}

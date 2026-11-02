package ejercicios;

import java.util.Scanner;
import java.util.Locale;

/** Ejemplo didáctico propio; ver enunciado y límites en el solucionario. */
public class E18RotuloInverso {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        String texto = entrada.nextLine();
        String inverso = "";
        for (int i = texto.length() - 1; i >= 0; i--) inverso += texto.charAt(i);
        System.out.println(inverso);
    }
}

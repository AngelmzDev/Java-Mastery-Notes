package ejercicios;

import java.util.Scanner;
import java.util.Locale;

/** Ejemplo didáctico propio; ver enunciado y límites en el solucionario. */
public class E14DosDadosDeMesa {
    public static void main(String[] args) {
        int dado1 = 1 + (int) (Math.random() * 6);
        int dado2 = 1 + (int) (Math.random() * 6);
        System.out.println(dado1 + " " + dado2 + " " + (dado1 + dado2));
    }
}

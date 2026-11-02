package ejercicios;

import java.util.Scanner;
import java.util.Locale;

/** Ejemplo didáctico propio; ver enunciado y límites en el solucionario. */
public class E15SorteoDeTaquillas {
    public static void main(String[] args) {
        final int MINIMO = 20;
        final int MAXIMO = 25;
        for (int i = 0; i < 10; i++) {
            int taquilla = MINIMO + (int) (Math.random() * (MAXIMO - MINIMO + 1));
            System.out.println(taquilla);
        }
    }
}

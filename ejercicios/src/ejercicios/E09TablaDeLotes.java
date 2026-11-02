package ejercicios;

import java.util.Scanner;
import java.util.Locale;

/** Ejemplo didáctico propio; ver enunciado y límites en el solucionario. */
public class E09TablaDeLotes {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        int lote = entrada.nextInt();
        if (lote < 1 || lote > 1000) {
            System.out.println("Lote no válido");
        } else {
            for (int i = 1; i <= 10; i++) {
                System.out.println(lote + " x " + i + " = " + lote * i);
            }
        }
    }
}

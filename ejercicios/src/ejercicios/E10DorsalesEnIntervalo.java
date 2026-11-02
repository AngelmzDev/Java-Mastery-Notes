package ejercicios;

import java.util.Scanner;
import java.util.Locale;

/** Ejemplo didáctico propio; ver enunciado y límites en el solucionario. */
public class E10DorsalesEnIntervalo {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        int inicio = entrada.nextInt();
        int fin = entrada.nextInt();
        if (inicio < 0 || fin > 10000 || inicio > fin) {
            System.out.println("Intervalo no válido");
        } else {
            boolean hayPares = false;
            for (int dorsal = inicio; dorsal <= fin; dorsal++) {
                if (dorsal % 2 == 0) {
                    System.out.println(dorsal);
                    hayPares = true;
                }
            }
            if (!hayPares) System.out.println("Sin pares");
        }
    }
}

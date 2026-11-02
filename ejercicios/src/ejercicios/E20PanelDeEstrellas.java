package ejercicios;

import java.util.Scanner;
import java.util.Locale;

/** Ejemplo didáctico propio; ver enunciado y límites en el solucionario. */
public class E20PanelDeEstrellas {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        int lado = entrada.nextInt();
        if (lado < 1 || lado > 8) System.out.println("Lado no válido");
        else {
            for (int fila = 1; fila <= lado; fila++) {
                for (int columna = 1; columna <= lado; columna++) System.out.print("*");
                System.out.println();
            }
            System.out.println("---");
            for (int fila = 1; fila <= lado; fila++) {
                for (int columna = 1; columna <= fila; columna++) System.out.print("*");
                System.out.println();
            }
        }
    }
}

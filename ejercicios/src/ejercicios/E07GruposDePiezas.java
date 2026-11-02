package ejercicios;

import java.util.Scanner;
import java.util.Locale;

/** Ejemplo didáctico propio; ver enunciado y límites en el solucionario. */
public class E07GruposDePiezas {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        int piezas = entrada.nextInt();
        if (piezas < 0) System.out.println("Cantidad no válida");
        else System.out.println(piezas % 2 == 0 ? "Par" : "Impar");
    }
}

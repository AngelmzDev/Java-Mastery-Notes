package ejercicios;

import java.util.Scanner;
import java.util.Locale;

/** Ejemplo didáctico propio; ver enunciado y límites en el solucionario. */
public class E08OrdenDeTresTiempos {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        int a = entrada.nextInt();
        int b = entrada.nextInt();
        int c = entrada.nextInt();
        if (a > b) { int auxiliar = a; a = b; b = auxiliar; }
        if (b > c) { int auxiliar = b; b = c; c = auxiliar; }
        if (a > b) { int auxiliar = a; a = b; b = auxiliar; }
        System.out.println(a + " " + b + " " + c);
    }
}

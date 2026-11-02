package ejercicios;

import java.util.Scanner;
import java.util.Locale;

/** Ejemplo didáctico propio; ver enunciado y límites en el solucionario. */
public class E22FactorialDeUnaCantidad {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        int numero = entrada.nextInt();
        if (numero < 0 || numero > 20) System.out.println("Número no válido");
        else {
            long factorial = 1;
            for (int factor = 2; factor <= numero; factor++) factorial *= factor;
            System.out.println(factorial);
        }
    }
}

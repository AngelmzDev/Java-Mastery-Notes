package ejercicios;

import java.util.Scanner;
import java.util.Locale;

/** Ejemplo didáctico propio; ver enunciado y límites en el solucionario. */
public class E11PotenciaPorProductos {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        int base = entrada.nextInt();
        int exponente = entrada.nextInt();
        if (base < -10 || base > 10 || exponente < 0 || exponente > 18) {
            System.out.println("Datos no válidos");
        } else {
            long resultado = 1;
            for (int i = 0; i < exponente; i++) resultado *= base;
            System.out.println(resultado);
        }
    }
}

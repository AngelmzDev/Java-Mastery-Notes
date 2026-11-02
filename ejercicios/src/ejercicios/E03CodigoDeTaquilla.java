package ejercicios;

import java.util.Scanner;
import java.util.Locale;

/** Ejemplo didáctico propio; ver enunciado y límites en el solucionario. */
public class E03CodigoDeTaquilla {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        int codigo = entrada.nextInt();
        if (codigo < 100 || codigo > 999) {
            System.out.println("Código no válido");
        } else {
            int centenas = codigo / 100;
            int decenas = codigo % 100 / 10;
            int unidades = codigo % 10;
            System.out.println(centenas + " " + decenas + " " + unidades);
        }
    }
}

package ejercicios;

import java.util.Scanner;
import java.util.Locale;

/** Ejemplo didáctico propio; ver enunciado y límites en el solucionario. */
public class E17ConversorDeBases {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        int origen = entrada.nextInt();
        int destino = entrada.nextInt();
        String texto = entrada.next().toUpperCase(Locale.ROOT);
        String cifras = "0123456789ABCDEF";
        boolean valido = (origen == 2 || origen == 8 || origen == 10 || origen == 16)
                && (destino == 2 || destino == 8 || destino == 10 || destino == 16)
                && !texto.isEmpty() && texto.length() <= 7;
        int decimal = 0;
        for (int i = 0; i < texto.length() && valido; i++) {
            int cifra = cifras.indexOf(texto.charAt(i));
            if (cifra < 0 || cifra >= origen) valido = false;
            else decimal = decimal * origen + cifra;
        }
        if (!valido) {
            System.out.println("Datos no válidos");
        } else {
            String resultado = "";
            int pendiente = decimal;
            do {
                int resto = pendiente % destino;
                resultado = cifras.charAt(resto) + resultado;
                pendiente /= destino;
            } while (pendiente > 0);
            System.out.println(resultado);
        }
    }
}

package ejercicios;

import java.util.Scanner;
import java.util.Locale;

/** Ejemplo didáctico propio; ver enunciado y límites en el solucionario. */
public class E01PresupuestoDeMaterial {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in).useLocale(Locale.US);
        double precio = entrada.nextDouble();
        int cantidad = entrada.nextInt();
        final double TASA_IVA = 0.21;
        if (precio < 0 || cantidad < 0) {
            System.out.println("Datos no válidos");
        } else {
            double base = precio * cantidad;
            double iva = base * TASA_IVA;
            double total = base + iva;
            System.out.printf(Locale.US, "Base %.2f IVA %.2f Total %.2f%n", base, iva, total);
        }
    }
}

package ejercicios;

import java.util.Scanner;
import java.util.Locale;

/** Ejemplo didáctico propio; ver enunciado y límites en el solucionario. */
public class E12TemperaturasDeInvernadero {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in).useLocale(Locale.US);
        int cantidad = entrada.nextInt();
        if (cantidad < 1 || cantidad > 100) {
            System.out.println("Cantidad no válida");
        } else {
            int aceptadas = 0;
            double suma = 0;
            double maxima = 0;
            double minima = 0;
            while (aceptadas < cantidad) {
                double temperatura = entrada.nextDouble();
                if (temperatura >= -50 && temperatura <= 60) {
                    if (aceptadas == 0) { maxima = temperatura; minima = temperatura; }
                    else {
                        if (temperatura > maxima) maxima = temperatura;
                        if (temperatura < minima) minima = temperatura;
                    }
                    suma += temperatura;
                    aceptadas++;
                } else System.out.println("Medida rechazada");
            }
            System.out.printf(Locale.US, "Media %.2f Máxima %.2f Mínima %.2f%n", suma / aceptadas, maxima, minima);
        }
    }
}

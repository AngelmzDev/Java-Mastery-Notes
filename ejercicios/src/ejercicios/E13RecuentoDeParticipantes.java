package ejercicios;

import java.util.Scanner;
import java.util.Locale;

/** Ejemplo didáctico propio; ver enunciado y límites en el solucionario. */
public class E13RecuentoDeParticipantes {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in).useLocale(Locale.US);
        int cantidad = entrada.nextInt();
        if (cantidad < 1 || cantidad > 50) {
            System.out.println("Cantidad no válida");
        } else {
            int fichas = 0, aprobadas = 0, sueldosAltos = 0;
            while (fichas < cantidad) {
                int nota = entrada.nextInt();
                double sueldo = entrada.nextDouble();
                if (nota >= 0 && nota <= 10 && sueldo >= 0 && sueldo <= 1000000) {
                    if (nota >= 5) aprobadas++;
                    if (sueldo > 1800) sueldosAltos++;
                    fichas++;
                } else System.out.println("Ficha rechazada");
            }
            System.out.println("Aprobadas " + aprobadas + " Sueldos altos " + sueldosAltos);
        }
    }
}

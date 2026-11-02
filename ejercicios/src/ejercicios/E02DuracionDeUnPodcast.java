package ejercicios;

import java.util.Scanner;
import java.util.Locale;

/** Ejemplo didáctico propio; ver enunciado y límites en el solucionario. */
public class E02DuracionDeUnPodcast {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        int segundos = entrada.nextInt();
        if (segundos < 0) {
            System.out.println("Duración no válida");
        } else {
            int horas = segundos / 3600;
            int resto = segundos % 3600;
            int minutos = resto / 60;
            int finales = resto % 60;
            System.out.println(horas + "h " + minutos + "m " + finales + "s");
        }
    }
}

package ejercicios;

import java.util.Scanner;
import java.util.Locale;

/** Ejemplo didáctico propio; ver enunciado y límites en el solucionario. */
public class E04NivelesDeUnaPrueba {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        int nota = entrada.nextInt();
        if (nota < 0 || nota > 10) System.out.println("Puntuación no válida");
        else if (nota < 5) System.out.println("En progreso");
        else if (nota < 7) System.out.println("Superado");
        else if (nota < 9) System.out.println("Destacado");
        else System.out.println("Excelente");
    }
}

package ejercicios;

import java.util.Scanner;
import java.util.Locale;

/** Ejemplo didáctico propio; ver enunciado y límites en el solucionario. */
public class E23MenuDeConsultas {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        int opcion;
        do {
            System.out.println("1 Saludar | 2 Cuadrado | 0 Salir");
            opcion = entrada.nextInt();
            switch (opcion) {
                case 1 -> System.out.println("Hola");
                case 2 -> {
                    int numero = entrada.nextInt();
                    if (numero < -1000 || numero > 1000) System.out.println("Número no válido");
                    else System.out.println(numero * numero);
                }
                case 0 -> System.out.println("Fin");
                default -> System.out.println("Opción no válida");
            }
        } while (opcion != 0);
    }
}

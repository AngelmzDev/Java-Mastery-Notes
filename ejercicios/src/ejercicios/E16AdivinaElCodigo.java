package ejercicios;

import java.util.Scanner;
import java.util.Locale;

/** Ejemplo didáctico propio; ver enunciado y límites en el solucionario. */
public class E16AdivinaElCodigo {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        int secreto = 1 + (int) (Math.random() * 20);
        int intentos = 0;
        boolean terminado = false;
        while (!terminado && entrada.hasNextInt()) {
            int propuesta = entrada.nextInt();
            if (propuesta == 0) {
                System.out.println("Abandono");
                terminado = true;
            } else if (propuesta < 1 || propuesta > 20) {
                System.out.println("Propuesta no válida");
            } else {
                intentos++;
                if (propuesta == secreto) {
                    System.out.println("Acertaste en " + intentos);
                    terminado = true;
                } else if (propuesta < secreto) System.out.println("Mayor");
                else System.out.println("Menor");
            }
        }
    }
}

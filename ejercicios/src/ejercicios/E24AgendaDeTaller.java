package ejercicios;

import java.util.Scanner;
import java.util.Locale;

/** Ejemplo didáctico propio; ver enunciado y límites en el solucionario. */
public class E24AgendaDeTaller {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        String[] nombres = new String[5];
        int cantidad = 0;
        int opcion;
        do {
            System.out.println("1 Añadir | 2 Listar | 3 Buscar | 0 Salir");
            opcion = entrada.nextInt();
            entrada.nextLine();
            switch (opcion) {
                case 1 -> {
                    String nuevo = entrada.nextLine().trim();
                    boolean duplicado = false;
                    for (int i = 0; i < cantidad; i++) {
                        if (nombres[i].equalsIgnoreCase(nuevo)) duplicado = true;
                    }
                    if (nuevo.isEmpty()) System.out.println("Nombre vacío");
                    else if (duplicado) System.out.println("Duplicado");
                    else if (cantidad == nombres.length) System.out.println("Agenda llena");
                    else {
                        nombres[cantidad] = nuevo;
                        cantidad++;
                        System.out.println("Añadido");
                    }
                }
                case 2 -> {
                    if (cantidad == 0) System.out.println("Agenda vacía");
                    for (int i = 0; i < cantidad; i++) System.out.println(i + ": " + nombres[i]);
                }
                case 3 -> {
                    String buscado = entrada.nextLine().trim();
                    int posicion = -1;
                    for (int i = 0; i < cantidad && posicion == -1; i++) {
                        if (nombres[i].equalsIgnoreCase(buscado)) posicion = i;
                    }
                    System.out.println(posicion == -1 ? "No encontrado" : "Posición " + posicion);
                }
                case 0 -> System.out.println("Fin");
                default -> System.out.println("Opción no válida");
            }
        } while (opcion != 0);
    }
}

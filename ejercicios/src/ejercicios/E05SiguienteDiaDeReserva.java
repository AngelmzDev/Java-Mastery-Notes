package ejercicios;

import java.util.Scanner;
import java.util.Locale;

/** Ejemplo didáctico propio; ver enunciado y límites en el solucionario. */
public class E05SiguienteDiaDeReserva {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        int dia = entrada.nextInt();
        int mes = entrada.nextInt();
        int anio = entrada.nextInt();
        boolean valida = anio >= 1 && anio <= 9998 && mes >= 1 && mes <= 12;
        int diasMes = 31;
        if (valida) {
            boolean bisiesto = anio % 400 == 0 || (anio % 4 == 0 && anio % 100 != 0);
            switch (mes) {
                case 4, 6, 9, 11 -> diasMes = 30;
                case 2 -> diasMes = bisiesto ? 29 : 28;
                default -> diasMes = 31;
            }
            valida = dia >= 1 && dia <= diasMes;
        }
        if (!valida) {
            System.out.println("Fecha no válida");
        } else {
            dia++;
            if (dia > diasMes) {
                dia = 1;
                mes++;
                if (mes > 12) {
                    mes = 1;
                    anio++;
                }
            }
            System.out.println(dia + "/" + mes + "/" + anio);
        }
    }
}

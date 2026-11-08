# Soluciones razonadas: mapas

Los programas son completos e independientes. Guarda cada uno en el archivo con el nombre de su clase. El orden de impresión de las entradas no forma parte del resultado esperado.

## 1. Material de un laboratorio

```java
import java.util.Enumeration;
import java.util.Hashtable;

public class MaterialLaboratorio {
    public static void main(String[] args) {
        Hashtable<String, Integer> material = new Hashtable<>();
        material.put("MI-21", 14);
        material.put("TU-63", 5);
        material.put("PL-04", 14);

        Integer anterior = material.put("TU-63", 9);
        System.out.println("Anterior: " + anterior);
        System.out.println("Existe MI-21: " + material.containsKey("MI-21"));
        System.out.println("Hay cantidad 14: " + material.containsValue(14));

        Integer consulta = material.get("ZZ-00");
        if (consulta == null) {
            System.out.println("Material no registrado");
        } else {
            System.out.println("Cantidad: " + consulta);
        }

        int total = 0;
        Enumeration<Integer> cantidades = material.elements();
        while (cantidades.hasMoreElements()) {
            total += cantidades.nextElement();
        }
        System.out.println("Total: " + total);
        material.remove("PL-04");
        System.out.println("Entradas finales: " + material.size());
    }
}
```

La actualización sustituye 5 por 9 sin añadir una clave. La suma es 14 + 9 + 14 = 37; se calcula antes de borrar. La consulta ausente se mantiene en un `Integer` y se comprueba antes de usarla como cantidad.

## 2. Registro de préstamos

```java
import java.util.HashMap;
import java.util.Map;

public class RegistroPrestamos {
    public static void main(String[] args) {
        String[] movimientos = {
            "Trípode", "Foco", "Trípode", "Micrófono", "Foco", "Trípode"
        };
        Map<String, Integer> prestamos = contar(movimientos);
        for (Map.Entry<String, Integer> registro : prestamos.entrySet()) {
            System.out.println(registro.getKey() + ": " + registro.getValue());
        }
        System.out.println("Reflector: " + prestamos.getOrDefault("Reflector", 0));
        System.out.println("Categorías: " + prestamos.size());
    }

    public static Map<String, Integer> contar(String[] movimientos) {
        Map<String, Integer> resultado = new HashMap<>();
        for (String nombre : movimientos) {
            int cantidad = resultado.getOrDefault(nombre, 0);
            resultado.put(nombre, cantidad + 1);
        }
        return resultado;
    }
}
```

El método devuelve un mapa nuevo por llamada. Cada movimiento incrementa una categoría; las claves repetidas acumulan el contador. Con un array vacío devuelve un mapa vacío, y con cuatro repeticiones del mismo nombre guarda una clave con valor cuatro. Se presupone un array existente y nombres no nulos.

## 3. Retirar tareas breves

```java
import java.util.Hashtable;
import java.util.Iterator;
import java.util.Map;

public class RetirarTareas {
    public static void main(String[] args) {
        Hashtable<String, Integer> tareas = new Hashtable<>();
        tareas.put("Preparar sobres", 8);
        tareas.put("Diseñar portada", 34);
        tareas.put("Revisar títulos", 12);
        tareas.put("Imprimir pruebas", 20);

        int eliminadas = retirarMenores(tareas, 15);
        System.out.println("Eliminadas: " + eliminadas);
        System.out.println("Restantes: " + tareas.size());
        System.out.println("Permanece impresión: " + tareas.containsKey("Imprimir pruebas"));
    }

    public static int retirarMenores(Map<String, Integer> tareas, int limite) {
        int eliminadas = 0;
        Iterator<Map.Entry<String, Integer>> recorrido = tareas.entrySet().iterator();
        while (recorrido.hasNext()) {
            Map.Entry<String, Integer> tarea = recorrido.next();
            if (tarea.getValue() < limite) {
                recorrido.remove();
                eliminadas++;
            }
        }
        return eliminadas;
    }
}
```

El método modifica el mapa recibido. El borrado se realiza mediante el iterador, que conoce la entrada actual. Una `Enumeration` no ofrece esta operación de borrado y modificar la tabla mientras se enumera deja el resultado del recorrido sin definir.

En un mapa vacío el bucle no entra y devuelve cero. Si todas las tareas duran menos del límite, el mapa termina vacío; si ninguna cumple la condición, se conserva intacto. Una duración igual al límite se mantiene porque la comparación es estricta. Se presupone que las duraciones son no nulas y que no hay modificaciones concurrentes.

[Volver a los enunciados](ejercicios.md) · [Índice del bloque](README.md)

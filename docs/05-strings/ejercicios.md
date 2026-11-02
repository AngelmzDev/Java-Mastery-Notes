# Práctica: Cadenas y caracteres

Variantes didácticas propias: cambian los contextos y datos, conservando los objetivos de este bloque. El estado de corrección en clase no está confirmado.

**Cómo trabajar:** predice el resultado, escribe los pasos, resuelve, prueba los límites y explica una decisión del código. En las tareas de entorno o Git, documenta las acciones y lo que observas.

## 1. Buscador de extensión

**Objetivo:** Combinar trim, búsquedas y sufijos.

Lee un nombre de archivo con posibles espacios exteriores. Comprueba si termina en .java ignorando mayúsculas. Si cumple, muestra la parte anterior a la extensión y la posición del último punto; si no, muestra Extensión no admitida.

**Comprueba:** Con " Informe.final.JAVA " muestra Informe.final y posición 13.

<details>
<summary>Pista</summary>

Normaliza solo para comparar; conserva el texto original limpio para mostrar.

</details>

## 2. Cuenta una letra

**Objetivo:** Recorrer sin salir de los límites.

Lee una palabra y una letra de un solo carácter. Cuenta coincidencias sin distinguir mayúsculas. Valida la longitud del segundo dato antes de charAt(0). Prueba una letra ausente, una repetida y una palabra vacía.

**Comprueba:** Con Banana y a se obtiene 3; con sol y z, 0; con palabra vacía, 0.

<details>
<summary>Pista</summary>

El contador nace fuera del for y se actualiza solo al coincidir.

</details>

## 3. Palabra de espejo

**Objetivo:** Razonar con dos índices.

Comprueba si una palabra no vacía es palíndroma ignorando mayúsculas, sin invertirla. En esta variante se usan letras a..z y se rechazan otros caracteres. Traza primero las comparaciones de reconocer y de nivel.

**Comprueba:** reconocer y nivel son palíndromos; casa no; vacío es inválido.

<details>
<summary>Pista</summary>

Compara izquierda y derecha y acerca ambos extremos.

</details>

## Aplicaciones resueltas relacionadas

Consulta estas soluciones después de intentar tu variante:

- [Rótulo al revés](../../ejercicios/soluciones/18-rotulo-inverso.md)
- [Palabra simétrica](../../ejercicios/soluciones/19-palabra-simetrica.md)
- [Análisis de un aviso](../../ejercicios/soluciones/21-analisis-de-un-aviso.md)

[Soluciones de las tres actividades](../../ejercicios/practica-soluciones/05-strings.md) · [Volver al tema](README.md) · [Índice de ejercicios](../../ejercicios/README.md)

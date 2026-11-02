# Soluciones orientativas: Cadenas y caracteres

Estas respuestas son propias y no correcciones del profesor. Úsalas después de intentar los ejercicios; puede haber más de una solución correcta.

## 1. Buscador de extensión

limpio=entrada.trim(); si limpio.toLowerCase(Locale.ROOT).endsWith(".java"), ultimo=limpio.lastIndexOf('.') y substring(0,ultimo). Informe tiene 7 letras, el punto de Informe.final está en 7 y el de la extensión en 13.

**Resultado de referencia:** Con " Informe.final.JAVA " muestra Informe.final y posición 13.

## 2. Cuenta una letra

Normaliza ambos textos; comprueba que la letra tiene longitud 1; recorre i=0 mientras i<palabra.length(). Compara char con ==. No uses <=length ni reinicies el contador dentro.

**Resultado de referencia:** Con Banana y a se obtiene 3; con sol y z, 0; con palabra vacía, 0.

## 3. Palabra de espejo

Inicializa izquierda=0, derecha=length-1 y bandera=true. Mientras izquierda<derecha y bandera, compara; ante diferencia cambia a false. Incrementa izquierda y decrementa derecha. No restaures true en parejas posteriores.

**Resultado de referencia:** reconocer y nivel son palíndromos; casa no; vacío es inválido.

[Volver a los enunciados](../../docs/05-strings/ejercicios.md) · [Índice de ejercicios](../README.md)

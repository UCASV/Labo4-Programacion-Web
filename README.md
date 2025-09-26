# Labo4-Programacion-Web
Laboratorio #3 de Programación web, Implementación de JS en desarrollo web

## Preguntas 
### ¿Qué ocurre en cada caso presentado anteriormente con los operadores y porqué JS me permite esto?
JavaScript es un lenguaje de tipado débil (flexible) que, al encontrar operadores como la suma (+), resta (-), etc., entre tipos de datos diferentes (ej., un número y un texto), intenta automáticamente convertirlos para resolver la operación:

Operador +: Si hay un string involucrado, el operador prioriza la concatenación (unión de texto), forzando al otro valor a convertirse en texto.

Operadores -, *, /: Estos son estrictamente matemáticos, por lo que fuerzan la conversión del texto a número para realizar el cálculo.

### ¿El comportamiento de los flujos de control es similar a otros lenguajes y ambientes de desarrollo?
Sí, es similar. El comportamiento de los flujos de control en JavaScript es universal y consistente con la mayoría de los demás lenguajes de programación (como Java, Python, C++, etc.).

Esto se debe a que las estructuras de control se basan en la lógica de programación fundamental:

Condicionales (if/else, switch): Permiten la toma de decisiones (bifurcación) basándose en si una condición es verdadera o falsa.

Bucles (for, while): Permiten la iteración (repetición) de un bloque de código hasta que se cumpla una condición.

La única diferencia entre JavaScript y otros lenguajes es la sintaxis (cómo se escriben las palabras clave y se usan los paréntesis o llaves), no la lógica fundamental de cómo se dirige el flujo del programa.
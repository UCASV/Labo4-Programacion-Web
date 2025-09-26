function ordenar(arr) {
    const nuevoArray = [...arr]
    for (let i = 0; i < nuevoArray.length; i++) {
        for(let j = 0; j < nuevoArray.length - i - 1; j++) {
            if(nuevoArray[j] > nuevoArray[(j + 1)]) {
                let temporal = nuevoArray[j];
                nuevoArray[j] = nuevoArray[j + 1];
                nuevoArray[j + 1] = temporal;
            }
        }
    }
    return nuevoArray;
}

console.log(ordenar([14, 23, 99, 874, 93, 12]));



// Funcion para saber si un numero es par
function esPar(numero) {
    return numero % 2 === 0;
}

console.log(esPar(7)); // regresa false
console.log(esPar(10)); // regresa true



//Funcion de calcular dias de crecimiento 
function calcularDiasCrecimiento(velocidadCrecimiento, velocidadDecrecimiento, alturaDeseada) {
    let altura = 0;
    let dias = 0;

    while (altura < alturaDeseada) {
        altura += velocidadCrecimiento;
        dias++;

        if (altura >= alturaDeseada) {
            return dias;
        }

        altura -= velocidadDecrecimiento;
    }

    return dias;
}

// Ejemplo
console.log("Días necesarios (C:10, D:3, A:25):", calcularDiasCrecimiento(10, 3, 25));
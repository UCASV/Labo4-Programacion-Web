function obtenerActividadDelDia(diaSemana) {
    const dia = diaSemana;
    let actividad = "";

    switch (dia) {
        case "lunes":
            actividad = "Atender a un cliente especifico.";
            break;
        case "martes":
            actividad = "Visitar una agencia fuera de la ciudad.";
            break;
        case "miercoles":
            actividad = "Llevar a mi hija al ballet (bale).";
            break;
        case "jueves":
            actividad = "Priorizar las entregas de desarrollo.";
            break;
        case "viernes":
            actividad = "Atender problemas de manera remota.";
            break;
        case "sabado":
            actividad = "Hacer lo que mi esposa quiera.";
            break;
        case "domingo":
            actividad = "Dia libre......";
            break;
        default:
            actividad = `"${diaSemana}" no es un dia de la semana valido.`;
            return {
                mensajeCompleto: `ERROR: ${actividad}`,
                esValido: false
            };
    }

    const mensajeCompleto = `HOY es ${diaSemana}. Lo que debes realizar es: ${actividad}`;
    
    return { 
        mensajeCompleto: mensajeCompleto, 
        esValido: true 
    };
}

//Funcion para mostrar el mensaje en el mismo <div id="resultado">
function mostrarActividad() {
    const diaInput = document.getElementById('diaInput').value;
    const resultadoDiv = document.getElementById('resultado');

    if (!diaInput) {
        resultadoDiv.innerHTML = "<p> Por favor, introduce el dia de la semana.</p>";
        resultadoDiv.classList.add('no-activity');
        resultadoDiv.classList.remove('resultado-box');
        return;
    }

    const resultado = obtenerActividadDelDia(diaInput);

    resultadoDiv.innerHTML = `<p>${resultado.mensajeCompleto}</p>`;
    
    if (resultado.esValido) {
        resultadoDiv.classList.add('resultado-box');
        resultadoDiv.classList.remove('no-activity');
    } else {
        resultadoDiv.classList.add('no-activity');
        resultadoDiv.classList.remove('resultado-box');
    }
}
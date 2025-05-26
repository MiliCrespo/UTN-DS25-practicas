/*Desarrollemos un portero eléctrico:
Tendrá dos visores, de dos posiciones el piso y una posición para dpto. Los pisos van del 00 al 48. Los dptos, del 1 al 6.
El botón llamar, muestra el mensaje de abajo. El botón borrar limpia los visores y el mensaje de abajo. 
Si se hace referencia a un piso y/o dpto que no existe, mostrar el error en el visor de abajo.*/

// Obtener elementos
const piso = document.getElementById("piso");
const dpto = document.getElementById("dpto");
const llamar = document.getElementById("botonLlamar");
const borrar = document.getElementById("botonBorrar");
const mensaje = document.getElementById("mensaje");

// Evento para el botón Llamar
llamar.addEventListener("click", funcionLlamar);

function funcionLlamar() {
    const nroPiso = parseInt(piso.value);
    const nroDpto = parseInt(dpto.value);

    // Validar piso
    if (isNaN(nroPiso) || nroPiso < 0 || nroPiso > 48) {
        mensaje.textContent = "Error: Piso inválido (00-48)";
        return;
    }

    // Validar departamento
    if (isNaN(nroDpto) || nroDpto < 1 || nroDpto > 6) {
        mensaje.textContent = "Error: Dpto inválido (1-6)";
        return;
    }
    mensaje.textContent = ` Llamando a Piso ${nroPiso.toString().padStart(2, "0")}, Dpto ${nroDpto}`;
}

borrar.addEventListener("click", funcionBorrar);

function funcionBorrar() {
    piso.value = "0";
    dpto.value = "1";
    mensaje.textContent = "";
}
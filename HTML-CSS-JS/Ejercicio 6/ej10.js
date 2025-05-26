//Crear una función que reciba un número y muestre tantos asteriscos como la cantidad de veces que se pasó como parámetro.

let numero = parseInt(prompt("Ingrese un numero"))

function asterisco(n){

    let impresion = "*".repeat(n)
    console.log(impresion)
}

asterisco(numero)
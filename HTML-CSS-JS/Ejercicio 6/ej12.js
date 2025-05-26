//Crear una función que reciba un número y muestre tantos asteriscos como la cantidad de veces que se pasó como parámetro.

let numero = parseInt(prompt("Ingrese un numero"))

function asterisco(n){

    let impresion = " "

    for(let i = 0; i<n; i++){

        impresion = impresion + "*"
        console.log(impresion)
    }
}

asterisco(numero)
//Crear una función que reciba dos cadenas y retorne la concatenación de la misma.

let cadena1 = prompt("Ingrese la primera cadena")
let cadena2 = prompt("Ingrese la segunda cadena")

function concatenacion(c1, c2){

    let concatenar = c1 + " " + c2
    return concatenar

}

console.log(concatenacion(cadena1, cadena2))
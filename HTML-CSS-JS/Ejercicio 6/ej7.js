//Crear una función que reciba dos valores y retorne el producto de los mismos.

let valor1 = parseInt(prompt("Ingrese el primer valor"))
let valor2 = parseInt(prompt("Ingrese el segundo valor"))

function producto (v1, v2){

    let resultado = 1
    resultado = v1 * v2
    return resultado;

}

console.log(producto(valor1, valor2))
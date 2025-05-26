//Generar un array con 10 números, recorrerlo e ir multiplicando todos los elementos, finalmente obtener el producto total.

let arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let multiplicacion = 1

for(let i = 0; i <10; i++){
    
    multiplicacion = multiplicacion * arreglo[i]
}

console.log(multiplicacion)
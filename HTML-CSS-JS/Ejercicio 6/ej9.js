//Crear una función, a partir de la lógica aplicada en ejercicio 3, que reciba dos valores y muestre cuál es el mayor. En caso de ser iguales, deberá indicarlo.

let valor1 = parseInt(prompt("Ingrese el primer valor"))
let valor2 = parseInt(prompt("Ingrese el segundo valor"))

function mayor(v1, v2){

    if(v1 > v2){

        console.log("El valor "+ v1 + " es mayor que " + v2)
    }else if (v2 > v1){
        console.log("El valor "+ v2 + " es mayor que " +  v1)
    }else{
        console.log("Son iguales")
    }
}

mayor(valor1, valor2)
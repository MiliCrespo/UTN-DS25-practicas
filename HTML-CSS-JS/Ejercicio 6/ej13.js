/*Crear una función que reciba un número que indica el día de la semana y retorne una cadena de texto 
indicando a qué día corresponde. Ejemplo: si es 1, deberá retornar lunes, 2 retornará martes, y así siguiendo. 
Si el día es 6 o 7 deberá retornar “fin de semana”. En caso de un valor que no represente un día de la semana deberá 
retornar un mensaje de error.*/

let numero = parseInt(prompt("Ingrese un número entre 1 y 7"))

function semana(n){
    if(n>=1 && n<=7){

        switch (n){

            case 1:
                console.log("Lunes")
                break;
            case 2:
                console.log("Martes")
                break;
            case 3:
                console.log("Miércoles")
                break;
            case 4:
                console.log("Jueves")
                break;
            case 5:
                console.log("Viernes")
                break;
            case 6:
            case 7:
                console.log("Fin de Semana")
                break;
            default:
                console.log("Error")
        } 

    }else{
        console.log("Ingrese un número válido")
    }
}

semana(numero)
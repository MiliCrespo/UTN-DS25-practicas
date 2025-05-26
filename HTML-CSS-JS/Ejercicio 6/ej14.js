/*Crear una función que genere un array de varios elementos numéricos y muestre por pantalla el promedio de esos números.
El tamaño y los valores deben ser ingresados por el usuario (comando prompt) en dicho orden. 
TIP: El dato ingresado con prompt es de tipo string, usar split() para quitar los espacios y usar la función Number 
para transformarlo.*/

let tamanio = parseInt(prompt("Ingrese el tamaño del array"))

function generarArray (t){

    let array = []
    let acumulador = 0
    let promedio = 0
    
    for(let i = 0; i< t; i++){

        let elemento = parseInt(prompt("Ingrese un numero"))

        array[i]=elemento
    }
    
    for( let j=0; j<t; j++){
        
        acumulador = acumulador + array[j]   
    }

    promedio = acumulador / t
    console.log("El promedio de los números ingresados es: " + promedio)
}

generarArray(tamanio)
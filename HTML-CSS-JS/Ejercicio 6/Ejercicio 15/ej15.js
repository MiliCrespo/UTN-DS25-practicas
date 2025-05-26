/*Utilizar la función que genera el medio-árbol (ejercicio 12): crear un campo de entrada que le permita al usuario 
ingresar la altura del mismo. Incluir un botón que al presionarlo, invoque a la función generada previamente con el 
valor ingresado por el usuario para que la misma muestre el medio-árbol.
Deberá incluir validación de datos ingresados por el usuario.*/

const alt = document.getElementById("altura")
const formulario = document.getElementById("formulario")
const mensaje = document.getElementById("mensaje")

formulario.addEventListener("submit", generarArbol)

function generarArbol(event){

    event.preventDefault()
    let altura = parseInt(alt.value)
    let impresion = ""
    let resultado = ""

    if(altura<1){
        mensaje.innerText = "Ingrese un numero válido"
        return;
    }else{

        for(let i = 0; i<altura; i++){

        impresion = impresion + "*"
        resultado = resultado + impresion + '\n'
        }
    }
    mensaje.innerText= resultado
    
}



/*Utilizando “switch”. Definir una variable numérica. Asignarle un valor entre 1 y 10; mostrar a qué grupo pertenece:
Grupo 1: del 1 al 3
Grupo 2: del 4 al 6
Grupo 3: del 7 al 10
Modifiquemos el ejercicio para que el número lo ingrese el usuario (con “prompt”).*/

//inciso 1

let varNum = 2

switch (true) {
  case (varNum >= 1 && varNum<=3):
    console.log("Grupo 1");
    break;
  case (varNum >= 4 && varNum<=6):
    console.log("Grupo 2");
    break;
  case (varNum >= 7 && varNum<=8):
    console.log("Grupo 3");
    break;
  default:
    console.log("Fuera de rango");
}

//inciso 2

let varNum2 = parseInt(prompt ("Ingrese un número"))

switch (true) {
  case (varNum2 >= 1 && varNum2 <=3):
    console.log("Grupo 1");
    break;
  case (varNum2 >= 4 && varNum2 <=6):
    console.log("Grupo 2");
    break;
  case (varNum2 >= 7 && varNum2 <=8):
    console.log("Grupo 3");
    break;
  default:
    console.log("Grupo 4");
}
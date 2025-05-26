/*Crear una función que reciba el monto de un producto, y el medio de pago: C (tarjeta de crédito), E (efectivo) y 
D (tarjeta de débito). 
Si el monto del producto es menor a $200 no se aplicará ningún descuento, pero si el monto a abonar es entre 
$200 y $400 se aplicará un descuento del 30% si el medio de pago es efectivo, 20% si se realiza con débito y 10% 
con tarjeta de crédito. 
Para montos mayores a $400, el descuento es el mismo sin importar el medio de pago, dicho descuento es del 40%.
La función deberá retornar el monto final a abonar*/

let monto = parseFloat(prompt("Ingrese el monto del producto"))
let medioPago = prompt("Ingrese el medio de pago")

function descuento (m, mp){

    let montoFinal = 0

    if(m < 200){
        montoFinal = m
    }else if(m>= 200 & m<=400){
        switch(mp){
            case "E":
                montoFinal = m-(m * 0,30)
                break;
            case "D":
                montoFinal = m-(m * 0,20)
                break;
            case "C":
                montoFinal = m-(m * 0,10)
                break;
            default:
                console.log("Error");
        }
    }else{
        montoFinal = m-(m * 0,40)
    }
    return montoFinal
}

console.log("El monto final a abonar es: $" + descuento (monto, medioPago))
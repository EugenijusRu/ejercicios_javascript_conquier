//Crear un programa que pida al usuario ingresar un número, y luego el 
//porcentaje que se desea obtener del mismo. 
//Devolver un mensaje muestre el porcentaje de dicho número.

let numero = prompt("Ingrese un numero")

numero = Number(numero)

let porcentaje = prompt("De cuanto es el %")

porcentaje = Number(porcentaje)

let resultado = ( numero * porcentaje ) / 100

console.log(`El porcantaje es: ${resultado}`)
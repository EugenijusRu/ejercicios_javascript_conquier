//Crear un programa que pida ingresar una cantidad de kilómetros y muestre 
//un mensaje con el resultado de la conversión en millas.

let kilometros = prompt("Cuantos kilometros vamos a recorrer?")

kilometros = Number(kilometros)

millas = kilometros * 0.621371 

console.log(`Entoces son: ${millas}`)
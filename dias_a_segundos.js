//Crear un programa que pida ingresar una cantidad de días y muestre un mensaje con 
//el resultado de la conversión en segundos.

let dias = prompt("Cuantos dias nos queda?")

dias = Number(dias)

segundos = ((dias * 24) * 60 ) * 60

console.log(`Son: ${segundos} segundos `)

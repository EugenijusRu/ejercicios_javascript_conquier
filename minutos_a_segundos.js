//Crear un programa que pida ingresar una cantidad en minutos mediante un prompt
//muestre un mensaje con el resultado de la conversión en segundos.

let minutos = prompt("Cuantos minutos nos queda?")

minutos = Number(minutos)

segundos = minutos * 60

console.log(`Son: ${segundos} segundos `)


//Crear un programa que pida al usuario ingresar el valor de la base y 
//el valor de la altura de un triangulo, calcular su área y mostrarlo en un mensaje.

let base = prompt("Cuanto mide la base?")

base = Number(base)

let altura = prompt("Cunato es la altura?")

altura = Number(altura)

let area= 1/2 * base * altura

console.log(`La area de triangulo es: ${area}`)


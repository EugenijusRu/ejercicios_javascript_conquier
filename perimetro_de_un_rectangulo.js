//Crear un programa que pida al usuario ingresar el valor de la altura y 
//el valor del ancho de un rectángulo, calcular su perímetro y mostrarlo en un mensaje.

let altura = prompt("Cual es la altura?")

altura = Number(altura)

let ancho = prompt("Cual es el ancho de rectangulo?")

ancho = Number(ancho)

let perimetro = 2 * (altura + ancho)

console.log(`El perimetro es: ${perimetro}`)

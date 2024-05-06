//Crear un programa que pida al usuario la distancia de su recorrido y mostrar en 
//un mensaje cuánto tiempo tardaría en completar el recorrido en distintos medios 
//de transporte, definiendo de antemano distintas velocidades para distintos 
//medios de transporte (p. ej.: a pie: 5 km/hora, bici 10km/hora, etc.).

let distancia = prompt("Que distancia debe recorrer?")

distancia = Number(distancia)

let aPie = 5
let enBici = 10

let tiempo;

console.log(`En bici te costara: ${(distancia/enBici)} hora y a pie: ${(distancia/aPie)} horas`)
// Crear un programa que pida al usuario ingresar, por separado, la calle, el número, el departamento, 
// el código postal, la ciudad y el país, y muestre un mensaje con toda la dirección completa, p.ej.: 
// "La dirección que ha ingresado es: Calle Falsa 123 3C, 1414, CABA, Argentina".

let calle = prompt("Por favor ingresar la calle");
let numero = prompt("Por favor ingresar el número");
let departamento = prompt("Por favor ingresar el departamento");
let codigoPostal = prompt("Por favor ingresar el código postal");
let ciudad = prompt("Por favor ingresar la ciudad");

console.log(`La dirección que ha ingresado es: ${calle} ${numero} ${departamento}, ${codigoPostal}, ${ciudad}`);
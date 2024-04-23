//Crear un programa que pida al usuario ingresar, por separado, nombre, apellido, edad, 
// nacionalidad, documento, y muestre luego un mensaje que diga: "Nuevo usuario agregado al sistema:" 
// y liste todos los datos juntos.

let nombre = prompt("Por favor ingresar tu nombre");
let apellido = prompt("Por favor ingresar tu apellido");
let edad = prompt("Por favor ingresar tu edad");
let nacionalidad = prompt("Por favor ingresar tu nacionalidad");
let documento = prompt("Por favor ingresar tu documento");

console.log(`Nuevo usuario agregado al sistema: ${nombre} ${apellido} ${edad} ${nacionalidad} ${documento}`);
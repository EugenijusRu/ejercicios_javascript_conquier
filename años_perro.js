//Crear un programa que pida ingresar una edad y devuelva el equivalente de esas edad en años perro.

let edadPerro = prompt("¿Qué edad tiene tu perro?");

edadPerro = Number(edadPerro); // Convierte el string a número

let edadHumano;

if (edadPerro === 1) {
    edadHumano = 15
    console.log(`La edad de tu perro es:" ${edadHumano}`)
} else if (edadPerro >= 2) {
    edadHumano = +15 + (edadPerro - 1) * 9
    console.log(`La edad de tu perro es:" ${edadHumano}`)
} else if (edadPerro >= 3 ) {
    edadHumano = 15 + 9 + (edadPerro - 2) * 7;
}
console.log(`La edad de tu perro en años humanos es: ${edadHumano}`)

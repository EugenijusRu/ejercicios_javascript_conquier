// Crear un programa que pida al usuario ingresar, por separado, el nombre de una playlist 
// y el título de tres canciones, y al finalizar se muestre un mensaje que diga, p. ej.: 
// "Se ha creado la playlist 'Hits de los 80s' con las canciones 'Africa', 'Maniac', 'Final Countdown'".

let playlist = prompt("Por favor ingresar el nombre de una playlist");
let cancion1 = prompt("Por favor ingresar el título de la primera canción");
let cancion2 = prompt("Por favor ingresar el título de la segunda canción");
let cancion3 = prompt("Por favor ingresar el título de la tercera canción");

console.log(`Se ha creado la playlist ${playlist} con las canciones ${cancion1}, ${cancion2} y ${cancion3}`);

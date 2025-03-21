const readLine = require("readline-sync");
const palabra = readLine.question("Introduce una palabra: ");

function invertirPalabra(palabra) {
    let palabraInvertida = '';
    for (let letra of palabra) {
        palabraInvertida = letra + palabraInvertida;
    }
    palabraInvertida = palabraInvertida.toLowerCase();

    if (palabra.charAt(0) === palabra.charAt(0).toUpperCase()) {
        palabraInvertida = palabraInvertida.charAt(0).toUpperCase() + palabraInvertida.slice(1);
    }
    return palabraInvertida;
}

console.log('La palabra invertida es: ', invertirPalabra(palabra));


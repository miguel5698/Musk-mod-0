const randomNumber = Math.floor(Math.random() * 10) + 1;
const readLine = require("readline-sync");


console.log('He pensado un número del 1 al 10. ¡Intenta adivinarlo! ');

let encontrado = false;
let cont = 1;

while (!encontrado) {
    const num = readLine.question("Adivina: ");
    if (num == randomNumber) {
        encontrado = true;
    } else {
        cont++;
    }
}

console.log('¡Correcto! Has necesitado ', cont, ' intentos');
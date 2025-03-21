const readLine = require("readline-sync");

const palabras = readLine.question("Introduce una frase: ");

function contarVocales(palabras) {
    let cont = 0;
    for (let i = 0; i < palabras.length; i++) {
        if (palabras[i] === 'a' || palabras[i] === 'e' || palabras[i] === 'i' || palabras[i] === 'o' || palabras[i] === 'u') {
            cont++;
        }
    }
    return cont;
}

console.log('hay ' + contarVocales(palabras) + ' vocales');
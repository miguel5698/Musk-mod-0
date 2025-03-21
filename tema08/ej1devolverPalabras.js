const readLine = require("readline-sync");


const texto = readLine.question("Introduce una frase: ");
const textoSinComas = texto.replace(/,/g, '');
const textoMinusculas = textoSinComas.toLowerCase();
const frase = textoMinusculas.split(' ');
/*const fraseSinEspacios = fraseSeparada.join('');
const frase = fraseSinEspacios.toLowerCase();*/


function palabrasRepetidas(frase) {
    const repetidos = new Set();
    for (let i = 0; i < frase.length; i++) {
        for (let j = i + 1; j < frase.length; j++) {
            if (frase[i] === frase[j]) {
                repetidos.add(frase[i]);
            }
        }
    }
    return repetidos;
}

const resultado = palabrasRepetidas(frase);
console.log('Palabras repetidas: ', Array.from(resultado).join(', '));
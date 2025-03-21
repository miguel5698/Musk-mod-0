const readLine = require("readline-sync");


const texto = readLine.question("Introduce una frase: ");
const fraseSeparada = texto.split(' ');
const fraseSinEspacios = fraseSeparada.join('');
const frase = fraseSinEspacios.toLowerCase();


const mitad = parseInt(frase.length / 2);


function esPalindromo(frase) {
    let palindromo = true;
    let i = 0;
    let j = frase.length - 1;
    let cont = 0;
    while (cont < mitad) {
        if (frase[i] != frase[j]) {
            palindromo = false;
            break;
        } else {
            i++;
            j--;
            cont++;
        }
    }
    if (palindromo) {
        console.log('Es palindromo');
    } else {
        console.log('No es palindromo');
    }
}

esPalindromo(frase);



const readLine = require("readline-sync");
const cadena1 = readLine.question("Introduce una palabra: ");
const cadena2 = readLine.question("Introduce una palabra: ");


function sonAnagramas(cadena1, cadena2) {
    if (cadena1.length !== cadena2.length) {
        return false;
    }

    let mapaFrecuencias = new Map();

    for (let caracter of cadena1.toLowerCase()) {
        if (mapaFrecuencias.has(caracter)) {
            mapaFrecuencias.set(caracter, mapaFrecuencias.get(caracter) + 1);
        } else {
            mapaFrecuencias.set(caracter, 1);
        }
    }

    for (let caracter of cadena2.toLowerCase()) {
        if (!mapaFrecuencias.has(caracter) || mapaFrecuencias.get(caracter) === 0) {
            return false;
        }
        mapaFrecuencias.set(caracter, mapaFrecuencias.get(caracter) - 1);
    }

    return true;
}


if (sonAnagramas(cadena1, cadena2)) {
    console.log("Las palabras son anagramas.");
} else {
    console.log("Las palabras no son anagramas.");
}

const readLine = require("readline-sync");
const cadena = readLine.question("Introduce una frase: ");


function frecuenciaCaracteres(cadena) {
    let mapaFrecuencias = new Map();
    for (let caracter of cadena.toLowerCase()) {
        if (mapaFrecuencias.has(caracter)) {
            mapaFrecuencias.set(caracter, mapaFrecuencias.get(caracter) + 1);
        } else {
            mapaFrecuencias.set(caracter, 1);
        }
    }
    return mapaFrecuencias;
}


console.log("Mapa de frecuencias:", frecuenciaCaracteres(cadena));

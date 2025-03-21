const readLine = require("readline-sync");


const frase = readLine.question("Introduce una frase: ");
const palabras = frase.split(' ');
//console.log(palabras);
//const alto = parseInt(palabras.length / 5);
const ancho = 5;
const alto = Math.ceil(palabras.length / ancho);
console.log('alto: ', alto);



function crearMatriz(palabras) {
    const matrizGenerada = [];

    let cont = 0;
    for (let filas = 0; filas < alto; filas++) {
        matrizGenerada[filas] = [];
        for (let columnas = 0; columnas < ancho; columnas++) {
            if (cont < palabras.length) {
                matrizGenerada[filas][columnas] = palabras[cont];
                cont++;
            } else {
                break; //con este comando pretendo que no recorra toda la fila cuando haya llegado al maximo de palabras
            }
        }
    }

    return matrizGenerada;
}



let resultado = crearMatriz(palabras);
for (let fila of resultado) {
    console.log(fila);
}

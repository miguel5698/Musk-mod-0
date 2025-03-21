const readLine = require("readline-sync");

const lista1 = readLine.question("Introduce Array1: ");
const array1 = lista1.split(',');

const lista2 = readLine.question("Introduce Array2: ");
const array2 = lista2.split(',');

function diferenciaVectores(array1, array2) {
    const nuevoArray = [];
    for (let i = 0; i < array1.length; i++) {
        let diferente = true;
        for (let j = 0; j < array2.length && diferente; j++) {
            if (array1[i] === array2[j]) {
                diferente = false;
            }
        }
        if (diferente) {
            nuevoArray.push(array1[i]);
        }
    }
    return nuevoArray;
}

let resultado = diferenciaVectores(array1, array2);
let numeros = resultado.map(Number);
console.log('La diferencia de ambos conjuntos es: ', numeros);
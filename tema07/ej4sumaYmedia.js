const readLine = require("readline-sync");


const numeros = readLine.question("Introduce una lista de numeros: ");
const arrayNum = numeros.split(',');
console.log(arrayNum);

function sumaYmedia(arrayNum) {
    let suma = 0;
    for (let i = 0; i < arrayNum.length; i++) {
        suma = suma + parseFloat(arrayNum[i]);
    }

    console.log('La suma es ', suma);
    console.log('La media aritmética es ', suma / arrayNum.length);
}

sumaYmedia(arrayNum);
const readLine = require("readline-sync");

const num = readLine.question("Introduce un número: ");

const esPar = num % 2 == 0;
const esPositivo = num >= 0;

console.log('El numero es:', esPar ? 'par' : 'impar', 'y', esPositivo ? 'positivo' : 'negativo');
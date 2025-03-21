const readLine = require("readline-sync");
const num1 = readLine.question("Introduce un número: ");
const num2 = readLine.question("Introduce otro número: ");
const num3 = readLine.question("Introduce otro número: ");
let cont = 0;

if (num1 % 2 == 0) {
    cont++;
}
if (num2 % 2 == 0) {
    cont++;
}
if (num3 % 2 == 0) {
    cont++;
}

if (cont > 0) {
    console.log('hay al menos un numero par');
} else {
    console.log('no hay nigun numero par');
}

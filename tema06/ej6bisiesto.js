const readLine = require("readline-sync");

const num = readLine.question("Introduce un año: ");

if ((num % 4 == 0 && num % 100 != 0) || (num % 400 == 0)) {
    console.log('Es bisiesto');
} else {
    console.log('No es bisiesto');
}
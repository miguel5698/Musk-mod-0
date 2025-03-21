const readLine = require("readline-sync");

const radio = readLine.question("Introduce el radio: ");

function longitudCircunferencia(radio) {
    return 2 * Math.PI * radio;
}


console.log('La longitud de la circunferencia es: ', longitudCircunferencia(radio));
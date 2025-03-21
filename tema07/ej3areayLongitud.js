const readLine = require("readline-sync");

const radio = readLine.question("Introduce el radio: ");

function longitudCircunferencia(radio) {
    return 2 * Math.PI * radio;
}

function areaCirculo(radio) {
    return Math.PI * radio * radio;
}

console.log('La longitud de la circunferencia es: ', longitudCircunferencia(radio));
console.log('El área es ', areaCirculo(radio));
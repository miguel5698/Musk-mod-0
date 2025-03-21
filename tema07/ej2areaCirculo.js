const readLine = require("readline-sync");

const radio = readLine.question("Introduce el radio: ");

function areaCirculo(radio) {
    return Math.PI * radio * radio;
}

console.log('El área es ', areaCirculo(radio));
const readLine = require("readline-sync");

function pedirMatriz() {
    const filas = readLine.questionInt("Introduce el número de filas: ");
    const columnas = readLine.questionInt("Introduce el número de columnas: ");

    const matriz = [];

    for (let i = 0; i < filas; i++) {
        const fila = [];
        for (let j = 0; j < columnas; j++) {
            const valor = readLine.question(`Introduce el valor para la posición [${i}][${j}]: `);
            fila.push(valor);
        }
        matriz.push(fila);
    }

    return matriz;
}

function transponerMatriz() {
    const matriz = pedirMatriz();
    const matrizTranspuesta = [];

    for (let i = 0; i < matriz[0].length; i++) {
        matrizTranspuesta[i] = [];
        for (let j = 0; j < matriz.length; j++) {
            matrizTranspuesta[i][j] = matriz[j][i];
        }
    }

    return matrizTranspuesta;
}

const resultado = transponerMatriz();
console.log('Matriz traspuesta');
for (let filas of resultado) {
    console.log(filas);
}



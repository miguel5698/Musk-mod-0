const readLine = require("readline-sync");

const num = parseInt(readLine.question("Introduce un tamaño para la matriz: "));

function matrizProducto(num) {
    let matriz = [];
    for (let i = 0; i < num; i++) {
        matriz[i] = [];
        for (let j = 0; j < num; j++) {
            matriz[i][j] = i * j;
        }
    }
    return matriz;
}

let resultado = matrizProducto(num);
for (let fila of resultado) {
    console.log(fila);
}
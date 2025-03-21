const readLine = require("readline-sync");

const num = parseInt(readLine.question("Introduce un tamaño para la matriz: "));

function dibujarMatriz(num) {
    let matriz = [];
    let contador = 1;
    for (let i = 0; i < num; i++) {
        matriz[i] = [];
        for (let j = 0; j < num; j++) {
            matriz[i][j] = contador;
            contador++;
        }
    }
    return matriz;
}

let matrizGenerada = dibujarMatriz(num);

for (let fila of matrizGenerada) {
    console.log(fila);
}

/*const matrizOrdenada = matrizGenerada.padStart(1, ' ');

for (let fila of matrizOrdenada) {
    console.log(fila);
}*/

const readLine = require("readline-sync");


const ancho = readLine.question("Introduce el ancho del rectángulo: ");
const alto = readLine.question("Introduce una altura: ");

function dibujarRectangulo(ancho, alto) {
    let cont = 0;
    while (cont < alto) {
        let asterisco = '';
        for (let i = 0; i < ancho; i++) {
            if (cont == 0 || cont == alto - 1) {
                asterisco += '*';
            }
            else {
                if (i == 0 || i == ancho - 1) {
                    asterisco += '*';
                }
                else {
                    asterisco += ' ';
                }
            }
        }
        console.log(asterisco);
        cont++;
    }
}

dibujarRectangulo(ancho, alto);

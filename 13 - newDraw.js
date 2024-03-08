/*
 * Crea un programa que dibuje un cuadrado o un triángulo con asteriscos "*".
 * - Indicaremos el tamaño del lado y si la figura a dibujar es una u otra.
 * - EXTRA: ¿Eres capaz de dibujar más figuras?
 *          *
 *         * *
 *        * * *
 *
 */

function draw(ancho) {

    /*
    for (let i = 1; i <= ancho; i++) {
        let linea = ''

        for (let j = ancho; j > 0; j--) {
            linea = linea + '* '
            
        }
        
        console.log(linea)
    }
    */

    for (let i = 1; i <= ancho; i++) {
        let linea = ''

        for (let j = ancho - i; j > 0; j--) {
            linea = linea + '.'
            
        }

        for (let k = 1; k <= i; k++){
            linea = linea + '*.'
        }

        console.log(linea)
        
    }

    
}

draw(5)
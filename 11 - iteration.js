/* #25
 * Quiero contar del 1 al 100 de uno en uno (imprimiendo cada uno).
 * ¿De cuántas maneras eres capaz de hacerlo?
 * Crea el código para cada una de ellas.
 */

function whileCounter(){
    let n = 1
    while (n <= 100) {
        console.log(n)
        n = n+1
    }
    return n
}

function forCounter() {
    for (let index = 1; index <= 100; index++) {
        console.log(index)
        
    }
}

function recursiveCounter(n) {
    if (n <= 100) {
        console.log(n)
        n = recursiveCounter(n + 1) + 1
    }  
}

function doCounter() {
    let n = 1
    do {
        console.log(n)
        n = n+1
    } while (n <= 100);
}

doCounter()
/*
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */

function bizzBuzz() {
    for (let num = 1; num < 101; num++) {
        if (num % 3 == 0 && num % 5 == 0) {
            console.log(num, 'fizzbuzz')
        } else if (num % 3 == 0) {
            console.log(num, 'fizz')
        } else if (num % 5 == 0){
            console.log(num, 'buzz')
        }else {
            console.log(num, 'No es multiplo ni de 3 ni de 5')
        }
        
    }
}

bizzBuzz()
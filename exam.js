/*
 * Crea un programa que invierta el orden de una cadena de texto
 * sin usar funciones propias del lenguaje que lo hagan de forma automática.
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
 */

/*function invert(str = '') {
    let broked = str.split('')
    broked.reverse()
    let newStr = broked.join("")
    console.log(newStr)
    return newStr
}

invert('El niño es chistoso') */

/*
 * Escribe una función que calcule y retorne el factorial de un número dado
 * de forma recursiva.
 */

/*function factorial(n){
    if (n < 1) {
        return 1
    } else {
        n = n * factorial(n-1)
        return n
    }
}

console.log(factorial(4))
*/

/* 
 * Crea una función que reciba un String de cualquier tipo y se encargue de
 * poner en mayúscula la primera letra de cada palabra.
 * - No se pueden utilizar operaciones del lenguaje que
 *   lo resuelvan directamente.
 */

function uppercase(str = '') {
    let cut = str.split(' ')
    let resultado = ''
    for (let i = 0; i < cut.length; i++) {
        let element = cut[i][0].toLocaleUpperCase();
        //CUT[I] == El
        //CUT[i][0] == e
        // cut[i].replace(e, E)
        let ver = cut[i].replace(cut[i][0], element)
        resultado = resultado + ver + ' '
    }
    console.log(resultado)
}

uppercase('el niño juega con el perro')
/* #17
 * Crea una función que reciba un String de cualquier tipo y se encargue de
 * poner en mayúscula la primera letra de cada palabra.
 * - No se pueden utilizar operaciones del lenguaje que
 *   lo resuelvan directamente.
 */

function toUppercase(string = '') {
    let words = string.split(" ")
    let result = ''
    for (let index = 0; index < words.length; index++) {
        let element = words[index][0].toUpperCase()
        let modifi = words[index].replace(words[index][0], element)
        console.log(modifi)
        //result = result + modifi + ' '
        
    }
    console.log(result.trim())
    
}

toUppercase('el niño juega futbol')
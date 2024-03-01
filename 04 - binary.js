/*#9 DECIMALES
 * /*
 * Crea un programa se encargue de transformar un número
 * decimal a binario sin utilizar funciones propias del lenguaje que lo hagan directamente.
 */


function binary(num){
    let binary = []
    let finall = num
    for (let index = 0; 2 <= num; index++) {
        binary.push(num % 2)
        num = Math.floor(num/2) 
        if(num < 2) {
            binary.push(num)
        }

    }
    binary.reverse()
    let resultado = binary.join("")
    console.log('The number ', finall, ' in binary is: ', resultado)
    return resultado
    
}

binary(13)
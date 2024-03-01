/*#7 INVIRTIENDO CADENAS
 * Crea un programa que invierta el orden de una cadena de texto
 * sin usar funciones propias del lenguaje que lo hagan de forma automática.
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
 */

function invert(string) {
    //console.log(string)
    let cadenaCortada = string.split("") /// MUESTRA UN ARRAY CON TODAS LAS LETRAS SEPARADAS
    let arrayCopia = cadenaCortada.slice()
    console.log(arrayCopia)
    let cadenaInvertida = [] // ARRAY VACIO PARA METER AHI CADA UNA DE LAS LETRAS
    let value = '' // SE SUPONE QUE ES PARA QUE CADA VUELTA SEA UNA LETRA
    arrayCopia.forEach((element) => { 
       // console.log(element)
       //console.log(cadenaCortada)
        value = cadenaCortada.pop()
        //console.log(value)
        cadenaInvertida.push(value)
        
    });

    console.log(cadenaInvertida.join(""))
    return cadenaInvertida
    
}

invert('Hola mundo')
/*
 * Crea una función que reciba días, horas, minutos y segundos (como enteros)
 * y retorne su resultado en milisegundos.
 */

function miliseconds(days = 0, hours, minutes, segundes){

    let resultado = (days*86400000) + (hours*3600000) + (minutes*60000) + (segundes*1000)

    /*
    if(days > 0){
        resultado = days*86400000 + resultado
    } else if (hours > 0) {
        resultado = (hours*3600000) + resultado
    } else if (minutes > 0) {
        resultado = (minutes*60000) + resultado
    } else if (segundes > 0) {
        resultado = (segundes*1000) + resultado
    }*/
    
    return resultado
}

console.log(miliseconds(1, 13, 14,26))
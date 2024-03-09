/*
 * Crea una función que calcule el valor del parámetro perdido
 * correspondiente a la ley de Ohm.
 * - Enviaremos a la función 2 de los 3 parámetros (V, R, I), y retornará
 *   el valor del tercero (redondeado a 2 decimales).
 * - Si los parámetros son incorrectos o insuficientes, la función retornará
 *   la cadena de texto "Invalid values".
 */

function Ohm(V, R, I) {
    if (V == undefined) {
        let V = 0
        V = I * R
        return V.toFixed(2)
    } else if (R == undefined) {
        let R = 0
        R = V / I
        return R.toFixed(2)
    } else if (I == undefined) {
        let I = 0
        I = V / R
        return I.toFixed(2)
    }else if (V == undefined && I == undefined || I == undefined && R == undefined || V == undefined && I == undefined) {
        return console.log('Invalid values')
    }
    
}

console.log(Ohm(undefined,0.25,undefined))

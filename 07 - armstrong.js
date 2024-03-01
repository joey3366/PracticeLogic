/* #15
 * Escribe una función que calcule si un número dado es un número de Armstrong
 * (o también llamado narcisista).
 * Si no conoces qué es un número de Armstrong, debes buscar información
 * al respecto.
 */

function narcisism(n = 0){
 let exponent = n.toString().length
 let digits = n.toString().split("")
 let sum = 0
 for(let number of digits) {
    sum = (number ** exponent) + sum
 }
 
 if (sum == n) {
    return console.log('El numero: ', n, ' Es un numero narcisista')
 }else {
    return console.log('El numero:', n, 'No Es un numero narcisista')
 }
 
}

narcisism(54748)
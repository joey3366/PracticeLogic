/* #32
 * Crea una función que imprima los 30 próximos años bisiestos
 * siguientes a uno dado.
 * - Utiliza el menor número de líneas para resolver el ejercicio.
 */

function bisiesto(año = 0) {
    for (let i = año; i < año + 128; i = i + 4) {
        if (i % 4 == 0 && !(i % 100 == 0)) {
            console.log(i + ' Es Bisiesto')
        }
        
    }

}

bisiesto(2012)
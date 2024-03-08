/* #30
 * Crea una función que ordene y retorne una matriz de números.
 * - La función recibirá un listado (por ejemplo [2, 4, 6, 8, 9]) y un parámetro
 *   adicional "Asc" o "Desc" para indicar si debe ordenarse de menor a mayor
 *   o de mayor a menor.
 * - No se pueden utilizar funciones propias del lenguaje que lo resuelvan
 *   automáticamente.
 */

function order(list = [], par = '') {
    
    if (par == 'Asc') {

        for (let i = 0; i < list.length - 1; i++) {
            for (let j = 0; j < list.length - 1; j++) {
                console.log(list[j])
                if (list[j] > list[j+1]) {
                    [list[j], list[j+1]] = [list[j+1], list[j]]
                }
                
            }
            
        }
        return list

    } else if (par == 'Des') {
        for (let i = 0; i < list.length - 1; i++) {
            for (let j = 0; j < list.length - 1; j++) {
                if (list[j] < list[j+1]) {
                   [list[j], list[j+1]] = [list[j+1], list[j]]
                }
            }
            
        }
        return list
    }

    
}

console.log(order([5, 3, 90, 13 , 15], 'Des'))
/* #28
 * Crea un programa que determine si dos vectores son ortogonales.
 * - Los dos array deben tener la misma longitud.
 * - Cada vector se podría representar como un array. Ejemplo: [1, -2]
 */

function ortogonals(arr1 = [], arr2 = []) {
    if(arr1.length == arr2.length){
        let resultado = (arr1[0] * arr2[0]) + (arr1[1] * arr2[1])
        if (resultado == 0) {
            return console.log('Los vectores '+ arr1 +  ' y '  + arr2 + ' son ortogonales')
        }else {
            return console.log('Los vectores '+ arr1 +  ' y '  + arr2 + ' NO son ortogonales')
        }
    } else {
        return console.log('Los vectores no tienen el mismo tamaño, por favor corrige')
    }
    
    
}

ortogonals([1, 0], [0, 1])
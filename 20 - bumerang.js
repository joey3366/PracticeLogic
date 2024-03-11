/* #45
 * Crea una función que retorne el número total de bumeranes de
 * un array de números enteros e imprima cada uno de ellos.
 * - Un bumerán (búmeran, boomerang) es una secuencia formada por 3 números
 *   seguidos, en el que el primero y el último son iguales, y el segundo
 *   es diferente. Por ejemplo [2, 1, 2].
 * - En el array [2, 1, 2, 3, 3, 4, 2, 4] hay 2 bumeranes ([2, 1, 2]
 *   y [4, 2, 4]).
 */

function buremang(array = []) {
    let contador = 0
    let bumerang = []
    for (let i = 0; i < array.length - 1; i++) {
        
        if (array[i] !== array[i+1] && array[i] == array[i+2]) {
            contador++
            bumerang.push([array[i], array[i + 1], array[i + 2]]);
        }
    }
    console.log('En el array: ' +'[' +  array + ']' +  ' hay ' + contador + ' Bumeranes ' + JSON.stringify(bumerang))
}

buremang([2, 1, 2, 3, 3, 4, 2, 4])
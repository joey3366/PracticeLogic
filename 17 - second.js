/* # 33
 * Dado un listado de números, encuentra el SEGUNDO más grande
 */


function second(list = []) {
    
    for (let i = 0; i < list.length - 1; i++) {
        for (let j = 0; j < list.length - 1; j++) {
            if (list[j] < list[j + 1]) {
                [list[j], list[j + 1]] = [list[j+1], list[j]]
            }
        }
    }
    return list[1]
}

console.log(second([5,3,90,13,15,33]))
/* #64
 * Dada una URL con parámetros, crea una función que obtenga sus valores.
 * No se pueden usar operaciones del lenguaje que realicen esta tarea directamente.
 *
 * Ejemplo: En la url https://retosdeprogramacion.com?year=2023&challenge=0
 * los parámetros serían ["2023", "0"]
 */


function urlParameters(url = '') {
    let newUrl = url.split('=').slice(1)
    let parameterValues = []
    for(let element of newUrl) {
        let index = element.indexOf('&')
        if (element.indexOf('&') !== -1) {
            let param = element.substring(0, index)
            parameterValues.push(param)
        }else {
            parameterValues.push(element)
        }
      
    }
    return parameterValues
}

console.log(urlParameters('https://retosdeprogramacion.com?year=2023&challenge=0'))
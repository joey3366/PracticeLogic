/* #43
 * Crea una función que transforme grados Celsius en Fahrenheit
 * y viceversa.
 *
 * - Para que un dato de entrada sea correcto debe poseer un símbolo "°"
 *   y su unidad ("C" o "F").
 * - En caso contrario retornará un error.
 */

function temperature(temperature = '') {
    let valor = 0
    let corte = temperature.split("°")
    valor = corte[0].trim()
    if (corte[1] == 'C') {
        let fahrenheit = (valor * 1.8) + 32
        return console.log(valor + ' °C' + ' Son ' + fahrenheit + ' °F')
    } else if (corte[1] == 'F') {
        let centigrados = (valor - 32) / 1.79999999
        return console.log(valor + ' °F' + ' Son '+ centigrados+ ' °C')
    }
    if (!temperature.includes('°C') || !temperature.includes('°F')) {
        return console.log('ERROR')
    }

}

temperature("32 C")
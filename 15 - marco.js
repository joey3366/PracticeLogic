/* #31
 * Crea una función que reciba un texto y muestre cada palabra en una línea,
 * formando un marco rectangular de asteriscos.
 * - ¿Qué te parece el reto? Se vería así:
 *   **********
 *   * ¿Qué   *
 *   * te     *
 *   * parece *
 *   * el     *
 *   * reto?  *
 *   **********
 */

function marco(string) {
  let corte = string.split(" ");
  let letraMasLarga = 0;
  for (let i = 0; i < corte.length; i++) {
    if (corte[i].length > letraMasLarga) {
      letraMasLarga = corte[i].length;
    }
  }
  console.log("*".repeat(letraMasLarga + 4))

  for (const palabra of corte) {
    const espacio = letraMasLarga - palabra.length
    const linea = '* ' + palabra + " ".repeat(espacio) + " *"
    console.log(linea)
  }

  console.log("*".repeat(letraMasLarga + 4))

}

marco("¿Que te parece el reto?");


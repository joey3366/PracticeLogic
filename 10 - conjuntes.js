/* #23
 * Crea una función que reciba dos array, un booleano y retorne un array.
 * - Si el booleano es verdadero buscará y retornará los elementos comunes
 *   de los dos array.
 * - Si el booleano es falso buscará y retornará los elementos no comunes
 *   de los dos array.
 * - No se pueden utilizar operaciones del lenguaje que
 *   lo resuelvan directamente.
 */

function conjuntes(arr1 = [], arr2 = [], bol) {
  let out = [];
  if (bol == true) {
    for (let element of arr1) {
      if (arr2.includes(element)) {
        out.push(element);
      }
    }
  } else if (bol == false) {
    for (let element of arr2) {
      if (!arr1.includes(element)) {
        out.push(element);
      }
    }
  }
  return out;
}

conjuntes(
  ["a", "e", "i", "o", "u"],
  ["c", "o", "m", "u", "n", "e", "s"],
  false
);

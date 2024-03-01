/* # 12
 * Crea una función que reciba dos cadenas como parámetro (str1, str2)
 * e imprima otras dos cadenas como salida (out1, out2).
 * - out1 contendrá todos los caracteres presentes en la str1 pero NO
 *   estén presentes en str2.
 * - out2 contendrá todos los caracteres presentes en la str2 pero NO
 *   estén presentes en str1.
 */

function expressions(string1 = "", string2 = "") {
  let out1 = '';
  let out2 = '';
  for (let letra of string1) {
    if (!string2.includes(letra) && !out1.includes(letra)) {
        out1 = out1+letra
    }
  }

  for(let letra2 of string2){
    if (!string1.includes(letra2) && !out2.includes(letra2)) {
        out2 = out2 + letra2
    }
  }

  //console.log(array1)
  console.log(out1);
  console.log(out2)
}
//Out1 = [gat]
//Out2 = [Per]

expressions("gato", "perro");

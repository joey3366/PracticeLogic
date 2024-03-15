/* #48
 * Crea un función que reciba un texto y retorne la vocal que
 * más veces se repita.
 * - Ten cuidado con algunos casos especiales.
 * - Si no hay vocales podrá devolver vacío.
 */

function vocal(texto = "") {
  // Convertir el texto a minúsculas para evitar problemas de distinción entre mayúsculas y minúsculas
  texto = texto.toLowerCase()

  // Inicializar un objeto para contar la frecuencia de cada vocal
  const vocales = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0
  }

  // Iterar sobre cada caracter del texto
  for (let vocal of texto) {
    // Verificar si el caracter es una vocal
    if ('aeiou'.includes(vocal)) {
      // Incrementar la frecuencia de la vocal correspondiente
      vocales[vocal]++
    }
  }
    
    let vocalMasRepetida = ''
    let contador = 0

    for (let vocal in vocales) {
      if(vocales[vocal] > contador){
        contador = vocales[vocal]
        vocalMasRepetida = vocal
      }
    }
    console.log('La vocal mas repetida en la palabra ' + texto + ' Es la vocal ' + vocalMasRepetida)
  
}
vocal("electrocardiograma");

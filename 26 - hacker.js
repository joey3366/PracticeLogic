/* #54
 * Escribe un programa que reciba un texto y transforme lenguaje natural a
 * "lenguaje hacker" (conocido realmente como "leet" o "1337"). Este lenguaje
 *  se caracteriza por sustituir caracteres alfanuméricos.
 * - Utiliza esta tabla (https://www.gamehouse.com/blog/leet-speak-cheat-sheet)
 *   con el alfabeto y los números en "leet".
 *   (Usa la primera opción de cada transformación. Por ejemplo "4" para la "a")
 */

function hackerLanguage(text = '') {
    const letters = {
        'a': '4',
        'e': '3',
        'i': '1',
        'o': '0',
        's': '5',
        't': '7',
        'A': '4',
        'E': '3',
        'I': '1',
        'O': '0',
        'S': '5',
        'T': '7'
    };
    let newText = ''
    for(let letter of text) {
      if (letters.hasOwnProperty(letter)) {
        newText = newText + letters[letter]
      } else {
        newText = newText + letter
      }
    }

    return newText;
    

}

console.log(hackerLanguage('Hola soy una prueba del lenguaje hacker'))
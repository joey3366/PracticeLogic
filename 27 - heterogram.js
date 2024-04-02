/*#62
 * Crea 3 funciones, cada una encargada de detectar si una cadena de
 * texto es un heterograma, un isograma o un pangrama.
 * - Debes buscar la definición de cada uno de estos términos.
 */

function heterogram(text = '') {
    letters = text.split("")

    for (let i = 0; i < letters.length; i++) {
        let comparationLetter = letters[i]
        console.log(comparationLetter)
        for (let j = 0; j < letters.length; j++) {
            console.log(letters[j])
            if (comparationLetter === letters[j+1]) {
                return 'No es heterograma'
            }
            
        }
        return 'Es heterograma'
    }

}

function isogram(str) {
    str = str.toLowerCase();
    let contadorLetras = {};
    for (let letra of str) {
        
        contadorLetras[letra] = (contadorLetras[letra] || 0) + 1;
    }
    console.log(contadorLetras)
    let cantidadPrimeraLetra = contadorLetras[str[0]];
    console.log(contadorLetras[str[0]])
    
    for (let letra in contadorLetras) {
        if (contadorLetras[letra] !== cantidadPrimeraLetra) {
            return false;
        }
    }
    
    return true;
}

function pangram(oracion) {
  oracion = oracion.toLowerCase()
  let letters = {}
  
  for(let letter of oracion) {
    if (letter >= 'a' && letter <= 'z' || letter == 'ñ') {
        letters[letter] = true
    }
  }
  //console.log(letters)

  for (let letter of 'abcdefghijklmnñopqrstuvwxyz') {
    if (!letters[letter]) {
        return false
    }
  }
  return true
  
}

console.log(pangram('Jovencillo emponzoñado de whisky, qué mala figurota exhibes'))
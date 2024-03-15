/* #51
 * Crea una función que sea capaz de encriptar y desencriptar texto
 * utilizando el algoritmo de encriptación de Karaca
 * (debes buscar información sobre él).
 */

function karacaEncritp(text = '') {
    const vocals ={
        a:0,
        e:1,
        i:2,
        o:3,
        u:4
    }
    let letters = text.split("").reverse()
    let newText = letters.join("")
    for (let letter of newText) {
        if (vocals.hasOwnProperty(letter)) {
            newText = newText.replace(letter, vocals[letter]);
        }
    }
    console.log(newText)
    return newText = newText + 'aca'
    
}

function karacaDecript(text = '') {
    //let newText = text.split('')
    const vocals ={
        0:'a',
        1:'e',
        2:'i',
        3:'o',
        4:'u'
    }
    if (text.endsWith('aca')) {
        text = text.replace(/aca/g, '')
    }
    text = text.split('').reverse().join('')
    for(let letter of text) {
        if (vocals.hasOwnProperty(letter)) {
            text = text.replace(letter,vocals[letter] )
        }
    }

    console.log(text)
    return text
}

karacaEncritp('hola')
karacaDecript('0l3haca')
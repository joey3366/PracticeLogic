/* #50
 * Crea una función que sea capaz de detectar y retornar todos los
 * handles de un texto usando solamente Expresiones Regulares.
 * Debes crear una expresión regular para cada caso:
 * - Handle usuario: Los que comienzan por "@"
 * - Handle hashtag: Los que comienzan por "#"
 * - Handle web: Los que comienzan por "www.", "http://", "https://"
 *   y finalizan con un dominio (.com, .es...)
 */

function handles(text) {
    const expresionRegular = /\b(?:https?:\/\/|www\.)\S+\.\w{2,}\b/g;

    let menciones = [];
    let match;
    
    while ((match = expresionRegular.exec(text)) !== null) {
        menciones.push(match[0]);
    }
    
    console.log(menciones);
}

handles("Visita mi sitio web en https://www.google.com y también puedes ver http://www.bb.com");

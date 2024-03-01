/* #14  Escribe una función que calcule y retorne el factorial de un número dado
 * de forma recursiva.*/
function factorial(n) {
    if (n == 0 || n == 1) {
        return 1;
    } else {
        console.log(n)
        return n * factorial(n-1) 
    }
}

console.log(factorial(12))
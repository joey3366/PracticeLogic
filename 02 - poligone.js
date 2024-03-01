/*
#5 ÁREA DE UN POLÍGONO
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */

function areaPoligone(command) {
    let base = Math.ceil(Math.random() * 10)
    console.log(base)
    let altura = Math.ceil(Math.random() * 10)
    console.log(altura)
    let lado = Math.ceil(Math.random() * 10)
  switch (command) {
    case "t":
      let triangle = (base * altura) / 2;
      console.log( 't', triangle)
      return triangle;

    case "s":
      let square = lado ** 2;
      console.log(square)
      return square;

    case "r":
      let rectangle = base * altura;
      console.log(rectangle)
      return rectangle;

    default:
      break;
  }
}

areaPoligone("s");

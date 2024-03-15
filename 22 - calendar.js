/*
 * ¿Conoces el calendario de adviento de la comunidad (https://adviento.dev)?
 * 24 días, 24 regalos sorpresa relacionados con desarrollo de software,
 * ciencia y tecnología desde el 1 de diciembre.
 *
 * Enunciado: Crea una función que reciba un objeto de tipo "Date" y retorne
 * lo siguiente:
 * - Si la fecha coincide con el calendario de aDEViento 2022: Retornará el regalo
 *   de ese día (a tu elección) y cuánto queda para que finalice el sorteo de ese día.
 * - Si la fecha es anterior: Cuánto queda para que comience el calendario.
 * - Si la fecha es posterior: Cuánto tiempo ha pasado desde que ha finalizado.
 *
 * Notas:
 * - Tenemos en cuenta que cada día del calendario comienza a medianoche 00:00:00
 *   y finaliza a las 23:59:59.
 * - Debemos trabajar con fechas que tengan año, mes, día, horas, minutos
 *   y segundos.
 */

function advento(date) {
  const regalos = [
    "git",
    "python",
    "sql",
    "pragmatic",
    "design",
    "docker",
    "javascript",
    "cracking",
    "sqlserver",
    "html",
    "hacking",
    "Inmune",
    "clean code",
    "wifi",
    "tdd",
    "IA",
    "Ultimate Docker",
    "pattron design",
    "flutter",
    "ipad",
    "react",
    "clean code",
    "python ia",
    "github",
  ];
  const inicialDate = new Date("12-01-2024").getTime()
  console.log(inicialDate)
  const endDate = new Date("12-24-2024 18:59:59");
  date = new Date(date).getTime();
  if (date < inicialDate) {
    let restTime = inicialDate - date;
    let años = Math.floor(restTime / 31557600000)
    let meses = Math.floor(restTime / 2629800000) % 12
    let dias = Math.floor(restTime / 86400000) % 30
    let horas = Math.floor(restTime / 3600000) % 24
    let minutos = Math.floor(restTime / 60000) % 60
    let segundos = Math.floor(restTime / 1000) % 60
    console.log(dias)
  }

  console.log(date);
}

advento("2022/10/21 00:00:00");

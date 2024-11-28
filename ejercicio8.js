//Implementa una función que reciba un número y devuelva si dicho número es primo o no .
//Introduce :1009
//1009 es primo
//Un número primo es aquel que es mayor que 1 y no tiene divisores aparte de 1 y él mismo.
//Los divisores de un número son aquellos números que pueden dividirlo sin dejar residuo (es decir, cuyo cociente es un número entero).
const readlineSync = require("readline-sync");
let numero = parseInt(readlineSync.question("Introduce un numero: "));

while (isNaN(numero)) {
  numero = parseInt(
    readlineSync.question("Por favor,introduce un numero correcto: ")
  );
}
function esPrimo(numero) {
  if (numero <= 1) {
    return false;
  }

  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      //para verificar si un número es divisible entre otro número (i) sin dejar residuo
      return false; // Si no hay un divisor, no es primo .
    }
  }
  return true;
}
if (esPrimo(numero)) {
  console.log(numero + " es un número primo.");
} else {
  console.log(numero + " no es un número primo.");
}

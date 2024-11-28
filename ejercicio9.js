//Implementa una función que ,dado un texto con paréntesis,indique si dichos paréntesis están balanceados (se cierran todos los que se abren)
//Introduce un texto:(() (())) están balanceados .
//Introduce un texto : )(()())) no están balanceados .
const readlineSync = require("readline-sync");

const input = readlineSync.question("Introduce una serie de parentesis: ");

function ParentesisBalanceados(serie) {
  let contador = 0;

  for (let caracter of serie) {
    if (caracter === "(") {
      contador++;
    } else if (caracter === ")") {
      contador--;
    }
  }

  return contador;
}
let contador = ParentesisBalanceados(input);

if (contador === 0) {
  console.log("La serie de paréntesis está balanceada.");
} else {
  console.log("La serie de paréntesis no está balanceada.");
}

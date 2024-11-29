//Implementa una función que ,dado un texto con paréntesis,indique si dichos paréntesis están balanceados (se cierran todos los que se abren)
//Introduce un texto:(() (())) están balanceados .
//Introduce un texto : )(()())) no están balanceados .

const readlineSync = require("readline-sync");

const input = readlineSync.question("Introduce una serie de parentesis: ");

function ParentesisBalanceados(serie) {
  const mapa = new Map([["(", ")"]]);

  let pila = []; //usamos una pila para comprobar si están balanceados

  for (let caracter of serie) {
    if (mapa.has(caracter)) {
      pila.push(caracter);
    } else {
      let ultimo = pila.pop();
      if (caracter !== mapa.get(ultimo)) {
        return false;
      }
    }
  }
  return pila.length === 0;
}
if (ParentesisBalanceados(input)) {
  console.log("están balanceados");
} else {
  console.log("no están balanceados");
}

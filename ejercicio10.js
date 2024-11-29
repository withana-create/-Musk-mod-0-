//Implementa una función que verifique si una secuencia de paréntesis,corchetes y llaves es válida.
//Es decir,se abren tantos como se cierra y cada secuencia está siempre contenida .
//Introduce: [()]{}() //secuencia correcta .
//Introduce:[(]{)}//secuencia incorrecta .
const readlineSync = require("readline-sync");

const input = readlineSync.question(
  "Introduce una secuencia de parentesis, corchetes y llaves: "
);

function esSecuenciaValida(serie) {
  let pila = [];
  const mapa = new Map([
    ["(", ")"],
    ["{", "}"],
    ["[", "]"],
  ]);

  for (let caracter of serie) {
    if (mapa.has(caracter)) {
      pila.push(caracter);
    } else {
      const ultimoCaracter = pila.pop();
      if (caracter !== mapa.get(ultimoCaracter)) {
        return false; //comprobamos si el caracter actual es igual al valor del caracter que eliminamos
      }
    }
  }

  return pila.length === 0;
}

if (esSecuenciaValida(input)) {
  console.log("La secuencia es correcta.");
} else {
  console.log("La secuencia no es correcta.");
}

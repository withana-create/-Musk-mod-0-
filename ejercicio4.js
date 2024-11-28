//Escribe una función que reciba dos cadenas y verifique si son anagramas utilizando un Map .
//Introduce una palabra :amor , introduce otra palabra :roma //son anagramas

const readline = require("readline-sync");
const input1 = readline.question("Introduce una palabra :");
const input2 = readline.question("Introduce otra palabra :");

function sonAnagramas(input1, input2) {
  if (input1.length !== input2.length) {
    console.log("no son anagramas , no tienen el mismo número de caracteres");
    return false;
  }

  const mapa = new Map();
  for (let letra of input1.toLowerCase()) {
    mapa.set(letra, mapa.get(letra) || 0 + 1); //si el mapa tiene ya una letra o es 0 ,sumamos 1.
  }
  for (let letra of input2.toLowerCase()) {
    if (!mapa.has(letra)) {
      console.log("no son anagramas");
      return false;
    }
    mapa.set(letra, mapa.get(letra) - 1);
  }
  for (let valor of mapa.values()) {
    if (valor !== 0) {
      console.log("no son anagramas");
      return false;
    }
  }
  console.log("son anagramas");
  return true;
}
sonAnagramas(input1, input2);

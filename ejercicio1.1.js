//Implementa una función que reciba un texto y devuelva las palabras que se repiten en dicho texto .
//Introduce el texto:Recordar es fácil para quien tiene memoria,olvidar es difícil para quien tiene corazón .
//Se repiten: es,para,quien,tiene
const readlineSync = require("readline-sync");
const input = readlineSync.question("Introduce un texto : ");

function palabrasRepetidas(texto) {
  let textoOk = texto.toLowerCase().split(" ");
  const mapa = new Map();
  for (palabra of textoOk) {
    if (mapa.has(palabra)) {
      mapa.set(palabra, mapa.get(palabra) + 1);
    } else {
      mapa.set(palabra, 1);
    }
  }
  let repetidas = [];
  for (let [palabra, valor] of mapa) {
    if (valor > 1) {
      repetidas.push(palabra);
    }
  }
  return { palabrasRepetidas: repetidas, repeticiones: mapa };
}

console.log(palabrasRepetidas(input));

//Implementa una función que reciba un texto y devuelva las palabras que se repiten en dicho texto .
//Introduce el texto:Recordar es fácil para quien tiene memoria,olvidar es difícil para quien tiene corazón .
//Se repiten: es,para,quien,tiene
const readlineSync = require("readline-sync");

function palabrasRepetidas(texto) {
  let repetidas = [];
  let textoOk = texto.toLowerCase().split(" ");

  for (let i = 0; i < textoOk.length; i++) {
    let contador = 0;
    for (let j = 0; j < textoOk.length; j++) {
      if (textoOk[i] === textoOk[j]) {
        contador++;
      }
    }
    if (contador > 1 && !repetidas.includes(textoOk[i])) {
      repetidas.push(textoOk[i]);
    }
  }

  return repetidas;
}

const input = readlineSync.question("Introduce un texto : ");

const repetidas = palabrasRepetidas(input);

if (repetidas.length > 0) {
  //ésto indica que hay palabras repetidas
  console.log("Las palabras repetidas son :" + repetidas);
} else {
  console.log("no hay palabras repetidas");
}

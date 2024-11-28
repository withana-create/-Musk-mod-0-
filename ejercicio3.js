//Implementa una función que reciba una cadena y devuelva un map con la frecuencia de cada carácter en la cadena (las veces que se repite)
//Introduce un texto: Hola mundo
//usamos readline sync
const readline = require("readline-sync");
const input = readline.question("Escribe una frase :");

function frecuenciaCaracteres(texto) {
  let frecuencia = new Map();

  for (let letra of input.toLowerCase()) {
    if (frecuencia.has(letra)) {
      frecuencia.set(letra, frecuencia.get(letra) + 1);
    } else {
      frecuencia.set(letra, 1);
    }
  }
  return frecuencia;
}
const resultado = frecuenciaCaracteres(input);
console.log(resultado);

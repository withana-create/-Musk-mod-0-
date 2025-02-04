//Implementa una función que invierta el orden de una palabra usando una pila(stack)
//Introduce una palabra :amor//la palabra invertida es roma.
const readline = require("readline-sync");
const input = readline.question("Introduce una palabra: ");

function invertirTexto(texto) {
  const pila = [];

  // bucle para apilar cada letra de la palabra
  for (let letra of texto) {
    pila.push(letra);
    console.log(pila); //después de apilar
  }
  //siguiente parte para desapilar
  let textoInvertido = "";
  for (let i = pila.length; i > 0; i--) {
    textoInvertido += pila.pop();
    console.log(pila); //después de desapilar
  }

  return textoInvertido;
}

const resultado = invertirTexto(input);
console.log("La palabra invertida es: " + resultado);

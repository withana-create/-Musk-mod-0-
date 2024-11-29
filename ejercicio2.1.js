//Implementa una función que reciba dos arrays de números y devuelva un array con los elementos que están en el primer array pero que no están en el segundo .
//Purébala con valores aleatorios .
// Array1:[1,2,3,4,5]
//Array2:[3,5]
//La diferencia de ambos conjuntos es [1,2,4]

function diferenciaArrays(array1, array2) {
  let mapa = new Map();

  for (let caracter of array1) {
    mapa.set(caracter, 1);
  }
  for (let caracter of array2) {
    if (mapa.has(caracter)) {
      mapa.set(caracter, mapa.get(caracter) + 1);
    }
  }

  let diferencia = [];
  for (let [caracter, valor] of mapa) {
    if (valor === 1) {
      //así me devuelve los que están sólo una vez y no los repetidos
      diferencia.push(caracter);
    }
  }
  return diferencia;
}

console.log(diferenciaArrays([1, 2, 3, 4, 5], [3, 5]));

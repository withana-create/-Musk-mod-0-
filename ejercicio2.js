//Implementa una función que reciba dos arrays de números y devuelva un array con los elementos que están en el primer array pero que no están en el segundo .
//Purébala con valores aleatorios .
// Array1:[1,2,3,4,5]
//Array2:[3,5]
// La diferencia de ambos conjuntos es [1,2,4]

function diferenciaArrays(array1, array2) {
  return array1.filter((numero) => !array2.includes(numero));
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 5];
const resultado = diferenciaArrays(array1, array2);

console.log("El nuevo array es :", resultado);

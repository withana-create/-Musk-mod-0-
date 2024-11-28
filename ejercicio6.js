//Implementa un algoritmo de ordenación bubble sort y comprueba cuánto tarda en ejecutarse sobre un array de números aleatorios de tamaño 100.000.
//El algoritmo bubble sort ha tardado 12 segundos en ordenar 100000 elementos .

const crypto = require("crypto");

const lista = [];
for (let i = 0; i < 100000; i++) {
  lista.push(crypto.randomInt(100000));
}

console.time("Ordenación por Bubble Sort");

function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Intercambio
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    // Si no hubo intercambios, el array está ordenado y paramos.
    if (!swapped) break;
  }
}

bubbleSort(lista);
console.timeEnd("Ordenación por Bubble Sort");

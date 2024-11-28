//Implementa un algoritmo de ordenación quicksort y comprueba cuanto tarda en ejecutarse sobre un array de números aleatorios de tamaño 100.000
//El algoritmo quicksort ha tardado 0.6 segundos en ordenar 100.000 elementos .
const crypto = require("crypto");

const lista = [];

for (let i = 0; i < 100000; i++) {
  lista.push(crypto.randomInt(100000));
}

let listaQuicksort = lista.slice();
console.time("Ordenación por quicksort");

function quicksort(lista, inicio, fin) {
  if (inicio < fin) {
    const pivote = lista[fin];
    let i = inicio;

    for (let j = inicio; j < fin; j++) {
      if (lista[j] < pivote) {
        const aux = lista[i];
        lista[i] = lista[j];
        lista[j] = aux;
        i++;
      }
    }

    lista[fin] = lista[i];
    lista[i] = pivote;

    quicksort(lista, inicio, i - 1);
    quicksort(lista, i + 1, fin);
  }
}

quicksort(listaQuicksort, 0, listaQuicksort.length - 1);
console.timeEnd("Ordenación por quicksort");

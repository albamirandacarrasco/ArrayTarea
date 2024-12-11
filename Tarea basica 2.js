//Tarea básica 2

let arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Encuentra los números pares usando filter.

let numPares = arrayNumeros.filter(numero => numero % 2 === 0);
console.log(numPares);

// Duplica todos lo números con map.
let numDuplicados = arrayNumeros.map(numero => numero * 2);;
console.log(numDuplicados);
// Calcula la suma total con reduce.

let sumaTotal = arrayNumeros.reduce((acumulador, numero) => acumulador + numero, 0);;
console.log(sumaTotal);

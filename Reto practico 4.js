//reto practico 4. Matriz identidad
const matrizIdentidad = Array.from({ length: 3 }, (_, i) =>
    Array.from({ length: 3 }, (_, j) => (i === j ? 1 : 0))
  );
  
  
console.log(matrizIdentidad);
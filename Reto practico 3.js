//reto practico 3. Buscador simple

const arrayRopa = ["camisa", "pantalón", "chaqueta", "zapatos", "bufanda"];


function ropaPorLetra(letra) {
    return arrayRopa.filter(item => item.charAt(0).toLowerCase() === letra.toLowerCase());
  }
  
  
  console.log(ropaPorLetra("p")); 




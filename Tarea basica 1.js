//Tarea básica 1
let miComidaFavorita = ["Pasta", "Pizza", "Burritos"];

//Añade dos nuevas comidas al principio y al final del array
//Con unshift añadimos delante del array comidas
miComidaFavorita.unshift("Canelones", "Carne");

//Con push añadimos detrás del array comidas
miComidaFavorita.push("Ensalada", "Cocido");


//Eliminamos la primera del array 
miComidaFavorita.shift(); 


//Eliminamos la última del array 
miComidaFavorita.pop();

//Posicion con indexOf de la comida favorita
let posicionComida = miComidaFavorita.indexOf("Burritos");

console.log(`'Burritos' está en la posición ${posicionComida} en el array 'miComidaFavorita'.`);
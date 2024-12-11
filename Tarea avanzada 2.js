//Tarea avanzada 2: Busca en un array de objetos:
//Crea un array de objetos que representen productos (nombre, precio, cantidad).
let productos = [
    { nombre: "Camiseta", precio: 15, cantidad: 30 },
    { nombre: "Pantalón vaquero", precio: 40, cantidad: 20 },
    { nombre: "Chaqueta", precio: 80, cantidad: 10 },
    { nombre: "Sudadera", precio: 25, cantidad: 25 }
  ];
  
//Encuentra el producto más caro usando reduce.
let productoMasCaro = productos[0];

for (let i = 1; i < productos.length; i++) {
  if (productos[i].precio > productoMasCaro.precio) {
    productoMasCaro = productos[i];
  }
}

console.log("El producto más caro es:", productoMasCaro);

//Usa find para buscar un producto por nombre.
let buscarProducto = "Sudadera";
let productoEncontrado = productos.find(producto => producto.nombre === buscarProducto);

if (productoEncontrado) {
  console.log(`Producto encontrado: ${productoEncontrado.nombre}, Precio: ${productoEncontrado.precio}€`);
} else {
  console.log(`Producto ${buscarProducto} no encontrado.`);
}

//Verifica si todos los productos tienen precio mayor a 10 con every.
let precioMayorA10 = productos.every(producto => producto.precio > 10);

if (precioMayorA10) {
  console.log("Todos los productos tienen un precio mayor a 10€.");
} else {
  console.log("No todos los productos tienen un precio mayor a 10€, hay precios varios.");
}


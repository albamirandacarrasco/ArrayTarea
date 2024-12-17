//Tarea creativa 1. sistema inventario
let inventario = [
    { id: 1, nombre: "Camiseta", cantidad: 50, precio: 15 },
    { id: 2, nombre: "Falda", cantidad: 30, precio: 25 },
    { id: 3, nombre: "Zapatos", cantidad: 20, precio: 40 },
    { id: 4, nombre: "Bufanda", cantidad: 2, precio: 55 }
  ];

 function añadirProductos(id, nombre, cantidad, precio){

     inventario.push({ id, nombre, cantidad, precio });

 } 

 function eliminarProductos(id){

    inventario = inventario.filter(producto => producto.id !== id);

} 

function buscarProductos(id, nombre, cantidad, precio){

    return inventario.filter(producto => producto.nombre.toLowerCase().includes(nombre.toLowerCase()));

}


//usamos las funciones creadas arriba para introduci elementos
agregarProducto(5, "Falda cuero", 10, 12);
console.log(buscarProductos("camiseta"));
console.log(inventario);
eliminarProductos(2);
console.log(inventario);



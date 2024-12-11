//Tarea de manipulacion 1
let coloresPrimarios = ["magenta", "azul", "amarillo"];

coloresPrimarios.splice(1, 0, "morado");
console.log("El array después de insertar un nuevo color:", coloresPrimarios);

//Extrae los último colores
let ultimosColores = coloresPrimarios.slice(-2);
console.log("Los dos últimos colores:", ultimosColores);

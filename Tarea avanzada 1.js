//Tarea avanzada 1: Iteración en arrays multidimensionales

let estudiantes = [
    ["Alba", 8],
    ["Antonia", 2],
    ["pepo", 7],
    ["Luis", 5]
  ];
 
console.log("Tabla de estudiantes y calificaciones:", estudiantes);
  

//Accede y modifica una calificación específica.
estudiantes[2][1] = 6;
console.log("Calificación nueva Pepo:", estudiantes[2][1]);

//Usa flat para convertir el array bidimensional en uno unidimensional.
let estudiantesUnidimen = estudiantes.flat();
console.log("Array unidimensional de estudiantes y calificaciones con flat:", estudiantesUnidimen);

const path = require("path");

const filePath = path.join("public", "dist", "style", "main.css");

// devuelve el directorio y el archivo
console.log(filePath);

// el archivo devuelto
console.log(path.basename(filePath));

// ruta del directorio sin el archivo
console.log(path.dirname(filePath));

// ruta de un archivo en formato de objeto

console.log(path.parse(filePath));

// resuelve y completa la ruta que falta

console.log(path.resolve("dist"));

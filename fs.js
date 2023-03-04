const fs = require("fs");
//leer archivos
const first = fs.readFileSync("./data/first.txt", "utf-8");
const second = fs.readFileSync("./data/second.txt");

console.log(first);
console.log(second.toString());

//escribir archivos, si ya existe lo remplaza

fs.writeFileSync("./data/third.txt", "mensaje desde el tercer archivo");

//escribir arvhivos sin remplazar
// a significa append añadir

fs.writeFileSync("./data/.fourth.txt", "mensaje desde el cuarto archivo ", {
  flag: "a",
});

const fs = require("fs");

fs.readFile("./data/first.txt", "utf-8", (error, resolve) => {
  if (error) {
    console.log(error);
  }
  console.log(resolve);
  fs.readFile("./data/second.txt", "utf-8", (error, resolve) => {
    if (error) {
      console.log(error);
    }
    console.log(resolve);
    fs.writeFile(
      "./data/fifth.txt",
      "mensaje desde el quinto archivo",
      (err, res) => {
        if (err) {
          console.log(err);
        }
        console.log("creado con exito");
      }
    );
  });
});

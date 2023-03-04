const { readFile } = require("fs");

const getData = (pathFile) => {
  return new Promise((resolve, reject) => {
    readFile(pathFile, "utf-8", (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });
};

getData("./data/first.txt")
  .then((res) => console.log(res))
  .then(() => getData("./data/second.txt"))
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

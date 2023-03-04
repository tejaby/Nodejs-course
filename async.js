const { readFile } = require("fs");

const Data = (pathFile) => {
  return new Promise((resolve, reject) => {
    readFile(pathFile, "utf-8", (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });
};

const getData = async (pathFile) => {
  try {
    const res = await Data(pathFile);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

getData("./data/first.txt");
getData("./data/second.txt");

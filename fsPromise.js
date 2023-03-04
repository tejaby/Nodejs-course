const { readFile } = require("fs/promises");

const getData = async (pathFile) => {
  try {
    const res = await readFile(pathFile, "utf-8");
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

getData("./data/first.txt");

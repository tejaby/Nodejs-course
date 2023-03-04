const { readFile } = require("fs");
const { promisify } = require("util");

const readFilePromise = promisify(readFile);

const getData = async (pathFile) => {
  try {
    const res = await readFilePromise(pathFile, "utf-8");
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

getData("./data/first.txt");

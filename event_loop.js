const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    return res.end("inicio");
  } else if (req.url === "/about") {
    for (let i = 0; i < 100000; i++) {
      console.log(Math.random() * i);
    }
    return res.end("acerca de");
  } else {
    res.end("not found");
  }
});

server.listen(3000);

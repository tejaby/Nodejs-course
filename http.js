const http = require("http");

http
  .createServer(function (request, response) {
    if (request.url === "/") {
      response.write("inicio");
      return response.end();
    } else if (request.url === "/about") {
      response.write("acerca de");
      return response.end();
    }

    response.write(`<h1>Not Found</h1>
    <a href="/">regresar</a>`);
    response.end();
  })
  .listen(3000);

console.log("servidor escuchando en el puerto 3000");

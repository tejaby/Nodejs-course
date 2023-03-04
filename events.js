const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("event", (data) => {
  console.log("recibido"), console.log(data);
});

customEmitter.emit("event", "conectado");

const http = require("http");

const server = http.createServer((req, res) => {
  res.write("welcome to Our home page");
  res.end();
});

server.listen(5000);

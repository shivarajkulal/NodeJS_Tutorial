
//core modules such as fs, Buffer, Http,...

const http = require("http");
const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("Welcome to this page!");
  res.end();
});
server.listen(3000, () => {
  console.log("server runing at port 3000");
});

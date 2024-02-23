
//Basic API

const http = require("http");
const data = require("./data");
http
  .createServer((req, resp) => {
    resp.writeHead(500, { "Content-Type": "applicationjson" });
    resp.write(JSON.stringify(data));
    resp.end();
  })
  .listen(5000);

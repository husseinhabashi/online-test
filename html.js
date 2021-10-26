const http = require("http");
const fs = require("fs")
var hostname = "localhost";
const port = 4000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('content-type', 'text/html')
  fs.readFile('./index.html', 'utf8', function(err, text){
    res.end(text);
  }); 
});

server.listen(port, hostname, () => {
 console.log(`Server running at   http://${hostname}:${port}/`);
});
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(4000, () => {
    console.log(`Server is working on http://localhost:4000`); 
  });;



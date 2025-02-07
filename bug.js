const http = require('http');

const server = http.createServer((req, res) => {
  // Handle the request
  console.log('Request received');
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

// The bug is that the server doesn't handle errors properly. If there is an error, the server crashes without logging the error or providing a useful message.
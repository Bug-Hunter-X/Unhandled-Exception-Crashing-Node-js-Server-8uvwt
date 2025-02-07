const http = require('http');

const server = http.createServer((req, res) => {
  // Handle the request
  console.log('Request received');
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

const port = 3000;
server.on('error', (err) => {
  console.error('Server error:', err);
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
// Create web server
// Create a web server that listens on port 3000 and when it receives a request it reads the file comments.json and returns a JSON response with the contents of the file.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile('comments.json', (err, data) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(data);
  });
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
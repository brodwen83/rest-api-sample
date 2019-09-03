const http = require('http');
const port = 3000;

const requestHandler = (request, response) => {
  console.log(`New request to: ${request.url}`);
  response.end("Hello, World!");
}

const server = http.createServer(requestHandler);

server.listen(port, ()=>{
  console.log(`listening to port: ${port}`);
})
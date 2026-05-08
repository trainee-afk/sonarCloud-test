// server.js

const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/plain",
  });

  res.end("Server is running");
});

const PORT = ;

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

const http = require("http");
const serverPort = 5555;

const server = http.createServer((req, res) => {
  let message = "This is problem one solution";
  res.writeHead(200, {
    "Content-Type": "text/plain",
    "Content-Length": message.length,
  });
  res.end(message);
});

server.listen(serverPort, (err) => {
  if (!err) {
    console.log(`Server successfully running on ${serverPort}`);
  } else {
    console.log(err);
    throw err;
  }
});

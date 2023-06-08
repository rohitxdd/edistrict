const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("./home.new.html", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.end(data);
      }
    });
  } else {
    const filePath = `.${req.url}`;
    fs.readFile(filePath, (err, buf) => {
      if (!err) {
        res.end(buf);
      } else {
        res.statusCode = 404;
        res.end();
      }
    });
  }
});

server.listen(3000, () => {
  console.log(`Listening at http://localhost:3000`);
});

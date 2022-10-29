// Type1
// const http = require("http");
// const fs = require("fs");
// const server = http.createServer((req, res) => {
//   fs.readFile("file.txt", (err, data) => {
//     res.end(data);
//   });
// });
// server.listen(3000);

// Type2  -stream read
const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  const stream = fs.createReadStream("./file.txt");
  stream.pipe(res);
});
server.listen(3000);

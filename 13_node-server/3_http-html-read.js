const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.setHeader("Content-Ttpe", "text/html");
    fs.readFile("./html/index.html", (err, data) => {
      if (err) throw err;
      res.end(data);
    });
  } else if (url === "/courses") {
    res.setHeader("Content-Ttpe", "text/html");
    fs.readFile("./html/courses.html", (err, data) => {
      if (err) throw err;
      res.end(data);
    });
  } else {
    res.setHeader("Content-Ttpe", "text/html");
    fs.readFile("./html/not-found.html", (err, data) => {
      if (err) throw err;
      res.end(data);
    });
  }
});

server.listen(8081);

// end()의 인자로 데이터를 넣어주면
// 전송과 마감까지 처리됨

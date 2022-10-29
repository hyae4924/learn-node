const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Academy</title></head>");
    res.write("<body><h1>welcome</h1></body>");
    res.write("<html>");
  } else if (url === "/courses") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Academy</title></head>");
    res.write("<body><h1>Courses</h1></body>");
    res.write("<html>");
  } else {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Academy</title></head>");
    res.write("<body><h1>Not Found</h1></body>");
    res.write("<html>");
  }

  res.end();
});

server.listen(8080);

// writeHeader() vs setHeader()
// res.writeHead() 상태코드 및 전체적인 hearder 설정가능
// res.setHeader(); 특정한 이름의 헤더에 대한 값을 설정할 수 있음

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.setHeader("Content-Ttpe", "text/html");
    fs.createReadStream("./html/index.html").pipe(res);
  } else if (url === "/courses") {
    res.setHeader("Content-Ttpe", "text/html");
    fs.createReadStream("./html/courses.html").pipe(res);
  } else {
    res.setHeader("Content-Ttpe", "text/html");
    fs.createReadStream("./html/not-found.html").pipe(res);
  }
});

server.listen(8080);

// res.end() 가 왜 필요없을까?
// 필요 없다기보다는 되려 사용해서는 안된다
// pipe는 자동으로 end()를 호출한다(인자로 조절가능)
//  pipe() 는 비동기로 nonblocking되고
// 스트리밍이 끝나기도전애 end()호출이 되버림

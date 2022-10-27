const http = require("http");
// const http2 =require('http2') http2 => https

// 서버생성
const server = http.createServer((req, res) => {
  console.log("---------req.headers---------", req.headers);
  console.log("---------req.httpVersion---------", req.httpVersion);
  console.log("---------req.method---------", req.method);
  console.log("---------req.url---------", req.url);
  const url = req.url;
  if (url === "/") res.write("welcome");
  else if (url === "/courses") res.write("courses");
  else res.write("Not Found");
  //   end하지 않으면 끝내지 않고 계속 대기상태에있게됨
  res.end();
});

// 서버청취
server.listen(8080);

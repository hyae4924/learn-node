const http = require("http");
const fs = require("fs");
const ejs = require("ejs");

const name = "jiwoong";
const courses = [
  { name: "HTML" },
  { name: "CSS" },
  { name: "JS" },
  { name: "Node" },
];

const server = http.createServer((req, res) => {
  res.setHeader("Content-Ttpe", "text/html");
  const url = req.url;
  if (url === "/") {
    // ejs를 통한 파일 랜더
    // 간단한 코드니 에러처리는 생략
    ejs.renderFile("./template/index.ejs", { name }, (err, data) => {
      res.end(data);
    });
  } else if (url === "/courses") {
    ejs.renderFile("./template/courses.ejs", { courses }, (err, data) => {
      res.end(data);
    });
  } else {
    ejs.renderFile("./template/not-found.ejs", { name }, (err, data) => {
      res.end(data);
    });
  }
});

server.listen(8080);

// 현재는 빠른 진행을위해 데이터를 메모리상해 저장하기로 하겠다

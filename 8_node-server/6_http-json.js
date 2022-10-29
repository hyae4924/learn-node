const http = require("http");
const fs = require("fs");
const courses = [
  { name: "HTML" },
  { name: "CSS" },
  { name: "JS" },
  { name: "Node" },
];

const server = http.createServer((req, res) => {
  const method = req.method;
  const url = req.url;
  if (url === "/courses") {
    if (method === "GET") {
      // json형태로 보내겠다고 header 설정
      res.writeHead(200, { "Content-TypeL": "application/json" });
      res.end(JSON.stringify(courses));
    } else if (method === "POST") {
      // 클라이언트에서 보내준 데이터를 이용해보겠음
      // post 로 바디에는 json 형태로 보낸다고 가정
      // 여러 방법으로 처리할 수 있지만 버퍼형식으로 진행해보겠음
      const body = [];
      // 버퍼의 형식으로 데이터를 받아옴을 의미함
      req.on("data", chunk => {
        body.push(chunk);
      });
      // 버퍼가 끝이나면
      req.on("end", () => {
        // 버퍼를 합쳐서 스트링으로전환
        const bodyStr = Buffer.concat(body).toString();
        // json 형태로 전환
        const course = JSON.parse(bodyStr);
        // 메모리상의 데이터변경
        courses.push(course);
        // 데이터 변경 성공 코드201
        res.writeHead(201);
        //end 호출
        res.end();
      });
    }
  }
});

server.listen(8080);

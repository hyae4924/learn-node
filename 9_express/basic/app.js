// 미들웨어는 순서가 중요하다
// 같은경로의 경우 여러개의 미들웨어가 등록이가능하고
// (인자로 여러개전달가능, 다시호출도가능)
//  next()를 해주지않으면 다음미들웨어로 넘어가지않는다
// res로 응답을해버리면 next()로 호출해선안됨 거기서끝남
// 하나의 미들웨어안에서 res.send()를 한번만호출할 수 있음

// app.use()
// 모든 라우트에 적용함 메서드에 상관없이
// 만약 경로를 첫번쨰 인자로 전달하면 해당경로부터 하위경로 모두 적용함
// app.all()
// 모든 라우트에 적용함 메서드에 상관없이
// use와 달리 하위경로는 적용안됨
import express from "express";
const app = express();
app.use(express.json()); // body를 읽을 수 있게해줌
app.get(
  "/",
  (req, res, next) => {
    console.log("first");
    next();
  },
  (req, res, next) => {
    console.log("second");
    next();
  }
);
app.get("/", (req, res, next) => {
  console.log("last");
  res.send("hi");
});

app.get("/:id/", (req, res) => {
  // 만약 사용자가 url에 "localhost:8080/12?item=coffe"
  // params와 query를 이용해 사용자의 입력을 받을 수 있다
  console.log(req.path); // "/12"
  console.log(req.params); //{id:12}
  console.log(req.query); //{item:coffe}
  //   res.json({name: "jiwoong"}) json을 보내줄 수 도 있다
  res.setHeader("key", "value"); // 헤더설정가능
  res.status(200).send("hi"); // 클라이언트에게 응답을 꼭해주어야 한다
});

app.post("/", (req, res, next) => {
  console.log(req.body);
});

app.listen(8080);

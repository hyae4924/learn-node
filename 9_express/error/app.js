// error 핸들링에서 중요한 포인트는 2가지이다
//  서버가 죽지 않게하기
// 사용자에게 적절하게 에러사항을 전달해주기

import express from "express";
import fs from "fs";
import fspromises from "fs/promises";
const app = express();
app.use(express.json());

app.get("/file1", (req, res) => {
  // fs.readFileSync 동기적으로 진행되기떄문
  // 외부에있는 에러핸들링에 잡히긴 하지만
  // 상황을 정확히 전달하기위해 try catch로 잡아주는게 좋음
  try {
    const data = fs.readFileSync("/file.txt");
  } catch (err) {
    console.error(err);
  }

  // 비동기로 실행된 함수에서 발생한 에러는 내부의 콜백함수로 전달될뿐
  // 외부로 전달되지 않음 => 마지막에러핸들링에 안잡힘
  // 그래서 콜백으로 처리해줘야함
  fs.readFile("/file1.txt", (err, data) => {
    if (err) {
      res.status(404).send("File not found");
    }
  });
});

// 비동기로 실행되기에
// 내부에러가 외부로 전달되지 않음 => 마지막 핸들링에 안잡힘
// catch로 잡아야함
app.get("/file2", (req, res, next) => {
  fspromises
    .readFile("/file.txt")
    .then(data => {})
    .catch(error => {
      console.error(error);
      res.status(404).send("file not found");
      // next(error)
    });
});

// async함수는 promises가 리턴됨
// 안에코드는 동기적으로실행이되지만
// 에러핸들러에 잡힐 수 없음
// try catch로 처리해주어야함
app.get("/file3", async (req, res) => {
  try {
    const data = await fspromises.readFile("/file.txt");
  } catch (err) {
    console.error(err);
    res.status(404).send("File not found");
  }
});

// 마지막 보루임
// 각 라우트마다 상황에 맞는 에러핸들링코드를
// 남기는게 더좋음
app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ message: "something went wrong" });
});

app.listen(8080);

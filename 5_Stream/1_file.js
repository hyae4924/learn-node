const fs = require("fs");

const beforeMem = process.memoryUsage().rss;
fs.readFile("./file.txt", (error, data) => {
  fs.writeFile("./file2.txt", data, () => {});
  //   calculate
  const afterMem = process.memoryUsage().rss;
  const diff = afterMem - beforeMem;
  const consumed = diff / 1024 / 1024;
  console.log(`Consumed Memory : ${consumed}MB`);
});

//파일을 읽고 생성하는데 사용되는 메모리 계산하기

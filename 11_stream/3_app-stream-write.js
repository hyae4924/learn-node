const fs = require("fs");

// writeStream 생성
const writeStream = fs.createWriteStream("./file3.txt");
writeStream.on("finish", () => {
  console.log("finished"); //해당코드만으로는 실행안됨  여기에 +  .end()호출되어야함
});
// 쓰기시작
writeStream.write("hello");
writeStream.write("world");
// 끝
writeStream.end(); // finish 콘솔에 찍힘

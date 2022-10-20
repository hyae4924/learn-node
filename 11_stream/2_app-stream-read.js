const fs = require("fs");
const data = [];
// 정의를 살펴보면 ReadStream을 리턴함 => 이벤트 등록가능
// on() 메서드는 this 즉 자기자신을 리턴함 => 체이닝가능
fs.createReadStream("./file.txt", {
  //   highWaterMark: 200, //Default: 64 * 1024 보내는크기
  //   encoding: "utf-8", //Default: null
})
  .on("data", chunck => {
    //버퍼형태로 들어옴
    data.push(chunck);
  })
  .on("end", () => {
    console.log(data.join("")); //여기서 문자열로 바뀜
  })
  .on("error", err => {
    console.log(err);
  });

console.log(data);

// fs 모듈의 모든 메서드에는 동기 형식과 비동기 형식이 있습니다
// 1. rename(...,callback(error,data))  : 비동기
// 2. try{renameSync(...)} catch(error){}   : 동기
// 3. promises.rename().then().cathch()  : promise 형태

const fs = require("fs");

// rename
try {
  fs.renameSync("./text.txt", "./text-new.txt");
} catch (error) {
  console.log(error);
}

fs.rename("./text-new.txt", "./text.txt", error => {
  console.log(error);
});

fs.promises
  .rename("./text2.txt", "./text2-new.txt") //
  .then()
  .catch(console.log);

//  두개의 비동기들중
// 콜백함수는 태스크 큐에
// 프로미스 함수는 마이크로 태스크 큐에
// 즉 각각 다른 큐에 들어 가게 된다
// 해서 어떤게 먼저 실행될지 알수 없다

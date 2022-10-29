// Writable 객체에서 제공하는 Event는 다음과 같습니다.
// close => 스트림이 닫힌 경우 발생하는 이벤트입니다. 그 후의 이벤트는 발생하지 않습니다.
// drain => writable stream이 추가로 데이터 쓰기 작업이 가능한 경우 발생합니다.
// error => 쓰기작업이나 파이핑 데이터가 오류가 생긴경운 발생하는 이벤트 입니다.
// finish => stream.end()(모든 데이터가 flush())후에 발생하는 이벤트 입니다.
// pipe => 읽기 스트림이 쓰기스트림을 목적지로 감을 경우 발생합니다.

// writable 객체에서 제공하는 메소드 들중
// writable.writable => boolean true or false
// writable.end([chunk][, encoding][, callback]) => writable의 종료를 알린다.
// writable.writableLength => highwatermark
// writable.write(chunk[, encoding][,callback])

const fs = require("fs");
// writeStream 생성

const writeStream = fs.createWriteStream("./file3.txt");
writeStream.on("finish", () => {
  console.log("finished");
  //해당코드는  writeStrem.close()호출된 후 실행됨
});

// 쓰기시작
writeStream.write("hello");
writeStream.write("world");

// 끝
writeStream.close(); // finish 콘솔에 찍힘

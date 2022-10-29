// 파이프 => 스트림과 스트림을 연결할수있음
// 한 스트림의 출력을 다른 스트림에 연결
// 파이프 체이닝 가능
const fs = require("fs");
const readStream = fs.createReadStream("./file.txt");
const writeStream = fs.createWriteStream("./file4.zip");

// 압축모듈
const zlib = require("zlib");
const zlibStream = zlib.createGzip();

//  readStream 과 zlibStream 과 writeStream 연결
const piping = readStream //
  .pipe(zlibStream)
  .pipe(writeStream);

// 파이핑 되어 writeStream으로 연력된경우 close나 end해주 지 않아도 실행됨
piping.on("finish", () => {
  console.log("done");
});

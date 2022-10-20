const fs = require("fs");
const readStream = fs.createReadStream("./file.txt");
const writeStream = fs.createWriteStream("./file4.zip");

// 압축모듈
const zlib = require("zlib");
const zlibStream = zlib.createGzip();

// 파이프 => 스트림과 스트림을 연결할수있음
//  readStream 과 zlibStream 과 writeStream 연결
const piping = readStream.pipe(zlibStream).pipe(writeStream);
piping.on("finish", () => {
  console.log("done");
});

const fs = require("fs").promises;

// read a file
fs.readFile("./text.txt") //buffer 형태로
  .then(console.log)
  .catch(console.error);
fs.readFile("./text.txt", "utf8") //인코딩된 형태로
  .then(console.log)
  .catch(console.error);

//write a file
fs.writeFile("./file.txt", "I'm always overiding") //(파일이 없으면 만들고,있으면 덮어씀)
  .catch(console.log);

fs.appendFile("./file.txt", " but appedFile not overriding just add ") //
  .then(() => {
    fs.copyFile("./file.txt", "./file2.txt") //
      .catch(console.error);
  })
  .catch(console.error);
// 위 코드(12,15)는 어떤게 먼저 실행될지 모름

// make folder
fs.mkdir("sub-folder") //
  .catch(console.log);

// 디렉토리안모든 파일읽기(배열안에 스트링으로리턴됨)
fs.readdir("./") //
  .then(console.log)
  .catch(console.error);

// 파일 열기(open),닫기(close),정보(state),삭제(unlink,rmdir) 등등 다양한 api가있음

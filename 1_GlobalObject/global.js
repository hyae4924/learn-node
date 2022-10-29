const fs = require("fs");
// 노드모듈의 사용으로 에디터에게 노드임을 알려줌
console.log(global);
// 커맨드 +클릭으로 node에서
// global 의 interface를 살펴보고 어떤게 있는지 대강 봐두자

global.hello = () => {
  global.console.log("hello");
  //   global은 생략이 가능하다
};
global.hello();
hello();

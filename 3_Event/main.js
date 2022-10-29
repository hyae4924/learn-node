const logger = require("./logger.js");
const emitter = new logger.Logger();

emitter.on("log", string => {
  console.log(string);
});

emitter.log(() => {
  console.log("doing something...");
});

// require된 logger를 통해 새로운 인스턴스를 만들고
//  이벤트 등록을 해준다
//  이렇게하면 재사용성을 높일 수 있다

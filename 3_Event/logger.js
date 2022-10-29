const EventEmitter = require("events");
class Logger extends EventEmitter {
  log(callback) {
    this.emit("log", "started...");
    callback();
    this.emit("log", "ended!");
  }
}

module.exports.Logger = Logger;

// 재사용성을 높이기위해 EventEmitter를 상속받는
// Logger라는 class를 새로 만들고 원하는 기능을 메소드로 만들어
// export 시킨다

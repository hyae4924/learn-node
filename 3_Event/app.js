// Many objects in a Node emit events,
// All objects which emit events are the instances of events.EventEmitter.
// EventEmitter 인스턴스에 오류가 발생하면 '오류' 이벤트가 발생합니다.
// 새로운 리스너가 추가되면 'newListener' 이벤트가 발생하고,
// 리스너가 제거되면 'removeListener' 이벤트가 발생합니다

// EventEmitter 클래스는 이벤트 모듈에 있습니다.
const EventEmitter = require("events");
const emitter = new EventEmitter();

const callback1 = args => {
  console.log("first callback: ", args);
};

// 이벤트등록방방법
emitter.on("emit", callback1);
emitter.on("emit", args => {
  console.log("second callback: ", args);
});

// 이벤트 실행
emitter.emit("emit", [{ message: "show" }, { message: "that way" }]);

// 이벤트 제거
emitter.removeListener("emit", callback1);
// emitter.removeAllListeners(); 모두제거

// 이벤트 재실행
emitter.emit("emit", [{ message: "show" }, { message: "that way" }]);

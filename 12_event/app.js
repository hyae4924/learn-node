const EventEmitter = require("events");
const emitter = new EventEmitter();

const callback1 = args => {
  console.log("first callback: ", args);
};

// emit
// : Synchronously calls each of the listeners registered for the event namedeventName, in the order they were registered, passing the supplied arguments to each.
// : 이벤트 사용자 정의가능
// : 하나의 이름에 여러개 이벤트를 동기적으로 넣을 수 있음
// : 호출시 모두 실행됨

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

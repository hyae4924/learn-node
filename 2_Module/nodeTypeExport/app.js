const counter = require("./counter.js");

counter.increase();
counter.increase();
counter.increase();
counter.increase();
console.log(counter.getCount());
// 함수는 클로저기능때문에 선언될때
// 외부의 변수를 기억하고있음
// 다른곳에서 require되어서도
// 변수를 기억하고있기때문에 캡슐화 가능

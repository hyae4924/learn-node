console.log("code1"); //1번실행

//5번실행
// 0초를 보장하진 않음 ,콜스텍이빌때까지 기다려야해서
setTimeout(() => {
  console.log("setTimeout 0");
}, 0); //
console.log("code2"); //2번실행
//6번실행
setImmediate(() => {
  console.log("setImmediate");
});
// setImmediate(function) 은 setTimeout(fuc,0)과 비슷하게 동작함

console.log("code3"); //3번실행
//4번실행
process.nextTick(() => {
  console.log("process.nextTick");
});

// process.nextTick(function)은 호출 위치위 별개로비동기중에 가장빨리 실행됨

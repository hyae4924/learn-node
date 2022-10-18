let num = 1;
// setInterval(function,time)
// 시간주기로 반복해줌
// 종료해주려면
// 1. setInterval(function,time)이 리턴하는 값을 저장
// 2. clrearInterval(리턴된값)
const interval = setInterval(() => {
  console.log(num++);
}, 1000);

// setTimeout(func,time) 예약호출
setTimeout(() => {
  console.log("Time Out");
  // 인터벌종료
  clearInterval(interval);
}, 6000);

let count = 0;
function increase() {
  count++;
}
function getCount() {
  return count;
}

// type1
module.exports.getCount = getCount;
module.exports.increase = increase;
// type2
// module.exports ={
//     increase,getCount
// }

// 초기상태
// console.log(module.exports === exports); =>true

// 참조끊김
// exports = {};
// console.log(module.exports === exports); =>false

// 만약 아래와같이 새로운 객체를 할당하면 내보내기 실패함
// exports = {increase};

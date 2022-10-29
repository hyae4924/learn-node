// basic--------------------------------------------------------
console.log("logging...");
console.clear();

// log level--------------------------------------------------------
console.log("log"); //개발시
console.info("info"); //정보 남길때
console.warn("warn"); //경보
console.error("error"); //에러, 사용자 에러, 시스템 에러

// print object--------------------------------------------------------
const student = {
  name: "jiwoong",
  age: 27,
  family: { father: "father", bigSister: "bigSister" },
};
console.log(student);
console.table(student); //테이블 형태로보여줌
console.dir(student, { depth: 1 }); //옵션줄수 있음

// measuring time--------------------------------------------------------
// 라벨링된 콘솔코드 시작부터 끝까지의 시간 보여줌
console.time("for loop"); // 레이블(라벨 ==이름표)지정해주면됨
for (let i = 0; i < 10; i++) {
  i++;
}
console.timeEnd("for loop");

// counting--------------------------------------------------------
// 어떤함수가 몇번 호출되었는지 알기 유용
function a() {
  console.count("a function"); // 레이블(라벨 ==이름표)지정해주면됨
}
a();
a();
console.countReset("a function"); // 레이블링된 것의 카운트 초기화
a();

// trace(발자국)--------------------------------------------------------
// 해당 함수의 호출원인을 알수있음(디버깅에서 유용)
const f1 = () => f2();
const f2 = () => f3();
const f3 = () => {
  console.log("f3");
  console.trace();
};
f1();

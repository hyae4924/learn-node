// -------'this' in function scope--------
// 함수내에서의 this 는 global이다
function hello() {
  console.log("-----functuin scope------");
  console.log(global === this);
}
hello();

//-------'this' in class scope -------
// 클래스내에서 this는 해당인스턴스를 가르킨다
class A {
  constructor(num) {
    this.num = num;
  }
  memberFuction() {
    console.log("-------class scope-----");
    console.log(this);
  }
}

const a = new A(1);
a.memberFuction();

//-------'this' in golbal scope -------
// 글로벌에서의 this는 module.exports이다
console.log("------global scope-----");
console.log(this);
console.log(this === module.exports);

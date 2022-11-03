# 오류처리 미들웨어

에러 핸들링을 하는 미들웨어는 4개의 인자를 사용해서 정의하도록 한다. <br>
(err, req, res, next)

# 에러핸들링 팁

1. Express.js 5.0.0 -alpha.7 버전에는<br>
   비동기함수에대한 에러도 마지막 에러미들웨어에 잡힐 수 있게 지원한다

2. 실전 프로젝트같은경우는<br>
   express-async-error 라이브러리를 이용하면<br>
   비동기함수에대한 에러도 잡을수 있다<br>
   단 미들웨어내에서 프러미스를 리턴하는경우만 잡을 수 있음<br>

- 미들웨어 자체가 async이거나(프러미스가 리턴됨)<br>
- 비동기함수(프러미스 형태임)를 return 해주면 됨

```js
// npm i express-async-error 후 아래 코드추가
import {} from "express-async-errors";
```

# 어플리케이션 레벨 미들웨어

아래처럼최상위레벨인 app오브젝트의 인스턴스에 바인드 시킨다<br>
app.use() 및 app.METHOD() ) 함수(\*method: get, post 등등)를 이용할 수 있다

```js
const app = express();

app.use((req, res, next) => {});
```

# 라우터 레벨 미들웨어

라우터 레벨 미들웨어는 express.Router() 인스턴스에 바인드된다는 점을 제외하면<br>
어플리케이션 레벨 미들웨어와 동일한 방식으로 작동한다.

# 서드파티 미들웨어

내부미들웨어 외의 유용한 미들웨어를<br>
npm에서 이용하면된다
application 레벨이든 router 레벨이든 로드해서 사용하면 된다.

- cors : cors정책 설정을 쉽게할수있다
- helmet :보안에대한 헤더옵션 설정쉽게 할 수있다
- morgan : 요청마다 기록을 남길 수 있다
- cookie-parser :요청의 쿠키를 볼수있게 해준다

# 내부미들웨어

- express.json : REST API의 body를 조회가능하게해줌
- express.urlencoded :HTML Form 의 submmit 에의한 요청의 바디를 조회할 수 있음(ssr가능)
- express.static("public") : 디렉토리를 전달하면 정적파일을 제공할 수있음(ssr가능)

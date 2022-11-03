import express from "express";
import postRouter from "./router/post.js";
import userRouter from "./router/user.js";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import helmet from "helmet";
const app = express();

app.use(express.json()); //  REST API의 body를 조회가능하게해줌 (내부미들웨어)
app.use(express.urlencoded({ extended: false })); //HTML Form 의 submmit 에의한 요청의 바디를 조회할 수 있음(ssr에서사용함)(내부미들웨어)
app.use(express.static("public")); // 디렉토리를 전달하면 정적파일을 제공할 수있음(ssr가능)(내부미들웨어)

app.use(cookieParser());
app.use(cors()); //cors정책 해결, 옵션줄 수 있음
app.use(morgan("combine")); // 기록남김
app.use(helmet()); //보안에필요한 헤더의 옵션을 추가해줌

app.use("/posts", postRouter);
app.use("/users", userRouter);

app.listen(8080);

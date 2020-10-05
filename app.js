import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser"; // 이게 있어야 req 객체를 읽어들일 수 있음
import { localsMiddleware } from "./middlewares";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";

const app = express();

app.use(helmet({ contentSecurityPolicy: false })); // 보안 약화
app.set("view engine", "pug"); // view

app.use("/static", express.static("static"));
app.use("/uploads", express.static("uploads")); // 프로젝트 안의 uploads 폴더를 찾아 파일 확인하는 미들웨어
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan("dev"));

app.use(localsMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;

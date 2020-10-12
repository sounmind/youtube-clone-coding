import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser"; // 이게 있어야 req 객체를 읽어들일 수 있음
import passport from "passport";
import "./passport";
import mongoose from "mongoose";
import session from "express-session";
import MongoStore from "connect-mongo";
import { localsMiddleware } from "./middlewares";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";

dotenv.config();

const app = express();

const CookieStore = MongoStore(session);

app.use(helmet({ contentSecurityPolicy: false })); // 보안 약화
app.set("view engine", "pug"); // view

app.use("/static", express.static("static"));
app.use("/uploads", express.static("uploads")); // 프로젝트 안의 uploads 폴더를 찾아 파일 확인하는 미들웨어
app.use(cookieParser());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(morgan("dev"));

app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: true,
    saveUninitialized: false,
    store: new CookieStore({
      mongooseConnection: mongoose.connection,
    }),
  })
);
app.use(passport.initialize()); // passport 실행
app.use(passport.session()); // 쿠키 정보에 해당하는 사용자 찾기

app.use(localsMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;

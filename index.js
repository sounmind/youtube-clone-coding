import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();
const PORT = 4000;

const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (requestObject, responseObject) => responseObject.send("Hello from home!");

const handleProfile = (requestObject, responseObject) => responseObject.send("You are on my profile."); // 진짜 웹사이트는 Html css를 send 해야 한다.

app.use(cookieParser());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true})); // 갖고 있는 인자가 많다. // 다양한 형식으로 들어오는 유저 정보를 받아들이기 위해!
app.use(helmet());
app.use(morgan("dev"));

const middleware = (req, res, next) => {
  res.send('not happening'); // next() 대신에 res.send가 있는 middleware은 연결을 끊을 수 있다.
}

app.get("/", handleHome); // 미들웨어를 중간에 넣었다!! 하지만 이 상태에선 구글 크롬으로부터 온 요청을 계속 처리할 지에 대해 권한을 주지 않았다.

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);

import express from "express";
const app = express();
const PORT = 4000;

const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (requestObject, responseObject) => responseObject.send("Hello from home!");

const handleProfile = (requestObject, responseObject) => responseObject.send("You are on my profile."); // 진짜 웹사이트는 Html css를 send 해야 한다.

const betweenHome = (req, res, next) => {
  console.log("I'm between");
  next();
};

app.get("/", handleHome); // 미들웨어를 중간에 넣었다!! 하지만 이 상태에선 구글 크롬으로부터 온 요청을 계속 처리할 지에 대해 권한을 주지 않았다.

app.use(betweenHome); // 모든 웹사이트 사용에 대해서 미들웨어를 넣기 // 순서가 중요하다! // 이 아래에 모든 미들웨어를 둔 다음에 라우트를 처리해야 모든 기록을 받을 수 있다.

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
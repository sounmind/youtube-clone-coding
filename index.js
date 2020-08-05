import express from "express";
const app = express();
const PORT = 4000;

// app.listen(4000); // 포트넘버 4000
/*  
localhost:4000 으로 접속하면 `Cannot GET /`이라고 웹페이지에 출력된다.
일단 서버가 listen 하고 있다는 뜻. 최소한 서버가 있다는 뜻!
*/

/*
package.json 파일 내부에 아래와 같이 수정하면 node index.js 명령 대신, npm start 로 실행할 수 있게 된다.
 ...
 ...
 ...
  "dependencies": {
    "express": "^4.17.1"
  },
  "scripts":{
    "start": "node index.js" 
  }
}
*/

const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (requestObject, responseObject) => responseObject.send("Hello from home!")


const handleProfile = (requestObject, responseObject) => responseObject.send("You are on my profile."); // 진짜 웹사이트는 Html css를 send 해야 한다.

app.get("/", handleHome);
app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
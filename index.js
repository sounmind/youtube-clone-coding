const express = require('express'); // node modules을 어딘가에서 가져오는 것, 괄호 안에 있는 이름의 폴더를 찾으려고 하고, 못 찾으면 node_modules 안에서 찾는다.
const { response } = require('express');
const app = express(); // express application 실행 및 선언
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

function handleListening(){
  console.log(`Listening on: http://localhost:${PORT}`);
}

function handleHome(requestObject, responseObject){
  console.log(requestObject);
  responseObject.send("Hello from home!")
}

function handleProfile(requestObject, responseObject){
  console.log(requestObject);
  responseObject.send("You are on my profile."); // 진짜 웹사이트는 Html css를 send 해야 한다.
}

app.get("/", handleHome);
app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
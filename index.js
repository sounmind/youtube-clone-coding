const express = require('express'); // node modules�� ��򰡿��� �������� ��, ��ȣ �ȿ� �ִ� �̸��� ������ ã������ �ϰ�, �� ã���� node_modules �ȿ��� ã�´�.
const { response } = require('express');
const app = express(); // express application ���� �� ����
const PORT = 4000;

// app.listen(4000); // ��Ʈ�ѹ� 4000
/*  
localhost:4000 ���� �����ϸ� `Cannot GET /`�̶�� ���������� ��µȴ�.
�ϴ� ������ listen �ϰ� �ִٴ� ��. �ּ��� ������ �ִٴ� ��!
*/

/*
package.json ���� ���ο� �Ʒ��� ���� �����ϸ� node index.js ��� ���, npm start �� ������ �� �ְ� �ȴ�.
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
  responseObject.send("You are on my profile."); // ��¥ ������Ʈ�� Html css�� send �ؾ� �Ѵ�.
}

app.get("/", handleHome);
app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
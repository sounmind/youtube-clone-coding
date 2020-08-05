import express from "express";
const app = express();
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

const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (requestObject, responseObject) => responseObject.send("Hello from home!")


const handleProfile = (requestObject, responseObject) => responseObject.send("You are on my profile."); // ��¥ ������Ʈ�� Html css�� send �ؾ� �Ѵ�.

app.get("/", handleHome);
app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
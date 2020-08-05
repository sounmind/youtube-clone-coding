import express from "express";
const app = express();
const PORT = 4000;

const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (requestObject, responseObject) => responseObject.send("Hello from home!");

const handleProfile = (requestObject, responseObject) => responseObject.send("You are on my profile."); // ��¥ ������Ʈ�� Html css�� send �ؾ� �Ѵ�.

const betweenHome = (req, res, next) => {
  console.log("I'm between");
  next();
};

app.get("/", handleHome); // �̵��� �߰��� �־���!! ������ �� ���¿��� ���� ũ�����κ��� �� ��û�� ��� ó���� ���� ���� ������ ���� �ʾҴ�.

app.use(betweenHome); // ��� ������Ʈ ��뿡 ���ؼ� �̵��� �ֱ� // ������ �߿��ϴ�! // �� �Ʒ��� ��� �̵��� �� ������ ���Ʈ�� ó���ؾ� ��� ����� ���� �� �ִ�.

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
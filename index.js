import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();
const PORT = 4000;

const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (requestObject, responseObject) => responseObject.send("Hello from home!");

const handleProfile = (requestObject, responseObject) => responseObject.send("You are on my profile."); // ��¥ ������Ʈ�� Html css�� send �ؾ� �Ѵ�.

app.use(cookieParser());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true})); // ���� �ִ� ���ڰ� ����. // �پ��� �������� ������ ���� ������ �޾Ƶ��̱� ����!
app.use(helmet());
app.use(morgan("dev"));

const middleware = (req, res, next) => {
  res.send('not happening'); // next() ��ſ� res.send�� �ִ� middleware�� ������ ���� �� �ִ�.
}

app.get("/", handleHome); // �̵��� �߰��� �־���!! ������ �� ���¿��� ���� ũ�����κ��� �� ��û�� ��� ó���� ���� ���� ������ ���� �ʾҴ�.

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);

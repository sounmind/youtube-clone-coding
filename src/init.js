import "@babel/polyfill"; // async function을 사용하기 위해 불러왔던 것
import dotenv from "dotenv";
import app from "./app";
import "./models/Comment";
import "./models/User";
import "./models/Video";
import "./db";

dotenv.config();

const PORT = process.env.PORT || 4000;

const handleListening = () =>
  console.log(`✅ Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);

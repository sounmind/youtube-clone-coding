import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// 해당 경로에 string으로 된 DB를 요청
mongoose.connect(process.env.MONGO_URL, {
  // 새로운 버전의 Mongoose의 기능, DB 연결할 때마다 configuration 설정
  useNewUrlParser: true,
  useFindAndModify: false,
});

const db = mongoose.connection;

const handleOpen = () => console.log("✅ Connected to DB");
const handleError = (error) =>
  console.log(`❌ Error on DB connection: ${error}`);

db.once("open", handleOpen); // 한 번 실행
db.on("error", handleError);

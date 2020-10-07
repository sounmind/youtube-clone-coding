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

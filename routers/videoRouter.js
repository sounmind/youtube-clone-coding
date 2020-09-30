import express from "express";
import routes from "../routes";
import {
  getUpload,
  postUpload,
  videoDetail,
  editVideo,
  deleteVideo,
} from "../controllers/videoController";
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();

videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload); // uploadVideo -> 미들웨어

videoRouter.get(routes.videoDetail(), videoDetail); // 라우트에 있는 함수니까 괄호()를 붙여서 실행시켜줘야 한다.
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;

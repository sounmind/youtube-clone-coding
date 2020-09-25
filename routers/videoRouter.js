import express from "express";
import routes from "../routes";
import {
    videos,
    getUpload,
    postUpload,
    videoDetail,
    editVideo,
    deleteVideo
  } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, postUpload);

videoRouter.get(routes.videoDetail(), videoDetail); // 라우트에 있는 함수니까 괄호()를 붙여서 실행시켜줘야 한다.
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;
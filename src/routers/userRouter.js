import express from "express";
import routes from "../routes";
import {
  userDetail,
  getEditProfile,
  getChangePassword,
  postChangePassword,
  postEditProfile,
} from "../controllers/userController";
import { onlyPrivate, uploadAvatar } from "../middlewares";

const userRouter = express.Router();

userRouter.get(routes.editProfile, onlyPrivate, getEditProfile); // 이 라우터를 이것을 userDetail 아래에 두면 edit-profile을 id로 인식하기 때문에 상단에 배치
userRouter.post(routes.editProfile, onlyPrivate, uploadAvatar, postEditProfile);
userRouter.get(routes.changePassword, onlyPrivate, getChangePassword);
userRouter.post(routes.changePassword, onlyPrivate, postChangePassword);
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;

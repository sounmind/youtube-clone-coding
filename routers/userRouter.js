import express from "express";
import routes from "../routes";
import {
    users,
    userDetail,
    editProfile,
    changePassword
  } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.editProfile, editProfile); // 이 라우터를 이것을 userDetail 아래에 두면 edit-profile을 id로 인식하기 때문에 상단에 배치
userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;
import routes from "./routes";
import multer from "multer";

export const multerVideo = multer({ dest: "videos/" });

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "WeTube"; // title에 이 변수를 쓸 수 있다.
  res.locals.routes = routes; // partials/header에서 링크에 routes를 변수처럼 쓸 수 있다.
  res.locals.user = {
    // login 확인하기 위한 fake data
    isAuthenticated: true,
    id: 1,
  };
  next();
};

// single -> 하나의 파일만 업로드 할 수 있다
export const uploadVideo = multerVideo.single("videoFile"); // form에서 받아온 name

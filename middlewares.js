import multer from "multer";
import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "WeTube"; // title에 이 변수를 쓸 수 있다.
  res.locals.routes = routes; // partials/header에서 링크에 routes를 변수처럼 쓸 수 있다.
  res.locals.user = {
    // login 확인하기 위한 fake data
    isAuthenticated: false,
    id: 1,
  };
  next();
};

export const multerVideo = multer({ dest: "uploads/videos/" });

// videoRouter.js에서 쓰임
export const uploadVideo = multerVideo.single("videoFile"); // form에서 받아온 name = videoFile
// .single(fieldname): 인자에 명시된 이름의 단수 파일을 전달 받는다. 이 파일은 req.file에 저장된다.

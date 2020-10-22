import multer from "multer";
import multerS3 from "multer-s3";
import aws from "aws-sdk";
import routes from "./routes";

const s3 = new aws.S3({
  accessKeyId: process.env.AWS_ACCESS,
  secretAccessKey: process.env.AWS_PRIVATE,
  region: "ap-northeast-2",
});

const multerVideo = multer({
  stroage: multerS3({
    s3,
    acl: "public-read",
    bucket: "youtube-clone-coding/video", // s3에서 만들어 놓은 버킷 이름에 하위 폴더
  }),
});

const multerAvatar = multer({
  storage: multerS3({
    s3,
    acl: "public-read",
    bucket: "youtube-clone-coding/avatar",
  }),
});

export const uploadVideo = multerVideo.single("videoFile");
export const uploadAvatar = multerAvatar.single("avatar");

export const localsMiddleware = async (req, res, next) => {
  res.locals.siteName = "WeTube"; // title에 이 변수를 쓸 수 있다.
  res.locals.routes = routes; // partials/header에서 링크에 routes를 변수처럼 쓸 수 있다.
  res.locals.loggedUser = req.user || null; //  req object의 user 정보를 local.user로 만들어줌. 처음에 user 정보가 없으면 빈 object 입력되도록
  next();
};

// 로그아웃 상태인 경우에만 Join 허용
export const onlyPublic = (req, res, next) => {
  if (req.user) {
    res.redirect(routes.home);
  } else {
    next();
  }
};

export const onlyPrivate = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect(routes.home);
  }
};

// // videoRouter.js에서 쓰임
// export const uploadVideo = multerVideo.single("videoFile"); // form에서 받아온 name = videoFile
// export const uploadAvatar = multerAvatar.single("avatar");
// // .single(fieldname): 인자에 명시된 이름의 단수 파일을 전달 받는다. 이 파일은 req.file에 저장된다.

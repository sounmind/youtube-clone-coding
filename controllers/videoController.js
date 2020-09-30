import routes from "../routes";
import Video from "../models/Video";
import { render } from "pug";

export const home = async (req, res) => {
  // async와 await 사용
  try {
    const videos = await Video.find({}); // 모든 비디오를 찾음 // error가 생겨도 다음 줄 실행 -> try catch 필요
    // render 함수의 첫번째 인자는 템플릿, 두번째 인자는 템플릿에 추가할 정보가 담긴 객체다.
    res.render("home", { pageTitle: "Home", videos: videos });
  } catch (error) {
    console.log(error);
    render.render("home", { pageTitle: "Home", videos: [] });
  }
};

export const search = (req, res) => {
  const {
    query: { term: searchingBy },
  } = req;
  // ES6 이전의 방식: const searchingBy = req.query.term;
  res.render("search", {
    pageTitle: "Search",
    searchingBy: searchingBy,
    videos,
  }); // 그냥 serachingBy만 입력해줘도 Babel이 같은 의미로 해석해준다.
};

export const getUpload = (req, res) => {
  res.render("upload", {
    pageTitle: "Upload",
  });
};

export const postUpload = async (req, res) => {
  const {
    body: { title: title, description: description },
    file: { path: path },
  } = req;

  // 비디오 데이터베이스에 데이터 추가
  const newVideo = await Video.create({
    fileUrl: path,
    title,
    description,
  });
  console.log(newVideo);

  res.redirect(routes.videoDetail(newVideo.id));
};

export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "Video Detail" });
export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video" });
export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" });

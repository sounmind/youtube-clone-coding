import routes from "../routes";
import Video from "../models/Video";

export const home = async (req, res) => {
  // async와 await 사용
  try {
    const videos = await Video.find({}).sort({ _id: -1 });
    // 모든 비디오를 찾음 // error가 생겨도 다음 줄 실행 -> try catch 필요
    // render 함수의 첫번째 인자는 템플릿, 두번째 인자는 템플릿에 추가할 정보가 담긴 객체다.
    res.render("home", { pageTitle: "Home", videos });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "Home", videos: [] });
  }
};

export const search = async (req, res) => {
  const {
    query: { term: searchingBy },
  } = req;
  let videos = [];
  try {
    videos = await Video.find({
      title: { $regex: searchingBy, $options: "i" },
    });
  } catch (error) {
    console.log(error);
  }
  // ES6 이전의 방식: const searchingBy = req.query.term;
  res.render("search", {
    pageTitle: "Search",
    searchingBy,
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
    body: { title, description },
    file: { path },
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

export const videoDetail = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const video = await Video.findById(id);
    console.log(video);
    res.render("videoDetail", { pageTitle: video.title, video, routes });
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};
export const getEditVideo = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const video = await Video.findById(id);
    console.log(video);
    res.render("editVideo", {
      pageTitle: `Edit ${video.title}`,
      video,
      routes,
    });
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

export const postEditVideo = async (req, res) => {
  const {
    params: { id },
    body: { title, description }, // form에서 가져온 새로 씌여질(update될) 새로운 내용
  } = req;
  try {
    // findOneAndUpdate의 첫번째 인자는 이 id를 가지고 있는 모델을 가리킨다.
    // 따라서 이 아이디가 가리키고 있는 모델의 요소(두번째 인자의 요소)의 값을 update 한다.
    await Video.findOneAndUpdate({ _id: id }, { title, description }); // {title: title, description: description} 으로 좌측은 Key이고, 우측의 Value가 새로 씌여질 내용이다.
    res.redirect(routes.videoDetail(id));
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

export const deleteVideo = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    await Video.findOneAndRemove({ _id: id });
  } catch (error) {
    console.log(error);
  }
  res.redirect(routes.home);
};

import routes from "../routes";
import Video from "../models/Video";
import User from "../models/User";
import Comment from "../models/Comment";

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
  console.log("✅", req.file);
  console.log("✅", req.body);
  const {
    body: { title, description },
    file: { location }, // aw3 s3로 파일을 업로드할 때 location에 경로가 저장됨
  } = req;

  // 유저 객체 생성
  try {
    const user = await User.findById(req.user._id);

    // 비디오 데이터베이스에 데이터 추가
    const newVideo = await Video.create({
      fileUrl: location,
      title,
      description,
      creator: user._id,
    });
    user.videos.push(newVideo.id); // 유저가 업로드한 비디오 목록에 해당 비디오 추가
    user.save(); // TypeError: req.user.save is not a function -> User 객체의 인스턴스가 필요!
    req.user.videos.push(newVideo.id); // 미들웨어의 req.user에 최선 정보 업데이트
    res.redirect(routes.videoDetail(newVideo.id));
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

export const videoDetail = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const video = await Video.findById(id)
      .populate("creator")
      .populate("comments");
    // populate() -> 참조된 데이터베이스를 불러와 그대로 객체로 만들어준다.
    console.log(video.comments[0].creator._id);
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
    console.log(video.creator, req.user._id);
    if (Object.is(video.creator, req.user._id)) {
      // 비디오 업로드 한 사람과 현재 접속한 사람이 다를 때
      // 권한이 없는 사용자가 직접 url로 접근할 경우 퇴출
      throw Error();
    } else {
      res.render("editVideo", {
        pageTitle: `Edit ${video.title}`,
        video,
        routes,
      });
    }
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
    const video = await Video.findById(id);
    if (Object.is(video.creator, req.user._id)) {
      // 권한이 없는 사용자가 직접 url로 접근할 경우 퇴출
      throw Error();
    } else {
      await Video.findOneAndRemove({ _id: id });
    }
  } catch (error) {
    console.log(error);
  }
  res.redirect(routes.home);
};

// Register Video View 조회수 등록

export const postRegisterView = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const video = await Video.findById(id);
    video.views += 1;
    video.save();
    res.status(200); // okay
  } catch (error) {
    console.log(error);
    res.status(400); // not okay
  } finally {
    res.end(); // 뭐가 됐든 무조건 요청 끝냄
  }
};

// Add Comment 댓글 등록

export const postAddComment = async (req, res) => {
  const {
    params: { id },
    body: { comment },
    user,
  } = req;

  try {
    const video = await Video.findById(id);
    const newComment = await Comment.create({
      text: comment,
      creator: user._id,
    });
    video.comments.push(newComment.id); // 댓글의 id를 푸시. 나중에 populate로 id를 오브젝트로 확장시킨다.
    video.save();
  } catch (error) {
    console.log(error);
    res.status(400);
  } finally {
    res.end();
  }
};

export const postDeleteComment = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const comment = await Comment.findById(id);
    if (Object.is(comment.creator, req.user._id)) {
      // 권한이 없는 사용자가 직접 url로 접근할 경우 퇴출
      throw Error();
    } else {
      await Comment.findOneAndRemove({ _id: id });
    }
  } catch (error) {
    console.log(error);
    res.status(400);
  } finally {
    res.end();
  }
};

import passport from "passport";
import routes from "../routes";
import User from "../models/User";

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};
export const postJoin = async (req, res, next) => {
  const {
    // ES6 방식! req로부터 요소 받아들이기
    body: { name, email, password, passwordV },
  } = req;

  // 비밀번호 체크
  if (password !== passwordV) {
    res.status(400); // 잘못된 요청이라는 상태 코드 전달
    res.render("join", { pageTitle: "Join" });
  } else {
    try {
      const user = await User({
        name,
        email,
      });
      await User.register(user, password);
      next(); // 사용자를 로그인 시킨 상태로 홈페이지로 접속하도록 하기
    } catch (error) {
      console.log(error);
      res.redirect(routes.home);
    }
  }
};

export const getLogin = (req, res) => {
  res.render("login", { pageTitle: "Log In" });
};
export const postLogin = passport.authenticate("local", {
  successRedirect: routes.home,
  failureRedirect: routes.login,
});

export const githubLogin = passport.authenticate("github"); // passport.js의 github startegy를 사용하게 된다. 그리고 githubLoginCallback 함수를 콜백하게 된다.

export const githubLoginCallback = async (
  accessToken,
  refreshToken,
  profile,
  cb
) => {
  // console.log(accessToken, refreshToken, profile, cb);
  const {
    _json: { id, name, avatar_url: avatarUrl, email },
  } = profile;
  try {
    const user = await User.findOne({ email });
    if (user) {
      user.githubId = id;
      user.save();
      // 사용자를 찾았을 때 콜백함수(에러메시지=null:없다는 뜻, 유저정보) 실행
      return cb(null, user);
    }
    const newUser = await User.create({
      email,
      name,
      githubId: id,
      avatarUrl,
    });
    return cb(null, newUser);
  } catch (error) {
    console.log(error);
  }
};

export const postGithubLogin = (req, res) => {
  res.redirect(routes.home); // github에서 인증받고 돌아온 사용자를 로그인 시켜줌
};

export const logout = (req, res) => {
  req.logout(); // passportjs가 쿠키 등등 다 처리해준다고 한다.
  res.redirect(routes.home);
};

export const getMe = async (req, res) => {
  const id = req.user._id;
  const user = await User.findById(id).populate("videos");
  res.render("userDetail", { pageTitle: "User Detail", user }); // 현재 로그인 된 사용자 정보(req.user)를 전달한다.
};

export const userDetail = async (req, res) => {
  const {
    params: { id }, // users/:id 의 id를 받는다.
  } = req;
  try {
    // id에 해당하는 user를 찾아서 userDetail 페이지에 전달한다.
    const user = await User.findById(id).populate("videos");
    console.log(user);
    res.render("userDetail", {
      pageTitle: "User Detail",
      user,
      videos: user.videos,
    });
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

export const getEditProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "Edit Profile" });
export const postEditProfile = async (req, res) => {
  const {
    body: { name, email },
    file,
    user: { _id: id },
  } = req;
  try {
    await User.findByIdAndUpdate(id, {
      name,
      email,
      avatarUrl: file ? file.path : req.user.avatarUrl, // 프로필 사진을 바꾸지 않았을 경우 처리
    });
    // 현재 프로필 수정 정보를 미들웨어의 req.user에 업데이트
    const currentUser = await User.findById(id);
    req.user.name = currentUser.name;
    req.user.email = currentUser.email;
    req.user.avatarUrl = currentUser.avatarUrl;
    console.log(req.user);

    res.redirect(routes.me);
  } catch (error) {
    console.log(error);
    res.redirect(routes.editProfile);
  }
};

export const getChangePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "Change Password" });

export const postChangePassword = async (req, res) => {
  const {
    body: { oldPassword, newPassword, newPassword1 },
  } = req;
  try {
    if (newPassword !== newPassword1) {
      // 비밀번호 확인 절차 실패
      res.status(400); // 브라우저가 비밀번호 바뀌었고 업데이트하라는 팝업이 뜨지 않도록
      res.redirect(`/users/${routes.changePassword}`);
      return;
    }
    // req.user에 changePassword() 함수가 없음!
    // await req.user.changePassword(oldPassword, newPassword);

    // DB로부터 다시 User를 불러와 changePassword가 동작할 수 있도록 한다.
    const user = await User.findById(req.user._id);
    await user.changePassword(oldPassword, newPassword);

    res.redirect(routes.me);
  } catch (error) {
    console.log(error);
    res.status(400);
    res.redirect(`/users/${routes.changePassword}`);
  }
};

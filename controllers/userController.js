import routes from "../routes";

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};
export const postJoin = (req, res) => {
  const {
    // ES6 방식! req로부터 요소 받아들이기
    body: { name, email, password, passwordV },
  } = req;

  // 비밀번호 체크
  if (password != passwordV) {
    res.status(400); // 잘못된 요청이라는 상태 코드 전달
    res.render("join", { pageTitle: "Join" });
  } else {
    // To Do: Register User 유저 등록
    // To Do: Log User In 로그인 된 채로 home 접속
    res.redirect(routes.home);
  }
};

export const getLogin = (req, res) => {
  res.render("login", { pageTitle: "Log In" });
};
export const postLogin = (req, res) => {
  // To Do: 사용자 비밀번호가 데이터베이스에 있는 것과 같은지 검사해야 함
  res.redirect(routes.home);
};

export const logout = (req, res) => {
  // To Do: Process log out
  res.redirect(routes.home);
};

export const userDetail = (req, res) =>
  res.render("userDetail", { pageTitle: "User Detail" });
export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "Edit Profile" });
export const changePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "Change Password" });

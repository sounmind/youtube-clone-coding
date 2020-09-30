# [노마드코더 | 유튜브 클론 코딩 챌린지](https://nomadcoders.co/c/wetube-challenge/lobby)

[6주 과정 진도표](https://nomadcoders.co/faq/schedule-youtube) | 2020-9-14 ~ 2020-10-23

---

# TIL | 챌린지를 진행하며 내가 한 것과 배운 것

---

# 20-09-17 | 코드 챌린지 | Making Express Server, Handling Routes, Middleware

---

1. [node.js 다운로드](https://nodejs.org/ko/) → 자동으로 npm이 다운로드 된다
2. ([**npm 다운로드**](https://www.npmjs.com/))
3. 라우트들을 통제하기
   1. [\*\*자바스크립트 컴파일러 Babel](https://babeljs.io/docs/en/)\*\* 다운로드
   2. 자바스크립트 **[arrow function(화살표 함수)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/%EC%95%A0%EB%A1%9C%EC%9A%B0_%ED%8E%91%EC%85%98)** 사용해보기
   3. 새로 저장할 때마다 자동으로 어플리케이션을 재시작시켜주는 node.js 패키지 **[nodemon 설치](https://www.npmjs.com/package/nodemon)**
      - 설치할 때 devDependencies로 설치하기 → 패키지에 꼭 필요한 것이 아니라, 개발자에게 필요한 것이기 때문에 `npm install nodemon -D`로 설치하면 된다.
      - 바로 재시작을 하면 Babel이 컴파일할 시간이 없기 때문에 재시작 지연 시간을 2초로 두면 좋다.
4. [**npm으로 express 다운로드**](https://www.npmjs.com/package/express)
5. 나만의 express 서버 만들기
6. 미들웨어 만들기
   1. 로깅(logging)을 도와주는 **[Morgan 이라는 미들웨어](https://www.npmjs.com/package/morgan) 설치**
   2. 보안을 위한 미들웨어, **[Helmet](https://www.npmjs.com/package/helmet) 설치**
   3. request 객체에 접근하기 위한 미들웨어
      1. 유저 정보를 다루기 위한 [cookie parser 쿠키파서](http://expressjs.com/en/resources/middleware/cookie-parser.html)
      2. form 정보를 다루기 위한 [body parser 바디파서](http://expressjs.com/en/resources/middleware/body-parser.html)
7. 리다이렉트 하기

- 참고한 express 공식 문서
  1. 라우트(Route)를 받는 app.get()에 대해 알아보자 → [**app.get()**](https://expressjs.com/ko/4x/api.html#app.get)
  2. 미들웨어에 대해 더 알아보자 → [\*\*미들웨어 사용](https://expressjs.com/ko/guide/using-middleware.html) | [app.use](https://expressjs.com/ko/api.html#app.use)\*\*
  3. Response 객체엔 뭐가 있을까? **[Response](https://expressjs.com/ko/4x/api.html#res)**
     - **[res.send()](https://expressjs.com/ko/4x/api.html#res.send)**
  4. 왔어요? 돌아가셔요. → [res.redirect()](http://expressjs.com/ko/api.html#res.redirect)
- 추후에 할 것
  1. package.json 분석하기

# 20-09-18 | 코드 챌린지 | Routing, MVC Pattern,

---

## 내용

---

1. Javascirpt ES6 모듈 module 사용
2. Router

   > 라우팅은 URI(또는 경로) 및 특정한 HTTP 요청 메소드(GET, POST 등)인 특정 엔드포인트에 대한 클라이언트 요청에 애플리케이션이 응답하는 방법을 결정하는 것을 말합니다.

   - **[기본 라우팅 소개](https://expressjs.com/ko/starter/basic-routing.html)**

   > route들의 복잡함을 쪼개주기 위해 사용

   - Express [라우팅](https://expressjs.com/ko/guide/routing.html)
     - 클론코딩에서 ~router.js 에서 사용한 클래스

3. MVC Pattern

   [웹 개발 위한 기본 지식](https://www.notion.so/183a62819db842e78b00de8c205aed90)

4. 강사가 좋아하는 분할 정복 방법이란?

> Divide and Conquer

- 분할 정복법은 [알고리즘](https://ko.wikipedia.org/wiki/%EB%B6%84%ED%95%A0_%EC%A0%95%EB%B3%B5_%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98)으로 유명하다.
- 원리는 다음과 같다.

  > 해결하기 어려운 문제를 작은 문제로 분할하여 (그것을 하나씩 정복하여) 문제를 해결한다.

  - 위의 원리는 알고리즘 문제를 풀 때 더 직관적으로 다가온다. 웹 사이트나 서버를 개발할 때는 다음과 같은 원칙으로 변환해 받아들이면 좋겠다고 생각했다.
    - 하나의 함수에 하나의 기능만 구현한다.
    - 커다란 기능의 집합인 웹사이트를 상상한다. 그 통합적 기능을 하나하나 분할한다. 그것을 이해하기 쉽게 더 이상 쪼갤 수 없는 하나의 기능으로 쪼개어 나눈다. 하나씩 구현하여 합쳐나간다. 웹 사이트를 완성시킨다.

## 오늘 과제의 교훈

---

1. **웹 페이지 구조를 이해하는 것은 정말매우몹시 중요하다.** 제대로 이해하고 있지 않으면 아무것도 할 수가 없다. 그저 나타나는 오류에 수동적으로 대응해야 한다.
   - 라우트 - 라우터 - 컨트롤러 개념을 잘 알자.
     - 예를 들어 /api 에서 v1, v2로 분기하여 여러 갈래로 형성되는 route를 가진 서버를 만들 경우. **일일히 경로를 모두 써주는 것이 아니라,** 처음 `app.use()`로 받은 경로 **뒤에 붙여서 써주는 개념이다.**
     - 소스코드

- **알고 복사-붙여넣기하자**. 컨트롤러는 라우트를 통해 들어온 요청을 처리하는 객체다. 오늘 과제에서는 간단하게 화면에 글자만 뿌려줬다. 과제 진행 시 template도 생성하지 않았는데, `res.render()`를 쓰는 바람에 오류가 났었다.
- **변수 이름 제대로 파악하고 사용하는 것은 기본**이다. 이번 과제에서 적잖이 발목 잡혔다. 라우트, 라우터, 컨트롤러 변수 이름이 너무 많아서 헷갈렸는데 그러지 않을만한 나만의 규칙이나 컨벤션을 알아놓는 게 좋겠다.
  - express convention으로 검색해보니, [패키지](https://www.npmjs.com/package/express-convention-routes)도 있다!
  - 블로그 글도 있다. [Node.js/Express Convention-Based Routes](https://blog.codewithdan.com/node-js-express-convention-based-routes/) 위 패키지의 사용 제안서 같다...?

# 20-09-21 | 코드 챌린지 | Pug, fontawesome, res.locals, render()

---

### 이전부터 나를 괴롭혔던 오류를 고쳐보자...(결국 실패)

---

fontawesome을 링크(css, js)로 불러와지지 않는 오류가 있었다. 구글의 콘텐츠 보안정책이라고 하는데... 아래와 같은 오류 메시지가 뜬다.

```jsx
Refused to load the script 'https://kit.fontawesome.com/*ID*.js' because it violates the following Content Security Policy directive: "script-src 'self'". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback.
```

- 따라서 [구글의 콘텐츠 보안정책 문서](https://developers.google.com/web/fundamentals/security/csp?hl=ko)를 읽어보고 이 문제를 해결할 수 없나? ( 내가 판단하기에 신뢰할 수 있는 사이트, 스크립트 소스이니까 허용해줘! 를 어떻게 알리나 ) 생각해봤다.
- 결론 → 해결하지 못했다. 아무리 연구해봐도 아이콘이 제대로 나타나지 않고 보안정책 오류가 계속 나온다..ㅠㅠ 일단 여기에 시간이 너무 지체되면 안되니까 그냥 무시하고 진도를 나가도록 하자.

### middleware를 만들고 그 안에서 [res.locals](https://expressjs.com/ko/api.html#res.locals)에 변수를 선언-저장하면 그 변수들을 template에서 쓸 수 있다.

---

```jsx
// middlewares.js
import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "WeTube"; // title에 이 변수를 쓸 수 있다.
  res.locals.routes = routes; // partials/header에서 링크에 routes를 변수처럼 쓸 수 있다.
  next();
};
```

### [render 함수](https://expressjs.com/ko/api.html#res.render)의 첫번째 인자는 템플릿, 두번째 인자는 템플릿에 추가할 정보가 담긴 객체다.

---

```jsx
// userController.js
export const join = (req, res) => res.render("join", { pageTitle: "Join" });
export const login = (req, res) => res.render("login", { pageTitle: "Log In" });
export const logout = (req, res) =>
  res.render("logout", { pageTitle: "Log Out" });
export const userDetail = (req, res) =>
  res.render("userDetail", { pageTitle: "User Detail" });
export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "Edit Profile" });
export const changePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "Change Password" });
```

## 오늘 과제의 교훈

---

- 난이도는 쉬웠다. 강의 내용을 그대로 복습하고 재생산하는 정도였다. 웹 페이지 구현의 흐름을 어렴풋이 파악할 수 있었다.
- fontawesome과 구글보안정책은 ... 도저히 어떻게 해야할지 모르겠다. 나중에 슬랙 커뮤니티에 질문을 해봐야겠다.

# 20-09-22 | 퀴즈 | middleware, route, router, MVC pattern

---

- middleware(미들웨어), route(라우트), router(라우터), MVC pattern 개념을 복습했다.
  1. middleware는 3개의 함수 인자, request, response, next를 가진다
     1. request는 url로부터 들어온 정보를 다룬다. response는 서버가 클라이언트로 전송하는 내용을 다룬다. `next()`는 다음 middleware를 호출한다.
  2. 라우트들은 곧 미들웨어이다. `response.end()`로 연결을 끊을 수 있다.
  3. `app.use(<ROUTER>)`으로 해당 라우터를 어플리케이션에서 사용할 수 있다.
  4. `app.get()`은 GET requests에 의해 호출되고 `app.use()`는 모든 requests에 의해 호출된다.
  5. MVC는 Model View Controller를 뜻하는 디자인 패턴이다. 모델은 데이터를 저장하고 뷰는 사용자가 실제로 보는 것이고, 컨트롤러는 웹페이지 내부 로직을 담당한다.

# 20-09-23 | 퀴즈

---

- express가 pug를 사용하도록 하기 ( 선언, 디렉토리 설정, 렌더링)

### 선언

---

- `app.set("view engine", "pug")`
- `app.set("views", "/myDirectory")` → 커스텀 디렉토리 설정
- `res.render(<Template_name>)` → render()함수에 첫번째 인자로 템플릿인 pug 파일 이름을 넣어주면 된다.

  - `res.render(<Template_name>, {name: "<Your_name>"})` → 컨트롤러에서 렌더링할 때 두번째 인자로 변수이름을 선언하고 값을 대입할 수 있다.

    ```jsx
    // userController.js
    export const join = (req, res) => res.render("join", { pageTitle: "Join" });
    export const login = (req, res) =>
      res.render("login", { pageTitle: "Log In" });
    export const logout = (req, res) =>
      res.render("logout", { pageTitle: "Log Out" });
    export const userDetail = (req, res) =>
      res.render("userDetail", { pageTitle: "User Detail" });
    export const editProfile = (req, res) =>
      res.render("editProfile", { pageTitle: "Edit Profile" });
    export const changePassword = (req, res) =>
      res.render("changePassword", { pageTitle: "Change Password" });
    ```

### 디렉토리 설정

---

- `/views` → pug 파일들이 들어가는 디렉토리 ( 현재 디폴트로 설정된 폴더)
  - `/layouts` → 레이아웃 폴더,
    - `main.pug` → 메인 페이지로 쓸 html 파일
  - `/partials` → 재사용이 많이 되는 html의 일부분
    - `footer.pug`
    - `header.pug`
  - 기타 다른 페이지의 pug 파일들 ( login.pug, home.pug, deleteVideo.pug ... )

### pug의 편리한 html tag 사용법

---

- `<span class="className">` == `span.hello`
- `<div class="className"></div>`==`div.hello`==`.hello`
- `middlewares.js`

  ```jsx
  import routes from "./routes";

  export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "WeTube"; // title에 이 변수를 쓸 수 있다.
    res.locals.routes = routes; // partials/header에서 링크에 routes를 변수처럼 쓸 수 있다.
    next();
  };
  ```

# 20-09-24 ~ 20-09-25 | 코드 챌린지

---

## 20-09-24 | 강의 듣기 (~#2.20)

---

### #2.18 | Search Controller

---

1. views

   - form을 만들어 사용자의 입력 정보를 get method로 정보를 정해진 url로 보낸다.

   ```html
   .header__column form(action=routes.search, method="get")
   <!-- 폼을 제출하면 get 방식으로 정보를 가진채 routes.search로 url 이동. /search?term=<somethingYouTyped> -->
   input(type="text", placeholder="Search by term...", name="term")
   ```

2. controller

   - controller가 query에 접근하려면 method가 get이어야 한다.
   - request 객체에서 내가 원하는 요소를 찾는다.

     ```jsx
     export const search = (req, res) => {
       const {
         query: { term: searchingBy },
       } = req; // ES6 이전의 방식: const searchingBy = req.query.term;
       res.render("search", { pageTitle: "Search", searchingBy: searchingBy }); // 그냥 serachingBy만 입력해줘도 Babel이 같은 의미로 해석해준다.
     };
     ```

   - 그것을 랜더링 한다.

3. views

   - 출력 결과를 사용자에게 보여준다.

   ```html
   extends layouts/main block content .search_header h3 Searching by
   #{searchingBy}
   <!-- 이것이 보이려면 컨트롤러를 수정해야 함 -->
   ```

### #2.19 | Join, Log In HTML

---

- pug 에서 띄워 쓴 텍스트를 작성할 때 첫 단어를 태그로 취급하므로 `|`를 앞에 써줘서 `|`뒤가 텍스트라는 것을 알려줄 수 있다.

### #2.20 | Change Profile HTML

---

- edit-profile , id 인식 오류

## 20-09-25 | 강의 듣기(~#2.25)

---

### #2.21 | Home Controller

---

1. fake db (비디오 정보의 배열)를 만들고 export 한 다음
2. video controller로 배열을 전달했다.
3. home.pug 템플릿에서 each in 함수를 써서 배열을 반복 출력했다.

   - `h1=`, `p=`처럼 `=`을 붙여 써줘야 한다.

     ```html
     extends layouts/main block content .videos each video in videos h1=
     video.title p= video.description
     ```

### #2.22 | Home Controller Part Two | mixin: 웹사이트에서 반복되는 html를 재사용하기

---

- 목표: home에서도 비디오가 보이고, 누군가의 profile에서도 그 비디오를 볼 수 있어야 한다.
- mixin은 pug 함수의 일종

> 또, CSP 이슈가 터졌다... 개 같은 거

코멘트를 읽어보자.

> 미디어 소스나 폰트어썸 사용 안되시는 분들이 많은 것 같은데 앞서 추가했던 helmet의 미들웨어 중에 helmet.contentSecurityPolicy()이 원인이 되는 것 같습니다. 과거에는 app.use(helmet())을 사용할 경우 기본적인 보안설정만 해주었는데 현재는 csp설정도 포함되어 이러한 문제가 발생하는 것 같습니다.
> 참조 링크:
> [https://www.npmjs.com/package/helmet](https://www.npmjs.com/package/helmet)
> [https://7stocks.tistory.com/94](https://7stocks.tistory.com/94)
> [https://www.npmjs.com/package/helmet-csp](https://www.npmjs.com/package/helmet-csp)

> 밑에 @luceverus 님 댓글 덕분에 저도 찾아봤는데, 우리가 미들웨어어 넣어놓은 helmet 에서 contentSecurityPolicy()를 해놔서 동영상이 안나오는것 같아요.
> 그래서 찾아보니까
> app.use(helmet()); 에서
> app.use( helmet({ contentSecurityPolicy: false, })); 로 설정 하면 contentSecurityPolicy만 끌 수 있어요. 당분간 이렇게 쓰시고 나중에는 보안을 위해서 다시 app.use(helmet());로 하는게 좋을듯 해요.

### #2.23 | Join Controller

---

> 로직 → 누군가가 회원가입을 하면 자동으로 Login이 된 상태로 Home 화면으로 이동하고 싶다.

1. userController의 join 함수 변경 → getJoin, postJoin 으로 분리

   - /join 경로로 POST 하기 위한 설정이나 코드가 아직 없기 때문.
   - Join form을 작성하면 post 방식으로 받아 들이도록 한다.
     - 라우터와 컨트롤러를 적절히 변경한다.

   ```jsx
   // globalRouter.js
   import express from "express";
   import routes from "../routes";
   import { home, search } from "../controllers/videoController";
   import {
     getJoin,
     postJoin,
     login,
     logout,
   } from "../controllers/userController";

   const globalRouter = express.Router();

   globalRouter.get(routes.join, getJoin);
   globalRouter.post(routes.join, postJoin);
   ```

   ```jsx
   // userController.js
   import routes from "../routes";

   export const getJoin = (req, res) => {
     res.render("join", { pageTitle: "Join" });
   };
   export const postJoin = (req, res) => {
     const {
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
   ```

- 상태 코드status code → 웹 사이트가 이해할 수 있는 코드

### #2.24 | Log In and User Profile Controller

---

1. login도 postLogin과 getLogin으로 분리
2. middleware.js에서 로그인 여부를 확인하기 위한 fake data 추가
3. header.pug 변경

   - 로그인이 확인되면, upload, profile, log out 이 나타나도록 수정

   > profile을 클릭했을 때 `/:id`로 가는 경로에 문제가 있다.

   > express는 저 `:id`를 id라는 변수에 있는 값을 대입하는 것으로 '잘' 이해하지만 html 은 그렇지 않다!

   - routes.js의 userDetail을 함수로 바꾼다.
   - userRouter.js에서 userDetail을 위에서 바꾼대로 변경해준다. 함수가 실제로 실행되어 id 값을 리턴해야 된다.
   - 하지만 템플릿에서는 인자 없이 실행되면 안 된다. user.id를 인자로 입력해야 한다.
     - header.pug 변경
   - 경로에 id가 들어가 있는 videoDetail도 수정해야 한다.
     - routes.js에서 routes 객체에서 videoDetail을 함수로 만들어주기

### #2.25 | More Controllers ( video detail, logout, upload )

---

> 비디오를 클릭하면 비디오 상세 설명 페이지로 이동하도록 하고 싶다.

- videoBlock.pug에서 mixin 안의 내용을 수행한다. 비디오 제목과 조회수를 클릭하면 비디오 상세페이지로 가도록 링크를 만든다.
  - 라우트를 써줄 때 videoDetail의 경우 함수이니 videoDetail()처럼 괄호를 붙여줘야 하고 템플릿에서는 함수에 인자가 필요하므로 인자를 넣어준다. videoDetail(video.id)
  - id를 받도록 home.pug에서도 id를 적어준다.
- 오류가 생겼는데, videoRouter에서 route를 적어줄 때 괄호를 적어주지 않아 함수로 취급이 안되어서 그렇다.

> log out

- 로그아웃 프로세싱은 나중으로 미루고
- home으로 리다이렉트 시키도록 작성

> upload

- 기존 경로는 /upload인데, /videos/upload로 가야한다.
- header.pug에서 수정
- upload.pug 수정
  - getUpload와 postUpload로 분리
- videoController.js 수정
  - postUpload 함수가 특정(임의로 fakeDB에 있는 id값 입력) id의 videoDetail 페이지로 리다이렉트
- videoRouter.js 수정

> 폼 입력에 required=true 추가

## 20-09-24 ~ 25 코드 챌린지

---

- 필요했던 개념
  - 서버 동작 방식, 특히 컨트롤러
  - PUG 와 Mixin
  - GET, POST 요청에서 어떻게 원하는 내용을 추출할 것인가
  - API 함수 불러온 것 이해하고 사용하기
  - 방대한 JSON 데이터 자료에서 원하는 내용을 어떻게 추출할 것인가

# 20-09-28 | ~ #3.4 | 강의 듣고 퀴즈

---

1. 컨트롤러에서, `/user/:id`와 같은 라우트의 ID는
   - `req.params.id` 를 사용해 얻을 수 있다.
2. 컨트롤러에서 `/user?id=123`와 같은 라우트의 ID는
   - `req.query.id`를 사용해 얻을 수 있다.
3. Form 에서 POST와 GET 메소드 차이 알기
4. MongoDB의 특징에 대해 알기
5. Mongo와 Mongoosejs의 차이 알기
6. dotenv가 무엇이며 왜 사용하는지 알기
7. Schema는 무엇인가
8. Mongo는 데이터를 어떻게, 어떤 형식으로 저장하는가?
9. 다른 모델의 데이터를 어떻게 저장할 것인가?
10. `함수 이름`과 `함수 이름()`의 차이
11. Mongoose에게 특정 스키마의 모델을 만들었다고 선언하고, export하고, 첫 시작할 때 DB를 연결하는 과정 이해

### #3.0 | MongoDB

---

- mongoDB 다운로드
  - noSQL
    - 규칙이 적고 유연해서 많은 부분을 수정할 수 있다.
- mongoDB adapter → mongoosejs 다운로드

### #3.1 | Connecting to MongoDB

---

- dotenv 설치 ( 묻지도 따지지도 말고)
  - DB를 숨기고 싶을 때
- db.js 다 지우고 mongoDB 연결하기
- videoController에서 db.js import 하는 것 지우기

### #3.2 | Configuring Dot Env

---

- .env 파일을 만들고 그곳에 숨기고 싶은 키나 정보를 저장
- 키를 쓰고 싶은 js 파일에서 import 한 다음, `process.env.<변수이름>`으로 끌어다 쓸 수 있다.

  ```jsx
  import dotenv from "dotenv";
  dotenv.config();
  const PORT = process.env.PORT || 4000;
  ```

### #3.3 | Video Model

---

- Model 폴더를 만들고 그 안에 Video.js 파일 만들기
  - VideoSchema 작성
    - [Mongoose 스키마 정의 공식 문서](https://mongoosejs.com/docs/guide.html#definition)

### #3.4 | Comment Model

---

- /Model/Comment.js 파일 만들고 CommentSchema 작성하기
- Comment와 Video를 어떻게 연결할 것인가?
  1. Comment에 Video ID 연결하기
  2. Video에 Comment ID 연결하기

```jsx
// Models/Video.js
import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
  fileUrl: {
    type: String,
    required: "File URL is required",
  },
  title: {
    type: String,
    required: "Title is required",
  },
  description: String,
  views: {
    type: Number,
    default: 0,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
  // 비디오-댓글 연결 첫번째 방법
  // video: 1, // 비디오 ID

  // 비디오-댓글 연결 두번째 방법
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});

const model = mongoose.model("Video", VideoSchema);
export default model;
```

```jsx
// Models/Comment.js
import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: "Text is required",
  },
  createAt: {
    type: Date,
    default: Date.now,
  },

  // 비디오 댓글 연결 첫번째 방법
  // video: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "Video"
  // }
});

const model = mongoose.model("Comment", CommentSchema);
export default model;
```

- init.js에 comment 모델 import 하기

# 20-09-29 | 코드 챌린지 | Forms and Redirects

---

- 알아야 했던 것

  - FORM 지식
    - [textarea](https://www.codingfactory.net/11611)
  - 문자열 쪼개기 [split()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/split)
  - 컨트롤러 함수 작성

    ```jsx
    // movieController.js

    // other functions

    export const postAddMovie = (req, res) => {
      const {
        body: { title, synopsis, genres },
      } = req;
      const genresSplit = genres.split(",");
      const movie = {
        title: `${title}`,
        synopsis: `${synopsis}`,
        genres: genresSplit,
      };
      addMovie(movie);
      res.redirect("/");
    };
    ```

# 20-09-30 ~ 20-10-02 | ~#3.12 | 코드 챌린지

---

## 20-09-30 | 강의 듣기

---

### #3.5 | Home Controller Finished

---

- Javascript는 한 번에 여러 일을 어떻게 할 수 있을까?
- `async`, `await`
  - async 아래 await는 await 가 있는 줄의 코드가 끝날 때(오류가 생기더라도)까지 다음 코드를 실행하지 않는 것을 말한다.
- 에러 처리
  - try, catch

### #3.6 | Uploading and Creating a Video

---

> 유저가 비디오파일을 어딘가에 업로드한 다음,
> 그 파일 경로를 데이터베이스에 넣고 그 경로로 비디오를 생성한다. → 미들웨어가 중요?!

- 비디오 이외의 파일을 업로드할 수 없도록 하기
- [파일의 url을 반환하는 미들웨어 `multer`](https://github.com/expressjs/multer/blob/master/doc/README-ko.md)
  - Upload From의 enctype에 multipart/form-data를 추가해야 함
    → 'file'을 보내는 것이기 때문에 form의 encoding이 달라야 하기 때문
- middleware.js 수정
- videoRouter.js 수정
- videoController.js 수정

  - 오류 발생과 해결

    req 객체에서 원하는 요소를 받아오는 ES6 방식에서 의미가 헷갈려서 오류가 계속 발생했다.

    예를 들어, 아래와 같은 상황에서는

    ```jsx
    export const postUpload = async (req, res) => {
      const {
        body: { title: titleName, description: descriptionName },
        file: { path: pathName },
      } = req;
    ```

    - req 객체의 body 속성 안의 title 속성의 값을 `const titleName` 으로 받아온다는 의미다. 좌측은 객체의 속성의 이름이고, 우측은 그것을 쓸 수 있는 변수 혹은 상수 이름이다. (\*변수로는 선언해보지 않아서 잘 모르겠다)
    - 하지만, 아래(`path`)와 같이 title 속성의 값만 쓰고 다른 곳에서 재사용 할 수 있다. 이 때 **newVideo의 fileUrl**에는 **req 객체의 file 속성의 path 속성의 값이 대입된다!**

    ```jsx
    export const postUpload = async (req, res) => {
      console.log(req);
      const {
        body: { title: title, description: description },
        file: { path },
      } = req;

      // 비디오 데이터베이스에 데이터 추가
      const newVideo = await Video.create({
        fileUrl: path,
        title,
        description,
      });
    ```

### #3.7 | Uploading and Creating a Video part Two

---

- videos 폴더 삭제
- mongoDB 서버를 실행시켜 videos 에 있는 데이터 삭제
- multer 미들웨어 경로 수정 → uploads/videos
- 서버 실행 → 오류 발생 → 왜? uploads/ 경로를 다룰 라우터가 없기 때문
- app.js에 미들웨어를 추가한다.

  ```jsx
  app.use("/uploads", express.static("uploads"));
  ```

  - app.use("/uploads", express.static("uploads"));
  - static() 이란? → 주어진 경로에 파일을 확인하고 serve하는 미들웨어 함수를 만든다.

    var e.static: (root: string, options?: serveStatic.ServeStaticOptions) => Handler

    **Create a new middleware function to serve files from within a given root directory**. The file to serve will be determined by combining req.url with the provided root directory. When a file is not found, instead of sending a 404 response, this module will instead call next() to move on to the next middleware, allowing for stacking and fall-backs.

  비디오가 계속 안 나오길래 파일을 분석했다.
  home.pug파일에서 mixins/videoBlock.pug에 videoFile 키로 videoFile 값을 넣어주고 있었는데 오류가 안 나고 있었다. 신기하다!? 그래서 키 이름과 값을 videoUrl과 videoUrl로 바꿔줬다.

  videoFile이라는 값은 upload.pug의 form에서 비디오 파일을 videoFile이라는 name으로 받아들이고 있었는데, 이것은 middlewares.js 의 uploadVideo 함수에서 사용하고 있었다.
  미들웨어를 좀 더 들여다보았다.

  - `.single(fieldname)`에 대한 설명은 [공식문서](https://github.com/expressjs/multer/blob/master/doc/README-ko.md#singlefieldname)에서 살펴볼 수 있었다

```jsx
// middlewares.js

import routes from "./routes";
import multer from "multer";

export const localsMiddleware = (req, res, next) => {
  // 생략
};

export const multerVideo = multer({ dest: "uploads/videos/" });

// single -> 하나의 파일만 업로드 할 수 있다
export const uploadVideo = multerVideo.single("videoFile"); // form에서 받아온 name
// .single(fieldname): 인자에 명시된 이름의 단수 파일을 전달 받는다. 이 파일은 req.file에 저장된다.
```

- 이해완료!
- 시간이 많이 지났으므로, 내일 또 듣자!

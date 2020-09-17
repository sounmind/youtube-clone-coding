# [노마드코더 | 유튜브 클론 코딩 챌린지](https://nomadcoders.co/c/wetube-challenge/lobby)

[6주 과정 진도표](https://nomadcoders.co/faq/schedule-youtube) | 2020-9-14 ~ 2020-10-23

---

# TIL | 챌린지를 진행하며 내가 한 것과 배운 것

---

### 20-09-17 | Making Express Server, Handling Routes, Middleware

---

1. [node.js 다운로드](https://nodejs.org/ko/) → 자동으로 npm이 다운로드 된다
2. ([**npm 다운로드**](https://www.npmjs.com/))
3. [**npm으로 express 다운로드**](https://www.npmjs.com/package/express)
4. 나만의 express 서버 만들기
5. 라우트들을 통제하기
    1. [**자바스크립트 컴파일러 Babel](https://babeljs.io/docs/en/)** 다운로드
    2. 자바스크립트 **[arrow function(화살표 함수)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/%EC%95%A0%EB%A1%9C%EC%9A%B0_%ED%8E%91%EC%85%98)** 사용해보기
    3. 새로 저장할 때마다 자동으로 어플리케이션을 재시작시켜주는 node.js 패키지 **[nodemon 설치](https://www.npmjs.com/package/nodemon)**
        - 설치할 때 devDependencies로 설치하기 → 패키지에 꼭 필요한 것이 아니라, 개발자에게 필요한 것이기 때문에 `npm install nodemon -D`로 설치하면 된다.
        - 바로 재시작을 하면 Babel이 컴파일할 시간이 없기 때문에 재시작 지연 시간을 2초로 두면 좋다.
6. 미들웨어 만들기
    1. 로깅(logging)을 도와주는 **[Morgan 이라는 미들웨어](https://www.npmjs.com/package/morgan) 설치**
    2. 보안을 위한 미들웨어, **[Helmet](https://www.npmjs.com/package/helmet) 설치**
    3. request 객체에 접근하기 위한 미들웨어
        1. 유저 정보를 다루기 위한 [cookie parser 쿠키파서](http://expressjs.com/en/resources/middleware/cookie-parser.html)
        2. form 정보를 다루기 위한 [body parser 바디파서](http://expressjs.com/en/resources/middleware/body-parser.html)
7. 리다이렉트 하기
- 참고한 express 공식 문서
    1. 라우트(Route)를 받는 app.get()에 대해 알아보자 → [**app.get()**](https://expressjs.com/ko/4x/api.html#app.get)
    2. 미들웨어에 대해 더 알아보자 → [**미들웨어 사용](https://expressjs.com/ko/guide/using-middleware.html) | [app.use](https://expressjs.com/ko/api.html#app.use)**
    3. Response 객체엔 뭐가 있을까? **[Response](https://expressjs.com/ko/4x/api.html#res)**
        - **[res.send()](https://expressjs.com/ko/4x/api.html#res.send)**
    4. 왔어요? 돌아가셔요. → [res.redirect()](http://expressjs.com/ko/api.html#res.redirect)
- 추후에 할 것
    1. package.json 분석하기

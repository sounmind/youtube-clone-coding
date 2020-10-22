# 유튜브 클론 코딩
## 강의 노트

2020-08-05
### Babel
- 이것은 뭐하는 놈인가?
    - 자바스크립트 컴파일러이다. 개떡 같이 써도 찰떡 같이 컴파일 해준다고 한다.

### Middlewares
- 오류를 통해 알게 된 것
    - json 파일은 매우 민감해서 뭐 잘못 건드리면 안 된다.
    - dependency 를 아주 잘 설정해줘야 한다.
- 미들웨어란?
    - 클라이언트가 웹 브라우저에게 응답을 요청하고 브라우저가 응답을 해주기 전에 거치는 특정 절차를 미들웨어라고 한다. 여기서 많은, 필요한 작업들을 할 수 있다.
- morgan 은 freaking awesome한 미들웨어이다. 어디서 뭐가 일어나는지 기록하는 logging을 도와준다.
- morgan 말고도 helmet이라는 것도 있다.
    - 보안을 위한 것들을 추가해주는 미들웨어이다.
- 가끔은 middleware가 연결을 끊을 때도 있다. 미들웨어로 쓰이는 함수에 next()가 아니라 res.send("~~~")만 있으면 된다.
- body parser
    - 예를 들어 form 같은 양식에 적혀져 보내지는 요청 정보(request object)에 서버가 접근하길 원한다면 필요하다. 다시말해, body로부터 정보를 얻을 수 있게 한다.
- cookie parse
    - session을 다루기 위해 유저의 정보를 쿠키에 저장하기 때문에 필요하다.

---

2020-08-07
### module
- init.js, app.js로 파일 구성을 바꾸기.
    - app.js를 모듈화하여 init.js에서 쓸 수 있도록 하기. 그럼 코드를 공유할 수 있다.
- 모듈화하려는 파일 끝에 `export default app;`를 적는다.
- 끌어다 쓰려는 파일 앞에 `import app from "app"`이라 적는다.

### 2.8 Express Core: Routing
- router란?
    - router란 route들의 복잡함을 쪼개주는데 사용할 수 있다. (/user/password/change/logout ... 이런 식으로 복잡하게 만들어질 때)

### 2.9 MVC Pattern
- MVC = Model, View, Control
    - Model 데이터
    - View 어떻게 그 데이터가 보이나
    - Control 데이터를 찾는 함수
    - Pattern 구조
- divide-conquer 원칙을 따르는 router / routes 구조 만들기
    - 모든 라우트가 모아져 있는 routes.js
    - 유형별 라우터
      - globalRouter
      - userRouter
      - videoRouter

---

2020-08-13
### Pug
- Pug에서 html을 사용하려면 ...
    - 꺽은 괄호('<>')가 없고, tab이 있다.
- 레이아웃 기능
    - 세상에 넘 신기해. 레이아웃을 만들고 레이아웃을 적용할 파일 상단에 extends만 하면, content에 그 페이지 고유의 내용을 쓰면 된다.
- Partials
    - FUCKING ERROR OCCRUED awesome font 임포트가 안 된다...
        - 왜 embed code를 받고 그대로 하는데 실행이 안 되는 걸까 방법을 모르겠어서 답답하다...! 일단 오늘은 여기까지 해야겠다.

2020-08-14
### 














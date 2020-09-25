import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "WeTube"; // title에 이 변수를 쓸 수 있다.
    res.locals.routes = routes; // partials/header에서 링크에 routes를 변수처럼 쓸 수 있다.
    res.locals.user = { // login 확인하기 위한 fake data
        isAuthenticated: true,
        id: 1
    }
    next();
};
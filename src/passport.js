import dotenv from "dotenv";
import passport from "passport";
import GithubStrategy from "passport-github";
import User from "./models/User";
import routes from "./routes";
import { githubLoginCallback } from "./controllers/userController";

dotenv.config();

passport.use(User.createStrategy());

passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GH_ID,
      clientSecret: process.env.GH_SECRET,
      callbackURL: process.env.PRODUCTION
        ? `https://lit-badlands-93629.herokuapp.com${routes.githubCallback}`
        : `http://localhost:4000${routes.githubCallback}`,
    },
    githubLoginCallback
  )
);

// 2020-10-22 commented
// passport.serializeUser(function (user, done) {
//   done(null, user); // 왜 이렇게 하면 github session serialize 오류가 해결되는 것일까?
// });

// passport.deserializeUser(function (user, done) {
//   done(null, user);
// });

// 2020-10-22 added
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

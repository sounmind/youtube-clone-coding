import dotenv from "dotenv";
import passport from "passport";
import GithubStrategy from "passport-github";
import User from "./models/User";

dotenv.config();

passport.use(User.createStrategy());

passport.use(
  new GithubStrategy({
    clientID: process.env.GH_ID,
    clientSecret: process.env.GH_SECRET,
    callbackURL: "http://localhost:4000/auth/guthub/callback",
  }),
  githubLoginCallback
);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

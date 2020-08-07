import express from "express";

export const userRouter = express.Router(); // default로 export 한 것이 아니라, 이 하나만 export한 것임.

userRouter.get("/", (req, res)=> res.send('user index'));
userRouter.get("/edit", (req, res)=> res.send('user edit'));
userRouter.get("/password", (req, res)=> res.send('user password'));


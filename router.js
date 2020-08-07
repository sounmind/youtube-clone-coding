import express from "express";

export const userRouter = express.Router(); // default�� export �� ���� �ƴ϶�, �� �ϳ��� export�� ����.

userRouter.get("/", (req, res)=> res.send('user index'));
userRouter.get("/edit", (req, res)=> res.send('user edit'));
userRouter.get("/password", (req, res)=> res.send('user password'));


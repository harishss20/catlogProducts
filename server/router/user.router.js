import express from "express";
import { submitUserForm } from "../controller/user.controller.js";

const userRouter = express.Router();

userRouter.post("/", submitUserForm);

export default userRouter;

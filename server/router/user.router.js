import express from "express";
import { submitUserForm, getAllUser } from "../controller/user.controller.js";

const userRouter = express.Router();

userRouter.post("/", submitUserForm);

userRouter.get("/", getAllUser);

export default userRouter;

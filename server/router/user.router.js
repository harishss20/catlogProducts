import express from "express";
import {
  submitUserForm,
  getAllUser,
  deleteUser,
} from "../controller/user.controller.js";

const userRouter = express.Router();

userRouter.post("/", submitUserForm);
userRouter.delete("/", deleteUser);
userRouter.get("/", getAllUser);

export default userRouter;

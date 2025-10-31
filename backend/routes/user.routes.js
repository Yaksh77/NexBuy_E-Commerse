import { Router } from "express";
import { getCurrentUser } from "../controller/user.controller.js";
import isAuth from "../middleware/isAuth.js";

const userRouter = Router();

userRouter.get("/get-current-user", isAuth, getCurrentUser);
export default userRouter;

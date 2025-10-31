import { Router } from "express";
import { getAdmin, getCurrentUser } from "../controller/user.controller.js";
import isAuth from "../middleware/isAuth.js";
import adminAuth from "../middleware/adminAuth.js";

const userRouter = Router();

userRouter.get("/get-current-user", isAuth, getCurrentUser);
userRouter.get("/get-admin", adminAuth, getAdmin);
export default userRouter;

import { Router } from "express";
import { login, logout, registration } from "../controller/auth.controller.js";
const authRouter = Router();

authRouter.post("/registration", registration);
authRouter.post("/login", login);
authRouter.get("/logout", logout);
export default authRouter;

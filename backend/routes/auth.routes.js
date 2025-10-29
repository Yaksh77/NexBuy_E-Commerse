import { Router } from "express";
import {
  googleLogin,
  login,
  logout,
  registration,
} from "../controller/auth.controller.js";
const authRouter = Router();

authRouter.post("/registration", registration);
authRouter.post("/login", login);
authRouter.get("/logout", logout);
authRouter.post("/google-login", googleLogin);
export default authRouter;

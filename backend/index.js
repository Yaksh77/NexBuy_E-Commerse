import express from "express";
import dotenv from "dotenv";
import { connectToDB } from "./config/db.js";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import cors from "cors";
dotenv.config({
  path: "./.env",
});

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

app.listen(process.env.PORT, () => {
  console.log("Server runs perfectly ✔️");
  connectToDB();
});

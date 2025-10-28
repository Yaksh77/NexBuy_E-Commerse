import express from "express";
import dotenv from "dotenv";
import { connectToDB } from "./config/db.js";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.routes.js";
dotenv.config({
  path: "./.env",
});

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);

app.listen(process.env.PORT, () => {
  console.log("Server runs perfectly ✔️");
  connectToDB();
});

import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});
import express from "express";
import { connectToDB } from "./config/db.js";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import cors from "cors";
import prdouctRouter from "./routes/product.routes.js";
import cartRouter from "./routes/cart.routes.js";
import orderRouter from "./routes/order.routes.js";

const app = express();
app.use(
  cors({
    origin: ["https://nexbuy-e-commerse-frontend.onrender.com"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/product", prdouctRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.listen(process.env.PORT, () => {
  console.log("Server runs perfectly ✔️");
  connectToDB();
});

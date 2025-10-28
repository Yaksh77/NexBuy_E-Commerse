import express from "express";
import dotenv from "dotenv";
import { connectToDB } from "./config/db.js";
dotenv.config({
  path: "./.env",
});

const app = express();

app.listen(process.env.PORT, () => {
  console.log("Server runs perfectly ✔️");
  connectToDB();
});

import express from "express";
import isAuth from "../middleware/isAuth.js";
import { placeOrder } from "../controller/order.controller.js";
const orderRouter = express.Router();

orderRouter.post("/placeorder", isAuth, placeOrder);

export default orderRouter;

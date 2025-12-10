import express from "express";
import isAuth from "../middleware/isAuth.js";
import { placeOrder, userOrders } from "../controller/order.controller.js";
const orderRouter = express.Router();

orderRouter.post("/placeorder", isAuth, placeOrder);
orderRouter.post("/userorder", isAuth, userOrders);

export default orderRouter;

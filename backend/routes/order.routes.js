import express from "express";
import isAuth from "../middleware/isAuth.js";
import {
  allOrders,
  placeOrder,
  placeOrderRazorpay,
  updateStatus,
  userOrders,
  verifyRazorpay,
} from "../controller/order.controller.js";
import adminAuth from "../middleware/adminAuth.js";
const orderRouter = express.Router();

orderRouter.post("/placeorder", isAuth, placeOrder);
orderRouter.post("/userorder", isAuth, userOrders);
orderRouter.post("/razorpay", isAuth, placeOrderRazorpay);
orderRouter.post("/verify-razorpay", isAuth, verifyRazorpay);

// For Admin
orderRouter.get("/list-orders", adminAuth, allOrders);
orderRouter.post("/update-status", adminAuth, updateStatus);

export default orderRouter;
